import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { githubServices } from "../api/contributors";

const ListItem = ({ user }) => {
  const [userData, setUserData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const getData = async () => {
    const response = await githubServices.getUsers(user?.login);
    setUserData(response?.data);
    setIsOpen(!isOpen);
  };

  const helperForString = (string) => {
    if (string) {
      return string;
    }
    return "не указано";
  };

  return (
    <>
      <div className="mt-3.5 gap-[10%] p-[3%] w-[60%] h-[70px] border-solid border-[2px] border-black flex flex-row justify-between items-center">
        <div className="flex flex-row items-center justify-start w-[70%] gap-[10%]">
          <div className="w-[50px] h-[50px]">
            <a href={user?.html_url} target={"_blank"}>
              <img
                className="w-full h-full"
                src={user?.avatar_url}
                alt="avatar"
              />
            </a>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-[90%]">{user?.login}</p>
          </div>
        </div>
        <div className="cursor-pointer" onClick={() => getData()}>
          <IoIosArrowDown />
        </div>
      </div>
      {isOpen && (
        <div className="mb-3.5 w-[60%] h-auto bg-[#0b83fe4d]">
          <p className='text-[90%]'>name: {helperForString(user?.login)}</p>
          <p className='text-[90%]'>login: {helperForString(userData?.name)}</p>
          <p className='text-[90%]'>email: {helperForString(userData?.email)}</p>
          <p className='text-[90%]'>contributions: {helperForString(user?.contributions)}</p>
        </div>
      )}
    </>
  );
};

export default ListItem;
