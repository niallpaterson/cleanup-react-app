import remove from '../../../cleanupReactApp/cleanup/utilities/removeFile.mjs';
import directory from '../../../__mocks__/directory.mjs';

jest.mock('fs');

beforeEach(() => {
  directory.set({
    './foo': 'bar',
    './baz': 'qux',
  });
});

it('successfully removes the file, given an existent file', () => {
  remove('foo');
  expect(directory.files).toEqual({ './baz': 'qux' });
});

it('does not remove a file, given a non-existent file', () => {
  remove('quuz');
  expect(directory.files).toEqual({
    './foo': 'bar',
    './baz': 'qux',
  });
});
