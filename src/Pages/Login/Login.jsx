import React, { useContext, useState } from "react";
import { authContext } from "../../Context/AuthContextProvider";
import { Link, NavLink } from "react-router-dom";
import { Button, Card, Input } from "@mui/material";
import YouTube from "../../Assets/Images/YouTube-Logo.wine.svg";
import "./_Login.scss";

const Login = () => {
  const { token, setToken } = useContext(authContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const postRequest = async () => {
      try {
        setToken([
          `User Email: ${form.email},
User Password: ${form.password}`,
        ]);
      } catch (err) {
        console.log(err);
      }
    };

    postRequest();
  };

  return (
    <div className="h-100">
      <div className="container ">
        <Card
          style={{ backgroundColor: "gray", width:"400px" }}
          className=" mx-auto text-center p-4 rounded-3 "
        >

          <h1
            style={{
              textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue",
            }}
            className="h1 text-center mt-0"
          >
            Login Card
          </h1>

          <Button className="p-0 d-inline-block ms-auto text-center">
            <Link>
              <img src={YouTube} alt="Logo" width={180} height={120} />
            </Link>
          </Button>

          <form
            onSubmit={(e) => submitHandler(e)}
            className="d-flex flex-column  "
          >
            <Input
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="text-white mb-5 text-center fs-3"
              type="email"
              placeholder="Email"
              required
            />

            <Input
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              className="text-white mb-5 text-center fs-3"
              type="password"
              placeholder="Password"
              required
            />

            <div className="d-flex justify-content-between">
              <NavLink className="h5 the__name" to={"/login"}>
                Forgot Password
              </NavLink>
              <NavLink className="h5 the__name" to={"/signup"}>
                Sign Up
              </NavLink>
            </div>

            <Button
              type={"submit"}
              className="bg-danger text-white rounded-3 mt-3 py-2 fw-bold"
            >
              Login here
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
