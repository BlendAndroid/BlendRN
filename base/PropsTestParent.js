import React, {Component} from "react";
import PropsTest from "./PropsTest";

export default class PropsTestParent extends Component {

    constructor() {
        super();
    }

    render(): React.ReactNode {
        return (
            <PropsTest age={29} sex="男"/>
        );
    }

}