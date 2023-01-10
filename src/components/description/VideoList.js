import React, { useEffect } from "react";
import SingleVideo from "./SingleVideo";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideo } from "../../features/relatedVideos/relatedVideoSlice";
import Loading from "../ui/Loading";

const VideoList = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();
  const { relatedVideo, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideo
  );

  useEffect(() => {
    dispatch(fetchRelatedVideo({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);
  let content = null;

  if (isLoading) content = <Loading></Loading>;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && relatedVideo.length > 0) {
    content = relatedVideo.map((video) => (
      <SingleVideo key={video.id} video={video}></SingleVideo>
    ));
  }
  if (!isLoading && !isError && relatedVideo.length === 0) {
    content = <div className="col-span-12">No Related Videos</div>;
  }
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      {content}
    </div>
  );
};

export default VideoList;
