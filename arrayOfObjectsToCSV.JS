function arrayOfObjectsToCSV(arrayData){
    let csv = '';
    let headers = Object.keys(arrayData[0]).join(',');
    let values = arrayData.map(x => Object.values(x).join(',')).join('\n');
    csv += headers + '\n' + values;
    return csv
}
