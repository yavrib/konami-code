const pressedKeysList = [];
const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
]; // Sequence of keys

const arrayComparison = function(arr1, arr2) {
    if (!(Array.isArray(arr1) && Array.isArray(arr2))) {
        return arr1 == arr2;
    }
    
    if (arr1.length != arr2.length) { 
        return false;
    }
    
    for (let i = 0; i < arr1.length; i++) {
        if (!arrayComparison(arr1[i], arr2[i])) {
            return false;
        }
    }
    return true;
}

document.addEventListener('keydown', (pressedKey) => {
    pressedKeysList.push(pressedKey.key);
    if (pressedKeysList.length > 10) {
        pressedKeysList.shift();
    }
    if (arrayComparison(konamiCode, pressedKeysList) === true) {
       alert('Congratz!!');
    }
})
