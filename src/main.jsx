// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render
  import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import skfragrance from "./assets/skfragrance.jpg";
import sk2 from "./assets/fragrance2.jpg";
import sk3 from "./assets/fragrance1.jpg";
import sk4 from "./assets/fragrance4.jpg";
import sk5 from "./assets/fragrance5.jpg";
import sk6 from "./assets/fragrance6.jpg";
import sk7 from "./assets/fragrance7.mp4";
import { SlOptions } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import { IoHeartDislikeCircleSharp } from "react-icons/io5";
import { MdHeight } from 'react-icons/md';


function Navbar(){
  return(
    <div id='navbar'>
      <h1 id='heading'>Facebook Post By SK</h1>
      <input id='input' type="search" placeholder='search' />
      <button id='loginbtn'>Login</button>
      <button id='signupbtn'>Odernow</button>
    </div>
  )
}
function Post(Props) {
  return (
    <>
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
          <img
            src={skfragrance}
            alt="Loading"
            className="dp"
            id="my-id"
            title="Click here to visit profile"
          />
          <div id='userdiv'>
            <h3 id='username' title="Click here to visit profile">Subhan Khatri</h3>
            <span id='now'>Now</span>
          </div>
        </div>
        <SlOptions size={30} style={{ cursor: 'pointer' }} id='navicon'/>

      </div>

      <p id='para'>
      "Capturing Elegance: Discover the Essence of SK Fragrance"
      "Luxury Scents, Lasting Impressions – SK Fragrance" <br />
      Youtube:<a target='_blank' href="https://www.youtube.com/@SAITInstitute">click</a>
      LinkDin: <a target='_blank' href="https://www.linkedin.com/in/subhan-khatri-798a672b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">click</a>
      </p>
      {/* <img src={Props.postimg} alt="post image" className="post-photo" id="my-id" />
       */}
        {Props.postimg.endsWith('.mp4') ? (
          <video src={Props.postimg} controls className="post-photo" id="my-id" />
        ) : (
          <img src={Props.postimg} alt="post image" className="post-photo" id="my-id" />
        )}

      <div>
      

      </div >
      <div id='secondlast'>
      <FcLike size={30} id='likericon'/><span id='likers'>Subhan Khatri and 10M others</span>
      <span id='commenters'>20k comments</span>
      </div>
      

      <div id='last'>
        <input type="checkbox" id="likeCheckbox" title='Click here to like' />
        <label htmlFor="likeCheckbox" id='label'>
        <IoHeartDislikeCircleSharp size={30} id='likebtn'/><span id='like'>Like</span></label>
        <BiCommentDetail size={30} id='commentbtn'title="Comment"/><span id='comment'>Comment</span>
        <IoMdShareAlt size={30} id='sharebtn'title="Share"/><span id='share'>Share</span>
      </div>
    </div>
    </>
  );
}


function App1() {
  return (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <Navbar/>
      <Post postimg={sk2}/>
      <Post postimg={sk3}/>
      <Post postimg={sk4}/>
      <Post postimg={sk5}/>
      <Post postimg={sk6}/>
      <Post postimg={sk7}/>
      
    </div>
  );
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App1 />
  </StrictMode>,
)

