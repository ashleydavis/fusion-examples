import { InjectableClass, InjectProperty } from "@codecapers/fusion";
import React from "react";
import { IDependency1, IDependency1_id } from "../services/Dependency1";

@InjectableClass()
export class Inner1 extends React.Component {

    @InjectProperty(IDependency1_id)
    dependency1!: IDependency1;

    render() {
        return (
            <div>
                {this.dependency1.getMessage()}
            </div>
        );
    }
}
