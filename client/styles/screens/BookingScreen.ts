import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    label: {
        fontSize: 16,
        marginVertical: 10,
        fontWeight: 'bold',
        color: '#555',
    },
    value: {
        fontWeight: 'normal',
        color: '#333',
    },
    errorText: {
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
    },
    noBookingText: {
        fontSize: 18,
        color: '#d9534f',
        textAlign: 'center',
        marginTop: 50,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
