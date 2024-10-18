// import React, { useState } from "react";
// import styles from "./Navbar.module.css";
// import { getImageUrl } from "../../utils";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <div>
//       <nav className={styles.navbar}>
//         <a className={styles.title} href="/">
//           Portfolio
//         </a>
//         <div className={styles.menu}>
//           <img
//             className={styles.menuBtn}
//             src={
//               menuOpen
//                 ? getImageUrl("nav/closeIcon.png")
//                 : getImageUrl("nav/menuIcon.png")
//             }
//             onClick={() => {
//               setMenuOpen(!menuOpen);
//             }}
//             alt=""
//           />
//           <ul
//             onClick={() => {
//               setMenuOpen(false);
//             }}
//             className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
//           >
//             <li>
//               <a href="#about">Skill</a>
//             </li>

//             <li>
//               <a href="#experience">Experience</a>
//             </li>

//             <li>
//               <a href="#contact">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null); // Reference for the nav element

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMenuOpen(false); // Close the menu if the click is outside
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div ref={navRef}>
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          Portfolio
        </a>
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            alt="Menu"
          />
          <ul
            onClick={() => {
              setMenuOpen(false);
            }}
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          >
            <li>
              <a href="#about">Skill</a>
            </li>
            <li>
              <a href="#experience">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
