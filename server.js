const express = require('express');
const cors = require('cors'); // CORS is a node.js package for providing a Connect/Express
// middleware that can be used to enable CORS with various options. Make sure it is installed.
const app = express();
const PORT = process.env.PORT || 3001;
// Middleware to parse JSON requests
app.use(express.json());
// Enable CORS for all origins
app.use(cors());

// MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const postSchema = new mongoose.Schema({
    title: String,
    content: String
  });
  
  const Post = mongoose.model('Post', postSchema);

  app.get('/api/posts', async (req, res) => {
    try {
      const posts = await Post.find({});
      res.json(posts);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  app.post('/api/posts', async (req, res) => {
    const { title, content } = req.body;
  
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }
  
    const newPost = new Post({ title, content });
  
    try {
      await newPost.save();
      res.status(201).json(newPost);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
// Example posts array (initial data)
// TO DO: Initialize your blog posts data
// Initialize posts array

// Route to get all blog posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});
app.get('/api/homeData', (req, res) => {
    const homeData = {
        message: 'Welcome to our website! Explore our blog for interesting articles.'
    };
    res.json(homeData);
});
// Route to create a new blog post
app.post('/api/posts', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }
    const newPost = { id: Date.now(), title, content };
    posts.push(newPost);
    res.status(201).json(newPost);
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});