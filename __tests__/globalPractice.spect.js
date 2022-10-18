// Testing for strings.
const text = 'Hola Incluit'

test('Should be match with Incluit', () => {
})

test('Should be equal to Hola Incluit', () => {
})

// Testing for arrays.
const languages = ['Javascript', 'Typescript', 'React', 'Node']

test('Should contain Typescript', () => {
})

test('Should contain at least 4 elements', () => {
})

// Testing for Callbacks.
const sortedWord = 'Incluit'
const unsortedWord = 'tiulcnI'

const mirrorString = (word, callback) => {
    callback(word.split("").reverse().join(""))
}

test('Should be "Incluit"', () => {
})

test('Should be "tiulcnI"', () => {
})

// Testing Promises.
const mirrorStringPromise = word => {
    return new Promise((resolve, reject) => {
        if (!word) reject(Error('Word is required'))

        resolve(word.split('').reverse().join(''))
    })
}

test('Should be "Incluit" (with Promise)', () => {
})

test('Should be word required', () => {
})
