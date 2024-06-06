import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styled from "styled-components"
import Earth from "./components/earth";

const CanvasContainer = styled.div`
width: 100%,
height: 100%
`;

function App() {

  return <CanvasContainer className="bg-[#01040c] h-screen">
    <Canvas className="">
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
    </Canvas>
  </CanvasContainer>
}

export default App
