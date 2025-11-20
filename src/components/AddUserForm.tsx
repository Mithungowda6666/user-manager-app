import { useState } from "react";

function AddUserForm({ onSubmit, onCancel }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!name || !email || !phone || !company) {
      alert("Please fill all fields.");
      return;
    }

    const newUser = {
      id: Math.floor(Math.random() * 100000),
      name,
      email,
      phone,
      company: { name: company },
    };

    onSubmit(newUser);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <h3 style={{ color: "black" }}>Add New User</h3>


      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <button type="submit" className="btn-add">
          Save
        </button>
        <button type="button" className="btn-delete" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddUserForm;
