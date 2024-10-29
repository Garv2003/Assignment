import React, { useState } from 'react';
import { Text, TextInput, ScrollView, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styles/screens/CreateTrainScreen';
import { CreateTrainFormProps } from '../types';

const CreateTrainForm: React.FC<CreateTrainFormProps> = ({
    loading,
    onCreateTrain,
}) => {
    const [trainName, setTrainName] = useState('');
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [seatCapacity, setSeatCapacity] = useState('');
    const [arrivalTimeAtSource, setArrivalTimeAtSource] = useState(new Date());
    const [arrivalTimeAtDestination, setArrivalTimeAtDestination] = useState(new Date());
    const [showPickerSource, setShowPickerSource] = useState(false);
    const [showPickerDestination, setShowPickerDestination] = useState(false);

    const showSourcePicker = () => {
        setShowPickerSource(true);
    };

    const showDestinationPicker = () => {
        setShowPickerDestination(true);
    };

    const onChangeSource = (event: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || arrivalTimeAtSource;
        setShowPickerSource(false);
        setArrivalTimeAtSource(currentDate);
    };

    const onChangeDestination = (event: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || arrivalTimeAtDestination;
        setShowPickerDestination(false);
        setArrivalTimeAtDestination(currentDate);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.label}>Train Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter train name"
                value={trainName}
                onChangeText={setTrainName}
            />

            <Text style={styles.label}>Source</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter source station"
                value={source}
                onChangeText={setSource}
            />

            <Text style={styles.label}>Destination</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter destination station"
                value={destination}
                onChangeText={setDestination}
            />

            <Text style={styles.label}>Seat Capacity</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter seat capacity"
                value={seatCapacity}
                onChangeText={setSeatCapacity}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Arrival Time at Source</Text>
            <Pressable onPress={showSourcePicker} style={styles.pressable}>
                <Text style={styles.pressableText}>
                    {arrivalTimeAtSource.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Text>
            </Pressable>
            {showPickerSource && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={arrivalTimeAtSource}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={onChangeSource}
                />
            )}

            <Text style={styles.label}>Arrival Time at Destination</Text>
            <Pressable onPress={showDestinationPicker} style={styles.pressable}>
                <Text style={styles.pressableText}>
                    {arrivalTimeAtDestination.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Text>
            </Pressable>
            {showPickerDestination && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={arrivalTimeAtDestination}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={onChangeDestination}
                />
            )}

            <Pressable onPress={() => onCreateTrain(trainName, source, destination, seatCapacity, arrivalTimeAtSource, arrivalTimeAtDestination)} style={styles.pressable}>
                <Text style={styles.pressableText}>
                    {loading ? 'Creating Train...' : 'Create Train'}
                </Text>
            </Pressable>
        </ScrollView>
    );
};

export default CreateTrainForm;
