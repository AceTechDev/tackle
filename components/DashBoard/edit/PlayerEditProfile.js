import {useProjectContext} from "../../../context/ProjectProvider";
import React, {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import RequestsUtils from "../../../utils/RequestsUtils";
import Router from "next/router";
import {toast, ToastContainer} from "react-nextjs-toast";
import Layout from "../../layout";
import Loading from "../../Common/Loading";
import DashBoardNav from "../DashBoardNav";
import PlayerPic from "./PlayerPic";
import Input from "../../Input";
import {CircleSlider} from "react-circle-slider";
import SaveBtn from "../SaveBtn";
import Footer from "../../Navigations/Footer/Footer";
import DropDowns from "./DropDowns";
import EditPosition from "./EditPosition";
import MobileSliders from "./MobileSliders";

function PlayerEditProfile() {

    const { userData, setUserData } = useProjectContext();
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState(userData?.firstName);
    const [surname, setSurname] = useState(userData?.lastName);
    const [pic, setPic] = useState(userData?.image);
    const [age, setAge] = useState(null);
    const [nationality, setNationality] = useState(null);
    const [positions, setPositions] = useState(["CB"]);
    const [preferredFeet, setPreferredFeet] = useState(["right"]);
    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [token, setToken] = useCookies(["token"]);
    const [image, setImage] = useState(null);
    const [bonusPerPoint, setBonusPerPoint] = useState(0);

    const [salaryPerMonth, setSalaryPerMonth] = useState(0);
    const [club, setClub] = useState(null);
    const [league, setLeague] = useState(null);

    useEffect(() => {
        check();
    }, []);

    const check = () => {
        let tokenC = token?.token;
        setLoading(true);
        if (tokenC) {
            RequestsUtils.check(tokenC).then((res) => {
                if (res.isDone) {
                    setUserData(res.result.user);
                    console.log(res.result.user);
                    setTimeout(() => {
                        setName(res.result.user?.firstName);
                        setSurname(res.result.user?.lastName);
                        setPic(res.result.user?.image);
                        setPositions(res.result.user?.positions);
                        setPreferredFeet(res.result.user?.feet);
                        setLeague(res.result.user?.league);
                        setClub(res.result.user?.club);
                        setAge(res.result.user?.age);
                        setWeight(res.result.user?.weight);
                        setHeight(res.result.user?.height);
                        setLoading(false);
                        setTimeout(() => {
                            console.log(res.result.user?.positions);
                            document.querySelectorAll("circle").forEach((value) => {
                                value.classList.remove("selected-circle");
                            });
                            for (const value of document.querySelectorAll("circle")) {
                                if (
                                    value.dataset.position &&
                                    res.result.user?.positions.includes(value.dataset.position)
                                ) {
                                    value.classList.add("selected-circle");
                                }
                            }
                        }, 200);
                    }, 150);
                } else {
                    Router.push({
                        pathname: "/",
                    });
                }
            });
        } else {
            Router.push({
                pathname: "/",
            });
        }
    };

    const toggleFeet = (foot) => {
        if (preferredFeet.includes(foot)) {
            setPreferredFeet(preferredFeet.filter((e) => e !== foot));
        } else {
            setPreferredFeet([foot, ...preferredFeet]);
        }
    };
    const selectPosition = (e) => {
        if (positions.includes(e.target.dataset.position)) {
            setPositions(
                positions.filter((elem) => elem !== e.target.dataset.position)
            );
        } else {
            setPositions([e.target.dataset.position, ...positions]);
        }
        if (e.target.classList.contains("selected-circle")) {
            e.target.classList.remove("selected-circle");
        } else {
            e.target.classList.add("selected-circle");
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!club) {
            toast.notify("Please select your last club", {
                type: "error",
            });
            return;
        }
        if (!league) {
            toast.notify("Please select your last league", {
                type: "error",
            });
            return;
        }
        setLoading(true);
        console.log(club.id);
        let result = await RequestsUtils.editProfile({
            body: {
                firstName: name,
                lastName: surname,
                age: age?.id,
                countryId: 1,
                weight: weight?.id,
                height: height?.id,
                foot: preferredFeet,
                wageWeek: 100,
                image: image,
                passAccuracy: 80,
                positions: positions,
                desiredPayment: 25000,
                desiredLeagueId: 2,
                lastClubId: club.id,
                lastLeagueId: league.id,
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

    return (
        <Layout title="DashBoard">
            <ToastContainer />

            <main className="main pt-[5.4rem] pb-14 body2 flex md:flex-row flex-col px-4 lg:px-6 h-fit">
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <DashBoardNav selected="Prof" />
                        <form
                            onSubmit={onSubmit}
                            className="flex flex-col items-center w-full md:w-[75%] m-auto mb-4 h-fit mt-2 md:mt-12 md:px-3 lg:px-6 md:pr-6 lg:pr-8 text-white">
                            <div className="flex flex-col md:flex-row w-full mb-5 md:w-[100%]">
                                <div className="flex flex-col items-center w-full md:ml-0">
                                    <div className="flex flex-col w-[100%] mt-3 md:mt-0 md:w-[100%] md:flex-row text-xs md:text-base">
                                        <PlayerPic pic={pic} setImage={setImage} />
                                        <div className="md:pt-3 flex flex-col lg:flex-row">
                                            <div className="flex flex-col justify-center w-full sm:w-[90%] sm:m-auto md:w-full min-w-[110px]">
                                                <Input
                                                    Class="Edit_txt_input"
                                                    ContainerClass={"my-0.5 md:my-0"}
                                                    type="text"
                                                    Value={name}
                                                    OnChange={(e) => setName(e.target.value)}
                                                    Editable={true}
                                                />
                                                <Input
                                                    Class="Edit_txt_input"
                                                    type="text"
                                                    OnChange={(e) => setSurname(e.target.value)}
                                                    Value={surname}
                                                    Editable={true}
                                                />
                                            </div>
                                            <div className="flex justify-evenly mt-5 md:mt-1 md:-ml-2 lg:ml-4 mb-1 items-center md:justify-between flex-1 text-xs md:text-[15px]">
                                                <div className="flex flex-col items-center md:w-[113px]">
                                                    Prefered Feet:
                                                    <svg
                                                        className="w-[74px] h-[87px]"
                                                        viewBox="0 0 87 66"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            className={"preferredFeet"}
                                                            onClick={() => toggleFeet("right")}
                                                            opacity={
                                                                preferredFeet.includes("right") ? 1 : 0.2
                                                            }
                                                            d="M65.5151 9.26908e-05C64.8656 -0.00528302 64.1699 0.223098 63.4595 0.703964C62.4259 1.40333 61.4461 2.64096 60.8943 4.23043C60.3422 5.81991 60.3414 7.40609 60.7154 8.60592C61.0895 9.80592 61.7684 10.5681 62.6435 10.8793C63.5186 11.1904 64.5204 11.0259 65.5538 10.3265C66.5874 9.62713 67.5669 8.38916 68.119 6.79968C68.6707 5.2102 68.6719 3.62402 68.2979 2.42419C67.9238 1.22419 67.2445 0.462057 66.3694 0.150785C66.0948 0.0530563 65.8061 0.00213377 65.5151 9.26908e-05ZM72.8742 4.88714C72.4784 4.88887 72.0514 5.00141 71.5993 5.23656C71.5131 6.12255 71.3215 6.99477 71.0286 7.83424C70.5087 9.33129 69.7156 10.636 68.7346 11.6708C68.7442 11.7141 68.7537 11.7575 68.7645 11.7994C69.0175 12.7955 69.5201 13.4122 70.1761 13.687C70.832 13.9619 71.6146 13.884 72.482 13.3575C73.3494 12.8309 74.2139 11.8471 74.7387 10.546C75.2636 9.24476 75.3282 7.92615 75.0751 6.93008C74.822 5.93401 74.3196 5.31737 73.6638 5.04251C73.4135 4.93783 73.145 4.88499 72.8742 4.88714ZM79.1799 9.94274C78.9026 9.9443 78.5985 9.99303 78.2673 10.0962C78.2049 10.1156 78.1408 10.1418 78.0774 10.1652C77.9579 10.703 77.7943 11.2298 77.5885 11.7401C76.9134 13.4135 75.852 14.7843 74.5646 15.7126C74.6512 16.4115 74.9306 16.9098 75.3486 17.223C75.851 17.5993 76.5419 17.7072 77.4252 17.4325C78.3084 17.1578 79.2995 16.4709 80.0577 15.4209C80.816 14.3711 81.1642 13.203 81.1585 12.2624C81.1529 11.3219 80.846 10.6823 80.3436 10.3059C80.0295 10.0705 79.642 9.94031 79.1799 9.94274ZM59.0374 11.9505C57.6038 13.1926 56.716 14.9406 56.2047 18.1641C55.154 24.7889 57.0757 31.3213 56.4593 40.8684C56.2621 43.9252 54.974 47.1658 53.6102 50.3636C52.2464 53.5613 50.7806 56.7122 50.0975 59.1926C49.6723 60.7365 49.9929 61.8418 50.7997 62.8562C51.6066 63.8707 53.0038 64.7171 54.6541 65.1418C57.9547 65.9908 61.9649 65.1616 64.014 62.0348C70.4662 52.19 78.6336 38.6276 81.0595 31.2739C81.1673 30.9472 81.2031 30.5433 81.1702 30.0803C81.0872 30.0184 81.0055 29.9538 80.9262 29.8839C79.8478 28.9324 79.4349 27.4849 79.531 26.1295C79.5406 25.9936 79.5564 25.8576 79.5752 25.722C79.5317 25.648 79.49 25.5746 79.4446 25.4999C79.4378 25.4888 79.4306 25.4777 79.4239 25.4666C78.9112 25.3501 78.4141 25.1406 77.9576 24.8201C76.6927 23.9319 76.0736 22.4395 76.0119 20.9597C75.9185 20.8547 75.8215 20.7504 75.7268 20.6458C74.9476 20.5301 74.1936 20.2414 73.5286 19.7432C72.5783 19.0312 71.9727 18.0172 71.6763 16.9083C70.7893 17.0297 69.8772 16.94 69.0104 16.5767C67.6515 16.0072 66.6753 14.8822 66.1162 13.5599C64.7042 14.1904 63.1204 14.3572 61.621 13.8242C60.5753 13.4522 59.7087 12.7877 59.0374 11.9505ZM83.0249 16.529C82.8738 16.7864 82.7108 17.0365 82.5365 17.2785C81.6015 18.5737 80.4155 19.5476 79.1223 20.1252C79.0805 20.3744 79.0613 20.6135 79.0694 20.8313C79.0964 21.5571 79.3343 21.9882 79.6749 22.2273C80.0156 22.4666 80.4925 22.5373 81.1585 22.2982C81.8246 22.0591 82.5905 21.4835 83.1639 20.6179C83.7372 19.7524 83.978 18.8078 83.9511 18.0823C83.924 17.3565 83.686 16.9253 83.3453 16.6861C83.247 16.6175 83.139 16.5647 83.0249 16.529ZM85.6946 23.0423C85.5697 23.0461 85.4297 23.0657 85.2722 23.1039C85.2304 23.1141 85.1867 23.129 85.1437 23.1422C84.5426 23.8612 83.8445 24.4405 83.0871 24.8572C82.7727 25.3856 82.6068 25.9277 82.5753 26.3702C82.5333 26.9635 82.6841 27.2943 82.9039 27.4884C83.124 27.6823 83.4634 27.7844 84.0236 27.6483C84.5835 27.512 85.277 27.1017 85.8361 26.4245C86.3953 25.7473 86.6782 24.975 86.7203 24.3817C86.7623 23.7887 86.6115 23.4582 86.3917 23.2641C86.2543 23.1429 86.0699 23.0574 85.8142 23.0437C85.7744 23.0416 85.7345 23.0411 85.6946 23.0423Z"
                                                            fill="#f1cb24"
                                                        />
                                                        <path
                                                            className={"preferredFeet"}
                                                            opacity={preferredFeet.includes("left") ? 1 : 0.2}
                                                            onClick={() => toggleFeet("left")}
                                                            d="M22.0308 9.26908e-05C22.6803 -0.00528302 23.376 0.223098 24.0864 0.703964C25.12 1.40333 26.0998 2.64096 26.6516 4.23043C27.2037 5.81991 27.2045 7.40609 26.8305 8.60592C26.4564 9.80592 25.7775 10.5681 24.9024 10.8793C24.0273 11.1904 23.0255 11.0259 21.9921 10.3265C20.9585 9.62713 19.979 8.38916 19.4269 6.79968C18.8752 5.2102 18.874 3.62402 19.248 2.42419C19.6221 1.22419 20.3014 0.462057 21.1765 0.150785C21.4511 0.0530563 21.7398 0.00213377 22.0308 9.26908e-05ZM14.6717 4.88714C15.0675 4.88887 15.4945 5.00141 15.9466 5.23656C16.0328 6.12255 16.2244 6.99477 16.5173 7.83424C17.0372 9.33129 17.8303 10.636 18.8113 11.6708C18.8017 11.7141 18.7922 11.7575 18.7814 11.7994C18.5283 12.7955 18.0258 13.4122 17.3698 13.687C16.7139 13.9619 15.9313 13.884 15.0639 13.3575C14.1965 12.8309 13.332 11.8471 12.8072 10.546C12.2823 9.24476 12.2177 7.92615 12.4708 6.93008C12.7239 5.93401 13.2263 5.31737 13.8821 5.04251C14.1324 4.93783 14.4009 4.88499 14.6717 4.88714ZM8.36601 9.94274C8.64326 9.9443 8.94741 9.99303 9.27864 10.0962C9.34102 10.1156 9.4051 10.1418 9.4685 10.1652C9.58803 10.703 9.75156 11.2298 9.95738 11.7401C10.6325 13.4135 11.6939 14.7843 12.9813 15.7126C12.8947 16.4115 12.6153 16.9098 12.1973 17.223C11.6949 17.5993 11.004 17.7072 10.1207 17.4325C9.23752 17.1578 8.24641 16.4709 7.48817 15.4209C6.72992 14.3711 6.38173 13.203 6.38738 12.2624C6.39304 11.3219 6.69993 10.6823 7.20234 10.3059C7.51643 10.0705 7.90387 9.94031 8.36601 9.94274ZM28.5085 11.9505C29.9421 13.1926 30.8299 14.9406 31.3412 18.1641C32.3919 24.7889 30.4702 31.3213 31.0866 40.8684C31.2838 43.9252 32.5719 47.1658 33.9357 50.3636C35.2995 53.5613 36.7653 56.7122 37.4484 59.1926C37.8736 60.7365 37.553 61.8418 36.7462 62.8562C35.9393 63.8707 34.5421 64.7171 32.8918 65.1418C29.5912 65.9908 25.581 65.1616 23.5319 62.0348C17.0797 52.19 8.91229 38.6276 6.48643 31.2739C6.37864 30.9472 6.34283 30.5433 6.37573 30.0803C6.45867 30.0184 6.5404 29.9538 6.61974 29.8839C7.69807 28.9324 8.11103 27.4849 8.0149 26.1295C8.00531 25.9936 7.98954 25.8576 7.9707 25.722C8.01422 25.648 8.05586 25.5746 8.10127 25.4999C8.10812 25.4888 8.11532 25.4777 8.122 25.4666C8.63469 25.3501 9.13179 25.1406 9.58828 24.8201C10.8532 23.9319 11.4723 22.4395 11.534 20.9597C11.6274 20.8547 11.7244 20.7504 11.8191 20.6458C12.5983 20.5301 13.3523 20.2414 14.0173 19.7432C14.9676 19.0312 15.5732 18.0172 15.8696 16.9083C16.7565 17.0297 17.6687 16.94 18.5355 16.5767C19.8944 16.0072 20.8706 14.8822 21.4297 13.5599C22.8417 14.1904 24.4255 14.3572 25.9249 13.8242C26.9706 13.4522 27.8372 12.7877 28.5085 11.9505ZM4.52099 16.529C4.67215 16.7864 4.83511 17.0365 5.00935 17.2785C5.94443 18.5737 7.13037 19.5476 8.42359 20.1252C8.4654 20.3744 8.48459 20.6135 8.47653 20.8313C8.44946 21.5571 8.21162 21.9882 7.87097 22.2273C7.53031 22.4666 7.05344 22.5373 6.38738 22.2982C5.72133 22.0591 4.95537 21.4835 4.38202 20.6179C3.80867 19.7524 3.56792 18.8078 3.59482 18.0823C3.6219 17.3565 3.85991 16.9253 4.20056 16.6861C4.29885 16.6175 4.4069 16.5647 4.52099 16.529ZM1.85129 23.0423C1.97621 23.0461 2.11621 23.0657 2.27368 23.1039C2.31549 23.1141 2.35919 23.129 2.4022 23.1422C3.00331 23.8612 3.7014 24.4405 4.45879 24.8572C4.77322 25.3856 4.9391 25.9277 4.97062 26.3702C5.01261 26.9635 4.86181 27.2943 4.64197 27.4884C4.42195 27.6823 4.0825 27.7844 3.52234 27.6483C2.96235 27.512 2.26888 27.1017 1.70975 26.4245C1.15062 25.7473 0.867716 24.975 0.825563 24.3817C0.783581 23.7887 0.934373 23.4582 1.15422 23.2641C1.29165 23.1429 1.47602 23.0574 1.73168 23.0437C1.77152 23.0416 1.81142 23.0411 1.85129 23.0423Z"
                                                            fill="#f1cb24"
                                                        />
                                                    </svg>
                                                </div>

                                                <div className="flex flex-col items-center md:mx-1 md:w-[113px]">
                                                    Bonus/Point:
                                                    <div className="hidden md:block">
                                                        <CircleSlider
                                                            stepSize={10}
                                                            circleColor="#ffffff2a"
                                                            knobRadius={8}
                                                            knobColor="#f1cb24"
                                                            size="87"
                                                            value={bonusPerPoint}
                                                            onChange={(e) => {
                                                                setBonusPerPoint(e);
                                                            }}
                                                            max={400}
                                                            circleWidth="6"
                                                            progressWidth="6"
                                                            progressColor="#f1cb24"
                                                            tooltipColor="#fff"
                                                            showTooltip={true}
                                                            tooltipSize={22}
                                                        />
                                                    </div>
                                                    <div className="md:hidden">
                                                        <CircleSlider
                                                            stepSize={10}
                                                            circleColor="#ffffff2a"
                                                            knobRadius={8}
                                                            knobColor="transparent"
                                                            size="87"
                                                            disabled={true}
                                                            value={bonusPerPoint}
                                                            onChange={(e) => {
                                                                setBonusPerPoint(e);
                                                            }}
                                                            max={400}
                                                            circleWidth="6"
                                                            progressWidth="6"
                                                            progressColor="#f1cb24"
                                                            tooltipColor="#fff"
                                                            showTooltip={true}
                                                            tooltipSize={20}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-center md:w-[113px]">
                                                    Salary/Month:
                                                    <div className="hidden md:block">
                                                        <CircleSlider
                                                            stepSize={50}
                                                            circleColor="#ffffff2a"
                                                            knobRadius={8}
                                                            knobColor="#f1cb24"
                                                            size="87"
                                                            max={4000}
                                                            value={salaryPerMonth}
                                                            onChange={(e) => {
                                                                setSalaryPerMonth(e);
                                                            }}
                                                            circleWidth="6"
                                                            progressWidth="6"
                                                            progressColor="#f1cb24"
                                                            tooltipColor="#fff"
                                                            showTooltip={true}
                                                            tooltipSize={22}
                                                        />
                                                    </div>
                                                    <div className="md:hidden">
                                                        <CircleSlider
                                                            stepSize={50}
                                                            circleColor="#ffffff2a"
                                                            knobRadius={8}
                                                            knobColor="transparent"
                                                            size="87"
                                                            disabled={true}
                                                            value={salaryPerMonth}
                                                            onChange={(e) => {
                                                                setSalaryPerMonth(e);
                                                            }}
                                                            max={4000}
                                                            circleWidth="6"
                                                            progressWidth="6"
                                                            progressColor="#f1cb24"
                                                            tooltipColor="#fff"
                                                            showTooltip={true}
                                                            tooltipSize={20}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <MobileSliders
                                        firstVal={bonusPerPoint}
                                        setFirstVal={setBonusPerPoint}
                                        secVal={salaryPerMonth}
                                        setSecVal={setSalaryPerMonth}
                                    />
                                    <DropDowns
                                        setLoading={setLoading}
                                        nationality={nationality}
                                        height={height}
                                        weight={weight}
                                        age={age}
                                        club={club}
                                        league={league}
                                        setAge={setAge}
                                        setClub={setClub}
                                        setHeight={setHeight}
                                        setLeague={setLeague}
                                        setNationality={setNationality}
                                        setWeight={setWeight}
                                    />
                                    <EditPosition selectPosition={selectPosition} />
                                </div>
                            </div>
                            <SaveBtn Class="mt-8" />
                        </form>
                    </>
                )}
            </main>
            <Footer />
        </Layout>
    );
}
export default PlayerEditProfile;