import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.error('Failed to store data', error);
        throw new Error('Failed to store data');
    }
}

export const getData = async (key: string) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        console.error('Failed to get data', error);
        throw new Error('Failed to get data');
    }
}

export const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error('Failed to remove data', error);
        throw new Error('Failed to remove data');
    }
}