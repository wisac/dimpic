import path from "path";
import yargs from "yargs";

const argv = yargs(process.argv.slice(2)).argv;

const { q, quality, d, dest, w, width, h, height } = argv;
const currentPath = argv.$0
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

   currentPath,
   currentDir: path.resolve(path.dirname(currentPath)), //async
   destDir: path.resolve(path.dirname(currentPath)),
   fileName:
      path.basename(currentPath, path.extname(currentPath)) + "_dim" + path.extname(currentPath),
   // defaultFileName: setDefaultFileName(),

   //set destination direction of output file no filenames
   setDestDir() {

      console.log("dirname setter");
      if (d) this.destDir = path.resolve(path.dirname(d));
   },

   // set file name and extension dir excluded
   setFileName() {
      console.log("filename setter");
      if (d) this.fileName = path.basename(path.resolve(d));
    
      //TO DO
      /**only directory is specified no output file name therefore check if basename has extension*/
   },


   getFileName() {
      this.setFileName()
      return this.fileName
   },


   getDest() {
      this.setDestDir();
      return this.destDir;
   }
}

console.log("destination = ", inputInfo.getDest())
console.log(inputInfo.currentDir)
console.log("filename = ",inputInfo.fileName);
console.log("gettingFilename = ", inputInfo.getFileName());
console.log()



// const currentDir = argv.$0
// const files = argv._;

// console.log('height: ', height);
// console.log('h: ', h);
// console.log('width: ', width);
// console.log('w: ', w);
// console.log('dest: ', dest);
// console.log('d: ', d);
// console.log('quality: ', quality);
// console.log('q: ', q);

console.log(argv);

//to specify a manual filename, use -d destination/filename

// defined values are the ones going to be used.
// if an arg is not part of the specified args, display usage
// if arg type is invalid, display usage and mention arg type with arg types

// how to get determine values to be passed. if
