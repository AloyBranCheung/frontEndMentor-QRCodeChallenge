import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);
  max-width: 328px;
  padding: 5%;
`;

const Card = (props) => {
  return <StyledCard className={props.className}>{props.children}</StyledCard>;
};

export default Card;
