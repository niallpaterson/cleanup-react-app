import remove from './utilities/removeFile.mjs'
import rename from './utilities/renameFile.mjs'
import rewrite from './utilities/rewriteFile.mjs'

const cleanUp = (files) => {
  files.toRemove.forEach((file) => remove(file));
  files.toRename.forEach((file) => rename(file.oldPath, file.newPath));
  files.toReWrite.forEach((file) => rewrite(file.path, file.newContent));
};

export default cleanUp;
