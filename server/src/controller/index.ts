import prisma from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

const test = (req, res) => {
    res.send('Welcome to Train Booking API');
}

const register = async (req, res) => {
    const { email, username, password } = req.body;
    try {

        const isExistingUser = await prisma.user.findFirst({ where: { username } });

        if (isExistingUser) {
            return res.status(400).json({ status: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                username,
                password: hashedPassword,
                role: 'USER'
            },
        });

        res.status(201).json({ status: 'Account successfully created', user_id: user.id });
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to create account' });
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { username } });

        if (!user) {
            return res.status(401).json({ status: 'Invalid credentials' });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ status: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ status: 'Login successful', user_id: user.id, access_token: token });
    }
    catch (error) {
        res.status(500).json({ status: 'Failed to login' });
    }
}

const getRole = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({ where: { id: req.user.id } });
        res.json({ role: user!.role });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch user role' });
    }
}

const createTrain = async (req, res) => {
    const { name, source, seat_capacity, destination, arrival_time_at_source, arrival_time_at_destination } = req.body;
    try {
        const train = await prisma.train.create({
            data: {
                name: name,
                source,
                destination,
                totalSeats: seat_capacity,
                availableSeats: seat_capacity,
                arrivalTimeAtSource: arrival_time_at_source,
                arrivalTimeAtDestination: arrival_time_at_destination,
            },
        });
        res.status(201).json({ message: 'Train added successfully', train_id: train.id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to add train' });
    }
}

const getTrains = async (req, res) => {
    const { source, destination } = req.query;

    try {
        const trains = await prisma.train.findMany({
            where: {
                source: source || undefined,
                destination: destination || undefined,
            },
        });
        res.json(trains);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch trains' });
    }
}

const bookTrain = async (req, res) => {
    const { train_id } = req.body;

    try {
        const train = await prisma.train.findUnique({ where: { id: train_id } });

        if (!train || train.availableSeats <= 0) {
            return res.status(400).json({ message: 'No seats available' });
        }

        await prisma.train.update({
            where: { id: train_id },
            data: { availableSeats: { decrement: 1 } },
        });

        const booking = await prisma.booking.create({
            data: {
                trainId: train_id,
                userId: req.user.id
            },
        });

        res.status(201).json({ message: 'Seat booked', booking });
    } catch (error) {
        console.log(error, 'error');
        res.status(500).json({ message: 'Booking failed' });
    }
}


const getBookingDetails = async (req, res) => {
    const { id } = req.params;

    try {
        const booking = await prisma.booking.findUnique({
            where: { id: parseInt(id) },
            include: {
                train: true,
                user: true,
            },
        });

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.json({
            booking_id: booking.id,
            train_id: booking.train.id,
            train_name: booking.train.name,
            user_id: booking.userId,
            user_name: booking.user.username,
            source: booking.train.source,
            destination: booking.train.destination,
            arrival_time_at_source: booking.train.arrivalTimeAtSource,
            arrival_time_at_destination: booking.train.arrivalTimeAtDestination,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error retrieving booking details' });
    }
}

const getAllBookingDetails = async (req, res) => {
    try {
        const bookings = await prisma.booking.findMany({
            where: { userId: req.user.id },
            include: {
                train: true,
            },
        });

        res.json(
            bookings.map(booking => ({
                booking_id: booking.id,
                train_id: booking.train.id,
                train_name: booking.train.name,
                source: booking.train.source,
                destination: booking.train.destination,
                booking_date: booking.createdAt,
                user_id: booking.userId,
                arrival_time_at_source: booking.train.arrivalTimeAtSource,
                arrival_time_at_destination: booking.train.arrivalTimeAtDestination,
            }))
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error retrieving booking details' });
    }
}

export { register, login, getRole, createTrain, getTrains, bookTrain, getBookingDetails, getAllBookingDetails, test };