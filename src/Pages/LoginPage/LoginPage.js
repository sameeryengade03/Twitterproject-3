import { useNavigate } from "react-router-dom"


export default function LoginPage() {
    const navigate = useNavigate()
    setTimeout(()=>
    navigate('/login'),1
    )
    return(
        <>
    
        </>
    )
}