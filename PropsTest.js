import React, {Component} from "react";
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

export default class PropsTest extends Component {

    constructor(props) {
        super(props);
    }

    //默认值
    static defaultProps = {
        name: "React-Native"
    }

    //传值类型限定
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        sex: PropTypes.string.isRequired,
    }

    render(): React.ReactNode {
        return (<View>
            <Text>姓名: {this.props.name}</Text>
            <Text>年龄: {this.props.age}</Text>
            <Text>性别: {this.props.sex}</Text>
        </View>);
    }

}