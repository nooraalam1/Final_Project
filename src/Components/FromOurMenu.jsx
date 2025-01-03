import React from 'react';

const FromOurMenu = () => {
    return (
        <div className='my-5'>

            <div
                className="hero min-h-screen bg-fixed"
                style={{
                    backgroundImage: "url(../../../public/33389707405_17b270fb60_o.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <h1 className=" ">From Our Menu</h1>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <div className='lg:flex' >
                            <img src="../../../public/33389707405_17b270fb60_o.jpg" alt="" srcset="" />

                            <div className="">
                                <button className="btn btn-primary">Get Started</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromOurMenu;