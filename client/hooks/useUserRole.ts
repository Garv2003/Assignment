import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import { getData } from '../utils';

const useUserRole = (navigation: any) => {
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchUserRole = async () => {
        try {
            const token = await getData('token');

            if (!token) {
                return navigation.replace('Login');
            }

            const response = await axios.get(`${process.env.API_URL}/api/user/role`, {
                headers: { Authorization: token },
            });

            if (response.data.role === 'ADMIN') {
                setIsAdmin(true);
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to fetch user role');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserRole();
    }, []);

    return { isAdmin, loading };
};

export default useUserRole;
