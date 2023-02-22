import React from "react";
import Style from "./ProfilePage.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import LeftSection from "../../Section/LeftSection/LeftSection";
import RightSection from "../../Section/RightSection/RightSection";
import { useNavigate } from "react-router-dom";
//import UserSidePost from "../../Component/AllUserPost/AllUserPost";
import { useRecoilValue } from "recoil";
import { UserPost } from "../../RecoilState/myTweetPost/UserPost";
import MySidePost from "../../Component/My Side Post/MySidePost";
import HomeMobileFooter from "../../Component/HomeMobileFooter/HomeMobileFooter";

export default function ProfilePage() {
  let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"));
  let readUserSidePost = useRecoilValue(UserPost)  //object
  console.log(readUserSidePost, "i amm from profile page");
  let allPOst = JSON.parse(localStorage.getItem("allPost")) 

 
  const naviagte = useNavigate()
 

  function handleArrow() {
    naviagte('/home')
  }
  return (
    <>
      <div className={Style.main}>
      <div className={Style.left} style={{ border: "0px solid" }}>
      <LeftSection />
    </div>

        <div className={Style.wrapper} style={{ border: "1px solid  white" }}>
          <div className={Style.box}>
          <span  onClick={handleArrow} className={Style.arrow}>
            <BsArrowLeft  />
            </span>
            <h3 className={Style.NameHead}>{matchedUserDetails.Name}</h3>
          </div>
          <div className={Style.wallpaper}></div>
          <div className={Style.mainUserData}>
            <div className={Style.userData}>
              <div ><img className={Style.userProflePic} src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" /></div>
              <h3 className={Style.UpUserName}>{matchedUserDetails.Name} </h3>
              <span>{matchedUserDetails.UserName}</span>
              <div className={Style.joined}>
                <CgCalendarDates className={Style.calender} />
                <p>Joined June 2009</p>
              </div>
              <div className={Style.follower}>
                <div className={Style.subFollower}>
                  <p>112</p>
                  <p>Following</p>
                </div>
                <div className={Style.subFollower}>
                  <p>127.5M</p>
                  <p>Followers</p>
                </div>
              </div>
            </div>
          </div>
          <div className={Style.option}>
          <h4>Tweets</h4>
          <h4>Tweets & Replies</h4>
          <h4>Media</h4>
          <h4>Likes</h4>
          </div>

          {allPOst? 
          <MySidePost  />
          : ""}
        </div>
        <div className={Style.mobileFooter}>
          <HomeMobileFooter />
          </div>

        <div className={Style.right} style={{ border: "0px solid" }}>
        <RightSection />
      </div>
      </div>
    </>
  );
}
