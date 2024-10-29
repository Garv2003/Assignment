import React, { useState } from 'react';
import { View, Text, Pressable, FlatList, ActivityIndicator } from 'react-native';
import useFetchTrains from '../hooks/useFetchTrains';
import { TrainListScreenProp } from '../types';
import styles from '../styles/TrainListScreen';
import TrainItem from '../components/TrainItem';
import Filter from '../components/Filter';

const TrainListScreen = ({ navigation }: TrainListScreenProp) => {
    const { trains, loading, error } = useFetchTrains();
    const [sourceFilter, setSourceFilter] = useState('');
    const [destinationFilter, setDestinationFilter] = useState('');

    const filteredTrains = trains.filter(train => {
        const matchesSource = train.source.toLowerCase().includes(sourceFilter.toLowerCase());
        const matchesDestination = train.destination.toLowerCase().includes(destinationFilter.toLowerCase());
        return matchesSource && matchesDestination;
    });

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Pressable onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
                    <Text style={styles.homeButtonText}>Home</Text>
                </Pressable>
                <Text style={styles.title}>List of Trains</Text>
            </View>
            <Text style={styles.label}>Filter</Text>
            <Filter
                sourceFilter={sourceFilter}
                setSourceFilter={setSourceFilter}
                destinationFilter={destinationFilter}
                setDestinationFilter={setDestinationFilter}
            />
            {loading ? (
                <ActivityIndicator size="large" color="#007BFF" />
            ) : error ? (
                <View style={styles.errorContainer}>
                    <Text
                        style={styles.errorText}
                    >{`An error occurred while fetching the data.\nPlease try again later.`}</Text>
                </View>
            ) : (
                <FlatList
                    data={filteredTrains}
                    renderItem={({ item }) => <TrainItem item={item} />}
                    keyExtractor={(train) => train.id.toString()}
                    contentContainerStyle={styles.listContainer}
                />
            )}
        </View>
    );
};

export default TrainListScreen;
