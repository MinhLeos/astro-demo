import { useState, useEffect } from "react";

export default function ReactListUsers() {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetch(`https://64d1e94bf8d60b174361173e.mockapi.io/api/v1/users`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.length > 0) {
          setListUsers(data);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <div>
      <h2 className="text-lime-500">List User React</h2>
      <div>
        {listUsers.map((user) => {
          return (
            <div className="flex items-center my-5" key={user.id}>
              <img
                className="block w-10 h-10 rounded-full"
                alt={user.name}
                src={user.avatar}
              />
              <p className="text-lg ml-5">{user.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
