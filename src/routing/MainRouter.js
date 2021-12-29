import React, { memo, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import routes from "./routes";

const MainRouter = (props) => {
    return (
        <Router>
            <Switch>
                <Route
                    path={routes.DEFAULT.route}
                    component={routes.DEFAULT.component}
                />
                <Route
                    path={routes.SIGN_IN.route}
                    component={routes.SIGN_IN.component}
                />
            </Switch>
        </Router>
    );
}

export default MainRouter;
