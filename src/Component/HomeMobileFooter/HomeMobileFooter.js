import { AiOutlineMail } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import { GrNotification } from "react-icons/gr"
import { ImHome2 } from "react-icons/im"
import { Link } from "react-router-dom"
import style from './HomeFoot.module.css'

export default function HomeMobileFooter(){
    const footer = [
        {
          icon : <Link to='/home'> <ImHome2  className={style.icons} /> </Link>
        },
        {
          icon : <BsSearch className={style.icons} />
        },
        {
          icon : <GrNotification className={style.icons} />
        },
        {
          icon : <AiOutlineMail className={style.icons} />
        },
    
      ]
    return(
        <>
        <div className={style.mobileFooter}>
          {footer.map(x=><div>{x.icon}</div>)}
          </div>
        </>
    )
}