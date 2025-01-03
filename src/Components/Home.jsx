import Banner from "./Banner";
import FromOurMenu from "./FromOurMenu";
import Menu from "./Menu";
import Swipper from "./Swipper";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Swipper></Swipper>
            <Menu></Menu>
            <FromOurMenu></FromOurMenu>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;