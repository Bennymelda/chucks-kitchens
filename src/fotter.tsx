import { useNavigate } from "react-router-dom";
export default function Footer(){
    const navigate = useNavigate();
    return(
    <footer className='md:block hidden bg-[#62412E] py-[69px] gap-[4px] '>
    <div className='md:px-[110px] px-4 flex md:flex-row flex-col md:justify-between gap-5 md:gap-[101px]'>
        <div className='text-white w-[229.25px]'>
            <p className="text-[#FF7A18] text-[17.02px] leading-[37.02px]" style={{ fontFamily: 'Island Moments'}}>Chucks Kitcken</p>
            <p className='font text-[20px] leading-[36px] font-[400]'>Bringing the authentic flavors of Nigerian home cooking to your table with passion and care.</p>
        </div>
        <div className='gap-[7px] text-white'>
            <p className='font text-[24px] leading-[36px] font-[400]'>Quick Links</p>
            <p className='text-[12px] space-[10px] opacity-[75%] fonts font-[400] leading-[20px]' onClick={() => navigate("/home")}>Home</p>
            <p className='text-[12px] space-[10px] opacity-[75%] fonts font-[400] leading-[20px]' onClick={() => navigate("/page")}>Explore</p>
            <p className='text-[12px] space-[10px] opacity-[75%] fonts font-[400] leading-[20px]' onClick={() => navigate("/detail")}>My Order</p>
            <p className='text-[12px] space-[10px] opacity-[75%] fonts font-[400] leading-[20px]'>Account</p>
            <p className='text-[12px] space-[10px] opacity-[75%] fonts font-[400] leading-[20px]' >Contact</p>
        </div>
        <div className='gap-[7px] text-white'>
            <p className='font text-[24px] leading-[36px] font-[400]'>Contact Us</p>
            <p className='text-[12px] space-[10px] opacity-[75%] fonts font-[400] leading-[20px]'>+234 801 234 5678</p>
            <p className='text-[12px] space-[10px] opacity-[75%] fonts font-[400] leading-[20px]'>123 Taste Blvd, Lagos, Nigeriat</p>
      


        </div>
        <div className='gap-[7px] text-white'>
            <p className='text-[12px] space-[10px] opacity-[75%] fonts font-[400] leading-[20px]'>Facebook</p>
            <p className='text-[12px] space-[10px] opacity-[75%] fonts font-[400] leading-[20px]'>Twitter</p>
            <p className='text-[12px] space-[10px] opacity-[75%] fonts font-[400] leading-[20px]'>Linkeldn</p>
            <p className='text-[12px] space-[10px] opacity-[75%] fonts font-[400] leading-[20px]'>Instagram</p>
        </div>
    </div>
    <p className='text-white text-[12px] px-[110px] space-[10px] opacity-[75%] fonts font-[400] leading-[20px] pt-8'>© 2020 Lift Media. All rights reserved. </p>
</footer>
    )
}