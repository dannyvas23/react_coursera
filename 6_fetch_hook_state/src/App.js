import React from "react";


const AppFetch = () => {
  //APP FETCH
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

 return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
      <h1>Customer data</h1>
      <h2>Name: {user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt="" />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}


const AppReducer = () => {
  
  // APP REDUCER
  const reducer = (state,action) => {
    if (action.type ==='buy_ingredients') return {money: state.money - 10};
    if (action.type ==='sell_a meal') return {money: state.money +10};
    return state;
  }

  const initiaLState =  {money: 100};
  const [state, dispatch] = React.useReducer(reducer,initiaLState);
  
    return (
      <div className="App">
        <h1>Wallet: {state.money}</h1>
        <div>
          <button onClick={() =>  dispatch({type: 'buy_ingredients'})}>Shopping for veggies!</button>
          <button onClick={() =>  dispatch({type: 'sell_a meal'})}>Serve a meal to the customer</button>
        </div>
      </div>
    );

};


const AppFocusInput = () => {
  
  const formInputRef = React.useRef(null);
  const focusInput = () => {
    formInputRef.current.focus( )
  }
  
  return (
    <>
    <h1>Using useRef to access underlying DOM</h1>
      <input ref={formInputRef} / >
      <button onClick={focusInput}>
      Focus input
      </button>
    </>
  )

}


const App_crear_hook = () => {

  function usePrevious(val) {
    const ref = React.useRef();
    React.useEffect(() => {
      ref.current = val;
    }, [val]);

    return ref.current;
  }

  const [day, setDay] = React.useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );

}


const App_ejemplo_reducerN2 = ()  => {

  function reducer(state, action) {
    switch (action.type) {
      case 'incremented_age': {
        return {
          name: state.name,
          age: state.age + 1
        };
      }
      case 'changed_name': {
        return {
          name: action.nextName,
          age: state.age
        };
      }
    }
    throw Error('Unknown action: ' + action.type);
  }
  
  const initialState = { name: 'Taylor', age: 42 };
  
  
    const [state, dispatch] = React.useReducer(reducer, initialState);
  
    function handleButtonClick() {
      dispatch({ type: 'incremented_age' });
    }
  
    function handleInputChange(e) {
      dispatch({
        type: 'changed_name',
        nextName: e.target.value
      }); 
    }
  
    return (
      <>
        <input
          value={state.name}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>
          Increment age
        </button>
        <p>Hello, {state.name}. You are {state.age}.</p>
      </>
    );

}


const App_cloneElement_childrenMap= ()  => {

  const Row = ({ children, spacing }) => {
    const childStyle = {
      marginLeft: `${spacing}px`
    };

    return (
      <div className="Row">
        {React.Children.map(children, (child,index) => { 
          return React.cloneElement(child, {
            style: {
              ...child.props.style,
              ...(index > 0 ? childStyle: { color: "red"}),
            },
          });
        })}
        
      </div>
    );
  }

  
  return (
    <div className="App">
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>$30</p>
        <p>18:30</p>
        <p>Dabbty</p>
      </Row>
    </div>
  )


}



const App_cloneElement_childrenMap_Ej2= ()  => {
  
  const RadioGroup = ({ onChange, selected, children }) => { 
    const RadioOptions = React.Children.map(children, (child) => { 
      return React.cloneElement(child, { 
        onChange, 
        checked: child.props.value === selected, 
      }); 
    }); 
    return <div className="RadioGroup">{RadioOptions}</div>; 
  }; 
    
  const RadioOption = ({ value, checked, onChange, children }) => { 
    return ( 
      <div className="RadioOption"> 
        <input 
          id={value} 
          type="radio" 
          name={value} 
          value={value} 
          checked={checked} 
          onChange={(e) => { 
            onChange(e.target.value); 
          }} 
        /> 
        <label htmlFor={value}>{children}</label> 
      </div> 
    ); 
  }; 


  const [selected, setSelected] = React.useState("");
  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );

}



function App() {
  return (
   <>
     <AppFetch></AppFetch>
     <br></br>
     <AppReducer></AppReducer>
     <br></br>
     <App_ejemplo_reducerN2></App_ejemplo_reducerN2>
     <br></br>
     <AppFocusInput></AppFocusInput>
     <br></br>
     <App_crear_hook></App_crear_hook>
     <br></br>
      <App_cloneElement_childrenMap></App_cloneElement_childrenMap>
     <br></br>
      <App_cloneElement_childrenMap_Ej2></App_cloneElement_childrenMap_Ej2>
   </>
  )
}


export default App;
