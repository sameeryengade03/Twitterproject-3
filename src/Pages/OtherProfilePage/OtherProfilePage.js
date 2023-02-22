import React from "react";
import Style from "./ProfilePage.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import LeftSection from "../../Section/LeftSection/LeftSection";
import RightSection from "../../Section/RightSection/RightSection";
import { useNavigate } from "react-router-dom";
import ClientSidePost from "../../Component/ClientSidePost/ClientSidePost";
import HomeMobileFooter from "../../Component/HomeMobileFooter/HomeMobileFooter";

export default function OtherProfilePage() {
  const naviagte = useNavigate()
 
  let fectchOtherUserPostL = JSON.parse(localStorage.getItem("otherUserPostObj"))
  let allPost = JSON.parse(localStorage.getItem("allPost")) || []
  const postData = allPost.filter(x=> x.UserName === fectchOtherUserPostL.UserName )
  console.log(postData,"In m filfilterPost")
  
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
            <h3 className={Style.NameHead}>{postData[0].Name}</h3>
          </div>
          <div className={Style.wallpaper}></div>
          <div className={Style.mainUserData}>
            <div className={Style.userData}>
              <div><img  className={Style.userProflePic} src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="pop" /></div>
              <h3 className={Style.UpUserName}>{postData[0].Name} </h3>
              <span className={Style.UserName}>{postData[0].UserName}</span>
              <div className={Style.joined}>
                <CgCalendarDates className={Style.calender} />
                <p>Joined {}</p>
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
          <h4 className={Style.optionCategory}>Tweets</h4>
          <h4 className={Style.optionCategory}>Tweets & Replies</h4>
          <h4 className={Style.optionCategory}>Media</h4>
          <h4 className={Style.optionCategory}>Likes</h4>
          </div>

         

          <ClientSidePost/>
          <div className={Style.mobileFooter}>
          <HomeMobileFooter />
          </div>
        </div>

        <div className={Style.right} style={{ border: "0px solid" }}>
          <RightSection />
        </div>
      </div>
    
    </>
  );
}
