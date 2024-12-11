import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "./Database"; // Import initial enrollments from Database

interface Enrollment {
  user: string; // User ID
  course: string; // Course ID
}

interface EnrollmentState {
  enrollments: Enrollment[]; // Array of enrollment objects
}

// Load from local storage if it exists; otherwise, use initial enrollments from Database
const loadEnrollments = (): Enrollment[] => {
  const storedEnrollments = localStorage.getItem("enrollments");
  return storedEnrollments
    ? JSON.parse(storedEnrollments)
    : initialEnrollments;
};

const initialState  = {
  enrollments: loadEnrollments(),
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enroll: (state, action: PayloadAction<Enrollment>) => {
      const { user, course } = action.payload;
      console.log("user is",user,"course is",course);

      const isAlreadyEnrolled = state.enrollments.some(
        (enrollment) => enrollment.user === user && enrollment.course === course
      );

      if (!isAlreadyEnrolled) {
        state.enrollments.push(action.payload);
        localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
      }
    },
    unenroll: (state, action: PayloadAction<Enrollment>) => {
      const { user, course } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(enrollment.user === user && enrollment.course === course)
      );
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
    
  },
});

export const { enroll, unenroll } =
  enrollmentSlice.actions;
export default enrollmentSlice.reducer;
