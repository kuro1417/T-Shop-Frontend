import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";

export default function ProductDetailCarousel() {
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                <img src="/img/product1.webp"/>
                <img src="/img/p2.jpeg" />
                <img src="/img/p3.jpeg" />
            </Carousel>
        </div>
    )
}