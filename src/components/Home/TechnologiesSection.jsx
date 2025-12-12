import javaImg from "../../assets/java.png";
import microsoftImg from "../../assets/microsoft.png";
import erpImg from "../../assets/ERP.png";

const techItems = [
  { title: "JAVA/J2EE Technologies", img: javaImg },
  { title: "Microsoft Technologies", img: microsoftImg },
  { title: "ERP Services", img: erpImg },
];

export default function TechnologiesSection() {
  return (
    <section className="py-20 px-10 bg-gradient-to-b from-white to-blue-50">
      
      {/* Header */}
      <div className="flex items-center justify-center mb-14">
        <h2 className="text-3xl font-semibold font-['Urbanist'] text-gray-800 relative inline-block">
          Technologies
          <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-blue-500 rounded-full"></span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-16">

        {techItems.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center group"
          >

            {/* Image Wrapper */}
            <div 
              className="
                h-[180px] w-[250px] rounded-xl overflow-hidden shadow-md 
                transition-all duration-500 transform 
                group-hover:scale-110 group-hover:shadow-2xl
                bg-white relative
              "
            >
              {/* Soft Glow */}
              <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 transition duration-500"></div>

              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <p className="mt-4 text-[15px] font-semibold text-gray-800 text-center relative">
              {item.title}

              {/* Animated Underline */}
              <span className="block w-0 h-[3px] bg-blue-500 mt-1 rounded-full transition-all duration-500 group-hover:w-full"></span>
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}
