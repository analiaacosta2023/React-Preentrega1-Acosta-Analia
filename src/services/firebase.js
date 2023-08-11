import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, where, query, addDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAp66Onn5bKL9gp6RIazSwgq_oJRgQXq14",
    authDomain: "react-ecommerce-7606d.firebaseapp.com",
    projectId: "react-ecommerce-7606d",
    storageBucket: "react-ecommerce-7606d.appspot.com",
    messagingSenderId: "537587402818",
    appId: "1:537587402818:web:9096a4024447c1388f85db"
};

const appFirebase = initializeApp(firebaseConfig);

const db = getFirestore(appFirebase);

async function getData() {
    const productsRef = collection(db, "products");

    const documentsSnapshot = await getDocs(productsRef);
    const documents = documentsSnapshot.docs;
    const docsData = documents.map(
        (item) => {
            return { ...item.data(), id: item.id };
        }
    );

    return docsData;
}

async function getProductData(id) {
    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
        return { ...docSnapshot.data(), id: docSnapshot.id };
    } else {
        throw new Error("No encontramos ese producto.");
    }
}

async function getColeccionData(coleccionURL) {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("coleccion", "==", coleccionURL));
    const documentsSnapshot = await getDocs(q);

    const documents = documentsSnapshot.docs;

    return documents.map((item) => ({ ...item.data(), id: item.id }));
}

async function createOrder(orderData) {
    const collectionRef = collection(db, "orders")
    const docCreated = await addDoc(collectionRef, orderData)

    return (docCreated.id)
}


async function getOrder(id) {
    const docRef = doc(db, "orders", id);
    const docSnapshot = await getDoc(docRef);

    return { ...docSnapshot.data(), id: docSnapshot.id };
}

