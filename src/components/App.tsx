import * as React from "react";
import * as styles from "../assets/css/style.css";

import { Button, ButtonToolbar } from 'react-bootstrap';

import Hello from "./Hello";
import Toolbar from './Toolbar';

class App extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return (
            <div className={styles.app}>
                <Hello compiler="TypeScsssripr" framework="React11" />
                <Hello compiler="TyScasds" framework="REA" />
                {/* <ButtonToolbar>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="info">Info</Button>
                    <Button variant="light">Light</Button>
                    <Button variant="dark">Dark</Button>
                    <Button variant="link">Link</Button>
                </ButtonToolbar> */}
                <Toolbar header="My first header" text="Collapsable content"/>
                <Toolbar header="Second header" text="Hello there" />
                <Toolbar header="Third" text="Another one!"/>
            </div>
        );
    }

}

export default App;
