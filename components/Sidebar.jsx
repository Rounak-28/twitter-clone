import { FaTwitter } from "react-icons/fa";
import { RiHome7Fill, RiHashtag } from "react-icons/ri";
import { TbUsers, TbDotsCircleHorizontal } from "react-icons/tb";
import { VscBell } from "react-icons/vsc";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiOutlineUser, HiOutlinePencil } from "react-icons/hi";
import { Tooltip } from "@nextui-org/react";
import ToolTipComp from "./ToolTipComp";

const Sidebar = (props) => {
  return (
    <div className="h-[100vh] w-36 bg-black text-white border-r-[1px] border-r-[#888484cb] fixed hidden md:block">
      <div className="icons-strip h-[100vh] absolute left-20 flex flex-col justify-evenly items-center">
        <FaTwitter className="text-3xl cursor-pointer" />
        <RiHome7Fill className="text-3xl cursor-pointer" />
        <RiHashtag className="text-3xl cursor-pointer" />
        <TbUsers className="text-3xl cursor-pointer" />
        <VscBell className="text-3xl cursor-pointer" />
        <HiOutlineEnvelope className="text-3xl cursor-pointer" />
        <HiOutlineUser className="text-3xl cursor-pointer" />
        <TbDotsCircleHorizontal className="text-3xl cursor-pointer" />
        <div className="pen bg-[#1d9bf0] rounded-full p-[10px]">
          <HiOutlinePencil className="text-3xl cursor-pointer" />
        </div>
        <Tooltip content={<ToolTipComp sign_out={props.sign_out} userName={props?.userName} />} trigger="click" placement="topStart" color="invert" shadow={true}>
          <div
            className="userImg rounded-full w-11 h-11 bg-slate-700 text-white text-xl flex justify-center items-center"
          >
            {props?.userName?.substring(0, 1)?.toUpperCase()}
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
