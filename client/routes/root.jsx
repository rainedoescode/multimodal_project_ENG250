import React from "react";
import Header from "../components/header.jsx";
import Intro from "../components/intro.jsx";
import ClientNavigator from "../components/clientNavigator.jsx";
import IPData from "../components/ipData.jsx";

export default function Root() {
    return (
        // <div id="content-test">
        //     <h1>Data Collection on the WWW</h1>
        //     <h3>Who's data is it anyway?</h3>
        // </div>
        <>
            <Header />
            <Intro />
            <ClientNavigator />
            <IPData />
        </>

    );
}
