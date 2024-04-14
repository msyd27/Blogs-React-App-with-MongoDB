import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import NewPost from './NewPost';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'inline' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ display: 'inline', margin: '0 5px' }}>|</li>
            <li style={{ display: 'inline' }}>
              <Link to="/blog">Blog</Link>
            </li>
            <li style={{ display: 'inline', margin: '0 5px' }}>|</li>
            <li style={{ display: 'inline' }}>
              <Link to="/new-post">New Post</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
