import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/Home";
import FavouriteScreen from "../screens/Favourite";
import SearchSearch from "../screens/SearchSearch";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}
                        options={{
                            tabBarLabel: 'Главная',
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name="home" color={color} size={size}/>
                            ),
                        }}
            />
            <Tab.Screen name="Favourite" component={FavouriteScreen}
                        options={{
                            tabBarLabel: 'Избранные',
                            tabBarIcon: ({color, size}) => (
                                <MaterialIcons name="favorite-outline" size={24} color={color} />
                            ),
                        }}
            />
            <Tab.Screen name="Search" component={SearchSearch}
                        options={{
                            tabBarLabel: 'Поиск',
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name="search" color={color} size={size}/>
                            ),
                        }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavigation;