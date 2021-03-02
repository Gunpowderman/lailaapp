import CookieItem from "./CookieItem";
import cookieStore from "../cookieStore";
import { observer } from "mobx-react";
const CookieList = () => {
  return (
    <div style={{ width: "100%" }}>
      {cookieStore.cookies.map((cv) => (
        <CookieItem cookie={cv} />
      ))}
      <div style={{ clear: "both" }} />
    </div>
  );
};

export default observer(CookieList);
