import React from 'react';
import { Text, View, Pressable } from 'react-native';
import useCreateTrain from '../hooks/useCreateTrain';
import CreateTrainForm from '../components/CreateTrainForm';
import { CreateTrainScreenProp } from '../types';
import styles from '../styles/screens/CreateTrainScreen';

const CreateTrain = ({ navigation }: CreateTrainScreenProp) => {
    const { loading, handleCreateTrain } = useCreateTrain();

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Pressable onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
                    <Text style={styles.homeButtonText}>Home</Text>
                </Pressable>
                <Text style={styles.title}>Create Train</Text>
            </View>
            <CreateTrainForm loading={loading} onCreateTrain={handleCreateTrain} />
        </View>
    );
};

export default CreateTrain;