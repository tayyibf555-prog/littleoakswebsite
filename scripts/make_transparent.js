
const sharp = require('sharp');

async function removeBackground() {
    try {
        await sharp('public/logo.jpeg')
            .ensureAlpha()
            .threshold(240, { grayscale: true }) // Not exactly right for transparency replacement
            // Sharp's composite/join functionality is complex for simple color replacement.
            // Better: use raw pixel access
            .raw()
            .toBuffer({ resolveWithObject: true })
            .then(({ data, info }) => {
                const pixelArray = new Uint8ClampedArray(data.buffer);
                for (let i = 0; i < pixelArray.length; i += info.channels) {
                    const r = pixelArray[i];
                    const g = pixelArray[i + 1];
                    const b = pixelArray[i + 2];
                    // If close to white, set alpha to 0
                    if (r > 240 && g > 240 && b > 240) {
                        pixelArray[i + 3] = 0; // Alpha
                    }
                }

                sharp(pixelArray, {
                    raw: {
                        width: info.width,
                        height: info.height,
                        channels: info.channels
                    }
                })
                    .png()
                    .toFile('public/logo-transparent.png')
                    .then(() => console.log('Saved transparent logo to public/logo-transparent.png'))
                    .catch(err => console.error('Error saving:', err));
            });

    } catch (err) {
        console.error('Error processing:', err);
    }
}

removeBackground();
