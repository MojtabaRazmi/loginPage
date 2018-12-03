import React, {Component} from 'react';
import {
    Button, Form, FormGroup, Label, Input
} from 'reactstrap';



class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
            number : "",
            email : '',
            password : ""
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h2 className="card-title text-center">Sign In</h2>
                                <Form className="form-signin">
                                    <FormGroup className="form-label-group">
                                        <Input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                                            <Label htmlFor="inputEmail">Email address</Label>
                                    </FormGroup>

                                    <FormGroup className="form-label-group">
                                        <Input type="number" id="inputNumber" className="form-control" placeholder="number" required />
                                            <Label htmlFor="inputNumber">Phone Number</Label>
                                    </FormGroup>

                                    <FormGroup className="form-label-group">
                                        <Input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                        <Label htmlFor="inputPassword">Password</Label>
                                    </FormGroup>

                                    <FormGroup className="custom-control custom-checkbox mb-3">
                                        <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <Label className="custom-control-label" htmlFor="customCheck1">Remember password</Label>
                                    </FormGroup>
                                    <Button outline color='primary' className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in with Email</Button>
                                    <hr className="my-4" />
                                        <Button outline color="info" className="btn btn-lg btn-google btn-block text-uppercase" type="submit"> Sign in with Phone Number</Button>
                                        <Button outline color="danger" className="btn btn-lg btn-facebook btn-block text-uppercase" type="ignore">Cancel</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;