import React from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    Input,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form,
    FormGroup,
    Label,
    FormText,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import {getMoodIcon} from 'utilities/weather.js';
import {createPost, input, inputDanger, toggleMood, setMoodToggle, selectMood ,toggleDog ,checkDog ,CheckYes, toggleName,selectDog,inputName,inputEmail,inputDate,inputTime,sendmail} from 'states/post-actions.js';

import './PostForm.css';
    var isit = '1';
class PostForm extends React.Component {
    static propTypes = {
        inputValue: PropTypes.string,
        inputDanger: PropTypes.bool,
        moodToggle: PropTypes.bool,
        mood: PropTypes.string,
        dispatch: PropTypes.func,

        name: PropTypes.string,
        nameDnager:PropTypes.bool,
        mail:PropTypes.string,
        mailDanger:PropTypes.bool,
        date:PropTypes.string,
        dateDanger:PropTypes.bool,
        time:PropTypes.string,
        timeDanger:PropTypes.bool,



        dogToogle: PropTypes.bool,
        dogCheck: PropTypes.string,
        isCheck: PropTypes.string,
        nameToggle: PropTypes.bool,
        dogname: PropTypes.string,

    };


    constructor(props) {
        super(props);

        this.inputEl = null;
        this.moodToggleEl = null;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
        this.handleMoodToggle = this.handleMoodToggle.bind(this);

        this.handlePost = this.handlePost.bind(this);
        this.handletest = this.handletest.bind(this);

        /*carelife*/
        this.handleDogToggle = this.handleDogToggle.bind(this);
        this.handleNameToggle = this.handleNameToggle.bind(this);
        this.handleDogSelect = this.handleDogSelect.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.handleChenage = this.handleChenage.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleTime = this.handleTime.bind(this);

    }

    render() {
        const {inputValue, moodToggle, mood,dogToggle, dogCheck , isCheck ,nameToggle , dogname} = this.props;
        const inputDanger = this.props.inputDanger ? 'has-danger' : '';

        return (
            <div className='post-form'>

              <div>
                <Alert>
                <InputGroup>
                  <InputGroupAddon tag={Link} to='/post'>暱稱</InputGroupAddon>
                  <Input value={this.props.name} onChange={this.handleName}/>
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon>信箱</InputGroupAddon>
                  <Input type="email" value={this.props.mail} onChange={this.handleEmail}/>
                </InputGroup>

                  <div id="time">
                  <InputGroupAddon>日期</InputGroupAddon>
                  </div>
                  <div id="time" >
                  <Input type="date" name="date" id="exampleDate" value={this.props.date} onChange={this.handleDate} />
                    </div>
                      <div id="time">
                    <Input type="select" name="select" id="exampleSelect" value={this.props.time} onChange={this.handleTime}>
                      <option>早上</option>
                      <option>中午</option>
                      <option>下午</option>
                    </Input>
                    </div>
                    <br></br>

                    <div id="time">
                    <InputGroupAddon>犬隻</InputGroupAddon>
                    </div>
                    <ButtonDropdown type='buttom' isOpen={dogToggle} toggle={this.handleDogToggle} style={{opacity:'1'}}>
                        <DropdownToggle className='mood-toggle' type='button' caret color="secondary">
                            {
                                dogCheck === 'na' ? '是否指定' : dogCheck
                            }&nbsp;<i className={getMoodIcon('na')}></i>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem type='button' onClick={()=> this.handlecheck('YES')}><i className={getMoodIcon('Clear')}></i>&nbsp;&nbsp;YES</DropdownItem>
                            <DropdownItem type='button' onClick={()=> this.handlecheck('NO')} ><i className={getMoodIcon('Clouds') }></i>&nbsp;&nbsp;NO</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>

                    <ButtonDropdown type='buttom' isOpen={nameToggle} style={{opacity:isCheck}} toggle={this.handleNameToggle}>
                        <DropdownToggle className='mood-toggle' type='button' caret color="secondary">
                            {
                                dogname === 'na' ? '選愛寵' : dogname
                            }&nbsp;<i className={getMoodIcon('na')}></i>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem type='button' onClick={()=>this.handleDogSelect('小丸子')} ><i className={getMoodIcon('Clear')}></i>&nbsp;&nbsp;小丸子</DropdownItem>
                            <DropdownItem type='button' onClick={()=>this.handleDogSelect('斑斑')} ><i className={getMoodIcon('Clouds') }></i>&nbsp;&nbsp;斑斑</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    <br></br>
                    <InputGroup>
                    <InputGroupAddon>備註</InputGroupAddon>
                    <Input className='input time' type='textarea' getRef={el => {this.inputEl = el}} value={this.props.inputValue} onChange={this.handleInputChange} placeholder="What's on your mind?"></Input>
                    </InputGroup>

                    <Button className='btn-post align-self-end' color="info" onClick={this.handleSend}>Send</Button>
                    </Alert>

              </div>


            </div>
        );
    }


