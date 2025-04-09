import React from "react";

const FilterComponent = () => {
    return (
        <div className="px-5 py-3 ">
            <div className="flex  rounded items-center justify-between ">
                <div className="relative flex flex-8">
                    <span className=" py-1.5 flex border border-solid border-gray-300 text-sm font-medium bg-[#f6f8fa] rounded-l-md cursor-pointer pl-3">Filters<img src="assets/down.svg" className="mx-1" /> </span>
                    <img src="assets/search.svg" className="absolute  left-[89px] top-[11px] " />
                    <input placeholder="is:pr is:open" className="ml-0 py-1.5 w-[700px] placeholder-gray-500 focus:border-blue-200 bg-[#f6f8fa]  pl-8 rounded-r-md border border-solid border-gray-300 border-t-2 border-r-2  border-b-2 border-gray-300 " />
                </div>

                <div className="ml-4 border border-solid border-gray-300  rounded flex cursor-pointer">
                    <span className="py-1 border-r flex justify-between items-center gap-1 hover:bg-gray-100 px-1"><img src="assets/tag.svg" className="pl-3" /> label <span className="bg-gray-200 text-xs rounded-full px-2 py-0.5">
                        4
                    </span></span>
                    <span className="py-1  flex justify-between items-center gap-1 hover:bg-gray-100 px-1"><img src="assets/signpost.svg" className="pl-3" /> MileStones <span className="bg-gray-200 text-xs rounded-full px-2 py-0.5">
                        4
                    </span></span>
                </div>
                <button className="ms-4 bg-[#1f883d] text-white rounded px-2 py-1">New pull Request </button>
            </div>
        </div>
    )
};

export default FilterComponent;