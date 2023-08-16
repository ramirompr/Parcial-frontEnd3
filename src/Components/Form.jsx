import React from 'react'
import { useState } from 'react'
import '../Form.css'
const Form = () => {
    const [usuario, setUsuario]=useState("")
    const [color, setColor]=useState("")

    const [enviado, setEnviado]= useState(false)
    const [error, setError]= useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(usuario.length > 3 && color.length > 3){
            setEnviado(true)
            setError(false)
        }else{
            setError(true)
        }
    }
return (
    <form className='form' onSubmit={handleSubmit}>
        <label className='labels'>Ingrese su nombre</label>
        <input className='inputs' type="text" onChange={(e) => setUsuario(e.target.value)}/>
        <label className='labels'>Ingrese su color favorito</label>
        <input className='inputs' type="text" onChange={(e) => setColor(e.target.value)}/>
        <button className='boton' type='submit'>Enviar</button>
        {enviado && <h3>{usuario}, tu color favorito es el {color}</h3>}
        {error && <h3>Asegurate de ingresar correctamente tu nombre y tu color favorito.</h3>}
    </form>
)
}

export default Form