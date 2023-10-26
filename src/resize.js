import sharp from "sharp";
import printUsage from "./printUsage.js";

export default function resize(inputFile, width, height) {
   //get given dimensions
   const size = width && height ? [width, height] : [width];

   // check if file is given
   if (!inputFile) {
      printUsage();
      throw new Error("Missing input file");
   }

   // if no dimensions are given, return original file
   if (!width && !height) {
      return sharp(inputFile).toBuffer();
   }

   // resize and return buffer
   return sharp(inputFile)
      .resize(...size)
      .toBuffer();
}
