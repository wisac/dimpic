# Dimpic - Image Resizer and Compressor

Dimpic is a simple command-line tool for resizing the dimensions of an image and reducing its file size. This README provides an overview of its features, installation instructions, usage guide, and how to contribute to the project.

## Features

- Crop images to a given dimension.
- Reduce image file sizes(lossless and lossy).
- Compress and resize or crop images.
- Ability to specify output name and location.
- Convert PNG to JPEG or JPEG to PNG by changing the extension when providing an output name.
- Supports JPEG and PNG image formats.
- Compress multiple images at once.

## Installation

You can install Dimpic locally or globally using npm. To install it, run the following command:

```bash
npm install -g dimpic
```

## Usage

To use Dimpic, simply run the `dimpic` command in your terminal with the input image(s) you want to process and any desired options. The basic usage format is as follows:

```bash
dimpic <input-image...> [options]
```

### Options

- `-q, --quality`: Specify the quality of the output image for lossy compression.
- `-w, --width`: Specify the output image width.
- `-h, --height`: Specify the output image height.
- `-o, --out`: Specify the destination and/or rename the output file. By default, the output filename is `<input-filename>_dim.ext`.
- `--help`: Display the help menu.

### Examples

1. Compress an image while maintaining its dimensions:
   ```bash
   dimpic img.jpg
   ```

2. Reduce the quality of an image and save it to a specific location:
   ```bash
   dimpic photo.jpg -q 40 -o ~/Desktop/
   ```

3. Process multiple images at once and specify an output directory:
   ```bash
   dimpic pic1.png pic2.jpg pic3.jpg -o /home/username/Document/
   ```

4. Resize an image to a specific width and height and specify the output file name:
   ```bash
   dimpic photo2.png --width=1024 -h 720 --out ./new/my_photo.jpg
   ```

## Screenshots

### Before

![Image Before](screenshots/before.jpg)

- **File Size:** 1.3 MB

### After

![Image After](screenshots/after.jpg)

- **File Size:** 406.8 KB

## Contributing

If you would like to contribute to Dimpic, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure that the tests pass.
4. Submit a pull request to the `main` branch of the original repository.

Your contributions will be reviewed, and if they align with the project's goals, they will be merged. Thank you for your support and contributions to Dimpic!

## Dependencies

Dimpic relies on the following npm packages:

- imagemin
- imagemin-mozjpeg
- imagemin-pngquant
- sharp
- commander

Make sure to have these dependencies installed when using Dimpic.

---

Dimpic is a versatile tool for image resizing and compression. Feel free to explore its capabilities and customize your image processing tasks effortlessly. If you encounter any issues or have suggestions for improvements, please don't hesitate to reach out.

Happy image processing with Dimpic!