function superbowlWin(records){      
  const winFinder = records.find(record => record.result === "W")
  //const found = array1.find(element => element > 10);
    if (winFinder === undefined){
        return undefined;
    } else {
        return winFinder.year;
    }
}
  
