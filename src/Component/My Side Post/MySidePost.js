import { UserPost } from "../../RecoilState/myTweetPost/UserPost";
//import { RxAvatar } from "react-icons/rx";
import {useSetRecoilState } from "recoil";
import style from './UserSidePost.module.css'
//import { BiMessageRounded } from "react-icons/bi";
import { CgPoll } from "react-icons/cg";
import { FaRetweet } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
//import { BsFillHeartFill } from "react-icons/bs";
import LikeButton from "../../Atom/LikeButton/LikeButton";
import { useNavigate } from "react-router-dom";
//import { ThreadofMinePOst ,Thread} from "../../RecoilState/Thread/Thread";
import CommentDilogBox from "../CommentDilogBox/CommentDilogBox";
//import { Post } from "../../RecoilState/Post/Post";

export default function MySidePost({filterPost}) {
    let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser")) || []
    let allPost = JSON.parse(localStorage.getItem("allPost")) || []
      //object //clcked
    
    console.log(allPost , "userSidePOst")
    
   const postData = allPost.filter(x=> x.UserName === matchedUserDetails.UserName  )

    const setUserSidePost = useSetRecoilState(UserPost);
    const navigate = useNavigate()
    //const [threadData ,setThreadData] = useRecoilState(ThreadofMinePOst)
    
    function redirectToProfile(element) {
        // alert("i am clik")
        
        console.log(element,"m from user side post")
        if(element.UserName === matchedUserDetails.UserName){
          navigate(`/profile/${element.Name}`)

        }else{
          setUserSidePost(element)
          navigate(`/${element.Name}`)
        }

      }

      function redirectToStatus(element) {
        console.log(element , " i am from user side post file and want to be set in recoil")
        //setThreadData(element)
       
        navigate('/status')
      }
     
    return(
        <>
        <div>
        {
            postData.map(element=> 
                <div  className={style.postContainer} key={element.id}>
                <span onClick={()=>redirectToProfile(element)}>
              
            <img
              className={style.userProfle}
              src="https://tse1.mm.bing.net/th?id=OIP.Lui6lVdzvecYDAJ_ahUOawAAAA&pid=Api&P=0"
              alt="profilePic"
            />
            </span>
            <div className={style.postSubContainer}>
              <div>
                <span className={style.postUserName}>{ element.Name}</span>
                <span className={style.postHandleName}>
                  {element.handlerName}
                </span>
              </div>
              <div>
              <div onClick={()=>redirectToStatus(element)}>
              <span className={style.tweetText}>{element.tweetText}</span> 
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
                
                <CommentDilogBox/>
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
                <LikeButton />
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