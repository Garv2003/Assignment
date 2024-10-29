import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    trainContainer: {
        marginBottom: 20,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 3,
    },
    trainName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    availableSeats: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    sourceDestination: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    bookButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default styles;