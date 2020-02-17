let rawData = [
    { name : 'Animals', id : 10},
    { name : 'Batteries', id : 7},
    { name : 'Baggage', id : 12 },
    { name : 'Cake', id : 7},
  ]
  
  
  let data = rawData.reduce((r, e) => {
    // get first letter of name of current element
    let group = e.name[0];
    // if there is no property in accumulator with this letter create it
    if(!r[group]) r[group] = {group, children: [e]}
    // if there is push current element to children array for that letter
    else r[group].children.push(e);
    // return accumulator
    return r;
  }, {})
  
  // since data at this point is an object, to get array of values
  // we use Object.values method
  let result = Object.values(data)
  
  console.log(result)