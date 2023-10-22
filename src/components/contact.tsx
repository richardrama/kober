
const contact = () => {
    return (
        <div className="my-[100px] relative sm:px-[150px] min-h-[50vh] sm:min-h-[90vh] flex flex-col sm:justify-center px-[10px]" id="contact">
            <div className="">
                <h1 className="text-[40px] text-center sm:text-[60px] font-[700] leading-[40px] sm:leading-[60px]">CONTACT <span className="text-cream">US</span></h1>
            </div>

            <div className="flex mt-[50px] flex-col sm:flex-row text-black relative">
                <div className="hidden sm:flex absolute right-[15%] top-[20%]  flex-col gap-[25px] p-[40px] bg-cream min-w-[35%]">
                    <h1 className="text-[24px] font-[700]">INFO</h1>
                    <div className="">
                        <p>kontolgaming@gmail.com</p>
                    </div>
                    <div className="">
                        <p>kontolgaming@gmail.com</p>
                    </div>
                    <div className="">
                        <p>kontolgaming@gmail.com</p>
                    </div>
                    <div className="">
                        <p>kontolgaming@gmail.com</p>
                    </div>
                    <div className="square w-[40px] h-[40px] absolute bg-black rounded-sm bottom-[-5%] left-[-5%]"></div>
                </div>
                <div className="sm:w-[70%] bg-[#D5A458] p-[40px] sm:min-h-[450px] ">
                    <p className="sm:max-w-[75%] text-[13px] sm:text-[16px] font-[600]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo ullam commodi, itaque quod asperiores.</p>

                    <form className="mt-[20px] gap-[20px] flex flex-col">
                        <div className="">
                            <input type="text" className="min-w-[50%] text-[14px] sm:text-[18px]" placeholder="Name" />
                        </div>
                        <div>
                            <input type="text" className="min-w-[50%] text-[14px] sm:text-[18px]" placeholder="Email" />
                        </div>
                        <div>
                            <input type="text" className="min-w-[50%] text-[14px] sm:text-[18px]" placeholder="Message" />
                        </div>
                        <div className="mt-[20px]">
                            <input type="submit" value="SEND" className="min-w-[50%] grid place-items-center bg-black text-[#D5A458] py-[10px] rounded-lg cursor-pointer" />
                        </div>
                    </form>
                </div>
                <div className="sm:hidden flex right-[15%] top-[20%]  flex-col gap-[10px] sm:gap-[25px] p-[40px] bg-cream min-w-[35%]">
                    <h1 className="text-[18px] sm:text-[24px] font-[700]">INFO</h1>
                    <div className="text-[14px] sm:text-[18px]">
                        <p>kontolgaming@gmail.com</p>
                    </div>
                    <div className="text-[14px] sm:text-[18px]">
                        <p>kontolgaming@gmail.com</p>
                    </div>
                    <div className="text-[14px] sm:text-[18px]">
                        <p>kontolgaming@gmail.com</p>
                    </div>
                </div>
                <div className="hidden sm:block w-[30%] bg-black "></div>
            </div>
        </div>
    )
}

export default contact