
import './App.css';
import React from'react';
import ParentComponent from'./component/typechecking/parentcomponent/ParentComponent';

const App=()=> {
  return (
    <div className="Apps">
      <h4>***TypeChecking with PropTypes**</h4>
     <ParentComponent/>
    </div>
  );
}

export default App;

