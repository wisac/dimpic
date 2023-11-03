//custom modules
import saveFile from "./src/saveFile.js";
import compress from "./src/compress.js";
import resize from "./src/resize.js";
import inputInfo from "./src/inputHandler.js";
import { getHelp } from "./src/getHelp.js";
import { argsValid } from "./src/inputHandler.js";
import { printUsage } from "./src/getHelp.js";
import { helpArg } from "./src/inputHandler.js"

const init = () => {
   
   //    if (helpArg()) {
   //       getHelp();
   //       return
   //    }
   // if (!argsValid()) {
   //    printUsage();
   //    return;
   // }

   const quality = inputInfo.getQuality();
   const width = inputInfo.getWidth();
   const height = inputInfo.getHeight();

   const files = inputInfo._files;
   console.log("all files = ,", files);

   console.log(quality, width, height);

   files.forEach((file) => {
      resize(file, width, height)
         .then((res) => {
            compress(res, quality).then((res) => {
               saveFile(res, inputInfo.outputName(file));
            });
         })
         .catch((err) => {
            console.log(err);
         });
   });
};

init();

// console.log("file name: ", inputInfo.getFileName())
// console.log("cwd: ", inputInfo.currentDir)
// console.log("dest dir : ", inputInfo.getDest())
// // console.log("files: ", inputInfo.files)

// // console.log("flags\n ",inputInfo.flags.height);

// // inputInfo.getFiles();
// console.log('inputInfo.getFiles(): ', inputInfo.getFiles());
// // inputInfo.getHeight();
// console.log('inputInfo.getHeight(): ', inputInfo.getHeight());
// // inputInfo.getQuality()
// console.log('inputInfo.getQuality(): ', inputInfo.getQuality());
// // inputInfo.getWidth();
// console.log('inputInfo.getWidth(): ', inputInfo.getWidth());

//dimpic <__filename(s)> <options flag> <option values>

// dimpic file.jpg file2.jpg -s 1000 -q 80 -d ./folder
//dimpic file.jpg fil2.png --size=100 -q 70 --dir=./home

/**
 * arguments
 *  paths/to/file
 *
 * flags
 * -w , --width : for defining width
 * -h , --height : for defining output height
 * -q , --quality : for defining quality of output
 * -d , --dest : for defining destination of output files
 */

const obj1 = {
   a: 4,
   b: 5,
};

const obj = {
   inner: Object.create(obj1),
};

console.log("\nchecking");
obj.inner.a = 24;
console.log(obj.inner.a);
console.log(obj1.a);
