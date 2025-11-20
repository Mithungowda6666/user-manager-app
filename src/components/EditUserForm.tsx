import { useState } from "react";

interface EditUserFormProps {
  user: any;
  onSave: (updatedUser: any) => void;
  onCancel: () => void;
}

const EditUserForm: React.FC<EditUserFormProps> = ({
  user,
  onSave,
  onCancel,
}) => {
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [company, setCompany] = useState(user.company?.name || "");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!name || !email || !phone || !company) {
      alert("All fields are required!");
      return;
    }

    const updatedUser = {
      ...user,
      name,
      email,
      phone,
      company: { name: company },
    };

    onSave(updatedUser);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <h3 style={{ color: "black" }}>Edit User</h3>

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
        <button type="submit" className="btn-edit">
          Save Changes
        </button>
        <button type="button" className="btn-delete" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditUserForm;
