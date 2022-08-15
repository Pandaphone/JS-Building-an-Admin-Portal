
// Your Code Here
async function getBooks() {

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(listDaBooks)
}

function listDaBooks(book) {
    let page = document.querySelector('#root')


    let p = document.createElement('p')
    p.textContent = book.title

    let bookInput = document.createElement('input')
    bookInput.value = book.quantity

    let submitBtn = document.createElement('button')
    submitBtn.textContent = 'Submit'

    submitBtn.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
        method: "PATCH" , 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           id: book.id,
            quantity: bookInput.value
        }),
    })
    })

    p.append(bookInput)
    p.append(submitBtn)
    root.append(p)
}

getBooks()