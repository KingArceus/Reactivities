import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";
import CounterStore from "./counterStore";
import { UiStore } from "./uiStore";

interface Store {
    counterStore: CounterStore;
    activityStore: ActivityStore;
    commonStore: CommonStore;
    uiStore: UiStore;
}

export const store: Store = {
    counterStore: new CounterStore(),
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    uiStore: new UiStore()
}

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
}