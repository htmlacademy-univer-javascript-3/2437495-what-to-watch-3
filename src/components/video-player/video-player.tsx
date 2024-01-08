import React, { useEffect, useRef } from 'react';


type VideoPlayerProps = {
  src: string;
  controls?: boolean;
  poster: string;
  isActive: boolean;
}

const VIDEO_PLAY_DELAY_MS = 1000;


const VideoPlayer: React.FC<VideoPlayerProps> = ({ src,controls = false, poster,isActive }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if(isActive){
      setTimeout(() => {
        ref.current?.play();
      }, VIDEO_PLAY_DELAY_MS);
    } else{
      if(ref.current){
        ref.current.currentTime = 0;
      }
    }

  }, [isActive]);

  return (
    <video ref={ref} src={src} poster={poster} controls={controls} className="player__video" loop muted>
      <source src={src} type="video/mp4" />
    </video>
  );
};


export { VideoPlayer };
