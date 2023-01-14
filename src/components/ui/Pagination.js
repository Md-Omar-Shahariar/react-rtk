import _, { ceil, set } from "lodash";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pag } from "../../features/filter/filterSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.videos);
  const { pagination } = useSelector((state) => state.filter);
  const [pagi, setPagi] = useState(1);
  console.log(pagi);
  let page;
  console.log(ceil(count / 8));
  if (count < 8) {
    page = [1];
  } else {
    page = [_.range(0, ceil(count / 8))];
  }
  const handlePage = (index) => {
    console.log(index);
    setPagi(index);
    dispatch(pag(index));
  };
  console.log(page);
  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {page[0].length > 0 &&
          page[0].map((e, index) => (
            <div
              onClick={() => handlePage(index + 1)}
              className={`${
                index + 1 === pagination ? "bg-blue-500" : "bg-blue-200"
              } text-white px-4 py-1 rounded-full`}
            >
              {index + 1}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Pagination;
