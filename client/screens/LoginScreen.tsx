import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from '../styles/screens/RegisterScreen';
import { LoginScreenProp } from '../types';
import useLogin from '../hooks/useLogin';

const LoginScreen = ({ navigation }: LoginScreenProp) => {
    const { loginUser, loading } = useLogin(navigation);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        loginUser(username, password);
    };

    const registerUser = () => {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text>Username</Text>
            <TextInput value={username} onChangeText={setUsername} style={styles.input} />
            <Text>Password</Text>
            <TextInput value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
            <Pressable onPress={handleLogin} disabled={loading}
                style={styles.loginButton}>
                <Text
                    style={styles.btnText}>
                    {loading ? 'Loading...' : 'Login'}
                </Text>
            </Pressable>
            <View style={styles.textWrapper}>
                <Text style={styles.textColor}>
                    Don't have an account?{' '}
                    <Text onPress={registerUser} style={styles.linkText}>Register here</Text>
                </Text>
            </View>
        </View>
    );
};


export default LoginScreen;
