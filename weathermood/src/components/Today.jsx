import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';

import PostForm from 'components/PostForm.jsx';
import {
    Button
} from 'reactstrap';
import './Today.css';

class Today extends React.Component {
    static propTypes = {
        masking: PropTypes.bool,
        searchText: PropTypes.string,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);
    }


    render() {
        const {masking} = this.props;

        document.body.className = `weather-bg bath`;
        document.querySelector('.weather-bg .mask').className = `mask ${masking ? 'masking' : ''}`;

        return (
            <div className='today'>
                <div className='weather'>
                  <h1>洗澡の美好時光</h1>
                  <p>走在校園裡摸了可愛的校浪，但看看手覺得又髒又臭？
                  如果你有意願，要不要撥空幫浪浪們洗個澡呢？<br></br>
                只需要填完以下表單，就可以完成預約囉！！<br></br>
              社團收到預約後將會回復一封信給您確認時間哦
                </p>

                </div>
                <div className='posts'>
                    <h4 className='label'><i className='fa fa-bath fa-3x' aria-hidden="true"></i>&nbsp;&nbsp;洗澡囉～～</h4>
                    <PostForm />
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    ...state.weather,
    unit: state.unit,
    ...state.post,
    searchText: state.searchText,
}))(Today);
