import courseReducer from "./courseReducer";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

describe("courseReducer", function () {
  it("tests that the default state that returns an empty array", function () {
    const state = courseReducer(undefined, {});
    expect(state).toEqual([]);
  });

  it("tests that FETCH_COURSE_SUCCESS returns the data passed", function () {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: "ES6",
          credit: 60,
        },
        {
          id: 2,
          name: "Webpack",
          isSelected: true,
          credit: 20,
        },
        {
          id: 3,
          name: "React",
          isSelected: false,
          credit: 40,
        },
      ],
    };
  });

  const expectedData = [
    {
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60,
    },
    {
      id: 2,
      name: "Webpack",
      isSelected: true,
      credit: 20,
    },
    {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40,
    },
  ];

  const state = courseReducer(undefined, action);
  expect(state).toEqual(expectedData);
});

it("tests that SELECT_COURSE returns the data with the rigght item updated", function () {
  const initialState = [
    {
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60,
    },
    {
      id: 2,
      name: "Webpack",
      isSelected: false,
      credit: 20,
    },
    {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40,
    },
  ];

  const action = {
    type: SELECT_COURSE,
    index: 2,
  };

  const expectedData = [
    {
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60,
    },
    {
      id: 2,
      name: "Webpack",
      isSelected: true,
      credit: 20,
    },
    {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40,
    },
  ];

  const state = courseReducer(initialState, action);
  expect(state).toEqual(expectedData);
});

it("test that UNSELECT_COURSE returns the data with the right item", function () {
  const initialState = [
    {
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60,
    },
    {
      id: 2,
      name: "Webpack",
      isSelected: false,
      credit: 20,
    },
    {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40,
    },
  ];

  const action = {
    type: UNSELECT_COURSE,
    index: 2,
  };

  const expectedData = [
    {
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60,
    },
    {
      id: 2,
      name: "Webpack",
      isSelected: false,
      credit: 20,
    },
    {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40,
    },
  ];

  const state = courseReducer(initialState, action);
  expect(state).toEqual(expectedData);
});
