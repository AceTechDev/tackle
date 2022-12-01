import {useProjectContext} from "../../../context/ProjectProvider";
import React, {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import RequestsUtils from "../../../utils/RequestsUtils";
import Router from "next/router";
import {toast, ToastContainer} from "react-nextjs-toast";
import Layout from "../../layout";
import DashBoardNav from "../DashBoardNav";
import Footer from "../../Navigations/Footer/Footer";
import Input from "../../Input";
import SaveBtn from "../SaveBtn";
import ClubLogo from "./ClubLogo";
import BoxInput from "../BoxInput";

function ClubEditProfile() {

    const {userData, setUserData} = useProjectContext();
    const [pic, setPic] = useState(userData?.logo);
    const [image, setImage] = useState(null);
    const [country, setCountry] = useState(userData?.country);
    const [league, setLeague] = useState(userData?.league);
    const [clubName, setClubName] = useState(userData?.clubName);
    const [firstName, setFirstName] = useState(userData?.firstName);
    const [surname, setSurname] = useState(userData?.lastName);
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);
    const [leagues, setLeagues] = useState([]);
    const [token, setToken] = useCookies(["token"]);

    const check = async () => {
        let tokenC = token?.token;
        setLoading(true);
        if (tokenC) {
            RequestsUtils.check(tokenC).then((res) => {
                if (res.isDone) {
                    setUserData(res.result.user);
                    console.log(res.result.user);
                    setTimeout(() => {
                        setClubName(res.result.user?.name);
                        setFirstName(res.result.user?.firstName);
                        setSurname(res.result.user?.lastName);
                        setPic(res.result.user?.logo);
                        setLeague(res.result.user?.league);

                        setCountry(res.result.user?.country);
                        setLoading(false);
                        fetchLeagues(res.result.user?.country?.id);

                    }, 150);
                } else {
                    Router.push({
                        pathname: "/",
                    });
                }
            });
        } else {
            await Router.push({
                pathname: "/",
            });
        }
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!country) {
            toast.notify("Please select your country", {
                type: "error",
            });
            return;
        }
        if (!league) {
            toast.notify("Please select your league", {
                type: "error",
            });
            return;
        }
        setLoading(true);
        let result = await RequestsUtils.editProfileClub({
            body: {
                name: clubName,
                firstName: firstName,
                lastName: surname,
                league: league?.id,
                image: image,

                country: country?.id,
            },
            token: token?.token,
        });

        if (result.isDone) {
            check();
        } else {
            setLoading(false);

            toast.notify(result.result.message, {
                type: "error",
            });
        }
    };
    useEffect(() => {
        check().then(() => {
            RequestsUtils.all().then((res) => {
                if (res.isDone) {
                    setCountries(res.result.countries);
                }
            });
        });
    }, [])

    const fetchLeagues = async id => {
        RequestsUtils.leagues(id).then((res) => {
            if (res.isDone) {
                setLeagues(res.result);
            }
        });
    }

    return (
        <Layout title="DashBoard">
            <ToastContainer/>

            <main className="main pt-[10rem] pb-14 body2 flex md:flex-row flex-col px-4 lg:px-6 h-fit">

                <>
                    <DashBoardNav selected="Prof"/>
                    <form
                        onSubmit={onSubmit}
                        className="flex flex-col items-center w-full md:w-[75%] m-auto mb-4 h-fit mt-2 md:mt-12 md:px-3 lg:px-6 md:pr-6 lg:pr-8 text-white">
                        <div className="flex flex-col md:flex-row w-full mb-5 md:w-[100%]">
                            <div className="flex flex-col items-center w-full md:ml-0">
                                <div
                                    className="flex flex-col w-[100%] mt-3 md:mt-0 md:w-[100%] md:flex-row text-xs md:text-base">
                                    <ClubLogo pic={pic} setImage={setImage}/>
                                    <div className="md:pt-3 flex flex-col lg:flex-row md:w-[50%]">
                                        <div
                                            className="flex flex-col justify-between w-full sm:w-[90%] sm:m-auto md:w-[100%] min-w-[110px]">
                                            <Input
                                                Class="Edit_txt_input"
                                                ContainerClass={"my-0.5 md:my-0"}
                                                type="text"
                                                Value={clubName}
                                                OnChange={(e) => setClubName(e.target.value)}
                                                Editable={true}
                                                placeholder="Club name"
                                            />
                                            <Input
                                                Class="Edit_txt_input"
                                                ContainerClass={"my-0.5 md:my-0"}
                                                type="text"
                                                placeholder="First Name"
                                                Value={firstName}
                                                OnChange={(e) => setFirstName(e.target.value)}
                                                Editable={true}
                                            />
                                            <Input
                                                Class="Edit_txt_input"
                                                type="text"
                                                placeholder="Surname"

                                                OnChange={(e) => setSurname(e.target.value)}
                                                Value={surname}
                                                Editable={true}
                                            />
                                        </div>

                                    </div>
                                    <div className="w-[100%]  md:flex -mt-1.5 md:mt-0 text-sm lg:text-base text-start">
                                        <div
                                            className="w-[100%] md:w-[100%] -mt-1.5 md:mt-0 text-sm lg:text-base text-start">
                                            <div className="flex flex-col justify-between md:flex-row md:my-2 mt-5 ">
                                                <div
                                                    className="flex flex-col md:flex-column my-1.5 md:my-3 md:ml-4 w-[100%]">
                                                    Country: *
                                                    <BoxInput
                                                        OnChange={(e) => {
                                                            setCountry({
                                                                id: e.target.value,
                                                                name: `Country #${e.target.value}`,
                                                            });
                                                            fetchLeagues(e.target.value);
                                                        }}
                                                        ContainerClass="flex-1 w-[100%] my-1.5">
                                                        <option value="" selected disabled>
                                                            Please select an option
                                                        </option>
                                                        {countries.map((e) => (
                                                            <option
                                                                selected={country?.id?.toString() === e.id.toString()}
                                                                value={e.id}>
                                                                {e.name}
                                                            </option>
                                                        ))}
                                                    </BoxInput>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-between md:flex-row md:my-2 ">
                                                <div
                                                    className="flex flex-col md:flex-column my-1.5 md:my-3 md:ml-4 w-[100%]">
                                                    League: *
                                                    <BoxInput
                                                        OnChange={(e) =>
                                                            setLeague({
                                                                id: e.target.value,
                                                                name: `League #${e.target.value}`,
                                                            })
                                                        }
                                                        ContainerClass="flex-1 w-[100%] my-1.5">
                                                        <option value="" selected disabled>
                                                            Please select an option
                                                        </option>
                                                        {leagues.map((e) => (
                                                            <option
                                                                selected={league?.id?.toString() === e.id.toString()}
                                                                value={e.id}>
                                                                {e.name}
                                                            </option>
                                                        ))}
                                                    </BoxInput>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <SaveBtn Class="mt-8"/>
                    </form>
                </>
            </main>
            <Footer/>
        </Layout>
    );
}

export default ClubEditProfile;