import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';

const Swipper = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-3/5">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000, // 3000ms = 3 seconds delay between slides
                        disableOnInteraction: false, // Auto slide continues even after interaction
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="../../public/Red Velvet Strawberry Cheesecake.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="../../public/Authentic Butter Chicken (Murgh Makhani) - Masala and Chai.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="../../public/Jack Daniels Burgers - Host The Toast.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="../../public/Muschel-Spaghetti in Tomatensugo.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="../../public/Vegan Greek Salad - Cupful of Kale.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="../../public/Oven-Baked Sweet and Sour Chicken Recipe.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="../../public/Delicious Christmas Stuffed Pork Roast.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="../../public/Mediterranean Salmon Salad.jpg" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Swipper;
