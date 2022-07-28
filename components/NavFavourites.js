import { FlatList, TouchableOpacity, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selecetOrigin } from "../slices/coorSlice";

const data = [
  {
    id: "1",
    icon: "briefcase",
    locationString: "work",
    destination: "Sousse, tunisia",
    location: {
      lat: 35.8245029,
      lng: 10.634584,
    },
  },
  {
    id: "2",
    icon: "home",
    locationString: "home",
    destination: "Tunis,tunisia",
    location: {
      lat: 36.8475562,
      lng: 10.2175601,
    },
  },
];

const NavFavourites = (props) => {
  const origin = useSelector(selecetOrigin);
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => {
        return <View style={[tw`bg-gray-200`, { height: 0.7 }]} />;
      }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-5`}
          onPress={() => props.onPress(item.location, item.destination)}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-200 p-3`}
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.locationString}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
