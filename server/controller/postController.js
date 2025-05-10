const db = require('../db');

exports.savePost = async (req, res) => {
  const { username, content } = req.body;

  try {
    await db.query(
      'INSERT INTO "posts" (username, content) VALUES ($1, $2)',
      [username, content]
    );
    res.status(201).send({ message: 'Post saved' });
  } catch (err) {
    console.error('Save post error:', err.message);
    res.status(500).send({ error: 'Failed to save post' });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM posts ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Get posts error:', err.message);
    res.status(500).send({ error: 'Failed to fetch posts' });
  }
};
