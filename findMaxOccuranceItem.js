const a = ['pear', 'apple', 'orange', 'apple', 'orange']
function modeString(array)
{
    if (array.length == 0)
        return null;

    var modeMap = {},
        maxEl,
        maxCount = 0;

    array.forEach(item=>{
        if(!modeMap[item]) modeMap[item] = 1;
        else modeMap[item]++;
    })

    for(let item in modeMap){
        if(modeMap[item] > maxCount){
            maxEl = item;
            maxCount = modeMap[item];
        } else if(modeMap[item] == maxCount){
            maxEl += '&' + item;
            maxCount = modeMap[item];
        }
    }

    return {
        maxEl,
        maxCount
    };
    // for(var i = 0; i < array.length; i++)
    // {
    //     var el = array[i];

    //     if (modeMap[el] == null)
    //         modeMap[el] = 1;
    //     else
    //         modeMap[el]++;

    //     if (modeMap[el] > maxCount)
    //     {
    //         maxEl = el;
    //         maxCount = modeMap[el];
    //     }
    //     else if (modeMap[el] == maxCount)
    //     {
    //         maxEl += '&' + el;
    //         maxCount = modeMap[el];
    //     }
    // }
    // console.log(modeMap)
    // return maxEl;

}
console.log(modeString(a))