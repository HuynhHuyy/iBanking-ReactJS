import { useRoutes } from "react-router-dom";
import RouterCfg from "./RouterCfg";
import React from 'react';



const App = () => {
  const routing = useRoutes(RouterCfg);
  return <>{routing}</>;
};

export default App;