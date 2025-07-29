import Versace from "../../assets/Images/Versace.png";
import Zara from "../../assets/Images/Zara.png";
import Gucci from "../../assets/Images/gucci.png";
import Prada from "../../assets/Images/prada.png";
import CalvinKlein from "../../assets/Images/CalvinKlein.png";
import './dashboard.css'

const brandImages = [Versace, Zara, Gucci, Prada, CalvinKlein];

const Slider = () => {
  return (
    <div className="relative overflow-hidden bg-black py-5 px-10">
      <div className="flex gap-10 animate-marquee w-max">
        {brandImages.concat(brandImages).map((img, index) => (
          <img key={index} src={img} alt={`brand-${index}`} className="h-5 sm:h-7 md:h-8 object-contain" />
        ))}
      </div>
    </div>
  );
};

export default Slider;
