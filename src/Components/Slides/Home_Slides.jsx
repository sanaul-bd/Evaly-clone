import React from 'react'
import image1 from '../../../public/images/1.jpg'
import image2 from '../../../public/images/2.jpg'
import image3 from '../../../public/images/3.jpg'
import image4 from '../../../public/images/4.jpg'

const Home_Slides = () => {
    return (
        <>
            {/* carusal */}
            <div className="lg:flex lg:my-4 lg:h-[75vh] w-full">
                <div className="carousel lg:w-4/5 my-3 rounded-lg">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src={image1}
                            className="w-full"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" 
                            className="btn btn-circle"
                            >
                                ❮
                            </a>
                            <a href="#slide2" className="btn btn-circle" >
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src={image2}
                            className="w-full"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide3" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src={image3}
                            className="w-full"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide4" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src={image4}
                            className="w-full"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide1" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="lg:w-1/5 w-full my-3 ms-2">Timing Add</div>
            </div>
        </>
    )
}

export default Home_Slides