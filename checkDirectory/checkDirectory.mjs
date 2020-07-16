import { missing, modified } from './checks';

const checkDirectory = (files) => ({ missingFiles: missing(files), modifiedFiles: modified(files) });

export default checkDirectory;
