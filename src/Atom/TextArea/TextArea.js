export default function TextArea({placeholder,className,value,onChange}) {
    return(
        <>
        <textarea className={className} placeholder={placeholder } value={value} onChange={onChange}/>
        </>
    )
}