import React from "react";

const Card = () => {
	return (
		<div className="col-2 m-2">
			<div className="card shadow-sm">
				<img
					src="https://www.thinkarcoa.com/wp-content/uploads/1mX_pxODIHNKDgLJ2yMH0vA.jpeg"
					className="card-img-top"
					alt="..."
				/>

				<div className="card-body">
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>

					<div class="d-flex justify-content-center">
						<button type="button" class=" btn btn-warning ">
							Find out more!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
