import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'

const MenuButton = () => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity
        style={tw`absolute bg-gray-100 top-10 left-8 z-50 p-3 rounded-full shadow-lg`}
        onPress={() => navigation.navigate("Home")}
      >
        <Icon name="menu" />
      </TouchableOpacity>
  )
}

export default MenuButton