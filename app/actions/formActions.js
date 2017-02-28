import alt from '../alt';

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

    addCharacter(userDetails) {
        $.ajax({
            type: 'POST',
            url: '/api/User',
            data: userDetails
        })
            .done((data) => {
                this.actions.addCharacterSuccess(data.message);
            })
            .fail((jqXhr) => {
                this.actions.addCharacterFail($.parseJSON(response.responseText).message);
            });
    }
}

export default alt.createActions(FormActions);