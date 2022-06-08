import React from "react";
import classes from './Loader.module.css'

export default function Loader() {

    const { loader } = classes;

    return (
        <div className={loader}>
            <h1>Loading...</h1>
        </div>
    )
}