import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleReco from './common/SingleReco'
import Pagination from "./Pagination";
import { useNavigate } from 'react-router';

const AllProducts = () => {


      const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const start = (page - 1) * itemsPerPage;
  const currentItems = products.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);


  // add to cart
  const handleCart = (data)=>{
    let existId = JSON.parse(localStorage.getItem('Name')) || []
    existId.push(data)
    localStorage.setItem('Name',JSON.stringify(existId))
    
  }

  // navigate
  const navigate =  useNavigate()
  const handleShow = (productInfo)=>{
    navigate(`/productdetails/${productInfo.id}`)
  }


  return (
    <>
    <div>
       <div className='flex justify-between flex-wrap'>
                        {
                            currentItems.map((item,i)=>{
                                return(
                                    <SingleReco cartClick={()=>handleCart(item.id)} showDetails={()=>handleShow(item)} key={i} proImg={item.image} proName={item.title} proPrice={item.price}/>
                                )
                            })
                        }
        </div>
        <Pagination totalPages={totalPages} currentPage={page} setPage={setPage} />
    </div>
    
    </>
  )
}

export default AllProducts