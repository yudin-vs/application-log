const express = require('express');
const router = express.Router();
const config = require('./config/config');

router.get('/', (req, res) => {
  res.status(200).send(config.resources);
});

module.exports = router;
