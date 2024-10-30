import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <p className="text-orange-500 uppercase tracking-wide mb-2 text-sm md:text-base">
         💼 How It Works
        </p>
        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-12">
          Simple Steps To Seamless Travel.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-black bg-opacity-50 rounded-lg p-6 flex flex-col items-center text-center">
            <FaQuoteLeft className="text-white text-3xl mb-4" />
            <p className="text-gray-300 mb-6">
              Voouch is incredibly reliable. I can top up my phone, pay bills,
              and save money effortlessly.
            </p>
            <div className="flex items-center space-x-4">
              <Image
                src="/images/user1.png" // Replace with actual image path
                alt="User 1"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="text-left">
                <p className="text-white font-semibold">Judas Mulan</p>
                <p className="text-gray-400 text-sm">Business Owner</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-black bg-opacity-50 rounded-lg p-6 flex flex-col items-center text-center">
            <FaQuoteLeft className="text-white text-3xl mb-4" />
            <p className="text-gray-300 mb-6">
              Voouch is incredibly reliable. I can top up my phone, pay bills,
              and save money effortlessly.
            </p>
            <div className="flex items-center space-x-4">
              <Image
                src="/images/user2.png" // Replace with actual image path
                alt="User 2"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="text-left">
                <p className="text-white font-semibold">Judas Mulan</p>
                <p className="text-gray-400 text-sm">Business Owner</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-black bg-opacity-50 rounded-lg p-6 flex flex-col items-center text-center">
            <FaQuoteLeft className="text-white text-3xl mb-4" />
            <p className="text-gray-300 mb-6">
              Voouch is incredibly reliable. I can top up my phone, pay bills,
              and save money effortlessly.
            </p>
            <div className="flex items-center space-x-4">
              <Image
                src="/images/user3.png" // Replace with actual image path
                alt="User 3"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="text-left">
                <p className="text-white font-semibold">Judas Mulan</p>
                <p className="text-gray-400 text-sm">Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
