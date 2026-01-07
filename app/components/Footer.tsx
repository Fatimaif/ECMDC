"use client";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const styles = `
  @keyframes slideRightToLeft {
    0% { width: 100%; right: auto; left: 0; }
    50% { width: 0%; right: 0; left: auto; }
    100% { width: 100%; right: auto; left: 0; }
  }
  .animate-slide:hover span.underline-animate {
    animation: slideRightToLeft 2s ease-out;
  }
`;

const Footer = () => {
  return (
    <>
      <style>{styles}</style>
      <footer className="w-full bg-white py-16 px-4 md:px-6 lg:px-10 overflow-hidden max-w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14">
          <div className="flex items-start gap-4">
            <img src="/pictures/ecmdclogo.webp" alt="ECMDC Logo" className="w-32" />

            <div className="text-sm font-light tracking-wide">
              <p>ECMDC</p>
              <p>ENTERPRISE</p>
              <p>CONSULTING</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-6 mt-10 md:mt-0">
            <div className="flex items-center gap-6 text-2xl" style={{ color: "#1B3662" }}>
              <FaLinkedinIn />
              <FaFacebookF />
              <RxCross2 />
              <FaInstagram />
              <FaYoutube />
            </div>

          </div>

        </div>
        <div className="flex flex-wrap gap-10 text-sm text-gray-900 mb-12">
          <Link href="/privacy-policy" className="relative cursor-pointer animate-slide">
            PRIVACY POLICY
            <span className="underline-animate absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-900"></span>
          </Link>
          <Link href="/terms-of-use" className="relative cursor-pointer animate-slide">
            TERMS OF USE
            <span className="underline-animate absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-900"></span>
          </Link>
          <Link href="/sitemap" className="relative cursor-pointer animate-slide">
            SITEMAP
            <span className="underline-animate absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-900"></span>
          </Link>
          <Link href="/responsible-disclosure" className="relative cursor-pointer animate-slide">
            RESPONSIBLE DISCLOSURE
            <span className="underline-animate absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-900"></span>
          </Link>
          <Link href="/cookie-preferences" className="relative cursor-pointer animate-slide">
            COOKIE PREFERENCES
            <span className="underline-animate absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-900"></span>
          </Link>
        </div>
      <p className="text-gray-700 text-xs leading-relaxed max-w-5xl mb-6">
        ECMDC is an Equal Opportunity Employer. All qualified applicants will
        receive consideration for employment without regard to race, color, age, religion, sex,
        sexual orientation, gender identity, national origin, protected veteran status, disability,
        or any other characteristic protected by law.
      </p>
      <p className="text-gray-700 text-xs leading-relaxed max-w-5xl mb-6">
        ECMDC is an Equal Opportunity Employer. All qualified applicants will
        receive consideration for employment without regard to race, color, age, religion, sex,
        sexual orientation, gender identity, national origin, protected veteran status, disability,
        or any other characteristic protected by law.
      </p>
      <p className="text-gray-700 text-xs">
        © 2025 ECMDC
      </p>
    </footer>
    </>
  );
};

export default Footer;