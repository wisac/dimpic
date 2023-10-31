import path from "path";
import yargs from "yargs";

const argv = yargs(process.argv.slice(2)).argv;

const currentPath = argv.$0;
const files = argv._;
const { q, quality, d, dest, w, width, h, height } = argv;

console.log(argv);
function validFlags() {
   return {
      quality: quality !== undefined ? quality : q,
      dest: dest !== undefined ? dest : d,
      width: width !== undefined ? width : w,
      height: height !== undefined ? height : h,
   };
}

const inputInfo = {
   _flags: Object.create(validFlags()),

   _files: files,
   currentDir: path.resolve(path.dirname(currentPath)), //async
   destDir: path.resolve(path.dirname(currentPath)),
   fileName:
      path.basename(currentPath, path.extname(currentPath)) +
      "_dim" +
      path.extname(currentPath),

   //set destination directory
   setDestDir() {
      console.log("dirname setter");
      if (this._flags.dest)
         if (path.extname(path.resolve(this._flags.dest))) {
            this.destDir = path.resolve(path.dirname(this._flags.dest));
            console.log("setting dir with extension");
         } else {
            this.destDir = path.resolve(this._flags.dest);
         }
   },

   // sets output filename
   setFileName() {
      console.log("filename setter");

      if (this._flags.dest) {
         if (path.extname(path.resolve(this._flags.dest))) {
            this.fileName = path.basename(path.resolve(this._flags.dest));
            console.log("here");
         }
      }
   },

   //get output filename
   getFileName() {
      this.setFileName();
      console.log("height", this.h, this.height);
      return this.fileName;
   },

   //get output destination
   getDest() {
      this.setDestDir();
      return this.destDir;
   },

   getFiles() {
      return this._files;
   },

   getQuality() {
      return this._flags.quality;
   },
   getWidth() {
      return this._flags.width;
   },
   getHeight() {
      return this._flags.height;
   },
};

console.log("destination dir = ", inputInfo.getDest());
console.log("current dir =", inputInfo.currentDir);
console.log("filename = ", inputInfo.fileName);
console.log("gettingFilename = ", inputInfo.getFileName());

//to specify a manual filename, use -d destination/filename

// defined values are the ones going to be used.
// if an arg is not part of the specified args, display usage
// if arg type is invalid, display usage and mention arg type with arg types

// how to get determine values to be passed. if

export default inputInfo;
