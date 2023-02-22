import React from 'react'
import Follow from '../../Component/Right Section Follow/Follow'
import Footerr from '../../Component/RightFooter/RightFooter'
import SearchBar from '../../Component/SearchBar/SearchBar'
import Trends from '../../Component/Trends/Trends'
import style from './RightSection.module.css'
export default function RightSection() {
    return(
        <>
        <div className={style.main}>
       <SearchBar />
       <div className={style.Follow}>
       <Trends />
       <Follow />
       <Footerr />
       </div>
        </div>
        </>
    )
}