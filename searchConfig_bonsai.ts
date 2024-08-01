export const config = {
    //Currently not used
    connection: {
        host: process.env.ELASTIC_BONSAI_HOST,
        auth: {
            username: process.env.ELASTIC_BONSAI_USERNAME,
            password: process.env.ELASTIC_BONSAI_PASSW
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
