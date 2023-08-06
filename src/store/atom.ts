import { atom } from "recoil"
import { Status } from "../@types/todo"

export const contractTranTypeAtom = atom<Status>({
	key: "todo/readOnly",
	default: Status.READ,
})
