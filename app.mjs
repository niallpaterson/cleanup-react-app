#!usr/bin/env node

import 'fs';
import checkDirectory from './checkDirectory';
import cleanup from './cleanup';
import files from './files';
import { warnUser, askToProceed } from './prompts';

const { missingFiles, modifiedFiles } = checkDirectory();

if (missingFiles.length || modifiedFiles.length) {
  warnUser(missingFiles, modifiedFiles);
  askToProceed();
} else {
  console.log('🧼 Cleaning app');
  cleanup(files);
  console.log(`✨ Cleaned up ${process.cwd()}`);
}

process.exitCode = 1;
