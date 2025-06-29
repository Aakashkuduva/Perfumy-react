import one from "./components/images/one.jpg"
import two from "./components/images/two.jpg"
import three from "./components/images/three.jpg"


//Product Components

function Product(){
  return(
    <div class="products">
      <div class="box"> 
        <img src={one} alt="Fogg"></img>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>

      </div>
      <div class="box">
        <img src={two} alt="villan"></img>
        <p>Villan Wood Extreme, Eau De Perfume, Long-lasting Perfume, 100ml</p>
      </div>
      <div class="box">
        <img src= {three} alt="Design Club"></img>
        <p>Design Club Be spoken by Perfume Louge Men's Perfume | Perfume Long Lasting Perfume</p>
      </div>
    </div>
  )
   
}
export default Product