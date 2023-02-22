import React from 'react'
import { useState } from "react";
import FollowButton from "../../Atom/FollowButton/FollowButton";
import RightBotStyle from "./Follow.module.css";
//import { Post } from '../../RecoilState/Post/Post';
//import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
//import { UserPost } from '../../RecoilState/myTweetPost/UserPost';

export default function Trends() {
  let matchedUserData = JSON.parse(localStorage.getItem("matchedUser"))
let usersData =  JSON.parse(localStorage.getItem("UsersDetails")) || []
console.log(usersData , "userData")
 let followList = usersData.filter(x => x.UserName !==  matchedUserData.UserName)
 console.log(followList,"i am fkooww")
const navigate = useNavigate()

//const setUserSidePost = useSetRecoilState(UserPost);
 

 
  const [x , setX] = useState(3);
 
  
function handleShowMore() {
  if(x === 3){
    setX(followList.length)
  }else{
    setX(3)
  }
}
function redirectToProfile(element){
  console.log(element ,"i am follow")
  localStorage.setItem("otherUserPostObj" , JSON.stringify(element)) 
  //setUserSidePost(element)
  navigate(`/${element.Name}`)
}
  return (
    <>
    {   followList.length  ? 
      <div className={RightBotStyle.box}>
        <h3 style={{paddingLeft:"1rem"}}>Who to follow </h3>

        {
       
          followList.slice(0,x).map((element) => (
          <div className={RightBotStyle.contentmain}>
             <img
             onClick={()=>redirectToProfile(element)}
                style={{  borderRadius: "50%" }}
                src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
                width="50rem"
                height="50rem"
                alt="pp"
              />
            <div className={RightBotStyle.content}>
            <div className={RightBotStyle.name}>

              <span className={RightBotStyle.upText}>{element.Name}</span>
              <span className={RightBotStyle.content1}>{element.UserName}</span>
              </div>
            </div>
           
            <span className={RightBotStyle.poperParent}>
             
            <FollowButton  className={RightBotStyle.followButton}/>
            </span>
          </div>
        ))
    }

        <h4 onClick={handleShowMore} className={RightBotStyle.ShowMore}>{x === followList.length ? "Show less" : "Show More "}</h4>
      </div>
      : ""
  }
    </>
  );
}