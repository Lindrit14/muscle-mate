exports.index = (req, res) => {
    res.render('index.html');
  };


exports.jsonData = (req, res) => {
    const jsonData = {
        message: 'Hello, World!',
        data: {
        name: 'John Doe',
        age: 25,
        },
    };
    res.send(jsonData);
};