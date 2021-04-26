const myForm = document.getElementById('form')
const API_URL = 'https://banciss-api.herokuapp.com/api/auth/signin'

myForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const email = formData.get('email')
    const password = formData.get('password')

    const data = {
        email,
        password
    }

    try {
        const response = await fetch(API_URL, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify(data),
        })
        const json = await response.json()

        if (response.ok) {
            window.location.replace('https://www.google.com/')
            // lo manda a que ingrese el codigo
        }

    } catch (error) {
        console.error(error)
    }
})

