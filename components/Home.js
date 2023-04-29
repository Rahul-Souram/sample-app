import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";

const HomeHeader = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const HomeFooter = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Container = styled.SafeAreaView`
  flex: 1;
  padding: 10px 20px;
  background: #000;
`;
const Search = styled.TextInput`
  background: #323232;
  border-radius: 10px;
  color: #fff;
  padding: 10px;
  margin: 20px 10px;
`;
const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 10px;
`;
const TypeButton = styled.TouchableOpacity`
  padding: 10px 10px;
  title-align: center;
  width: 30%;
  border-radius: 50px;
`;
const Title = styled.Text`
  font-weight: 600;
  text-align: center;
  font-size: 16px;
`;
const ColumnContainer = styled.View`
  flex: 3;
  margin: 10px auto;
  flex-direction: column;
  width: 100%;
`;
const ListContainer = styled.View`
  background: #323232;
  padding: 16px;
  border-radius: 20px;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px auto;
`;
const ListTitle = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const Home = ({ navigation }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Container>
      <HomeHeader>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../icons/back.jpeg")}
        />
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
              style={{ width: 40, height: 40 }}
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
            backgroundColor: active ? "#1C90FF" : "black",
          }}
        >
          <Title style={{ color: active ? "white" : "gray" }}>All</Title>
        </TypeButton>
        <TypeButton
          onPress={() => handleClick()}
          style={{
            backgroundColor: active ? "black" : "#1C90FF",
          }}
        >
          <Title style={{ color: active ? "gray" : "white" }}>Favourite</Title>
        </TypeButton>
      </ButtonContainer>
      <ColumnContainer>
        <ListContainer>
          <Image
            style={{ width: 30, height: 30 }}
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
            style={{ width: 30, height: 30 }}
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
            style={{ width: 30, height: 30 }}
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
            style={{ width: 30, height: 30 }}
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
            style={{ width: 30, height: 30 }}
            source={require("../icons/list-icon4.jpeg")}
          />
          <ListTitle>Finalize pitch deck</ListTitle>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../icons/next.jpeg")}
          />
        </ListContainer>
      </ColumnContainer>
      <HomeFooter>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../icons/home.jpeg")}
        />

        <Image
          style={{ width: 40, height: 40 }}
          source={require("../icons/plus.jpeg")}
        />
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../icons/paste.jpeg")}
        />
      </HomeFooter>
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
