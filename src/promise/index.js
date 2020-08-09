// Aqui la promesa se ejecuta al cargar el archivo.
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whooops!');
        }
    });
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err));

// La promesa no se ejecuta hasta que se llame a la función.
const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Wooops!');
            reject(error);
        }
    });
}

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));

// Ejecuta varias promesas a la vez.
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('Array of results', response)
})
.catch(err => {
    console.err(err);
})