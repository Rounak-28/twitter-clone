import { AiOutlineSearch } from "react-icons/ai";
import RightPanelTrendingCard from "./RightPanelTrendingCard";

const RightPanel = () => {
  return (
    <div className="h-[100vh] w-96 bg-black text-white border-l-[1px] border-l-[#888484cb] fixed right-0 hidden lg:block">
      <div className="flex flex-col items-center">
        <div className="my-1 w-4/5 relative">
          <input
            type="text"
            className="bg-[#202327] h-12 w-full rounded-full focus:outline-none indent-14 text-sm"
            placeholder="Search Twitter"
          />
          <AiOutlineSearch className="absolute left-5 top-[15px] text-xl text-[#6f7479]" />
        </div>
        <div className="bg-[#16181c] mt-4 h-[450px] w-4/5 rounded-xl px-4 pb-4">
          <p className="text-lg my-2">What&#39;s happening</p>
          <RightPanelTrendingCard />
          <RightPanelTrendingCard />
          <RightPanelTrendingCard />
          <RightPanelTrendingCard />
          <RightPanelTrendingCard />
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
