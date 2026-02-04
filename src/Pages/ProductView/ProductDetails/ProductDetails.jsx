import React from "react";
import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaTags } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { MdOutlineGeneratingTokens } from "react-icons/md";

export const ProductDetails = ({ item }) => {
  if (!item) return null;
  return (
    <div className="Product__Content">
      <div className="Product__Content_Left">
        <h5>Product Galley</h5>
        <img src={item.image} alt="" />
      </div>

      <div className="Product__Content_right">
        <h5>{item.title}</h5>
        <h4>{item.description}</h4>

        <div className="Categries">
          <BiSolidCategoryAlt />
          <h6>Category</h6>
          <p>{item.category}</p>
        </div>

        <div className="Categries">
          <FaTags />
          <h6>TAGS</h6>

          <div className="Tags">
            <span>SUITE</span>
            <span>PARTY</span>
            <span>PARTY</span>
            <span>DRESS</span>
            <span>SMART</span>
            <span>MAN</span>
          </div>
        </div>

        <div className="Categries">
          <MdBrandingWatermark />
          <h6>COLOR</h6>
          <div className="Tags">
            <span>RED</span>
            <span>BLUE</span>
            <span>WHITE</span>
          </div>
        </div>

        <div className="Categries">
          <MdOutlinePriceChange />
          <h6>PRICE</h6>
          <p>{item.price}$</p>
        </div>

        <div className="Categries">
          <MdOutlineGeneratingTokens />
          <h6>RATING</h6>
          <p>{item.rating.rate}</p>
        </div>
      </div>
    </div>
  );
};
