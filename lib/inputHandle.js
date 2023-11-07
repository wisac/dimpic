/**
 * This module exports two variables: getFilename and parsedInput.
 * getName function generates path for output file based on the input file name and options.
 * inputData contains two properties: files and options.
 * files is an array of input image files.
 * options is an object containing the parsed options from the command line.
 * @module inputHandle
 */
import path from "path";
import fs from "fs";

import { Command } from "commander";
import { optDescription } from "./helpInfo.js";

// create a command instant
const program = new Command();

// app information
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf-8"));
const appName = packageJson.name
const appVersion = packageJson.version;
const author = packageJson.author;
const githubUrl = "https://gitbub.com/wisac";

//Program arguments configuration
program.name("dimpic");
program.usage("<input-image...> [options]");
program.version("v" + appVersion);
program.option("-o, --out <path>", optDescription.out);
program.option("-h, --height <number>", optDescription.height);
program.option("-w, --width <number>", optDescription.width);
program.option("-q, --quality <number>", optDescription.quality);

program.argument(
   "<input-image...>",
   "Image to be resized (.jpg and .png format only) "
);
program.addHelpText(
   "beforeAll",
   `\n${appName} v.${appVersion}\nA CLI tool to resize and compress images\n`
);
program.addHelpText("afterAll", optDescription.examples);
program.addHelpText(
   "afterAll",
   `For more info or bug reporting, please see: \n${author},\n${githubUrl}\n`
);
program.showSuggestionAfterError(true);
program.showHelpAfterError(
   "For help on how to use dimpic, use the --help flag"
);

//parse arguments
program.parse();

/**
 * Object containing parsed input data.
 * @typedef {Object} ParsedInput
 * @property {string[]} files - An array of file paths.
 * @property {Object} options - An object containing parsed command line options.
*/
const parsedInput = {
   files: program.args,
   options: program.opts(),
};
Object.freeze(parsedInput);

/**
 * Generates path for output file
 * @param {string} file Path to input file
 * @returns {string} Path to output file
 */
function getOutputPath(file) {
   //total files to work on
   const totalFiles = program.args.length;

   //default file location
   let fileLoc = path.resolve(path.dirname(file));

   //default filename
   let filename =
      path.basename(path.resolve(file), path.extname(path.resolve(file))) +
      "_dim" +
      path.extname(path.resolve(file));

   // manual filename
   if (program.opts().out) {
      const destination = program.opts().out;

      if (path.extname(path.resolve(destination))) {
         //if extension is provided
         filename =
            totalFiles > 1
               ? filename
               : path.basename(path.resolve(destination));

         fileLoc = path.resolve(path.dirname(destination));
      } else {
         fileLoc = path.resolve(destination);
      }
   }

   const fileDestination = fileLoc + path.sep + filename;

   return fileDestination;
}

export { getOutputPath};
export { parsedInput };
