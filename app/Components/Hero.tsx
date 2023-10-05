import Image from "next/image";
import React, { FC } from "react";

import { BiSearch } from "react-icons/bi";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="w-full 1000px:flex items-center">
      <div className="absolute top-[100px] 1000px:top-[unset] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[50vh] hero_animation">
        <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-center pt-[70px] 1000px:pt z-10">
          <Image
            src={require("../../public/images/banner-img-1.png")}
            alt=""
            className="object-contain max-w-[90%] md:max-w-[85%] h-auto z-10"
          />
        </div>
       
      </div>
    </div>
  );
};

export default Hero;







