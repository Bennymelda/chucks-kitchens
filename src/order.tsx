import type { Product } from './App';
import { useState,useEffect} from 'react';
import {IoIosAdd} from "react-icons/io"
import {FaTimes} from "react-icons/fa"
import {MdMinimize} from "react-icons/md"
import Footer from './fotter'
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
interface Products {
  array: Product[];
  cart:Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function Order({cart,setCart}:Products){
    const [isMobile] = useState(false);
    const navigate = useNavigate();
   const [address, setAddress] = useState("");
const [time, setTime] = useState("");
const [instruction, setInstruction] = useState("");
const [phone, setPhone] = useState("");
const [cardNumber, setCardNumber] = useState("");
const [expiry, setExpiry] = useState("");
const [loading, setLoading] = useState<boolean>(true);
const [cvv, setCvv] = useState("");
const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
 

  let value = e.target.value.replace(/\D/g, ""); // remove non-digits

  value = value.substring(0, 16); // limit to 16 digits

  value = value.replace(/(.{4})/g, "$1 ").trim(); // space every 4 digits

  setCardNumber(value);

};
const handleExpiry = (e: React.ChangeEvent<HTMLInputElement>) => {

  let value = e.target.value.replace(/\D/g, "");

  value = value.substring(0, 4);

  if (value.length >= 3) {
    value = value.replace(/(\d{2})(\d{1,2})/, "$1/$2");
  }

  setExpiry(value);

};
const handleCvv = (e: React.ChangeEvent<HTMLInputElement>) => {

  let value = e.target.value.replace(/\D/g, "");

  value = value.substring(0, 3);

  setCvv(value);

};
const handlePhoneChange = (e:React.ChangeEvent<HTMLInputElement> ) => {

let value = e.target.value.replace(/\D/g, "")

// limit to 13 digits
value = value.slice(0, 13)

if (value.length > 9) {

value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,4})/, "$1 $2 $3 $4")

}

else if (value.length > 6) {

value = value.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1 $2 $3")

}

else if (value.length > 3) {

value = value.replace(/(\d{3})(\d{0,3})/, "$1 $2")

}

setPhone(value)

} 
const deliveryFee=500
    const serviceFee=200
    
    
    const totalAmount = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);
const total=deliveryFee + serviceFee + totalAmount
  const [step, setStep] = useState("cart");
function increaseQuantity(id: number) {

  setCart(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );

}
function decreaseQuantity(id: number) {

  setCart(prev =>
    prev
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );

}
useEffect(() => {
  setLoading(true); // reset loading when step changes
  const timer = setTimeout(() => setLoading(false), 2000); // 2s spinner
  return () => clearTimeout(timer);
}, [step]); // ✅ dependency on step
function removeItem(id:number){
    setCart(prev=>prev.filter(i=>i.id !== id) )
}

  console.log("Step:", step, "Loading:", loading);
