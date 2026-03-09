// scripts/resize-images.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const projectsDir = path.join(process.cwd(), "public/projects");
const minWidth = 800;

async function processFolder(folder) {
    const files = fs.readdirSync(folder).filter(f => /\.(png|jpe?g)$/i.test(f));

    for (const file of files) {
        const fullPath = path.join(folder, file);
        const ext = path.extname(file).toLowerCase();
        const outputPath = path.join(folder, file.replace(/\.(png|jpe?g)$/i, ".webp"));

        const originalStats = fs.statSync(fullPath);

        // Skip if optimized image exists and is newer than original
        if (fs.existsSync(outputPath)) {
            const optimizedStats = fs.statSync(outputPath);
            if (optimizedStats.mtime >= originalStats.mtime) {
                console.log(`Skipped: ${file} (already optimized)`);
                continue;
            }
        }

        const image = sharp(fullPath);
        const meta = await image.metadata();

        if (!meta.width) continue;

        const resizeOptions = meta.width > minWidth ? { width: minWidth } : {};
        const pipeline = image.resize(resizeOptions);

        if (ext === ".png") {
            await pipeline.webp({ lossless: true }).toFile(outputPath);
        } else {
            await pipeline.webp({ quality: 80 }).toFile(outputPath);
        }

        console.log(`Processed: ${file} → ${path.basename(outputPath)}`);
    }
}

async function main() {
    const subfolders = fs.readdirSync(projectsDir);

    for (const subfolder of subfolders) {
        const folderPath = path.join(projectsDir, subfolder);
        if (fs.statSync(folderPath).isDirectory()) {
            await processFolder(folderPath);
        }
    }
}

main();