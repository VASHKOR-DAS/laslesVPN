import React from 'react';
import './SpecialFeatures.css'

const SpecialFeatures = () => {
    return (

        <div className='background'>

            <div className='flex flex-col md:flex-row
            bg-white
            items-center 
            justify-center
            md:justify-between
            border
            px-0
            md:px-10
            mx-6
            md:mx-12
            lg:mx-28
            pb-14
            md:pb-0'>

                <article className='text-center md:text-left prose-base md:prose-base lg:prose-lg max-w-none'>
                    <h2 className="font-bold">
                        Subscribe Now for
                        <br />
                        Get Special Features!
                    </h2>
                    <p className='-translate-y-4'>
                        Let's subscribe with us and find the fun.
                    </p>
                </article>
                <button className="
                    px-7 md:px-10 lg:px-12
                    normal-case font-bold 
                    btn btn-md lg:btn-lg
                    btn-secondary bg-[#F53838] 
                    shadow-xl 
                    shadow-[rgba(245,56,56,0.3)]">Subscribe Now</button>
            </div>

        </div>
    );
};

export default SpecialFeatures;