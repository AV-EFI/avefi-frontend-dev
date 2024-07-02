export const config = {
    connection: {
        //host: 'https://commerce-demo.es.us-east4.gcp.elastic-cloud.com:9243',
        host: 'https://commerce-demo.es.us-east4.gcp.elastic-cloud.com:9243',
        // if you are authenticating with api key
        // https://www.searchkit.co/docs/guides/setup-elasticsearch#connecting-with-api-key
        apiKey: 'a2Rha1VJTUJMcGU4ajA3Tm9fZ0Y6MjAzX2pLbURTXy1hNm9SUGZGRlhJdw=='

    // if you are authenticating with username/password
    // https://www.searchkit.co/docs/guides/setup-elasticsearch#connecting-with-usernamepassword
    //auth: {
    //  username: "elastic",
    //  password: "changeme"
    //},
    },
    settings: {
        routing: true,
        future: {
            preserveSharedStateOnUnmount: true,
            cleanUrlOnDispose: false,
        },
    },
    search_settings: {
        highlight_attributes: ['title'],
        search_attributes: [{ field: 'title', weight: 3 }, 'actors', 'plot'],
        result_attributes: ['title', 'actors', 'plot'],
        facet_attributes: [
            'type',
            { attribute: 'actors', field: 'actors.keyword', type: 'string' }
        ],
        sorting: {
            default: {
                field: '_score',
                order: 'desc'
            }
            //activate only when replica indices are available
            /*
            ,
            imdb_movies: {
                field: '_score',
                order: 'desc'
            },
            imdb_movies_title_asc: {
                field: 'imdb_movies_title',
                order: 'asc'
            },
            _title_desc: {
                field: 'title',
                order: 'desc'
            }
                */
        },
        snippet_attributes: ['plot'],
        query_rules: []
    }
};