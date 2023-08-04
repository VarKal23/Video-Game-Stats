import React from 'react';
import Marquee from 'react-fast-marquee';

const LifeTimeStatsBar = () => {
  return (
    <div className="moving-text-bar">
      <Marquee direction="left">
        Lifetime Xbox Stats: 13,050 Gamerscore | 75 Games Played | 146 Followers | Favorite Games: Rainbow Six Siege, Call of Duty: Modern Warfare 3, Destiny (Click on the game to see more stats)   
      </Marquee>
    </div>
  );
};

export default LifeTimeStatsBar;
