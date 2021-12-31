import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FiTwitch } from "react-icons/fi";

//function to convert a date to relative date format
function timeAgo(date) {
  let currentDate = new Date().getTime();
  let oldDate = new Date(date).getTime();
  let time = Math.floor((currentDate - oldDate) / 1000);
  if (time <= 60) {
    return `Just now`;
  }
  time = Math.floor(time / 60);
  if (time <= 60) {
    if (time == 1) {
      return `1 Minute ago`;
    } else {
      return `${time} Minutes ago`;
    }
  }
  time = Math.floor(time / 60);
  if (time <= 24) {
    if (time == 1) {
      return `1 Hour ago`;
    } else {
      return `${time} Hours ago`;
    }
  }
  time = Math.floor(time / 24);
  if (time <= 30) {
    if (time == 1) {
      return `1 Day ago`;
    } else {
      return `${time} Days ago`;
    }
  }
  time = Math.floor(time / 30);
  if (time <= 12) {
    if (time == 1) {
      return `1 Month ago`;
    } else {
      return `${time} Months ago`;
    }
  }
  time = Math.floor(time / 12);
  if (time == 1) {
    return `1 Year ago`;
  } else {
    return `${time} Years ago`;
  }
}

//function to retrieve query parameters
function getLink(query, pageNo) {
  let link = "";
  switch (query) {
    case "relevant":
      link = `/latest?page=${pageNo}&per_page=20&top=2`;
      break;
    case "latest":
      link = `/latest?page=${pageNo}&per_page=20`;
      break;
    case "top":
      link = `?page=${pageNo}&per_page=20&top=30`;
      break;
  }
  return link;
}

const navList = [
  { nav: "🏠 Home", id: 1 },
  { nav: "📚 Reading List", id: 2 },
  { nav: "📃 Listings", id: 3 },
  { nav: "📹 Videos", id: 4 },
  { nav: "🏷️ Tags", id: 5 },
  { nav: "💡 FAQ", id: 6 },
  { nav: "🛍️ DEV Shop", id: 7 },
  { nav: "❤️ Sponsors", id: 8 },
  { nav: "🖥️ About", id: 9 },
  { nav: "📯 Contact", id: 10 },
];

const otherList = [
  { nav: "👍 Code of Conduct", id: 1 },
  { nav: "🤓 Privacy Policy", id: 2 },
  { nav: "👀 Terms of Use", id: 3 },
];

const iconsList = [
  { icon: <BsTwitter />, id: 1 },
  { icon: <AiFillFacebook />, id: 2 },
  { icon: <BsGithub />, id: 3 },
  { icon: <AiFillInstagram />, id: 4 },
  { icon: <FiTwitch />, id: 5 },
];

export { timeAgo, getLink, navList, otherList, iconsList };
