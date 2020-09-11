import map from 'map-obj';
import filter from 'filter-obj';
import directory from './directory.mjs';

const fs = jest.createMockFromModule('fs');

const rename = (path, to) => directory.set(map(
  directory.files, (key, val) => (key === path ? [to, val] : [key, val]),
));

const unlink = (path) => directory.set(filter(
  directory.files, (key) => key !== path,
));

const existsSync = (path) => Object.prototype.hasOwnProperty.call(directory.get(), path);

fs.rename = rename;
fs.existsSync = existsSync;
fs.unlink = unlink;

export default fs;
