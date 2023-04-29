import React from "react";
import { TouchableOpacity,Image } from "react-native";
import styled from "styled-components";

const HomeFooter = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Footer = ({ navigation }) => {
  return (
    <HomeFooter>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../icons/home.jpeg")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AppStatus");
        }}
      >
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../icons/plus.jpeg")}
      />
      </TouchableOpacity>
      <Image
        style={{ width: 30, height: 30 }}
        source={require("../icons/paste.jpeg")}
      />
    </HomeFooter>
  );
};

export default Footer;
