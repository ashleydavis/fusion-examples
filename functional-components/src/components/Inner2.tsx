import { injectable } from "@codecapers/fusion";
import React from "react";
import { IDependency2, IDependency2_id } from "../services/Dependency2";

function Inner2(props: any, _: any, dependency2: IDependency2)  {

    return (
        <div>
            <div>
                My name: {props.name}
            </div>
            <div>
                {dependency2.getMessage()}
            </div>
        </div>
    );
}

export default injectable(Inner2, [IDependency2_id]);
