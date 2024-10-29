import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
    TrainList: undefined;
    CreateTrain: undefined;
    BookingList: undefined;
    Booking: { booking_id: string };
};

type HomeScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

type BookingDetailsProps = {
    route: RouteProp<{ params: { booking_id: string } }, 'params'>;
    navigation: StackNavigationProp<RootStackParamList, 'Booking'>;
}

type CreateTrainScreenProp = {
    navigation: StackNavigationProp<RootStackParamList, 'CreateTrain'>;
}

type LoginScreenProp = {
    navigation: StackNavigationProp<RootStackParamList, 'Login'>;
}

type TrainListScreenProp = {
    navigation: StackNavigationProp<RootStackParamList, 'TrainList'>;
}

type RegisterScreenProp = {
    navigation: StackNavigationProp<RootStackParamList, 'Register'>;
}

type BookingListScreenProp = {
    navigation: StackNavigationProp<RootStackParamList, 'BookingList'>;
}

interface FilterProps {
    sourceFilter: string;
    setSourceFilter: (value: string) => void;
    destinationFilter: string;
    setDestinationFilter: (value: string) => void;
}

interface BookingItemProps {
    booking: {
        id: number;
        train_name: string;
        source: string;
        destination: string;
        booking_id: string;
        booking_date: string;
    };
}

interface CreateTrainFormProps {
    loading: boolean;
    onCreateTrain: (trainName: string, source: string, destination: string, seatCapacity: string, arrivalTimeAtSource: Date, arrivalTimeAtDestination: Date) => void;
}

export type { HomeScreenProps, BookingDetailsProps, CreateTrainScreenProp, LoginScreenProp, TrainListScreenProp, RegisterScreenProp, BookingListScreenProp, FilterProps, BookingItemProps, CreateTrainFormProps };