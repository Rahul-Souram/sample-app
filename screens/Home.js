import React, { useState } from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Footer from "../components/Footer";

const HomeHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top:50px;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 10px 20px;
  background: #1A1A1A;
`;
const Search = styled.TextInput`
  background: #323232;
  border-radius: 10px;
  color: #fff;
  padding: 10px;
  margin: 10px 10px 20px;
`;
const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 10px;
  align-items:center;
`;
const TypeButton = styled.TouchableOpacity`
  padding: 10px;
  title-align: center;
  width: 25%;
  border-radius: 40px;
`;
const Title = styled.Text`
  font-weight: 600;
  text-align: center;
  font-size: 14px;
`;
const ColumnContainer = styled.View`
  flex: 3;
  margin: 10px auto;
  flex-direction: column;
  width: 100%;
`;
const ListContainer = styled.View`
  background: #323232;
  padding: 10px;
  border-radius: 20px;
  width: 95%;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px auto;
  align-items: center;
`;
const ListTitle = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const Home = ({ navigation }) => {
  const [active, setActive] = useState(true);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Container>
      <HomeHeader>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("LandingPage");
          }}
        >
          <Image
            style={{ width: 45, height: 45 }}
            source={require("../icons/back.jpeg")}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Daily progress</Text>
        <ButtonContainer>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../icons/search.jpeg")}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Image
              style={{ width: 45, height: 45 }}
              source={require("../icons/profile.jpeg")}
            />
          </TouchableOpacity>
        </ButtonContainer>
      </HomeHeader>
      <Search value="Search" />
      <ButtonContainer>
        <TypeButton
          onPress={() => handleClick()}
          style={{
            backgroundColor: active ? "#1C90FF" : "transparent",
          }}
        >
          <Title  style={{ color: active ? "white" : "gray" }}>All</Title>
        </TypeButton>
        <TypeButton
          onPress={() => handleClick()}
          style={{
            backgroundColor: active ? "transparent" : "#1C90FF",
          }}
        >
          <Title
          style={{ color: active ? "gray" : "white" }}>Favorite</Title>
        </TypeButton>
      </ButtonContainer>
      <ColumnContainer>
        <ListContainer>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../icons/list-icon3.jpeg")}
          />
          <ListTitle>Read The Lean Startup</ListTitle>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../icons/next.jpeg")}
          />
        </ListContainer>
        <ListContainer>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../icons/list-icon1.jpeg")}
          />
          <ListTitle>Fixing Landing page</ListTitle>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../icons/next.jpeg")}
          />
        </ListContainer>
        <ListContainer>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../icons/list-icon4.jpeg")}
          />
          <ListTitle>Share prototype with team</ListTitle>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../icons/next.jpeg")}
          />
        </ListContainer>
        <ListContainer>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../icons/list-icon2.jpeg")}
          />
          <ListTitle>Reply to Richard</ListTitle>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../icons/next.jpeg")}
          />
        </ListContainer>
        <ListContainer>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../icons/list-icon4.jpeg")}
          />
          <ListTitle>Finalize pitch deck</ListTitle>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../icons/next.jpeg")}
          />
        </ListContainer>
      </ColumnContainer>
      <Footer navigation={navigation}/>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default Home;
