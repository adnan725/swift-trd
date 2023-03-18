import styles from "./Header.module.scss";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebar, setIsSidebar] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <>
      {isSidebar && <Sidebar />}
      <div className={styles.container}>
        <header>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-scissors"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />{" "}
              </svg>
            </div>
          </div>
          {windowWidth <= "1024" ? (
            <div className={styles.burger} onClick={toggleSidebar}>
              {!isSidebar ? (
                <MenuIcon className={styles.icon} />
              ) : (
                <CloseIcon className={styles.icon} />
              )}
            </div>
          ) : (
            <nav>
              <ul>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="/policy">Policy</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
          )}
        </header>
      </div>
    </>
  );
}

export default Header;
