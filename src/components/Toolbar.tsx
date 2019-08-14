import * as React from "react";
import * as styles from "../assets/css/style.css";

interface IToolbarProps {
    time: Date;
    temperature: number;
}

interface IToolbarState {
    isExpanded: boolean;
}

class Toolbar extends React.Component<IToolbarProps, IToolbarState> {

    constructor(props: Readonly<IToolbarProps>) {
        super(props);

        this.state = {
            isExpanded: false,
        };
    }

    // public componentDidMount(): void {

    // }

    public render(): JSX.Element {
        return (
            <div className={styles.toolbar} onClick={this.handleIsExpanded}>
                <h2>{this.props.time.toString()}</h2>
                { this.state.isExpanded &&
                    <div className={styles.collapsable}>
                        <p>{this.props.temperature}</p>
                    </div>
                }
            </div>
        );
    }

    private handleIsExpanded = (event: any) => {
        this.setState({ isExpanded: !this.state.isExpanded });
    }

}

export default Toolbar;
