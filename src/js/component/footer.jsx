import React from "react";

const Footer = () => {
	let symbol = <i className="fa-solid fa-copyright"></i>;
	return (
		<div className="bg-dark p-5">
			<p className="text-light text-center">
				Copyright {symbol} Your Website 2022
			</p>
		</div>
	);
};

export default Footer;
