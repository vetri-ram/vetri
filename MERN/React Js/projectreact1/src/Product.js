import {useState} from 'react';
import Card from "./card";



export default function Product() {

    let products = [
        {
            id: 1,
            name: "iphone",
            price: 4000
        },
        {
            id: 2,
            name: "samsung",
            price: 5000
        },
        {
            id: 3,
            name: "Redme",
            price: 6000
        },
        {
            id: 4,
            name: "Oppo",
            price: 7000
        },
        {
            id: 5,
            name: "Oppo",
            price: 7000
        },
    ]


    const [cartList, setCartlist] = useState([])
    const [total, setTotal] = useState();

    let buttonClick = (productObj) => {
        setCartlist([...cartList,productObj]);
        setTotal(total + productObj.price);
        
    }

     let removeCart = (productObj) => {
       let newCart = cartList.filter(obj => obj.id !== productObj.id);
      setCartlist([...newCart])
      setTotal(total - productObj.price)
     }


    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-10">
                     <div className="row">
                     {
                       products.map((product) => {
                           return <Card productData={product} handleClick={buttonClick}></Card>
                       })
                   }
                     </div>
                    </div>
                    <div className="col-lg-2">
                         <h1>Cart</h1>
                         <ul class="list-group">
                           {
                               cartList.map((item) => {
                                   return <li class="list-group-item d-flex justify-content-between align-items-center">
                                   {item.name}
                                   <span class="badge bg-primary rounded-pill">{item.price}</span>
                                   <span><button className="btn btn-xs btn-danger" onClick={removeCart()}>X</button></span> 
                                 </li>
                               })
                           }
 
</ul>
<h3> Total - ${total}</h3>
                    </div>
                  
                   
                   
                </div>

            </div>
        </>
    )

}