import React from 'react';


const HomeProducts = ({ products }) => {
    // const { category, id, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock } = products;
    console.log('hi ')





    return (
        <div className=''>
            {/* buttons and other somting */}
            <div className='flex justify-between'>
                <span className='font-semibold text-fuchsia-100'>Products</span>
                <button onClick={() =>
                    console.log('show more clicked')
                }>Show More Products</button>
            </div>


            {/* product cards and  */}
            <div className='lg:flex lg:flex-row lg:gap-x-4 lg:my-4 lg:overflow-x-auto w-full flex flex-col items-center my-2'>
                {
                    products.map((product) =>
                        <div key={product.id} className="card-body bg-slate-100 lg:w-32 lg:h-40 w-36 h-44 rounded-md my-2 shadow-lg lg:my-4 text-black items-center justify-center">
                            <div className="image">
                                image
                            </div>
                            <div className="title">
                                <span>{product.name}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HomeProducts;