import { useRef, useState } from "react";
import CutomOverlay from "./Overlay";

const Header = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const [addShow, setaddShow] = useState(false);
    const targetadd = useRef(null);
    
    return (
        <header
            className="w-full  flex items-center justify-between p-3 bg-[#f6f8fa] "
        >
            <div className="flex items-center space-x-3">
                <button className="hover:bg-gray-200 border rounded-md p-1.5">
                    <img src="assets/hamburger.svg" className="w-4 h-4" />
                </button>
                <button>
                    <img src="assets/github.svg" width="32" height="32" />
                </button>
                <span className="text-sm text-gray-800">shadcn-ui <span className="text-gray-500">/</span> <span className="font-semibold">ui</span></span>
            </div>

            <div className="flex items-center space-x-2">
                <div className="flex-1 mx-6 max-w-sm relative">
                    <img src="assets/search.svg" className="absolute left-3 top-3" />
                    <input
                        type="text"
                        placeholder="Type / to search"
                        className=" border border-gray-300 rounded-md pl-9 pr-4  text-m bg-transparent placeholder-gray-500 focus:outline-none h-9 "
                    />
                </div>
                <button ref={target} onClick={() => setShow(!show)} title="Chat with copilot..." className='flex border border-600 rounded-md'>
                    <img src='assets/copilot.svg' className='p-2 hover:bg-gray-200 border-r' /> <img src='assets/down.svg' className='p-2 border-l-1 hover:bg-gray-200 border-gray-200' />
                </button>
                <CutomOverlay target={target} show={show} >
                    <div>
                        <p className="text-sm">New conversation in </p>
                        <p className="flex gap-2"><img src="assets/message.svg"/>Assistive</p>
                        <p className="flex gap-2"><img src="assets/fullscreen.svg"/>Immersive</p>
                        <p className="flex gap-2"><img src="assets/pull.svg"/>download</p>
                        <p className="flex gap-2"><img src="assets/issues.svg"/>Assistive</p>
                    </div>
                </CutomOverlay>
                <button ref={targetadd} className="border rounded-md p-1 hover:bg-gray-200 flex items-center" title="Create new..." onClick={() => setaddShow(!addShow)}>
                    <img src="assets/plus.svg" className="border-l-1 hover:bg-gray-200 border-gray-200 p-1 " />
                    <img src='assets/down.svg' className=' border-l-1 hover:bg-gray-200 border-gray-200 p-1' />
                </button>
                <CutomOverlay target={targetadd} show={addShow} >
                    <div>
                        <p className="text-sm">New conversation in </p>
                        <p className="flex gap-2"><img src="assets/message.svg"/>New Repository</p>
                        <p className="flex gap-2"><img src="assets/fullscreen.svg"/>Import repository</p>
                        <p className="flex gap-2"><img src="assets/pull.svg"/>New codespace</p>
                        <p className="flex gap-2"><img src="assets/issues.svg"/>new gist</p>
                    </div>
                </CutomOverlay>
                <span className="text-gray-500 text-gray-400 text-sm">|</span>
                <button className="border rounded-md p-2 hover:bg-gray-200 p-2" title="Your issues...">
                    <img src="assets/clock.svg" />
                </button>
                <button className="border rounded-md p-2 hover:bg-gray-200">
                    <img src="assets/branch.svg" className="w-3 h-3" />
                </button>
                <button className="border rounded-md p-2 hover:bg-gray-200">
                    <img src="assets/message.svg" className="w-3 h-3" />
                </button>
                <button className="border rounded-full hover:bg-gray-200">
                    <img src="assets/avtar.png" className="w-8 h-8 rounded-full" />
                </button>
            </div>
        </header>
    );
};

export default Header;
