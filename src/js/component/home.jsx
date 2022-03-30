import React from "react";
import Jumbotron from "../component/Jumbotron.jsx";
import Card from "./cards.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
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
