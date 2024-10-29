import { useState } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import { storeData } from '../utils';

const useLogin = (navigation: any) => {
    const [loading, setLoading] = useState<boolean>(false);

    const loginUser = async (username: string, password: string) => {
        if (!username && !password) {
            Alert.alert('Username and Password Required', 'Please enter your username and password');
            return;
        }

        if (!username) {
            Alert.alert('Username Required', 'Please enter your username');
            return;
        }

        if (!password) {
            Alert.alert('Password Required', 'Please enter your password');
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post(`${process.env.API_URL}/api/login`, {
                username,
                password,
            });
            Alert.alert('Login Success', 'You have successfully logged in');
            await storeData('token', response.data.access_token);
            navigation.replace('Home');
        } catch (error) {
            Alert.alert('Login Failed', 'Invalid credentials');
        } finally {
            setLoading(false);
        }
    };

    return { loginUser, loading };
};

export default useLogin;
