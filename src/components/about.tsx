
const about = () => {
    return (
        <div className="pt-[100px] relative sm:px-[150px] min-h-[70vh] sm:min-h-[90vh] flex flex-col justify-center px-[10px]" id="about">
            <div className="flex items-center flex-col">
                <h1 className="text-[40px] sm:text-[60px] font-[700] leading-[40px] sm:leading-[60px]">ABOUT <span className="text-cream"> US</span></h1>
                <p className="text-[20px] text-center sm:text-[25px] font-[700] py-[15px]">Everything You Can Imagine is Real</p>
                <p className="text-[16px] sm:text-[18px] max-w-[90%] sm:max-w-[70%] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et minima totam ratione esse ut maxime architecto laborum necessitatibus aperiam iusto excepturi quo repudiandae, harum porro nesciunt aut quibusdam autem. Sed distinctio necessitatibus iste praesentium.</p>
            </div>
            <div className="flex items-center flex-col mt-[100px]">
                <p className="text-[25px] font-[700]">Our Service</p>
                <h1 className="text-[35px] sm:text-[50px] font-[700] leading-[40px] sm:leading-[60px] text-cream relative">
                    <span className="circle w-[25px] h-[25px] absolute top-[25%] left-[-15%] bg-blue" />
                    <span className="circle w-[25px] h-[25px] absolute top-[25%] right-[-15%] bg-cream" />
                    WHAT WE <span className="text-blue"> DO</span></h1>
                <p className="text-[16px] sm:text-[18px] max-w-[90%] sm:max-w-[70%] text-center mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi harum delectus aut voluptatibus maiores, voluptatem itaque quae dignissimos dolores soluta?</p>
            </div>
            <div className="mt-[40px] flex justify-center gap-[20px] flex-wrap">
                <div className="square bg-cream w-[150px] sm:w-[200px] h-[150px] sm:h-[200px]">

                </div>
                <div className="square bg-cream w-[150px] sm:w-[200px] h-[150px] sm:h-[200px]">

                </div>
                <div className="square bg-cream w-[150px] sm:w-[200px] h-[150px] sm:h-[200px]">

                </div>
            </div>

            <img src="/vite.svg" alt="" className="absolute left-[-60%] sm:left-[-25%] w-[100vh] top-[20%] sm:top-0 z-[-1] opacity-30" />
        </div>
    )
}

export default about