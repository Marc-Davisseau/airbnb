import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import MapView, { PROVIDER_GOOGLE } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import RoomScreen from "./containers/RoomScreen";
import HomeScreen from "./containers/HomeScreen";
import ProfileScreen from "./containers/ProfileScreen";
import SignInScreen from "./containers/SignInScreen";
import SignUpScreen from "./containers/SignUpScreen";
import SettingsScreen from "./containers/SettingsScreen";
import ArroundMeScreen from "./containers/ArroundMeScreen";
import SplashScreen from "./containers/SplashScreen";
import BackIcon from "./components/BackIcon";
import BackIcon2 from "./components/BackIcon2";
import { Entypo } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [id, setId] = useState(null);

  const setToken = async (token) => {
    if (token) {
      await AsyncStorage.setItem("userToken", token);
    } else {
      await AsyncStorage.removeItem("userToken");
    }

    setUserToken(token);
  };

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      // We should also handle error for production apps
      const userToken = await AsyncStorage.getItem("userToken");

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      setUserToken(userToken);

      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);

  if (isLoading === true) {
    // We haven't finished checking for the token yet
    return null;
  }

  return (

   
    <NavigationContainer>
      <Stack.Navigator>
        {userToken === null ? (
          // No token found, user isn't signed in
          <>
            <Stack.Screen name="SignIn">
              {(props) => <SignInScreen  {...props} setToken={setToken} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp">
              {(props) => <SignUpScreen {...props} setId={setId} />}
            </Stack.Screen>
          </>
        ) : (
          // User is signed in ! 🎉
          <Stack.Screen name="Tab" options={{ headerShown: false ,  headerLayoutPreset: 'center'}}
        
         
         
         >
            {() => (
              <Tab.Navigator
                screenOptions={{
                  headerShown: false,
                  tabBarActiveTintColor: "tomato",
                  tabBarInactiveTintColor: "gray",
          
                }}
              >
                <Tab.Screen
                  name="TabHome"
                  options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name={"ios-home"} size={size} color={color} />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                      
                        name="Home"
                        options={{
                           
                        headerTitle: ()=> <BackIcon />,
                          headerStyle: { backgroundColor: "white" },
                           headerTitleStyle: { color: "white" },
                  
                        }}
                      >



                        
                        {() => <HomeScreen />}
                      </Stack.Screen>

                      <Stack.Screen
                      
                        name="Room"
                        options={{
                        headerBackVisible: false,
                           headerLeft: ()=> <BackIcon2 />,
                           headerTitle: ()=> <BackIcon />,
                          title: "Room",
                        }}
                      >
                     {(props) => <RoomScreen {...props}/>}
                      </Stack.Screen>


                      <Stack.Screen
                        name="Profile"
                        options={{
                          title: "User Profile",
                        }}
                      >
                        {() => <ProfileScreen />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>


                <Tab.Screen
                  name="Arround Me"
                  options={{
                    tabBarLabel: "Arround me",
            
                    tabBarIcon: ({ color, size }) => (
                      <Entypo name="location-pin" size={24} color="black" />
                      
                      
                    )
                  }} 
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="ArroundMe"
                        options={{
                          title: "ArroundMe",
                          headerTitle: ()=> <BackIcon />
                        }}
                      >
                        {() => <ArroundMeScreen setToken={setToken} />}
                      </Stack.Screen>




                      
                    </Stack.Navigator>
                  )}
                </Tab.Screen>






                <Tab.Screen
                  name="TabSettings"
                  options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons
                        name={"ios-options"}
                        size={size}
                        color={color}
                      />
                      
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Settings"
                        options={{
                          title: "Settings",
                        }}
                      >
                        {() => <SettingsScreen setToken={setToken} />}
                      </Stack.Screen>




                      
                    </Stack.Navigator>
                  )}
                </Tab.Screen>

               


              </Tab.Navigator>
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
