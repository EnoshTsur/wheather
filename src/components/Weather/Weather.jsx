import React from 'react'
import useMoveDelta from '../../hooks/useMoveDelta/useMoveDelta';
import Controls from '../Controls/Controls';
import Piece from '../Piece/Piece';

export default function Weather({ circleSize=100 , initialPosition=[0, 0]}) {

    const { position, moveDelta, reset, randomise } = useMoveDelta(circleSize, initialPosition);

    const controlFunctions = { moveDelta, reset, randomise }

    const [x, y] = position;

    return (
        <>
            <Piece x={x} y={y} circleSize={circleSize} />
            <Controls {...controlFunctions} />
        </>
    )
}
