function printUsage() {
   console.log(
      "Error: Invalid arguments. You can run dimpic --help for more info\n"
   );
   console.log("USAGE:\n\n    dimpic <input_image> <options>\n");
   console.log("OPTIONS:\n");
   console.log(
      "    -q, --quality      :  Specify the quality of output image relative to input image (0 - 100)"
   );
   console.log(
      "    -o, --out         :  Specify the destination of output image (Any valid path. If file exist, it will be replaced). By default active directory is used as output destination."
   );

   console.log(
      "                          Also used when you want to set name for the output file. Otherwise default output name will be used. (inputName_dim)"
   );
   console.log(
      "    -w, --width        :  Specify the width of output image (NB: Only use this if you want to change dimension of output image)"
   );
   console.log(
      "    -h, --height       :  Specify the height of output image(NB: Only use this if you want to change dimension of output image)"
   );
   console.log("    -v, --version      :  Show program version)");
   console.log("        --help,        :  Display help menu(this menu)");

   console.log("\nEXAMPLES:\n");
   console.log("    dimpic img.jpg");
   console.log("    dimpic  photo.jpg  -q  40  -o  ~/Desktop/");
   console.log(
      "    dimpic  pic1.png  pic2.jpg  pic3.jpg  -o  /home/username/Document/"
   );
   console.log(
      "    dimpic  photo2.png  --width=1024  -h  720   --out ./new/my_photo.jpg\n\n"
   );
}

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

export { optDescription, printUsage };

// Object.values(optDescription).forEach(key => { console.log(key); })
