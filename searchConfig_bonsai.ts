export const config = {
    connection: {
        //host: 'https://commerce-demo.es.us-east4.gcp.elastic-cloud.com:9243',
        host: 'https://technische-informati-8716937806.eu-central-1.bonsaisearch.net/kibana_sample_data_ecommerce',
        // if you are authenticating with api key
        // https://www.searchkit.co/docs/guides/setup-elasticsearch#connecting-with-api-key
        //apiKey: 'a2Rha1VJTUJMcGU4ajA3Tm9fZ0Y6MjAzX2pLbURTXy1hNm9SUGZGRlhJdw=='
        // if you are authenticating with username/password
        // https://www.searchkit.co/docs/guides/setup-elasticsearch#connecting-with-usernamepassword
        auth: {
            username: "58xyjh39p8",
            password: "1wyuvqg1ax"
        },
    },
    search_settings: {
        highlight_attributes: ['category'],
        search_attributes: [{ field: 'category', weight: 3 }, 'customer_full_name', 'email'],
        result_attributes: ['category', 'customer_full_name', 'email', 'order_date'],
        facet_attributes: [
            'type',
            { attribute: 'category', field: 'category.keyword', type: 'string' },
            { attribute: 'order_date', fiel: 'order_date', type: 'date' }
        ],
        sorting: {
            default: {
                field: '_score',
                order: 'desc'
            },
            _rated_desc: {
                field: 'rated',
                order: 'desc'
            }
        },
        snippet_attributes: ['customer_full_name', 'email', 'order_date'],
        query_rules: []
    }
};
