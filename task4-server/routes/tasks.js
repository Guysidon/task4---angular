var express = require('express');
var router = express.Router();
const { Task } = require('../models/task');

router.get('/', async function (req, res, next) {
    const tasks = await Task.find().select({ description: 1, created: 1, person_id: 1 }).exec();
    res.send(tasks);
});

router.get('/:id', async function (req, res, next) {
    const { id } = req.params;
    try {
        const task = await Tasks.findById(id).exec();
        res.send(task);
    } catch (e) {
        res.status(404).send('not found');
    }
});

router.post('/', async (req, res) => {
    const {description, created, person_id} = req.body;
    const task = new Task({description, created, person_id});
    try {
        const document = await task.save();
        res.status(200).send(document);
    } catch (e) {
         res.status(400).send(e);
    }
 });
 
 router.delete('/:id', async function (req, res, next) {
    const { id } = req.params;
    try {
        const task = await Task.deleteOne({"_id":id});
        res.send(task)
    } catch (e) {
        res.status(404).send('not found');
    }
});
    
module.exports = router;