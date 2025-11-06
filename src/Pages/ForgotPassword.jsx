import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailFromLogin = location.state?.email || "";

  const { sendPasswordResetEmailFunc ,setLoading} = use(AuthContext);


  const handelResetPassword = (e) => {
    e.preventDefault();

    const email = e.target.email?.value;

    sendPasswordResetEmailFunc(email)
      .then(() => {
        window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
        setLoading(false);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };


  return (
    <div className="flex h-[700px] w-full forgot-bg-gradient">
      <title>Forgot Password</title>
      <div className="w-full flex flex-col items-center justify-center">
        <form
          onSubmit={handelResetPassword}
          className="md:w-96 w-80 flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl  font-medium">Forgot Password</h2>
          <p className="text-sm text-gray-500/90 mt-3 text-center">
            Welcome! Please Enter your email address and we'll send you a link
            to reset your password.
          </p>

          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="email"
              name="email"
              defaultValue={emailFromLogin}
              placeholder="Your Email Address"
              className="bg-transparent  placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
          >
            Send Verifaction Code
          </button>

          <p className="text-gray-500/90 text-sm mt-4 flex items-center justify-center gap-1">
            Do you know everything?{" "}
            <Link
              to="/login"
              className="text-indigo-400 hover:underline"
              href="#"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
