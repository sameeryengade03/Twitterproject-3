
import style from './UserSidePost.module.css'
import { CgPoll } from "react-icons/cg";
import { FaRetweet } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import LikeButton from "../../Atom/LikeButton/LikeButton";
import { useNavigate } from "react-router-dom";
import CommentDilogBox from "../CommentDilogBox/CommentDilogBox";

export default function AllUserPost({filterPost}) {
    let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"))
    let allPost = JSON.parse(localStorage.getItem("allPost")) || []
    
    console.log(allPost , "userSidePOst")
    const navigate = useNavigate()
    
    
    function redirectToProfile(element) {
        // alert("i am clik")
        
        console.log(element,"m from user side post")
        if(element.UserName === matchedUserDetails.UserName){
          navigate(`/profile/${element.Name}`)

        }else{
          //setUserSidePost(element)
          localStorage.setItem("otherUserPostObj" , JSON.stringify(element))
          navigate(`/${element.Name}`)
        }

      }

      function redirectToParticulatTweet(element) {
        console.log(element , " i am particulat tweet clicked allPost")
        localStorage.setItem("particularTweet" , JSON.stringify(element))
        // setThreadData(element)
       
        navigate('/status')
      }
     
      function particularTweetSet(element) {
        console.log(element , " i am particulat tweet clicked allPost")
        localStorage.setItem("particularTweet" , JSON.stringify(element))
        // setThreadData(element)
      }
     
    return(
        <>
        <div>
        {
          allPost.map(element=> 
                <div  className={style.postContainer} key={element.id}>
                <span onClick={()=>redirectToProfile(element)}>
              
            <img
              className={style.userProfle}
              src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
              alt="profilePic"
            />
            </span>
            <div className={style.postSubContainer}>
              <div>
                <span className={style.postUserName}>{ element.Name}</span>
                <span className={style.postHandleName}>
                  {element.UserName}
                </span>
              </div>
              <div>
              <div onClick={()=>redirectToParticulatTweet(element)}>
              <div className={style.tweetText}>{element.tweetText}</div>
              {element.tweetPic ?
              <img
                className={style.tweetPic}
                src={element.tweetPic}
                alt="tweetPic"
                width="450rem"
              />
              : ""}
              </div>
              <span className={style.iconsWrapper}>
              <span className={style.subIconsWrapper}>
              <span>
                <span onClick={()=>particularTweetSet(element)}>
                <CommentDilogBox className={style.icons} />
                </span>
                </span>
                <span className={style.iconText}>
                {element.tweetCount}
                </span>
                </span>
                <span  className={style.subIconsWrapper}>
                <FaRetweet className={style.icons} />
                <span className={style.iconText}>
                {element.retweetCount}
                </span>
                </span>
                <span  className={style.subIconsWrapper}>
                <LikeButton className={style.icons} />
                <span className={style.iconText}>
                {element.likesCount}
                </span>
                </span>
                <span  className={style.subIconsWrapper}>
                <CgPoll className={style.icons} />
                <span className={style.iconText}>
                {element.viewsCount}
                </span>
                </span>
                <BsUpload className={style.icons} />
              </span>
              </div>
            </div>
          </div>
                )
        }
        </div>
        </>
    )
}