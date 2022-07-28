import styled from "styled-components/native";
import Canstants from 'expo-constants';
import { Dimensions } from "react-native";

const {height} = Dimensions.get('window')

const statusBarHeight = Canstants.statusBarHeight;

export const GlobalContainer = styled.View`
    padding-top:${statusBarHeight+5}px;
    padding-left: 10px;
    background-color: white;
    height: ${height}px;
`;