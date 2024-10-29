import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen, RegisterScreen, HomeScreen, TrainListScreen, BookingListScreen, CreateTrainScreen, BookingScreen } from '../screens';
import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen}
                options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Home" component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="TrainList" component={TrainListScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="CreateTrain" component={CreateTrainScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="BookingList" component={BookingListScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Booking" component={BookingScreen as React.FC}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;
