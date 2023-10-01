"use-clinet";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import { Header } from "./Components/Header";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActivItem] = useState(0);

  return (
    <div>
      <Heading
        title="ELearning"
        description="ELearning is a platform for stundents to learn and get help from teacher"
        keywords="Programing,MERN,Redux,Machine Learning"
      />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} />
    </div>
  );
};

export default Page;
