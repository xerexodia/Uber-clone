
import { GlobalContainer } from "../components/styles";
import Logo from "../components/Logo";
import ServicesOptions from "../components/ServicesOptions";
import InputAutoComplete from "../components/InputAutoComplete";
import { setOrigin, setDestination } from "../slices/coorSlice";
import { useDispatch } from "react-redux";
import NavFavourites from "../components/NavFavourites";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // dispatching data to the origin reducer threw the input field
  const chooseLoc = (data, details = null) => {
    dispatch(
      setOrigin({
        location: details.geometry.location,
        description: data.description,
      })
    );
    dispatch(setDestination(null));
    console.log(details.geometry.location);
  };
  // dispatching data to the origin reducer threw the fav buttons
  const favLocation = (location, description) => {
    dispatch(
      setOrigin({
        location,
        description,
      })
    );
      dispatch(setDestination(null))
    navigation.navigate("Ride");
  };

  return (
    <GlobalContainer>
      <Logo />
      <InputAutoComplete placeholder="Where from ?" onPress={chooseLoc} />
      <ServicesOptions />
      <NavFavourites onPress={favLocation} />
    </GlobalContainer>
  );
};

export default Home;
