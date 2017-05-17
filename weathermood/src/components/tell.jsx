import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';

import PostForm from 'components/PostForm.jsx';
import Cell from 'components/cell.jsx';
import {
    Button
} from 'reactstrap';
import './Today.css';

class Tell extends React.Component {
    static propTypes = {
        masking: PropTypes.bool,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);
    }


    render() {
        const {masking} = this.props;

        document.body.className = `weather-bg tell`;
        document.querySelector('.weather-bg .mask').className = `mask ${masking ? 'masking' : ''}`;

        return (
            <div className='today'>
                <div className='weather'>
                  <br></br>
                  <h1>校浪事件通報</h1>
                  <br></br>
                  <p>校園裡有不少狗狗，總有機會遇到突發狀況讓您無法處理，如果您有任何問題可以通報給我們，我們會以最快的時間回覆您，謝謝！</p>
                <br></br><br></br><br></br>
                </div>
                <div className='posts'>
                  <Cell />
                </div>
            </div>
        );
    }
}

export default connect(state => ({
}))(Tell);
