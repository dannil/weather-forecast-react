import * as React from "react";
import * as styles from "../assets/css/style.css";

interface IHelloProps {
    header: string;
    text: string;
}

interface IHelloState {
    isExpanded: boolean;
}

class Hello extends React.Component<IHelloProps, IHelloState> {

    constructor(props: Readonly<IHelloProps>) {
        super(props);

        this.state = {
            isExpanded: false,
        };
    }

    public componentDidMount(): void {

    }

    public render(): JSX.Element {
        return (
            <div className={styles.toolbar}>
                <h2 onClick={this.handleIsExpanded}>{this.props.header}</h2>
                { this.state.isExpanded && 
                    <div className={styles.collapsable}>
                        <p>{this.props.text}</p>
                    </div>
                }
            </div>
        );
    }

    private handleIsExpanded = (event: any) => {
        this.setState({ isExpanded: !this.state.isExpanded });
    }

}

export default Hello;
