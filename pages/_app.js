import '../styles/globals.css'
import React, {useEffect} from "react";
import {useCookies} from "react-cookie";
import RequestsUtils from "../utils/RequestsUtils";
import {ProjectProvider, useProjectContext} from "../context/ProjectProvider";

function MyApp({Component, pageProps}) {

    return (
        <ProjectProvider>
            <Component {...pageProps} />
        </ProjectProvider>
    );
}

export default MyApp
