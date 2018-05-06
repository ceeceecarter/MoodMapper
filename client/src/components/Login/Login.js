import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



export default class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmitForm = (event) => {
    console.log(this.state.email)
    alert(this.state.email)
    this.preventDefault()

  }
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmitForm}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input key="emailKey" onChange={this.handleChange} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input key="passwordKey" onChange={this.handleChange} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}