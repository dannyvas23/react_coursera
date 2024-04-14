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

function App() {
  return (
   <>
     <AppFetch></AppFetch>
     <br></br>
     <AppReducer></AppReducer>
     <br></br>
     <AppFocusInput></AppFocusInput>
   </>
  )
}


export default App;
