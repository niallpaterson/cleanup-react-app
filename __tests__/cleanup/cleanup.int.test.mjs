import cleanup from '../../cleanupReactApp/cleanup/cleanup.mjs';
import directory from '../../__mocks__/directory.mjs';
import files from '../../cleanupReactApp/files/files.mjs';

jest.mock('fs');
global.console.log = jest.fn();

describe('given an unaltered instance of create-react-app', () => {
  beforeEach(() => {
    directory.setCorrectFiles();
    cleanup(files);
  });
  it('removes all of the correct files', () => cleanup(files)
    .then(() => {
      expect(files.toRemove.every(
        (file) => !Object.prototype.hasOwnProperty.call(directory.get(), `./${file}`)))
        .toBe(true);
    }));
  it('renames all of the correct files', () => {
    expect(files.toRename.every(
      (file) => !Object.prototype.hasOwnProperty.call(directory.get(), `./${file.oldPath}`),
    )).toBe(true);
    expect(files.toRename.every(
      (file) => Object.prototype.hasOwnProperty.call(
        directory.get(), `./${file.newPath}`,
      ),
    )).toBe(true);
  });
  it('modifies the content of files correctly', () => {
    expect(files.toModify.every(
      (file) => directory.get()[`./${file.path}`] === file.newContent
    )).toBe(true);
  });
  it('logs a message to the console', () => {
    expect(global.console.log).toHaveBeenCalled();
  });
});
