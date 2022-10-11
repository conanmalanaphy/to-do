import { moveArrayItem, newMaxId } from "./utils";

const initialArray = [
  {
    id: 1,
    name: "test",
  },
  {
    id: 2,
    name: "test 2",
  },
  {
    id: 3,
    name: "test 3",
  },
];
describe("Utils", () => {
  it("should move element forward a position", () => {
    const newArray = moveArrayItem(initialArray, 0, 1);

    expect(newArray[0].id).toBe(2);
  });
  it("should move element back a position", () => {
    const newArray = moveArrayItem(initialArray, 2, 1);

    expect(newArray[1].id).toBe(3);
  });

  it("should not move element forward a position if its higher than length", () => {
    const newArray = moveArrayItem(initialArray, 2, 4);

    expect(newArray[2].id).toBe(3);
  });

  it("should not move element forward a position if its lower than zero", () => {
    const newArray = moveArrayItem(initialArray, 0, -1);

    expect(newArray[0].id).toBe(1);
  });

  it("should update an new max id", () => {
    const newId = newMaxId(initialArray);

    expect(newId).toBe(4);
  });
  it("should create an new max id", () => {
    const newId = newMaxId([]);

    expect(newId).toBe(1);
  });
});
