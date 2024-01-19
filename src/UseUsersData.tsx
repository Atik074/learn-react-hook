import { useEffect, useState } from "react";

const useUsersData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
   const controller = new AbortController()
     const signal = controller.signal
     console.log('this is' , signal)

  const url = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url ,  {signal});
      const data = await res.json();
      setIsLoading(false);
      setData(data);
    } catch (err) {
      setError(err);
     
    }
  };

  useEffect(() => {
    getUsers();
       return ()=>{
        controller.abort()
       }
   
  }, []);

  return { isLoading, error, data };
};

export default useUsersData;
