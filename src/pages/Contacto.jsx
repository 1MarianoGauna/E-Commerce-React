import * as React from 'react';


function Contacto() {
    return (
        <div className='contactoForm'>
            <div className='tituloForm'>
                <h3>¿Tenes alguna duda?</h3>
                <span>¡Contactanos!</span>
            </div>
            <form>
                <div className="mb-3 contacto-form">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com" />
                </div>
                <div className="mb-3 contacto-form" >
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Escribe el texto</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}
export default Contacto