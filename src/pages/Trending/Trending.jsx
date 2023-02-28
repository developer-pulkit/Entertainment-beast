import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Trending.css";

function Trending() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchedTrending = async () => {
    try {
      const { data } = await axios.get(
        `https:api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      );
      setContent(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchedTrending();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((data) => (
            <SingleContent
              data={data}
              key={data.id}
              id={data.id}
              poster={data.poster_path}
              title={data.title || data.name}
              date={data.first_air_data || data.release_date}
              media_type={data.media_type}
              vote_average={data.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
}

export default Trending;
