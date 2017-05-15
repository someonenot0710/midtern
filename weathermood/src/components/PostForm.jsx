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
    InputGroupAddon,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import {getMoodIcon} from 'utilities/weather.js';
import {input, inputDanger,toggleDog ,checkDog ,CheckYes, toggleName,selectDog,inputName,inputEmail,inputDate,inputTime,sendmail,toggleModal} from 'states/post-actions.js';

import './PostForm.css';
var count=0;
class PostForm extends React.Component {
    static propTypes = {
        inputValue: PropTypes.string,
        inputDanger: PropTypes.bool,
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
        modal: PropTypes.bool

    };


    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
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
        this.handlemodal = this.handlemodal.bind(this);
    }

    render() {
        const {inputValue, moodToggle, mood,dogToggle, dogCheck , isCheck ,nameToggle , dogname,modal} = this.props;
  //      const inputDanger = this.props.inputDanger ? 'has-danger' : '';

        return (
            <div className='post-form'>

              <div>
                <Alert color="warning">

                <InputGroup className='line'>
                  <InputGroupAddon tag={Link} to='/post'>暱稱</InputGroupAddon>
                  <Input value={this.props.name} onChange={this.handleName}/>
                </InputGroup>

                <InputGroup className='line'>
                  <InputGroupAddon>信箱</InputGroupAddon>
                  <label htmlFor="inputEmail" className="control-label"></label>
                  <Input type="email" value={this.props.mail}  onChange={this.handleEmail}/>
                </InputGroup>

                  <div id="time">
                  <InputGroupAddon>日期</InputGroupAddon>
                  </div>
                  <div id="time">
                  <Input type="date" name="date" id="exampleDate" value={this.props.date} onChange={this.handleDate} />
                    </div>
                      <div id="time">
                    <Input type="select" name="select" id="exampleSelect" value={this.props.time} onChange={this.handleTime}>
                      <option disabled>時段</option>
                      <option>早上</option>
                      <option>中午</option>
                      <option>下午</option>
                    </Input>
                    </div>
                    <br></br>

                    <div id="time">
                    <InputGroupAddon>犬隻</InputGroupAddon>
                    </div>
                    <ButtonDropdown className="sel" type='buttom' isOpen={dogToggle} toggle={this.handleDogToggle} style={{opacity:'1'}}>
                        <DropdownToggle className='mood-toggle' type='button' caret color="secondary">
                            {
                                dogCheck === 'na' ? '是否指定' : dogCheck

                            }&nbsp;<i className={getMoodIcon(dogCheck)}></i>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem type='button' onClick={()=> this.handlecheck('YES')}><i className={getMoodIcon('YES')}></i>&nbsp;&nbsp;YES</DropdownItem>
                            <DropdownItem type='button' onClick={()=> this.handlecheck('NO')} ><i className={getMoodIcon('NO') }></i>&nbsp;&nbsp;NO</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>

                    <ButtonDropdown className="sel" type='buttom' isOpen={nameToggle} style={{opacity:isCheck}} toggle={this.handleNameToggle}>
                        <DropdownToggle className='mood-toggle' type='button' caret color="secondary">
                            {
                                dogname === 'na' ? '選愛寵' : dogname
                            }&nbsp;<i className='fa fa-heart fa-1x' aria-hidden="true"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem type='button' onClick={()=>this.handleDogSelect('小丸子')}>&nbsp;&nbsp;小丸子</DropdownItem>
                            <DropdownItem type='button' onClick={()=>this.handleDogSelect('黑糖')} >&nbsp;&nbsp;黑糖</DropdownItem>
                            <DropdownItem type='button' onClick={()=>this.handleDogSelect('阿醜')} >&nbsp;&nbsp;阿醜</DropdownItem>
                            <DropdownItem type='button' onClick={()=>this.handleDogSelect('Lally')} >&nbsp;&nbsp;Lally</DropdownItem>
                            <DropdownItem type='button' onClick={()=>this.handleDogSelect('畫眉')} >&nbsp;&nbsp;畫眉</DropdownItem>
                            <DropdownItem type='button' onClick={()=>this.handleDogSelect('阿幹')} >&nbsp;&nbsp;阿幹</DropdownItem>
                            <DropdownItem type='button' onClick={()=>this.handleDogSelect('布丁')} >&nbsp;&nbsp;布丁</DropdownItem>
                            <DropdownItem type='button' onClick={()=>this.handleDogSelect('巧虎')} >&nbsp;&nbsp;巧虎</DropdownItem>
                            <DropdownItem type='button' onClick={()=>this.handleDogSelect('麥芽')} >&nbsp;&nbsp;麥芽</DropdownItem>
                            <DropdownItem type='button' onClick={()=>this.handleDogSelect('小狼')} >&nbsp;&nbsp;小狼</DropdownItem>
                            <DropdownItem type='button' onClick={()=>this.handleDogSelect('傷傷')} >&nbsp;&nbsp;傷傷</DropdownItem>
                            <DropdownItem type='button' onClick={()=>this.handleDogSelect('黑嚕嚕')} >&nbsp;&nbsp;黑嚕嚕</DropdownItem>
                            <DropdownItem type='button' onClick={()=>this.handleDogSelect('小桃子')} >&nbsp;&nbsp;小桃子</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    <br></br>
                    <InputGroup>
                    <InputGroupAddon>備註</InputGroupAddon>
                    <Input className='input time' type='textarea' getRef={el => {this.inputEl = el}} value={this.props.inputValue} onChange={this.handleInputChange} placeholder="Say something..."></Input>
                    </InputGroup>
                    <Button className='btn-post align-self-end btn' color="info" onClick={this.handleSend}>Send&nbsp;&nbsp;<i className='fa fa-thumbs-up fa-1x' aria-hidden="true"></i></Button>
                    <Modal isOpen={modal} toggle={this.handlemodal}>
                      <ModalHeader toggle={this.handlemodal}>預約成功（≧∇≦）</ModalHeader>
                      <ModalBody>謝謝您的預約<br></br>社團收到預約後會確認當天與您聯繫的社員與時間<br></br>三天內會寄信給您！<br></br><br></br>Carelife</ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.handlemodal}>Ok</Button>
                      </ModalFooter>


                    </Modal>


                  </Alert>
              </div>
            </div>
        );
    }


    handlemodal(){
      this.props.dispatch(toggleModal());
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


    handlecheck(choose){

      this.props.dispatch(checkDog(choose));
      this.handleChenage(choose);
    }

    handleChenage(choose){

      if (this.props.dogCheck ==='NO' || (this.props.dogCheck==='na'&& choose==='YES'))
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
      this.handlemodal();
      this.props.dispatch(sendmail(this.props.name,this.props.mail,this.props.date,this.props.time,this.props.dogname,this.props.inputValue));
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


}

export default connect(state => ({
    ...state.postForm
}))(PostForm);
