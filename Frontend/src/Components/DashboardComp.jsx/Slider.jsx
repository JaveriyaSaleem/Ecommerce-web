// Slides of Brands in dashboard
import Versace from "../../assets/Images/Versace.png";
import Zara from "../../assets/Images/Zara.png";
import Gucci from "../../assets/Images/gucci.png";
import Prada from "../../assets/Images/prada.png";
import CalvinKlein from "../../assets/Images/CalvinKlein.png";

const Slider = () => {
  return (
    <div className="bg-black -mx-10 flex justify-between px-10 py-10">
      <figure>
        <img src={Versace} alt="" />
      </figure>
      <figure>
        <img src={Zara} alt="" />
      </figure>
      <figure>
        <img src={Gucci} alt="" />
      </figure>
      <figure>
        <img src={Prada} alt="" />
      </figure>
      <figure>
        <img src={CalvinKlein} alt="" />
      </figure>
    </div>
  );
};

export default Slider;
