import { useState } from "react";
import styles from "./edit-item.module.css";

interface EditItemProps {
  name: string;
  position: number;
  cancelEdit: () => void;
  updateItem: (newName: string) => void;
}

function EditItem({ name, position, cancelEdit, updateItem }: EditItemProps) {
  const [editedName, setEditedName] = useState(name);

  const updateText = (e: React.FormEvent<HTMLInputElement>) => {
    setEditedName(e.currentTarget.value);
  };

  const onInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      cancelEdit();
      updateItem(editedName);
    }
  };

  return (
    <>
      <div className={styles.text}>{position})</div>
      <input
        type="text"
        className={styles.input}
        value={editedName}
        onChange={updateText}
        onKeyPress={onInputKeyPress}
      />
      <img
        src="/images/ban-solid.svg"
        alt="cancel"
        className={styles.button}
        onClick={cancelEdit}
      />
      <img
        src="/images/check-solid.svg"
        alt="save"
        className={styles.button}
        onClick={() => {
          cancelEdit();
          updateItem(editedName);
        }}
      />
    </>
  );
}

export default EditItem;
