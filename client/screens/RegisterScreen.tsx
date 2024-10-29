import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from '../styles/screens/RegisterScreen';
import { RegisterScreenProp } from "../types";
import useRegister from '../hooks/useRegister';

const RegisterScreen = ({ navigation }: RegisterScreenProp) => {
    const { registerUser, loading } = useRegister(navigation);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        registerUser(username, email, password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <Text>Username</Text>
            <TextInput value={username} onChangeText={setUsername} style={styles.input} />
            <Text>Email</Text>
            <TextInput value={email} onChangeText={setEmail} style={styles.input} />
            <Text>Password</Text>
            <TextInput value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
            <Pressable style={styles.loginButton} onPress={handleRegister} disabled={loading}>
                <Text style={styles.btnText}>
                    {loading ? 'Loading...' : 'Register'}
                </Text>
            </Pressable>
            <View style={styles.textWrapper}>
                <Text style={styles.textColor}>Already have an account? </Text>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.linkText}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default RegisterScreen;