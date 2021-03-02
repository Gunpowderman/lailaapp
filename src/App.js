import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import GlobalStyle from "./styles";
import CookieList from "./components/CookieList";
import { ThemeProvider } from "styled-components";
import darkModeStore from "./darkModeStore";
import Footer from "./components/Footer";
import { observer } from "mobx-react";

function App() {
  const theme = {
    dark: {
      backgroundColor: "black",
      color: "white",
    },
    light: {
      backgroundColor: "lightgrey",
      color: "#333333",
    },
  };

  return (
    <ThemeProvider theme={darkModeStore.isDarkMode ? theme.dark : theme.light}>
      <GlobalStyle />
      <Navigation />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cookie-list">
            <CookieList />
          </Route>
        </Switch>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default observer(App);
