import React from "react";
import {
  // FaSun,
FaJava,

  FaReact,
  FaPython,
  FaNode,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaTerminal,
  FaGithub,
  FaWordpress,
  FaLinux,
  FaTrello,
  FaRaspberryPi,
  FaJs,
  FaAws,
  FaDatabase,
} from "react-icons/fa"

const Tabs = ({ color }) => {

  const getStyle ={
    color: "gray",
    
}
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap w-[60%] m-auto ">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row "
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-black bg-[white] boxAnimation" 
                    : "text-white ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Front-End Technologies
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-black bg-[white] boxAnimation" 
                    : "text-white ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Back-End Technologies
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-black bg-[white] boxAnimation" 
                    : "text-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Other Technologies
              </a>
            </li>
            
          </ul>
          <div className="relative flex flex-col min-w-0 break-words text-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="grid grid-cols-4 grid-rows-2 gapStyling text-4xl lg:text-8xl justify-items-end">
                <FaReact style={getStyle} />
                <FaHtml5 style={getStyle} />
                <FaCss3 style={getStyle} />
                <FaBootstrap style={getStyle} />
                <FaJs style={getStyle}/>
                </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2" >
                  <div className="grid grid-cols-4 grid-rows-2 gapStyling text-4xl lg:text-8xl justify-items-end">
                <FaNode style={getStyle} />
                <FaPython style={getStyle} />
                <FaJava style={getStyle} />
                <FaDatabase style={getStyle}/>
                
                </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link1">
                <div className="grid grid-cols-4 grid-rows-2 gapStyling text-4xl lg:text-8xl justify-items-end">
              <FaTerminal style={getStyle} />
              <FaGithub style={getStyle} />
              <FaWordpress style={getStyle} />
              <FaLinux style={getStyle} />
              <FaTrello style={getStyle} />
              <FaRaspberryPi style={getStyle} />
              <FaAws style={getStyle} />
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
      return <Tabs  />;
    </>
  );
}