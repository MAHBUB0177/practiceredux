import React from 'react'
import mobile from './images/no_image.png'
function Home(props) {
    console.log(props)
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={mobile} />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}}>
                    Add To Cart</button>


                    <button  style={{backgroundColor:'green',marginTop:'5px'}}
                    onClick={()=>{props.removeToCartHandler()}}>
                    remove To Cart</button>
               

                </div>

               
                
            </div>
        </div>
    )
}
export default Home