
import React from 'react';
import FormStore from '../stores/formStore';
import FormActions from '../actions/formActions'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = FormStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        FormStore.listen(this.onChange);
    }

    componentWillUnmount() {
        FormStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();

        var name = this.state.name.trim();
        var email = this.state.email;
        var gender = this.state.gender;
        var dob = this.state.dob;
        var question = this.state.question;

        if (!name) {
            FormActions.invalidName();
            this.refs.nameTextField.getDOMNode().focus();
        }

        if (!email) {
            FormActions.invalidEmail();
            this.refs.nameTextField.getDOMNode().focus();
        }
        if (!gender) {
            FormActions.invalidGender();
        }
        if (!dob) {
            FormActions.invalidDob();
            this.refs.nameTextField.getDOMNode().focus();
        }
        if (!question) {
            FormActions.invalidQuestion();
            this.refs.nameTextField.getDOMNode().focus();
        }

        if (name && email && dob && question && gender) {
            var userObj = {
                userName:name,
                gender:gender,
                userEmail:email,
                dateOfBirth:dob,
                question:question
            }
            FormActions.addCharacter(userObj);
        }
    }

    render() {
        return (
            <div className='container container-fluid center-block '>
                <div className='row flipInX animated'>
                    <div className='col-sm-12'>
                        <div className='panel panel-default'>
                            <div className='panel-body'>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div className={'form-group ' + this.state.nameValidationState}>
                                        <label className='control-label'>Name</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                                               onChange={FormActions.updateName} autoFocus/>
                                        <span className='help-block'>{this.state.helpBlock}</span>
                                    </div>
                                    <div className={'form-group ' + this.state.emailValidationState}>
                                        <label className='control-label'>Email</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.email}
                                               onChange={FormActions.updateEmail} autoFocus/>
                                        <span className='help-block'>{this.state.helpBlock}</span>
                                    </div>
                                    <div className={'form-group ' + this.state.genderValidationState}>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='gender' id='female' value='Female' checked={this.state.gender === 'Female'}
                                                   onChange={FormActions.updateGender}/>
                                            <label htmlFor='female'>Female</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='gender' id='male' value='Male' checked={this.state.gender === 'Male'}
                                                   onChange={FormActions.updateGender}/>
                                            <label htmlFor='male'>Male</label>
                                        </div>
                                    </div>
                                    <div className={'form-group'}>
                                        <label className='control-label'>DOB</label>
                                        <input type='date' className='form-control' ref='nameTextField' value={this.state.dob}
                                               onChange={FormActions.updateDate} autoFocus/>
                                        <span className='help-block'>{this.state.helpBlock}</span>
                                    </div>
                                    <div className={'form-group'}>
                                        <label className='control-label'>Question</label>
                                        <input type='text-area' className='form-control' ref='nameTextField' value={this.state.question}
                                               onChange={FormActions.updateQuestion} autoFocus/>
                                        <span className='help-block'>{this.state.helpBlock}</span>
                                    </div>
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;