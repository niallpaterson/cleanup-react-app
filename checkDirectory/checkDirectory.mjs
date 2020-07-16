import missing from './checks/missingFiles.mjs';
import modified from './checks/modifiedFiles.mjs';

const checkDirectory = (files) => ({ missingFiles: missing(files), modifiedFiles: modified(files) });

export default checkDirectory;
