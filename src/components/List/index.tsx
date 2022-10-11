import { useReducer } from "react";
import { animated, useTransition } from "react-spring";
import Header from "../Header";
import ListItem from "../ListItem";
import styles from "./list.module.css";
import reducer, { Item } from "./reducer";

// Height of row used for animation
const height = 25;

function List() {
  const [{ toDos, text }, dispatch] = useReducer(reducer, {
    toDos: [],
    text: "",
  });

  // create a group of animations that will run when the array changes
  const transitions = useTransition(
    toDos.map((data, i) => ({ ...data, y: i * height })),
    {
      from: { opacity: 0, y: 0 },
      leave: ({ y }) => ({ y, opacity: 0, height: 0 }),
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y }),
      key: (item: Item) => item.id,
    }
  );

  const updateText = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_TEXT", payload: e.currentTarget.value });
  };

  return (
    <div className={styles.list}>
      <Header
        text={text}
        addToList={() => {
          if (text.length > 0) {
            dispatch({ type: "ADD_TODO" });
          }
        }}
        updateText={updateText}
      />
      <div className={styles.items}>
        {toDos.length > 0 ? (
          transitions(
            ({ y, ...rest }, { name, id, isChecked }, { key }, index) => {
              return (
                <animated.div
                  key={key}
                  className={styles.animated}
                  style={{
                    transform: y.to((y: number) => `translate3d(0,${y}px,0)`),
                    ...rest,
                  }}
                >
                  <ListItem
                    key={id}
                    name={name}
                    isDownDisabled={index === toDos.length - 1}
                    position={index + 1}
                    isChecked={isChecked}
                    onCheck={() =>
                      dispatch({
                        type: "TOGGLE_CHECK",
                        payload: id,
                      })
                    }
                    onMoveUp={() =>
                      dispatch({
                        type: "MOVE_UP",
                        payload: id,
                      })
                    }
                    onMoveDown={() =>
                      dispatch({
                        type: "MOVE_DOWN",
                        payload: id,
                      })
                    }
                    updateItem={(newName) => {
                      dispatch({
                        type: "EDIT_ITEM",
                        payload: {
                          newName,
                          id,
                        },
                      });
                    }}
                    onDelete={() => {
                      dispatch({
                        type: "DELETE_ITEM",
                        payload: id,
                      });
                    }}
                  />
                </animated.div>
              );
            }
          )
        ) : (
          <div className={styles.empty}>
            To start your list add some items...
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
