import React from "react";
import { identity } from "../../common/utils";
import useWindowSize from "../useWindowSize/useWindowSize";

export default function useMoveDelta(circleSize, initialPosition) {

    const [position, setPosition] = React.useState(initialPosition);
    const { windowWidth, windowHeight } = useWindowSize(); 

    const moveDelta = (dx, dy) => {
        const isTopLimit = position[1] + dy < 0;
        const isLeftLimit = position[0] + dx < 0;
        const isRightLimit = position[0] + dx > (windowWidth - circleSize)
        const isBottomLimit = position[1] + dy > (windowHeight - circleSize)

        const shouldLimit = [isTopLimit, isLeftLimit, isRightLimit, isBottomLimit].some(identity);
        
        if (shouldLimit) {
            return;
        }

        setPosition(([x, y]) => [x + dx, y + dy]);
    };

    const reset = () => {
        setPosition(initialPosition);
    }

    const randomise = () => {
        const randomWidth = Math.floor(Math.random() * (windowWidth - circleSize));
        const randomHeight = Math.floor(Math.random() * (windowHeight - circleSize));
        setPosition([randomWidth, randomHeight]);
    }

    return {
        reset,
        randomise,
        position,
        moveDelta
    }
}