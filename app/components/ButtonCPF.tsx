"use client";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function TopButton() {
  return (
    <div className="">
      <Link href="/">
        <button className="relative group bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300">
          <span className="absolute left-3 top-1/3 -translate-y-1/2 text-white animate-bounce">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="w-5 h-5 text-white"
            />
          </span>
          <span className="ml-6 group-hover:ml-8 transition-all duration-300">
            Para Empresa
          </span>
        </button>
      </Link>
    </div>
  );
}
