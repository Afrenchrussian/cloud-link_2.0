import React from "react";
import { googleContext } from "../Context/GoogleContext";

function Main() {
    const GoogleContext = React.useContext(googleContext);
    console.log(GoogleContext);
    return (
        <GoogleContext.consumer>
            {google => <div>{JSON.stringify(google)}</div>}
        </GoogleContext.consumer>
    );
}

export default Main;
