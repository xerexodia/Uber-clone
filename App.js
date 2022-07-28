import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./navigators/Main";
import 'react-native-gesture-handler';
import RideNav from "./navigators/RideNav";


export default function App() {
  return (
    <Provider store={store}>
      
      <NavigationContainer>
        <SafeAreaProvider>
          <Main />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
