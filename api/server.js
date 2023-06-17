// server için gerekli olanları burada ayarlayın
const express = require('express');
const server = express();

server.use(express.json()); // json body parser middleware

const postRouter = require('./posts/posts-router.js');

server.use('/api/posts', postRouter);

// posts router'ını buraya require edin ve bağlayın

module.exports = server;