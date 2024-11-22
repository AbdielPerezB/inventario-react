import React from "react"

export const UsersList = ({elements}) => {
    return(
        
        <table className="table gable-hover table-striped">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                    elements.map(element =>(
                        <tr key={element.id}>
                            <td>{element.name}</td>
                            <td><img src={element.imagen_url} alt="imagen" width="100px" /></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        // <table className="Table table-hover table-striped">
        //     <thead>
        //         <tr>
        //             <th>Nombre</th>
        //             <th>Imagen</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {
        //             elements.map(element => (
        //                 <tr>
        //                     <td>{element.name}</td>
        //                     <td><img src={element.imagen_url} alt="compu" width="300px"/></td>
        //                 </tr>
        //             ))
        //         }
        //     </tbody>
        // </table>
    )
}