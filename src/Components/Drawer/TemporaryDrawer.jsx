import "./Drawer.css";
import { MdDashboard, MdMessage, MdSettings } from "react-icons/md";
import {
  FaArrowRight,
  FaProductHunt,
  FaSignInAlt,
  FaUserPlus,
  FaShoppingBag,
} from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/Slices/usersSlice";

export default function TemporaryDrawer() {
  const currenUser = useSelector((state) => state.Users.currenUser);
  const [openProduct, setOpenProduct] = useState(false);
  const dispatch = useDispatch();
  function handelProduct() {
    setOpenProduct(!openProduct);
  }
  return (
    <div className={`sideBar`}>
      <Link to={"/"} className="Link__Home">
        <div className="sideBarItem">
          <div>
            <MdDashboard size={20} />
            <h6>DASHBOARD</h6>
          </div>

          <FaArrowRight size={16} />
        </div>
      </Link>

      <div className="">
        <div className="sideBarItem" onClick={() => handelProduct()}>
          <div className="Prdouct">
            <FaProductHunt size={20} />
            <h6>Product</h6>
          </div>
          <FaArrowRight size={16} />
        </div>

        <div className={`Product__DropDown ${openProduct ? "open" : ""}`}>
          <Link to="/">
            {" "}
            <p>Product List</p>
          </Link>
          <Link to={"/Product"}>
            <p>Product View</p>
          </Link>
        </div>
      </div>

      <div className="sideBarItem">
        <div>
          <MdMessage size={20} />
          <h6>Message</h6>
        </div>
        <FaArrowRight size={16} />
      </div>

      <div className="sideBarItem">
        <div>
          <FaProductHunt size={20} />
          <h6>Notification</h6>
        </div>
        <FaArrowRight size={16} />
      </div>

      {currenUser ? (
        ""
      ) : (
        <>
          <Link to={"/Login"} className="Links">
            <div className="sideBarItem">
              <div>
                <FaSignInAlt size={20} />
                <h6>Sign In</h6>
              </div>
              <FaArrowRight size={16} />
            </div>
          </Link>

          <Link to={"/SignUp"} className="Links">
            <div className="sideBarItem">
              <div>
                <FaUserPlus size={20} />
                <h6>Sign Up</h6>
              </div>
              <FaArrowRight size={16} />
            </div>
          </Link>
        </>
      )}

      <div className="sideBarItem">
        <div>
          <FaShoppingBag size={20} />
          <h6>Orders</h6>
        </div>
        <FaArrowRight size={16} />
      </div>

      <div className="sideBarItem">
        <div>
          <MdSettings size={20} />
          <h6>Settings</h6>
        </div>
        <FaArrowRight size={16} />
      </div>
      {currenUser ? (
        <div
          className="sideBarItem"
          onClick={() => {
            dispatch(logout());
          }}
        >
          <div>
            <IoIosLogOut size={20} />
            <h6>Log Out</h6>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
