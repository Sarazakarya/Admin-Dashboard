import React from "react";
import logo from "../../images/download.png";
import person from "../../images/OIP.webp";
import { Link } from "react-router-dom";
import "./Header.css";
import { FiAlignJustify } from "react-icons/fi";
import { Search } from "../Search/Search";
import { CiLight } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { UserDropDown } from "./DropDown/UserDropDown";
import { NotificationDrop } from "./DropDown/NotificationDrop";
import TemporaryDrawer from "../Drawer/TemporaryDrawer";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import useThem from "../../Context/GobalContext";

export const Header = ({ sideBar, setSideBar }) => {
  const { toggleTheme } = useThem();
  function handeSideBar() {
    setSideBar(!sideBar);
  }
  const currenUser = useSelector((state) => state.Users.currenUser);

  return (
    <header>
      <div className="container-fluid w-100 ">
        <div className="row w-100 d-flex align-items-center w-100 pt-3">
          {/* Logo */}
          <div className="col-6 col-md-3 col-lg-2  d-flex align-items-center">
            <Link to="/">
              <div className="d-flex align-items-center gap-1 Logo__Image">
                <img src={logo} alt="" className="logo" />
                <span className="fw-bolder">HOTASH</span>
              </div>
            </Link>
          </div>

          {/* Circle Icon + Search */}
          <div className="col-3 col-md-4 col-lg-3 d-flex gap-3 align-items-center justify-content-end">
            <div
              className="circle-btn  List__One"
              onClick={() => handeSideBar()}
            >
              <FiAlignJustify size={20} className="icons__Header"/>
            </div>
            <Search />
          </div>

          <div className="col-3 col-md-5 col-lg-7 d-flex align-items-center justify-content-end gap-3 header-icons">
            <div className="circle-btn light" onClick={toggleTheme}>
              <CiLight size={20} className="icons__Header"/>
            </div>

            <NotificationDrop>
              <div className="circle-btn notify">
                <IoIosNotificationsOutline size={20} className="icons__Header" />
              </div>
            </NotificationDrop>

            <div className="circle-btn message">
              <BiSolidMessageRounded size={20} className="icons__Header"/>
            </div>

            <div className="circle-btn message">
              <FiShoppingCart size={20} className="icons__Header"/>
            </div>

            <div className="circle-btn menu-btn" onClick={() => handeSideBar()}>
              <FiAlignJustify size={20}  className="icons__Header"/>
            </div>

            {/* User */}
            {currenUser ? (
              <UserDropDown>
                <div className="d-flex gap-2 align-items-center User">
                  <img src={person} alt="" className="user-img" />
                  <div className="User__Info">
                    <h6 className="mb-0">{currenUser.name}</h6>
                    <p className="mb-0">{currenUser.email}</p>
                  </div>
                </div>
              </UserDropDown>
            ) : (
              <Link to={"/Login"}>
                <Button variant="primary">Sign In</Button>
              </Link>
            )}
          </div>

          {sideBar && <TemporaryDrawer open={sideBar} />}
        </div>
      </div>
    </header>
  );
};
