import Image from "next/image";

const CoreFeaturesSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-8">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <p className="text-orange-500 uppercase tracking-wide mb-2 text-sm md:text-base">
         💼 Core Features
        </p>
        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-12">
          Empowering Your Travel Experience.
        </h2>

        <div className="relative flex flex-col md:flex-row md:items-center justify-center md:space-x-8 lg:space-x-16">
          {/* Feature Card - Ride Sharing */}
          <div className="bg-black bg-opacity-50 rounded-lg p-6 mb-8 md:mb-0 max-w-xs mx-auto md:mx-0">
            <h3 className="text-white text-xl font-semibold mb-2">Ride Sharing</h3>
            <p className="text-gray-300 text-sm">
              Easily share rides and split costs with friends through secure, smart contract transactions, making group travel affordable and eco-friendly.
            </p>
          </div>

          {/* Car Image with Overlay Text */}
          <div className="relative mx-auto mb-8 md:mb-0">
            <Image
              src="/images/car.png" // Replace with the correct path to your image
              alt="Car"
              width={600}
              height={400}
              className="max-w-full h-auto"
            />
            {/* Overlay Text */}
            <div className="absolute top-20 left-0  w-full h-full flex items-center justify-center">
              <div className="bg-black bg-opacity-50 rounded-lg p-4 md:p-6 max-w-sm text-center">
                <h3 className="text-white text-xl font-semibold mb-2">Book a Trip</h3>
                <p className="text-gray-300 text-sm">
                  Quickly book a ride or rent a vehicle for any occasion with transparent, trustless transactions powered by blockchain.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card - Investor Car Rentals */}
          <div className="bg-black bg-opacity-50 rounded-lg p-6 max-w-xs mx-auto md:mx-0">
            <h3 className="text-white text-xl font-semibold mb-2">Investor Car Rentals</h3>
            <p className="text-gray-300 text-sm">
              Investors can earn passive income by listing their cars for rent on Blockride, with all payments and terms securely managed on-chain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;
