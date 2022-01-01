import React from "react";
import { FaRegComment } from "react-icons/fa";
import { RiHeart2Line } from "react-icons/ri";
import "./Card.css";

function Card(
  {
    cover,
    title,
    dp,
    user,
    commentCount,
    reactionCount,
    readTime,
    publishedDate,
    tags,
    fromNow,
  },
  ref
) {
  return (
    <div className="card">
      {/* conditionally rendering cover image */}
      {cover ? <img src={cover} className="cover" alt="" /> : ""}
      <div className="author">
        <img src={dp} className="profile" alt="" />
        <div>
          <p className="user-name hover-grey">{user}</p>
          <small className="date">{`${publishedDate} (${fromNow})`}</small>
        </div>
      </div>
      <h2 className="title">${title}</h2>
      <div className="tags">
        {tags
          ? tags.map((tag, index) => (
              <p key={index} className="hover-grey">
                #{tag}
              </p>
            ))
          : ""}
      </div>
      <div className="bottom">
        <div className="interactions">
          <div className="comments hover-grey">
            <i>
              <RiHeart2Line />
            </i>
            <p>{reactionCount} Reactions</p>
          </div>
          <div className="comments hover-grey">
            <i>
              <FaRegComment />
            </i>
            <p>{commentCount} Comments</p>
          </div>
        </div>

        <div className="save">
          <small>{readTime} min read</small>
          <button className="grey-btn">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