return(
    
  <div>
    
    <div className='md:pt-5 relative'>
      {step === "cart" && (
    <section>

    <div className="bg-[#F3F4F6] md:px-5 md:pb-10 md:pt-10">
        
       
       <div className='flex md:rounded-[4px] flex-col w-full md:py-[21px] md:gap-[11px] md:px-[10px] gap-[9px] py-[17px]  px-[20px] rounded-[8px]  bg-[#ffff] '>
        <p className='hidden md:block md:text-[32px] md:leading-[42px] md:font-bold'>Your Cart</p>
        {cart.map(i=>(
            <div key={i.id} className="rounded-[8px]  flex flex-row justify-between md:justify-center md:items-center border-[0.5px] border-[#BDBDBD] px-[6px] py-[7px] gap-[11px] ">
                <div>
                    <img src={isMobile ? i.imgMobile : i.imgDesktop} className="object-cover w-[108.14px] h-[108px] md:w-[190px] md:h-[173.93px] md:rounded-[5.59px] rounded-[3.18px]" />
                </div>
                <div className="gap-[8px] flex-1 flex flex-col md:flex-row md:justify-between md:item-center">
                <div className='md:flex md:flex-col md:gap-[18px] md:pl-4'>
                    <p className="font-semibold text-[16px] leading-[24px] md:font-bold md:leading-[42px] md:text-[32px]">{i.name}</p>
                    <p className="leading-[16px] md:font-medium md:text-[24px] md:leading-[34px] font-normal text-[12px]">{i.title}</p>
                </div>
                <div className="flex flex-row md:gap-[47.24px] justify-between md:w-[230px] md:items-center">
                    <IoIosAdd onClick={() => increaseQuantity(i.id)} className="bg-[#BDBDBD] cursor-pointer w-[12.07px] w-[12.07px] md:rounded-[8px] md:h-[30px] md:w-[30px] rounded-[3.22px]" />
                    <p className="font-medium text-[20.74px] leading-[29.38px] md:leading-[73px] md:font-medium md:text-[51.53px]">{i.quantity}</p>
                    <MdMinimize onClick={() => decreaseQuantity(i.id)} className="bg-[#BDBDBD] cursor-pointer md:text-center w-[12.07px] w-[12.07px] rounded-[3.22px] md:rounded-[8px] md:h-[30px] md:w-[30px] " />
                </div>
                <div className="flex flex-row justify-between md:w-[200px] md:items-center md:pr-1">
                    <p className="text-[#FF7A18] font-medium text-[16px] leading-[24px] md:text-[32px] md:text-bold md:leading-[42px]"> ₦{(i.price * i.quantity).toLocaleString()}</p>
                    
                    <FaTimes className="w-[21.56px] h-[16.77px] md:w-[41.93px] md:h-[41.93px] bg-[#1F2937] text-white" onClick={()=>removeItem(i.id)}/>
                
                </div>
                
                </div>
            </div>
        ))}
        </div> 
       <div className="px-[3px] flex flex-row gap-[11px] bg-white ">
        <IoIosAdd className="cursor-pointer w-[17.5px] h-[17.5px] text-[#1E88E5]" />
        <p className="font-medium text-[16px] leading-[24px] text-[#1E88E5] cursor-pointer" onClick={() => navigate("/page")}>Add more items from chucks kitchen</p>
       </div>
    </div>
    <div className=' w-[40%] md:w-[30%] py-2 md:py-4 text-white font-medium  mx-auto  rounded-4xl text-center mt-4 mb-6 bg-[#FF7A18]'>
      <button className='cursor-pointer' onClick={() => setStep("delivery")}>Confirm Order</button>
    </div>
 
    </section>
    )}

    </div>
    {step === "delivery" && (
      <section>
        <div className="bg-[#F3F4F6]  px-5 py-20  md:px-60 md:py-30">
    <div className="py-[20px] px-[9px] bg-white flex flex-col gap-[23px] rounded-2xl  gap-[4px]">
        
        <div className="border-b-[0.5px] border-[#BDBDBD] py-[8px] flex-col flex gap-[14px] ">
          <h1 className="font-bold text-[32px] leading-[40px] text-[#000000] md:text-[32px] md:leading-[42px]">Order Summary</h1>
        </div>
        <div>
            <p className="font-semibold text-[16px] md:font-medium md:text-[24px] md:leading-[34px] leading-[24px]">Add a promo code</p>
            <div className="flex justify-between gap-[10px] flex-row py-[10px]">
                <button className="py-[15px]  text-[#000000] w-full md:w-[80%] leading-[140%] text-[16px] font-normal border-[#BDBDBD] border-[1px] rounded-[8px]">Enter code here</button>
                <button className="py-[15px] bg-[#FF7A18] text-white md:w-[20%] w-full rounded-[10px] font-semibold text-[16px] leading-[24px]">Login</button>
            </div>
        </div>
        <div className="py-[10px] flex flex-col gap-[10px]">
            <div className="flex flex-row justify-between">
                <p  className="font-medium text-[#4B5563] text-[16px] leading-[24px]">Subtotal</p>
                <p className="font-medium text-[#4B5563]  text-[16px] leading-[24px]">₦{totalAmount.toLocaleString()}</p>
            </div>
            <div className="flex flex-row justify-between">
                <p className="font-medium text-[#4B5563]  text-[16px] leading-[24px]">Delivery fee</p>
                <p className="font-medium text-[#4B5563]  text-[16px] leading-[24px]">{deliveryFee}</p>
            </div>
            <div className="flex flex-row  justify-between">
                <p className="font-medium text-[16px] text-[#4B5563]   leading-[24px]">Service fee</p>
                <p className="font-medium text-[16px] text-[#4B5563]  leading-[24px]">{serviceFee}</p>
            </div>
            <div className="flex flex-row justify-between">
                <p className="font-medium text-[16px] text-[#4B5563]  leading-[24px]">Tax</p>
                <p className="font-medium text-[16px] text-[#4B5563]  leading-[24px]">0</p>
            </div>
        </div>
        <hr className="border-[0.5px] border-[#BDBDBD] "/>
        <div className="flex justify-between flex-row">
            <p className="font-semibold text-[24px] text-[#1F2937] leading-[32px] ">Total</p>
            <p className="font-semibold text-[24px] text-[#1F2937] leading-[32px] ">₦{total.toLocaleString()}</p>
        </div>
        <div className="flex justify-between">
            <button className="rounded-tl-[8px] rounded-bl-[8px] leading-[140%] text-white 
            font-normal text-[16px] py-[15px] bg-[#FF7A18] w-full">Delivery</button>
            <button className="rounded-tr-[8px] rounded-br-[8px] leading-[140%] text-white 
            font-normal text-[16px] py-[15px] bg-[#BDBDBD] w-full">Pick up</button>
        </div>
        <div>
            <p className="font-semibold text-[#000000] md:font-medium md:leading-[34px] md:text-[24px] text-[16px] leading-[24px]">Special instruction for resturants</p>
            <textarea placeholder="E.g no onion, food is too spicy, food is too hot hhhhhh Food is tatsy" className="px-4 rounded-[8px] border-[1px] leading-[20px] text-[#000000] text-[14px] font-regular  border-[#BDBDBD] pt-[10px] w-full pb-[54px]"></textarea>
        </div>
        <button className=" font-semibold whitespace-nowrap text-[16px] leading-[24px] py-[18px] text-white w-full bg-[#FF7A18] gap-[16px] rounded-[10px]" onClick={() => setStep("order")}>Proceed to checkout</button>
    </div>
    </div>
     
      </section>
     
    )}
    {step === "order" && (
    <section>
    <div className="bg-[#F3F4F6]  px-5 py-20  md:px-60 md:py-30">
    <div className="py-[36px] bg-white px-[7px] md:px-[18px] flex flex-col gap-[18px] rounded-[8px]">
        <h1 className="font-bold text-[32px] md:leading-[42px] leading-[40px] ">Delivery Details</h1>
        <hr  className=" border-[0.5px] opacity-5 border-[#BDBDBD]"/>
        <div className="px-[10px] pt-[10px] pb-[32px] md:gap-[50px]  gap-[10px] flex flex-row rounded-[8px] border-[1px] items-center border-[#BDBDBD]">
            <textarea value={address}
onChange={(e) => setAddress(e.target.value)} className="outline-0 text-[16px] leading-[24px] font-medium w-full gap-[10px] rounded-[8px] px-[10px] pt-[10px] pb-[32px] text-[#000000] " placeholder="Home:123 Main Street, victoria island, Lagos Apt 4B Opposite Mega Piaza, "></textarea>
            <p className="font-normal text-[12px] leading-[16px] text-[#1E88E5] whitespace-nowrap ">Change Address</p>
        </div>
        <div>
            <p className="font-semibold text-[16px] md:text-[20px] text-[#000000] leading-[24px]">Delivery Time</p>
            <input value={time}
onChange={(e) => setTime(e.target.value)} type="text" placeholder="ASAP(30-25)" className="border-[#BDBDBD] outline-0  border-[1px] leading-[20px] md:text-[16px] font-normal text-[14px] rounded-[8px] px-[10px] w-full pb-[17px] gap-[10px] pt-[10px]" />
        </div>
        <div className="flex flex-col gap-[8px]">
            <p className="font-semibold text-[16px] md:text-[20px] text-[#000000] md:leading-[30px] leading-[24px]">Delivery Instructions (Optional) </p>
            <textarea value={instruction}
onChange={(e) => setInstruction(e.target.value)}
 placeholder="E.g, a at the front of the door, knock twice........" className="border-[1px] md:text-[16px] outline-0 leading-[20px] font-normal text-[14px] border-[#BDBDBD] rounded-[8px] px-[10px] w-full pb-[24px] gap-[10px] pt-[10px]"></textarea>
        </div>
        <div className="flex flex-col gap-[8px]">
            <p className="font-semibold text-[16px] md:text-[24px] md:leading-[34px] text-[#000000] leading-[24px]">Contact Address</p>
            <input value={phone}
onChange={handlePhoneChange} type="text"  placeholder="+234 903 448 1350" className="border-[1px] md:text-[16px] border-[#BDBDBD] outline-0 leading-[20px] font-normal text-[14px] rounded-[8px] px-[10px] w-full pb-[17px] gap-[10px] pt-[10px]" />
        </div>
        <button className="px-10 border-0 whitespace-nowrap text-white rounded-[10px]  py-4 bg-[#FF7A18]" onClick={() => setStep("bank")}>Proceed to Payment</button>
    </div>
    </div>
   
</section>
    )}
    {step === "bank" && (
    <section>
        <div className="bg-[#F3F4F6] px-5 py-20  md:px-60 md:py-30">
          <div className=" bg-white py-[18px] md:px-[30px] md:py-[18px] px-[7px] rounded-[8px] flex flex-col gap-[24px]">
            <div className="py-[8px] px-[1px] flex flex-col gap-[24px]">
                <p className="font-bold leading-[40px] text-[#000000] text-[32px] flex flex-col gap-[14px] ">Payment</p>
                <div className="flex flex-col gap-[16px]">
                    <p className="leading-[24px] font-semibold text-[16px] ">Pay with..</p>
                    <div className="py-[10px] flex flex-row gap-[10px]">
                        <div className="flex gap-[8px] flex-row">
                          <input type="radio" name="payment"  className=" appearance-none
                                w-5 h-5
                                rounded-full
                                border-2 border-gray-300
                                checked:border-gray-200
                                checked:bg-green-500
                                checked:border-4
                                bg-white" />
                          <span className="font-medium text-[16px] leading-[22px]">Card</span>
                        </div>
                        <div className="flex gap-[8px] flex-row">
                           <input type="radio" name="payment" id="" className=" appearance-none
                                w-5 h-5
                                rounded-full
                                border-2 border-gray-300
                                checked:border-gray-200
                                checked:bg-green-500
                                checked:border-4
                                bg-white"  />
                           <span className="font-medium text-[16px] leading-[22px]">Bank</span>
                        </div>
                        <div className="flex gap-[8px] flex-row">
                            <input type="radio" name='payment' className=" appearance-none
                                w-5 h-5
                                rounded-full
                                border-2 border-gray-300
                                checked:border-gray-200
                                checked:bg-green-500
                                checked:border-4
                                bg-white"  />
                            <span className="font-medium text-[16px] leading-[22px]">Transfer</span>
                        </div>
                    </div>
                </div>
            </div>



            <div className="py-[0px] px-[1px] gap-[10px] flex flex-col">
            <div className="flex flex-col gap-[16px]">
                <p className="font-medium text-[16px] leading-[24px]">Card Number</p>
                <input value={cardNumber}
  onChange={handleCardNumber} type="text" placeholder="1234 2354 3888 0909" className="rounded-[4px] border-[1.5px] border-[#ACACAC] w-full py-[12px] pl-[16px]" />
            </div>
            <div className="flex flex-col gap-[18px]">
                <div className="flex flex-row gap-[18px] justify-between">
                    <div className="flex flex-col gap-[16px] flex-1">
                    <p className="font-medium text-[16px] leading-[24px]">Expiration Date</p>
                    <input placeholder="MM/YY" value={expiry}
  onChange={handleExpiry} type="text" className="py-[12px] w-[90%] px-[16px] rounded-[4px] gap-[10px] border-[1.5px] border-[#ACACAC]" />
                   </div>
                <div className="flex flex-col gap-[16px] flex-1">
                    <p className="font-medium text-[16px] leading-[24px]">CVV</p>
                    <input placeholder="123" value={cvv}
  onChange={handleCvv} type="text" className="py-[12px] w-full px-[16px] rounded-[4px] gap-[10px] border-[1.5px] border-[#ACACAC]" />
                </div>
                </div>
                <div className="flex flex-row gap-[16px]">
                    <input type="checkbox" className="border-[1.5px] border-[#ACACAC]"/>
                    <p className="font-normal text-[16px] leading-[140%]">Save card details</p>
                </div>
               
            </div>
            
            <div className="flex mt-4 flex-col gap-[16px]">
                <button className="bg-[#FF7A18] border-0 text-white rounded-[10px] leading-[24px] text-[16px] font-semibold py-[18px] w-full" onClick={() => setStep("last")}>Pay ₦{total.toLocaleString()}</button>
                <p className=" font-medium text-[14px] leading-[20px] text-[#ACACAC]">Your personal data will be used to process your order, support your experience throughout this website, and for other purpose described in our privacy policy.     </p>
            </div>
         </div>
         </div>  

         
         
        </div>
  
    </section>
    )}
    {step === "last" && (
<section className="relative flex justify-center items-center min-h-screen bg-gray-100">
      {loading ? (
        // Tailwind spinner
        <div className="relative w-20 h-20 animate-spin">
          {[...Array(8)].map((_, i) => {
            const rotation = i * 45;
            const delay = i * 0.125;
            return (
              <div
                key={i}
                className="absolute w-2 h-7 rounded-md bg-gray-300"
                style={{
                  left: "35px",
                  top: "6px",
                  transformOrigin: "6px 50px",
                  transform: `rotate(${rotation}deg)`,
                  animation: `fade 1s linear ${delay}s infinite`,
                }}
              ></div>
            );
          })}
          <style>{`
            @keyframes fade {
              0% { background-color: #ff7a18; opacity: 1; }
              100% { background-color: #ddd; opacity: 0.2; }
            }
          `}</style>
        </div>
      ) : (
        // Success content
        <div className="text-center px-5 py-20 md:px-120 md:py-30">
          <div className="flex items-center justify-center mb-2">
            <FaCheck className="text-2xl md:w-[100px] md:h-[100px] w-[43px] h-[43px] p-2 text-white rounded-full bg-[#0E7A3E]" />
          </div>
          <div className="items-center md:py-[16px] py-[10px] px-[20px] flex flex-col gap-[10px]">
            <p className="text-[16px] leading-[24px] text-[#000000] font-medium">
              Order Placed Successfully!
            </p>
            <p className="font-regular text-[16px] leading-[140%]">
              Your delicious chuck's kitchen is on the way!
            </p>
          </div>
          <p className="font-semibold text-[20px] text-[#0A0D13] leading-[28px] mt-12 w-[50%] mx-auto md:w-full md:text-[24px] md:leading-[34px]">
            Order #123RGR231567Y Confirmed
          </p>
          <button className="text-white w-full py-[18px] rounded-[10px] bg-[#FF7A18]">
            Track Order
          </button>
          <p className="text-[#9DA3A1] font-medium leading-[24px] text-[16px] py-[17.5px] px-[10px]">
            Generate Receipt
          </p>
          <p className="font-medium text-[16px] leading-[24px] text-[#1E88E5]">
            Need help with your order?
          </p>
        </div>
      )}
     
    </section>
    
        )}
         < Footer />
    </div>
)
}