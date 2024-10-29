import React from 'react';
import { View, Alert, Text, ActivityIndicator, Pressable } from 'react-native';
import styles from '../styles/screens/HomeScreen';
import { removeData } from '../utils';
import type { HomeScreenProps } from '../types';
import useUserRole from '../hooks/useUserRole';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
    const { isAdmin, loading } = useUserRole(navigation);

    const logout = async () => {
        try {
            await removeData('token');
            navigation.replace('Login');
        }
        catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to logout');
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Welcome to Train Booking App</Text>

            <View style={styles.BtnContainer}>
                {isAdmin && (
                    <Pressable style={styles.button} onPress={() => navigation.navigate('CreateTrain')}>
                        <Text style={styles.buttonText}>Create Train</Text>
                    </Pressable>
                )}

                <Pressable style={styles.button} onPress={() => navigation.navigate('TrainList')}>
                    <Text style={styles.buttonText}>View Trains</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate('BookingList')}>
                    <Text style={styles.buttonText}>View Bookings</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={logout}>
                    <Text style={styles.buttonText}>Logout</Text>
                </Pressable>
            </View>
        </View >
    );
};


export default HomeScreen;
