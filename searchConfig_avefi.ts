/* eslint-disable camelcase */
//move creds to server-side for runtime.private access
export const config = {
    connection: {
        //host: 'https://commerce-demo.es.us-east4.gcp.elastic-cloud.com:9243',
        host: 'http://141.5.105.237:9200',
        // if you are authenticating with api key
        // https://www.searchkit.co/docs/guides/setup-elasticsearch#connecting-with-api-key
        //apiKey: 'a2Rha1VJTUJMcGU4ajA3Tm9fZ0Y6MjAzX2pLbURTXy1hNm9SUGZGRlhJdw=='
    },
    future: {
        preserveSharedStateOnUnmount: true,
    },
    settings: {
        routing: true,
    },
    search_settings: {
        highlight_attributes: ['has_record.has_primary_title.has_name'],
        search_attributes: [
            { field: 'has_record.has_primary_title.has_name', weight: 3 }, 
            'has_record.has_primary_title.has_ordering_name',
            'has_record.has_event.has_activity.has_agent.has_name',
            'has_record.has_event.has_activity.has_agent.has_alternate_name'
        ],
        result_attributes: [
            'has_record.has_primary_title.has_name',             
            'has_record.has_primary_title.has_ordering_name',
            'has_record.has_event.has_activity.has_agent.has_name',
            'has_record.has_event.has_activity.has_agent.has_alternate_name'
        ],
        facet_attributes: [
            'type'
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
        //snippet_attributes: ['plot'],
        query_rules: []
    }
};