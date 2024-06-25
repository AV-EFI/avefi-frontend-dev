import { SearchDriver } from "@elastic/search-ui";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";

export default defineNuxtPlugin(() => {
    /*
        const connector = new AppSearchAPIConnector({
            searchKey: "search-371auk61r2bwqtdzocdgutmg",
            engineName: "search-ui-examples",
            hostIdentifier: "host-2376rb"
        });
    
        const config = {
            apiConnector: connector
        };
    
        const driver = new SearchDriver(config);
    
        driver.subscribeToStateChanges((state) =>
            console.log(`Received ${state.totalResults} results for your search!`)
        );
        */
});