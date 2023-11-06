import { Command } from "commander";
import path from "path";
import fs from "fs"
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
   if (program.opts().dest) {

      const destination = program.opts().dest;

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
   const files = program.args
   const options = program.opts();


   //if no input given
   if (files.length < 1) {
      //call usage
      
   }

   return {
      files,options
   }
}

const packageJson = JSON.parse(fs.readFileSync("package.json", "utf-8"));
const appVersion = packageJson.version

program
   .name("dimpic");
//   program.description("A CLI tool to resize and compress images")
   program.usage("<input-image...> [options]");

program.version("ver: "+appVersion)
program.option("-d, --dest <path>", optDescription.dest);
program.option("-h, --height <number>",optDescription.height);
program.option("-w, --width <number>", optDescription.width)
program.option("-q, --quality <number>", optDescription.quality);
program.argument("<input-image...>", "Image to be resized (.jpg and .png format only) ")
program.addHelpText("beforeAll", `\ndimpic ver ${appVersion}\nA CLI tool to resize and compress images\n`)
program.addHelpText("afterAll", optDescription.examples);
program.addHelpText("afterAll", `For more info or bug reporting, please see: \nIsaac Wilson,\nhttps://gitbub.com/wisac\n`)
program.showSuggestionAfterError(true);
program.showHelpAfterError("For help on how to use dimpic, use the --help flag")





program.parse();

export { getName }
export {inputHandler}
