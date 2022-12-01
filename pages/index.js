import Layout from "../components/layout";
import Image from "next/image";
import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";
import RequestsUtils from "../utils/RequestsUtils";
import Router from "next/router";
import { toast, ToastContainer } from "react-nextjs-toast";
import { useProjectContext } from "../context/ProjectProvider";
import LandingPageBlackPart from "../components/LandingPage/LandingPageBlackPart";
import Form from "../components/LandingPage/form/Form";
import FormCodeVerificator from "../components/LandingPage/form/FormCodeVerificator";
import LandingPageBlocks from "../components/LandingPage/LandingPageBlocks";
import FormButtons from "../components/LandingPage/FormButtons";
import DashboardButton from "../components/LandingPage/DashboardButton";

export default function Home() {
  const { userData, setUserData } = useProjectContext();
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useCookies(["token"]);
  useEffect(() => {
    let tokenC = token?.token;
    if (tokenC) {
      RequestsUtils.check(tokenC).then((res) => {
        setUserData(res.result.user);
      });
    } else {
      console.warn("not logged in");
    }
  }, []);
  const [cookie, setCookie] = useCookies(["token"]);

  const [code, setCode] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthday: "",
    professionality: "",
    professionalities: [],
  });

  const [showForm, setShowForm] = useState({ form: false, verificator: false });
  const [club, setClub] = useState(false);
  const showFormHandler = () => {
    setShowForm((prev) => ({ ...prev, form: !prev.form }));
  };
  const showCodeVerificatorHandler = () => {
    setShowForm((prev) => ({ ...prev, verificator: !prev.verificator }));
  };

  useEffect(() => {
    RequestsUtils.professionality().then((res) => {
      if (res.isDone) {
        setFormData((prev) => ({
          ...prev,
          professionalities: res.result.data,
        }));
      } else {
        toast.notify(res.result.message, {
          type: "error",
        });
      }
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.notify("Passwords do not match", {
        type: "error",
      });
      return false;
    }
    setIsLoading(true);
    const registerData = {
      clubName: formData.clubName,
      firstName: formData.name,
      lastName: formData.surname,
      mobile: formData.mobile,
      email: formData.email,
      password: formData.password,
      professionalityId: formData.professionality,
      birthday: formData.birthday,
      type: club ? 'club' : 'player',
    };
    RequestsUtils.register(registerData).then((res) => {
      setIsLoading(false);

      if (res.isDone) {
        showFormHandler();
        showCodeVerificatorHandler();
      } else {
        toast.notify(res.result.message, {
          type: "error",
        });
      }
    });
  };
  const loginHandler = (e) => {
    e.preventDefault();
    if (formData.password.length < 1) {
      toast.notify("Please enter password", {
        type: "warning",
      });
      return false;
    }
    const loginData = {
      email: formData.email,
      password: formData.password,
    };
    setIsLoading(true);
    RequestsUtils.login(loginData).then((res) => {
      if (res.isDone) {
        showFormHandler();
        setIsLoading(false);
        setCookie("token", res.result.token, {
          path: "/",
          maxAge: 10000000000, // Expires after 1hr
          sameSite: true,
        });
        Router.push({
          pathname: "/dashboard",
        });
      } else {
        setIsLoading(false);
        toast.notify(res.result.message, {
          type: "error",
        });
      }
    });
  };
  // const goBack = (e) => {
  //   e.preventDefault();
  //   setCode("");
  //   showCodeVerificatorHandler();
  //   showFormHandler();
  // };
  const submitCodeForm = (e) => {
    e.preventDefault();
    RequestsUtils.validate({
      email: formData.email,
      code: code,
    }).then((res) => {
      if (res.isDone) {
        showCodeVerificatorHandler();
        setCookie("token", res.result.token, {
          path: "/",
          maxAge: 10000000000, // Expires after 1hr
          sameSite: true,
        });
        Router.push({
          pathname: "/dashboard",
        });
      } else {
        toast.notify(res.result.message, {
          type: "error",
        });
      }
    });
  };
  return (
    <Layout>
      <ToastContainer />
      <div className="body">
        <main className="main">
          <Form
            isLoading={isLoading}
            loginHandler={loginHandler}
            show={showForm.form}
            handler={showFormHandler}
            submitHandler={submitHandler}
            Data={formData}
            setData={setFormData}
            withClub={club}
            setClub={setClub}
          />

          <FormCodeVerificator
              changeEmail={() => {

                showCodeVerificatorHandler();
                showFormHandler();
              }}
            show={showForm.verificator}
            func={setCode}
            submit={submitCodeForm}
          />
          <LandingPageBlackPart />

          <LandingPageBlocks />

          {userData ? (
            <></>
          ) : (
            <FormButtons Handler={showFormHandler} setState={setClub} />
          )}
          {!userData ? <></> : <DashboardButton />}

          {/* images */}

          <div className="pngaaa">
            <Image src="/pngaaa 1.svg" layout="fill" alt="pngaaa" />
          </div>
          <div className="StockPlayer">
            <Image
              src="/StockPlayer2-3 1.svg"
              width={542}
              height={724}
              alt="StockPlayer"
            />
          </div>
        </main>
      </div>
    </Layout>
  );
}
