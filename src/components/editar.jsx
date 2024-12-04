import React, { useState } from 'react';

const EditarProducto = () => {
    return (<>
        <h2>Editar Elemento:</h2>
        <form>
            <div className="form-group">
                <label for="imputNombre">Nombre:</label>
                <input type="text" className="form-control" id="imputNombre" />
            </div>
            <div className="form-group">
                <label for="imputCodigo">Código: (Solo lectura)</label>
                <input type="text" className="form-control" id="imputCodigo" placeholder='TECMEC' readOnly/>
            </div>
            <div className="form-group">
                <label for="inputDescri">Descripción:</label>
                <input type="text" className="form-control" id="inputDescri" />
            </div>
            <div class="form-group col-md-4 mb-3">
                <label for="inputState">Categoría:</label>
                <select id="inputState" class="form-control">
                    <option selected>Computadoras</option>
                    <option>Accesorios</option>
                    <option>Mobiliario</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlFile1">Seleccionar imagen: </label>
                <input type="file" class="form-control-file mx-3" id="exampleFormControlFile1" />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Guardar cambios</button>
        </form>
    </>
    );
};

export default EditarProducto;
