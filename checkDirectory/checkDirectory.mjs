import missing from './checks/missingFiles.mjs';
import modified from './checks/modifiedFiles.mjs';

const checkDirectory = (files, scriptRoot) => (
  { missingFiles: missing(files), modifiedFiles: modified(files, scriptRoot) }
);

export default checkDirectory;
