import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootType } from "../app/store/Store";;



export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;