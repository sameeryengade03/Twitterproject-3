import * as React from 'react';
import Popover from '@mui/material/Popover';
//import {RxAvatar} from 'react-icons/rx'
import style from './UserPop.module.css'
//import { useRecoilState } from 'recoil';
//import { LoginState } from '../../RecoilState/LoginState/LoginState';
import { useNavigate } from 'react-router-dom';
import { UserPost } from "../../RecoilState/myTweetPost/UserPost";
import { useSetRecoilState } from "recoil";
export default function LogOutPopOver() {
  const removeAllUserPost = useSetRecoilState(UserPost) // remode post of particuylar usewer
  let matchedUserDetails = JSON.parse(localStorage.getItem("matchedUser"))
  // console.log(matchedUserDetails)
 // const [isLogin ,setIsLogin] =useRecoilState(LoginState)
  const navigate = useNavigate()

  function handleLogOut() {
   // setIsLogin(false)
    navigate('/')
    removeAllUserPost([])

  }
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
   

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <div className={style.button} onClick={handleClick}>
        <div className={style.wrap} >
          <div>
          <img
              className={style.userProfle}
              src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
              alt="profilePic"
            />
          </div>
          <div className={style.user }>
          <span className={style.name }>{matchedUserDetails.Name}</span><br/>
          <span className={style.userName }>{matchedUserDetails.UserName}</span>
          </div>
          <h3>...</h3>
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{
          style: {
            borderRadius: 20,
            backgroundColor:"white",
            borderColor:"white"
          },
        }}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 540, left: 398 }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
       <div className={style.content} >
       
         <div className={style.option} >Add Existing Account</div>
         
         <div className={style.option} onClick={handleLogOut}>Log Out {matchedUserDetails.Name}</div>
        
       </div>
      </Popover>
    </div>
  );
}
