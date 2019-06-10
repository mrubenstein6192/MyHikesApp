const router = require ('express').Router();

const apiRoutes = require('./api');

const path = require('path');


router.use('/api', apiRoutes);

if (process.env.NODE_ENV === 'production') {
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
  });
}

module.exports = router;