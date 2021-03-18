export function truncateWithDots(string, max){
    if (string.length > max) {
        return  string.substring(0, max-1) + "...";
    }
    return string
}

export function cutWords(array, max){
    let result = '';
    if (array.length >= max) {
      array.map((el, index) => {
          if(index < max-1){
              result+= el.text + ', ';
          } else if(index === max-1){
              result+= el.text + '...';
          }


      })
        return result
    }
    array.map((el, index) => {
        if(index !== array.length-1){
            result+= el.text + ', ';
            return
        }
        result+= el.text;
    })
    return result
}

export function cutRanks(array) {
    const copyArray = Object.assign([], array);
   const decArray = copyArray.filter(el => el.rank).sort(function (a, b) {
        return b.rank - a.rank;
    });
    return  cutWords(decArray, 2)
}