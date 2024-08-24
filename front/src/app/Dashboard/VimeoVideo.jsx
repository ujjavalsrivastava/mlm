import React, { useEffect, useRef } from 'react';
import Player from '@vimeo/player';

const VimeoVideo = ({videoId}) => {
  const vimeoRef = useRef(null);
console.log(videoId);
  useEffect(() => {
    const player = new Player(vimeoRef.current, {
      id: videoId,
      width: 640,
    });

    player.on('play', function() {
      console.log('Video is playing');
    });

    return () => {
      player.unload();
    };
  }, []);

  return <div ref={vimeoRef}></div>;
};

export default VimeoVideo;
