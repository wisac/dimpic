import path from "path";
import yargs from "yargs";

const argv = yargs(process.argv.slice(2)).argv;

const currentPath = argv.$0;
const files = argv._;
const { q, quality, d, out, w, width, h, height, help } = argv;

// function helpArg() {
//    if (argv.help) {
//       return true;
//    }
//    return false;
// }

const arg = yargs.command("help", "help function").describe("help").argv;
console.log(arg);

function argsValid() {
   for (const prop in argv) {
      if (
         prop !== "$0" &&
         prop !== "_" &&
         prop !== "q" &&
         prop !== "quality" &&
         prop !== "d" &&
         prop !== "out" &&
         prop !== "w" &&
         prop !== "width" &&
         prop !== "h" &&
         prop !== "height" &&
         prop !== "help"
      ) {
         console.log("INVALID ARGS", prop);
         return false;
      }
   }

   if (files.length < 1) {
      return false;
   }

   return true;
}

console.log(argv);
function validFlags() {
   return {
      quality: quality !== undefined ? quality : q,
      out: out !== undefined ? out : d,
      width: width !== undefined ? width : w,
      height: height !== undefined ? height : h,
      help: help,
   };
}

// An input object
const inputInfo = {
   _flags: Object.create(validFlags()),
   _files: files,

   currentDir: path.resolve(path.dirname(currentPath)), //async
   outDir: path.resolve(path.dirname(currentPath)),
   fileName:
      path.basename(
         path.resolve(files[0]),
         path.extname(path.resolve(files[0]))
      ) +
      "_dim" +
      path.extname(path.resolve(files[0])),

   //set destination directory
   setOutDir() {
      console.log("dirname setter");
      if (this._flags.out)
         if (path.extname(path.resolve(this._flags.out))) {
            this.outDir = path.resolve(path.dirname(this._flags.out));
            console.log("setting dir with extension");
         } else {
            this.outDir = path.resolve(this._flags.out);
         }
   },

   // sets output filename
   setFileName(file) {
      console.log("filename setter");

      if (this._flags.out) {
         if (path.extname(path.resolve(this._flags.out))) {
            this.fileName = path.basename(path.resolve(this._flags.out));
            console.log("here");
         } else {
            if (files.length > 1) {
               this.fileName =
                  path.basename(
                     path.resolve(file),
                     path.extname(path.resolve(file))
                  ) +
                  "_dim" +
                  path.extname(path.resolve(file));
            }
         }
      } else {
         if (files.length > 1) {
            this.fileName =
               path.basename(
                  path.resolve(file),
                  path.extname(path.resolve(file))
               ) +
               "_dim" +
               path.extname(path.resolve(file));
         }
      }
   },

   //get output filename
   getFileName(file) {
      this.setFileName(file);
      return this.fileName;
   },

   //get output outination
   getOut() {
      this.setOutDir();
      return this.outDir;
   },

   //get input files
   getFiles() {
      return this._files;
   },

   // get input quality value
   getQuality() {
      return this._flags.quality;
   },
   // get input width
   getWidth() {
      return this._flags.width;
   },

   //get input width
   getHeight() {
      return this._flags.height;
   },

   outputName(file) {
      return this.getOut() + "/" + this.getFileName(file);
   },
};

console.log("destination dir = ", inputInfo.getOut());
console.log("current dir =", inputInfo.currentDir);
console.log("filename = ", inputInfo.fileName);
files.forEach((element) => {
   console.log("new filename", inputInfo.outputName(element));
});
// console.log("gettingFilename = ", inputInfo.getFileName());

//to specify a manual filename, use -o destination/filename

// defined values are the ones going to be used.
// if an arg is not part of the specified args, display usage
// if arg type is invalid, display usage and mention arg type with arg types

// how to get determine values to be passed. if

export default inputInfo;
export { argsValid };
// export { helpArg };
