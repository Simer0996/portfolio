import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import CarShow from "./CarShow"

const Header = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas shadows>
          <CarShow />
        </Canvas>
      </Suspense>
    </>
  )
}

export default Header
