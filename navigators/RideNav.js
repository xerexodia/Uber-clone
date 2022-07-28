import { createStackNavigator ,TransitionPreset,
  CardStyleInterpolators,} from "@react-navigation/stack"
import PickRide from "../components/PickRide"
import RideOption from "../components/RideOption"



const Stack = createStackNavigator()
const RideNav = () => {
  return (
     <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators
        .forHorizontalIOS,
      }}
    >
      <Stack.Screen name="RideOption" component={RideOption} />
      <Stack.Screen name="PickRide" component={PickRide} />
    </Stack.Navigator>
  )
}

export default RideNav