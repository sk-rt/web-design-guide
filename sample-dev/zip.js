const { readdirSync, statSync, createWriteStream, createReadStream } = require('fs');
const path = require('path');

const archiver = require('archiver');

const dirs = ['basic', 'css', 'template'];
const targets = dirs
    .map((dir) => {
        const baseDir = path.join(__dirname, 'public/', dir);
        const subFiles = readdirSync(baseDir);
        console.log(baseDir);

        const subDirs = subFiles
            .map((subFile) => {
                const filepath = path.join(baseDir, subFile);
                const stat = statSync(filepath);
                if (!stat.isDirectory()) {
                    return;
                }
                return {
                    path: filepath,
                    name: subFile,
                    dirctory: baseDir,
                };
            })
            .filter((d) => !!d);
        return subDirs;
    })
    .flat();

targets.forEach((target) => {
    const output = createWriteStream(path.join(target.dirctory, target.name + '.zip'));
    const archive = archiver('zip', { zlib: 9 });

    archive.pipe(output);
    archive.directory(target.path, false);

    archive.finalize();
});
