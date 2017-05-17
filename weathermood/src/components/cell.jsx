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
import {tellName,tellMail,tellText,sendtell} from 'states/post-actions.js';

import './PostForm.css';
import './cell.css';
class Cell extends React.Component {
    static propTypes = {
      tell_name: PropTypes.string,
      tell_email: PropTypes.string,
      tell_event: PropTypes.string
    };


    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handletellName = this.handletellName.bind(this);
        this.handleMail = this.handleMail.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handlesend = this.handlesend.bind(this);
         this.state = {file: '',imagePreviewUrl: ''};
    }

    render() {
      return (
          <div className='post-form'>
            <div>
                <Form>
                <Alert color="danger">
                  <InputGroup>
                    <InputGroupAddon>姓名</InputGroupAddon>
                    <Input placeholder="" value={this.props.tell_name} onChange={this.handletellName} required/>
                  </InputGroup>
                  <br></br>
                  <InputGroup>
                    <InputGroupAddon>信箱</InputGroupAddon>
                    <Input value={this.props.tell_email} onChange={this.handleMail} placeholder="麻煩您輸入信箱以便我們跟您做後續的確認" required/>
                  </InputGroup>
                  <br></br>
                    <div id="content">
                    <InputGroup>
                      <InputGroupAddon>事件</InputGroupAddon>
                      <Input id="tell" type="textarea" value={this.props.tell_event} onChange={this.handleText} placeholder="麻煩您詳述事發經過，如無法辨識出是哪隻狗也麻煩您盡量講出特徵" required/>
                    </InputGroup>
                    </div>
                    <Input className="fileInput" type="file"  onChange={(e)=>this.handleImageChange(e)} />
                <Button onClick={this.handlesend}>通報&nbsp;&nbsp;<i className='fa fa-paper-plane fa-1x' aria-hidden="true"></i></Button>
                </Alert>
                </Form>
              </div>
            </div>
        );
    }

    handletellName(e){
      let name = e.target.value;
      // console.log(name);
      this.props.dispatch(tellName(name));
    }

    handleMail(e){
      let mail = e.target.value;
      this.props.dispatch(tellMail(mail));
    }

    handleText(e){
      let text = e.target.value;
      this.props.dispatch(tellText(text));
    }

    handlesend(){
      this.props.dispatch(sendtell(this.props.tell_name,this.props.tell_email,this.props.tell_event,this.state.file));
      this.props.dispatch(tellName(''));
      this.props.dispatch(tellMail(''));
      this.props.dispatch(tellText(''));
    }


    handleSubmit(e) {
   e.preventDefault();
   // TODO: do something with -> this.state.file
   console.log('handle uploading-', this.state.file);
 }

 handleImageChange(e) {
   e.preventDefault();

   let reader = new FileReader();
   let file = e.target.files[0];

   reader.onloadend = () => {
     this.setState({
       file: file,
       imagePreviewUrl: reader.result
     },()=>{console.log(reader.result)});

   }
   reader.readAsDataURL(file)
 }
}

export default connect(state => ({
  ...state.postForm
}))(Cell);
