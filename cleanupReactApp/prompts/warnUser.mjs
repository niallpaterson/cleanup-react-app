const warnUser = (missingFiles, modifiedFiles) => {
  console.warn(`⚠️  Warning: Directory does not match create-react-app template.\n`);

  if (missingFiles.length) {
    console.warn('Missing files:\n');
    missingFiles.forEach((file) => console.log(file));
  }

  if (modifiedFiles.length) {
    console.warn('\nModified files:\n');
    modifiedFiles.forEach((file) => console.log(file));
  }

  console.warn(`\nAttempting to cleanup: ${process.cwd()}\n`);
};

export default warnUser;
