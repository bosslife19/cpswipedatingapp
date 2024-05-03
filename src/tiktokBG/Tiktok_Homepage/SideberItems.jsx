import { useState } from "react";
import control from  "../../Routers/assets/control.png";
import logo from  "../../Routers/assets/logo.png";
// import ChartFill  from  "../../Routers/assets/Chart_fill.png";
// import Chat   from  "../../Routers/assets/Chat.png";
// import User   from  "../../Routers/assets/User.png";
// import Calendar   from  "../../Routers/assets/Calendar.png";
// import Search   from  "../../Routers/assets/Search.png";
// import Chart   from  "../../Routers/assets/Chart.png";
// import Folder   from  "../../Routers/assets/Folder.png";
// import Setting   from  "../../Routers/assets/Setting.png";
 
 // import { Link } from "lucide-react";
import { FaHome } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdGirl, MdOutlineConnectWithoutContact } from "react-icons/md";
 
const Appssss = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: <FaHome/> ,link: "/admin"},
    { title: "potential matches", src: <IoPersonAddSharp />,link: "/potential" },
    { title: "search", src: <GrUserManager/>, gap: true ,link: "/searchingleft"},
    { title: "People in Your Area ", src: <SiHomeassistantcommunitystore/> ,link: "/peopleArea"},
    { title: "Matched", src: <MdOutlineConnectWithoutContact />,link: "/matched"},
    { title: "Single Women", src:<MdGirl/> ,link: "/singleladies"},
    { title: " Single Men ", src:<GrUserManager />, gap: true ,link: "/singleMen"},
   ];

  return (
    <div className={`flex ${open ? 'open' : 'closed'}`}>
      <div className={`sidebarse ${open ? 'open' : 'closed'}`}>
        <img
          src={control}
          className={`toggle-icon ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="logo-container">
          <img
            src={logo}
            className={`logo ${open && "rotate-360"}`}
          />
          <h1 className={`title ${!open && "scale-0"}`}> Board</h1>
        </div>
        <ul>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`menu-item ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && ""
              } `}
            >
               <a href={Menu.link}>
                <i>{Menu.src}</i>
               <span className={`${!open && "hidden"}`}>{Menu.title}</span>
              </a>
            </li>
           ))}
        </ul>
      </div>
      {/* <div className="content">
        <h1 className="page-title">Home Page</h1>
      </div> */}
    </div>
  );
};

export default Appssss;
