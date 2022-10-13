import React from 'react';



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./Slide.ss";
import "./Slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";










const Slider = () => {
    return (
        <>

            {/* <main className="flex gap-10">

                <section className='p-5 w-96 border-2 border-solid rounded-xl'>

                    <div>
                        <div className='flex justify-between'>
                            <figure className='flex gap-3'>
                                <img className='block h-12 w-12 rounded-full' src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" alt="" />

                                <div>
                                    <h4 className='font-bold'>Viezh Robert</h4>
                                    <p className='text-xs text-gray-600'>Warsaw, Poland</p>
                                </div>
                            </figure>

                            <div className="items-center rating rating-sm">
                                <p className='pr-2 font-semibold'>4.5</p>
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>

                    <article className='pt-2'>
                        “Wow... I am very happy to use this VPN, it
                        turned out to be more than my expectations
                        and so far there have been no problems.
                        LaslesVPN always the best."
                    </article>
                </section>

                <section className='p-5 w-96 border-2 border-solid border-red-600 rounded-xl'>

                    <div>
                        <div className='flex justify-between'>
                            <figure className='flex gap-3'>
                                <img className='block h-12 w-12 rounded-full' src="https://i0.wp.com/morganoverholt.com/wp-content/uploads/2021/05/Upwork-profile-examples-4.jpg" alt="" />

                                <div>
                                    <h4 className='font-bold'>Yessica Christy</h4>
                                    <p className='text-xs text-gray-600'>Shanxi, China</p>
                                </div>
                            </figure>

                            <div className="items-center rating rating-sm">
                                <p className='pr-2 font-semibold'>4.5</p>
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>

                    <article className='pt-2'>
                        “I like it because I like to travel far and still can
                        connect with high speed."
                    </article>
                </section>

                <section className='p-5 w-96 border-2 border-solid border-red-600 rounded-xl'>

                    <div>
                        <div className='flex justify-between'>
                            <figure className='flex gap-3'>
                                <img className='block h-12 w-12 rounded-full' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />

                                <div>
                                    <h4 className='font-bold'>Kleist Christy</h4>
                                    <p className='text-xs text-gray-600'>Warsaw, Poland</p>
                                </div>
                            </figure>

                            <div className="items-center rating rating-sm">
                                <p className='pr-2 font-semibold'>4.5</p>
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>

                    <article className='pt-2'>
                        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat aut at, dicta voluptate repellat."
                    </article>
                </section>

            </main> */}

            <Swiper

                slidesPerView={1}
                spaceBetween={50}
                


                breakpoints={{
                    
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                }}

                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <section className='p-5 h-48 w-[350px] border-2 border-solid rounded-xl'>

                        <div>
                            <div className='flex justify-between'>
                                <figure className='flex gap-3'>
                                    <img className='block h-12 w-12 rounded-full' src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" alt="" />

                                    <div>
                                        <h4 className='font-bold'>Viezh Robert</h4>
                                        <p className='text-xs text-gray-600'>Warsaw, Poland</p>
                                    </div>
                                </figure>

                                <div className="items-center rating rating-sm">
                                    <p className='pr-2 font-semibold'>4.5</p>
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>

                        <article className='pt-2'>
                            “Wow... I am very happy to use this VPN, it
                            turned out to be more than my expectations
                            and so far there have been no problems.
                            LaslesVPN always the best."
                        </article>
                    </section>
                </SwiperSlide>


                <SwiperSlide>
                    <section className='p-5 h-48 w-[350px] border-2 border-solid border-red-600 rounded-xl'>

                        <div>
                            <div className='flex justify-between'>
                                <figure className='flex gap-3'>
                                    <img className='block h-12 w-12 rounded-full' src="https://i0.wp.com/morganoverholt.com/wp-content/uploads/2021/05/Upwork-profile-examples-4.jpg" alt="" />

                                    <div>
                                        <h4 className='font-bold'>Yessing Christy</h4>
                                        <p className='text-xs text-gray-600'>Shanxi, China</p>
                                    </div>
                                </figure>

                                <div className="items-center rating rating-sm">
                                    <p className='pr-2 font-semibold'>4.5</p>
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>

                        <article className='pt-2'>
                            “I like it because I like to travel far and still can
                            connect with high speed."
                        </article>
                    </section>
                </SwiperSlide>


                <SwiperSlide>
                    <section className='p-5 h-48 w-[350px] border-2 border-solid border-red-600 rounded-xl'>

                        <div>
                            <div className='flex justify-between'>
                                <figure className='flex gap-3'>
                                    <img className='block h-12 w-12 rounded-full' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />

                                    <div>
                                        <h4 className='font-bold'>Kleist Christy</h4>
                                        <p className='text-xs text-gray-600'>Warsaw, Poland</p>
                                    </div>
                                </figure>

                                <div className="items-center rating rating-sm">
                                    <p className='pr-2 font-semibold'>4.5</p>
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>

                        <article className='pt-2'>
                            “Lorem ipsum dolor sit amen consectetur adiposity elite. Ipsum fugit aut at, dicta voluptuary repellant."
                        </article>
                    </section>
                </SwiperSlide>


                <SwiperSlide>
                    <section className='p-5 h-48 w-[350px] border-2 border-solid border-red-600 rounded-xl'>

                        <div>
                            <div className='flex justify-between'>
                                <figure className='flex gap-3'>
                                    <img className='block h-12 w-12 rounded-full' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />

                                    <div>
                                        <h4 className='font-bold'>Kleist Christy</h4>
                                        <p className='text-xs text-gray-600'>Warsaw, Poland</p>
                                    </div>
                                </figure>

                                <div className="items-center rating rating-sm">
                                    <p className='pr-2 font-semibold'>4.5</p>
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>

                        <article className='pt-2'>
                            “Lorem ipsum dolor sit amen consectetur adiposity elite. Ipsum fugit aut at, dicta voluptuary repellant."
                        </article>
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <section className='p-5 h-48 w-[350px] border-2 border-solid border-red-600 rounded-xl'>

                        <div>
                            <div className='flex justify-between'>
                                <figure className='flex gap-3'>
                                    <img className='block h-12 w-12 rounded-full' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />

                                    <div>
                                        <h4 className='font-bold'>Kleist Christy</h4>
                                        <p className='text-xs text-gray-600'>Warsaw, Poland</p>
                                    </div>
                                </figure>

                                <div className="items-center rating rating-sm">
                                    <p className='pr-2 font-semibold'>4.5</p>
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>

                        <article className='pt-2'>
                            “Lorem ipsum dolor sit amen consectetur adiposity elite. Ipsum fugit aut at, dicta voluptuary repellant."
                        </article>
                    </section>
                </SwiperSlide>


            </Swiper>


        </>
    );
};

export default Slider;