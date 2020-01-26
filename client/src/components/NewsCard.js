import React, { useState, useEffect } from "react";

export const NewsCard = ({ newsArticle }) => {
  const { title, link, isoDate } = newsArticle;

  return (
    <div className="newsCard">
      <span className="newsPaper">
        <i class="far fa-newspaper"></i>
      </span>
      {/* title and date posted */}
      <div className="newsContent">
        <h4>
          <a className="newsHeader" href={link} target="_blank">
            {title}
          </a>
        </h4>
        <p>{isoDate.split("T")[0]}</p>
      </div>
      <span className="redditSquare">
        <a href={link} target="_blank">
          <i className="fab fa-reddit-square"></i>
        </a>
      </span>
    </div>
  );
};
