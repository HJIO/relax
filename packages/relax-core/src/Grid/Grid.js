import React from 'react';
import UX from '../UXBuilder';
import classNames from 'classnames'
export default class Grid extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={classNames('ux-grid', this.props.className,UX.build(this))}>
                {this.props.children}
            </div>
        );
    }
    
}
Grid.defaultProps = {

};
