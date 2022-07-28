import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import MapBox from '../components/MapBox'
import RideOption from '../components/RideOption'
import RideNav from '../navigators/RideNav'

const RideScreen = () => {
  return (
    <View>
      
      <View style={tw`h-1/2`}><MapBox/></View>
      <View style={tw`h-1/2`}><RideNav/></View>
    </View>
  )
}

export default RideScreen