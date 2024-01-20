const express = require('express');
const router = express.Router();

const { blogValidationSchema } = require('../src/validations');

const { BlogController, } = require('../src/controllers');
const { middleware } = require('../helpers');

router.post('/', middleware(['validation'],blogValidationSchema), BlogController.create);
router.get('/', middleware(['auth']), BlogController.index);
router.get('/:id', BlogController.show);
router.put('/:id', BlogController.update);
router.delete('/:id', BlogController.delete);

module.exports = router;