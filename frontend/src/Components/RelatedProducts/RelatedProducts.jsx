import React, { useEffect, useState } from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'

 const RelatedProducts = ({ category }) => {

  const [relatedProducts, setRelatedProducts] = useState([]);
    
  useEffect(() => {
    if (category) {
      fetch(`http://localhost:4000/relatedProducts?category=${category}`)
        .then((response) => response.json())
        .then((data) => setRelatedProducts(data));
    }
  }, [category]);

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr/>
      <div className="relatedproducts-item">
        {relatedProducts.map((item, i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            
        })}
      </div>
    </div>
  )
}
export default RelatedProducts