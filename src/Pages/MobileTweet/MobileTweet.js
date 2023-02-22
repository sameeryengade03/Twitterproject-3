import { useRef, useState } from "react";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { IoEarthSharp } from "react-icons/io5";
import { MdOutlinePoll } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { TbCalendarStats } from "react-icons/tb";
import { TfiGallery, TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import CustomButton from "../../Atom/CustomButton/CustomButton";
import TextArea from "../../Atom/TextArea/TextArea";
//import MiddleSecTweetBox from "../../Component/Middle Sec TweetBox/MiddleSecTweetBox";
import { Post } from "../../RecoilState/Post/Post";
import style from './MobileTweet.module.css'
export default function MobileTweet(){
    let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"))
  const [tweet, setTweet] = useState("");
 // const [show, setShow] = useState(false );
  const [image, setImage] = useState(null);
  const inputRef = useRef(null)
  // let allPost = JSON.parse(localStorage.getItem("allPost")) || []
  // const [tweetPost,setTweetPost] = useRecoilState(UserPost)
  const setUserPostData = useSetRecoilState(Post)
  // setUserPostData(allPost)
  function handleTweet(e) {
    setTweet(e.target.value);
  }

  function handleImage(){
    inputRef.current.click()
  }
  const onImageChange = (event) => {
    if (event.target.files[0] ) {
      console.log(event.target.files[0])
      setImage(URL.createObjectURL(event.target.files[0]));  //api
    }
   }
   
  function handleTweetPost() {
    let tweetText =  {id : Math.floor(Math.random()* 1000),UserName :matchedUserDetails.UserName, Name : matchedUserDetails.Name,tweetText :tweet , tweetPic : image }
    let allPostData = localStorage.allPost?.length > 0 ? JSON.parse(localStorage.getItem("allPost")) : []
   
   allPostData = [tweetText , ...allPostData]
    // console.log(allPostData ,"iam from mid tweet")
    localStorage.setItem("allPost" , JSON.stringify(allPostData))
    setUserPostData(allPostData)
 

    // setTweetPost([tweetText,...tweetPost])
    setTweet("")
    setImage("")

  }

  function handleShow() {
    //setShow(true);
  }

    return(
        <>
        <div className={style.header}>
        <Link to='/home'>
        <BsArrowLeft  />
        </Link>
        <CustomButton onClick={handleTweetPost} className={style.tweetPushbtn} buttonText="Tweet" />
        </div>
        <div className={ style.inputContainer  } >
        <div onClick={handleShow} className={style.subContainer}>
          <RxAvatar className={style.avatar} />
          <div className={style.input}>
          
              <CustomButton
                className={style.evryOnebtn}
                buttonText="Everyone"
                icon2={<sup>v</sup>}/>
           
            <TextArea
              placeholder="What's Happening?"
              value={tweet}
              onChange={handleTweet}
              className={style.inputBox}
            />
          </div>
        </div>
        {image ? 
        <img className={style.inputBoxImage} src={image} alt="uploadImage" width="200px" /> : ""
        }


          <span className={style.evryOnebtnEartch}>
            <IoEarthSharp />
            Everyone can reply
          </span>
      
        <div className={style.iconBtnWrapper}>
          <div className={style.iconBtn}>
            <TfiGallery  onClick={handleImage} className={style.iconss} />
            <input  hidden ref={inputRef}  type="file" onChange={onImageChange} className="filetype" />
            <AiOutlineFileGif className={style.iconss} />
            <MdOutlinePoll className={style.iconss} />
            <TbCalendarStats className={style.iconss} />
            <TfiLocationPin className={style.iconss} />
          </div>
       
        </div>

      </div>
        </>
    )
}