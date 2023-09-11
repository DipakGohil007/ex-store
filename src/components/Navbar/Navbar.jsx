import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import { ReactComponent as IconDropdown } from "../../assets/svgs/IconDropdown.svg";
import { Button, Dropdown, Space } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("hamburger");
    setHamburgerActive(!hamburgerActive);
  };

  useEffect(() => {
    const body = document.body;
    hamburgerActive
      ? body.classList.add("no-scroll")
      : body.classList.remove("no-scroll");
  }, [hamburgerActive]);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`} ref={navRef}>
      <div className="logo">
        <Logo />
      </div>
      <div className="nav-links">
        <Link href="/">Games</Link>
        <Dropdown
          menu={{
            items: [
              { key: "1", label: "Sports" },
              { key: "2", label: "Arcade" },
              { key: "3", label: "RolePlaying" },
            ],
          }}
        >
          <Link onClick={(e) => e.preventDefault()}>
            <Space>
              Browse Games
              <IconDropdown />
            </Space>
          </Link>
        </Dropdown>
        <Link to="/">Store</Link>
      </div>
      <div className="cta">
        <Button type="primary">Sign up</Button>
        <Button>Login</Button>
      </div>
      <Button className="hamburger-menu" onClick={showNavbar}>
        <GiHamburgerMenu />
      </Button>
    </div>
  );
};

export default Navbar;
