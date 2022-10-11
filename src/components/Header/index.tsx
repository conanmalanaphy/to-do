import styles from "./header.module.css";

interface HeaderProps {
  text: string;
  updateText: (e: React.FormEvent<HTMLInputElement>) => void;
  addToList: () => void;
  hasNoItems: boolean;
  clearList: () => void;
}

function Header({
  text,
  updateText,
  addToList,
  hasNoItems,
  clearList,
}: HeaderProps) {
  // We also want to handle users pressing enter to add
  const onInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      addToList();
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.title}>To-Do</div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={text}
          onChange={updateText}
          onKeyPress={onInputKeyPress}
          placeholder="Fresh idea..."
        />
        <button name="add" onClick={addToList} disabled={text.length === 0}>
          Add
        </button>
        <button
          name="clear"
          className={styles.clearButton}
          onClick={clearList}
          disabled={hasNoItems}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Header;
