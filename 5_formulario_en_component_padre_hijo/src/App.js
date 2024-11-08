import React, { useEffect, useState } from "react";
import RegistroCliente from "./componentes/RegistrarCliente";
import PageMuiDataTable from "./componentes/PageMuiDataTable";

function GoalForm(props) {
  const [formData, setFormData] = React.useState({ goal: "", by: "" });

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" })
  }

  return (
    <>

      <div style={{ width: "95%", display: "flex", justifyContent: "center" }}>
        
          <PageMuiDataTable></PageMuiDataTable>
       
      </div>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />

        <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler} />
        <button>Submit Goal</button>
      </form>
    </>
  );
}


function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>My goal is to {g.goal}, by {g.by}</span>
        </li>
      ))}
    </ul>
  );
}

const FuncionPadre = (props) => {
  return (
    <div style={{ border: "1px solid #ffffff", margin: "10px" }}>
      {props.children}
    </div>

  )

}

export default function App() {
  const [allGoals, updateAllGoals] = React.useState([]);

  function addGoal(goal) { updateAllGoals([...allGoals, goal]); }

  const [step, setStep] = useState(-1);
  const [nombres, setNombres] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [celular, setCelular] = useState("");
  const [documento, setDocumento] = useState("");

  const [objetoDatosGenerales, setObjetoDatosGenerales] = useState({
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    celularCliente: "",
    cedula: "",
  });


  const datosIngresadosHandler = (datosRetorno) => {
    setNombres(datosRetorno.nombres)
    setApellidoPaterno(datosRetorno.apellidoPaterno)
    setApellidoMaterno(datosRetorno.apellidoMaterno)
    setCelular(datosRetorno.celular)
    setDocumento(datosRetorno.documento)

  }

  const consulta = () => {
    const url = 'https://randomuser.me/api/';

    // Hacer la solicitud GET
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.results[0].name.first)
        setNombres(data.results[0].name.first);
        setApellidoPaterno(data.results[0].name.last);
        setApellidoMaterno(`- ${data.results[0].name.last}`);
        setCelular(data.results[0].location.street.number);
        setDocumento(data.results[0].location.street.name);
      })

  }
  /*
    useEffect(()=> {
      consulta();      
    },[])
  */

  useEffect(() => {
    if (step === 1) {
      setNombres("");
      setApellidoPaterno("");
      setApellidoMaterno("");
      setCelular("");
      setDocumento("");
    }
    if (step === 0) {
      consulta();
    }

  }, [step])



  useEffect(() => {
    let data = {
      nombres: nombres,
      apellidoPaterno: apellidoPaterno,
      apellidoMaterno: apellidoMaterno,
      celularCliente: celular,
      cedula: documento,
    }
    setObjetoDatosGenerales(data)

  }, [celular, documento, nombres, apellidoPaterno, apellidoMaterno])


  return (
    <div className="App">
      <GoalForm onAdd={addGoal}></GoalForm>
      <ListOfGoals allGoals={allGoals} />

      <h1>STEP ACTUAL {step}</h1>


      {step === 0 &&
        <div>
          <h2>PRUEBA STEP 0</h2>
          <h2>PRUEBA STEP 0</h2>
          <h2>PRUEBA STEP 0</h2>
          <h2>PRUEBA STEP 0</h2>
          <h2>PRUEBA STEP 0</h2>
          <h2>PRUEBA STEP 0</h2>
        </div>

      }

      {step === 1 &&

        <div>
          <h2>PRUEBA STEP 1</h2>
          <h2>PRUEBA STEP 1</h2>
          <h2>PRUEBA STEP 1</h2>
          <h2>PRUEBA STEP 1</h2>
          <h2>PRUEBA STEP 1</h2>
          <h2>PRUEBA STEP 1</h2>
        </div>
      }

      {step === 2 &&

        <div>
          <FuncionPadre>
            <RegistroCliente paso={step}
              infoSocio={objetoDatosGenerales}
              datosIngresados={datosIngresadosHandler}
            ></RegistroCliente>
          </FuncionPadre>
        </div>
      }

      <div>
        <br /><br />
        <button onClick={(e) => setStep(0)}>Step0</button>
        <button onClick={(e) => setStep(1)}>Step1</button>
        <button onClick={(e) => setStep(2)}>Step2</button>

      </div>
    </div>
  );

}