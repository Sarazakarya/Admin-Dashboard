import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { FiMoreVertical } from "react-icons/fi";
import "./DahsboardBox.css";
import { DropDown } from "../DropDonn/DropDown";

export const DashBoardBox = ({ color, grow }) => {
  return (
    <div
      className="Dashoard__Box"
      style={{
        backgroundImage: `linear-gradient(to right,${color[0]}, ${color[1]})`,
      }}
    >
      <div className="box__content  text-light">
        {/* Top */}
        <div className="top__box ">
          <div className="left">
            <h6 className="title">Total Users</h6>
            <h3 className="number">277</h3>
            <div className="trend">
              {grow ? (
                <FaArrowTrendUp className="icon__up " size={100} />
              ) : (
                <FaArrowTrendDown className="icon__up " size={100} />
              )}
            </div>
          </div>

          <div className="icon">
            <FaRegUser />
          </div>
        </div>

        {/* Botoom */}
        <div className="bottom__Box ">
          <h6>Last Month</h6>
          <DropDown>
            <FiMoreVertical className="icon__select" />
          </DropDown>
        </div>
      </div>
    </div>
  );
};
