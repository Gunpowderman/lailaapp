// Home + About + Cookie List

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import darkModeStore from "../darkModeStore";
const StyledDiv = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const StyledUl = styled.ul`
  background: red;
  width: 100%;
  list-style: none;
`;
const StyledLi = styled.li`
  float: left;
  width: 100px;
  height: 100%;
  border-right: 1px solid darkgrey;
  padding: 2%;
  text-align: center;
`;

const Navigation = () => {
  return (
    <>
      <StyledDiv>
        <StyledUl>
          <StyledLi>
            <NavLink to="/">Home</NavLink>
          </StyledLi>
          <StyledLi>
            <NavLink to="/cookie-list">Cookie List</NavLink>
          </StyledLi>
          <StyledLi>
            <NavLink to="/about">About</NavLink>
          </StyledLi>
          <StyledLi>
            <NavLink onClick={() => darkModeStore.setDarkMode()} to="#">
              SET DARK MODE
            </NavLink>
          </StyledLi>
        </StyledUl>
      </StyledDiv>
    </>
  );
};

export default Navigation;
