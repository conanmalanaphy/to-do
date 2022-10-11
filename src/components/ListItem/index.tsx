import { useState } from "react";
import styles from "./list-item.module.css";
import classNames from "classnames";
import DisplayItem from "./DisplayItem";
import EditItem from "./EditItem";

interface ListItemProps {
  name: string;
  position: number;
  onDelete: () => void;
  updateItem: (name: string) => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  isDownDisabled: boolean;
  isChecked: boolean;
  onCheck: () => void;
}

function ListItem({
  name,
  position,
  onDelete,
  updateItem,
  onMoveUp,
  onMoveDown,
  isDownDisabled,
  isChecked,
  onCheck,
}: ListItemProps) {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const cancelEdit = () => {
    setEdit(false);
  };

  return (
    <div
      className={classNames(styles.listItem, {
        [styles.checked]: isChecked,
      })}
    >
      {!edit ? (
        <DisplayItem
          name={name}
          position={position}
          onDelete={onDelete}
          handleEdit={handleEdit}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          isDownDisabled={isDownDisabled}
          isChecked={isChecked}
          onCheck={onCheck}
        />
      ) : (
        <EditItem
          name={name}
          position={position}
          cancelEdit={cancelEdit}
          updateItem={updateItem}
        />
      )}
    </div>
  );
}

export default ListItem;
