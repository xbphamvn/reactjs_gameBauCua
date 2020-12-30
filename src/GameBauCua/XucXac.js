import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function XucXac(props) {

    const [propsDice, set] = useSpring(() => ({
        to: {
            xyz: [3600, 3600, 3600]
        },
        from: {
            xyz: [0, 0, 0]
        },
        config: {
            duration: 1000
        },
        reset: true
    }))

    set({ xyz: [3600, 3600, 3600] })

    return (
        <>
            <div className="scene">
                <animated.div className="cube" style={{
                    transform: propsDice.xyz.interpolate((x, y, z) => `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)
                }} >
                    <img className="cube__face cube__face--front" src={props.xucXacItem.imgSrc} alt={props.xucXacItem.id} />
                    <img className="cube__face cube__face--right" src={props.xucXacItem.imgSrc} alt={props.xucXacItem.id} />
                    <img className="cube__face cube__face--back" src={props.xucXacItem.imgSrc} alt={props.xucXacItem.id} />
                    <img className="cube__face cube__face--left" src={props.xucXacItem.imgSrc} alt={props.xucXacItem.id} />
                    <img className="cube__face cube__face--top" src={props.xucXacItem.imgSrc} alt={props.xucXacItem.id} />
                    <img className="cube__face cube__face--bottom" src={props.xucXacItem.imgSrc} alt={props.xucXacItem.id} />
                </animated.div>
            </div>
        </>
    )
}
