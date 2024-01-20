const express = require('express');
const router = express.Router();

const testRoutes = require('./testRoutes');
const blogRoutes = require('./blogRoutes');
const authRoutes = require('./authRoutes');

// test routes
router.use('/test', testRoutes);
//blog routes
router.use('/blog', blogRoutes);
//auth routes
router.use('/auth', authRoutes);



module.exports = router;
