"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./Components/Header";
import Hero from "./Components/Hero";


interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route,setRoute] =useState("Login");

  return (
    <div>
      <Heading
        title="ELearning"
        description="ELearning is a platform for stundents to learn and get help from teacher"
        keywords="Programing,MERN,Redux,Machine Learning"
      />
      <Header open={open} 
       setOpen={setOpen} 
       activeItem={activeItem} 
       setRoute={setRoute}
       route={route}
       />
       <Hero/>
    </div>
  );
};

export default Page;
