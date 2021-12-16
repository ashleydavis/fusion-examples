import { InjectableClass, InjectProperty } from "@codecapers/fusion";
import React from "react";
import { IDependency2, IDependency2_id } from "../services/Dependency2";

@InjectableClass()
export class Inner2 extends React.Component {

    @InjectProperty(IDependency2_id)
    dependency2!: IDependency2;

    render() {
        return (
            <div>
                {this.dependency2.getMessage()}
            </div>
        );
    }
}
