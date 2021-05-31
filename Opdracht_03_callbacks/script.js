const huiswerkMaken = function (vak, callback) {
    setTimeout(function () { console.log(`ok, ok, ik ga nu mijn ${vak} huiswerk maken.`); }, 2000);
    callback();
}

const klaarMetHuiswerk = function () {
    console.log('Kijk Paps/Mams, ik ben klaar met mijn huiswerk!')
}

huiswerkMaken("heipalen", klaarMetHuiswerk);