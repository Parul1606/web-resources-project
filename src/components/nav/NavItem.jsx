import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import NavUI from './NavUI'

const icons = [
  {
    icon: <FaIcons.FaHome />,
    iconName: "Home",
    navlink: "/",
  },
  {
    icon: <BsIcons.BsFillCameraVideoFill />,
    iconName: "Videos",
    navlink: "Videos",
  },
  { icon: <BsIcons.BsGlobe2 />, iconName: "Websites", navlink: "Websites" },
  { icon: <GiIcons.GiBookshelf />, iconName: "Books", navlink: "Books" },
  { icon: <BsIcons.BsTools />, iconName: "Tools", navlink: "Tools" },
  { icon: <BiIcons.BiBullseye />, iconName: "Challenges", navlink: "challenges" },
];

function NavItem() {

  return(
    <div className="overflow-hidden h-screen ">
      { icons.map((item, index) => (
    <NavUI
      key={index}
      // Index shouldn't be used as key
      icon={item.icon}
      iconName={item.iconName}
      navlink={item.navlink}
    />
  ))}
      
    </div>
  )
}

export default NavItem;
