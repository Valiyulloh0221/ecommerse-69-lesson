import "./index.scss";
import img from "../../assets/gr-57.png";
import img1 from "../../assets/ci_grid-big-round.png";
import img2 from "../../assets/bi_view-list.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Footercomp from "../footercomp";

const ShopComp = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:3000/data").then((res) => {
        setData(res?.data);
      });
    };
    fetchData();
  }, []);



  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    localStorage.setItem("currentPage", JSON.stringify(pageNumber));
  };

  useEffect(() => {
    const savedPage = JSON.parse(localStorage.getItem("currentPage"));
    if (savedPage) {
      setCurrentPage(savedPage);
    }
  }, []);

  return (
    <>
      <section className="shopComp">
        <div className="container">
          <h2>Shop</h2>
          <p className="text">
            Home
            <span>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
              </svg>
            </span>
            Shop
          </p>
        </div>
      </section>
      <div className="filter_shop">
        <div className="container">
          <div className="filter_left">
            <img src={img} alt="" />
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <p className="p"></p>
            <p className="text">Showing 1–16 of 32 results</p>
          </div>
          <div className="filter_right">
            <p className="show">Show</p>
            <input
              type="tel"
              placeholder="16"
              className="in"
              maxLength="2"
              required
            />
            <p className="sort">Short by</p>
            <input
              type="tel"
              maxLength="10"
              placeholder="Default"
              className="in1"
            />
          </div>
        </div>
      </div>

      <div className="page">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li
              style={{ display: currentPage <= 1 && "none" }}
              className="page-item"
              id="page"
              disabled={currentPage <= 1}
              onClick={() => paginate(currentPage - 1)}>
              <button>Previous</button>
            </li>
            {Array.from(
              { length: Math.ceil(data.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  className={`page-item1 ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                  onClick={() => paginate(i + 1)}
                >
                  <span className="page-link">{i + 1}</span>
                </button>
              )
            )}

            <button
              className="page-item"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
            >
              Next
            </button>
          </ul>
        </nav>
      </div>
      <Footercomp />
    </>
  );
};

export default ShopComp;
