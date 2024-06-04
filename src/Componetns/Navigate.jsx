import { useLocation } from "react-router-dom";



function Navigate(){
       
         const location = useLocation();
         const selectedProduct = location.state.data

      console.log(location,"location")
    return(
        <>

       <p>{selectedProduct.id}</p>
        <div>
        <img style={{height:'100px',width:"150px",}} src={selectedProduct.thumbnail} />
        </div>
        <p>{selectedProduct.brand}</p>
        <p>{selectedProduct.price}</p>
        <p>{selectedProduct.rating}</p>
        <p>{selectedProduct.discountPercentage}</p>
    </>
    )
}


export default Navigate;