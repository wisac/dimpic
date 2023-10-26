import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

export default async function compress(resizedBuffer, quality) {
   const options =
      quality === "undefined"
         ? [imageminMozjpeg({}), imageminPngquant({})]
         : [
              imageminMozjpeg({
                 quality: quality,
              }),
              imageminPngquant({
                 quality: quality,
              }),
           ];

   try {
      console.log("Compressing Image...");
      return await imagemin.buffer(resizedBuffer, {
         plugins: options,
      });
   } catch (err) {
      console.log("Error: Invalid file or quality\nQuality should be between 0 and 100");
   }
}
