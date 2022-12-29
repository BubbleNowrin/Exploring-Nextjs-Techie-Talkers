import React from 'react';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <blockquote className='text-3xl font-bold'>There are two ways of spreading light: to be the candle or the mirror that reflects it. <br />
                        <span className='text-xl italic'>- We believe in this quote by Edith Wharton -</span>
                    </blockquote>

                    <div className='max-w-xl mr-6'>
                        <h1 className="text-5xl font-bold">About Us!</h1>
                        <p className="py-6">Techie Talkers is a platform that is developed to provide its users with a friendly environment for exploring the technical world through our articles we value your time thats why we consider adhering to the topic. You can explore articles regarding software development, cloud service cost reduction strategies, common errors that occurred while development, best practices for project development, and System safety strategies.


                            Technology is the way that can make us smarter and our nation stronger, it can change your life up to that extent you never assumed if you have a good grasp on it.

                        </p>
                        <button className="btn btn-outline">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;