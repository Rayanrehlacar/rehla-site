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

// const listItems = [
//   // Add your list items here. Ensure you have more than 6 items to see the pagination in action.
//   // For brevity, only a few items are shown here; you need to add the rest of your items.
//   {
//     imgSrc: "images/news/news-1.jpg",
//     admin: "Admin",
//     date: "17 July, 2021",
//     title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
//     description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
//     link: "#/news-details"
//   },
//   {
//     imgSrc: "images/news/news-2.jpg",
//     admin: "Admin",
//     date: "17 July, 2021",
//     title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
//     description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
//     link: "#/news-details"
//   },
//   {
//     imgSrc: "images/news/news-3.jpg",
//     admin: "Admin",
//     date: "17 July, 2021",
//     title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
//     description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
//     link: "#/news-details"
//   },
//   {
//     imgSrc: "images/news/news-4.jpg",
//     admin: "Admin",
//     date: "17 July, 2021",
//     title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
//     description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
//     link: "#/news-details"
//   },
//   {
//     imgSrc: "images/news/news-5.jpg",
//     admin: "Admin",
//     date: "17 July, 2021",
//     title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
//     description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
//     link: "#/news-details"
//   },
//   {
//     imgSrc: "images/news/news-6.jpg",
//     admin: "Admin",
//     date: "17 July, 2021",
//     title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
//     description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
//     link: "#/news-details"
//   },
//   {
//     imgSrc: "images/news/news-1.jpg",
//     admin: "Admin",
//     date: "17 July, 2021",
//     title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
//     description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
//     link: "#/news-details"
//   },
//   {
//     imgSrc: "images/news/news-2.jpg",
//     admin: "Admin",
//     date: "17 July, 2021",
//     title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
//     description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
//     link: "#/news-details"
//   },
//   {
//     imgSrc: "images/news/news-3.jpg",
//     admin: "Admin",
//     date: "17 July, 2021",
//     title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
//     description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
//     link: "#/news-details"
//   },
//   {
//     imgSrc: "images/news/news-4.jpg",
//     admin: "Admin",
//     date: "17 July, 2021",
//     title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
//     description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
//     link: "#/news-details"
//   },
//   {
//     imgSrc: "images/news/news-5.jpg",
//     admin: "Admin",
//     date: "17 July, 2021",
//     title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
//     description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
//     link: "#/news-details"
//   },
//   {
//     imgSrc: "images/news/news-6.jpg",
//     admin: "Admin",
//     date: "17 July, 2021",
//     title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
//     description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
//     link: "#/news-details"
//   },
//   {
//     imgSrc: "images/news/news-1.jpg",
//     admin: "Admin",
//     date: "17 July, 2021",
//     title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
//     description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
//     link: "#/news-details"
//   },
//   {
//     imgSrc: "images/news/news-2.jpg",
//     admin: "Admin",
//     date: "17 July, 2021",
//     title: "Human-Readable JavaScript: How to Compile & Run Your First Java Program",
//     description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
//     link: "#/news-details"
//   },
//   // Add all other items similarly
// ];

function News() {
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);
  const [list, setList] = useState([]);
  const [advertiseList, setAdvertiseList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  

  useEffect(()=>{
    fetchAllData();
  },[]);

  // useEffect(() => {
  //   getAllAdvertisments();
  // }, [])
  const fetchAllData = async () => {
    await Promise.all([getRehlaNews(), getAllAdvertisments(), getRehlaNewsCategories()]);
  };
  // const getRehlaNews = async () => {
  //   let {data} = await GetRehlaNews();
  //   setList(data?.model || []);
  // }


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
  }

  
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

  // render news
  const renderListItems = () => {
    const currentList = categoryId ? filteredList : list;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedItems = currentList.slice(startIndex, startIndex + itemsPerPage);

    if (!selectedItems || selectedItems.length === 0) {
      return <p className="text-center text-muted">No records found.</p>;
    }

    return selectedItems.map((item, index) => (
      <div className="list-item" key={index}>
        
        <Link to={`/news-details/${item.Id}`}>
          <div className="news_img">
            <img 
              src={item?.Image|| '/images/news/news-1.jpg'}
              alt={item?.Title} 
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop if default also fails
                e.target.src = "/images/news/news-1.jpg"; // Set your fallback image here
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
    // const totalPages = Math.ceil(listItems.length / itemsPerPage);
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

  //render adervtisement
  const renderAdvertiseListItems = () => {
    return advertiseList.map((item,index) => (
      <div className="recent_news">
        <Link to={`/news-details/${item.Id}`}>
        <div className="recent_img">
          <img src={item?.Image} alt={item?.Title} />
        </div>
        </Link>
        
        <div className="recent_detail">
        
          <h4>{item?.Description}</h4>
          <Link to={`/news-details/${item.Id}`}>
          <p>{moment(item.ExpirationDate).format('DD MMM YYYY')} </p>
          </Link>
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
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
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
                <li><a href="javascript:void(0);">Virtual Assistant <span className="count">((07)</span></a></li>
              </ul>
            </div>
            <div className="recent">
              <h3>Recent News</h3>
              {renderAdvertiseListItems()}
              {/* <div className="recent_news">
                <div className="recent_img">
                  <img src="images/news/news1.jpg" alt="news" />
                </div>
                <div className="recent_detail">
                  <h4>Don’t Count on Free to Win You Customers</h4>
                  <p>July 02, 2021</p>
                </div>
              </div>
               <div className="recent_news">
                <div className="recent_img">
                  <img src="images/news/news2.jpg" alt="news" />
                </div>
                <div className="recent_detail">
                  <h4>Is Your Organization Building Bridges?</h4>
                  <p>June 07, 2021</p>
                </div>
              </div>
              <div className="recent_news">
                <div className="recent_img">
                  <img src="images/news/news3.jpg" alt="news" />
                </div>
                <div className="recent_detail">
                  <h4>What Makes a Degree Review Successful?</h4>
                  <p>May 28, 2021</p>
                </div>
              </div>
              <div className="recent_news">
                <div className="recent_img">
                  <img src="images/news/news4.jpg" alt="news" />
                </div>
                <div className="recent_detail">
                  <h4>Getting Your Team to Buy into a Big Change</h4>
                  <p>March 03, 2021</p>
                </div>
              </div> */}
            </div>
            <div className="tags">
              <h3>Tags</h3>
              <ul className="tag_list">
              <li>
                <a href="javascript:void(0);" onClick={handleClearFilter}>Clear All</a>
              </li>
                {categories.map((item,index) => (
                  <li key={index}>
                    <a href="javascript:void(0);" 
                      className={categoryId === item.Id ? "active" : ""}
                      onClick={() => handleCategoryClick(item.Id)}
                      >{item?.Name}</a></li>
                )
                )}
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
      <Footer />
    </>
  );
}

export default News;
