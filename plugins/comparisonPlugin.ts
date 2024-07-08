import { toast } from "vue3-toastify";

export default defineNuxtPlugin(() => {

    const useObjectStore = useObjectListStore();

    const $addToComparison = ((filmId: string, filmTitle?: string): void => {
        if (filmId) {
            useObjectStore.addObject({ filmId, filmTitle })
                .then((added) => {
                    if (added == "listfull") {
                        toast.warn('Comparison must not contains more than two items. Please remove at least one item from the list before adding another one.', { autoClose: 4000 });
                    }
                    else if (added == "already") {
                        toast.warn('Item already in comparison', { autoClose: 3000 });
                    }
                    else if (added == "succ") {
                        toast.success(`${filmTitle} added to comparison`);
                    } else {
                        toast('Something happened');
                    }
                });
        }
    });

    return {
        provide: {
            addToComparison: $addToComparison,
            //ref by $toggleDrawerState
            toggleComparisonDrawerState: useObjectStore.toggleComparisonDrawerState,
            toggleFacetDrawerState: useObjectStore.toggleFacetDrawerState
        }
    };
});