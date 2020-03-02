module.exports = (req, res, next) => {
  if (req.url === '/login' && req.method === 'POST') {
    const { username, password } = req.body;

    console.log('LOGIN!', username, password);
    res.header('Access-Control-Allow-Origin', '*');

    if (username === 'admin@your.company' && password === 'pass1') {
      return res.send({
        id: 'admin@your.company',
        firstname: 'Adam',
        lastname: 'Smith',
        isAdmin: true
      });
    }

    if (username === 'dev@your.company' && password === 'pass2') {
      return res.send({
        id: 'dev@your.company',
        firstname: 'Adam',
        lastname: 'Smith',
        isAdmin: false
      });
    }

    console.log('LOGIN FAILED!');
    res.status(401);
    return res.end();
  }

  next();
};
