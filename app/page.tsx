"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex p-3 sm:p-3 bg-amber-100">
      <div className="relative h-screen w-full bg-[url('/pastel.png')] m-2 rounded-2xl bg-cover bg-center text-black">
        {/* Navbar */}
        <div className="flex items-center justify-between text-black p-4">
          {/* Logo */}
          <div className="flex items-center md:ml-20">
            <Image
              src="/ailogo2.png"
              alt="AI Logo"
              width={50}
              height={50}
              className="w-10 h-10 md:w-[60px] md:h-[60px]"
            />
            <span className="">
              <Image src={"/logo4.png"} width={200} height={100} alt="logo" />
            </span>
          </div>

          {/* Menu Desktop */}
          <div
            className={`hidden md:flex items-center bg-amber-100 w-150 h-10 rounded-2xl justify-center text-lg md:text-xl gap-6 opacity-70 ${inter.className}`}
          >
            <p className="hover:text-amber-950 cursor-pointer">Homepage</p>
            <p className="hover:text-amber-950 cursor-pointer">About Us</p>
            <p className="hover:text-amber-950 cursor-pointer">Platform</p>
            <p className="hover:text-amber-950 cursor-pointer">Careers</p>
          </div>

          {/* Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3 mr-20 text-white font-sans">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded-xl text-sm md:text-base">
                  Login
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-xl text-sm md:text-base">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <SignOutButton>
                <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-xl text-sm md:text-base">
                  Logout
                </button>
              </SignOutButton>
            </SignedIn>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <Image src={"/x.png"} width={25} height={25} alt="menu" />
            ) : (
              <Image src={"/menu.png"} width={25} height={25} alt="menu" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden bg-white text-gray-800 rounded-xl mx-4 mt-2 shadow-lg p-4 space-y-3">
            <p className="hover:text-amber-950 cursor-pointer">Homepage</p>
            <p className="hover:text-amber-950 cursor-pointer">About Us</p>
            <p className="hover:text-amber-950 cursor-pointer">Platform</p>
            <p className="hover:text-amber-950 cursor-pointer">Careers</p>

            <div className="flex gap-3 pt-2">
              {/* Tampil saat user BELUM login */}
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="flex-1 px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded-2xl text-sm text-white">
                    Login
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-2xl text-sm text-white">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>

              {/* Tampil saat user SUDAH login */}
              <SignedIn>
                <button className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-2xl text-sm text-white">
                  Logout
                </button>
              </SignedIn>
            </div>
          </div>
        )}

        {/* Hero Section - Fixed Positioning */}
        <section className="relative mt-50 sm:left-auto sm:bottom-32 sm:right-12 sm:transform-none lg:text-right flex flex-col items-center sm:text-center sm:items-end w-full px-4 max-w-md sm:max-w-none">
          <div className="text-4xl sm:text-6xl lg:text-7xl font-bold text-black leading-tight text-center md:text-right">
            <p className="text-[#992799]">AI Mental</p>
            <p className="text-[#ff7b00]">Health</p>
            <p className="text-[#5798d4]">Assessment</p>
          </div>
          {/* Tombol */}
          <button className="mt-20 flex items-center justify-center hover:cursor-pointer rounded-2xl mx-auto bg-white opacity-70 hover:opacity-100 hover:shadow-xl transition duration-300 w-36 h-12">
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
