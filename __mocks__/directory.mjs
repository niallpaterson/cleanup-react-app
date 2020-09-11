const directory = {
  files: {},
  set(newFiles) {
    this.files = { ...newFiles };
  },
  get() {
    return this.files;
  },
};

export default directory;
