import styles from "./header.module.css";

interface HeaderProps {
  text: string;
  updateText: (e: React.FormEvent<HTMLInputElement>) => void;
  addToList: () => void;
}

function Header({ text, updateText, addToList }: HeaderProps) {

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
      </div>
    </div>
  );
}

export default Header;
