
import Image from 'next/image';
import logo from "../../public/assets/logo/64x-black-logo.png"
const BoardingPass = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover w-screen"
    >
      <div className="absolute opacity-80 inset-0 z-0"></div>
      <div className=" w-full h-full mx-auto z-10 rounded-3xl">
        <div className="flex flex-col">
          <div className="bg-white w-full relative drop-shadow-2xl rounded-3xl p-4">
            <div className="flex-none sm:flex">
              <div className="relative h-32 w-full sm:mb-0 mb-3 hidden">
                <Image
                  src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                  alt="aji"
                  width={128}
                  height={128}
                  className="w-full h-32 object-cover rounded-2xl"
                />
                <a
                  href="#"
                  className="absolute -right-2 bottom-2 -ml-3 text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-auto justify-evenly">
                <div className="flex items-center justify-between">
                  <div className="flex items-center my-1">
                    <span className="mr-3 rounded-full bg-white w-full h-8">
                      <Image
                        src={logo}
                        alt="CHiPSET"
                        width={32}
                        height={32}
                        className="h-8 p-1"
                      />
                    </span>
                    <h2 className="font-medium">CH<span className='text-[#f39e2f]'>i</span>PSET</h2>
                  </div>
                  <div className="ml-auto text-blue-800">A380</div>
                </div>
                <div className="border-b border-dashed border-b-2 my-5"></div>
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="flex-auto text-xs text-gray-400 my-1">
                      <span className="mr-1">MO</span>
                      <span>19 22</span>
                    </div>
                    <div className="w-full flex-none text-lg text-blue-800 font-bold leading-none">
                      SRM
                    </div>
                    <div className="text-xs">Ramapuram</div>
                  </div>
                  <div className="flex flex-col mx-auto">
                    <Image
                      src={logo}
                      alt="Chipset"
                      width={80}
                      height={80}
                      className="w-20 p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex-auto text-xs text-gray-400 my-1">
                      <span className="mr-1">MO</span>
                      <span>19 22</span>
                    </div>
                    <div className="w-full flex-none text-lg text-blue-800 font-bold leading-none">
                      CST
                    </div>
                    <div className="text-xs">Chipset</div>
                  </div>
                </div>
                <div className="border-b border-dashed border-b-2 my-5 pt-5">
                  <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
                  <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardingPass;