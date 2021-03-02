import styled from "styled-components";
import cookieStore from "../cookieStore";

const StyledDiv = styled.div`
  width: 30%;
  float: left;
`;

const CookieItem = ({ cookie }) => {
  return (
    <div>
      <StyledDiv onClick={() => cookieStore.removeCookie(cookie.id)}>
        <h1>{cookie.name}</h1>
        <img src={cookie.img} />
      </StyledDiv>
    </div>
  );
};
export default CookieItem;
