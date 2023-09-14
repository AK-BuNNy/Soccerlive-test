import styles from "../style";
import { navLinks } from "../constants";
import React, { useState } from "react";
import '../index.css';


const Navbar = () => {
  const [activeLink, setActiveLink] = useState(navLinks[0].title);
  const handleLinkClick = (nav) => {
    setActiveLink(nav.title);
  };

  return (
      <nav className={` relative h-[4rem]  bg-white w-full shadow-md rounded-lg`}>
        <div className=" absolute px-[120px] left-0 flex sm:flex-row  gap-8 w-full">
          {navLinks.map((nav) => (
            <div
              key={nav.id}
              className={`cursor-pointer p-4 mt-2 text-[15px] text-[#635A6B]`}
              onClick={() => handleLinkClick(nav)}
              style={
                activeLink === nav.title
                  ? {
                      borderBottom: "3px solid #161B46",
                      fontWeight: "bold", // Add the font-weight property
                      color: "#161B46",
                      transition: "borderBottomWidth 0.3s ease",
                    }
                  : null
              }
            >
              <a
                className={`font-sans p-4 `}
                href={`#${nav.id}`}
              >
                {nav.title}
              </a>
            </div>
          ))}
        </div>
      </nav>
  );
};

export default Navbar;
