import { FlatList, TouchableOpacity, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selecetOrigin } from "../slices/coorSlice";

const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "Ride",
  },
  {
    id: "2",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "PickRide",
  },
];

const ServicesOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selecetOrigin);

  return (
    <View style={{ height: 265 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 mr-6 w-40 `}
            onPress={() => {
              navigation.navigate(item.screen);
            }}
            disabled={!origin}
          >
            <View style={tw`${!origin && "opacity-40"}`}>
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
              <Text style={tw`mt-4 text-lg font-semibold`}>{item.title}</Text>
              <Icon
                style={tw`p-2 bg-black font-semibold rounded-full w-10 mt-4`}
                name="arrowright"
                color="white"
                type="antdesign"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ServicesOptions;
