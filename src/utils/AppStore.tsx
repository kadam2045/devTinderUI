import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "@/app/Redux/UserSlice";

export const AppStore = configureStore({
  reducer: {
    user: UserSlice,
  },
});
