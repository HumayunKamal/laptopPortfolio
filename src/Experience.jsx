import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  Text,
  useGLTF,
} from "@react-three/drei";

// .env
const PORTFOLIO_LINK = import.meta.env.VITE_PORTFOLIO_LINK;
const PORTFOLIO_DESC = import.meta.env.VITE_PORTFOLIO_DESC;

export default function Experience() {
  const laptop = useGLTF("/macbook.gltf");

  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      <Environment preset="city" />

      <color args={["#1d1836"]} attach="background" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          {/* Screen shadow on Keyboard */}
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={20}
            color={"blue"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          {/* Axes Helper */}
          {/* <axesHelper args={[1]} position={-1.5} /> */}

          {/* Laptop */}
          <primitive object={laptop.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src={PORTFOLIO_LINK} title={PORTFOLIO_DESC}></iframe>
            </Html>
          </primitive>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign="center"
          >
            Humayun Kamal
          </Text>
        </Float>
      </PresentationControls>

      {/* Shadow below the Laptop */}
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}

useGLTF.preload("./macbook.gltf");
