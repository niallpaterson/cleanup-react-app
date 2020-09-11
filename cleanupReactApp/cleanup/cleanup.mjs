import remove from './utilities/removeFile.mjs';
import rename from './utilities/renameFile.mjs';
import rewrite from './utilities/rewriteFile.mjs';

const cleanUp = async (files) => {
  console.log(`🧼 Cleaning app`);
  await files.toRemove.forEach((file) => remove(file));
  await files.toRename.forEach((file) => rename(file.oldPath, file.newPath));
  await files.toModify.forEach((file) => rewrite(file.path, file.newContent));
  setTimeout(() => { console.log(`✨ Cleaned up ${process.cwd()}`); }, 500);
};

export default cleanUp;
