import "./styles/UserCard.css"

const UserCard = ({ user, deleteUser, setUserEdit, handleOpenForm }) => {
  const handleDelete = () => {
    deleteUser("/users/", user.id);
  };

  const handleEdit = () => {
    setUserEdit(user);
    handleOpenForm();
  };

  return (
    <div className="wrap_container">
      <article className="card_container">
        <h2 className="card_header">{`${user.first_name} ${user.last_name}`}</h2>
        <ul className="card_list">
          <li className="card_item">
            <span className="card_item_key">Email </span>
            <span className="card_item_value">{user.email}</span>
          </li>
          <li className="card_item">
            <span className="card_item_key">Birthday </span>
            <span className="card_item_value">{user.birthday}</span>
          </li>
        </ul>
        <div className="card_buttons_container">
          <button className="card_delete_button button" onClick={handleDelete}>
            Delete
          </button>
          <button className="card_edit_button button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      </article>
    </div>
  );
};

export default UserCard;
