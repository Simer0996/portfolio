import React from "react";
import {
  // FaSun,

  FaReact,
  FaPython,
  FaNode,
  FaHtml5,
  FaCss3,
  FaBootstrap,
} from "react-icons/fa"

const Tabs = ({ color }) => {

  const getStyle ={
    color: "gray",
    
}
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap w-[60%] m-auto block">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-black bg-[#ff9760]" 
                    : "text-white bg-black")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Front-End
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-black bg-[#ff9760]" 
                    : "text-white bg-black")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Back-End
              </a>
            </li>
            
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-black text-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="flex justify-center">
                <FaReact style={getStyle} size={90}/>
                <FaHtml5 style={getStyle} size={90}/>
                <FaCss3 style={getStyle} size={90}/>
                <FaBootstrap style={getStyle} size={90}/>
                </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2" >
                  <div className="flex justify-center">
                <FaNode style={getStyle} size={90}/>
                <FaPython style={getStyle} size={90}/>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Skills() {
  return (
    <>
      return <Tabs color="pink" />;
    </>
  );
}