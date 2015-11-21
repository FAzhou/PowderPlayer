import React from 'react';
import {
    ipcRenderer
}
from 'electron';
import Modal from './Modal';
import Message from './Message';
import {
    RouteContext
}
from 'react-router';

export
default React.createClass({

    mixins: [RouteContext],

    componentWillMount() {
        ipcRenderer.send('app:startup', new Date().getTime());
    },
    render() {
        return (
            <div id="main">
              {React.cloneElement(this.props.children, {query: this.props.query})}
              <Modal />
              <Message />
            </div>
        );
    }
});