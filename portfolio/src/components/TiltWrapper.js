import React from "react"
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 100, (x - window.innerWidth / 2) / 100, 1.000]
const trans = (x, y, s) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 15, tension: 20, friction: 10 } }))
  return (
    <animated.div
      className={styles.Card}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <Shapes className={styles.Shapes}/>
    </animated.div>
  )
}

{/* <Card></Card> */}