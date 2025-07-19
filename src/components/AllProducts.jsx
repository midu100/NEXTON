import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleReco from './common/SingleReco'
import Pagination from "./Pagination";

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



  return (
    <>
    <div>
       <div className='flex justify-between flex-wrap'>
                        {
                            currentItems.map((item)=>{
                                return(
                                    <SingleReco proImg={item.image} proName={item.title} proPrice={item.price} proRat={item.rating.rate} proTotal={item.rating.count}/>
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