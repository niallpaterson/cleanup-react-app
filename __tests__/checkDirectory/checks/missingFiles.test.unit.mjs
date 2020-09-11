import missingFiles from '../../../cleanupReactApp/checkDirectory/checks/missingFiles.mjs';
import directory from '../../../__mocks__/directory.mjs';
import files from '../../../cleanupReactApp/files/files.mjs';

jest.mock('fs');

describe('if there are no missing files', () => {
  beforeEach(() => {
    directory.setCorrectFiles();
  });
  it('returns an empty array', () => {
    expect(missingFiles(files)).toEqual([]);
  });
});

describe('if there are missing files', () => {
  beforeEach(() => {
    directory.set({});
  });
  it('returns each empty file', () => {
    expect(missingFiles(files)).toEqual(files.toCheckforExistence);
  });
});
