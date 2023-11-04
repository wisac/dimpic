import { Command } from "commander";
import path from "path";

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

// program.command()

program.option("-d, --dest <path>", "Output of file");
program.option("-h, --height <number>", "height of image");
program.option("-w, --width <number>", "width of image")
program.option("-q, --quality <number>", "quality of image")



program.parse();
// const loc =program.nameFromFilename(process.argv[1])

// program.args.forEach((el) => {
//    console.log("output", getName(el));
// });
// console.log(program.args);
// console.log(program.opts().dest);

export { getName }
export {inputHandler}
