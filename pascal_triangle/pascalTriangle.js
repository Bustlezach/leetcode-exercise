/**
 * Pascal triangle
 */

function pascalTriangle(n) {
  const triangle = [];
  for( let i = 0; i < n; i++) {
    const rowList = [];
    for(let j = 0; j <= i; j++){
      if(j === 0 || j === i){
        rowList.push(1);
      } else {
        const col = triangle[i - 1][j - 1] + triangle[i - 1][j];
        rowList.push(col);
      }
    }
    triangle.push(rowList);
  }

  for (let i = 0; i < n; i++) {
    let spaces = ' '.repeat(n - i - 1);
    process.stdout.write(spaces);
    for (let j = 0; j < i + 1; j++) {
        process.stdout.write(triangle[i][j].toString().padEnd(4, ' '));
    }
    process.stdout.write('\n');
  }
}

let cas = pascalTriangle(4)
cas = pascalTriangle(6)
cas = pascalTriangle(10)