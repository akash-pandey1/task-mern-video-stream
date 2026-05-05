import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [video, setVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

  const baseUrl = 'http://localhost:5000';

  const uploadVideo = async () => {
    const formData = new FormData();
    formData.append('video', video);
    const response = await fetch('http://localhost:5000/api/videos/uploadStream', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    setVideoUrl(data.url);
  };

  
  return (
    <>
      <h1>Hello</h1>
       
       <input type="file" onChange={(e) => setVideo(e.target.files[0])} />
      
        <button
          type="button"
          className="counter"
          onClick={uploadVideo}
        >
          Uplaod
        </button>

        {videoUrl && (
          <video src={baseUrl + videoUrl} controls />
        )}

    </>
  )
}

export default App
