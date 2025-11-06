import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark font-display overflow-x-hidden items-center justify-center">
      <title>Error 404</title>
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJJ-OdtgZqIo070EIBWLCqCFEra_Erzax4fi0xSegZIe231mv6-D3IB80WHMjfhoJ9lPhMs49NTaUfHQuC_bVgz6PNdQaZbJM5zK6VcetblKeDMKeb03Y0bAROUDN7DS11tlShtL7S3D2z4629ek_aPsAAbI-V6LDNWSisM1z8Np1LLQ7V_Nr6X8P4mRIePDqnwfL2x8Js5L2WDoU9m9vY3MwdeayAtT08maXIJ1fUb2rCYtmFuTOp8-ouL-0Fq7PLU-3AU7yCN6w"
          alt="City street with vibrant graffiti art"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-20 lg:px-40 py-5 ">
        <div className="text-center max-w-[960px]">
          <h1
            className="text-white text-8xl md:text-9xl font-black tracking-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              textShadow:
                "0 0 10px #fef08a, 0 0 20px #fef08a, 0 0 30px #fef08a, 0 0 40px #10b981",
            }}
          >
            404
          </h1>

          <div className="mt-6 flex flex-col gap-3 p-4">
            <p className="text-yellow-300 text-4xl font-black leading-tight">
              Lost in the City?
            </p>
            <p className="text-gray-300 text-base">
              Looks like you've taken a wrong turn. Let's get you back on track.
            </p>
          </div>

          <div className="w-full max-w-md mt-8 px-4">
            <Link to="/" className="flex justify-center px-4 py-3">
              <button className="w-full max-w-[480px] h-12 bg-yellow-300 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors">
                Return to Gamehub
              </button>
            </Link>
          </div>
        </div>

        <footer className="flex flex-col gap-6 px-5 py-10 text-center mt-5 ">
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link to="/games" className="text-gray-400 hover:text-white">
              Games
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>

          <div className="flex justify-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                className="feather feather-twitter"
                fill="none"
                height="24"
                width="24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5"></path>
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                className="feather feather-facebook"
                fill="none"
                height="24"
                width="24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                className="feather feather-instagram"
                fill="none"
                height="24"
                width="24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <rect height="20" width="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>

          <p className="text-gray-500 text-base">
            © Copyright {new Date().getFullYear()} © GameHub. All Right
            Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default NotFoundPage;
