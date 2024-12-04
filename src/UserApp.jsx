import AgregarProductoFormulario from "./components/agregar"
import EditarProducto from "./components/editar"
import { NavBar } from "./components/navbar"
import { SearchComponent } from "./components/SearchComponent"
import { UsersList } from "./components/UsersList"

export const UserApp = () => {

    const initialElements = [
        {
            id: 1,
            "name": "Computadora Gamer",
            "category": "Computadoras",
            "code": "GAMER2023",
            "description": "Computadora de alta gama diseñada para los gamers más exigentes, con procesador Intel Core i9 de última generación y tarjeta gráfica RTX 4090.",
            "imagen_url": "https://i5-mx.walmartimages.com/mg/gm/1p/images/product-images/img_large/00019752884726l.jpg"
        },
        {
            id: 2,
            "name": "Laptop Ultrabook",
            "category": "Computadoras",
            "code": "ULTRA23",
            "description": "Laptop delgada y ligera, ideal para trabajar y estudiar. Cuenta con pantalla OLED y batería de larga duración.",
            "imagen_url": "https://m.media-amazon.com/images/I/71m+cUutLgL.jpg"
        },
        {
            id: 3,
            "name": "Tablet Android",
            "category": "Computadoras",
            "code": "TAB12",
            "description": "Tablet con sistema operativo Android, pantalla de 12 pulgadas y gran capacidad de almacenamiento.",
            "imagen_url": "https://acdn.mitiendanube.com/stores/004/006/869/products/s94519305a65c4635b821d2593b6e5f0ed-f8d2ee474c2cbd2d1717018923981752-1024-1024.jpg"
        },
        {
            id: 4,
            "name": "Mouse inalámbrico ergonómico",
            "category": "Accesorios",
            "code": "MOUSEERG",
            "description": "Mouse inalámbrico con diseño ergonómico para reducir la fatiga en la mano.",
            "imagen_url": "https://m.media-amazon.com/images/I/61TjXszTyeL._AC_SX679_.jpg"
        },
        {
            id: 5,
            "name": "Teclado mecánico retroiluminado",
            "category": "Accesorios",
            "code": "TECMEC",
            "description": "Teclado mecánico con interruptores Cherry MX Blue y retroiluminación RGB personalizable.",
            "imagen_url": "https://m.media-amazon.com/images/I/61JWvdPETaS._AC_UF894,1000_QL80_.jpg"
        },
        {
            id: 6,
            "name": "Auriculares gaming",
            "category": "Accesorios",
            "code": "AURIGAM",
            "description": "Auriculares con sonido envolvente 7.1 y micrófono con cancelación de ruido.",
            "imagen_url": "https://m.media-amazon.com/images/I/41m8hUyCaML._SL500_.jpg"
        },
        {
            id: 7,
            "name": "Mesa de escritorio ajustable en altura",
            "category": "Mobiliario",
            "code": "MESAADJ",
            "description": "Mesa de escritorio eléctricamente ajustable en altura para una postura ergonómica óptima.",
            "imagen_url": "https://randu.mx/cdn/shop/products/BC120manual.jpg"
        },
        {
            id: 8,
            "name": "Silla gaming con respaldo reclinable",
            "category": "Mobiliario",
            "code": "SILLAGAM",
            "description": "Silla gaming con respaldo reclinable y reposapiés integrado para mayor comodidad.",
            "imagen_url": "https://cdn.homedepot.com.mx/productos/167702/167702-za1.jpg"
        },
        {
            id: 9,
            "name": "Estante flotante para libros",
            "category": "Mobiliario",
            "code": "ESTFLOT",
            "description": "Estante flotante de pared para organizar libros y objetos decorativos.",
            "imagen_url": "https://www.gaudi.com.mx/wp-content/uploads/2020/08/LIBRERO-ABIERTO-CON-4-ENTREPAN%CC%83OS.jpg"
        },
        {
            id: 10,
            name: 'Computadora',
            category: 'Computadoras',
            code: '2g3t4y5ig',
            description: 'Computadora bien chidorias que ni te imaginas el procesador y el tamaño de poder bien chidorias que tiene. Ni obama tiene eta laptop',
            imagen_url: 'https://i5-mx.walmartimages.com/mg/gm/1p/images/product-images/img_large/00019752884726l.jpg'
        },
        {
            id: 11,
            name: 'Computadora chidoris 2',
            category: 'Computadoras',
            code: '2g3t456789',
            description: 'Computadora bien chidorias que no la tiene ni AMLO',
            imagen_url: 'https://i5-mx.walmartimages.com/mg/gm/1p/images/product-images/img_large/00061591600146l.jpg'
        },
        {
            id: 12,
            name: 'Mouse',
            category: 'Accessorios',
            code: '2g3t4678',
            description: 'Mouse alámbrico marca sony. Rating:5V 100mA',
            imagen_url: 'https://i5-mx.walmartimages.com/gr/images/product-images/img_large/00019162841641L.jpg'
        },
        {
            id: 13,
            name: 'Mesa de trabajo',
            category: 'Mobiliario',
            code: 'he3t4678',
            description: 'Mesa de 1x0.80m de cristal y 1 1.50m de altura',
            imagen_url: 'https://oficit.com/68920-home_default_2x/mesa-con-tapa-de-cristal-modelo-chantal-plus.jpg'
        },
        
    ]
    return (
        <>
        <div className="row"><NavBar/></div>
            <div className="container my-4">
                {/* <div className="row w-50 mx-auto"><AgregarProductoFormulario/></div> */}
                {/* <div className="row w-50 mx-auto"><EditarProducto/></div> */}
                <div className="row w-50 mx-auto mb-3 mt-3"><SearchComponent/></div>
                <div className="row">
                    <UsersList elements={initialElements} />
                </div>
            </div>
        </>
    )
}