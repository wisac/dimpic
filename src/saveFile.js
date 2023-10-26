import path from "path";
import os from "os";
import fs from "fs";

import compress from "./compress.js";

export default async function saveFile(outputFile) {
   const filePath = path.resolve(outputFile.replace(/^~/, os.homedir()));
   console.log(filePath);
   const inputBuffer = await compress(50);
   fs.writeFileSync(filePath, inputBuffer);
   console.log("done");
}
