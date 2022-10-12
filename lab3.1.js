console.log("[]  []  []  []");
console.log("  []  []  []  ");
console.log("[]  []  []  []");
console.log("  []  []  []  ");
console.log("[]  []  []  []");
console.log("  []  []  []  ");
console.log("[]  []  []  [] ");

for (let i = 0; i < 8; i++) {
      let row = ''

      for (let j = 0; j < 8; j++) {
        row += (i + j) % 2 === 0 ? '  ' : '[]'
      }

      console.log(row)
      row = ''
    }