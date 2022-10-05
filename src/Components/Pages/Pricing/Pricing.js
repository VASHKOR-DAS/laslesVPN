import React from 'react';
import Card from '../Card/Card';

const Pricing = () => {
    return (
        <>

            <div className='grid justify-items-center'>
                <div class="prose prose-sm lg:prose-lg">
                    <div className='grid justify-items-center'>
                        <h3 className="font-bold">Choose Your Plan</h3>
                        <p className='text-center'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                    </div>
                </div>
            </div>

            <br />

            <Card></Card>

        </>

    );
};

export default Pricing;