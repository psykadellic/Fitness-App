import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import FitScreen from './screens/FitScreen';



const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name = {homeName} component = {HomeScreen} options = {{ headerShown: false }}/>
    <HomeStack.Screen name = {"Workout"} component = {WorkoutScreen} options = {{headerShown: false}}/>
    <HomeStack.Screen name = {"Fit"} component = {FitScreen} options = {{headerShown: false}}/>
  </HomeStack.Navigator>
)

const homeName = "Home";
const detailsName = "Activity";
const settingsName = "Profile";



const Tab = createBottomTabNavigator();



function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarIcon={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeStackScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>

    </NavigationContainer>
  );
}

export default MainContainer;