import { Gamepad2 } from "lucide-react";
import React, { useContext, useState, useRef } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { signOutFunc, setUser, user, loading } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handelSignOut = () => {
    signOutFunc()
      .then(() => {
        toast.success("sign out successfully");
        setUser(null);
      })
      .catch((error) => {
        console.error("SignOut error:", error.message);
      });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    if (dropdownRef.current) {
      dropdownRef.current.blur();
    }
  };

  const handleNavLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <div className="sticky top-0 left-0 w-full z-50 backdrop-blur-md shadow-[inset_0_-20px_50px_-10px_#00a9e7]">
      <div className="navbar md:w-11/12 lg:w-11/12 mx-auto flex items-center">
        <div className="navbar-start">
          <div className="relative" ref={dropdownRef}>
            <div
              tabIndex={0}
              role="button"
              className="btn p-3 rounded mr-1 hover:bg-[#00a9e7] btn-ghost lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {isMobileMenuOpen && (
              <div
                tabIndex={-1}
                className="absolute left-0 top-full mt-4 w-52 bg-[#00a9e798] border border-[#00a9e7] rounded-box shadow flex flex-col gap-2 p-2 z-50"
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-info w-full"
                      : "w-full py-2 px-3 hover:bg-[#00a9e7] hover:text-black rounded"
                  }
                  onClick={handleNavLinkClick}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/games"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-info w-full"
                      : "w-full py-2 px-3 hover:bg-[#00a9e7] hover:text-black rounded"
                  }
                  onClick={handleNavLinkClick}
                >
                  Games
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-info w-full"
                      : "w-full py-2 px-3 hover:bg-[#00a9e7] hover:text-black rounded"
                  }
                  onClick={handleNavLinkClick}
                >
                  Contact
                </NavLink>

                {!user ? (
                  <>
                    <Link
                      to="/login"
                      className="btn btn-info w-full"
                      onClick={handleNavLinkClick}
                    >
                      Login
                    </Link>
                    <Link
                      to="/sign-up"
                      className="btn w-full"
                      onClick={handleNavLinkClick}
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/my-profile"
                      className={({ isActive }) =>
                        isActive
                          ? "btn btn-info w-full"
                          : "w-full py-2 px-3 hover:bg-[#00a9e7] hover:text-black rounded"
                      }
                      onClick={handleNavLinkClick}
                    >
                      My Profile
                    </NavLink>

                    <button
                      onClick={() => {
                        handelSignOut();
                        closeMobileMenu();
                      }}
                      className="btn btn-info w-full"
                    >
                      Log Out
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={closeMobileMenu}
          >
            <Gamepad2 />
            <div className="text-2xl font-bold">GameHub</div>
          </Link>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div className="navbar-center hidden lg:flex">
              <div className="menu menu-horizontal px-1 *:py-2.5 gap-1 flex items-center justify-center py-0">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-info "
                      : " px-5 hover:bg-[#00a9e7] hover:text-black rounded"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/games"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-info "
                      : " px-5 hover:bg-[#00a9e7] hover:text-black rounded"
                  }
                >
                  Games
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-info "
                      : " px-5 hover:bg-[#00a9e7] hover:text-black rounded"
                  }
                >
                  Contact
                </NavLink>
                {!user ? (
                  <div className="">
                    <Link to="/login" className="btn mx-3 btn-info">
                      Login
                    </Link>
                    <Link to="/sign-up" className="btn">
                      Sign Up
                    </Link>
                  </div>
                ) : (
                  <div className="flex items-center justify-center p-0">
                    <NavLink
                      to="/my-profile"
                      className={({ isActive }) =>
                        isActive
                          ? "btn btn-info "
                          : " px-5 py-2.5 hover:bg-[#00a9e7] hover:text-black rounded"
                      }
                    >
                      My Profile
                    </NavLink>
                    <button
                      className="btn mx-3 btn-info ml-1"
                      onClick={() => handelSignOut()}
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {!loading ? (
            user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      title={
                        user?.displayName || user?.reloadUserInfo?.displayName
                      }
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL || user?.reloadUserInfo?.photoUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuBW_t8z3WUNYCV9hhFRtH1_CMeFwGz2xXD_Det8_bkJsSPkEt4VqHC9uNdK8q9Lq-9oraZ-EEP-ONYJvx8HMgO8GJ8qIgh0FCQYiCmXGqXWcsmm43ZQvYqUG3H0v67ta-lswXhTJDDeG5yBPsGY4ZDGDhoOUpU4Hk5OicJmaGPg9IgDbbS3rV3aoDjZxQDOHb43fXFC-4Y9j3wRIKDFtw6fQx6o4ByVoU-g3jENNjxE0szSqSfdXdBsyiVgoxuJkjB7mM2F7eIox-Y"}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={-1}
                  className="menu menu-sm dropdown-content rounded-box z-1 mt-5 w-52 p-2 shadow border border-[#00a9e7] bg-[#00a9e798]"
                >
                  <li className="hover:bg-[#00a9e7] hover:text-black rounded">
                    <Link to="/my-profile" onClick={closeMobileMenu}>
                      My Profile
                    </Link>
                  </li>
                  <li className="hover:bg-[#00a9e7] hover:text-black rounded">
                    <Link to="/edit-profile" onClick={closeMobileMenu}>
                      Edit Profile
                    </Link>
                  </li>
                  <li className="hover:bg-[#00a9e7] hover:text-black rounded">
                    <button
                      onClick={() => {
                        handelSignOut();
                        closeMobileMenu();
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
