#!/usr/bin/env node

import 'fs';
import checkDirectory from './checkDirectory/checkDirectory.mjs';
import cleanup from './cleanUp/cleanup.mjs';
import files from './files/files.mjs';
import warnUser from './prompts/warnUser.mjs'
import askToProceed from './prompts/askToProceed.mjs';

const { missingFiles, modifiedFiles } = checkDirectory(files);

if (missingFiles.length || modifiedFiles.length) {
  warnUser(missingFiles, modifiedFiles);
  askToProceed();
} else {
  console.log('🧼 Cleaning app');
  cleanup(files);
  console.log(`✨ Cleaned up ${process.cwd()}`);
}

process.exitCode = 1;
