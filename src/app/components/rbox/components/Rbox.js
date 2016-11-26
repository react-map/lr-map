import React, { Component, PropTypes } from 'react';
import styles from './rbox.css';

/**
 * @author sylvenas
 * @doc 左侧搜索结果展示面板
 * @class Rbox
 * @extends {Component}
 */
class Rbox extends Component {
    /**
     * Creates an instance of Rbox.
     * 
     * @param {Object} props
     * @state show->控制Rbox是否展示,true展示,false隐藏,默认true
     * @memberOf Rbox
     */
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }
    /**
     * @doc 点击panCtrl反转show,切换Rbox的展示与隐藏
     * @memberOf Rbox
     */
    toggle() {
        this.setState({
            show: !this.state.show
        })
    }
    /**
     * 
     * 
     * @returns
     * 
     * @memberOf Rbox
     */
    render() {
        console.log('rbox', this.props.child);
        return (
            <div id="rbox" className={this.state.show ? styles.rboxShow : styles.rboxNone}>
                
                <div className={styles.panCtrl} onClick={() => this.toggle()}>
                    <i className={styles.fa + ' ' + (this.state.show ? styles.faChevronUp : styles.faChevronDown)} id="contractionInsideBtnUp"></i>
                </div>
            </div>
        );
    }
}

Rbox.propTypes = {
    
};

export default Rbox;