import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate()
  return (
    <section className="relative w-full h-[500px] bg-gray-300">
      {/* IMAGE PLACEHOLDER - Homepage Banner */}
      {/* Replace with <img src="..." /> later */}

      <img src="technology1.jpg" className="w-full h-[500px]"alt="" />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10">
        <h1 className="text-white text-4xl font-bold mb-4 font-Urbanist-700">
          FSTONE TECHNOLOGIES
        </h1>
       <p className="text-white max-w-xl font-Urbanist text-lg">
        We partner closely with clients to drive real transformation—backed by deep expertise and proven results. Let’s connect and shape your future together.
       </p>
        <button 
          onClick={()=>{
            navigate("/services")
          }
          }
        className="mt-6 border border-white px-4 py-2 text-white">
          Get Started →
        </button>
           
      </div>
   
    </section>
  );
}
