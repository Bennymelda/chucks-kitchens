
import { useState, useEffect } from 'react';
//import { Product } from './App'; // or wherever your interface is
import type { Product } from './App';
import {IoIosAdd} from "react-icons/io"
import Footer from './fotter'
import toast from "react-hot-toast";
interface Products {
  array: Product[];
  cart:Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function Page({array,setCart}:Products) {
 
const [viewAll, setViewAll] = useState({
  popular: false,
  food: false,
  soup: false
});
const [activeCategory, setActiveCategory] = useState("all");

  
  const [isMobile] = useState(false);
const checks=array.filter(i=> i.sort === 'pos')
const food=array.filter(i=> i.sort === 'jollef')
const soup=array.filter(i=> i.sort === 'soup')

const getVisibleItems = (category: "popular" | "food" | "soup") => {
  let items: Product[] = [];
  if (category === "popular") items = checks;
  if (category === "food") items = food;
  if (category === "soup") items = soup;

  if (viewAll[category]) return items; // show all if toggled

  if (typeof window === "undefined") return items.slice(0, 3);
  const width = window.innerWidth;
  if (width >= 1280) return items.slice(0, 6);
  if (width >= 768) return items.slice(0, 6);
  return items.slice(0, 3);
};
  function addCart(product: Product) {
  setCart(prev => {
    // Check if item already exists
    const existingItem = prev.find(cartItem => cartItem.id === product.id);

    if (existingItem) {
      // If it exists, increment quantity
      return prev.map(cartItem =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      // If it doesn't exist, add with quantity 1
      return [...prev, { ...product, quantity: 1 }];
    }
  });
}
const [visibleItems, setVisibleItems] = useState({
  popular: getVisibleItems("popular"),
  food: getVisibleItems("food"),
  soup: getVisibleItems("soup")
});
 
useEffect(() => {
  const handleResize = () => {
    setVisibleItems({
      popular: getVisibleItems("popular"),
      food: getVisibleItems("food"),
      soup: getVisibleItems("soup"),
    });
  };

  window.addEventListener("resize", handleResize);
  handleResize(); // initial check
  return () => window.removeEventListener("resize", handleResize);
}, [viewAll, isMobile, array]);
  return (
    <div>
      
      <header className='img relative'>
        <div className="absolute inset-0 bg-black/45"></div>
      <div className=' md:w-full absolute top-[304px] md:top-[293px] md:left-[48px] md:gap-[11px] flex flex-col gap-[20px] px-[11px] left-[8px]'>
        <p className='font-bold text-[32px] leading-[40px] text-[#ffff] md:font-bold md:text-[48px] md:leading-[61px]'>Chuks  Kitchen</p>
        <p className='md:font-medium md:text-[24px] md:leading-[34px] md:w-full w-[315px] text-[#ffff] font-medium text-[16px] leading-[24px]'>
        Chuks  Kitchen
        Nigerian Home Cooking
        4.8  (1.2k)</p>
      </div>
      </header>
      <div className='md:py-[82px] md:px-[38px] md:flex md:flex-col md:gap-[40px]   bg-[#F3F4F6] '>
        <div className='py-[26px]  items-start rounded-tr-[14px] rounded-tl-[14px] bg-[#ffff]  flex flex-col gap-[18px]'>
        <button className='pl-4 gap-[10px]  rounded-[14px] font-medium text-[24px] leading-[34px] text-[#000000]'>Menu Categories</button>
        <button
  className={`font-medium cursor-pointer pl-4 text-[24px] leading-[34px] text-[#000000]  ${
    activeCategory === "popular" ? "p-2 pl-0 ml-0 text-start bg-[#FFE1C4] border-l-4 border-[#FFA148] w-full text-[#000000]" : "text-black"
  }`}
  onClick={() => {
    setActiveCategory("popular");
    const element = document.getElementById("popular");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Popular
</button>
<button
  className={`font-medium cursor-pointer pl-4 text-[24px] leading-[34px] text-[#000000]  ${
    activeCategory === "food" ? "p-2 pl-0 ml-0 text-start bg-[#FFE1C4] border-l-4 border-[#FFA148] w-full text-[#000000]" : "text-black"
  }`}
  onClick={() => {
    setActiveCategory("food");
    const element = document.getElementById("food");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Jollef rice & Entrees
</button>
<button
  className={`border-0 cursor-pointer pl-4 font-medium text-[24px] leading-[34px] text-[#000000]  ${
    activeCategory === "soup" ? "p-2 pl-0 ml-0 text-start bg-[#FFE1C4] border-l-4 border-[#FFA148] w-full text-[#000000]" : "text-black"
  }`}
  onClick={() => {
    setActiveCategory("soup");
    const element = document.getElementById("soup");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
 Swallow and Soups
</button>
  
        <button className='font-medium pl-4 text-[24px] leading-[34px] text-[#000000] cursor-pointer'>Grills & sides</button>
        <button className='font-medium pl-4 text-[24px] leading-[34px] text-[#000000] cursor-pointer'>Beverages</button>
        <button className='font-medium pl-4 text-[24px] leading-[34px] text-[#000000] cursor-pointer'>Desserts</button>
        
      </div>

      <div className='pt-[20px] md:pt-[0px] px-[10px] leading-[24px] bg-[#F3F4F6] gap-[20px] '>
        <h1 className='pb-2 font-semibold text-[16px]  md:font-bold md:text-[32px] md:leading-[42px] text-[#1F2937]'>Popular</h1>
        <section id='popular' className='flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-[40px]'>
          {visibleItems.popular.map(product => (
        <div key={product.id} className='md:pb-[46px] bg-white md:rounded-[14px] rounded-[8px] p-[6px] gap-[11px] md:gap-[39px] flex md:flex-col'>
          
          <img
          className='md:w-full object-cover w-[108.14px] h-[99px] md:h-[222px] rounded-[3.18px] md:w-[389.78px] md:rounded-tl-[14px] md:rounded-tr-[14px]'
            src={isMobile ? product.imgMobile : product.imgDesktop}
            alt={product.name}
          />
          <div className='gap-[6px] flex flex-col px-[8px]' >
            <div className='gap-[7px] flex flex-col'>
               <p className='text-[#1F2937] leading-[24px] text-[16px] font-semibold '>{product.name}</p>
                <p className='text-[12px] leading-[16px] font-normal'>{product.desc}</p>
            </div>
            
            <div className='flex justify-between flex-row md:mt-4'>
              <p className='font-medium size-[16px] leading-[24px] text-[#FF7A18]'>₦{product.price.toLocaleString()}</p>
              <div onClick={()=>{addCart(product); toast.success("Added to cart");}}  className='bg-[#FF781A] w-5 flex items-center text-[#ffff] justify-center h-5 rounded-full'>
                <IoIosAdd className='text-white cursor-pointer' />
              </div>
            </div>
          
          </div>
          
        </div>
      ))}
        </section>
       
  <p
  className='text font-[400] text-center pt-5 pb-8 text-[#1E88E5] tracking-[2%] leading-[180%] text-[16px] md:hidden'
  onClick={() => setViewAll(prev => ({ ...prev, popular: !prev.popular }))}
>
  {viewAll.popular ? "Show Less" : "View All Categories"}
</p>
      </div>
      
     <div className='pt-[20px]  md:pt-[0px] px-[10px] gap-[21px] leading-[24px] bg-[#F3F4F6] gap-[20px]'>
        <h1 className='pb-2 font-semibold text-[16px] md:font-bold md:text-[32px] md:leading-[42px] text-[#1F2937]'>Jollef Rice Entrees</h1>
        <section id='food' className='flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-[40px]'>
          {visibleItems.food.map(product => (
        <div key={product.id} className='md:pb-[46px] bg-white md:rounded-[14px]  rounded-[8px] p-[6px] gap-[11px] md:gap-[39px] flex md:flex-col'>
          
          <img
          className='md:w-full object-cover w-[108.14px] h-[99px] md:h-[222px] md:w-[389.78px] rounded-[3.18px] md:rounded-tl-[14px] md:rounded-tr-[14px]'
            src={isMobile ? product.imgMobile : product.imgDesktop}
            alt={product.name}
          />
          <div className='gap-[6px] flex flex-col px-[8px]' >
            <div className='gap-[7px] flex flex-col'>
               <p className='text-[#1F2937] leading-[24px] text-[16px] font-semibold '>{product.name}</p>
                <p className='text-[12px] leading-[16px] font-normal'>{product.desc}</p>
            </div>
            
            <div className='flex justify-between flex-row md:mt-4'>
              <p className='font-medium size-[16px] leading-[24px] text-[#FF7A18]'>₦{product.price.toLocaleString()}</p>
              <div onClick={()=>{addCart(product); toast.success("Added to cart");}} className='bg-[#FF781A] w-5 flex items-center text-[#ffff] justify-center h-5 rounded-full'>
                <IoIosAdd className='text-white cursor-pointer'/>
              </div>
            </div>
          
          </div>
          
        </div>
      ))}
        </section>
    
  <p
 className=' text font-[400] text-center pt-5 pb-8 text-[#1E88E5] tracking-[2%] leading-[180%] text-[16px] md:hidden' 
  onClick={() => setViewAll(prev => ({ ...prev, food: !prev.food }))}
>
  {viewAll.food ? "Show Less" : "View All Categories"}
</p>
      </div>
       <div className='pt-[20px] md:pt-[0px] px-[10px] gap-[21px] leading-[24px] bg-[#F3F4F6] gap-[20px]'>
        <h1 className='pb-2 font-semibold text-[16px] md:font-bold md:text-[32px] md:leading-[42px] text-[#1F2937]'>Swallow & soups</h1>
        <section id='soup' className='flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-[40px]'>
          {visibleItems.soup.map(product => (
        <div key={product.id} className='md:pb-[46px] bg-white  md:rounded-[14px] rounded-[8x] p-[6px] gap-[11px] md:gap-[39px] flex md:flex-col'>
          
          <img
          className='md:w-full object-cover w-[108.14px] h-[99px] md:h-[222px] md:w-[389.78px] rounded-[3.18px] md:rounded-tl-[14px] md:rounded-tr-[14px]'
            src={isMobile ? product.imgMobile : product.imgDesktop}
            alt={product.name}
          />
          <div className='gap-[6px] flex flex-col px-[8px]' >
            <div className='gap-[7px] flex flex-col'>
               <p className='text-[#1F2937] leading-[24px] text-[16px] font-semibold '>{product.name}</p>
                <p className='text-[12px] leading-[16px] font-normal'>{product.desc}</p>
            </div>
            
            <div className='flex justify-between flex-row md:mt-4'>
              <p className='font-medium size-[16px] leading-[24px] text-[#FF781A]'>₦{product.price.toLocaleString()}</p>
              <div onClick={()=>{addCart(product); toast.success("Added to cart");}} className='bg-[#FF781A] w-5 flex items-center text-[#ffff] justify-center h-5 rounded-full'>
                <IoIosAdd className='text-white cursor-pointer'/>
              </div>
            </div>
          
          </div>
          
        </div>
      ))}
        </section>
         <p onClick={() => setViewAll(prev => ({ ...prev, soup: !prev.soup }))} className='text font-[400] text-center pt-5 pb-8 text-[#1E88E5] tracking-[2%] leading-[180%] text-[16px] md:hidden' 
> {viewAll.soup ? "Show Less" : "View All Categories"}</p>
  
      </div>
      </div>
      <Footer   />
    </div>
  );
}
