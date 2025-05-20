const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password -__v');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({
      message: 'User profile fetched successfully',
      user
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', err });
  }
};