    handleName(e){
      let name = e.target.value;
      this.props.dispatch(inputName(name));

    }

    handleEmail(e){
      let mail = e.target.value;
      this.props.dispatch(inputEmail(mail));

    }

    handleDate(e){
      let date = e.target.value;
      this.props.dispatch(inputDate(date));

    }

    handleTime(e){
      let time = e.target.value;
      this.props.dispatch(inputTime(time));

    }



    handletest(e){
      let num = e.target.value;
        console.log(num);
    }

    handlecheck(choose){

      this.props.dispatch(checkDog(choose));

      this.handleChenage();
    }

    handleChenage(){
      if (this.props.dogCheck ==='NO' || this.props.dogCheck==='na')
        this.props.dispatch(CheckYes('1'));

      else if (this.props.dogCheck ==='YES'){
        this.props.dispatch(selectDog('na'));
        this.props.dispatch(CheckYes('0'));
      }
    }

    handleDogSelect(dog){
      this.props.dispatch(selectDog(dog));
    }

    handleSend(){
      console.log(this.props.name);
      console.log(this.props.mail);
      console.log(this.props.date);
      console.log(this.props.time);
      console.log(this.props.dogname);
      console.log(this.props.inputValue);
      this.props.dispatch(inputName(''));
      this.props.dispatch(inputEmail(''));
      this.props.dispatch(inputDate(''));
      this.props.dispatch(inputTime(''));
      this.props.dispatch(input(''));
      this.props.dispatch(CheckYes('0'));
      this.props.dispatch(checkDog('na'));
      this.props.dispatch(selectDog('na'));

      this.props.dispatch(sendmail(this.props.name,this.props.mail,this.props.date,this.props.time,this.props.dogname,this.props.inputValue));
    }

    handleDropdownSelect(mood) {
        this.props.dispatch(selectMood(mood));
    //    console.log(this.props.mood);
    }

    handleInputChange(e) {
        const text = e.target.value
        this.props.dispatch(input(text));
        if (text && this.props.inputDanger) {
            this.props.dispatch(inputDanger(false));
        }
    }

    handleDogToggle(e){
      this.props.dispatch(toggleDog());
    }

    handleNameToggle(e){
      this.props.dispatch(toggleName());
    }

    handleMoodToggle(e) {
        this.props.dispatch(toggleMood());
    }

    handlePost() {
      console.log(this.props.mood);
        if (this.props.mood === 'na') {
            this.props.dispatch(setMoodToggle(true));
            return;
        }
        if (!this.props.inputValue) {
            this.props.dispatch(inputDanger(true));
            return;
        }

        this.props.dispatch(createPost(this.props.mood, this.props.inputValue));
        this.props.dispatch(input(''));
        this.props.dispatch(selectMood('na'));
    }
}

export default connect(state => ({
    ...state.postForm
}))(PostForm);
