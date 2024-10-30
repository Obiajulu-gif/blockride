import Image from "next/image";

const JoinCommunitySection = () => {
  return (
    <section className="bg-gray-900 py-8 px-4 flex justify-center">
      <div className="relative w-full max-w-4xl rounded-lg overflow-hidden flex flex-col md:flex-row bg-black">
        
        {/* Text and Button Section */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center text-left bg-black bg-opacity-70">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 text-xl md:text-2xl font-semibold mb-4">
            Come work with our amazing team as we make wealth accessible to both the current and upcoming generations.
          </h2>
          <button className="mt-4 bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300">
            Join Community
          </button>
        </div>

        {/* Background Image Section */}
        <div className="flex-1 relative">
          <Image
            src="/images/community.png" // Replace with the actual path to your image
            alt="Community"
            layout="fill"
            objectFit="cover"
            className="opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinCommunitySection;
