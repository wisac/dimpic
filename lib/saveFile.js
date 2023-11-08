import path from "path";
import os from "os";
import fs from "fs";

/**
 * Saves an input buffer to a file specified by the output file path.
 * @param {Buffer} inputBuffer - The buffer to save to the output file.
 * @param {string} outputFile - The path to the output file.
 * @returns {void}
 */
export default function saveFile(inputBuffer, outputFile) {
   try {
      const filePath = path.resolve(outputFile.replace(/^~/, os.homedir()));
      // console.log("Saving Image..."); to be used for verbose mode
      fs.writeFileSync(filePath, inputBuffer);
      console.log("Completed successfully!");
   } catch (err) {
      console.log(err);
   }
}
