function DessertsList(props) {
    // Implement the component here.

    const desserts = props.data 
    .filter((dessert) => { 
        return dessert.calories < 500; 
    }).sort((a, b) => { 
        return a.calories - b.calories; 
    }).map((dessert) => { 
        return ( 
          <li> 
            {dessert.name} - {dessert.calories} cal 
          </li> 
        ); 
    }); 
    return <ul>{desserts}</ul>; 

    //Otra forma
    /*return (
    <ul>
      {desserts.map((dessert, index) => (
        <li key={index}>
          {dessert.name} - {dessert.calories} cal
        </li>
      ))}
    </ul>
  );*/
  
  }
  
  export default DessertsList;
  