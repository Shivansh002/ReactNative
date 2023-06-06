import React from "react";
import HomeScreen from "./screens/Component/homeScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ButtonsDemo from "./screens/Component/buttonsDemo";
import ImageDemo from "./screens/Component/imageDemo";
import TextDemo from "./screens/Component/textDemo";
import PhoneBook from "./screens/Component/phoneBook";
import RandomColor from "./screens/Component/colorChanger";
import { Provider } from "react-redux";
import { ReduxStore } from "./screens/store/store";

import GetUsers from "./screens/Component/getUsers";
import AsyncStore from "./screens/store/asyncStore";
import UserProfile from "./screens/Component/userProfile";
import ExtraReducer from "./screens/Component/extraReducer";
import ExtraReducerDetails from "./screens/Component/extraReducerDetails";

function App(props) {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="getUsers" component={GetUsers} />
        <Stack.Screen name="userProfile" component={UserProfile} />
        <Stack.Screen name="buttons" component={ButtonsDemo} />
        <Stack.Screen name="imageDemo" component={ImageDemo} />
        <Stack.Screen name="textDemo" component={TextDemo} />
        <Stack.Screen name="phoneBook" component={PhoneBook} />
        <Stack.Screen name="colorChanger" component={RandomColor} />
        <Stack.Screen name="async" component={AsyncStore} />
        <Stack.Screen name="extra" component={ExtraReducer} />
        <Stack.Screen name="userDetail" component={ExtraReducerDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider store={ReduxStore}>
      <App />
    </Provider>
  );
};

// s
