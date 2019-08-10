import * as React from "react";
import * as ReactDOM from "react-dom";
import * as style from "./css/style.css";

import Hello from "./components/Hello";

class App extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return (
            <div className={style.app}>
                <Hello compiler="TypeScripr" framework="React11" />
                <Hello compiler="TySc561sddss" framework="REA" />
            </div>
        );
    }

}

ReactDOM.render(<App />, document.getElementById("root"));
