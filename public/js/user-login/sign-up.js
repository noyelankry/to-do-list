export const signUp = () => {
    const name = $('#name').val()
    const email = $('#email').val()
    const phone = $('#phone').val()
    const password = $('#password').val()

    const createUser = {
        name,
        email,
        phone,
        password
    }
    console.log(createUser)

    fetch('http://localhost:3000/user/register', {
        method: 'post',
        body: JSON.stringify(createUser),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    }).then(response => response.json())
        .then(data => {
            console.log('Success:', data)
            const url = new URL(`http://localhost:3000/my-lists.html`)
            location.href = url
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}