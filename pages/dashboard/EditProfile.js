import React, {useEffect, useState} from "react";
import {useProjectContext} from "../../context/ProjectProvider";
import PlayerEditProfile from "../../components/DashBoard/edit/PlayerEditProfile";
import ClubEditProfile from "../../components/DashBoard/edit/ClubEditProfile";
import RequestsUtils from "../../utils/RequestsUtils";
import Router from "next/router";
import MyLoader from "../../components/Common/Loading";
import {useCookies} from "react-cookie";

function EditProfile() {
    const {userData, setUserData} = useProjectContext();
    const [token, setToken] = useCookies(["token"]);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let tokenC = token?.token;
        setLoading(true);
        if (tokenC) {
            RequestsUtils.check(tokenC).then((res) => {
                setUserData(res.result.user);
                setLoading(false);
            });
        } else {
            Router.push({
                pathname: "/",
            });
        }
    }, []);
    return loading ? <MyLoader/> : <>{userData?.type === 'user' ? <PlayerEditProfile/> : <ClubEditProfile/>}</>;
}

export default EditProfile;
