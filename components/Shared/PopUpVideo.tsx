"use client";
import React, { useEffect, useState } from 'react';
import VideoModal from '@/components/Shared/VideoModal';

const PopUpVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showVideo ? "hidden" : "auto";
  }, [showVideo]);

  return (
    <div>
      <h1>My Video Popup Example</h1>
      <button onClick={() => setShowVideo(true)}>Play Video</button>

      <VideoModal
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
      />
    </div>
  );
};

export default PopUpVideo;
