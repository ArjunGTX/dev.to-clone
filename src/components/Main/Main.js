import React, { useState, useEffect, useRef } from "react";
import "./Main.css";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";
import { instance } from "../../axios/Instance";
import { timeAgo, getLink } from "../../util/utility";
import Skeleton from "../Skeleton/Skeleton";

function Main({ page }) {
  const [articles, setArticles] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  let pageRef = useRef(1);
  useEffect(() => {
    setTimeout(() => getArticles(page, pageRef.current), 1200);
    return () => {
      setArticles([]);
      setIsEmpty(true);
      pageRef.current = 1;
    };
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  function getArticles(query, pageNo) {
    let link = getLink(query, pageNo);
    instance
      .get(link)
      .then((response) => {
        setArticles(response.data);
        setIsEmpty(false);
      })
      .catch((err) => console.log(err));
  }

  const scrollHandler = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      pageRef.current += 2;
      let link = getLink(page, pageRef.current);
      instance
        .get(link)
        .then((response) => {
          setArticles((state) => [...state, ...response.data]);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="main">
      <ul className="topics">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "active-link link" : " link"
            }
          >
            Relevant
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/latest"}
            className={({ isActive }) =>
              isActive ? "active-link link" : "link"
            }
          >
            Latest
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/top"}
            className={({ isActive }) =>
              isActive ? "active-link link" : "link"
            }
          >
            Top
          </NavLink>
        </li>
      </ul>
      {isEmpty &&
        [1, 2, 3, 4, 5].map((value) => (
          <Skeleton cover={value == 1 ? true : false} key={value} />
        ))}
      {articles &&
        articles.map((article, index) => {
          return (
            <Card
              key={article.id}
              cover={index === 0 ? article.cover_image : ""}
              title={article.title}
              commentCount={article.comments_count}
              reactionCount={article.public_reactions_count}
              readTime={article.reading_time_minutes}
              publishedDate={article.readable_publish_date}
              tags={articles.tag_list}
              user={article.user.name}
              dp={article.user.profile_image}
              fromNow={timeAgo(article.published_at)}
            />
          );
        })}
    </div>
  );
}

export default Main;
