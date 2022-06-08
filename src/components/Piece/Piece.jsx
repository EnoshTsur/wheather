import React from 'react';
import { multipleClasses, toPx } from '../../common/utils';
import useTemerature from '../../hooks/useTemperature/useTemperature';
import classes from './Piece.module.css'

export default function Piece({ x, y, circleSize }) {

    const { hoverStyle, onMouseEnterHandler, onMouseLeaveHandler } = useTemerature();

    const classNames = multipleClasses(classes);
    const circleSizePx = toPx(circleSize);

    return (
        <div
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
            style={{
                left: x,
                top: y,
                width: circleSizePx,
                height: circleSizePx,
                ...hoverStyle,
            }}
            className={classNames}
        >
        </div>
    );
}
