import express from 'express';
import { register, login, getRole, createTrain, getTrains, bookTrain, getBookingDetails, getAllBookingDetails, test } from '../controller';
import { authenticateToken, verifyAdminKey } from '../middleware';

const router: express.Router = express.Router();

router.get('/', test);

router.post('/register', register);
router.post('/login', login);

router.get("/user/role", authenticateToken, getRole);

router.post('/trains/create', verifyAdminKey, createTrain);
router.get('/trains', authenticateToken, getTrains);

router.post('/book/create', authenticateToken, bookTrain);
router.get("/bookings", authenticateToken, getAllBookingDetails);
router.get('/booking/:id', authenticateToken, getBookingDetails);

export default router;