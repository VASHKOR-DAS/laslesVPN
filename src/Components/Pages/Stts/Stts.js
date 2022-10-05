import React from 'react';

const Stts = () => {
    return (
        <>

            <div className="container stats shadow-2xl shadow-gray-200">

                <div className="stat flex justify-center my-8">
                    <div className="stat-figure text-[#F53838] border border-[#FFECEC] rounded-full bg-[#FFECEC] p-2 md:p-3">

                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>

                    </div>

                    <div>
                        <div className="font-extrabold md:prose-lg lg:prose-xl">90+</div>
                        <div className="stat-desc font-semibold md:prose-sm lg:prose-base">Users</div>
                    </div>
                </div>

                <div className="stat flex justify-center my-8">
                    <div className="stat-figure text-[#F53838] border border-[#FFECEC] rounded-full bg-[#FFECEC] p-2 md:p-3">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    </div>

                    <div>
                        <div className="font-extrabold md:prose-lg lg:prose-xl">30+</div>
                        <div className="stat-desc font-semibold md:prose-sm lg:prose-base">Locations</div>
                    </div>
                </div>

                <div className="stat flex justify-center my-8">
                    <div className="stat-figure text-[#F53838] border border-[#FFECEC] rounded-full bg-[#FFECEC] p-2 md:p-3">

                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" /></svg>

                    </div>

                    <div className=''>
                        <div className="font-extrabold md:prose-lg lg:prose-xl">50+</div>
                        <div className="stat-desc font-semibold md:prose-sm lg:prose-base">Servers</div>
                    </div>
                </div>

            </div>


        </>
    );
};

export default Stts;