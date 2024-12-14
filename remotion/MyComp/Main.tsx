import { z } from "zod";
import {
  AbsoluteFill,
  Sequence,

} from "remotion";
import { CompositionProps } from "../../types/constants";
import { loadFont,  } from "@remotion/google-fonts/Inter";
import React from "react";
import { TextFade } from "./TextFade";




loadFont();

const container: React.CSSProperties = {
  backgroundColor: "white",
};



export const Main = ({ username }: z.infer<typeof CompositionProps>) => {
  // const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={container}>
      <div>
        <Sequence from={0} durationInFrames={Infinity}>
          <Image1/>
        </Sequence>
        <Sequence from={50} durationInFrames={Infinity}>
        <img
            src={"/2.jpg"}
            alt="Background"
            
            style={{
              width: "100%",
              height: "100%", 
              objectFit: "cover",
            }}
          />
        </Sequence>
        <Sequence from={100} durationInFrames={Infinity}>
        <img
            src={"/3.jpg"}
            alt="Background"
            style={{
              width: "100%",
              height: "100%", 
              objectFit: "cover",
            }}
          />
        </Sequence>
        <Sequence from={150} durationInFrames={Infinity}>
        <TextFade>
            <div style={{width:"80vw", backgroundColor:"purple",borderRadius:"10px",textAlign:"center"}}>
            <h1 style={{color:"white",fontSize:"100px"}}>Place your Orders Today<br/>at {username}</h1>

            </div>
          </TextFade>
        <img
            src={"/4.jpg"}
            alt="Background"
            style={{
              width: "100%",
              height: "100%", 
              objectFit: "cover",
            }}
          />

        </Sequence>
      </div>
      {/* <h1 style={{zIndex:"100"}}>{frame}</h1> */}

    </AbsoluteFill>
  );
};

const Image1=()=>{
  return(
    <>
     <TextFade>
            <div style={{width:"80vw", backgroundColor:"purple",borderRadius:"10px",textAlign:"center"}}>
            <h1 style={{color:"white",fontSize:"100px"}}>FLAT 500 OFF<br/>on Men Tshirts</h1>

            </div>
          </TextFade>
        <img
            src="/1.jpg"
            alt="Background"
            style={{
              width: "100%",
              height: "100%", 
              objectFit: "cover",
            }}
          />
    </>
  )
}
