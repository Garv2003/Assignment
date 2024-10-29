import React from 'react';
import { View, TextInput } from 'react-native';
import { FilterProps } from '../types';
import styles from '../styles/components/Filter';

const Filter: React.FC<FilterProps> = ({
    sourceFilter,
    setSourceFilter,
    destinationFilter,
    setDestinationFilter,
}) => {
    return (
        <View style={styles.filterContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Filter by Source"
                    placeholderTextColor="#A9A9A9"
                    value={sourceFilter}
                    onChangeText={setSourceFilter}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Filter by Destination"
                    placeholderTextColor="#A9A9A9"
                    value={destinationFilter}
                    onChangeText={setDestinationFilter}
                />
            </View>
        </View>
    );
};

export default Filter;
