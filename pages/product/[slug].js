import ProductDetailCarousel from "@/components/ProductDetailCarousel"
import RelativeProduct from "@/components/RelativeProduct";
import Wrapper from "@/components/Wrapper"
import React from "react"
import { IoMdHeartEmpty } from "react-icons/io";

export default function ProductDetails() {
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* left column start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailCarousel />
                    </div>
                    {/* left column end */}
                    {/* right colum start*/}
                    <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            Davis Shirt
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            Cyberpunk 2077 Building Paint Logo Men’s Black T-shirt-Medium
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="text-lg font-semibold">
                            MRP: $19 433.00
                        </div>

                        <div className="text-md font-medium text-black">
                            inc. of USA
                        </div>

                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Lorem Ipsum is simply dummy text of the printing and typesetting industry)`}
                        </div>
                        {/* Size Range Start*/}
                        <div className="mb-10">
                            {/* Heading Start*/}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select guide
                                </div>
                            </div>
                            {/* Heading End*/}

                            {/* Size start*/}
                            <div className="grid grid-cols-3 gap-2">
                                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    S
                                </div>
                                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    M
                                </div>
                                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    L
                                </div>
                                <div className=" border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    XL
                                </div>
                            </div>
                            {/* Size end*/}

                            {/* Show error start*/}
                            <div className="text-red-600 mt-1">
                                Size selection is required
                            </div>
                            {/* Show error end*/}
                        </div>
                        {/* Size Range End*/}

                        {/* ADD TO CART BUTTON START */}
                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                        >
                            Add to Cart
                        </button>
                        {/* ADD TO CART BUTTON END */}

                        {/* WHISHLIST BUTTON START */}
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/* WHISHLIST BUTTON END */}

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </div>
                        </div>
                    </div>
                    {/* right colum end*/}
                </div>
                <RelativeProduct/>
            </Wrapper>
        </div>
    )
}