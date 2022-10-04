import React from 'react';
import Illustration from '../../../images/Illustration 2.png'

const Header = () => {
    return (
        <div>


            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-16 justify-items-center content-evenly">


                <div>
                    <h4 className="font-bold">Want anything to be
                        <br />
                        easy with <span className='font-extrabold'>LaserVPN.</span>
                    </h4>
                    <p className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    <button className="px-16 normal-case font-bold btn btn-secondary shadow-lg shadow-pink-500/100">Get Started</button>
                </div>

                <div>
                    <img src={Illustration} alt='logo' />
                </div>
            </div>


        </div>
    );
};

export default Header;