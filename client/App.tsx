import {StyleSheet} from 'react-native';
import BottomNavigation from "./src/components/BottomNavigation";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
    return (
        <NavigationContainer>
            <BottomNavigation/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
