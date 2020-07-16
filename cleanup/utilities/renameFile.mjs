const rename = (file, to) => fs.rename(file, to, (err) => { if (err) throw err; });

export default rename;
