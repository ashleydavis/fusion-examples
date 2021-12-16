import { injectable } from "@codecapers/fusion";
import React from "react";
import { IDependency1, IDependency1_id } from "../services/Dependency1";

function Inner1(props: any, _: any, dependency1: IDependency1)  {

    return (
        <div>
            <div>
                My name: {props.name}
            </div>
            <div>
                {dependency1.getMessage()}
            </div>
        </div>
    );
}

export default injectable(Inner1, [IDependency1_id]);
