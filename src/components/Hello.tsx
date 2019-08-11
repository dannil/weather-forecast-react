import * as React from "react";
import * as styles from "../assets/css/style.css";

interface IHelloProps {
    compiler: string;
    framework: string;
}

interface IHelloState {
    isLoaded: boolean;
}

class Hello extends React.Component<IHelloProps, IHelloState> {

    constructor(props: Readonly<IHelloProps>) {
        super(props);

        this.state = {
            isLoaded: false,
        };
    }

    public componentDidMount(): void {
        // console.debug("Running Hello componentDidMount");
    }

    public render(): JSX.Element {
        return (
            <div className={styles.hello}>
                <h1>Hello {this.props.compiler} and {this.props.framework}!</h1>
                <p>My loaded state is {String(this.state.isLoaded)}</p>
            </div>
        );
    }

}

export default Hello;
