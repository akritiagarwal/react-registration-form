
import React from 'react';
import FormStore from '../stores/formStore';
import FormActions from '../actions/formActions';
import request from 'es6-request';

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
        var name = this.state.name;
        var email = this.state.email;
        var gender = this.state.gender;
        var dateOfBirth = this.state.dateOfBirth;
        var question = this.state.question;

        if (!name) {
            FormActions.invalidName();
        }

        if (!email) {
            FormActions.invalidEmail();
        }
        if (!gender) {
            FormActions.invalidGender();
        }
        if (!dateOfBirth) {
            FormActions.invalidDob();
        }
        if (!question) {
            FormActions.invalidQuestion();
        }

        if (name && email && dateOfBirth && question && gender) {
            var data = {
                'userName':name,
                'userEmail':email,
                'gender':gender,
                'dateOfBirth':dateOfBirth,
                'question':question
            }
            $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/api/Consumers',
                headers:{
                    'content-type':'application/json'
                },
                data: JSON.stringify(data)
            })
                .done(function(data,jqXhr) {
                    if(jqXhr == 'success'){
                        FormActions.addCharacterSuccess("your query has been submitted successfully");
                    }
                })
                .fail(function(jqXhr) {
                    console.log('failed to register');
                });
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className='container container-fluid center-block '>
                <div className='row flipInX animated'>
                    <div className='col-sm-12'>
                        <div className='panel panel-default'>
                            <div className='panel-body'>
                                <form onSubmit={this.handleSubmit.bind(this)} id="resForm">
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
                                        <input type='date' className='form-control' ref='nameTextField' value={this.state.dateOfBirth}
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