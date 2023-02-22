import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import CustomButton from '../../Atom/CustomButton/CustomButton';
//import {RxAvatar} from 'react-icons/rx'
import style from './TweetButton.module.css'
// import TextArea from '../../Atom/TextArea/TextArea';
// import { MdOutlinePoll } from "react-icons/md";
// import { TfiLocationPin } from "react-icons/tfi";
// import { TbCalendarStats } from "react-icons/tb";
// import { TfiGallery } from "react-icons/tfi";
// import { AiOutlineFileGif } from "react-icons/ai";
// import { IoEarthSharp } from "react-icons/io5";
// import { RxCross1 } from "react-icons/rx";
// import { useRecoilState } from "recoil";
// import { Post } from "../../RecoilState/Post/Post";
//import { UserPost } from "../../RecoilState/myTweetPost/UserPost";
import MiddleSecTweetBox from '../Middle Sec TweetBox/MiddleSecTweetBox';
export default function TweetButton() {
  const [open, setOpen] = useState(false);
  
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  
 

  return (
    <div>
      <CustomButton  onClick={handleClickOpen}
       buttonText="Tweet" className={style.leftSecTweetBtn}
      />
      <Dialog
      PaperProps={{
        style: {
          borderRadius: 20,
        },
      }}
        open={open}
        onClose={handleClose}
      >
     <MiddleSecTweetBox true={true} setOpen={setOpen}/>
      </Dialog>
    </div>
  );
}