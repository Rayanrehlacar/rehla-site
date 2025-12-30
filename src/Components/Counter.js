import React from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
function Counter() {
  return (
    <>
        <section class="counter ptb60">
         <div class="container">
            <div class="counter_box">
               <img src="../../images/icon.webp" alt="icon"/>
               <div class="counter_details">
                  <h3><div class="counter-value" data-count="28">450</div>K</h3>
                  <p>Users</p>
               </div>
            </div>
            <div class="counter_box">
               <img src="../../images/icon1.webp" alt="icon"/>
               <div class="counter_details">
                   <h3><div class="counter-value" data-count="13">1</div>M</h3>
                  <p>Download</p>
               </div>
            </div>
            <div class="counter_box">
               <img src="../../images/icon2.webp" alt="icon"/>
               <div class="counter_details">
                  <h3><div class="counter-value" data-count="68">70</div>K</h3>
                  <p>Likes</p>
               </div>
            </div>
            <div class="counter_box">
               <img src="../../images/icon3.webp" alt="icon"/>
               <div class="counter_details">
                  <h3><div class="counter-value" data-count="10">5.0</div></h3>
                  <p>5 Star Rating</p>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Counter