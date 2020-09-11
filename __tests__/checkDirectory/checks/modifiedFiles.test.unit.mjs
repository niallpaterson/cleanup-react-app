import modifiedFiles from '../../../cleanupReactApp/checkDirectory/checks/modifiedFiles.mjs';
import directory from '../../../__mocks__/directory.mjs';
import files from '../../../cleanupReactApp/files/files.mjs';

jest.mock('fs');

describe('if there are no modified files', () => {
  beforeEach(() => {
    directory.setCorrectFiles();
  });
  it('returns an empty array', () => {
    expect(modifiedFiles(files, 'root')).toEqual([]);
  });
});

describe('if all are modified files', () => {
  beforeEach(() => {
    directory.setIncorrectContent();
  });
  it('returns whole list of modified files', () => {
    expect(modifiedFiles(files, 'root')).toEqual(files.toCheckContentOf);
  });
});

describe('if all are some but not all modified files', () => {
  beforeEach(() => {
    directory.setPartialIncorrectContent();
  });
  it('returns partial list of modified files', () => {
    expect(modifiedFiles(files, 'root')).toEqual(['src/App.js', 'src/App.css']);
  });
});
