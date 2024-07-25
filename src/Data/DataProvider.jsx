import { useState } from "react";
import DataContext from "./GlobalContext";

const DataProvider = ({ children }) => {
    console.log(children);
    const [data, setData] = useState(null);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;