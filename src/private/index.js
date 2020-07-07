import React from "react";
import {Route, Switch} from "react-router-dom";

import User from "./user";
import Transaksi from "./transaksi";
import Beranda from "./beranda";

function Private() {
    return(
        <Switch>
            <Route path="/user" component={User}/>
            <Route path="/transaksi" component={Transaksi}/>
            <Route component={Beranda}/>
        </Switch>
    )
}

export default Private;