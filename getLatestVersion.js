function compareVersions(versionA, versionB) {
    const splitVersionA = versionA.slice(1)//slice(1) extract string from index of 1
    .split('.')  // split for every dot(.)
    .map(Number);// map method will convert each element of array into number

    const splitVersionB = versionB.slice(1).split('.').map(Number);
    
    for (let i = 0; i < splitVersionA.length; i++) {
        if (splitVersionA[i] > splitVersionB[i]) {
            return versionA;
        } else if (splitVersionA[i] < splitVersionB[i]) {
            return versionB;
        }
    }
    
    // If all components are equal, return either version (they are the same)
    return versionA;
}

const versionA = 'v0.12.0.1';
const versionB = 'v0.24.0.0';

console.log(compareVersions(versionA, versionB));
