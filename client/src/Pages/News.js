import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { NewsCard } from "../components/NewsCard";

export const News = ({ location }) => {
  const history = useHistory();

  const [pageNumber, setPageNumber] = useState(1);
  const [posts, setPosts] = useState([]);
  const [lastPostID, setLastPostID] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      let requestNews = await axios({
        method: "get",
        url: `/api/News?page=${pageNumber}&lpID=${lastPostID}`
      });
      setPosts(requestNews.data);
      setLastPostID(requestNews.data.slice(-1)[0].id);
      setLoading(false);
    };
    getNews();
  }, [pageNumber, location]);

  const handlePageNumber = async direction => {
    if (direction == "next") {
      await setPageNumber(pageNumber + 1);
      history.push(`/News?page=${pageNumber + 1}&lpID=${lastPostID}`);
    } else if (direction == "prev") {
      if (pageNumber === 1) {
        alert("You are currently on the first page");
      } else {
        await setPageNumber(pageNumber - 1);
        history.push(`/News?page=${pageNumber}&lpID=${lastPostID}`);
      }
    }
  };

  return (
    <div id="newsSection">
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <ul>{[posts.map(post => <NewsCard newsArticle={post} />)]}</ul>
      )}
      <div className="newsButtons">
        {" "}
        <button
          type="button"
          onClick={e => handlePageNumber(e.target.value)}
          value="prev"
        >
          Back
          {/* <i className="fas fa-arrow-left"></i> */}
        </button>
        <span className="newsPage">{pageNumber}</span>
        <button
          type="button"
          onClick={e => handlePageNumber(e.target.value)}
          value="next"
        >
          Next
          {/* <i className="fas fa-arrow-right"></i> */}
        </button>
      </div>
    </div>
  );
};
