import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";
import { useRouter } from "next/router";

const DeleteButton = () => {

  const onClick = useCallback(() => {
    // Xử lý logic khi nút được click
    console.log("Button clicked!");
  }, []); // Truyền mảng dependencies rỗng nếu không có dependencies nào được sử dụng.

  return (
    <div>
      <div
        onClick={onClick}
        className="
          mt-6
          lg:hidden 
          rounded-full 
          h-14
          w-14
          p-4
          flex
          items-center
          justify-center 
          bg-sky-500 
          hover:bg-opacity-80 
          transition 
          cursor-pointer
        "
      >
        <FaFeather size={24} color="white" />
      </div>
      <div
        onClick={onClick}
        className="
          mt-6
          hidden 
          lg:block 
          px-4
          py-2
          rounded-full
          bg-sky-500
          hover:bg-opacity-90 
          cursor-pointer
        "
      >
        <p
          className="
            hidden 
            lg:block 
            text-center
            font-semibold
            text-white 
            text-[20px]
          "
        >
          Delete
        </p>
      </div>
    </div>
  );
};

export default DeleteButton;
