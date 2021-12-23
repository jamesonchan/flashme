import React, { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";
import {Sidebar, UserProfile} from '../components'
import {client} from '../client'
import logo from '../assets/logo.png'

function Home() {
  return (
    <div>
      <h1 className="">home</h1>
      <Sidebar />
      <UserProfile />
    </div>
  );
}

export default Home;
