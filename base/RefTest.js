import React, {Component} from "react";
import {Text} from 'react-native';

export default class RefTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 100,
        }
    }

    getSize() {
        return this.state.size;
    }

    render(): React.ReactNode {
        return <Text>我是Blend</Text>
    }

}