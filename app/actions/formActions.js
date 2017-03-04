import alt from '../alt';
import request from 'es6-request'

class FormActions {
    constructor() {
        this.generateActions(
            'addCharacterSuccess',
            'addCharacterFail',
            'updateName',
            'updateGender',
            'updateEmail',
            'updateDate',
            'updateQuestion',
            'invalidName',
            'invalidGender',
            'invalidDob',
            'invalidEmail',
            'invalidQuestion',
        );
    }
}

export default alt.createActions(FormActions);
