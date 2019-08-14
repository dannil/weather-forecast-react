import * as React from "react";
import * as styles from "../assets/css/style.css";

import { Button, ButtonToolbar } from "react-bootstrap";

import IWeather from "../models/Weather";
import Hello from "./Hello";
import Toolbar from "./Toolbar";

import weatherJson from "../assets/weather_mocked.json";

// const json: IWeather = weatherJson;

// interface IAppProps {

// }

interface IAppState {
    toolbars: JSX.Element[];
}

class App extends React.Component<{}, IAppState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            toolbars: null,
        };
    }

    public componentDidMount(): void {
        const toolbars: JSX.Element[] = weatherJson.daily.data.map((weather) => {
            const time = new Date(weather.time * 1000);
            return (
                <Toolbar time={time} temperature={weather.temperatureMax} />
            );
        });
        this.setState({ toolbars });
    }

    public render(): JSX.Element {
        return (
            <div className={styles.app}>
                <Hello compiler="TypeScsssripr" framework="React11" />
                <Hello compiler="TyScasds" framework="REA" />
                <Button variant="primary">Primary</Button>
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
                {/* <Toolbar header="My first header" text="Collapsable content"/>
                <Toolbar header="Second header" text="Hello there" />
                <Toolbar header="Third" text="Another one!"/> */}
                {this.state.toolbars}
            </div>
        );
    }

}

export default App;
