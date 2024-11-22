import { UserForm } from "./components/UserForm"
import { UsersList } from "./components/UsersList"

export const UserApp = () => {

    const initialElements = [
        {
            id: 1,
            name: 'Computadora',
            category: 'Computadoras',
            code: '2g3t4y5ig',
            description: 'Computadora bien chidorias que ni te imaginas el procesador y el tamaño de poder bien chidorias que tiene. Ni obama tiene eta laptop',
            imagen_url: 'https://i5-mx.walmartimages.com/mg/gm/1p/images/product-images/img_large/00019752884726l.jpg'
        },
        {
            id: 2,
            name: 'Computadora chidoris 2',
            category: 'Computadoras',
            code: '2g3t456789',
            description: 'Computadora bien chidorias que no la tiene ni AMLO',
            imagen_url: 'https://i5-mx.walmartimages.com/mg/gm/1p/images/product-images/img_large/00061591600146l.jpg'
        }
    ]
    return(
        <>
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                <UserForm/>
            </div>
            <div className="row">
                <UsersList elements={initialElements}/>
            </div>
        </div>
        </>
    )
}