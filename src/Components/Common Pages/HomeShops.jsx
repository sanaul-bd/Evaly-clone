import React from 'react';

const HomeProducts = () => {

    const p = [
        {
            ShopName: "Mitali shop",
            ShopAddress: "Dhaka",
            shopNumber: 1,
            id: 1,
            name: 'shart',
            quantity: 1,
            color: "red",
        },
        {
            ShopName: "Sanjay shap",
            ShopAddress: "cumilla",
            shopNumber: 2,
            id: 2,
            name: 'pant',
            quantity: 3,
            color: "black",
        },
        {
            ShopName: "Mirza shap",
            ShopAddress: "Gazipur",
            shopNumber: 3,
            id: 3,
            name: 'panjabi',
            quantity: 3,
            color: "yellow",
        },
        {
            ShopName: "Mizan Fahion",
            ShopAddress: "Pollpbi",
            shopNumber: 4,
            id: 4,
            name: 'shart',
            quantity: 1,
            color: "red",
        },
        {
            ShopName: "Nannu Tanduri",
            ShopAddress: "Noakhali",
            shopNumber: 54,
            id: 5,
            name: 'pant',
            quantity: 3,
            color: "black",
        },
        {
            ShopName: "Billu machinary",
            ShopAddress: "jossore",
            shopNumber: 323,
            id: 6,
            name: 'panjabi',
            quantity: 3,
            color: "yellow",
        },
        {
            ShopName: "Tillu Garments",
            ShopAddress: "sylhet",
            shopNumber: 65665,
            id: 7,
            name: 'shart',
            quantity: 1,
            color: "red",
        },
        {
            ShopName: "Nimu Medical",
            ShopAddress: "Nimu",
            shopNumber: 22,
            id: 8,
            name: 'pant',
            quantity: 3,
            color: "black",
        },
        {
            ShopName: "Roni store",
            ShopAddress: "Khulna",
            shopNumber: 99,
            id: 9,
            name: 'panjabi',
            quantity: 3,
            color: "yellow",
        },
        {
            ShopName: "Kabita books",
            ShopAddress: "ranir bajar",
            shopNumber: 94,
            id: 10,
            name: 'shart',
            quantity: 1,
            color: "red",
        },
        {
            ShopName: "Titttu F.",
            ShopAddress: "Chadpur",
            shopNumber: 55,
            id: 11,
            name: 'pant',
            quantity: 3,
            color: "black",
        },
        {
            ShopName: "King restora",
            ShopAddress: "kandir par",
            shopNumber: 55,
            id: 12,
            name: 'panjabi',
            quantity: 3,
            color: "yellow",
        },
    ]
    const products =  p.slice(1,10)


    return (
        <div className=''>
            {/* buttons and other somting */}
            <div className='flex justify-between'>
                <span className='font-semibold text-fuchsia-100'>Shps</span>
                <button onClick={() => console.log('show more clicked')}>Show More Shop</button>
            </div>


            {/* product cards and  */}
            <div
                // onClick={}
                className='lg:flex lg:flex-row lg:gap-x-4 lg:my-4  lg:w-full flex flex-col items-center my-2 sm:grid md:grid sm:grid-cols-2 md:grid-cols-3 sm:flex-none md:flex-none md:ps-20'
            >
                {
                    products.map((product) =>
                        <div key={product.id} className="card-body bg-slate-100 lg:w-32 lg:h-40 w-36 h-44 rounded-md my-2 shadow-lg lg:my-4 text-black items-center justify-center">
                            <div className="image">
                                {product.ShopName}
                            </div>
                            <div className="title">
                                <span>{product.ShopAddress}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HomeProducts;