import axios from 'axios';
import React,{useState, useEffect} from 'react';
import Itemcard from '../../shop/Itemcard.jsx';
import Cart from '../../shop/Cart.jsx';
import IP from '../../api/ip.js';
import './style.css';






const Home = () => {
const [products, setProducts] = useState([])







useEffect(()=>{
  axios.get(`${IP}/product/`)
  .then( res => {
    console.log(res);
    setProducts(res.data)
  })
  .catch(err =>{
    console.log(err);
  })
},[])
  





  return (
    <div className='grid-container'>
      <div className='row'>
      {products.map((product,index) => {
        return (
<<<<<<< HEAD
          
          <Itemcard  image={product.image} title={product.title} description={product.description} price={product.price} product={product} key={index} />
=======
          <Itemcard  image={product.image} title={product.title} 
          description={product.description}
           price={product.price} item={product} key={index} />
>>>>>>> 61b2b828c1bf04428988704fbcf8d4adacc1f01c
        )
      }

      
        
        )}
      </div>
      <div>
        <Cart />
      </div>
      
      
    
    </div>
  )

    }
export default Home;