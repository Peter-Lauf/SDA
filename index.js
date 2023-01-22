let user = {    
        "firstName": "Sample1",
        "lastName": 23.45,
        "emailAddress": 34,
        "userType": "Food",
        isAvailable: true,
        id: 1
};


const listOfUsers = [
    user,
    // user,
    // user,
    // user,
    // user,
    // user,
];

function createUser() {
    const user = {
        firstName: getValueFromInput("firstName"),
        lastName: getValueFromInput("lastName"),
        emailAddress: getValueFromInput("emailAddress"),
        userType: getValueFromInput("userType"),
        isAvailable: true,
        id: Math.floor(Math.random() * 1000),
    }
    listOfUsers.push(user);
    displayUsers(listOfUsers);
    alert(user.name + " User created successfully");
}


function getValueFromInput(id) {
    return document.querySelector("#" + id).value;
}

const displayUsers = function (usersToDisplay) {
    const userTableBody = document.querySelector("#userDisplayArea");

    let listOfUsersAsHtmlTemplate = '';

    usersToDisplay.forEach((currentUser) => {
        listOfUsersAsHtmlTemplate += `
            <tr>
                <td>${currentUser.id}</td>
                <td>${currentUser.firstName}</td>
                <td>${currentUser.lastName}</td>
                <td>${currentUser.emailAddress}</td>
                <td>${currentUser.userType}</td>
                <td>${currentUser.isAvailable}</td>
            </tr>
            `;

    })

    userTableBody.innerHTML = listOfUsersAsHtmlTemplate;
}



