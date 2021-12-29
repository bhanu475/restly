import SignIn from "../pages/auth/SignIn";
import index from "../pages/home";
import paths from "./Paths";


export default {
    DEFAULT: {
      component: index,
      route: paths.DEFAULT,
    },
    SIGN_IN: {
      component: SignIn,
      route: paths.SIGNIN,
    },
}