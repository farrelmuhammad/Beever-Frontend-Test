let words = "beever";
let newString = "";

for(let i = 0; i < words.length; i++) {
    newString += words.substring(0, i + 1) + "\n";
}

console.log(newString);

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut : 
// b
// be
// bee
// beev
// beeve
// beever