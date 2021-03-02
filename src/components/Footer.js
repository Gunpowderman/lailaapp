import { observer } from "mobx-react";
import styled from "styled-components";
import darkModeStore from "../darkModeStore";

const StyledDiv = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Footer = () => {
  return (
    <StyledDiv onClick={() => darkModeStore.setDarkMode()}>
      ALL RIGHTS RECEIVED LAILA ALHADDAD
      {darkModeStore.isDarkMode ? "THIS IS DARK" : "THIS IS LIGHT"}
    </StyledDiv>
  );
};
export default Footer;
