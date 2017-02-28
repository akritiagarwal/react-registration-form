import alt from '../alt';
import FormActions from '../actions/formActions';

class FormStore {
    constructor() {
        this.bindActions(FormActions);
        this.name = '';
        this.gender = '';
        this.email='';
        this.dob='';
        this.question=''
        this.helpBlock = '';
        this.nameValidationState = '';
        this.genderValidationState = '';
        this.emailValidationState =''
    }

    onAddCharacterSuccess(successMessage) {
        this.nameValidationState = 'has-success';
        this.helpBlock = successMessage;
    }

    onAddCharacterFail(errorMessage) {
        this.nameValidationState = 'has-error';
        this.helpBlock = errorMessage;
    }

    onUpdateName(event) {
        this.name = event.target.value;
        this.nameValidationState = '';
        this.helpBlock = '';
    }

    onUpdateGender(event) {
        this.gender = event.target.value;
        this.genderValidationState = '';
    }
    onUpdateEmail(event) {
        this.email = event.target.value;
        this.emailValidationState = '';
    }
    onUpdateDate(event) {
        this.dob = event.target.value;
    }
    onUpdateQuestion(event) {
        this.question = event.target.value;
    }

    onInvalidName() {
        this.nameValidationState = 'has-error';
        this.helpBlock = 'Please enter a name.';
    }

    onInvalidGender() {
        this.genderValidationState = 'has-error';
    }
    onInvalidEmail() {
        this.nameValidationState = 'has-error';
        this.helpBlock = 'Please enter a email.';
    }
}

export default alt.createStore(FormStore);