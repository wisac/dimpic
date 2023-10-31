import path from "path";
import yargs from "yargs";

const argv = yargs(process.argv.slice(2)).argv;

const { q, quality, d, dest, w, width, h, height } = argv;
const currentPath = argv.$0;
const files = argv._;

const inputInfo = {
   q,
   quality,
   d,
   dest,
   w,
   width,
   h,
   height,
   files,
   currentPath,
   currentDir: path.resolve(path.dirname(currentPath)), //async
   destDir: path.resolve(path.dirname(currentPath)),
   fileName:
      path.basename(currentPath, path.extname(currentPath)) +
      "_dim" +
      path.extname(currentPath),
   // defaultFileName: setDefaultFileName(),

   //set destination direction of output file no filenames
   setDestDir() {
      console.log("dirname setter");
      if (d)
         if (path.extname(path.resolve(d))) {
            this.destDir = path.resolve(path.dirname(d));
            console.log("setting dir with extension");
         } else {
            this.destDir = path.resolve(d);
         }
   },

   // sets file name and extension dir excluded
   setFileName() {
      console.log("filename setter");

      if (d) {
         if (path.extname(path.resolve(d))) {
            this.fileName = path.basename(path.resolve(d));
            console.log("here");
         }
      }
   },

   getFileName() {
      this.setFileName();
      return this.fileName;
   },

   getDest() {
      this.setDestDir();
      return this.destDir;
   },
};

console.log("destination dir = ", inputInfo.getDest());
console.log("current dir =", inputInfo.currentDir);
console.log("filename = ", inputInfo.fileName);
console.log("gettingFilename = ", inputInfo.getFileName());

// console.log(argv);

//to specify a manual filename, use -d destination/filename

// defined values are the ones going to be used.
// if an arg is not part of the specified args, display usage
// if arg type is invalid, display usage and mention arg type with arg types

// how to get determine values to be passed. if

export default  inputInfo ;