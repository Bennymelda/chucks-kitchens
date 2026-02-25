import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState } from 'react';
import Home from './home'
import Page from './page'
import Order from './order'
import Detail from './detail'
import './index.css'
import { Toaster } from "react-hot-toast";
import Navbar from "./nav"
export interface Product {
  id: number;
  name: string;
  img?: string;
  desc?: string;
  price: number;
  sort?: string;
  imgMobile?:string;
  quantity:number
  imgDesktop?:string;
  title?:string;
}

function App() {
const [array, setArray]=useState<Product[]>([{
id:1,
name:'Jollef Rice & Fried Chicken',
img:'images/img 5.png',
desc:'Signature jollef coooked to perfection, served with succullent fried chicken',
price:3500,
sort:'special',
quantity:1,
title:'With plantain, extra pepper sauces'

},{
    id:2,
    name:'Spicy Tillipia Pepper Soup',
    img:'images/img 8.png',
    price:3500,
    sort:'special',
    quantity:1,
    desc:'A comforting and spicy soup with tender tillipia fish, a true Nigerian delicacy ',
    title:'With plantain, extra pepper sauces'
},{
    id:3,
    name:'Jollef Rice & Fried Chicken',
    img:'images/img 5.png',
    desc:'Our Signature jollef coooked to perfection, served with succullent fried chicken',
    sort:'special',
    price:3500,
    quantity:1,
    title:'With plantain, extra pepper sauces'
},{
    id:4,
    name:'Jollef Rice & Smoked Chicken',
    img:'images/img 5.png',
    desc:'Our Signature jollef coooked to perfection, served with succullent fried chicken',
    sort:'special',
    price:3500,
    quantity:1,
    title:'With plantain, extra pepper sauces'
},{
    id:5,
    name:'Jollef Rice & Fried Chicken',
    img:'images/img 9.png',
    desc:'Our Signature jollef coooked to perfection, served with succullent fried chicken',
    sort:'special',
    price:3500,
    quantity:1,
    title:'With plantain, extra pepper sauces'
},{
    id:6,
    name:'Egusi Soup &^ Pounded Yam',
    img:'images/img 10.png',
    desc:'Rich and Savoury egusi soup with assorted meats, paired with freshly pounded yam',
    sort:'special',
    price:3500,
   quantity:1,
   title:'With plantain, extra pepper sauces'
},{
id:7,
img:'images/img 5.png',
name:'Jollef Delight',
sort:'pop',
quantity:1,
price:3500,
title:'With plantain, extra pepper sauces'
},{
id:8,
img:'images/img 4.png',
name:'Swallow & Soup',
sort:'pop',
quantity:1,
price:3500,
title:'With plantain, extra pepper sauces'
},{
 id:9,
img:'images/img 6.png',
name:'Grills & BBQ'  ,
 sort:'pop',
 quantity:1,
 price:3500,
 title:'With plantain, extra pepper sauces'
},{
id:10,
img:'images/img 7.png',
name:'Sweet Treats',
sort:'pop',
quantity:1,
price:3500,
title:'With plantain, extra pepper sauces'
},{
id:11,
img:'images/img 4.png',
name:'Jollef Delight',
sort:'pop',
price:3500,
quantity:1,
title:'With plantain, extra pepper sauces'
},{
  id:12,
img:'images/img 6.png',
name:'Jollef Delight',
  sort:'pop',
  quantity:1,
  price:3500,
  title:'With plantain, extra pepper sauces'
},{
  id:13,
imgMobile:'images/img 25.png',
desc:'Our Signature jollef coooked to perfection, served with succullent fried chicken',
name:'Jollef Rice & Fried Chicken',
price:3500,
imgDesktop:'images/img 5.png',
sort:'pos',
quantity:1,
title:'With plantain, extra pepper sauces'
},{
  id:14,
imgMobile:'images/img 21.png',
desc:'Our Signature jollef coooked to perfection, served with succullent fried chicken',
name:'Jollef Rice & Fried Chicken',
price:3500,
imgDesktop:'images/img 17.png',
sort:'pos',
quantity:1,
title:'With plantain, extra pepper sauces'
},{
  id:15,
imgMobile:'images/img 22.png',
desc:'Our Signature jollef coooked to perfection, served with succullent fried chicken',
name:'Jollef Rice & Fried Chicken',
price:3500,
imgDesktop:'images/img 18.png',
sort:'pos',
quantity:1,
title:'With plantain, extra pepper sauces'
},{
   id:16,
imgMobile:'images/img 23.png',
desc:'Spicy and savory peppered snail perfect as a starter',
name:'Peppered Snail',
price:2500,
imgDesktop:'images/img 16.png',
sort:'pos',
quantity:1,
title:'With plantain, extra pepper sauces'
},{
   id:17,
imgMobile:'images/img 23.png',
desc:'Our Signature jollef coooked to perfection, served with succullent fried chicken',
name:'Jollef Rice & Fried Chicken',
price:3500,
imgDesktop:'images/img 15.png',
sort:'pos',
quantity:1,
title:'With plantain, extra pepper sauces'
},{
   id:18,
imgMobile:'images/img 23.png',
desc:'Our Signature jollef coooked to perfection, served with succullent fried chicken',
name:'Jollef Rice & Fried Chicken',
price:3500,
imgDesktop:'images/img 5.png',
sort:'pos',
quantity:1,
title:'With plantain, extra pepper sauces'
},{
   id:19,
imgMobile:'images/img 25.png',
desc:'Our Signature jollef coooked to perfection, served with succullent fried chicken',
name:'Jollef Rice & Fried Chicken',
price:3500,
imgDesktop:'images/img 14.png',
sort:'jollef',
quantity:1,
title:'With plantain, extra pepper sauces'
},{
   id:20,
imgMobile:'images/img 21.png',
desc:'Our Signature jollef coooked to perfection, served with succullent fried chicken',
name:'Jollef Rice & Fried Chicken',
price:3500,
imgDesktop:'images/img 5.png',
sort:'jollef',
quantity:1,
title:'With plantain, extra pepper sauces'
},{
   id:21,
imgMobile:'images/img 22.png',
desc:'Our Signature jollef coooked to perfection, served with succullent fried chicken',
name:'Jollef Rice & Fried Chicken',
price:3500,
imgDesktop:'images/img 5.png',
sort:'jollef',
quantity:1,
title:'With plantain, extra pepper sauces'
},{
  id:22,
imgMobile:'images/img 25.png',
desc:'Our Signature jollef coooked to perfection, served with succullent fried chicken',
name:'Jollef Rice & Fried Chicken',
price:3500,
imgDesktop:'images/img 13.png',
sort:'soup',
quantity:1,
title:'With plantain, extra pepper sauces'
},{
   id:23,
imgMobile:'images/img 21.png',
desc:'Hearty Egusi Soup with tender goat meat, served with soft eba.',
name:'Eba & Egusi Soup (Goat Meat)',
price:3500,
imgDesktop:'images/img 12.png',
sort:'soup',
quantity:1,
title:'With plantain, extra pepper sauces'
},{
   id:24,
imgMobile:'images/img 22.png',
desc:'Light fufu served with fresh okra and fish ready to be served',
name:'Fufu & Okra Soup (fish)',
price:3500,
imgDesktop:'images/img 12.png',
sort:'soup',
quantity:1,
title:'With plantain, extra pepper sauces'
}])
const [cart, setCart] = useState<Product[]>([]);
  return (
    
     <Router>
      <Navbar />

      <Routes>
         
        <Route path="/" element={<Home array={array} cart={cart} setCart={setCart} />} />
        <Route path="/page" element={<Page array={array} cart={cart} setCart={setCart}/>} />
        <Route path="/order" element={<Order array={array} cart={cart} setCart={setCart}/>} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
