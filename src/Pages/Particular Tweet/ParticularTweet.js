import React from "react";
import style from "./ThreadPage.module.css";
import { BsArrowLeft } from "react-icons/bs";
import LeftSection from "../../Section/LeftSection/LeftSection";
import RightSection from "../../Section/RightSection/RightSection";
import { useNavigate } from "react-router-dom";
//import {Thread} from '../../RecoilState/Thread/Thread'
//import { useRecoilValue } from "recoil";
import { BiMessageRounded } from "react-icons/bi";
import { CgPoll } from "react-icons/cg";
import { FaRetweet } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import LikeButton from "../../Atom/LikeButton/LikeButton";
import CommentBox from "../../Component/CommentBox/CommentBox";
// import { CommentReplyState} from "../../RecoilState/CommentReplyState/CommentReplyState";
//import { Comment } from "../../RecoilState/Post/Post";

export default function ParticularTweet() {
let naviagte = useNavigate()
//  const threadReadDetails = useRecoilValue(Thread)  //threadREaddetail is an object  /empty
//  const postComment = useRecoilValue(CommentReplyState)
//  console.log(threadReadDetails , "I am from thread or status of particular user post")
 let particularTweetData = JSON.parse(localStorage.getItem("particularTweet")) || {}
 let commentData = JSON.parse(localStorage.getItem("commentData")) || []
 let matchedUserData = JSON.parse(localStorage.getItem("matchedUser"))

 let filteredCommentsForParticularPost = commentData.filter(x => x.id === particularTweetData.id)
console.log(filteredCommentsForParticularPost,"m from particulat tweet filter by id comment")
 //const readCommentData = useRecoilValue(Comment)
 const navigate = useNavigate()
 
 function redirectToProfile() {
  if(matchedUserData.Name === particularTweetData.Name){
    navigate(`/profile/${particularTweetData.Name}`)
  }else{
    localStorage.setItem("otherUserPostObj" , JSON.stringify(particularTweetData))
    navigate(`/${particularTweetData.Name}`)
  }

}

 function handleArrow() {
    naviagte('/home')
  }
  
  return (
    <>
      <div className={style.main}>
        <div className={style.left} style={{ border: "0px solid" }}>
          <LeftSection />
        </div>

        <div className={style.wrapper} style={{ border: "1px solid  white" }}>
        <div className={style.box}>
        <span  onClick={handleArrow} className={style.arrow}>
          <BsArrowLeft  />
          </span>
          <h3>Tweet</h3>
        </div>
{
    //this is modification of user side post woith css
}
  
       
        <div className={style.postContainer} key={particularTweetData.Name}>
       
     {
      //other profile  page  redirect
     } 
     <img
     onClick={()=>redirectToProfile()}
       className={style.userProfle}
       src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
       alt="profilePic"
     />
    
     
    
       <div>
         <span className={style.postUserName}>{particularTweetData.Name}</span><br/>
         <span className={style.postHandleName}>
           {particularTweetData.UserName}
         </span>
       </div>
       </div>
       <div className={style.postSubContainer}>
      
       <div className={style.tweetTextPic}>
       <span className={style.tweetText}>{particularTweetData.tweetText}</span>
       {particularTweetData.tweetPic ?
       <img
         className={style.tweetPic}
         src={particularTweetData.tweetPic}
         alt="tweetPic"
         width="560rem"
       />
       : ""}
       </div>
       <div className={style.iconsWrapper}>
       <span className={style.subIconsWrapper}>
         <BiMessageRounded className={style.icons} />
         <span className={style.iconText}>
         {
          //count
         } 
         </span>
         </span>
         <span  className={style.subIconsWrapper}>
         <FaRetweet className={style.icons} />
         <span className={style.iconText}>
         {
          //likes
         }
         </span>
         </span>
         <span  className={style.subIconsWrapper}>
         <LikeButton />
         <span className={style.iconText}>
         {
          //likes
         }
         </span>
         </span>
         <span  className={style.subIconsWrapper}>
         <CgPoll className={style.icons} />
         <span className={style.iconText}>
         {
          //viwes count
         }
         </span>
         </span>
         <BsUpload className={style.icons} />
       </div>
       </div>
        <div>
        
        </div>
      <CommentBox />

      {
        //comments
      }
  <div >
     { 
      filteredCommentsForParticularPost.map(x=>
       <>
       <div className={style.commentMain}>
        <h4><img src="https://tse2.mm.bing.net/th?id=OIP.1yoSL-WO0YU5mQKROudvswHaHa&pid=Api&P=0"  alt= "comment profile" className={style.avatar}/></h4>
        <div className={style.commenSubMain}>

        <div className={style.commentNameHandleNAme}>
        <span className={style.commenSubName}>{x.name}</span>
        <span className={style.commenSubName}>{x.handlerName}</span>

        </div>

        <p className={style.tweetCommentText}>{x.tweetReplyText}</p>
        <span className={style.iconsCommentWrapper}>
        <span className={style.subIconsWrapper}>
          <BiMessageRounded className={style.icons} />
          <span className={style.iconText}>
          {
            //count
          }
          </span>
          </span>
          <span  className={style.subIconsWrapper}>
          <FaRetweet className={style.icons} />
          <span className={style.iconText}>
          {
            //retweet count
          }
          </span>
          </span>
          <span  className={style.subIconsWrapper}>
          <LikeButton />
          <span className={style.iconText}>
          {
            //likes
          }
          </span>
          </span>
          <span  className={style.subIconsWrapper}>
          <CgPoll className={style.icons} />
          <span className={style.iconText}>
          {
            
            //views count
          }
          </span>
          </span>
          <BsUpload className={style.icons} />
        </span>
        </div>
        </div>
        </>
        )
      }
      </div>
 

      </div>

{
    //right section
}
        <div className={style.left} style={{ border: "0px solid" }}>
          <RightSection />
        </div>
      </div>
    </>
  );
}
