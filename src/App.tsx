import "./App.css";

import { useEffect, useState } from "react";
import { fetchUsers } from "./api/users";
import Modal from "./components/Modal";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  const handleAddUser = (user: any) => {
    setUsers((prev) => [...prev, user]);
    setOpenAddModal(false);
  };

  const handleEditClick = (user: any) => {
    setSelectedUser(user);
    setOpenEditModal(true);
  };

  const handleUpdateUser = (updatedUser: any) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
    setOpenEditModal(false);
  };

  const handleDeleteUser = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  if (loading) return <p style={{ textAlign: "center" }}>Loading users...</p>;

  return (
  <div className="page-wrapper">
    <h1 className="page-title">User Manager</h1>

    <div className="top-bar">
  <button className="btn-add" onClick={() => setOpenAddModal(true)}>
    + Add New User
  </button>

  <input
    type="text"
    className="search-input"
    placeholder="Search by name or email..."
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
  />
</div>



      {/* Add User Modal */}
      <Modal open={openAddModal} onClose={() => setOpenAddModal(false)}>
        <AddUserForm
          onSubmit={handleAddUser}
          onCancel={() => setOpenAddModal(false)}
        />
      </Modal>

      {/* Edit User Modal */}
      <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
        {selectedUser && (
          <EditUserForm
  user={selectedUser}
  onSave={handleUpdateUser}
  onCancel={() => setOpenEditModal(false)}
/>

        )}
      </Modal>

      {/* Table */}
      <div className="user-table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th align="left">Name</th>
              <th align="left">Email</th>
              <th align="left">Phone</th>
              <th align="left">Company</th>
              <th align="left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users
              .filter((user) => {
                const value = searchText.toLowerCase();
                return (
                  user.name.toLowerCase().includes(value) ||
                  user.email.toLowerCase().includes(value)
                );
              })
              .map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.company?.name}</td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => handleEditClick(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      style={{ marginLeft: 10 }}
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
