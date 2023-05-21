import Link from "next/link";
import React from "react";

export default function ProductCard(){
    return(
        <Link href="/product/1"
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <img src="/img/product1.webp" alt="" />
            <div className="p-4 text-black"> 
                <h2 className="text-lg font-medium">Name</h2>
                <div className="flex items-center text-black"> 
                    <p className="mr-2 text-lg font-semibold">$20.00</p>
                    <p className="ml-auto text-base font-medium line-through text-green-600">20% off</p>
                </div>
            </div>
        </Link>
    )
}