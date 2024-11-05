import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "./Database"; // Import initial enrollments from Database

interface EnrollmentState {
  enrollments: string[]; // Array of course IDs the student is enrolled in
}

// Load from local storage if it exists; otherwise, use initial enrollments from Database
const loadEnrollments = (): string[] => {
  const storedEnrollments = localStorage.getItem("enrollments");
  return storedEnrollments ? JSON.parse(storedEnrollments) : initialEnrollments.map(enrollment => enrollment.course);
};

const initialState: EnrollmentState = {
  enrollments: loadEnrollments(),
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enrollInCourse: (state, action: PayloadAction<string>) => {
      if (!state.enrollments.includes(action.payload)) {
        state.enrollments.push(action.payload);
        localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
      }
    },
    unenrollFromCourse: (state, action: PayloadAction<string>) => {
      state.enrollments = state.enrollments.filter(
        (courseId) => courseId !== action.payload
      );
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
    resetEnrollments: (state) => {
      state.enrollments = initialEnrollments.map(enrollment => enrollment.course);
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
  },
});

export const { enrollInCourse, unenrollFromCourse, resetEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
