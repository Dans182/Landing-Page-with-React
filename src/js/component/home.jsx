import React from "react";
import NavBar2 from "../component/NavBar2.jsx";
import Jumbotron from "../component/Jumbotron.jsx";
import Card from "./cards.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>

			<NavBar2 />
			<Jumbotron />
      <div className="row justify-content-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
	);
};

export default Home;
