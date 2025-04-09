const PullRequests = () => {
    return (
        <div className=" px-5 py-4 ">
            <div className="border border-solid rounded-sm border-gray-300 text-sm flex bg-[#f6f8fa] items-center justify-between rounded-t-lg">
                <div className=" flex p-2 ">
                    <div className="p-2 "><img src="assets/pull.svg" /></div>
                    <div className="p-2 flex items-center">
                        <div className="flex  font-medium mr-2  gap-2">810 Open
                            <img src="assets/tick.svg" />
                            <span className="text-gray">1285 Closed </span>
                        </div>
                    </div>

                </div>
                <div className="flex items-center gap-4 p-2 ">
                    <div className="flex items-center cursor-pointer">Author <img src="assets/down.svg" /></div>
                    <div className="flex items-center cursor-pointer">Label <img src="assets/down.svg" /></div>
                    <div className="flex items-center cursor-pointer">Projects <img src="assets/down.svg" /></div>
                    <div className="flex items-center cursor-pointer">MileStonescyryttnnf <img src="assets/down.svg" /></div>
                    <div className="flex items-center cursor-pointer">Reviews <img src="assets/down.svg" /></div>
                    <div className="flex items-center cursor-pointer">Assignee <img src="assets/down.svg" /></div>
                    <div className="flex items-center cursor-pointer">Sort <img src="assets/down.svg" /></div>
                </div>
            </div>
            <div className="border-b border-l border-r border-solid rounded-sm border-gray-300 text-m flex items-center justify-between hover:bg-[#f6f8fa] p-2 ">
                <div className="p-2 flex items-start gap-2 ">
                    <img src="assets/pull.svg" alt="PR Icon" className="w-4 h-4 mt-1" />
                    <div>
                        <div className="flex items-center gap-1">
                            <span className="font-medium hover:text-blue-600 cursor-pointer">
                                Fix top margin of sidebar in sidebar-16 for tailwind v4
                            </span>
                            <img src="assets/cross.svg" alt="Close" className="w-3 h-3 text-red-500" />
                        </div>
                        <div className="text-sm text-gray-600 ">
                            <span className="text-gray-500">
                                #7151 opened Apr 8, 2025 by <span className="font-medium hover:text-blue-600 cursor-pointer">VIEWVIEWVIEW</span>
                            </span>
                            <span className="ml-1 text-gray-400 hover:text-blue-600 cursor-pointer" title="Review required before merging">· Review required</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center"><img src="assets/message.svg" /> 1 </div>
            </div>

            <div className="border-b border-l border-r border-solid rounded-sm border-gray-300 text-m flex items-center justify-between hover:bg-[#f6f8fa] p-2">
                <div className="p-2 flex items-start gap-2 ">
                    <img src="assets/pull.svg" alt="PR Icon" className="w-4 h-4 mt-1" />
                    <div>
                        <div className="flex items-center gap-1">
                            <span className="font-medium hover:text-blue-600 cursor-pointer">
                                sonner: Remove defaults to system theme
                            </span>
                            <img src="assets/tick.svg" alt="Close" className="w-3 h-3 text-red-500" />
                            <button className="bg-[#0366d6] rounded-lg text-sm text-white font-medium px-2">dependencies</button>
                            <button className="bg-[#168700] rounded-lg text-sm text-white font-medium px-2">javascript</button>
                        </div>
                        <div className="text-sm text-gray-600 ">
                            <span className="text-gray-500">
                                #7152 opened Apr 8, 2025 by <span className="font-medium hover:text-blue-600 cursor-pointer">VIEWVIEWVIEW</span>
                            </span>
                            <span className="ml-1 text-gray-400 hover:text-blue-600 cursor-pointer" title="Review required before merging">· Review required</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center"><img src="assets/message.svg" /> 1 </div>
            </div>

            <div className="border-b border-l border-r border-solid rounded-sm border-gray-300 text-m flex items-center justify-between hover:bg-[#f6f8fa] p-2 ">
                <div className="p-2 flex items-start gap-2 ">
                    <img src="assets/pull.svg" alt="PR Icon" className="w-4 h-4 mt-1" />
                    <div>
                        <div className="flex items-center gap-1">
                            <span className="font-medium hover:text-blue-600 cursor-pointer">
                                chore(deps-dev): bump typescript from 4.9.5 to 5.8.3
                            </span>
                            <img src="assets/cross.svg" alt="Close" className="w-3 h-3 text-red-500" />
                        </div>
                        <div className="text-sm text-gray-600 ">
                            <span className="text-gray-500">
                                #7153 opened Apr 8, 2025 by <span className="font-medium hover:text-blue-600 cursor-pointer">VIEWVIEWVIEW</span>
                            </span>
                            <span className="ml-1 text-gray-400 hover:text-blue-600 cursor-pointer" title="Review required before merging">· Review required</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center"><img src="assets/message.svg" /> 1 </div>
            </div>

            <div className="border-b border-l border-r border-solid rounded-sm border-gray-300 text-m flex items-center justify-between hover:bg-[#f6f8fa] p-2">
                <div className="p-2 flex items-start gap-2 ">
                    <img src="assets/pull.svg" alt="PR Icon" className="w-4 h-4 mt-1" />
                    <div>
                        <div className="flex items-center gap-1">
                            <span className="font-medium hover:text-blue-600 cursor-pointer">
                                chore(deps): bump vite from 5.4.15 to 5.4.17
                            </span>
                            <img src="assets/tick.svg" alt="Close" className="w-3 h-3 text-red-500" />
                        </div>
                        <div className="text-sm text-gray-600 ">
                            <span className="text-gray-500">
                                #7151 opened Apr 8, 2025 by <span className="font-medium hover:text-blue-600 cursor-pointer">VIEWVIEWVIEW</span>
                            </span>
                            <span className="ml-1 text-gray-400 hover:text-blue-600 cursor-pointer" title="Review required before merging">· Review required</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center"><img src="assets/message.svg" /> 1 </div>
            </div>

            <div className="border-b border-l border-r border-solid rounded-sm border-gray-300 text-m flex items-center justify-between hover:bg-[#f6f8fa] p-2 rounded-b-lg">
                <div className="p-2 flex items-start gap-2 ">
                    <img src="assets/pull.svg" alt="PR Icon" className="w-4 h-4 mt-1" />
                    <div>
                        <div className="flex items-center gap-1">
                            <span className="font-medium hover:text-blue-600 cursor-pointer">
                                [default] fix: Use
                            </span>
                            <img src="assets/cross.svg" alt="Close" className="w-3 h-3 text-red-500" />
                        </div>
                        <div className="text-sm text-gray-600 ">
                            <span className="text-gray-500">
                                #7153 opened Apr 8, 2025 by <span className="font-medium hover:text-blue-600 cursor-pointer">VIEWVIEWVIEW</span>
                            </span>
                            <span className="ml-1 text-gray-400 hover:text-blue-600 cursor-pointer" title="Review required before merging">· Review required</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center"><img src="assets/message.svg" /> 1 </div>
            </div>
        </div>)
}
export default PullRequests