import React from "react";

const Card = () => {
	return (
		<div className="col-2">
			<div className="card">
				<img
					src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body text-center">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
