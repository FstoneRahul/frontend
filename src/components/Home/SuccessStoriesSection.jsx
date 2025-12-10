export default function SuccessStoriesSection() {
  return (
    <section className="bg-black text-white py-20 px-10">
      <h2 className="text-3xl font-semibold font-['Urbanist'] mb-10">Your Success Is Our Success</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">

        {/* IMAGE Placeholder */}
        <img src="sucess.jpg" className="h-[300px] w-[600px] rounded-md object-cover" alt="Success Story" />

        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-blue-500 mb-3">National Health Insurance Provider</h3>
          <p className="text-gray-300">
            “My partnership with FSTONE Technologies is long <br />and fruitful.
            The relationship is as important as the candidates we receive.”
          </p>
        </div>

      </div>
    </section>
  );
}
