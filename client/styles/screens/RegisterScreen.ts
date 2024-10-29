import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        marginBottom: 10,
        color: '#000',
    },
    loginButton: {
        backgroundColor: '#0056b3',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    textColor: {
        color: '#000',
        fontSize: 16,
    },
    linkText: {
        color: '#0056b3',
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;