
const portfolio = () => {
    return (
        <div className="pt-[100px] relative sm:px-[150px] min-h-[70vh] sm:min-h-[90vh] flex flex-col px-[10px]" id="portfolio">
            <div className="">
                <h1 className="text-[40px] sm:text-[60px] font-[700] leading-[40px] sm:leading-[60px]">PORTFOLIO</h1>
            </div>
            <div className="flex flex-col items-center sm:grid grid-cols-2 mt-[40px] sm:max-w-[80%] gap-[20px] sm:gap-0">
                <div className="flex sm:flex-col items-center  sm:mb-[40px]">
                    <div className="square bg-cream w-[150px] sm:w-[300px] h-[150px] sm:h-[300px]"></div>
                    <div className="max-w-[50%] sm:max-w-full flex flex-col ml-[20px] sm:items-center">
                        <h1 className="text-[17px] sm:text-[24px] font-[700] my-[10px]">Lorem, ipsum dolor.</h1>
                        <p className=" sm:max-w-[400px] text-[12px] sm:text-[14px] sm:text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A possimus assumenda sunt dicta officiis nostrum molestiae? Voluptates, sapiente.</p>
                    </div>
                </div>
                <div className="flex sm:flex-col items-center sm:mb-[40px]">
                    <div className="max-w-[50%] sm:max-w-full flex flex-col mr-[20px] sm:items-center text-right sm:text-center">
                        <h1 className="text-[17px] sm:text-[24px] font-[700]">Lorem, ipsum dolor.</h1>
                        <p className=" sm:max-w-[400px] text-[12px] sm:text-[14px] sm:text-center my-[10px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A possimus assumenda sunt dicta officiis nostrum molestiae? Voluptates, sapiente.</p>
                    </div>
                    <div className="square bg-cream w-[150px] sm:w-[300px] h-[150px] sm:h-[300px]"></div>
                </div>
                <div className="flex sm:flex-col items-center">
                    <div className="square bg-cream w-[150px] sm:w-[300px] h-[150px] sm:h-[300px]"></div>
                    <div className="max-w-[50%] sm:max-w-full flex flex-col ml-[20px] sm:items-center">
                        <h1 className="text-[17px] sm:text-[24px] font-[700] my-[10px]">Lorem, ipsum dolor.</h1>
                        <p className=" sm:max-w-[400px] text-[12px] sm:text-[14px] sm:text-center ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A possimus assumenda sunt dicta officiis nostrum molestiae? Voluptates, sapiente.</p>
                    </div>
                </div>
                <div className="flex sm:flex-col items-center">
                    <div className="max-w-[50%] sm:max-w-full flex flex-col mr-[20px] sm:items-center  text-right sm:text-center">
                        <h1 className="text-[17px] sm:text-[24px] font-[700] ">Lorem, ipsum dolor.</h1>
                        <p className=" sm:max-w-[400px] text-[12px] sm:text-[14px] sm:text-center my-[10px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A possimus assumenda sunt dicta officiis nostrum molestiae? Voluptates, sapiente.</p>
                    </div>
                    <div className="square bg-cream w-[150px] sm:w-[300px] h-[150px] sm:h-[300px]"></div>
                </div>
            </div>
            <img src="/vite.svg" alt="" className="absolute right-[-60%] sm:right-[-45%] w-[150vh] bottom-[10%] sm:top-[25%] z-[-1] opacity-30" />
        </div>
    )
}

export default portfolio