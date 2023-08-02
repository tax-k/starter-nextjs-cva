'use client';

import { useQuery } from '@tanstack/react-query';
import { User } from '@types';
import React from 'react';

async function fetchUsers() {
  return await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    res.json(),
  );
}

export default function ListUsers() {
  const [count, setCount] = React.useState(0);

  const { data } = useQuery<User.TUser[]>({
    queryKey: ['stream-hydrate-users'],
    queryFn: () => fetchUsers(),
    suspense: true,
    staleTime: 5 * 1000,
  });

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <p>{count}</p>
      {
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {data?.map((user, idx) => {
            return (
              <div
                key={user.id}
                style={{ border: '1px solid #ccc', textAlign: 'center' }}
              >
                <img
                  src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                  alt={user.name}
                  style={{ width: 180, height: 180 }}
                />
                <h3>{user.name}</h3>
              </div>
            );
          })}
        </div>
      }
    </>
  );
}
