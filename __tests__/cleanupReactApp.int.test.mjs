import cleanupReactApp from '../cleanupReactApp/cleanupReactApp.mjs';
import directory from '../__mocks__/directory.mjs';
import cleanup from '../cleanupReactApp/cleanup/cleanup.mjs';
import warnUser from '../cleanupReactApp/prompts/warnUser.mjs';
import askToProceed from '../cleanupReactApp/prompts/askToProceed.mjs';

jest.mock('fs');
jest.mock('../cleanupReactApp/cleanup/cleanup.mjs');
jest.mock('../cleanupReactApp/prompts/warnUser.mjs');
jest.mock('../cleanupReactApp/prompts/askToProceed.mjs');

afterEach(() => {
  jest.clearAllMocks();
});

it('starts cleanup if there are no missing or modified files', () => {
  directory.setCorrectFiles();
  cleanupReactApp('root');
  expect(cleanup).toHaveBeenCalled();
});

it('does not warn the user if there are no missing or modified files', () => {
  directory.setCorrectFiles();
  cleanupReactApp('root');
  expect(warnUser).not.toHaveBeenCalled();
});

it('does not ask to proceed if there are no missing or modified files', () => {
  directory.setCorrectFiles();
  cleanupReactApp('root');
  expect(askToProceed).not.toHaveBeenCalled();
});

it('warns the user if there are modified files', () => {
  directory.setIncorrectContent();
  cleanupReactApp('root');
  expect(warnUser).toHaveBeenCalled();
});

it('asks to proceed if there are modified files', () => {
  directory.setIncorrectContent();
  cleanupReactApp('root');
  expect(askToProceed).toHaveBeenCalled();
});

it('warns the user if there are missing files', () => {
  directory.setPartiallyCorrectFiles();
  cleanupReactApp('root');
  expect(warnUser).toHaveBeenCalled();
});

it('asks to proceed if there are missing files', () => {
  directory.setPartiallyCorrectFiles();
  cleanupReactApp('root');
  expect(askToProceed).toHaveBeenCalled();
});

it('does not cleanup if there are missing files', () => {
  directory.setPartiallyCorrectFiles();
  cleanupReactApp('root');
  expect(cleanup).not.toHaveBeenCalled();
});

it('does not cleanup if there are modified files', () => {
  directory.setPartialIncorrectContent();
  cleanupReactApp('root');
  expect(cleanup).not.toHaveBeenCalled();
});
