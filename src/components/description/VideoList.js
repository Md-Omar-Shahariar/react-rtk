import React, { useEffect } from "react";
import SingleVideo from "./SingleVideo";
import { useDispatch } from "react-redux";
import { fetchRelatedVideo } from "../../features/relatedVideos/relatedVideoSlice";

const VideoList = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelatedVideo({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      <SingleVideo></SingleVideo>
    </div>
  );
};

export default VideoList;
