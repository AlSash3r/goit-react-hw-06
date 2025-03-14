import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <li className={s.listItem}>
      <div>
        <p className={s.infoItem}>
          <FaUser />
          {name}
        </p>
        <p className={s.infoItem}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button
        className={s.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}