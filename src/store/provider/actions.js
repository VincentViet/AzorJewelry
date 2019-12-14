export const GET_PRODUCER_INFOS = 'GET_PRODUCER_INFOS';

export const getProducerInfos = (infos)=>{
    return {
        type: GET_PRODUCER_INFOS,
        payload: infos
    }
};