import React from 'react';
import Illustration2 from '../../../images/Illustration 2.png'

const Provide = () => {
    return (
        <div>
            <div className="grid justify-items-center items-center lg:grid-cols-2 md:grid-cols-2 gap-10 md:gap-20 lg:gap-15">


                <div className='w-80 md:w-96 lg:w-full'>
                    <img src={Illustration2} alt='logo' />
                </div>


                <div className='prose md:prose-sm lg:prose-lg'>

                    <h3 className="font-bold grid place-content-center md:block">We Provide Many
                        Features You Can Use</h3>

                    <p className="grid place-content-justify md:block">You can explore the features that we provide with fun and have their own functions each feature.</p>

                    <div className='
                    grid place-content-center md:block'>

                        <li className='flex items-center'>
                            <svg className="w-5 h-5 mr-2 fill-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <div>
                                Powerfull online protection.
                            </div>
                        </li>

                        <li className='flex items-center'>
                            <svg className="w-5 h-5 mr-2 fill-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <div>
                                Internet without borders.
                            </div>
                        </li>

                        <li className='flex items-center'>
                            <svg className="w-5 h-5 mr-2 fill-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <div>
                                Supercharged VPN
                            </div>
                        </li>

                        <li className='flex items-center'>
                            <svg className="w-5 h-5 mr-2 fill-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <div>
                                No specific time limits.
                            </div>
                        </li>


                    </div>

                </div>




            </div>
        </div>
    );
};

export default Provide;