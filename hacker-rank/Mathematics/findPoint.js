

function findPoint(px, py, qx, qy) {
  
    let x = qx + (qx-px);
    let y = qy + (qy-py);

    console.log(x + " " + y);
}



console.log(findPoint(0, 0, 1, 1));
console.log(findPoint(1, 1, 2, 2));