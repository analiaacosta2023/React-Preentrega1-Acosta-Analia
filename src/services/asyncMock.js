const productos = [
    {
        id: 1,
        link_foto: "../../img/p1.jpeg",
        nombre: "woman Clog 1",
        coleccion: "Flamingo",
        descripcion: "blablabla1",
        rating: 4,
        precio: 99,
        stock: [1, 0, 2, 5, 5, 8]
    },
    {
        id: 2,
        link_foto: "../../img/p2.jpeg",
        nombre: "woman Clog 2",
        coleccion: "Orange",
        descripcion: "blablabla2",
        rating: 5,
        precio: 99,
        stock: [0, 3, 5, 7, 1, 0],
    },
    {
        id: 3,
        link_foto: "../../img/p3.jpeg",
        nombre: "woman Clog 3",
        coleccion: "Flamingo",
        descripcion: "blablabla3",
        rating: 3,
        precio: 99,
        stock: [0, 5, 2, 7, 5, 0],
    },
    {
        id: 4,
        link_foto: "../../img/p4.jpeg",
        nombre: "woman Clog 4",
        coleccion: "Watermelon",
        descripcion: "blablabla4",
        rating: 3,
        precio: 99,
        stock: [0, 10, 1, 1, 1, 5],
    },
    {
        id: 5,
        link_foto: "../../img/p5.jpeg",
        nombre: "woman Clog 5",
        coleccion: "Flamingo",
        descripcion: "blablabla5",
        rating: 3,
        precio: 99,
        stock: [5, 4, 7, 8, 6, 0],
    },
    {
        id: 6,
        link_foto: "../../img/p6.jpeg",
        nombre: "woman Clog 6",
        coleccion: "Crocodile",
        descripcion: "blablabla6",
        rating: 3,
        precio: 99,
        stock: [1, 1, 1, 1, 1, 1],
    },
    {
        id: 7,
        link_foto: "../../img/p7.jpeg",
        nombre: "woman Clog 7",
        coleccion: "Dinosaur",
        descripcion: "blablabla7",
        rating: 3,
        precio: 99,
        stock: [5, 4, 5, 7, 1, 2],
    },
    {
        id: 8,
        link_foto: "../../img/p8.jpeg",
        nombre: "woman Clog 8",
        coleccion: "Flamingo",
        descripcion: "blablabla8",
        rating: 3,
        precio: 99,
        stock: [2, 2, 1, 0, 2, 0],
    },
    {
        id: 9,
        link_foto: "../../img/p9.jpeg",
        nombre: "woman Clog 9",
        coleccion: "Flamingo",
        descripcion: "blablabla9",
        rating: 4,
        precio: 99,
        stock: [1, 1, 1, 1, 1, 0]
    },
    {
        id: 10,
        link_foto: "../../img/p10.jpeg",
        nombre: "woman Clog 10",
        coleccion: "Orange",
        descripcion: "blablabla10",
        rating: 5,
        precio: 99,
        stock: [0, 1, 2, 1, 1, 0],
    },
    {
        id: 11,
        link_foto: "../../img/p11.jpeg",
        nombre: "woman Clog 11",
        coleccion: "Orange",
        descripcion: "blablabla11",
        rating: 3,
        precio: 99,
        stock: [2, 1, 4, 2, 2, 4],
    },
    {
        id: 12,
        link_foto: "../../img/p12.jpeg",
        nombre: "woman Clog 12",
        coleccion: "Orange",
        descripcion: "blablabla12",
        rating: 3,
        precio: 99,
        stock: [1, 1, 1, 1, 1, 0],
    },
    {
        id: 13,
        link_foto: "../../img/p13.jpeg",
        nombre: "woman Clog 13",
        coleccion: "Crocodile",
        descripcion: "blablabla13",
        rating: 3,
        precio: 99,
        stock: [1, 1, 4, 4, 1, 0],
    },
    {
        id: 14,
        link_foto: "../../img/p14.jpeg",
        nombre: "woman Clog 14",
        coleccion: "Crocodile",
        descripcion: "blablabla14",
        rating: 3,
        precio: 99,
        stock: [0, 1, 1, 1, 1, 0],
    },
    {
        id: 15,
        link_foto: "../../img/p15.jpeg",
        nombre: "woman Clog 15",
        coleccion: "Flamingo",
        descripcion: "blablabla15",
        rating: 3,
        precio: 99,
        stock: [1, 1, 1, 1, 1, 0],
    },
    {
        id: 16,
        link_foto: "../../img/p16.jpeg",
        nombre: "woman Clog 16",
        coleccion: "Flamingo",
        descripcion: "blablabla16",
        rating: 3,
        precio: 99,
        stock: [4, 1, 4, 4, 1, 1],
    },
    {
        id: 17,
        link_foto: "../../img/p17.jpeg",
        nombre: "woman Clog 17",
        coleccion: "Flamingo",
        descripcion: "blablabla17",
        rating: 4,
        precio: 99,
        stock: [1, 1, 1, 1, 1, 0]
    },
    {
        id: 18,
        link_foto: "../../img/p18.jpeg",
        nombre: "woman Clog 18",
        coleccion: "Flamingo",
        descripcion: "blablabla18",
        rating: 5,
        precio: 99,
        stock: [0, 1, 1, 1, 1, 0],
    },
    {
        id: 19,
        link_foto: "../../img/p19.jpeg",
        nombre: "woman Clog 19",
        coleccion: "Flamingo",
        descripcion: "blablabla19",
        rating: 3,
        precio: 99,
        stock: [1, 1, 1, 2, 1, 0],
    },
    {
        id: 20,
        link_foto: "../../img/p20.jpeg",
        nombre: "woman Clog 20",
        coleccion: "Orange",
        descripcion: "blablabla20",
        rating: 3,
        precio: 99,
        stock: [1, 1, 2, 1, 1, 1],
    },
    {
        id: 21,
        link_foto: "../../img/p21.jpeg",
        nombre: "woman Clog 21",
        coleccion: "Watermelon",
        descripcion: "blablabla21",
        rating: 3,
        precio: 99,
        stock: [1, 1, 1, 1, 1, 0],
    },
    {
        id: 22,
        link_foto: "../../img/p22.jpeg",
        nombre: "woman Clog 22",
        coleccion: "Watermelon",
        descripcion: "blablabla22",
        rating: 3,
        precio: 99,
        stock: [2, 1, 2, 1, 0, 0],
    },
    {
        id: 23,
        link_foto: "../../img/p23.jpeg",
        nombre: "woman Clog 23",
        coleccion: "Watermelon",
        descripcion: "blablabla23",
        rating: 3,
        precio: 99,
        stock: [0, 1, 2, 3, 1, 0],
    },
    {
        id: 24,
        link_foto: "../../img/p24.jpeg",
        nombre: "woman Clog 24",
        coleccion: "Watermelon",
        descripcion: "blablabla24",
        rating: 3,
        precio: 99,
        stock: [1, 1, 2, 1, 1, 0],
    },
    {
        id: 25,
        link_foto: "../../img/p25.jpeg",
        nombre: "woman Clog 25",
        coleccion: "Dinosaur",
        descripcion: "blablabla25",
        rating: 4,
        precio: 99,
        stock: [1, 1, 4, 2, 1, 0]
    },
    {
        id: 26,
        link_foto: "../../img/p26.jpeg",
        nombre: "woman Clog 26",
        coleccion: "Dinosaur",
        descripcion: "blablabla26",
        rating: 5,
        precio: 99,
        stock: [0, 1, 4, 4, 1, 1],
    },
    {
        id: 27,
        link_foto: "../../img/p27.jpeg",
        nombre: "woman Clog 27",
        coleccion: "Dinosaur",
        descripcion: "blablabla27",
        rating: 3,
        precio: 99,
        stock: [0, 1, 1, 1, 4, 0],
    },
    {
        id: 28,
        link_foto: "../../img/p4.jpeg",
        nombre: "woman Clog 28",
        coleccion: "Watermelon",
        descripcion: "blablabla28",
        rating: 3,
        precio: 99,
        stock: [4, 4, 4, 1, 2, 0],
    },
    {
        id: 29,
        link_foto: "../../img/p29.jpeg",
        nombre: "woman Clog 29",
        coleccion: "Crocodile",
        descripcion: "blablabla29",
        rating: 5,
        precio: 99,
        stock: [0, 2, 2, 2, 2, 0],
    },
    {
        id: 30,
        link_foto: "../../img/p30.jpeg",
        nombre: "woman Clog 30",
        coleccion: "Crocodile",
        descripcion: "blablabla30",
        rating: 3,
        precio: 99,
        stock: [1, 2, 1, 1, 1, 0],
    },
    {
        id: 31,
        link_foto: "../../img/p31.jpeg",
        nombre: "woman Clog 31",
        coleccion: "Crocodile",
        descripcion: "blablabla31",
        rating: 3,
        precio: 99,
        stock: [1, 1, 1, 1, 1, 0],
    },
    {
        id: 32,
        link_foto: "../../img/p32.jpeg",
        nombre: "woman Clog 32",
        coleccion: "Orange",
        descripcion: "blablabla32",
        rating: 4,
        precio: 99,
        stock: [1, 2, 2, 2, 1, 0],
    }
];

function getData() {

    return new Promise((resolve, reject) => {


        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
}


export function getProductData(idURL) {
    return new Promise((resolve, reject) => {
        const productRequested = productos.find(
            (item) => item.id === Number(idURL)
        );

        setTimeout(() => {
            resolve(productRequested);
        }, 2000);
    });
}

export function getColeccionData(coleccionURL) {
    return new Promise((resolve, reject) => {
        const coleccionRequested = productos.filter((item) => {
            return item.coleccion.toLowerCase() === coleccionURL.toLowerCase();
        });

        setTimeout(() => {
            resolve(coleccionRequested);
        }, 2000);
    });
}

export default getData;