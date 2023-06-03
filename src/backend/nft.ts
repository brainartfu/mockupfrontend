import { collectionDTO } from "src/constant";
import { apiCore } from "./apiCore";

const api = new apiCore();

const SearchCollectionRequest = async(data:any) => {
    const result = await api.post('/nftcollections/search', data);
    if ( result === undefined ) {
        return {
            error: 'failed',
            message : "Server is downed"
        }
    }
    return result;
}

const AddCollectionRequest = async(data:collectionDTO) => {
    const result = await api.post('/nftcollections/create',data);
    if ( result === undefined) {
        return {
            error: 'failed',
            message : 'server is downed'
        }
    }
    return result ;
}

export {
    SearchCollectionRequest,
    AddCollectionRequest
};