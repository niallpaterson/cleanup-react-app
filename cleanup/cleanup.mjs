import { remove, rename, rewrite } from './utilities';

const cleanUp = (files) => {
  files.toRemove.forEach((file) => remove(file));
  files.toRename.forEach((file) => rename(file.oldPath, file.newPath));
  files.toReWrite.forEach((file) => rewrite(file.path, file.newContent));
};

export default cleanUp;
