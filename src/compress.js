import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

import resize from "./resize.js";

const props = ["taylor.jpg"];


export default async function compress(quality) {
   //get resized image buffer
   const resizedBuffer = await resize(...props);

   return await imagemin.buffer(resizedBuffer, {
      plugins: [
         imageminMozjpeg({
            quality: quality,
         }),
         imageminPngquant({
            quality: quality,
         }),
      ],
   });
}
