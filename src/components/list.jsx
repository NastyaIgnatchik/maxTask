import React, { useEffect, useState } from "react";
import ListItem from "./listItem";
import { githubServices } from "../api/contributors";

const List = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await githubServices.getContributors();
      setData(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-3.5">
      {data?.map((e) => (
        <ListItem key={e?.id} user={e} />
      ))}
    </div>
  );
};

export default List;
