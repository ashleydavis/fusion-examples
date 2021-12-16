import React from "react";
import ReactDOM from "react-dom";

import { Outer } from './components/Outer';
import "./services/Dependency1";
import "./services/Dependency2";

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    An example of dependency injection with React (using class components)
                </div>
                <Outer />
            </div>
        );                
    }
}

ReactDOM.render(<App />, document.getElementById("root"));