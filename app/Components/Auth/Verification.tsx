import React,{FC} from 'react'
import {toast} from 'react-hot-toast'
import {VscWorkspaceTrusted} from "react-icons/vsc"

type Props ={

  setRoute:(route:string) =>void;
}

type VerifyNumber ={
  "0":string;
  "1":string;
  "2":string;
  "3":string;

}


const Verification:FC<Props>=({setRoute})=>{
  return (
    <div>Verfication</div>
  )
}

export default Verification;