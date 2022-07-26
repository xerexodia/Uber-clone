import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef, useEffect, useCallback } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  selecetOrigin,
  selectDestination,
  setTravelTimeInfo,
} from "../slices/coorSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_KEY } from "@env";
import {
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import MenuButton from "./MenuButton";

const MapBox = () => {
  const origin = useSelector(selecetOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      if (!origin && !destination) return;
      // zooming in the map to show direction
      mapRef.current.fitToSuppliedMarkers(
        ["origin", "destination"],
        {
          edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        },
        [origin, destination]
      );
    })
  );
    // getting the distance matrix between origin and destination
  const getTravelDistance = async () => {
    if (!origin && !destination) return;
    const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.description}&destinations=${destination?.description}&units=imperial&key=${GOOGLE_MAPS_KEY}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setTravelTimeInfo(data.rows[0].elements[0]));
      });
  };
  useEffect(() => {
    getTravelDistance();
    console.log(origin.description);
  }, [origin, destination, GOOGLE_MAPS_KEY]);

  return (
    <>
      <MenuButton />
      <MapView
        ref={mapRef}
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin?.location.lat,
          longitude: origin?.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey={GOOGLE_MAPS_KEY}
            strokeWidth={3}
            strokeColor="black"
          />
        )}
        {origin?.location && (
          <>
            <Marker
              coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
              }}
              title="origin"
              description={origin.description}
              identifier="origin"
            />
          </>
        )}
        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title="destination"
            description={destination.description}
            identifier="destination"
          />
        )}
      </MapView>
    </>
  );
};

export default MapBox;
