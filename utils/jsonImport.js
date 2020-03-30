const importJSON = (path, cb) => {
    fs.readFile(require.resolve(path), (err, data) => {
        if (err) {
            cb(err);
        } else {
            cb(null. JSON.parse(data));
        }
    })
}

module.exports = importJSON;