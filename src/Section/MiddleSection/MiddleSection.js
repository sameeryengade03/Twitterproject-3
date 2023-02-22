import React from "react";
import style from "./MidSection.module.css";
import AllUserPost from "../../Component/AllUserPost/AllUserPost";
import MiddleSecTweetBox from "../../Component/Middle Sec TweetBox/MiddleSecTweetBox";

export default function MidSection({openLeftSec ,show  , midTweetClass}) {
 
  
  return (
    <>
      <div className={show ? style.blur :style.main}>
        <div className={style.subMain}>
        <div className={style.wrapper}>
          <h3 className={style.head}>Home</h3>
          <img  onClick={openLeftSec} className={style.mobilePic}  src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="profilePic" />
          </div>
          <div className={style.container}>
            <h4 className={style.forYou}>For You</h4>
            <h4 className={style.forYou}>Following</h4>
          </div>
        </div>
        {console.log(midTweetClass,"from  mid sec after click")}
        <MiddleSecTweetBox midTweetClass={midTweetClass}/>
        <AllUserPost />
        {
        // <div className={style.mobileTweet}></div>
        }
      </div>
    </>
  );
}
