import * as React from "react";
import * as styles from "../assets/css/style.css";

import Hello from "./Hello";

class App extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return (
            <div className={styles.app}>
                <Hello compiler="TypeScsssripr" framework="React11" />
                <Hello compiler="TyScasds" framework="REA" />
            </div>
        );
    }

}

export default App;
