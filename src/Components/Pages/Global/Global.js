import React from 'react';
import globalImg from '../../../images/Huge Global.svg'
import sponsored from '../../../images/Sponsored.svg'

const Global = () => {
    return (
        <div>
            <article className='text-center prose-sm md:prose-base lg:prose-lg max-w-none'>
                <h3 className="font-bold">Huge Global Network
                    of Fast VPN</h3>
                <p>
                    See <span className='font-bold'>LaslesVPN</span> everywhere to make it easier for you when you move
                    locations.
                </p>
            </article>

            <br /><br /><br /><br />
            <img className='block mx-auto' src={globalImg} alt="" srcSet="" />
            <br />
            <img className='block mx-auto' src={sponsored} alt="" srcSet="" />

        </div>
    );
};

export default Global;