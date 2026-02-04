import React, { useState } from "react";
import "./ProductView.css";
import { AiFillHome } from "react-icons/ai";
import { ProductDetails } from "./ProductDetails/ProductDetails";
import { ReviewCard } from "./ReviewCard/ReviewCard";
import user1 from "../../images/jacket7.jpg";
import user2 from "../../images/jeans8.jpg";
import user3 from "../../images/jacket3.jpg";
import userImg from "../../images/OIP.webp";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SimpleBackdrop from "../../Components/Loading/SimpleBackdrop";

export const ProductView = () => {
  const { id } = useParams();
  const { products, loading } = useSelector((state) => state.Producte);
  const defaultItem = {
    image: user1,
    title: "product Details",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    Category: "Women",
    price: 20,
    rating: {
      rate: 2.5,
    },
  };

  const ProductItem = products.find((item) => item.id === Number(id));
  const item = ProductItem || defaultItem;

  const ratings = [
    { star: 5, count: 22, percent: 80 },
    { star: 4, count: 14, percent: 60 },
    { star: 3, count: 6, percent: 40 },
    { star: 2, count: 3, percent: 20 },
    { star: 1, count: 1, percent: 10 },
  ];

  const reviews = [
    {
      id: 1,
      name: "Miron Mahmud",
      time: "25 minutes ago",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus.",
      avatar: user1,
    },
    {
      id: 2,
      name: "Sara Ahmed",
      time: "1 hour ago",
      text: "Eius harum tempora quis minima, adipisci natus quod magni omnis quas.",
      avatar: user2,
    },
    {
      id: 3,
      name: "John Smith",
      time: "Yesterday",
      text: "Molestiae reprehenderit repellendus expedita esse cupiditate quos doloremque rerum.",
      avatar: user3,
    },
  ];

  const [ownerReplies, setOwnerReplies] = useState([]);
  const [replyText, setReplyText] = useState("");

  if (loading) {
    return <SimpleBackdrop open={true} />;
  }
  return (
    <div className="ProductView">
      <div className="Product__View">
        <p className="Producte__View__Right">Product View</p>
        <div className="Producte__View__Left">
          <AiFillHome style={{ padding: 0, margin: 0 }} />
          <p>Dashboard</p>

          <p> / Products</p>
          <p>/ Product View</p>
        </div>
      </div>

      <div className="Product__Details">
        {/* Content */}
        <ProductDetails item={item} />

        {/* Description */}
        <div className="Product__Des mb-5">
          <h6>Product Description</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            reprehenderit repellendus expedita esse cupiditate quos doloremque
            rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit
            voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam
            debitis amet natus doloremque laudantium? Repudiandae, consequuntur,
            officiis quidem quo deleniti, autem non laudantium sequi error
            molestiae ducimus accusamus facere velit consectetur vero dolore
            natus nihil temporibus aspernatur quia consequatur? Consequuntur
            voluptate deserunt repellat tenetur debitis molestiae doloribus
            dicta. In rem illum dolorem atque ratione voluptates asperiores
            maxime doloremque laudantium magni neque ad quae quos quidem,
            quaerat rerum ducimus blanditiis reiciendis
          </p>
        </div>

        {/* Rating */}
        <div className="Rating__Analytics mb-5">
          <h6>Rating Analytics</h6>

          {ratings.map((item) => (
            <div className="Stars" key={item.star}>
              <span>{item.star}</span>

              <div className="rateing">
                <div
                  className="rateing-fill"
                  style={{ width: `${item.percent}%` }}
                />
              </div>

              <span>{item.count}</span>
            </div>
          ))}
        </div>

        {/* Customer_reviews */}

        <div className="Customer_reviews">
          <h6>Customer_reviews</h6>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              time={review.time}
              text={review.text}
              avatar={review.avatar}
            />
          ))}

          {ownerReplies.map((reply, index) => (
            <div className="Review__Card owner" key={index}>
              <img src={userImg} alt="owner" className="Review__Avatar" />

              <div className="Review__Content">
                <div className="Review__Header">
                  <h6>You</h6>
                  <span>Just now</span>
                </div>

                <p className="Review__Text">{reply}</p>
              </div>
            </div>
          ))}

          <div className="Review__Card owner">
            <img src={userImg} alt="owner" className="Owner__Avatar" />

            <div className="Owner__Content">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Write your reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />

              <button
                className="btn btn-primary btn-sm mt-2"
                onClick={() => {
                  if (replyText.trim() === "") return;
                  setOwnerReplies([...ownerReplies, replyText]);
                  setReplyText("");
                }}
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
