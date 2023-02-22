import LeftSection from "../../Section/LeftSection/LeftSection";
import MidSection from "../../Section/MiddleSection/MiddleSection";
import RightSection from "../../Section/RightSection/RightSection";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginState } from "../../RecoilState/LoginState/LoginState";
import style from "./Home.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineBookmark, HiOutlineUser } from "react-icons/hi";
import { FaTwitterSquare } from "react-icons/fa";
//import { BiMessageRoundedDetail } from "react-icons/bi";
import { RiFileList2Line } from "react-icons/ri";
import { GrUserNew } from "react-icons/gr";
import { AiOutlineDown } from "react-icons/ai";
//import { ImHome2 } from "react-icons/im";
//import { BsSearch } from "react-icons/bs";
import HomeMobileFooter from "../../Component/HomeMobileFooter/HomeMobileFooter";

export default function Home() {
  const [islogin, setIsLogin] = useRecoilState(LoginState);
  const matchedUserData = JSON.parse(localStorage.getItem("matchedUser"));
  const particularTweet = JSON.parse(localStorage.getItem("particularTweet"));

  const navigate = useNavigate();
  useEffect(() => {
    if (islogin === false) {
      navigate("/");
    }
  }, );

  const [show, setShow] = useState(false);
  const [midTweetClass, setMidTweetClass] = useState(false);

  function openLeftSec() {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  const menu = [
    {
      text: (
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/profile/${matchedUserData.Name}`}
        >
          Profile
        </Link>
      ),
      icon: <HiOutlineUser className={style.icon} />,
    },
    {
      text: "Twitter Blue",
      icon: <FaTwitterSquare className={style.icon} />,
    },

    {
      text: "Bookmarks",
      icon: <HiOutlineBookmark className={style.icon} />,
    },
    {
      text: "List",
      icon: <RiFileList2Line className={style.icon} />,
    },
    {
      text: "Twitter Circle",
      icon: <GrUserNew className={style.icon} />,
    },
  ];

 

  function handleLogout() {
    setIsLogin(false);
    navigate("/");
  }
  function handleClassName() {
    setMidTweetClass(true);
    navigate("/compose/tweet");
  }
  return (
    <>
      {islogin && (
        <div className={style.main}>
          {
            // mobile left drawer menu
          }
          {show ? (
            <div className={style.mobileLeftSec}>
              <div className={style.mobileLeftSecCont}>
                <div className={style.mobileAccount}>
                  {particularTweet.size > 0 ? (
                    <h2 style={{ fontSize: "2rem" }}>Home </h2>
                  ) : (
                    <h2 style={{ fontSize: "2rem" }}>Account Info </h2>
                  )}
                  <h2 onClick={openLeftSec}>
                    <RxCross1 className={style.crossIcon} />
                  </h2>
                </div>
                <div className={style.mobileArray}>
                  <div className={style.userName}>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/profile/${matchedUserData.Name}`}
                    >
                      {" "}
                      <img
                        className={style.profilePic}
                        src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
                        alt="profilePic"
                      />
                    </Link>

                    <b style={{ fontSize: "2rem", width: "12rem" }}>
                      {matchedUserData.Name}
                    </b>
                    <span style={{ fontSize: "1.5rem", width: "12rem" }}>
                      {matchedUserData.UserName}
                    </span>
                  </div>
                  <IoIosAddCircleOutline className={style.addIcon} />
                </div>
                <div className={style.follow}>
                  <h4 style={{ fontSize: "1.4rem" }}>Following</h4>
                  <h4 style={{ fontSize: "1.4rem" }}>Follower</h4>
                </div>
                {menu.map((element) => (
                  <div key={element.text} className={style.textWrapper}>
                    <span> {element.icon}</span>
                    <span className={style.text}>{element.text}</span>
                  </div>
                ))}
                <div>
                  <div className={style.footer}>
                    <h2>Creater Studio</h2>
                    <AiOutlineDown />
                  </div>
                  <div className={style.footer}>
                    <h2>Professional Tools</h2>
                    <AiOutlineDown />
                  </div>
                  <div onClick={handleLogout} className={style.logoutBox}>
                    <span className={style.logout}>Log-Out</span>
                    <span className={style.logoutUser}>
                      {matchedUserData.Name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className={style.left}>
            <LeftSection />
          </div>
          <MidSection
            midTweetClass={midTweetClass}
            show={show}
            openLeftSec={openLeftSec}
          />
          <div className={style.right}>
            <RightSection />
          </div>
          <div className={style.mobileTweetButton}>
            <img
              onClick={handleClassName}
              src="https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/1f/22/9a/1f229a4a-c4bb-e868-3b91-de9c55f5e4b5/source/512x512bb.jpg"
              className={style.tweetButton}
              alt="featherPen"
            />
          </div>
          <div className={style.mobileFooter}>
          <HomeMobileFooter />
          </div>
        </div>
      )}
    </>
  );
}
