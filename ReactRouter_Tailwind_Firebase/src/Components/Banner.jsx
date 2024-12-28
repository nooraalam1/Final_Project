import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <div >
            <Carousel >
                <div >
                    <img src="../../public/food_web_banner_29.jpg" />

                </div>
                <div className="">
                    <img src="../../public/food_web_banner_29.jpg" />

                </div>
                <div>
                    <img src="../../public/food_web_banner_29.jpg" />

                </div>


            </Carousel>
            <div className="flex justify-center items-center">
                <div className="my-4">
                    <h2 className="text-yellow-400">---From 11.00AM To 10.00PM---</h2>
                    <h2 className="text-center text-3xl border-t-4 border-b-4">Order Online</h2>
                </div>
            </div>
        </div >
    );
};

export default Banner;