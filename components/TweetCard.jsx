const TweetCard = (props) => {
  return (
    <div className="min-h-[100px] flex space-x-4 py-2 px-4 border-[1px] border-[#888484cb]">
      <div className="img w-11 h-11 bg-slate-700 rounded-full flex justify-center items-center text-2xl  cursor-pointer">
        {props?.name?.substring(0, 1)?.toUpperCase()}
      </div>
      <div className="texts w-full">
        <span className="font-semibold cursor-pointer">{props.name}</span>
        <span className="text-[#656a6e]">
          {" @"}
          {props.name}
        </span>
        <p>{props.tweetData}</p>
      </div>
    </div>
  );
};

export default TweetCard;
