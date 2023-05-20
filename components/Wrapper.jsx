export default function Wrapper({children, className}){
    
    return(
        <div className={`w-full max-x-[1280px] px-5 md:px-10 mx-auto ${className || ""}`}>{children}</div>
    )
}