import { createAction, props } from "@ngrx/store";

export const initAction=createAction('application initiale');

export const changeUsername=createAction('Change Username',props<{username: string}>());

