import style from './UserSidePost.module.css'
import { CgPoll } from "react-icons/cg";
import { FaRetweet } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import LikeButton from "../../Atom/LikeButton/LikeButton";
import { useNavigate } from "react-router-dom";
import CommentDilogBox from "../CommentDilogBox/CommentDilogBox";

export default function ClientSidePost() {
    let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"))
    let allPost = JSON.parse(localStorage.getItem("allPost")) || []
    
    let fectchOtherUserPostL = JSON.parse(localStorage.getItem("otherUserPostObj"))
    console.log(allPost , "ClientSidePOst")
   const postData = allPost.filter(x=> x.UserName === fectchOtherUserPostL.UserName )

    
    const navigate = useNavigate()
    // const [threadData ,setThreadData] = useRecoilState(ThreadofMinePOst)
    
    function redirectToProfile(element) {
        // alert("i am clik")
        
        console.log(element,"m from user side post")
        if(element.UserName === matchedUserDetails.UserName){
          navigate(`/profile/${element.Name}`)

        }else{
          // setUserSidePost(element)
          navigate(`/${element.Name}`)
        }
      }

      function redirectToStatus(element) {
        console.log(element , " i am from user side post file and want to be set in recoil")
      //  setThreadData(element)
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
              <div className={style.userTweetContainer}>
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
              <span className={style.subIconsWrapper}>
                
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