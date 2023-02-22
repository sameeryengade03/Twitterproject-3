
export default function CustomButton({buttonText , icon ,icon2 ,className ,onClick}) {
    return(
        <>
        <button onClick={onClick} className={className} >{icon}{buttonText}{icon2}</button>
        </>
    )
}