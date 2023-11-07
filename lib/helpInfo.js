/**
 * @file This file contains the optDescription object.
 * @summary This module provides help information for the dimpic command line tool.
 * @description The optDescription object provides descriptions for the available options.
 * @exports optDescription
 */


/**
 * Object containing descriptions for the available options.
 * @typedef {Object} OptDescription
 * @property {string} quality - Description for the quality option.
 * @property {string} out - Description for the out option.
 * @property {string} width - Description for the width option.
 * @property {string} height - Description for the height option.
 * @property {string} examples - Examples for using the dimpic command line tool.
 * 
 */
const optDescription = {
   quality:
      "Specify the quality of output image relative to input image (0 - 100)%",

   out: "Specify the destination of output image.Replaces existing file.\nBy default active directory is used as output destination.\nAlso used when you want to set name for the output file.\nDefault output name : (inputName_dim)",

   width: "Specify the width of output image\n(NB: Only use this if you want to change dimension of output image)",
   height:
      "Specify the height of output image\n(NB: Only use this if you want to change dimension of output image)",
   examples: `\nExamples:
  dimpic  img.jpg
  dimpic  photo.jpg  -q  40  -o  ~/Desktop/
  dimpic  pic1.png  pic2.jpg  pic3.jpg  -o  /home/username/Document/
  dimpic  photo2.png  --width=1024  -h  720   --dest ./new/my_photo.jpg\n`,
};

export { optDescription };
