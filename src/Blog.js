import React, { useState, useEffect } from 'react';

function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div>
            <h2>Blog Posts</h2>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Blog;
