import path from "path";
import fs from "fs";

import { Command } from "commander";
import { optDescription } from "./getHelp.js";

// create a command instant
const program = new Command();


function getName(file) {

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

function inputHandler() {
   const files = program.args;
   const options = program.opts();

   return {
      files,
      options,
   };
}

const packageJson = JSON.parse(fs.readFileSync("package.json", "utf-8"));
const appVersion = packageJson.version;
const author = packageJson.author
const githubUrl = "https://gitbub.com/wisac"



program.name("dimpic");
program.usage("<input-image...> [options]");
program.version("ver: " + appVersion);
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
   `\ndimpic ver. ${appVersion}\nA CLI tool to resize and compress images\n`
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

program.parse();

export { getName };
export { inputHandler };
