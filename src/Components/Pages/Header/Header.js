import React from 'react';
import Illustration from '../../../images/Illustration 2.png'

const Header = () => {
    return (
        <div>


            <div className="grid justify-items-center lg:grid-cols-2 md:grid-cols-2 gap-20">


                <div className='prose lg:prose-xl lg:text-left md:text-left text-center'>

                    <h2 className="font-bold">Want anything to be easy with <span className='font-extrabold text-secondary'>LaserVPN.</span>
                    </h2>

                    <p className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    <button className="lg:px-16 px-7 lg:prose-lg normal-case font-bold btn btn-secondary shadow-lg shadow-pink-500/100">Get Started</button>
                </div>
                

                <div className=''>
                    <img src={Illustration} alt='logo' />
                </div>
            </div>


        </div>
    );
};

export default Header;