import { useState } from "react";
import Card from "./components/Card/Card";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((response) => {
      try {
        // console.log(response);
        setData(response.data.users);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);
  console.log(data);
  return (
    <>
      <div className="w-full h-lvh App">
        <div className="h-full mx-auto lg:w-4/5">
          <div className="flex flex-wrap items-center justify-center h-full ">
            {data &&
              data.map((item, index) => {
                return (
                  <div key={index}>
                    <Card user={item} className="" />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
