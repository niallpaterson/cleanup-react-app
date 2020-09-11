import checkDirectory from './checkDirectory/checkDirectory.mjs';
import cleanup from './cleanup/cleanup.mjs';
import files from './files/files.mjs';
import warnUser from './prompts/warnUser.mjs'
import askToProceed from './prompts/askToProceed.mjs';

const cleanupReactApp = (scriptRoot) => {
  const { missingFiles, modifiedFiles } = checkDirectory(files, scriptRoot);

  if (missingFiles.length || modifiedFiles.length) {
    warnUser(missingFiles, modifiedFiles);
    askToProceed();
  } else {
    cleanup(files);
  }
};

export default cleanupReactApp;
