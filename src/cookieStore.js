import { makeObservable, observable, action } from "mobx";
import cookies from "./cookies";

class CookieStore {
  cookies = cookies;

  removeCookie = (id) => {
    this.cookies = this.cookies.filter((cv) => cv.id !== id);
  };

  constructor() {
    makeObservable(this, {
      cookies: observable,
      removeCookie: action,
    });
  }
}

let cookieStore = new CookieStore();

export default cookieStore;
