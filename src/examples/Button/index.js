/**
 * Created by lilei on 2018/3/21.
 */
import React, {Component} from 'react';
import Button from '@/components/Button'

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Button type="Primary">Primary</Button>
                <Button style={{marginLeft:10}}>Default</Button>
                <Button style={{marginLeft:10}} type="Dashed">Dashed</Button>
                <Button style={{marginLeft:10}} type="Danger">Danger</Button>
            </div>
        )
    }
}