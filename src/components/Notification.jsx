import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { BiFilterAlt } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoNotificationsCircleSharp } from "react-icons/io5";

const NotificationPage = () => {
  return (
    <>
      <div className="p-10 shadow-md h-44 mx-auto">
        <h2 className="font-bold text-xl text-left md:ml-16 lg:ml-28 xl:ml-40">
          Notifikasi
        </h2>
        <div className="flex justify-center md:justify-start">
          <Link
            to={"/"}
            className="flex items-center bg-customBlue2 text-white px-4 py-3 rounded-xl w-full md:w-8/12 md:ml-20 lg:ml-32 xl:ml-44 mt-8 ml-4 hover:bg-customBlue1"
          >
            <FiArrowLeft size={24} className="mr-2" />
            Beranda
          </Link>
          <button
            className="flex items-center outline outline-customBlue2 px-4 py-1 rounded-full ml-6 mt-10"
            style={{ height: "fit-content" }}
          >
            <BiFilterAlt className="text-gray-400" size={24} />
            <span className="ml-2">Filter</span>
          </button>
          <AiOutlineSearch
            className="flex items-center mt-10 ml-4 text-customBlue2 shrink-0"
            size={32}
          />
        </div>
      </div>

      <div className="flex justify-between mt-10 mx-auto w-10/12 md:w-8/12 pb-4">
        <div className="flex">
          <IoNotificationsCircleSharp
            className="text-customBlue2/50 mr-3 shrink-0"
            size={32}
          />
          <div>
            <p className="text-gray-400">Promosi</p>
            <p className="text-lg">Dapatkan Potongan 50% Tiket!</p>
            <p className="text-gray-400">Syarat dan ketentuan berlaku!</p>
          </div>
        </div>
        <div className="flex shrink-0">
          <p>20 Maret, 14:04</p>
          <div className="w-4 h-4 bg-red-500 rounded-full ml-2 mt-1"></div>
        </div>
      </div>

      <hr className="w-full md:w-8/12 mx-auto border-b-1 border-gray-200" />

      <div className="flex justify-between mt-4 mx-auto w-10/12 md:w-8/12 pb-4">
        <div className="flex">
          <IoNotificationsCircleSharp
            className="text-customBlue2/50 mr-3 shrink-0"
            size={32}
          />
          <div>
            <p className="text-gray-400">Notifikasi</p>
            <p className="text-lg">
              Terdapat perubahan pada jadwal penerbangan kode booking 45GT6. Cek
              jadwal perjalanan Anda disini!
            </p>
          </div>
        </div>
        <div className="flex shrink-0">
          <p>5 Maret, 14:04</p>
          <div className="w-4 h-4 bg-green-500 rounded-full ml-2 mt-1"></div>
        </div>
      </div>
    </>
  );
};

export default NotificationPage;