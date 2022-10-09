import React from 'react';
import FreePlan from '../../../images/Free.png'
import PremiumPlan from '../../../images/Premium.png'
import StandardPlan from '../../../images/Standard.png'


const Card = () => {
    return (
        <>

            <article className='text-center prose-sm md:prose-base lg:prose-lg max-w-none'>
                <h3 className="font-bold">Choose Your Plan</h3>
                <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            </article>

            <br />
            <br />


            {/* Card Section Start */}

            <div className='flex flex-wrap text-center justify-center gap-6 lg:gap-10'>


                {/* -----------Card 1 start----------- */}
                <div className='border-2 border-current-500 rounded-lg px-16 
                flex justify-between flex-col pb-10 
                '>

                    <article className='prose-sm md:prose-base'>

                        <img className='w-32 block mx-auto' src={FreePlan} alt="logo" srcSet="" />

                        <h4 className='font-bold pb-5 pt-6'>Free Plan</h4>

                        <li className='flex'>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-4 fill-green-600">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>

                            Unlimited Bandwidth
                        </li>

                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-4 fill-green-600">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>

                            Encrypted Connection
                        </li>

                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-4 fill-green-600">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>

                            No Traffic Logs
                        </li>

                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-4 fill-green-600">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>

                            Works on All Devices
                        </li>

                    </article>


                    <div className="prose-sm md:prose-base order-last mt-6">
                        <h3 className=' font-bold pb-4'>Free</h3>
                        <a href='/' className="
                            px-16
                            py-2
                            text-sm
                            no-underline
                            font-bold
                            border-[3px]
                            text-[#F53835] 
                            hover:bg-orange-600
                            hover:border-orange-600
                            focus:ring
                            focus:ring-orange-300
                            btn-outline rounded-3xl 
                            normal-case">Select
                        </a>
                    </div>

                </div>
                {/* -----------Card 1 end----------- */}


                {/* -----------Card 2 start----------- */}
                <div className='border-2 border-current-500 rounded-lg px-16 
                flex justify-between flex-col pb-10
                '>

                    <article className='prose-sm md:prose-base'>

                        <img className='w-32 block mx-auto' src={StandardPlan} alt="logo" srcSet="" />

                        <h4 className='font-bold pb-5 pt-6'>Standard Plan</h4>


                        <li className='flex'>

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-4 fill-green-600">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>


                            <div>

                                Unlimited Bandwidth
                            </div>

                        </li>

                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-4 fill-green-600">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>

                            Encrypted Connection
                        </li>

                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-4 fill-green-600">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>

                            No Traffic Logs
                        </li>

                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-4 fill-green-600">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>

                            Works on All Devices
                        </li>

                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-4 fill-green-600">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>

                            Connect Anywhere
                        </li>


                    </article>


                    <div className="prose-sm md:prose-base order-last mt-6">
                        <h3 className='font-bold pb-4'>
                            <span className='font-extrabold'>&#36;</span>9 <span className='text-gray-500 font-semibold'>/ mo</span>
                        </h3>
                        <a href='/' className="
                            px-16
                            py-2
                            text-sm
                            no-underline
                            font-bold
                            border-[3px]
                            text-[#F53835] 
                            hover:bg-orange-600
                            hover:border-orange-600
                            focus:ring
                            focus:ring-orange-300
                            btn-outline rounded-3xl 
                            normal-case">Select
                        </a>
                    </div>

                </div>
                {/* -----------Card 2 end----------- */}


                {/* -----------Card 3 start----------- */}
                <div className='border-[3px] border-[#F53835] rounded-lg px-16 
                flex justify-between flex-col pb-10
                '>

                    <article className='prose-sm md:prose-base'>

                        <img className='w-32 block mx-auto' src={PremiumPlan} alt="logo" srcSet="" />

                        <h4 className='font-bold pb-5 pt-6'>Premium Plan</h4>


                        <li className='flex'>

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-4 fill-green-600">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>


                            <div>

                                Unlimited Bandwidth
                            </div>

                        </li>

                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-4 fill-green-600">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>

                            Encrypted Connection
                        </li>

                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-4 fill-green-600">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>

                            No Traffic Logs
                        </li>

                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-4 fill-green-600">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>

                            Works on All Devices
                        </li>

                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-4 fill-green-600">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>

                            Connect Anywhere
                        </li>

                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-4 fill-green-600">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>

                            Get New Features
                        </li>

                    </article>


                    <div className="prose-sm md:prose-base order-last mt-6">
                        <h3 className='font-bold pb-4'>
                            <span className='font-extrabold'>&#36;</span>12 <span className='text-gray-500 font-semibold'>/ mo</span>
                        </h3>
                        <a href='/' className="
                            px-16
                            py-2
                            text-sm
                            no-underline
                            font-bold
                            border-[3px]
                            text-white
                            bg-[#F53835]
                            hover:bg-orange-600
                            hover:border-orange-600
                            focus:ring
                            focus:ring-orange-300
                            btn-outline rounded-3xl 
                            normal-case">Select
                        </a>
                    </div>

                </div>
                {/* -----------Card 3 end----------- */}


            </div>
        </>
    );
};

export default Card;