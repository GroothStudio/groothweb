export default function Part({nama1,nama2, children}){
    return(
    <div className={`flex min-h-fit flex-col px-14 max-md:px-5 `}>
        <div className="flex flex-row h-[16vh] max-md:h-[9vh] font-light items-center max-md:items-start">
            <h1 className="text-[3vw] text-white max-sm:text-[8vw] max-md:text-[6vw]">{nama1}</h1>
            <p className="text-[1.5vw] text-white/60 mt-[1.5vw] ml-4 max-sm:mt-[5vw] max-sm:text-[3.8vw] max-md:mt-[4vw] max-md:text-[2.8vw]">{nama2}</p>
        </div>
        <div>{children}</div>
    </div>)
}