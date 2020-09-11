import map from 'map-obj';
import filter from 'filter-obj';
import directory from './directory.mjs';

const fs = jest.createMockFromModule('fs');

const rename = (path, to) => directory.set(map(
  directory.files, (key, val) => (key === path ? [to, val] : [key, val]),
));

fs.rename = rename;

export default fs;
