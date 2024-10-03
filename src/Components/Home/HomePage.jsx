// import React from 'react';
// import toast, { Toaster } from 'react-hot-toast';

import { useEffect, useState } from "react";
import HomeShops from "../Common Pages/HomeShops";
import Home_Slides from "../Slides/Home_Slides";
import HomeProducts from "../Common Pages/HomeShops";

const HomePage = () => {

	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('products.json').then(res => res.json()).then(data => {
			setProducts(data)
		});
	}, [setProducts]);
	// console.log("after useEffect load ", products);

	return (
		<>
			<Home_Slides />
			<hr className="my-3" />

			{/* Home Product section */}
			<HomeProducts products={products} key={products.id}></HomeProducts>
			{/* <hr className="my-3" /> */}

			{/* Home page section */}
			<HomeShops products={products}  />
			<br />


		</>
	);
};

export default HomePage;
