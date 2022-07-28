import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import InputAutoComplete from "./InputAutoComplete";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/coorSlice";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";

const RideOption = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favLocation = (location, description) => {
    dispatch(
      setDestination({
        location,
        description,
      })
    );
    navigation.navigate("PickRide");
  };
  return (
    <View style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Shiny!</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <InputAutoComplete
            placeholder="where to?"
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
            }}
          />
        </View>
        <NavFavourites onPress={favLocation} />
        <View style={tw`flex justify-center items-center mt-5`}>
          <TouchableOpacity
            style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full`}
            onPress={() => {
              navigation.navigate("PickRide");
            }}
          >
            <Icon name="car" type="font-awesome" color="white" size={16} />
            <Text style={tw`text-white text-center pl-2`}>Rides</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RideOption;
