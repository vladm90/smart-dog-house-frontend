import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Toggle from 'react-bootstrap-toggle';
import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css'
import { Bootstrap2Toggle } from 'react-bootstrap-toggle';

class AddUserComponent extends Component {
    constructor() {
        super();
        this.state = { toggleActive: false };
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle() {
        debugger;
        this.setState({ toggleActive: !this.state.toggleActive });
    }

    render() {
        return (
            <form>
                {/* <Toggle
                    onClick={this.onToggle}
                    on={<p>Pornit</p>}
                    off={<p>Oprit</p>}
                    size="xs"
                    offstyle="danger"
                    active={this.state.toggleActive}
                /> */}
            </form>
        )
    }

}

export default AddUserComponent;