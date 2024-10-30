import Image from "next/image";

const HowItWorksSection = () => {
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
          {/* Step 1 */}
          <div className="bg-black bg-opacity-50 rounded-lg p-6">
            <div className="bg-gray-700 w-full h-40 rounded mb-4"></div>
            <h3 className="text-white text-lg font-semibold mb-2">
              Step 1: Join the Community
            </h3>
            <p className="text-gray-300 text-sm">
              Sign up easily and connect your wallet to start exploring.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-black bg-opacity-50 rounded-lg p-6">
            <div className="bg-gray-700 w-full h-40 rounded mb-4"></div>
            <h3 className="text-white text-lg font-semibold mb-2">
              Step 2: List Your Vehicle or Book a Ride
            </h3>
            <p className="text-gray-300 text-sm">
              Car owners can list their vehicles for rental, while riders can browse available options or book shared trips.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-black bg-opacity-50 rounded-lg p-6">
            <div className="bg-gray-700 w-full h-40 rounded mb-4"></div>
            <h3 className="text-white text-lg font-semibold mb-2">
              Step 3: Enjoy Secure Transactions
            </h3>
            <p className="text-gray-300 text-sm">
              Smart contracts handle payments and bookings, ensuring transparency and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
