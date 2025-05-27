import React,  { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import { GetAllAdvertisments, GetRehlaNews, GetRehlaNewsCategories, GetRehlaNewsDetails } from '../services/tripService';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
//import { useLocation } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';

const itemsPerPage = 6;

function NewsDetails() {
  const { t } = useTranslation();
  const [advertiseList, setAdvertiseList] = useState([]);
  const { id } = useParams();
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [list, setList] = useState([]);
 // const location = useLocation();



  useEffect(()=>{

   if (id !== null) {
      fetchRehlaNewsDetails(id);
   }

   fetchAllData();
  },[id]);

  const fetchAllData = async () => {
      await Promise.all([getAllAdvertisments(),getRehlaNewsCategories()]);
  }

 // const setNews = 

 const getRehlaNews = async (page = 0, categoryId = null) => {
   const { data } = await GetRehlaNews({ page, categoryId });
 
   if (categoryId) {
     setFilteredList(data?.model || []);
   } else {
     setList(data?.model || []);
   }
 };

  const getAllAdvertisments = async()=>{
    let { data } = await GetAllAdvertisments();
    setAdvertiseList (data?.model)
  }

  const fetchRehlaNewsDetails = async (id) => {
   const { error, data } = await GetRehlaNewsDetails({ id });
   if (error) {
     console.error('Error fetching news details:', error);
   } else {
     setNews(data?.model || {});
   }
 
 };

 const getRehlaNewsCategories = async () => {
   let { data } = await GetRehlaNewsCategories();
   setCategories(data?.model || []);
 }

 const handlePageChange = (pageNumber) => {
   setCurrentPage(pageNumber);
 };

 const handleCategoryClick = (id) => {
   console.log('id ' + id);
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
        <Header/>
        <section className="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}}>
      <div className="container">
         <div className="banner_head">
            <h1>News Details</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
         </div>
         <div className="bredcrub">
            <a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow"/></span> 
            <p>News Details </p>
         </div>
      </div>
   </section>
   {/* <!-------------|| Footer ||---------------> */}
   {/* <!-------------|| News Sec ||---------------> */}
   <section className="news single_news ptb120">
      <div className="container">
         <div className="news_list">
            <form action="#" method="post" name="news" id="news" className="search_form">
               <div className="news_group">
                  <input type="search" placeholder="Type to search..." name="search" id="search" value=""/>
                  <button type="Submit" id="news_submit" value="">
                  <img src="images/search.png" alt="search"/>
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
            </div>
            {/* <div className="tags">
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
            </div> */}
         </div>
         <div className="news_details">
            <div className="list-wrapper">
               <div className="list-item">
                  <div className="news_img">
                     <img src={news?.ImageUrl} alt="news"/>
                  </div>
                  <ul className="autor_detail">
                     <li><img src="images/news/admin.svg" alt="admin"/>Admin</li>
                     <li><img src="images/news/date.svg" alt="date"/>{moment(news?.CreationDate).format('DD MMM, YYYY')}</li>
                     <li><img src="images/news/comment.svg" alt="Comments"/>5 Comments</li>
                  </ul>
                  <div className="recent_content">
                     <h3>{news?.Title}</h3>
                     <p>{news?.Description}</p>
                  </div>
                  {/* <div className="recent_content">
                     <h3>The essentials of cybersecurity solutions</h3>
                     <p>Enhancing cyber security readiness and network resilience in both government and
                        private sector systems makes it more difficult for adversaries, both foreign and
                        domestic, to exploit Canadian systems. This, in turn, enhances trust in the digital
                        ecosystem in Canada, because it makes it less likely that personal, financial or
                        corporate information will be compromised by security breaches or unscrupulous
                        data practices. By establishing greater domestic cyber security readiness and
                        resilience, it also makes it a much more credible effort for Canada to try and position
                        itself as a global leader in the field.
                     </p>
                  </div>
                  <div className="recent_content">
                     <h3>Major elements that we offer:</h3>
                     <ul>
                        <li>The need to make tough decisions as a company grows</li>
                        <li>Why people are more important than technology in any company</li>
                        <li>The importance of video calls in building team connectivity</li>
                        <li>The role of engagement in a company's culture and why it's key to success</li>
                     </ul>
                  </div> */}
                  <div className="recent_content">
                     <h3>Share:</h3>
                     <ul className="social">
                        <li><a href="https://www.instagram.com/rehlacar/" target='_blank'><img src="images/news/insta.svg" alt="insta"/></a></li>
                        <li><a href="https://www.linkedin.com/company/rehlacar/" target='_blank'><img src="images/news/in.svg" alt="in"/></a></li>
                        <li><a href="https://www.facebook.com/RehlaCars/?ref=bookmarks" target='_blank'><img src="images/news/fb.svg" alt="fb"/></a></li>
                        <li><a href="https://x.com/Rehlacar?s=08" target='_blank'><img src="images/news/twiter.svg" alt="twiter"/></a></li>
                     </ul>
                  </div>
               </div>
              
             
            </div>
          
            {/* <div className="client_comments">
               <h4>Comments:</h4>
               <div className="Comments_list">
                  <div className="Comments_details">
                     <img src="images/handsome-businessman.webp" alt="client_img" />
                     <div className="comment_contant">
                        <p>Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is rewarding.</p>
                        <div className="client_name">
                           <h5>- Marvin McKinney</h5>
                           <p>May 28, 2021</p>
                        </div>
                     </div>
                  </div>
                  <hr className="comment_diveder"/>
                  <div className="Comments_details">
                     <img src="images/mand-holding.webp" alt="client_img" />
                     <div className="comment_contant">
                        <p>Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is rewarding.</p>
                        <div className="client_name">
                           <h5>- Savan Nguyen</h5>
                           <p>May 27, 2021</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="review_box">
               <h4>Leave a comment</h4>
               <p>Your email address will not be published*</p>
               <form action="#" method="post" id="comment_form" className="comment_form">
                  <textarea placeholder="Write your comment"></textarea>
                  <button type="submit">Submit</button>
               </form>
            </div> */}
         </div>
         {/* <div className="news_details">
            <div className="list-wrapper">
              {renderListItems()}
            </div>
            <div id="pagination-container" className="pagination pt60">
              {renderPagination()}
            </div>
          </div> */}
      </div>
   </section>
        <Footer/>
    </>
  )
}

export default NewsDetails