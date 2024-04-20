import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div className="card">
      <img src={imageSrc} alt="Avatar" style={{width:"100%"}}/>
      <div className="container">
        <strong className="color_letter">{title}</strong>
        <p className="color_letter">{description}</p>
        <p className="color_letter">
          See more
          <FontAwesomeIcon style={{paddingLeft: "4px"}} icon={faArrowRight} size="1x" />  
        </p>
        
      </div>
    </div>
  );
};

export default Card;