async function _exportProducts() {
    const productos = [
        {
            id: 1,
            link_foto: "../../img/p1.jpeg",
            nombre: "woman Clog 1",
            coleccion: "flamingo",
            descripcion: "blablabla1",
            rating: 4,
            precio: 99,
            stock: [1, 0, 2, 5, 5, 8]
        },
        {
            id: 2,
            link_foto: "../../img/p2.jpeg",
            nombre: "woman Clog 2",
            coleccion: "orange",
            descripcion: "blablabla2",
            rating: 5,
            precio: 99,
            stock: [0, 3, 5, 7, 1, 0],
        },
        {
            id: 3,
            link_foto: "../../img/p3.jpeg",
            nombre: "woman Clog 3",
            coleccion: "flamingo",
            descripcion: "blablabla3",
            rating: 3,
            precio: 99,
            stock: [0, 5, 2, 7, 5, 0],
        },
        {
            id: 4,
            link_foto: "../../img/p4.jpeg",
            nombre: "woman Clog 4",
            coleccion: "watermelon",
            descripcion: "blablabla4",
            rating: 3,
            precio: 99,
            stock: [0, 10, 1, 1, 1, 5],
        },
        {
            id: 5,
            link_foto: "../../img/p5.jpeg",
            nombre: "woman Clog 5",
            coleccion: "flamingo",
            descripcion: "blablabla5",
            rating: 3,
            precio: 99,
            stock: [5, 4, 7, 8, 6, 0],
        },
        {
            id: 6,
            link_foto: "../../img/p6.jpeg",
            nombre: "woman Clog 6",
            coleccion: "crocodile",
            descripcion: "blablabla6",
            rating: 3,
            precio: 99,
            stock: [1, 1, 1, 1, 1, 1],
        },
        {
            id: 7,
            link_foto: "../../img/p7.jpeg",
            nombre: "woman Clog 7",
            coleccion: "dinosaur",
            descripcion: "blablabla7",
            rating: 3,
            precio: 99,
            stock: [5, 4, 5, 7, 1, 2],
        },
        {
            id: 8,
            link_foto: "../../img/p8.jpeg",
            nombre: "woman Clog 8",
            coleccion: "flamingo",
            descripcion: "blablabla8",
            rating: 3,
            precio: 99,
            stock: [2, 2, 1, 0, 2, 0],
        },
        {
            id: 9,
            link_foto: "../../img/p9.jpeg",
            nombre: "woman Clog 9",
            coleccion: "flamingo",
            descripcion: "blablabla9",
            rating: 4,
            precio: 99,
            stock: [1, 1, 1, 1, 1, 0]
        },
        {
            id: 10,
            link_foto: "../../img/p10.jpeg",
            nombre: "woman Clog 10",
            coleccion: "orange",
            descripcion: "blablabla10",
            rating: 5,
            precio: 99,
            stock: [0, 1, 2, 1, 1, 0],
        },
        {
            id: 11,
            link_foto: "../../img/p11.jpeg",
            nombre: "woman Clog 11",
            coleccion: "orange",
            descripcion: "blablabla11",
            rating: 3,
            precio: 99,
            stock: [2, 1, 4, 2, 2, 4],
        },
        {
            id: 12,
            link_foto: "../../img/p12.jpeg",
            nombre: "woman Clog 12",
            coleccion: "orange",
            descripcion: "blablabla12",
            rating: 3,
            precio: 99,
            stock: [1, 1, 1, 1, 1, 0],
        },
        {
            id: 13,
            link_foto: "../../img/p13.jpeg",
            nombre: "woman Clog 13",
            coleccion: "crocodile",
            descripcion: "blablabla13",
            rating: 3,
            precio: 99,
            stock: [1, 1, 4, 4, 1, 0],
        },
        {
            id: 14,
            link_foto: "../../img/p14.jpeg",
            nombre: "woman Clog 14",
            coleccion: "crocodile",
            descripcion: "blablabla14",
            rating: 3,
            precio: 99,
            stock: [0, 1, 1, 1, 1, 0],
        },
        {
            id: 15,
            link_foto: "../../img/p15.jpeg",
            nombre: "woman Clog 15",
            coleccion: "flamingo",
            descripcion: "blablabla15",
            rating: 3,
            precio: 99,
            stock: [1, 1, 1, 1, 1, 0],
        },
        {
            id: 16,
            link_foto: "../../img/p16.jpeg",
            nombre: "woman Clog 16",
            coleccion: "flamingo",
            descripcion: "blablabla16",
            rating: 3,
            precio: 99,
            stock: [4, 1, 4, 4, 1, 1],
        },
        {
            id: 17,
            link_foto: "../../img/p17.jpeg",
            nombre: "woman Clog 17",
            coleccion: "flamingo",
            descripcion: "blablabla17",
            rating: 4,
            precio: 99,
            stock: [1, 1, 1, 1, 1, 0]
        },
        {
            id: 18,
            link_foto: "../../img/p18.jpeg",
            nombre: "woman Clog 18",
            coleccion: "flamingo",
            descripcion: "blablabla18",
            rating: 5,
            precio: 99,
            stock: [0, 1, 1, 1, 1, 0],
        },
        {
            id: 19,
            link_foto: "../../img/p19.jpeg",
            nombre: "woman Clog 19",
            coleccion: "flamingo",
            descripcion: "blablabla19",
            rating: 3,
            precio: 99,
            stock: [1, 1, 1, 2, 1, 0],
        },
        {
            id: 20,
            link_foto: "../../img/p20.jpeg",
            nombre: "woman Clog 20",
            coleccion: "orange",
            descripcion: "blablabla20",
            rating: 3,
            precio: 99,
            stock: [1, 1, 2, 1, 1, 1],
        },
        {
            id: 21,
            link_foto: "../../img/p21.jpeg",
            nombre: "woman Clog 21",
            coleccion: "watermelon",
            descripcion: "blablabla21",
            rating: 3,
            precio: 99,
            stock: [1, 1, 1, 1, 1, 0],
        },
        {
            id: 22,
            link_foto: "../../img/p22.jpeg",
            nombre: "woman Clog 22",
            coleccion: "watermelon",
            descripcion: "blablabla22",
            rating: 3,
            precio: 99,
            stock: [2, 1, 2, 1, 0, 0],
        },
        {
            id: 23,
            link_foto: "../../img/p23.jpeg",
            nombre: "woman Clog 23",
            coleccion: "watermelon",
            descripcion: "blablabla23",
            rating: 3,
            precio: 99,
            stock: [0, 1, 2, 3, 1, 0],
        },
        {
            id: 24,
            link_foto: "../../img/p24.jpeg",
            nombre: "woman Clog 24",
            coleccion: "watermelon",
            descripcion: "blablabla24",
            rating: 3,
            precio: 99,
            stock: [1, 1, 2, 1, 1, 0],
        },
        {
            id: 25,
            link_foto: "../../img/p25.jpeg",
            nombre: "woman Clog 25",
            coleccion: "dinosaur",
            descripcion: "blablabla25",
            rating: 4,
            precio: 99,
            stock: [1, 1, 4, 2, 1, 0]
        },
        {
            id: 26,
            link_foto: "../../img/p26.jpeg",
            nombre: "woman Clog 26",
            coleccion: "dinosaur",
            descripcion: "blablabla26",
            rating: 5,
            precio: 99,
            stock: [0, 1, 4, 4, 1, 1],
        },
        {
            id: 27,
            link_foto: "../../img/p27.jpeg",
            nombre: "woman Clog 27",
            coleccion: "dinosaur",
            descripcion: "blablabla27",
            rating: 3,
            precio: 99,
            stock: [0, 1, 1, 1, 4, 0],
        },
        {
            id: 28,
            link_foto: "../../img/p4.jpeg",
            nombre: "woman Clog 28",
            coleccion: "watermelon",
            descripcion: "blablabla28",
            rating: 3,
            precio: 99,
            stock: [4, 4, 4, 1, 2, 0],
        },
        {
            id: 29,
            link_foto: "../../img/p29.jpeg",
            nombre: "woman Clog 29",
            coleccion: "crocodile",
            descripcion: "blablabla29",
            rating: 5,
            precio: 99,
            stock: [0, 2, 2, 2, 2, 0],
        },
        {
            id: 30,
            link_foto: "../../img/p30.jpeg",
            nombre: "woman Clog 30",
            coleccion: "crocodile",
            descripcion: "blablabla30",
            rating: 3,
            precio: 99,
            stock: [1, 2, 1, 1, 1, 0],
        },
        {
            id: 31,
            link_foto: "../../img/p31.jpeg",
            nombre: "woman Clog 31",
            coleccion: "crocodile",
            descripcion: "blablabla31",
            rating: 3,
            precio: 99,
            stock: [1, 1, 1, 1, 1, 0],
        },
        {
            id: 32,
            link_foto: "../../img/p32.jpeg",
            nombre: "woman Clog 32",
            coleccion: "orange",
            descripcion: "blablabla32",
            rating: 4,
            precio: 99,
            stock: [1, 2, 2, 2, 1, 0],
        }
    ];


    for (let item of productos) {
        console.log(item)
        const docRef = doc(db, "products", String(item.id))
        const docCreated = await setDoc(docRef, item);
        //Solo ponemos este console log para que no tire el warning, esta funcion se uso solamente para cargar ls productos y no se va a usar mas
        console.log(docCreated)
    }
}

export { getData, getOrder, getProductData, getColeccionData, createOrder, _exportProducts };

// para exportar productos
//_exportProducts()

