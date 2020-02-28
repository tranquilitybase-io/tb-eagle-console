module.exports = (req, res, next) => {
  if (req.url === '/login' && req.method === 'POST') {
    const { username, password } = req.body;

    console.log('LOGIN!', username, password);
    res.header('Access-Control-Allow-Origin', '*');

    if (username !== 'admin@your.company' || password !== 'pass1') {
      console.log('LOGIN FAILED!');
      res.status(401);

      return res.end();
    }

    return res.send({
      id: 'admin@your.company',
      firstname: 'Adam',
      lastname: 'Smith'
    });
  }

  next();
}
