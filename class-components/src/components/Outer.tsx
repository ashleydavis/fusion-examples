import React from "react";
import { Inner1 } from "./Inner1";
import { Inner2 } from "./Inner2";

export class Outer extends React.Component {
    render() {
        return (
            <div>
                <Inner1 />
                <Inner2 />
            </div>
        );
    }
}