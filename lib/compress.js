import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

/**
 * Compresses the given image buffer using imagemin library.
 * @param {Buffer} imageBuffer - The image buffer to be compressed.
 * @param {number} quality - The quality of the compressed image. Should be between 0 and 100.
 * @returns {Promise<Buffer>} - The compressed image buffer.
 */
export default async function compress(imageBuffer, quality) {
   if(!imageBuffer instanceof Buffer) return
   const options =
      quality === undefined
         ? [imageminMozjpeg({}), imageminPngquant({})]
         : [
            imageminMozjpeg({
               quality: quality,
            }),
            imageminPngquant({
               speed: Math.floor(quality / 10) + 1,
               // quality: [0, quality/100]
            }),
         ];

   try {
      // console.log("Compressing Image..."); to be used for verbose mode
      return await imagemin.buffer(imageBuffer, {
         plugins: options,
      });
   } catch (err) {
      console.log(
         "Error: Invalid input file"
      );
   }
}

