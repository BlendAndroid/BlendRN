import React, {Component, PureComponent} from 'react'
import {Text, TouchableOpacity} from 'react-native'

export default class Parent extends Component {
    constructor() {
        super();
        this.state = {}
    }

    //父组件定义的方法
    onClickSon = (msgFromSon) => {
        console.log(msgFromSon)
    }

    render(): React.ReactNode {
        return (
            <Son myClick={this.onClickSon}/>
        )
    }

}


class Son extends PureComponent {

    render(): React.ReactNode {
        return (
            <TouchableOpacity onPress={() => this.props.myClick('I am your son')}>
                <Text> BlendAndroid </Text>
            </TouchableOpacity>
        )
    }

}