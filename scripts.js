var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCase = dinosaur.toUpperCase();
var textCharsAfter = text.replace('Velociraptor', dinosaurUpperCase);
var textLength = textCharsAfter.length/2;
var partOfText = textCharsAfter.slice(0, textLength);
console.log(partOfText);