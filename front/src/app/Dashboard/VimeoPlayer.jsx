import React, { useEffect } from 'react';
import Player from '@vimeo/player';

const VimeoPlayer = ({ videoId }) => {
    console.log('videoId' +  videoId);
  useEffect(() => {
    const player = new Player('vimeo-player', {
      id: videoId,
      width: 640
    });

    player.on('play', function() {
      console.log('Played the video');
    });

    // Cleanup
    return () => {
      player.destroy();
    };
  }, [videoId]);

  return <div id="vimeo-player"></div>;
};

export default VimeoPlayer;
