import React from "react";
import qrcode from "./image-qr-code.png";
import Card from "../UI/Card";
import styled from "styled-components";

const QRCard = styled(Card)`
  text-align: center;
  height: 488px;
  & img {
    width: 288px;
    height: 288px;
    border-radius: 10px;
  }
`;

const QRDescription = styled.div`
  text-align: center;
  margin-top: 10%;
  padding-left: 5%;
  padding-right: 5%;

  & h3 {
    font-family: "Outfit", sans-serif;
    font-size: 22px;
  }

  & p {
    margin-top: 5%;
    font-family: "Outfit", sans-serif;
    opacity: 0.7;
  }
`;

const QRCodeCard = () => {
  return (
    <QRCard>
      <img src={qrcode} alt="qrcode.png" />
      <QRDescription>
        <h3>Improve your front-end skills by building projects</h3>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </QRDescription>
    </QRCard>
  );
};

export default QRCodeCard;
