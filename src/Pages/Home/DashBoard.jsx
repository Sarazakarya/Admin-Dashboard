import React from "react";
import "./DashBoard.css";
import { DashBoardBox } from "./DashBoradBox/DashBoardBox";
import { DropDown } from "./DropDonn/DropDown";
import { FiMoreVertical } from "react-icons/fi";
import PieChartWithCustomizedLabel from "./Chart/PieChartWithCustomizedLabel";
import { ProductTable } from "./Table/ProductTable";

export const DashBoard = () => {
  return (
    <div className="DashBoard">
      <div className="DashBoard__Charts">
        <div className="chart__Left col-lg-8 col-sm-12">
          <div className="chart">
            <DashBoardBox color={["#1da256", "#48d483"]} grow={"grow"} />
            <DashBoardBox color={["#C114E3", "#E356F9"]} />
          </div>

          <div className="chart">
            <DashBoardBox color={["#2D7AE5", "#56A4F2"]} />
            <DashBoardBox color={["#E2970F", "#F0C425"]} />
          </div>
        </div>

        {/* Right */}
        <div className="Chart__Right text-light">
          <div className="chart__Right__content col-1g-4 col-sm-12">
            <div className="d-flex justify-content-between">
              <h6>Total Sales</h6>
              <DropDown>
                <FiMoreVertical className="icon__select" />
              </DropDown>
            </div>

            <h2>$3,787,681.00</h2>
            <p>$3,578.90 in last month</p>

            <PieChartWithCustomizedLabel />
          </div>
        </div>
      </div>

      <ProductTable />
    </div>
  );
};
