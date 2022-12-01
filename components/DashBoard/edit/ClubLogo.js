import Image from "next/image";
import React, { useState } from "react";

function ClubLogo({ setImage, pic }) {
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      getBase64(e.target.files[0], (result) => {
        console.log(result);
        setImage(result);
      });
    }
  };

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col justify-start items-center md:ml-0 sm:mr-2 md:mr-0 px-0.5 h-[250px]">
      <label
        htmlFor="uploader"
        className="boxInput my-0 md:mr-14 py-1 px-2 lg:mr-16 block m-auto w-fit text-sm md:text-[14px] font-medium cursor-pointer hover:bg-[#0873F1] transition-all">
        Change Picture
      </label>
      <div className="w-[194px] md:mr-6 mt-2.5 md:mt-3 md:w-[180px] ">
        <Image
          className="playerImage m-auto"
          src={selectedImage ? URL.createObjectURL(selectedImage) : pic}
          width={300}
          height={300}
          alt="player"
        />
      </div>

      <input
        onChange={imageChange}
        type="file"
        name="uploader"
        id="uploader"
        hidden
      />
    </div>
  );
}

export default ClubLogo;
