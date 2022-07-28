import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectTravelTimeInfo } from "../slices/coorSlice";
import 'intl';
import 'intl/locale-data/jsonp/en';

const data = [
  {
    id: "1",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "2",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "3",
    title: "Uber LUX",
    multiplier: 1.65,
    image: "https://links.papareact.com/7pf",
  },
];
const CHARGE_RATE = 1.5;

const PickRide = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInfo = useSelector(selectTravelTimeInfo);
  return (
    <TouchableWithoutFeedback  onPress={()=>setSelected(null)}>
      <SafeAreaView style={tw`flex-grow bg-white`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOption")}
          style={tw`absolute top-3 left-5 p-3 rounded-full z-50`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInfo?.distance?.text}</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 h-20 ${
              item.id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: item.image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text>{travelTimeInfo?.duration?.text}</Text>
            </View>
            <Text style={tw`text-xl`}>{
              //calculating the price of the ride
              new Intl.NumberFormat('de-DE',{
                style:'currency',
                currency:'EUR'
              }).format(
                (travelTimeInfo?.duration?.value * CHARGE_RATE * item.multiplier)/100
              )
            }</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
          <Text style= {tw`text-center text-white text-xl ${!selected && "text-black"}`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
          </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default PickRide;
