import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Header, Scroll, Table, Form, Modal } from "./styles";

const UserForm = ({ onSubmit, editingUser, setEditingUser }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setUsername(editingUser.username);
    } else {
      setName("");
      setUsername("");
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "" || username.trim() !== "") {
      if (editingUser) {
        onSubmit({ id: editingUser.id, name, username });
        setEditingUser(null);
      } else {
        onSubmit({ name, username });
      }
      setName("");
      setUsername("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="container">
        <label htmlFor="">NOME</label>
        <input
          type="text"
          placeholder="Insira seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="container">
        <label htmlFor="">USERNAME</label>
        <input
          type="text"
          placeholder="Insira seu username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button type="submit" disabled={name === "" || username === ""}>
        {editingUser ? "ALTERAR" : "ADICIONAR"}
      </button>
    </Form>
  );
};

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <Table>
      <Header>
        <h3>Nome do usuário</h3>
        <h3>Username</h3>
        <h3>Ação</h3>
      </Header>
      <Scroll>
        {users.map((user) => (
          <thead key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td style={{ justifyContent: "space-around" }}>
              <button
                style={{ background: "green" }}
                onClick={() => onEdit(user)}
              >
                EDITAR
              </button>
              <button
                style={{ background: "red" }}
                onClick={() => onDelete(user)}
              >
                DELETAR
              </button>
            </td>
          </thead>
        ))}
      </Scroll>
    </Table>
  );
};

const ConfirmationModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <Modal>
      <div className="modal-content">
        <h3>DELETAR USUÁRIO</h3>
        <p>Você tem certeza que deseja deletar esse usuário?</p>
        <div className="modal-buttons">
          <button style={{ background: "red" }} onClick={onClose}>
            CANCELAR
          </button>
          <button onClick={onConfirm}>CONFIRMAR</button>
        </div>
      </div>
    </Modal>
  );
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [editingUser]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (user) => {
    try {
      const response = await axios.post("http://localhost:8080/users", user);
      setUsers([...users, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (user) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/users/${editingUser.id}`,
        user
      );
      const updatedUser = response.data;
      setUsers((prevUsers) => {
        const updatedUsers = prevUsers.map((u) =>
          u.id === updatedUser.id ? updatedUser : u
        );
        return updatedUsers;
      });
      setEditingUser(null);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (user) => {
    try {
      await axios.delete(`http://localhost:8080/users/${user.id}`);
      const updatedUsers = users.filter((u) => u.id !== user.id);
      setUsers(updatedUsers);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = (user) => {
    setShowConfirmation(true);
    setEditingUser(user);
  };

  const handleConfirmDelete = () => {
    setShowConfirmation(false);
    deleteUser(editingUser);
    setEditingUser(null);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
    setEditingUser(null);
  };

  return (
    <Container>
      <h1>LISTA DE USUÁRIO</h1>
      <UserForm
        onSubmit={editingUser ? updateUser : addUser}
        editingUser={editingUser}
        setEditingUser={setEditingUser}
      />
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      <ConfirmationModal
        show={showConfirmation}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </Container>
  );
};

export default App;
