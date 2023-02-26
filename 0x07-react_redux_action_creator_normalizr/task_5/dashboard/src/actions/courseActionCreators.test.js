import { selectCourse, unselectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("selectCourse action creator", () => {
  it("returns the correct action", () => {
    const expectedAction = { type: SELECT_COURSE, payload: 1 };
    const action = selectCourse(1);
    expect(action).toEqual(expectedAction);
  });
});

describe("unselectCourse action creator", () => {
  it("returns the correct action", () => {
    const expectedAction = { type: UNSELECT_COURSE, payload: 1 };
    const action = unselectCourse(1);
    expect(action).toEqual(expectedAction);
  });
});
