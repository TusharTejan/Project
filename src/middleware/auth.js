const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function checkBlocked(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'fgewigeduyhkbqjevkjwebdi');
    const user = await User.findById(decodedToken.userId);
    if (!user || user.isBlocked) {
      return res.status(403).json({ message: 'Access forbidden' });
    }
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Unauthorized' });
  }
}

module.exports = checkBlocked;