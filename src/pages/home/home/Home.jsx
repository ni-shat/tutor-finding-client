import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Navbar2 from "../../shared/navbar/Navbar2";
import Banneer from "../banner/Banneer";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>LookAround | Home</title>
            </Helmet>
            {/* <Navbar2></Navbar2> */}
            <Banner></Banner>
            {/* <Banneer></Banneer> */}
            <div className="mt-64">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quidem soluta ducimus, magnam ex repudiandae alias deserunt, tempore ipsa, dicta molestiae temporibus sunt reiciendis repellendus itaque numquam dolores tempora quaerat? Incidunt nulla, quis quam, sit cupiditate perspiciatis, mollitia fugit repudiandae cumque ratione porro officiis unde assumenda consectetur provident reprehenderit quidem deserunt ullam! Fugiat, odit distinctio. Minus consequatur quidem doloribus eligendi eos eius assumenda enim voluptatibus, dolor eaque nihil quibusdam animi illum, quia eum explicabo, aut ab cum modi rerum itaque obcaecati dolores. Cumque labore aut repellat esse aperiam. Expedita sed praesentium voluptatum asperiores tenetur. Cupiditate blanditiis veritatis maiores commodi aperiam!
            </div>
        </div>
    );
};

export default Home;