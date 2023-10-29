//custom modules
import saveFile from "./src/saveFile.js";
import compress from "./src/compress.js";
import resize from "./src/resize.js";




resize("drawing3.png",2000)
   .then((res) => {
      compress(res).then((res) => {
         saveFile(res, "z7.png");
      });
   })
   .catch((err) => {
      console.log(err);
   });

console.log(argv);

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