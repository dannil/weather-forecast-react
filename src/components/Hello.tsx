import * as React from "react";
import * as styles from "../assets/css/style.css";

interface IHelloProps {
    compiler: string;
    framework: string;
}

interface IHelloState {
    isTextClicked: boolean;
}

class Hello extends React.Component<IHelloProps, IHelloState> {

    constructor(props: Readonly<IHelloProps>) {
        super(props);

        this.state = {
            isTextClicked: false,
        };
    }

    public componentDidMount(): void {
        // console.debug("Running Hello componentDidMount");
    }

    public render(): JSX.Element {
        const isTextClicked: string = (this.state.isTextClicked ? "yes" : "no");
        return (
            <div className={styles.hello}>
                <h1>Hello {this.props.compiler} and {this.props.framework}!</h1>
                <p onClick={this.handleOnClick}>Click me! Is this text clicked: {isTextClicked}</p>
            </div>
        );
    }

    private handleOnClick = () => {
        console.log("onClick");
        this.setState({ isTextClicked: !this.state.isTextClicked });
    }

}

export default Hello;
