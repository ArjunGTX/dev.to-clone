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

  //ref for page number
  let pageRef = useRef(1);

  useEffect(() => {
    //1200ms delay to demonstrate Skeleton UI
    setTimeout(() => fetchArticles(page, pageRef.current), 1200);
    return () => {
      setArticles([]);
      //enabling skeleton UI
      setIsEmpty(true);
      pageRef.current = 1;
    };
  }, [page]);

  useEffect(() => {
    //event listener to be triggered when scroll reaches bottom of the page
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  const fetchArticles = (query, pageNo) => {
    let link = getLink(query, pageNo);
    instance
      .get(link)
      .then((response) => {
        if (pageNo === 1) {
          //replacing all the articles
          setArticles(response.data);
        } else {
          //adding new articles to the existing list
          setArticles((prevArticles) => [...prevArticles, ...response.data]);
        }
        //disabling Skeleton UI
        setIsEmpty(false);
      })
      .catch((err) => {
        setTimeout(() => {
          console.log(err);
          alert("Something went wrong!! Try again later.");
        }, 3000);
      });
  };

  const scrollHandler = () => {
    if (
      //checking whether the scroll bar has reached bottom of the page
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      pageRef.current += 2;
      //fetching next page
      fetchArticles(page, pageRef.current);
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
        //displaying skeleton UI
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
              tags={article.tag_list}
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
