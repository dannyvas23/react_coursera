import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

    <div style={{alignItems: "center", textAlign: "center" }}>
      <img src="https://i.pravatar.cc/150?img=7" style={{borderRadius: "50%", display: "inline"}}/>
      <br/>
      <h2>{greeting}</h2>
      <h1 style={{fontSize: "30px"}}>{bio1}</h1>
      <h1 style={{fontSize: "30px"}}>{bio2}</h1>
      
    </div>


  </FullScreenSection>
);

export default LandingSection;
