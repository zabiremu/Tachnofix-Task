import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopNav from "../TopNav/TopNav";

export default function CardDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    try {
      axios.get(`https://dummyjson.com/user/${id}`).then((response) => {
        setUserData(response?.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <TopNav />
      <div className="mx-auto lg:w-4/5">
        <div className="p-6 mx-2 mb-2 bg-white border border-gray-200 rounded-lg columns-2xl dark:bg-gray-800 dark:border-gray-700">
          <div>
            <img
              className="w-10 h-10 rounded"
              src={userData?.image}
              alt="Medium avatar"
            />
          </div>
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Name: {userData?.firstName} {userData?.lastName}
          </h5>
          <p className="mb-1 text-gray-500 dark:text-gray-400">
            Email: {userData?.email}
          </p>
          <p className="mb-1 text-gray-500 dark:text-gray-400">
            Company Name:
            <br /> {userData?.company?.name}
          </p>
          <p className="mb-1 text-gray-500 dark:text-gray-400">
            Address: {userData?.address?.address}
          </p>
          <p className="mb-1 text-gray-500 dark:text-gray-400">
            City: {userData?.address?.city}
          </p>
          <p className="mb-1 text-gray-500 dark:text-gray-400">
            PostalCode: {userData?.address?.postalCode}
          </p>
        </div>
      </div>
    </>
  );
}
