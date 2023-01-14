import _, { ceil } from "lodash";
import React from "react";
import { useSelector } from "react-redux";

const Pagination = () => {
  const { videos } = useSelector((state) => state.videos);
  let page;
  console.log(videos.length);
  if (videos.length < 8) {
    page = [1];
  } else {
    page = [_.range(1, ceil(videos.length / 8))];
  }
  console.log(page);
  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {page[0].length > 0 &&
          page[0].map((e, index) => (
            <div className="bg-blue-300 text-white px-4 py-1 rounded-full">
              {index + 1}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Pagination;
