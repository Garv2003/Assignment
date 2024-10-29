import jwt from 'jsonwebtoken';
const ADMIN_API_KEY = process.env.ADMIN_API_KEY || 'your_admin_api_key';
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// Middleware to protect admin routes
const verifyAdminKey = (req, res, next) => {
    if (req.headers['x-api-key'] === ADMIN_API_KEY) {
        next();
    } else {
        res.status(403).json({ message: 'Unauthorized' });
    }
};

// Middleware to verify JWT token
const authenticateToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Access denied' });
    try {
        const user = await jwt.verify(token, JWT_SECRET);
        req.user = user;
        next();
    }
    catch (err) {
        res.status(403).json({ message: 'Invalid token', success: false });
    }
};

export { verifyAdminKey, authenticateToken };