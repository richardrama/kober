
const home = () => {
    return (
        <div className="relative sm:px-[150px] min-h-[70vh] sm:min-h-[90vh] flex flex-col justify-center px-[10px]  " id="home">

            <h1 className="text-[40px] sm:text-[60px] font-[700] leading-[40px] sm:leading-[60px] sm:w-[80%] relative"> <span className="circle top-[-50px] left-[0px] sm:left-[-20px] bg-cream w-[40px] h-[40px]" />
                WE ARE CREATIVE <span className="text-cream">WEBSITE DESIGN</span> AGENCY <span className="circle bottom-[0px] sm:bottom-[15px] right-[50px] bg-blue w-[30px] h-[30px]" /></h1>
            <p className="sm:max-w-[70%] font-[500] mt-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime eligendi beatae maiores quod ex aperiam soluta dolorem adipisci veniam.</p>
            <div className="grid place-items-center mt-5 sm:mt-0">
                <a href="" className="sm:ml-[100px] border duration-200 border-cream hover:bg-white hover:text-cream bg-cream px-6 py-3 text-[20px] font-[600] text-white rounded-[10px]">
                    CONTACT US
                </a>
            </div>
            <img src="/vite.svg" alt="" className="absolute right-[-60%] sm:right-[-25%] w-[100vh] bottom-[-25%] sm:top-0 z-[-1] opacity-30" />
        </div>
    )
}

export default home