import { createAction, props } from "@ngrx/store";

export const changePage = createAction(
  "[Activators] Change Page",
  props<{ page: number }>()
);
