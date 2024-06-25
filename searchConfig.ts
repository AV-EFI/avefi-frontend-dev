import "regenerator-runtime/runtime";
import ElasticsearchAPIConnector from "@elastic/search-ui-elasticsearch-connector";

const connector = new ElasticsearchAPIConnector({
    host: "https://localhost:9200",
    index: "avefi_works_2",
    apiKey: "Z0lpZ2RvOEIxTVdLWGJEQ3ZTdzQ6UmtyUkE0OVFSVktXX0c3WGFwLU5SZw==",
});

const config = {
    debug: true,
    apiConnector: connector,
    searchQuery: {
        //filters: [{ field: "Title", values: ["true"] }],
        search_fields: {
            Title: { weight: 3 },
            Genres: {},
            ProductionCompany: {}
        },
        result_fields: {
            Genres: {},
            Title: {
                snippet: {
                    size: 100,
                    fallback: true
                }
            },
            ProductionCompany: {}
        },
        disjunctiveFacets: ["Title.keyword", "Genres.keyword", "Source.keyword", "ProductionCompany.keyword"],
        facets: {
            "Title.keyword": {
                type: "value",
                weight: 3
            },
            "Genres.keyword": {
                type: "value"
            },
            "ProductionCompany.keyword": {
                type: "value"
            },
            "Source.keyword": {
                type: "value"
            }
        }
    },
    alwaysSearchOnInitialLoad: true
};


/*
const connector = new AppSearchAPIConnector({
    searchKey: "search-nyxkw1fuqex9qjhfvatbqfmw",
    engineName: "hearthstone-cards",
    endpointBase: "https://search-ui-sandbox.ent.us-central1.gcp.cloud.es.io"
});

const config = {
    debug: true,
    apiConnector: connector,
    searchQuery: {
        disjunctiveFacets: ["cost", "card_class", "set", "type", "race", "rarity"],
        facets: {
            race: {
                type: "value"
            },
            rarity: {
                type: "value"
            },
            type: {
                type: "value"
            },
            set: {
                type: "value",
                size: 30
            },
            card_class: {
                type: "value"
            },
            cost: {
                type: "range",
                ranges: [
                    { from: 0, to: 1, name: "0" },
                    { from: 1, to: 2, name: "1" },
                    { from: 2, to: 3, name: "2" },
                    { from: 3, to: 4, name: "3" },
                    { from: 4, to: 5, name: "4" },
                    { from: 5, to: 6, name: "5" },
                    { from: 6, to: 7, name: "6" },
                    { from: 7, to: 8, name: "7" },
                    { from: 8, name: "8+" }
                ]
            }
        }
    }
};
*/

export default config;