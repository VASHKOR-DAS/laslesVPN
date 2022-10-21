import React from 'react';
import './SpecialFeatures.css'

const SpecialFeatures = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap
        items-center 
        justify-center
        sm:justify-between
        border
        px-10
        mx-auto
        lg:mx-24
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
    );
};

export default SpecialFeatures;