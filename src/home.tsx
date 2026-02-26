import {useState} from 'react'
import { FiSearch } from "react-icons/fi";
import type { Product } from './App';
import { useNavigate } from "react-router-dom";
import Footer from './fotter';
import toast from "react-hot-toast";
interface Products {
  array: Product[];
  cart:Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function  Home ({array, setCart}:Products){
const [input, setInput]=useState('')
const navigate = useNavigate();
function handleChange(e: React.ChangeEvent<HTMLInputElement>
) {

  const value = e.target.value;

  setInput(value);

  if (value === "") {

    // back to initial 3 items
    setVisible(getVisibleItem());

  } else {

    // SEARCH THROUGH FULL ARRAY
    const filtered = array.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setVisible(filtered);

  }

}
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



 // Filter special items
  const specialItems = array.filter(i => i.sort === "special");
   const special = array.filter(i => i.sort === "pop");
  // Decide how many items to show based on screen width
  const getVisibleItems = () => {
    if (typeof window === "undefined") return specialItems.slice(0, 3); // fallback
    const width = window.innerWidth;
    if (width >= 1280) return specialItems.slice(0, 6); // desktop
    if (width >= 768) return specialItems.slice(0, 6); // laptop/tablet
    return specialItems.slice(0, 3); // mobile
  };

  const [visibleItems, setVisibleItems] = useState(getVisibleItems());

  // Update on resize
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      setVisibleItems(getVisibleItems());
    });
  }

const getVisibleItem = () => {
    if (typeof window === "undefined") return special.slice(0, 3); // fallback
    const width = window.innerWidth;
    if (width >= 1280) return special.slice(0, 6); // desktop
    if (width >= 768) return special.slice(0, 6); // laptop/tablet
    return special.slice(0, 3); // mobile
  };

  const [visible, setVisible] = useState(getVisibleItem());

  // Update on resize
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      setVisible(getVisibleItem());
    });
  }

return(<div className='bg-[#F3F4F6]'>
<header className=" relative">

<div className="image relative">
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/45"></div>
<div className=" md:w-[922px] absolute w-[373px] top-[304px] left-[8px] gap-[20px] md:top-[365px] md:gap-[42px] md:left-[48px] ">
<h1 className=" md:font-bold md:leading-[61px] md:text-[48px] font-bold text-white leading-[40px] md:w-[922px] font-inter tracking-normal text-[32px] ">The Heart of Nigerian Home Cooking
</h1>
<p className="font-inter md:leading-[42px] md:font-bold md:text-[32px] font-medium text-white text-[16px] leading-[24px] tracking-normal">
    Handcrafted with passion, delivered with care.</p>
    <div className="w-[215px] py-[15px]">
  <button onClick={() => navigate("/order")} className="bg-[#FF7A18] font-inter tracking-normal text-[16px] 
  font-semibold leading-[24px] cursor-pointer text-white md:py-4 px-4 py-2 rounded-[10px]">
    Discover what’s new
  </button>
</div>


</div>

</div>

<div className='bg-white p-2 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
w-[90%] md:w-[70%] flex items-center gap-2 md:rounded-[8px]'>

  <FiSearch className="md:w-[46px] md:h-[46px] text-[#807373] w-[24px] h-[24px] text-xl" />

  <input
    type="text"
    value={input}
    onChange={handleChange}
    className=" font-normal leading-[140%] text-[16px] px-[15px] md:text-[24px] md:font-semibold  py-[7px] outline-0 w-full text-[#1F2937] md:leading-[34px]"
    placeholder="What are you craving for today?"
  />

</div>

</header>

<section className="bg-[#F3F4F6] gap-[33px]  py-[96px] px-[16px] ">
<div>
    <h1 className=" text-center font-semibold text-[24px] leading-[32px] mb-5 tracking-normal">Popular Categories</h1>
</div>
{visible.length === 0 ? (
  <p className="text-center col-span-full text-gray-500">
    No items found 😔
  </p>
) : (
<div className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-[33px] ">
    {visible.map(item=>(
        <>
        <div className=" px-[4px] pt-[2px] pb-[18px] gap-[10px] flex flex-col rounded-[14px] bg-white">
        <img className="rounded-tl-[14px] rounded-tr-[14px]" src={item.img} alt="image" />
        <p className="h-[20px] text-[14px] font-medium text-center leading-[20px]">{item.name}</p>
    </div>
        </>
    ))}
    
</div>
)}
<p className='text font-[400] text-center pt-5 pb-20 text-[#1E88E5] tracking-[2%] leading-[180%] text-[16px] md:hidden cursor-pointer' onClick={() => navigate("/order")}>View All Categories</p>
</section>

<p className='pb-5 text-center font-semibold text-[24px] leading-[32px] md:mt-20'>Chef'Specials</p>
<section className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-[33px] px-[18px] md:mb-20'>

    {visibleItems.map(item=>(
        <div key={item.id} className='bg-white pb-4 pt-[2px] pr-[2px] pb-[46px] pl-[2px] rounded-[14px] gap-[25px]'>
            <div>
                <div>
                    
                    <img src={item.img} alt="" className='w-full h-[200px] object-cover rounded-t-[14px]' />
                </div>
                <div>
                    <div className='px-[17px] gap-[7px] mt-4 pb-4'>
                <p className='text-[#1f2937] font-semibold text-[24px] leading-[34px]'>{item.name}</p>
                <p className='text-[#1f2937] text-[16px] font-medium tracking-normal leading-[24px]'>{item.desc}</p>
                </div>
                 </div>

                <div className=' flex justify-between items-center px-[14px]'>
                    <p className=' text-[#FF7A18] font-medium text-[16px] leading-[24px]'>₦{item.price.toLocaleString()}</p>
                    <div className=' py-[10px] px-6 rounded-[10px] bg-[#FF7A18] gap-[16px]'>
                        <button className=' text-white font-semibold text-[16px] cursor-pointer leading-[24px]' onClick={() => {
  addCart(item);
  toast.success("Added to cart");
}}>Add to cart</button>
                    </div>
                </div>
               
                
            </div>
        </div>

    ))}
</section>
<p className='text font-[400] text-center pt-5 pb-20 text-[#1E88E5] tracking-[2%] leading-[180%] text-[16px] md:hidden' onClick={() => navigate("/order")}>View All Specials</p>
<section className="relative">

  {/* Background image */}
  <div className="pop relative py-[164px] px-[20px] ">

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="relative z-10 gap-[30px] py-[10px] md:gap-[10px]">

      <h1 className='md:leading-[140%] md:gap-[27px] md:w-full md:text-[48px] md:font-extrabold w-[350px] text-[32px] text-white font-bold leading-[40px]'>
        Introducing Our New Menu Addition!
      </h1>

      <p className='mb-4 pt-2 md:w-[38%] md:leading-[34px]  text-white md:text-[24px] font-semibold text-[20px] w-[350px] leading-[28px]'>
        Exploring exciting new dishes, crafted with freshest ingredient and authentic Nigeria Flavors.
      </p>

      <button className='py-4 rounded-[10px] font-semibold leading-[24px] px-4 text-[16px] bg-[#FF7A18] text-white cursor-pointer'>
        Discover Whats new
      </button>

    </div>

  </div>

</section>
<Footer />
</div>)
}