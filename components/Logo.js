import { View, Image } from "react-native";

const Logo = () => {
  return (
    <View>
      <Image
        style={{
          width: 120,
          height: 120,
          resizeMode: "contain",
        }}
        source={{
          uri: "https://links.papareact.com/gzs",
        }}
      />
    </View>
  );
};

export default Logo;
