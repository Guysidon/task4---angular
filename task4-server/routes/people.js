var express = require('express');
var router = express.Router();
const { Person } = require('../models/person');

router.get('/', async function (req, res, next) {
    const persons = await Person.find().select({ name: 1, nickname: 1, description: 1 }).exec();
    res.send(persons);
});

module.exports = router;
