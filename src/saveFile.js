import path from "path";
import os from "os";
import fs from "fs";

export default async function saveFile(inputBuffer, outputFile) {
   try {
      const filePath = path.resolve(outputFile.replace(/^~/, os.homedir()));
      console.log("Saving Image...");
      fs.writeFileSync(filePath, inputBuffer);
      console.log("All Completed successfully");
   } catch (err) {
      console.log(err);
   }
}
