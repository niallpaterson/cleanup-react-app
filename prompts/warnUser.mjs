const warnUser = (missingFiles, modifiedFiles) => {
  console.warn(`⚠️  Warning:
Directory does not match create-react-app template.`);

  if (missingFiles.length) {
    console.warn('Missing files:');
    missingFiles.forEach((file) => console.log(file));
  }

  if (modifiedFiles.length) {
    console.warn('Modified files:');
    modifiedFiles.forEach((file) => console.log(file));
  }

  console.warn(`Attempting to clean: ${process.cwd()}`);
};

export default warnUser;
