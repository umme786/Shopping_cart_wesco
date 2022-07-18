import React from "react"

const Banner = () => {

    return (
        <div className="">
        <div className="">
          <div className="flex flex-wrap items-center">
              
          <div className="w-full">
              <video loop autoPlay style={{width:"100%"}}>
        <source
          src="images/Banner_video.mp4" className="object-cover"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
            </div>
            
          </div>
        </div>
      </div>
        );
    }
    
    export default Banner;
