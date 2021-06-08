import RootState from "@/domain/root-state";
import { useSelector } from "react-redux";
import { isEqual } from "lodash";

export function useRootSelector<T>(
  selector: (state: RootState) => T,
  equalityFn: (left: T, right: T) => boolean = isEqual
) {
  return useSelector(selector, equalityFn);
}
