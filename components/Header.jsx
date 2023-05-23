import { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [ShowCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState('translate-y-0');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [categories,setCategories] = useState('null');

    const {cartItems} = useSelector((state => state.cart));

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow('-translate-y-[80px]');
            } else {
                setShow('shadow-sm');
            }

        } else {
            setShow('translate-y-0');
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    }, [lastScrollY])

    useEffect(() => {
        fetchCategory();
    },[])
    
    const fetchCategory = async ()=>{
        const {data} = await fetchDataFromApi('/api/categories?populate=*')
        setCategories(data);
    }
    return (
        <div className={`w-full h-[50px] md:h-[80px] bg-black flex items-center 
            justify-center z-20 sticky top-0 transition-transform duration-300 ${show}`} >
            <Wrapper className="h-[60px] flex justify-between items-center">
                <Link href={'/'}>
                    <img src="https://images.squarespace-cdn.com/content/v1/54c566cbe4b0f7430cbc6a73/1559853973996-4CLJDPC15YS38C6GXLP8/Samurai.png" className={`w-[40px] md:w-[80px]`} />
                </Link>

                <Menu
                    ShowCatMenu={ShowCatMenu}
                    setShowCatMenu={setShowCatMenu}
                    categories={categories}
                />

                {mobileMenu && (
                    <MobileMenu
                        ShowCatMenu={ShowCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu}
                        categories={categories}
                    />)}

                <div className="flex items-center gap-2 text-white">

                    <div className="icon">
                        <IoMdHeartEmpty className="text-[15px] md:text-[20px]" />
                        <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px]
                        rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white 
                        text-[10px] md-text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">10</div>
                    </div>

                    <Link href='/cart'>
                    {cartItems.length>=0 && <div className="icon">
                            <BsCart className="text-[15px] md:text-[20px]" />
                            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px]
                        rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white 
                        text-[10px] md-text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">{cartItems.length}</div>
                        </div>}
                    </Link>

                    {/*Moblie icon*/}
                    <div className="w-8 md:w-12 h-8 md:h-12 md:hidden rounded-full flex justify-center items-center hover:bg-slate-300 hover:text-black cursor-pointer relative -mr-2">
                        {mobileMenu ? (
                            <VscChromeClose className="text-[16px]"
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <BiMenuAltRight className="text-[16px]"
                                onClick={() => setMobileMenu(true)}
                            />
                        )}
                    </div>
                    {/*Moblie icon*/}
                </div>
            </Wrapper>
        </div>
    )
}