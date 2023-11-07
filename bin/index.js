#!/usr/bin/env node
/**
 * @file This file contains the main function that starts the compression process for images.
 * @summary The function reads input data, validates it, and then compresses the images.
 * @description The function imports custom modules for saving files, compressing images, and resizing images. It then reads input data from the user and validates it. If the input data is valid, it compresses the images by resizing them and then compressing them. Finally, it saves the compressed images to the file system.
 * @requires saveFile
 * @requires compress
 * @requires resize
 * @requires getOutputPath
 * @requires parsedInput
 * @requires qualityValid
 * @requires sideValid
 */

import saveFile from "../lib/saveFile.js";
import compress from "../lib/compress.js";
import resize from "../lib/resize.js";
import { getOutputPath, parsedInput } from "../lib/inputHandle.js";


const start = () => {
   const { files, options } = parsedInput;

   // validate quality
   if (!qualityValid(options.quality)) {
      console.log(
         "Quality must be a number between 0 and 100. See 'dimpic --help' for more info."
      );
      return;
   }

   //validate width
   if (!sideValid(options.width)) {
      console.log(
         "Width must be a number greater than 0. See 'dimpic --help' for more info."
      );
      return;
   }
   // validate height
   if (!sideValid(options.height)) {
      console.log(
         "Height must be a number greater than 0. See 'dimpic --help' for more info."
      );
      return;
   }

   // get quality
   const quality = parseInt(options.quality)
      ? parseInt(options.quality)
      : undefined;

   // get width
   const width = parseInt(options.width) ? parseInt(options.width) : undefined;

   // get height
   const height = parseInt(options.height)
      ? parseInt(options.height)
      : undefined;

   console.log(options);

   console.log("all files = ,", files);

   console.log(quality, width, height);

   // start compression
   files.forEach((file) => {
      resize(file, width, height)
         .then((res) => {
            compress(res, quality).then((res) => {
               saveFile(res, getOutputPath(file));
            });
         })
         .catch((err) => {
            console.log(err);
         });
   });
};

/**
 * Checks if the quality parameter is valid.
 * @param {number} quality - The quality parameter to check.
 * @returns {boolean} Returns true if the quality parameter is valid, false otherwise.
 */
function qualityValid(quality) {
   if (quality === undefined) {
      console.log("[quality undefined]");
      return true;
   }

   if (parseInt(quality) && quality >= 0 && quality <= 100) {
      console.log("[quality is defined and number]");
      return true;
   }

   return false;
}

/**
 * Checks if a given side is valid.
 * @param {number} side - The side to be checked.
 * @returns {boolean} - Returns true if the side is valid, otherwise false.
 */
function sideValid(side) {
   if (side === undefined) return true;

   if (parseInt(side) && side > 0) return true;

   return false;
}

//start compression
start();
