import {
  SET_LOADER,
  UNSET_LOADER
} from "../../constants/loader/loader_action_type";
export function set_loader() {
  return {
    type: SET_LOADER,
    payload: true
  };
}
export function unset_loader() {
  return {
    type: UNSET_LOADER,
    payload: false
  };
}
