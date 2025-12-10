import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminSvgo from 'imagemin-svgo';
import fs from 'fs';
import path from 'path';

const inputDir = 'public';
const outputDir = 'public/optimized';

async function optimizeImages() {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = await imagemin([`${inputDir}/*.{jpg,jpeg,png,gif,svg,avif}`], {
    destination: outputDir,
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8]
      }),
      imageminGifsicle(),
      imageminSvgo({
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      }),
    ],
  });

  console.log('Images optimized:', files.map(file => file.sourcePath));
}

optimizeImages().catch(console.error);