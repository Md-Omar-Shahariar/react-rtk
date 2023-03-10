import React, { useEffect } from "react";
import VideoGridItem from "./VideoGridItem";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../ui/Loading";
import { fetchVideos } from "../../features/videos/videosSlice";

const VideoGrid = () => {
  const {
    tags,
    searchText: search,
    pagination,
  } = useSelector((state) => state.filter);
  const {
    videos,

    isLoading,
    isError,
    error,
  } = useSelector((state) => state.videos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideos({ tags, search, pagination }));
  }, [dispatch, tags, search, pagination]);
  let content;
  if (isLoading) content = <Loading></Loading>;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && videos.length > 0) {
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video}></VideoGridItem>
    ));
  }
  if (!isLoading && !isError && videos.length === 0) {
    content = <div className="col-span-12">No Videos Found</div>;
  }
  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {/* <!-- single video --> */}
          {content}

          {/* <!-- error section
                     --> */}
        </div>
      </section>
    </section>
  );
};

export default VideoGrid;
