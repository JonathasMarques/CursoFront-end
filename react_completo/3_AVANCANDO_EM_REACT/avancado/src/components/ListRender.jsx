import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Josias", "Pedro"])

    const[users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Pedro", age: 20},
        {id: 3, name: "João", age: 17},
    ]);

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) =>
         prevUsers.filter((users) => randomNumber !== users.id)
        );
    };

  return (
    <div>
        {/* 4 - render sem key */}
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        {/* 5 - render com key */}
        <ul>
            {users.map((users) => (
                <li key={users.id}>{users.name} - {users.age} anos</li>
            ))}
        </ul>
        {/* 6 - previous state */}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender