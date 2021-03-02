import { action, makeObservable, observable } from "mobx";

class DarkModeStore {
  isDarkMode = true;

  setDarkMode = () => {
    this.isDarkMode = !this.isDarkMode;
  };

  constructor() {
    makeObservable(this, {
      isDarkMode: observable,
      setDarkMode: action,
    });
  }
}

const darkModeStore = new DarkModeStore();
export default darkModeStore;
