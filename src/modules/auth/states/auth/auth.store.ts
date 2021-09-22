import { Store, StoreConfig } from "@datorama/akita";
import { AuthState, createInitialAuthState } from "./auth.model";

@StoreConfig({ name: "auth", resettable: true })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialAuthState());
  }
}

export const authStore = new AuthStore();
