function DNA(side) {
    let side2 = [];
    for (i = 0; i < side.length; i++) {
        switch (side[i]) {
            case 'A':
                side2.push('T');
                break;
            case 'T':
                side2.push('A');
                break;
            case 'C':
                side2.push('G');
                break;
            case 'G':
                side2.push('C');
                break;
        }
    }
    return side2.join('');
}

console.log(DNA('ATTGC'));   //task DNA





