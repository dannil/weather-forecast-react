import * as React from "react";
import * as ReactDOM from "react-dom";
import * as styles from "./assets/css/style.css";

import Hello from "./components/Hello";

class App extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return (
            <div className={styles.app}>
                <Hello compiler="TypeScripr" framework="React11" />
                <Hello compiler="TyScasds" framework="REA" />
            </div>
        );
    }

}

ReactDOM.render(<App />, document.getElementById("root"));
