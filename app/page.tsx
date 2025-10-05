"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
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
      <div className="relative h-screen w-full bg-[url('/pastel.png')] m-2 rounded-2xl bg-cover bg-center text-black overflow-hidden">
        {/* Navbar */}
        <div className="flex items-center justify-between p-4 backdrop-blur-md bg-white/40 rounded-2xl mx-4 mt-4 shadow-md">
          {/* Logo */}
          <div className="flex items-center gap-2 md:ml-10">
            <Image
              src="/ailogo2.png"
              alt="AI Logo"
              width={50}
              height={50}
              className="w-10 h-10 md:w-[55px] md:h-[55px]"
            />
            <Image src={"/logo4.png"} width={180} height={80} alt="logo" />
          </div>

          {/* Menu Desktop */}
          <div
            className={`hidden md:flex items-center px-6 py-2 rounded-xl text-lg gap-8 font-medium ${inter.className}`}
          >
            <p className="hover:text-pink-600 cursor-pointer">Homepage</p>
            <p className="hover:text-pink-600 cursor-pointer">About Us</p>
            <p className="hover:text-pink-600 cursor-pointer">Platform</p>
          </div>

          {/* Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3 mr-10 font-sans">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 bg-gradient-to-r from-orange-400 to-red-500 hover:opacity-90 rounded-xl text-white font-medium shadow-md">
                  Login
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-600 hover:opacity-90 rounded-xl text-white font-medium shadow-md">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <SignOutButton>
                <button className="px-4 py-2 bg-gradient-to-r from-red-400 to-red-600 hover:opacity-90 rounded-xl text-white font-medium shadow-md">
                  Logout
                </button>
              </SignOutButton>
              <UserButton />
            </SignedIn>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <Image
              src={isOpen ? "/x.png" : "/menu.png"}
              width={28}
              height={28}
              alt="menu"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/90 text-gray-800 rounded-xl mx-4 mt-2 shadow-lg p-5 space-y-4 font-medium"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {[
              { name: "Homepage", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Platform", path: "/platform" },
            ].map((item, index) => (
              <Link href={item.path} key={item.name}>
                <motion.p
                  className="hover:text-pink-600 cursor-pointer"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 5, color: "#db2777" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.p>
              </Link>
            ))}
            <div className="flex gap-3 pt-2">
              <SignedOut>
                <SignInButton mode="modal">
                  <motion.button
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-xl shadow-md"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Login
                  </motion.button>
                </SignInButton>

                <SignUpButton>
                  <motion.button
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-600 text-white rounded-xl shadow-md"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign Up
                  </motion.button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <SignOutButton>
                  <button className="px-2 py-1 bg-gradient-to-r from-red-400 to-red-600 hover:opacity-90 rounded-xl text-white font-medium shadow-md">
                    Logout
                  </button>
                </SignOutButton>
                <UserButton />
              </SignedIn>
            </div>
          </motion.div>
        )}

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center h-[75vh] px-6">
          <div className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight max-w-3xl">
            <motion.h1
              className="bg-gradient-to-r from-[#5979d3] via-[#d8db16] to-[#EF7722] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              AI Mental Health Assessment
            </motion.h1>
          </div>

          <motion.p
            className="mt-6 text-lg text-gray-700 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Get a personalized AI-powered check-up and understand your mental
            health in just minutes.
          </motion.p>

          {/* CTA */}
          <motion.button
            className="mt-10 px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/chatbot">Try Now →</Link>
          </motion.button>
        </section>
      </div>
    </div>
  );
}
