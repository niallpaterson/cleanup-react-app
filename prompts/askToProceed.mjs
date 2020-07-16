import readline from 'readline';
import cleanup from '../cleanup/cleanup.mjs';
import files from '../files/files.mjs';

const askToProceed = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Do you want to clean this directory?\n', (answer) => {
    rl.close();
    return answer.toLowerCase() !== 'y' ? process.exit() : cleanup(files);
  });
};

export default askToProceed;
