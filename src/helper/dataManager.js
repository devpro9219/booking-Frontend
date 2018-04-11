import insData from '../data/insuranceTypes';

export function getInsuranceData(value) {
    for(var i=0;i<insData.length;i++){
        if(insData[i]['name'] == value){
            return insData[i]['value'];
        }
    }
    return 'not found';
}