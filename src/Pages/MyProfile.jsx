import React, { use } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";

const MyProfile = () => {
  const { user, loading } = use(AuthContext);

  return (
    <div className="relative">
      <img
        src="https://cdn1.epicgames.com/ark/offer/EGS_ARKSurvivalEvolved_StudioWildcard_S1-2560x1440-c316afb7c33a9dfb892eef6b99169e43.jpg?resize=1&w=480&h=270&quality=medium"
        className="w-full h-full object-cover absolute -z-50 opacity-10"
      />
      <title>My Profile</title>
      {!loading ? (
        <div className="bg-background-dark font-display  flex flex-col pt-5 pb-25">
          <main className="flex flex-col items-center px-4 sm:px-10 lg:px-20 xl:px-40 py-5">
            <div className="flex flex-col items-center gap-4">
              <div>
                <img
                  src={user.reloadUserInfo.photoUrl}
                  alt=""
                  className="bg-center bg-cover rounded-full w-32 h-32 border-4 border-[#00f5a0]"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-4xl font-bold">
                  {user.reloadUserInfo.displayName}
                </p>
                <p className="text-[#9d9db8] text-base">
                  {user.reloadUserInfo.email}
                </p>
              </div>
              <Link
                to="/edit-profile"
                className="bg-[#00a9e7] hover:bg-[#00a9e7]/80 text-white w-full max-w-[480px] rounded-lg py-2 font-bold  text-center"
              >
                Update Profile
              </Link>
            </div>

            <h3 className="text-white text-lg font-bold mt-8">Socials</h3>

            <div className="flex justify-center gap-8 mt-3">
              <a href="#">
                <FaFacebookF size={40}></FaFacebookF>
              </a>
              <a href="#">
                <FaTwitter size={40}></FaTwitter>
              </a>
              <a href="#">
                <FaLinkedinIn size={40}></FaLinkedinIn>
              </a>
              <a href="#">
                <FaInstagram size={40}></FaInstagram>
              </a>
            </div>
          </main>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyProfile;
