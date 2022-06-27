function saveUserInfo(userNameId, userEmailId, userUserId, userPasswordId) {

    // define variables 
    var userNameValue = '';
    var userEmailValue = '';
    var userUserValue = '';
    var userPasswordValue = '';

    // for all the inputs
    var userNameObject = document.getElementById(userNameId);
    if (userNameObject == null) {
        alert('The user name input text box does not exist.');
        return;
    } else {
        userNameValue = userNameObject.value;
        if (userNameValue.trim().length == 0) {
            alert('The user name can not be empty.');
            return;
        }
    }

    var userEmailObject = document.getElementById(userEmailId);
    if (userEmailObject == null) {
        alert('The user email input text box does not exist.');
        return;
    } else {
        userEmailValue = userEmailObject.value;
        if (userEmailValue.trim().length == 0) {
            alert('The user email can not be empty.');
            return;
        }
    }

    var userUserObject = document.getElementById(userUserId);
    if (userUserObject == null) {
        alert('The user input text box does not exist.');
        return;
    } else {
        userUserValue = userUserObject.value;
        if (userUserValue.trim().length == 0) {
            alert('The user can not be empty.');
            return;
        }
    }

    var userPasswordObject = document.getElementById(userPasswordId);
    if (userPasswordObject == null) {
        alert('The user Password input text area does not exist.');
        return;
    } else {
        userPasswordValue = userPasswordObject.value;
        if (userPasswordValue.trim().length == 0) {
            alert('The user Password input text area can not be empty.');
            return;
        }
    }

    var userData = new Object;

    userData.userName = userNameValue;
    userData.userEmail = userEmailValue;
    userData.userUser = userUserValue;
    userData.userPassword = userPasswordValue;

    // Convert the object to JSON string because it didn't work otherwise..
    var userDataString = JSON.stringify(userData);
    // Set the user info JSON string to localStorage object, use the user name as the key, found this somewhere
    localStorage.setItem(userData.userName, userDataString);
    alert('User info is saved to local web storage successfully.');

    searchByName('');

}

// need to implement the below function later maybe ?
function isUserExist(userName) {

}


function search(searchByNameKeywordId) {

    var searchByNameKeywordObject = document.getElementById(searchByNameKeywordId);
    if (searchByNameKeywordObject == null) {
        alert('The search user by name keyword input text box does not exist.');
        return;
    }


    var searchByNameKeyword = '';

    searchByNameKeyword = searchByNameKeywordObject.value;

    searchByName(searchByNameKeyword);
}

function searchByName(searchByNameKeyword) {

    // get and remove the user data list on the web page.
    var userDataList = document.getElementById('outputUsersList');
    userDataList.innerHTML = '';

    if (searchByNameKeyword.trim().length == 0) {
        // show all user data on the web page.
        var len = localStorage.length;
        for (var i = 0; i < len; i++) {

            key = localStorage.key(i);
            var userDataJsonString = localStorage.getItem(key);
            listUserData(userDataJsonString);
        }

    } else {

        // show the special user data on the web page.
        var userDataJsonString = localStorage.getItem(searchByNameKeyword);
        listUserData(userDataJsonString);
    }
}


function listUserData(userDataJsonString) {

    var userData = JSON.parse(userDataJsonString);

    var userDataList = document.getElementById('outputUsersList');

    var labelUserName = document.createElement('label');
    labelUserName.style.display = 'block';
    var labelUserNameText = document.createTextNode('Name:' + userData.userName);
    labelUserName.append(labelUserNameText);
    userDataList.append(labelUserName);


    var labelUserEmail = document.createElement('label');
    labelUserEmail.style.display = 'block';
    var labelUserEmailText = document.createTextNode('Email:' + userData.userEmail);
    labelUserEmail.append(labelUserEmailText);
    userDataList.append(labelUserEmail);


    var labelUserUser = document.createElement('label');
    labelUserUser.style.display = 'block';
    var labelUserUserText = document.createTextNode('Username:' + userData.userUser);
    labelUserUser.append(labelUserUserText);
    userDataList.append(labelUserUser);

    // Passwort will not be shown on screen but was for testing
    /* 
    var labelUserPassword = document.createElement('label');
    labelUserPassword.style.display = 'block';
    var labelUserPasswordText = document.createTextNode('Password:' + userData.userPassword);
    labelUserPassword.append(labelUserPasswordText);
    userDataList.append(labelUserPassword);
    */

    var hr = document.createElement('hr');
    userDataList.append(hr);
}

// clear function
function clearLocalStorage() {
    localStorage.clear();
}