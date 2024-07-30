import { useEffect, useState } from "react";

const RegistroCliente = (props) => {
    //Datos del cliente

    const [nombresCliente, setNombresCliente] = useState("");
    const [apellidoPaterno, setApellidoPaterno] = useState("");
    const [apellidoMaterno, setApellidoMaterno] = useState("");
    const [celularCliente, setCelularCliente] = useState("");
    const [documento, setDocumento] = useState("");


    //console.log(nombresCliente)
    //console.log(apellidoMaterno)




    const nombresClienteHandler = (valor) => {
        setNombresCliente(valor);
        props.datosIngresados({
            nombres: valor,
            apellidoPaterno: apellidoPaterno,
            apellidoMaterno: apellidoMaterno,
            celular: celularCliente,
            documento: documento
            
        })
    }
    const apellidoPaternoHandler = (valor) => {
        setApellidoPaterno(valor);
        props.datosIngresados({
            nombres: nombresCliente,
            apellidoPaterno: valor,
            apellidoMaterno: apellidoMaterno,
            celular: celularCliente,
            documento: documento
        })
    }

    const apellidoMaternoHandler = (valor) => {
        setApellidoMaterno(valor);
        props.datosIngresados({
            nombres: nombresCliente,
            apellidoPaterno: apellidoPaterno,
            apellidoMaterno: valor,
            celular: celularCliente,
            documento: documento
        })
    }

    const celularClienteHandler = (valor) => {
        setCelularCliente(valor);
        props.datosIngresados({
            nombres: nombresCliente,
            apellidos: apellidoPaterno,
            celular: valor,
            documento: documento
        })
    }
   

    const documentoHandler = (valor) => {
        setDocumento(valor);
        props.datosIngresados({
            nombres: nombresCliente,
            apellidoPaterno: apellidoPaterno,
            apellidoMaterno: apellidoMaterno,
            celular: celularCliente,
            documento: valor
        })
    }




    useEffect(() => {
        if (props.infoSocio && props.paso === 2) {
            setNombresCliente(props.infoSocio.nombres);
            console.log("INFO SOC/CL ", props.infoSocio)
            setDocumento(props.infoSocio.cedula);
            setNombresCliente(props.infoSocio.nombres);
            setApellidoPaterno(props.infoSocio.apellidoPaterno);
            setApellidoMaterno(props.infoSocio.apellidoMaterno);
            setCelularCliente(props.infoSocio.celularCliente);
    
        }
    }, [props.infoSocio, props.paso])



    return (
        <>
           

            {props.paso === 2 &&
                <div className={`f-row w-100 sliding-div`}>   

                        <div className={"f-row"}>
                            <h2>Registro Datos del Cliente</h2>
                        </div>
                            <form>
                                <section>
                                    <div className='mb-2'>
                                        <label>Cédula:</label>
                                        <div className="f-row">
                                            <input id="cedula" className={`w-100 `} type="text" placeholder="1150216791" onChange={documentoHandler} value={documento}   ></input>
                                        </div>
                                    </div>

                                    <div className='mb-2'>
                                        <label>Nombres:</label>
                                        <div className="f-row">
                                        <input id="nombres" className={`w-100 `} type="text" placeholder="Ej. Luis Miguel" onChange={nombresClienteHandler} value={nombresCliente}></input>
                                        </div>

                                    </div>

                                    <div className='mb-2'>
                                        <label>Apellidos paterno:</label>
                                        <div className="f-row">
                                        <input id="apellido_paterno" className={`w-100 `} type="text" placeholder="Ej. Salazar" onChange={apellidoPaternoHandler} value={apellidoPaterno}></input>
                                        </div>
                                    </div>

                                    <div className='mb-2'>
                                        <label>Apellido materno:</label>
                                        <div className="f-row">
                                            <input className={`w-100 `} type="text" placeholder="Ej. Benitez" onChange={apellidoMaternoHandler} value={apellidoMaterno}></input>
                                        </div>

                                    </div>


                                    <div className='mb-2'>
                                        <label>Celular:</label>
                                        <div className="f-row">
                                            <input className={`w-100 `} type="number" placeholder="Ej. 0999999999" onChange={celularClienteHandler} value={celularCliente} ></input>
                                        </div>
                                    </div>


                                </section>

                            </form>
  
                </div>
            }
        </>
    );
}

export default RegistroCliente;



              