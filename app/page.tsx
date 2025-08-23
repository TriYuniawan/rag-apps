"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Chat from "./chatbot/page";
const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <div className="flex p-3 sm:p-3 bg-amber-100">
      <div className="relative h-screen w-full bg-[url('/pastel.png')] m-2 rounded-2xl bg-cover bg-center text-black">
        {/* Navbar */}
        <div className="flex flex-col md:flex-row items-center md:justify-between text-black p-4">
          {/* Logo + Menu */}
          <div
            className={`flex flex-wrap items-center text-lg md:text-xl gap-4 md:gap-8 justify-center md:ml-20 text-gray-600 ${inter.className}`}
          >
            <Image
              src="/ailogo2.png"
              alt="AI Logo"
              width={50}
              height={50}
              className="w-10 h-10 md:w-[60px] md:h-[60px]"
            />
            <p className="hover:text-amber-950 cursor-pointer">Homepage</p>
            <p className="hover:text-amber-950 cursor-pointer">About Us</p>
            <p className="hover:text-amber-950 cursor-pointer">Platform</p>
            <p className="hover:text-amber-950 cursor-pointer">Careers</p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-3 md:mt-0 mr-0 md:mr-20 text-white font-sans">
            <button className="px-4 py-2 w-30 h-10 bg-amber-500 hover:bg-amber-600 rounded-3xl text-sm md:text-base">
              Login
            </button>
            <button className="px-4 py-2 w-30 h-10 bg-green-500 hover:bg-green-600 rounded-3xl text-sm md:text-base">
              Sign Up
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="absolute bottom-20 sm:bottom-32 right-4 sm:right-12 lg:text-right  flex flex-col items-center sm:text-center sm:items-end w-full px-4">
          <div className="text-4xl sm:text-6xl lg:text-7xl sm:items-center font-bold text-black leading-tight">
            <p className="text-[#992799]">AI Mental</p>
            <p className="text-[#ff7b00]">Health</p>
            <p className="text-[#5798d4]">Assessment</p>
          </div>

          {/* Tombol */}
          <button className="mt-6 flex items-center justify-center hover:cursor-pointer rounded-2xl m-auto bg-white opacity-70 hover:bg-white hover:opacity-100 hover:shadow-xl transition duration-300 w-36 h-12">
            <Link href="/chatbot" className="flex items-center">
              <span className="mr-3">Try Now</span>
              <Image src="/top-right.png" alt="test" height={14} width={14} />
            </Link>
          </button>
        </section>
      </div>
    </div>
  );
}
