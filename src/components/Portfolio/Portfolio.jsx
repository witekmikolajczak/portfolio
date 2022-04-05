import { useEffect, useState } from "react";
import classes from "./Portfolio.module.scss";
import { PortfolioList } from "./PortfolioList/PortfolioList";
import {
  featuredPortfolio,
  // webPortfolio,
  // mobilePortfolio,
  // designPortfolio,
  // contentPortfolio,
} from "../../data";

export const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    // {
    //   id: "web",
    //   title: "Web App",
    // },
    // {
    //   id: "mobile",
    //   title: "Mobile App",
    // },
    // {
    //   id: "design",
    //   title: "Design",
    // },
    // {
    //   id: "content",
    //   title: "Content",
    // },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      // case "web":
      //   setData(webPortfolio);
      //   break;
      // case "mobile":
      //   setData(mobilePortfolio);
      //   break;
      // case "design":
      //   setData(designPortfolio);
      //   break;
      // case "content":
      //   setData(contentPortfolio);
      //   break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]); //when selected changing run useEffect
  return (
    <div className={classes.portfolio} id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return (
            // item.title
            <PortfolioList
              title="Featured"
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          );
        })}
      </ul>
      <div className={classes.container}>
        {data.map((element) => (
          <div className={classes.item}>
            <img src={element.img} alt="image" />
            <h3>
              <a href={element.link}>{element.title}</a>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
