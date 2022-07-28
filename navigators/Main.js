import {
  createStackNavigator,
  TransitionPreset,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Home from "../screens/Home";
import RideScreen from "../screens/RideScreen";
import "react-native-gesture-handler";
import { Card } from "react-native-elements";
import RideNav from "./RideNav";
import { KeyboardAvoidingView, Platform } from "react-native";


const Stack = createStackNavigator();

const Main = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios'?"padding":"height"}
      style={{flex:1}}
      keyboardVerticalOffset={Platform.OS === "ios"?-64:0}
    >
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators
        .forHorizontalIOS,
      }}
      
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Ride" component={RideScreen} />
    </Stack.Navigator>
    </KeyboardAvoidingView>
  );
};

export default Main;
