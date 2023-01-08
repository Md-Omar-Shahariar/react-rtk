import React, { useEffect } from "react";

import Player from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";

import VideoList from "../components/description/VideoList";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchVideo } from "../features/video/videoSlice";

const Video = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const { video } = useSelector((state) => state.video);
  const { link, title } = video;

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            <Player link={link} title={title}></Player>

            <VideoDescription video={video}></VideoDescription>
          </div>

          <VideoList></VideoList>
        </div>
      </div>
    </section>
  );
};

export default Video;
