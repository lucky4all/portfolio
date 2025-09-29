import "../assets/index.css";

export function Head() {
    return (
        <header className="flex justify-center mt-1">
            <div className="flex justify-around gap-4 items-center px-4 py-1 bg-black rounded-[15px] ring-1 ring-white sm:w[25vw] md:w-[30vw] lg:w-[35vw] xl:w-[25vw] 2xl:w-[25vw]">
                <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
                    <a href="/">
                        <svg width={20} height={20} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.9167 30H20.4167C19.2658 30 18.3333 29.1392 18.3333 28.0769V21.1538C18.3333 20.3038 17.5875 19.6154 16.6667 19.6154H13.3333C12.4125 19.6154 11.6667 20.3038 11.6667 21.1538V28.0769C11.6667 29.1392 10.7342 30 9.58333 30H2.08333C0.9325 30 0 29.1392 0 28.0769V13.3946C0 11.6262 0.878334 9.95539 2.3825 8.86154L14.2258 0.246923C14.68 -0.0823077 15.32 -0.0823077 15.7733 0.246923L27.6183 8.86154C29.1225 9.95539 30 11.6254 30 13.3931V28.0769C30 29.1392 29.0675 30 27.9167 30Z" fill="white" />
                        </svg>
                    </a>
                </div>
                <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
                    <a href="/test">
                        <svg width={20} height={20} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0013 0C10.482 0 6.81914 3.50348 6.81914 7.82609V9.13044C6.81914 13.453 10.482 16.9565 15.0013 16.9565C19.5206 16.9565 23.1835 13.453 23.1835 9.13044V7.82609C23.1835 3.50348 19.5206 0 15.0013 0ZM14.9987 20.8696C9.53569 20.8696 2.52628 23.6959 0.509366 26.2041C-0.737054 27.755 0.44947 30 2.49366 30H27.5063C29.5505 30 30.7371 27.755 29.4906 26.2041C27.4737 23.6972 20.4616 20.8696 14.9987 20.8696Z" fill="white" />
                        </svg>
                    </a>
                </div>
                <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
                    <a href="/portfolio">
                        <svg width={20} height={20} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.5 0H2.5C1.11929 0 0 1.11929 0 2.5V27.5C0 28.8807 1.11929 30 2.5 30H27.5C28.8807 30 30 28.8807 30 27.5V2.5C30 1.11929 28.8807 0 27.5 0ZM10 26.25H4.375V10H10V26.25ZM10 7.5H4.375V4.375H10V7.5ZM15.625 26.25H11.25V15H15.625V26.25ZM15.625 12.5H11.25V9.375H15.625V12.5ZM26.25 26.25H20.625V18.75H26.25V26.25ZM26.25 16.875H20.625V14.0625H26.25V16.875ZM26.25 12.5H20.625V9.375H26.25V12.5ZM26.25 7.5H20.625V4.375H26.25V7.5Z" fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
}