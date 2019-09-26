import React from "react";
import styled from "styled-components";
import img from "../assets/images/bbq.png";

export const Greeting = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: left;
  background-color: #f77754;
  height: 93vh;
  margin-top: 0;
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 0;
`;

export const ProfileBackground = styled(Greeting)`
  background-position: center;
  display: block;
`;

export const Button = styled.button`
  background: #537d91;
  color: white;
  border-radius: 3px;
  border: none;
  padding: 5px;
  margin: 20px auto;
  box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.3);
  transition: 0.1s;
  &:hover {
    filter: brightness(130%);
  }
`;

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 7vh;
  min-height: 40px;
  justify-content: space-between;
  background: #537d91;
`;

export const LogoContainer = styled.div`
  width: 60%;
  text-align: left;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 5px 30px 5px 0;
`;

export const NavLink = styled.a`
  text-decoration: none;
  padding: 5px;
  color: white;
  margin: 0 10px;
  filter: brightness(95%);
  &:hover {
    filter: brightness(80%);
    cursor: pointer;
  }
  transition: 0.1s;
`;

export const PageHeader = styled.h2`
  margin: 2% auto;
`;

export const SaveJoke = styled.button`
  background: #537d91;
  border: 1px solid black;
  border-radius: 3px
  color: white;
  filter: brightness(90%);
  padding: 2px;
  min-width: 50px;
  margin: 10px 10px;
  box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.3);
  &:hover {
    cursor: ponter;
    filter: brightness(105%);
  }
  &:activate {
    transform: translateY(1px);
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.7);
  }
`;

export const EnterJoke = styled.input`
  border-radius: 3px;
  border: 1px solid black;
  background: lightgrey;
  filter: brightness(110%);
  padding: 5px;
  box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.3);
`;

export const PrivCheckbox = styled.label`
  border: 1px red;
  display: block;
  position: relative;
  top: 0;
  left: 0;
  right: 10px;
  height: 25px;
  width: 25px;
  cursor: pointer;
  box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.3);
  &:hover {
    cursor: pointer;
    filter: brightness(60%);
    background-color: solid black;
  }
`;

export const SignIn = styled.div`
  width: 40%;
  height: 93vh;
  background: rgb(247, 119, 84);
  filter: brightness(85%);
  display: flex;
  flex-flow: column wrap;
`;

export const SignInDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-flow: column wrap;
`;

export const Input = styled.input.attrs(props => ({
  type: props.type,
  placeholder: props.placeholder || "Input Information"
}))`
  border-radius: 3px;
  border: none;
  padding: 5px;
  width: 60%;
  margin: 10px auto;
`;

export const Logo = styled.img`
  width: 45px;
  height: 45px;
  margin-left: 15px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  min-width: 360px;
  border: 1px solid black;
  margin: 10px auto;
  padding: 2%;
  border-radius: 10px;
  background: #537d91;
  color: white;
`;

export const AddJokeMain = styled(CardContainer)`
  width: 25%;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardContent = styled.p`
  font-size: 1.2rem;
  transition: 0.2s;
  margin: 0 auto;
`;
export const Emphasized = styled.p`
  font-size: 1.2rem;
  font-style: italic;
`;

export const TextBtn = styled.p`
  background: #537d91;
  filter: brightness(90%);
  border-radius: 3px;
  padding: 2px;
  min-width: 50px;
  border: 1px solid black;
  margin: 0 10px;
  box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.3);
  &:hover {
    cursor: pointer;
    filter: brightness(105%);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.7);
  }
`;

export const Body = styled.div`
  background: #f77754;
  min-height: 100vh;
  overflow: hidden;
`;

export const ProfileJokeContainer = styled.div`
  float: left;
  height: 350px;
  width: 450px;
  background: rgba(247, 119, 84, 0.6);
  filter: brightness(85%);
`;

export const ScrollJokes = styled.div`
  height: 320px;
  overflow: auto;
`;

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const ProfileInfo = styled.div`
  margin: 0% auto;
`;
