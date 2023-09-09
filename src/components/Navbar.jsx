import styles from "../style";
import { navLinks } from "../constants";
import React, { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (nav) => {
    setActiveLink(nav.title);
  };

  return (
    <div className={`${styles.flexStart} h-auto w-full`}>
      <nav className={`bg-white  w-full shadow-md rounded-lg`}>
        <div className="flex sm:flex-row gap-10 justify-center w-full">
          {navLinks.map((nav) => (
            <div
              key={nav.id}
              className={`cursor-pointer  p-4  text-[14px] transform transition-transform`}
              onClick={() => handleLinkClick(nav)}
            >
              <a
                className={`font-poppins p-4 `}
                href={`#${nav.id}`}
                style={
                  activeLink === nav.title
                    ? {
                        borderBottom: "2px solid",
                        fontWeight: "bold", // Add the font-weight property
                      }
                    : null
                }
              >
                {nav.title}
              </a>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
