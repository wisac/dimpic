import sharp from "sharp";
import { printUsage } from "./getHelp.js";

/**
 * Resizes an image file to the given dimensions.
 * @param {string} inputFile - The path to the input image file.
 * @param {number} width - The desired width of the output image.
 * @param {number} [height] - The desired height of the output image. If not provided, the aspect ratio will be maintained.
 * @returns {Promise<Buffer>} - A Promise that resolves with the resized image as a Buffer.
 */
export default function resize(inputFile, width, height) {
   //get given dimensions
   const size = width && height ? [width, height] : [width];

   // check if file is given
   if (!inputFile) {
      printUsage();
      // throw new Error("Missing input file");
   }

   // if no dimensions are given, return original file
   if (!width && !height) {
      return sharp(inputFile).toBuffer();
   }

   console.log("Resizing...");
   // resize and return buffer
   return sharp(inputFile)
      .resize(...size)
      .toBuffer();
}
