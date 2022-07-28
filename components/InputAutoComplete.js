import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";

const InputAutoComplete = (props) => {
  return (
    <GooglePlacesAutocomplete
      placeholder={props.placeholder}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      minLength={2}
      enablePoweredByContainer={false}
      query={{
        key: GOOGLE_MAPS_KEY,
        language: "en",
      }}
      onPress={props.onPress}
      fetchDetails={true}
      styles={{
        container: {
          flex: 0,
        },
        textInputContainer: {
          innerHeight: 400,
          paddingHorizontal: 20,
        },
        textInput: {
          fontSize: 18,
          backgroundColor: "#f6f8fa",
        },
      }}
    />
  );
};

export default InputAutoComplete;
