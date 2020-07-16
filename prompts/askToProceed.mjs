import readline from 'readline';
import { cleanup } from '../cleanup';
import files from '../files';

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
