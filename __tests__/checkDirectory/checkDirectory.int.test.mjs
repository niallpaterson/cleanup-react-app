import checkDirectory from '../../cleanupReactApp/checkDirectory/checkDirectory.mjs';
import directory from '../../__mocks__/directory.mjs';
import files from '../../cleanupReactApp/files/files.mjs';

jest.mock('fs');

it('returns an object with empty arrays, given no missing or modified files', () => {
  directory.setCorrectFiles();
  expect(checkDirectory(files, 'root')).toEqual({ missingFiles: [], modifiedFiles: [] });
});

it('returns the correct missing files', () => {
  directory.setPartiallyCorrectFiles();
  expect(checkDirectory(files, 'root')).toEqual({ missingFiles: ['public/index.html', 'src/App.js'], modifiedFiles: [] });
});

it('does not return files as modified, if they are missing', () => {
  directory.setPartiallyCorrectFiles();
  expect(checkDirectory(files, 'root').modifiedFiles).toHaveLength(0);
});

it('returns the correct modified files', () => {
  directory.setPartialIncorrectContent();
  expect(checkDirectory(files, 'root')).toEqual({ missingFiles: [], modifiedFiles: ['src/App.js', 'src/App.css'] });
});
