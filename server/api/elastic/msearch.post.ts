//import {Client} from '@elastic/elasticsearch';
import Client, { SearchkitConfig } from '@searchkit/api';
import {config} from '@/searchConfig_avefi';


export default defineEventHandler(async (event) => {
    const apiClient = Client(config, {debug: true});
    const body = await readBody(event);

    try {
        //body = body.replace("avefi:", "avefi\:");
        const response = await apiClient.searchkit.handleInstantSearchRequests(body, {
            getBaseFilters: () => {
                return [
                    {
                        bool: {
                            must: [
                                {
                                    exists: {
                                        field: "has_record.category"
                                    }
                                },
                                {
                                    match_phrase: {
                                        "handle": "*-TEST"
                                    }
                                },
                            ],
                        },
                    }
                ];        
            }
        });
        return response;
    }
    catch (ex) {
        console.log(ex);
        return null;
    }

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