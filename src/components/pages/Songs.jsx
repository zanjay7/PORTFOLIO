import React from 'react';
import '../style/Songs.css';
import { FaSpotify } from "react-icons/fa";

// Import your song covers from src/components/assets/
import song1Cover from '../assets/ambhalappuzhe.png'; 
import song2Cover from '../assets/dil_to_bachcha_hai.png';
import song3Cover from '../assets/husn.png';
import song4Cover from '../assets/paro.png';
import song5Cover from '../assets/ambarsariya.png';
import song6Cover from '../assets/jaane-na-tu.png';

const Songs = () => {
  const mySongs = [
    { 
      id: 1, 
      title: "Ambhalappuzhe", 
      artist: "M G Sreekumar, K. S. Chithra", 
      cover: song1Cover,
      link: "https://open.spotify.com/track/35L9DbXXcwVaQZ45YIeGmX?si=k9UoYRA-Qd-KtBHM2gOkdg" 
    },
    { 
      id: 2, 
      title: "Dil To Bachcha Hai", 
      artist: "Rahat Fateh Ali Khan", 
      cover: song2Cover,
      link: "https://open.spotify.com/track/3EFGRGsshk0NWidcXfhKvw?si=PdgAtz9HSs6SjcfvqL1gnA" 
    },
    { 
      id: 3, 
      title: "Husn", 
      artist: "Anuv Jain", 
      cover: song3Cover,
      link: "https://open.spotify.com/track/0TL0LFcwIBF5eX7arDIKxY?si=NoOSFZ3HT7qVUqS3Yl8wPw" 
    },
    { 
      id: 4, 
      title: "Paro", 
      artist: "Aditya Rikhari & UNPLG’d", 
      cover: song4Cover,
      link: "https://open.spotify.com/track/5ByLpy1feHoHXoM4IC4BvW?si=FCTJ75KlQA-PTBzFojVc4Q" 
    },
    { 
      id: 5, 
      title: "Ambarsariya", 
      artist: "Sona Mohapatra", 
      cover: song5Cover,
      link: "https://open.spotify.com/track/6gWW1xVbqtq9frrvPG6h26?si=YOUR_SPOTIFY_PARAM" 
    },
    { 
      id: 6, 
      title: "Jaane Na tu", 
      artist: "Bhoomi,Naaz,Saaheal", 
      cover: song6Cover,
      link: "https://open.spotify.com/track/2PNAKNrINLMHHrk5iMKNzA?si=pW5VdFk2SZGNCTWD-Pi__A" 
    }
  ];

  return (
    <div className="songs-container">
      <div className="songs-content">
        <div className="songs-header">
          <h1 className="header-main">JUST GOOD TASTE <br/><span> IN MUSIC.</span></h1>
          <div className="header-divider">
  <div className="line"></div> {/* Left Line */}
  <p className="italic-sub">more of a listener than a singer</p>
  <div className="line"></div> {/* Right Line */}
</div>
        </div>

        <div className="songs-marquee">
          <div className="marquee-content">
            {/* Repeating the array to fill the horizontal space for smooth scrolling */}
            {[...mySongs, ...mySongs, ...mySongs, ...mySongs].map((song, index) => (
              <a 
                href={song.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="song-card" 
                key={index}
              >
                <div className="spotify-badge">
                  <FaSpotify />
                </div>
                <img src={song.cover} alt={song.title} className="song-cover" />
                <div className="song-info">
                  <h3>{song.title}</h3>
                  <p>{song.artist}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="see-all-section">
  <a href="YOUR_SPOTIFY_LINK_HERE" target="_blank" rel="noopener noreferrer" className="see-all-link">
    <div className="aura-container">
      <div className="aura"></div>
      <FaSpotify className="see-icon" />
    </div>
    
   <div className="text-mask">
  <a 
    href="https://open.spotify.com/playlist/1AfY02zyYG9Oxc5t6XlQW7?si=8RS5ox05TBmgnNTy2T_Hww" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <h1 className="see-text">SEE 'EM ALL</h1>
  </a>
</div>
    <div className="underline"></div>
  </a>
</div>
      </div>
      
      
      
    </div>
  );
};

export default Songs;