import { useState } from "react";
import Cards from "../components/Cards/Cards";
import axios from "axios";
import { useEffect } from "react";
import TopNav from "../components/TopNav/TopNav";

function HomePage() {
  const [data, setData] = useState([]);
  const [usersdata, setUsersData] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://dummyjson.com/users").then((response) => {
        setData(response.data.users);
        setUsersData(response.data.users);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value, "value");
    const mainData = [...usersdata];
    if (value?.length > 0) {
      let searchingData = mainData.filter(
        (item) =>
          item?.firstName?.toLowerCase()?.includes(value?.toLowerCase()) ||
          item?.lastName?.toLowerCase()?.includes(value?.toLowerCase())
      );
      console.log(searchingData, "searchingData");
      setUsersData(searchingData);
    } else {
      setUsersData(data);
    }
  };
  return (
    <>
      <TopNav />
      <div className="w-full h-lvh App">
        <div className="h-full mx-auto lg:w-4/5">
          <div className="flex flex-wrap items-center justify-center h-full ">
            <div className="w-4/5">
              {" "}
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => handleChange(e)}
                className="w-full p-2 my-5 rounded-lg focus:outline-sky-500"
              />
            </div>
            {usersdata &&
              usersdata.map((item, index) => {
                return (
                  <div key={index}>
                    <Cards user={item} className="" />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
