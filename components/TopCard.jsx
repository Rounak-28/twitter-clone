import { BsStars, BsEmojiSmile } from "react-icons/bs";
import { BiPhotoAlbum, BiPoll } from "react-icons/bi";
import { HiOutlineGif } from "react-icons/hi2";
import { TbCalendarTime } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";

const TopCard = (props) => {
  return (
    <div className="h-44 border-b-[1px] border-b-[#888484cb]">
      <div className="top h-12 flex justify-between items-center text-xl font-semibold px-4">
        <p className="cursor-pointer">Home</p>
        <BsStars className="cursor-pointer"/>
      </div>
      <div className="mid h-20 flex items-center px-4">
        <div className="userImg rounded-full w-11 h-11 bg-slate-700 text-white text-xl flex justify-center items-center cursor-pointer">
          {props?.userName?.substring(0, 1)?.toUpperCase()}
        </div>
        <input
          type="text"
          className="bg-[#202327] mx-2 text-xl w-full h-16 rounded-full indent-4 focus:outline-none"
          placeholder="What's happening?"
          ref={props.inputRef}
        />
      </div>
      <div className="bottom px-4 flex justify-between">
        <div className="icons flex text-xl h-10 ml-12 items-center space-x-5 text-[#1d9bf0]">
          <BiPhotoAlbum className="cursor-pointer" />
          <HiOutlineGif className="cursor-pointer" />
          <BiPoll className="cursor-pointer" />
          <BsEmojiSmile className="cursor-pointer" />
          <TbCalendarTime className="cursor-pointer" />
          <CiLocationOn className="cursor-pointer" />
        </div>
        <button
          className="bg-[#0e4e78] px-4 py-2 rounded-full font-semibold"
          onClick={props.uploadTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TopCard;
