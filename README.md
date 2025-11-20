# User Manager App

A simple React-based User Management Application that allows you to:

* Fetch and display user data
* Search users by name or email
* Add new users (Name, Email, Phone, Company)
* Edit existing users
* Delete users
* Use modal popups for creating and editing users

---

## 🚀 Features

### ✔ Display Users

Users are listed in a table with Name, Email, Phone, Company, and actions.

### ✔ Search Functionality

Search bar filters users based on name or email.

### ✔ Add User

Add new users through a modal form with input fields for:

* Name
* Email
* Phone
* Company

### ✔ Edit User

Update an existing user's details through a modal.

### ✔ Delete User

Remove a user from the list with a confirmation dialog.

---

## 🛠 Tech Stack

* React (TypeScript)
* CSS for styling
* Dummy API call using custom fetch function

---

## 📁 Project Structure

```
src
│
├── api
│   └── users.ts
│
├── components
│   ├── Modal.tsx
│   ├── AddUserForm.tsx
│   └── EditUserForm.tsx
│
├── App.tsx
└── App.css
```

---

## ▶ Running the Project

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

---

## 📦 Build for Production

```
npm run build
```

---

## 🧑‍💻 Author

Built for learning and demonstration purposes.

---

## ⭐ Contribute

Feel free to fork, clone, and submit pull requests.
