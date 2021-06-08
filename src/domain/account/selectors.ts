import RootState from "@/domain/root-state";

/**
 * Returns if the app's user is logged in
 */
export const isLoggedIn = (s: RootState) => s.account.username !== "";
