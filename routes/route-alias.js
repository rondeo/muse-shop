module.exports =  (data) => {
    let controllerName = data;
    data = data.split('-');

    if(data[1]){
        data[1] = data[1].charAt(0).toUpperCase() + data[1].slice(1);
        controllerName = data[0] + data[1];
    }
    
    return controllerName;
}
