import React from "react";

const BannerInfoMovie = ({ data, videos }) => {
  const bgImg = ` ${import.meta.env.VITE_IMG_URL}${data.backdrop_path}`;
  return (
    <>
      {/* banner movie -> */}
      <div
        className="w-full min-h-[540px] text-white flex items-center justify-center bg-top bg-no-repeat bg-cover relative p-10"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-80" />
        <div className="flex justify-between w-[80%] z-20 items-center">
          <div className=" flex flex-col gap-4 basis-3/4">
            <h1 className="font-mono text-5xl text-wrap">
              {data.original_title || data.name}
            </h1>
            <p className="mt-1 ">
              {data.release_date} (VN) -{" "}
              {data.genres?.map((type) => {
                return type.name + " - ";
              })}
              {data.origin_country}
            </p>
            <p className="font-bold text-yellow-400 text-xl leading-10">
              Rating: {Number(data.vote_average).toFixed(1)}/10
            </p>
            <div className="flex gap-3">
              <button className="p-3 rounded-md bg-red-600 hover:bg-red-800 transition-all font-bold place-self-start ">
                Trailer <i className="fa fa-video"></i>
              </button>
              <button className="p-3 rounded-md bg-red-600 hover:bg-red-800 transition-all font-bold place-self-start ">
                Xem phim <i className="fa fa-angle-right"></i>
              </button>
              {/* <button
                title="Thêm vào danh sách yêu thích"
                className="h-[50px] w-[50px] rounded-full bg-red-600 hover:bg-red-800 transition-all"
              >
                <i className="fa fa-heart"></i>
              </button> */}
            </div>
          </div>
          <div className="basis-1/4 ">
            <img
              src={`${import.meta.env.VITE_IMG_URL}${data.poster_path}`}
              alt=""
              className="object-cover rounded-md min-w-60"
            />
          </div>
        </div>
      </div>
      {/* information movie -> */}
      <div className="mx-20 mt-10">
        <p className="text-gray-500">{data.overview}</p>
      </div>
    </>
  );
};

export default BannerInfoMovie;