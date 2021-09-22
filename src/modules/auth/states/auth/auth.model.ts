import { Screen } from "../../models/enums/auth.enums";
import {
  Session,
} from "../../models/interfaces/auth.interface";

export interface AuthState {
  screen: string;
  session: Session;
}

export function createInitialAuthState(): AuthState {
  return {
    screen: Screen.LOGIN,
    session: { username: "", password: "" },
  };
}
