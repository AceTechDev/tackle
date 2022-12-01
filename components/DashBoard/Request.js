import QuitButton from "../QuitButton";
import ReqBtn from "./ReqBtn";
import PlayerReqContent from "./PlayerReqContent";
import ClubReqContent from "./ClubReqContent";
import React from "react";
import {useCookies} from "react-cookie";
import RequestsUtils from "../../utils/RequestsUtils";
import {toast, ToastContainer} from "react-nextjs-toast";
import Router from 'next/router'
function Notification({lock, type, request, setReqs}) {
    const [token, setToken] = useCookies(["token"]);

    const changeStatus = async () => {
        if (type === 'user') {
            if (request.status?.id?.toString() === '0') {
                let result = await RequestsUtils.accept(request.id, token?.token);
                if (result.isDone) {
                    toast.notify(result.result.message, {
                        type: "success",
                    });
                    setTimeout(() => {
                        location.reload();
                    }, 500);
                } else {
                    toast.notify(result.result.message, {
                        type: "error",
                    });
                }
            }
        } else {
            if (request.status?.id?.toString() === '1') {
                await Router.push({
                    pathname: "/player/" + request.playerId,
                })
            }
        }
    }
    const deleteRequest = async () => {

    }
    return (
        <>
            <ToastContainer/>
            <div className={`request_container ${lock && request.status?.id !== 1 ? "lock" : ""}`}>
                <div
                    className={`w-full request ${request.status?.id === 1 ? 'accepted' : request.status?.id === -1 ? 'rejected' : ''}`}>
                    {type === 'user' ? <PlayerReqContent request={request}/> : <ClubReqContent request={request}/>}
                    <ReqBtn status={request.status} func={() => changeStatus()}
                            text={type === 'club' ? request.status?.id === 1 ? "View" : "" : request.status?.id === 0 ? "Accept" : request.status?.name}
                            request={request}/>
                </div>
                {
                    request.status?.id !== 1 ? <QuitButton
                        func={() => deleteRequest()}
                        Class={`w-[26x] h-[26px] sm:w-8 sm:h-8 md:w-6 md:h-6 ml-2 sm:ml-4 ${
                            "opacity-70 focus:opacity-90"
                        }`}
                    /> : ""
                }
            </div>
        </>
    );
}

export default Notification;
