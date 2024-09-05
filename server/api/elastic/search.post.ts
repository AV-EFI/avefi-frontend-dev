import {Client} from '@elastic/elasticsearch';


export default defineEventHandler(async (event) => {
    const client = new Client({ node: useRuntimeConfig().public.ELASTIC_HOST });
    console.log(useRuntimeConfig().public.ELASTIC_INDEX);
    const body = await readBody(event);
    const documentId:string = body.id.toString();

    console.log(documentId);

    const result = await client.search({
        index: useRuntimeConfig().public.ELASTIC_INDEX,
        query: {
            bool: {
                must: {
                    match: {
                        "has_record.is_manifestation_of.id.keyword": documentId
                    }
                }
            }
        }
    });

    return result.hits.hits;
    /*
    const { hits } = await client.search({
        index: useRuntimeConfig().public.ELASTIC_INDEX,
        body: {
            query: {
                match: {
                    has_record.is_item_of: documentId
                }
            }
        }
    });
    console.log(hits.hits);
    return hits.hits;

    */
});