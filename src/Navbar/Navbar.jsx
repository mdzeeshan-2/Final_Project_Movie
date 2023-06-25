import React, { useEffect, useState } from "react";
import logo from "./tmdb.svg";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import "./navbar.css";

function Nav() {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;

      if (position > 50) {
        setHide(position > scrollPosition);
        setSrollPosition(position);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav className={`blue-bg ${hide && "hide-nav"}`}>
      <div className="navigationBar">
        <a href="/" className="nav-logo">
          <img src={logo} alt="logo" width="154" height="20" />
        </a>

        <div className="nav-list-container">
          <ul>
            <li>
              Movies
            </li>

            <li>
              TV Shows
            </li>

            <li>
              People
            </li>

            <li>
              More
            </li>
          </ul>

          <ul>
            <li>
              
                <AddIcon />
            
            </li>

            <li>
              
                <div className="box-visible">EN</div>
            
            </li>

            <li>
              Login
            </li>

            <li>
              Join TMDb
            </li>

            <li>
              
                <SearchIcon />
            
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
