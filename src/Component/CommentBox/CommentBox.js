import style from './TweetBox.module.css'
import CustomButton from "../../Atom/CustomButton/CustomButton";
import TextArea from "../../Atom/TextArea/TextArea";
import { RxAvatar } from "react-icons/rx";
import { MdOutlinePoll } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { TfiGallery } from "react-icons/tfi";
import { TbCalendarStats } from "react-icons/tb";
import { AiOutlineFileGif } from "react-icons/ai";
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Thread } from '../../RecoilState/Thread/Thread';
import { Comment } from '../../RecoilState/Post/Post';

export default function CommentBox({element}) {
const matchedUserData = JSON.parse(localStorage.getItem("matchedUser"))
const particularTweet = JSON.parse(localStorage.getItem("particularTweet"))
const setCommentData = useSetRecoilState(Comment)



  const threadUserName = useRecoilValue(Thread)
 
  console.log(threadUserName , " I am from thread box")
// console.log(postData,"from comment selectpost")
    const [tweetReply, setTweetRelpy] = useState("");
    const [show, setShow] = useState(false);
    //const [tweetPost,setTweetPost] = useRecoilState(UserPost)

    function handleTweet(e) {
        setTweetRelpy(e.target.value);
        //console.log(e.target.value ,"i am from midtweetbox")
      }
      function handleShow() {
        setShow(true);
      }
      function handleTweetReply() {
        
        const reply = {
   name : matchedUserData.Name,
   UserName : matchedUserData.UserName,
  tweetReplyText : tweetReply,
  id :  particularTweet.id

        }


        let comment = localStorage.commentData?.length > 0  ? JSON.parse(localStorage.getItem("commentData")) : []
         comment = [reply , ...comment]
         localStorage.setItem("commentData" ,JSON.stringify(comment))
         setCommentData(comment)

        
        setTweetRelpy("");
      
      }
    return(
        <>
        <div onClick={handleShow} className={style.subContainer}>
        <RxAvatar className={style.avatar} />
        <div className={style.input}>
          {show ? (
            <CustomButton
              className={style.evryOnebtn}
              buttonText= {`Replying to `}
            />
          ) : (
            ""
          )}
          <TextArea
            placeholder="Tweet your reply"
            value={tweetReply}
            onChange={handleTweet}
            className={style.inputBox}
          />
        </div>
      </div>

     

      <div className={style.iconBtnWrapper}>
        <div className={style.iconBtn}>
          <TfiGallery className={style.iconss} />
          <AiOutlineFileGif className={style.iconss} />
          <MdOutlinePoll className={style.iconss} />
          <TbCalendarStats className={style.iconss} />
          <TfiLocationPin className={style.iconss} />
        </div>
        <CustomButton onClick={handleTweetReply} className={style.tweetPushbtn} buttonText="Reply" />
      </div>

      
      
      
   
        
        </>
    )
}