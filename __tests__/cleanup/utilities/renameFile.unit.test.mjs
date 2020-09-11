import rename from '../../../cleanupReactApp/cleanup/utilities/renameFile.mjs';
import directory from '../../../__mocks__/directory.mjs';

jest.mock('fs');

beforeEach(() => {
  directory.set({
    './foo': 'bar',
  });
});

it('successfully renames the file, given an existent file', () => {
  rename('foo', 'new');
  expect(directory.files).toEqual({ './new': 'bar' });
});

it('does not rename a file, given a non-existent file', () => {
  rename('bar', 'new');
  expect(directory.files).toEqual({ './foo': 'bar' });
});
