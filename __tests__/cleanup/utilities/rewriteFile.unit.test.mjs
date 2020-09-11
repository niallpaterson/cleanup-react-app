import rewrite from '../../../cleanupReactApp/cleanup/utilities/rewriteFile.mjs';
import directory from '../../../__mocks__/directory.mjs';

jest.mock('fs');

beforeEach(() => {
  directory.set({
    './foo': 'bar',
    './baz': 'qux',
  });
});

it('rewrites the content of a file, given an existent file path', () => {
  rewrite('foo', 'foobar');
  expect(directory.get()).toEqual({
    './foo': 'foobar',
    './baz': 'qux',
  });
});

it('writes a new file with the appropriate content, given a non-existent file path', () => {
  rewrite('foobar', 'foobar');
  expect(directory.get()).toEqual({
    './foo': 'bar',
    './baz': 'qux',
    './foobar': 'foobar',
  });
});
