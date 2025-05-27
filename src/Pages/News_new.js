import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import '../css/style.css';
import '../css/reset.css';
import '../css/responsive.css';
import '../css/glightbox.css';
import { GetAllAdvertisments, GetRehlaNews, GetRehlaNewsCategories } from '../services/tripService';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const itemsPerPage = 6;

function News() {
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);
  const [list, setList] = useState([]);
  const [advertiseList, setAdvertiseList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedNewsItem, setSelectedNewsItem] = useState(null); // New state for selected news

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    await Promise.all([getRehlaNews(), getAllAdvertisments(), getRehlaNewsCategories()]);
  };

  const getRehlaNews = async (page = 0, categoryId = null) => {
    const { data } = await GetRehlaNews({ page, categoryId });

    if (categoryId) {
      setFilteredList(data?.model || []);
    } else {
      setList(data?.model || []);
    }
  };

  const getAllAdvertisments = async () => {
    let { data } = await GetAllAdvertisments();
    setAdvertiseList(data?.model || []);
  };

  const getRehlaNewsCategories = async () => {
    let { data } = await GetRehlaNewsCategories();
    setCategories(data?.model || []);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryClick = (id) => {
    setCategoryId(id);
    setCurrentPage(1);
    getRehlaNews(0, id);
  };

  const handleClearFilter = () => {
    setCategoryId(null);
    setCurrentPage(1);
    setFilteredList([]);
    getRehlaNews(0, null);
  };

  const renderListItems = () => {
    const currentList = categoryId ? filteredList : list;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedItems = currentList.slice(startIndex, startIndex + itemsPerPage);

    if (!selectedItems || selectedItems.length === 0) {
      return <p className="text-center text-muted">No records found.</p>;
    }

    return selectedItems.map((item, index) => (
      <div className="list-item" key={index}>
        <Link to="#" onClick={(e) => {
          e.preventDefault();
          setSelectedNewsItem(item); // Set selected news item on click
        }}>
          <div className="news_img">
            <img 
              src={item?.Image || '/images/news/news-1.jpg'}
              alt={item?.Title}
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop if default also fails
                e.target.src = "/images/news/news-1.jpg"; // Set fallback image
              }}
            />
          </div>
          <ul className="autor_detail">
            <li><img src="images/news/admin.svg" alt="admin" />{item.admin || 'Admin'}</li>
            <li><img src="images/news/date.svg" alt="date" />{moment(item.ExpirationDate).format('DD MMM YYYY')}</li>
          </ul>
          <div className="recent_content">
            <h3>{item.Title}</h3>
            <p>{item.Description}</p>
            <span>Read More</span>
          </div>
        </Link>
      </div>
    ));
  };

  const renderPagination = () => {
    const currentList = categoryId ? filteredList : list;
    const totalPages = Math.ceil(currentList.length / itemsPerPage);
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  const renderAdvertiseListItems = () => {
    return advertiseList.map((item, index) => (
      <div className="recent_news" key={index}>
        <div className="recent_img">
          <img src={item?.Image} alt={item?.Title} />
        </div>
        <div className="recent_detail">
          <h4>{item?.Description}</h4>
          <p>{moment(item.ExpirationDate).format('DD MMM YYYY')}</p>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Header />
      <section className="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }} id='news'>
        <div className="container">
          <div className="banner_head">
            <h1>{t('header.news')}</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo congue purus pretium ligula </p>
          </div>
          <div className="bredcrub">
            <a href="index.html" target="_self"> {t('header.home')} </a><span> <img src="images/arrow.png" alt="arrow" /></span>
            <p>{t('header.news')}</p>
          </div>
        </div>
      </section>
      <section className="news ptb120">
        <div className="container">
          <div className="news_list">
            <form action="#" method="post" name="news" id="news" className="search_form">
              <div className="news_group">
                <input type="search" placeholder="Type to search..." name="search" id="search" />
                <button type="Submit" id="news_submit" value="">
                  <img src="images/search.png" alt="search" />
                </button>
              </div>
            </form>
            <div className="categories">
              <h3>Blog Categories</h3>
              <ul>
                <li><a href="javascript:void(0);">Development <span className="count">(15)</span></a></li>
                <li><a href="javascript:void(0);">Website Construction <span className="count">(08)</span></a></li>
                <li><a href="javascript:void(0);">Cyber Security <span className="count">(20)</span></a></li>
                <li><a href="javascript:void(0);">Virtual Assistant <span className="count">(07)</span></a></li>
              </ul>
            </div>
            <div className="recent">
              <h3>Recent News</h3>
              {renderAdvertiseListItems()}
            </div>
            <div className="tags">
              <h3>Tags</h3>
              <ul className="tag_list">
                <li>
                  <a href="javascript:void(0);" onClick={handleClearFilter}>Clear All</a>
                </li>
                {categories.map((item, index) => (
                  <li key={index}>
                    <a href="javascript:void(0);"
                      className={categoryId === item.Id ? "active" : ""}
                      onClick={() => handleCategoryClick(item.Id)}>
                      {item?.Name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="news_details">
            <div className="list-wrapper">
              {renderListItems()}
            </div>
            <div id="pagination-container" className="pagination pt60">
              {renderPagination()}
            </div>
          </div>
        </div>
      </section>

      {/* Selected News Item Details */}
      {selectedNewsItem && (
        <div className="news-detail-popup">
          <button onClick={() => setSelectedNewsItem(null)} className="close-btn">×</button>
          <h2>{selectedNewsItem.Title}</h2>
          <img 
            src={selectedNewsItem.Image || '/images/news/news-1.jpg'} 
            alt={selectedNewsItem.Title}
            style={{ maxWidth: '100%', marginBottom: '20px' }}
          />
          <p><strong>Date:</strong> {moment(selectedNewsItem.ExpirationDate).format('DD MMM YYYY')}</p>
          <p>{selectedNewsItem.Description}</p>
        </div>
      )}
      
      <Footer />
    </>
  );
}

export default News;
