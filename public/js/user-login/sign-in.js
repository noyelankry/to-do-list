export const signIn = () => {
    const username = $('#username').val()
    const password = $('#password').val()

    const logUser = {
        username,
        password
    }
    console.log(logUser)

    fetch('http://localhost:3000/user/login', {
        method: 'post',
        body: JSON.stringify(logUser),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    }).then(response => response.json())
        .then(data => {
            console.log('Success:', data)
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}