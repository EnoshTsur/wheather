import React from "react";
import { multipleClasses } from "../../common/utils";
import classes from './Controls.module.css';

export default function Controls({ moveDelta, reset, randomise }) {

    const { controlsWrapper, btnArrow, btnLeft, btnPanel } = classes;
    const arrowLeft = multipleClasses({ btnArrow, btnLeft })

    return (
        <div className={controlsWrapper}>
            <button
                className={btnArrow}
                onClick={() => moveDelta(0, -100)}>
                U
            </button>
            <br />
            <button
                className={arrowLeft}
                onClick={() => moveDelta(-100, 0)}
            >
                L
            </button>
            <button
                className={btnArrow}
                onClick={() => moveDelta(100, -0)}
            >
                R
            </button>
            <br />
            <button
                className={btnArrow}
                onClick={() => moveDelta(0, 100)}>
                D
            </button>
            <div className={btnPanel}>
            <button
                onClick={reset}>
                Reset
            </button>
            <button
                onClick={randomise}>
                Randomise
            </button>
            </div>
        </div>
    );
}