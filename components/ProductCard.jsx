import Link from "next/link";
import React from "react";
import Image from "next/image";
import { getDiscountedPricePercentage } from "@/utils/helper";

export default function ProductCard({data:{attributes: p ,id}}){
    return(
        <Link href={`/product/${p.slug}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <Image
                width={500}
                height={500}
                src={p.thumbnail.data.attributes.url}
                alt={p.name}
                className="imgItems"
            />
            <div className="p-4 text-black"> 
                <h2 className="text-lg font-medium">{p.name}</h2>
                <div className="flex items-center text-black"> 
                    <p className="mr-2 text-lg font-semibold">${p.price}</p>
                    {p.origin_price && (
                        <>
                            <p className="text-base  font-medium line-through">
                                ${p.origin_price}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountedPricePercentage(
                                    p.origin_price,
                                    p.price
                                )}
                                % off
                            </p>
                        </>
                    )}
                </div>
            </div>
        </Link>
    )
}