import { useProjectContext } from "../../context/ProjectProvider";
import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";
import RequestsUtils from "../../utils/RequestsUtils";
import DashBoardNav from "../../components/DashBoard/DashBoardNav";
import Footer from "../../components/Navigations/Footer/Footer";
import Layout from "../../components/layout";
import Request from "../../components/DashBoard/Request";
import Searchbar from "../../components/Searchbar";
import Router from "next/router";
import Loading from "../../components/Common/Loading";

function dashboard() {
  const [token, setToken] = useCookies(["token"]);
  const [loading, setLoading] = useState(true);
  const { userData, setUserData } = useProjectContext();
  const [reqs, setReqs] = useState([]);
  const isLocked = () => reqs.filter(e => e.status?.id === 1).length > 0;
  useEffect(() => {
    let tokenC = token?.token;
    setLoading(true);
    if (tokenC) {
      RequestsUtils.check(tokenC).then(async (res) => {
        if (res.isDone) {
          setUserData(res.result.user);
          if (res.result.user?.isComplete === true) {
            let result;
            if (res.result.user.type === 'club') {
              result = await RequestsUtils.clubRequests(tokenC);
            } else {
              result = await RequestsUtils.playerRequests(tokenC);
            }
            if (result.isDone) {
              setReqs(result.result.data)
            }
            setLoading(false);
          } else  {
            Router.push({
              pathname: "/dashboard/EditProfile",
            });
          }
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
  }, []);
  return (
    <Layout title="DashBoard">
      <main className="flex flex-col px-4 pt-24 main md:pt-32 lg:pb-2 body2 md:flex-row sm:px-6">
        {loading ? (
          <Loading />
        ) : (
          <>
            <DashBoardNav selected="Req" />
            <div className="flex flex-col items-center flex-1 md:-mt-8 md:-ml-2 lg:-mt-6">
              <Searchbar
                filter={false}
                Class={
                  "top-0 w-[75%] sm:w-[65%] md:w-auto border-3 md:border-2 px-3 sm:px-4 py-1.5 sm:py-2 md:px-1.5 md:py-1.5 rounded-lg md:rounded-xl md:mb-8 mb-6"
                }
              />

              <div className="request_box">
                {reqs.map((r) => (
                  <Request lock={isLocked() && userData?.type === 'user'} type={userData?.type} request={r} setReqs={setReqs} key="" />
                ))}
                {/*
            <Request prime={true} Btntext="Accept" />
            <Request setReqs={setReqs} key="" prime={true} />
            <Request setReqs={setReqs} key="" />
            <Request setReqs={setReqs} key="" />
            <Request setReqs={setReqs} key="" />
            <Request setReqs={setReqs} key="" />
            <Request setReqs={setReqs} key="" /> */}

                {reqs.length === 0 && (
                  <p
                    // style={{
                    //   marginTop: "auto",
                    //   marginBottom: "auto",
                    //   color: "white",
                    //   fontSize: "2rem",
                    // }}
                    className="mt-2 text-white text-[1.5rem] sm:text-[2rem]">
                    There are no requests yet!
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </Layout>
  );
}

export default dashboard;
