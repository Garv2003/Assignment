import { useState } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';

const useRegister = (navigation: any) => {
    const [loading, setLoading] = useState<boolean>(false);

    const registerUser = async (username: string, email: string, password: string) => {
        if (!username || !email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        try {
            setLoading(true);
            await axios.post(`${process.env.API_URL}/api/register`, {
                username,
                email,
                password,
            });
            Alert.alert('Success', 'User registered successfully');
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Error', 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return { registerUser, loading };
};

export default useRegister;
