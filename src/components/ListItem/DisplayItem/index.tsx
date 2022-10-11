import styles from "./display-item.module.css";
import classNames from "classnames";

interface DisplayItemProps {
  name: string;
  position: number;
  onDelete: () => void;
  handleEdit: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  isDownDisabled: boolean;
  isChecked: boolean;
  onCheck: () => void;
}

function DisplayItem({
  name,
  position,
  onDelete,
  handleEdit,
  onMoveUp,
  onMoveDown,
  isDownDisabled,
  isChecked,
  onCheck,
}: DisplayItemProps) {
  return (
    <>
      <div className={styles.text}>{position})</div>
      <input
        type="checkbox"
        checked={isChecked}
        name="isChecked"
        onChange={onCheck}
      />
      <div
        className={classNames(styles.name, {
          [styles.striked]: isChecked,
        })}
      >
        {name}
      </div>
      <img
        src="/images/pen-to-square-solid.svg"
        alt="edit"
        className={styles.button}
        onClick={handleEdit}
      />
      <img
        src="/images/x-solid.svg"
        alt="delete"
        className={styles.button}
        onClick={onDelete}
      />
      <img
        src="/images/chevron-up.svg"
        className={classNames(styles.chevron, {
          [styles.disabled]: position === 1,
        })}
        onClick={onMoveUp}
        alt="move up"
      />

      <img
        src="/images/chevron-down.svg"
        className={classNames(styles.chevron, {
          [styles.disabled]: isDownDisabled,
        })}
        onClick={onMoveDown}
        alt="move down"
      />
    </>
  );
}

export default DisplayItem;
