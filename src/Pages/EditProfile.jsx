import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import Loader from "./Loader";

const EditProfile = () => {
  const { user, loading, updateProfileFunc} = useContext(AuthContext);
  const handlUpdateProfile = (e) => {
    
    const photo = e.target.photo?.value;
    const name = e.target.name?.value;

    let photoURL = photo;
    let displayName = name;

    if (photo === "") {
      photoURL = user?.photoURL || user?.reloadUserInfo?.photoUrl;
    }
    if (name === "") {
      displayName = user?.displayName || user?.reloadUserInfo?.displayName;
    }

    updateProfileFunc(displayName, photoURL)
      .then(() => {
        toast.success("Successfully updated Your Profile");
        
      })
      .catch((err) => {
        toast.error(err.message);
      });
    };
    

  return (
    <div className="relative">
      <img
        src="https://cdn-www.bluestacks.com/bs-images/mobile-legends-bang-bang-logo-fight-2ia0z1qrfbimzsgi_f3ka.jpg"
        className="w-full h-full object-cover absolute -z-50 opacity-10"
      />
      <title>Edit Profile</title>
      {!loading ? (
        <div className="relative  pb-10  flex h-auto w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
          <main className="flex flex-1 justify-center py-10 px-5 sm:px-10 md:px-20 lg:px-40">
            <div className="flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                    Update Your Profile
                  </h1>
                  <p className="text-[#9d9db8] text-base font-normal">
                    Keep your profile fresh and up-to-date with your latest
                    information.
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 p-4 mt-8">
                <div className="lg:w-1/3">
                  <div className="flex flex-col items-center p-4 border border-[#292938] rounded-xl bg-[#111118]/50">
                    {
                      user?.photoURL || user?.reloadUserInfo?.photoUrl ? (<img
                      src={user?.photoURL || user?.reloadUserInfo?.photoUrl}
                      alt="User Profile"
                      className="bg-center bg-cover rounded-full min-h-32 w-32 border-4 border-[#00f5a0]"
                    />) : (<img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW_t8z3WUNYCV9hhFRtH1_CMeFwGz2xXD_Det8_bkJsSPkEt4VqHC9uNdK8q9Lq-9oraZ-EEP-ONYJvx8HMgO8GJ8qIgh0FCQYiCmXGqXWcsmm43ZQvYqUG3H0v67ta-lswXhTJDDeG5yBPsGY4ZDGDhoOUpU4Hk5OicJmaGPg9IgDbbS3rV3aoDjZxQDOHb43fXFC-4Y9j3wRIKDFtw6fQx6o4ByVoU-g3jENNjxE0szSqSfdXdBsyiVgoxuJkjB7mM2F7eIox-Y"
                      alt="User Profile"
                      className="bg-center bg-cover rounded-full min-h-32 w-32 border-4 border-[#00f5a0]"
                    />)
                      
                    }

                    <div className="flex flex-col justify-center items-center mt-4">
                      <p className="text-white text-[22px] font-bold">
                        {user?.displayName || "Display Name?"}
                      </p>
                      <p className="text-[#9d9db8] text-base">
                        {user?.email || "Email?"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <form className="space-y-6 " onSubmit={handlUpdateProfile}>
                    <label className="flex flex-col w-full">
                      <p className="text-white text-base font-medium pb-2">
                        Profile Photo URL
                      </p>
                      <input
                        type="text"
                        name="photo"
                        defaultValue={user?.photoURL || user?.reloadUserInfo?.photoUrl}
                        placeholder="https://your-image-url.com"
                        className="form-input flex w-full rounded-lg text-white focus:ring-2 focus:ring-primary bg-[#292938] h-14 placeholder:text-[#9d9db8] p-4 text-base"
                      />
                    </label>

                    <label className="flex flex-col w-full">
                      <p className="text-white text-base font-medium pb-2">
                        Your Name
                      </p>
                      <input
                        type="text"
                        name="name"
                        defaultValue={user?.displayName || user?.reloadUserInfo?.displayName}
                        placeholder="Enter Your Display Name"
                        className="form-input flex w-full rounded-lg text-white focus:ring-2 focus:ring-primary bg-[#292938] h-14 placeholder:text-[#9d9db8] p-4 text-base"
                      />
                    </label>

                    <button
                      type="submit"
                      className="flex w-full sm:w-auto min-w-[180px] items-center justify-center rounded-lg h-12 px-6 bg-[#00a9e7] hover:bg-[#00a9e7]/80 text-white font-bold transition-colors"
                    >
                      <span className="truncate">Update Information</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : <div className="mt-50"><Loader></Loader></div>}
    </div>
  );
};

export default EditProfile;
