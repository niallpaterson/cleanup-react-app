const remove = (file) => fs.unlink(`./${file}`, (err) => { if (err) throw err; });

export default remove;