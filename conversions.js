Foutput = document.getElementById('Foutput');
Coutput = document.getElementById('Coutput');
Koutput = document.getElementById('Koutput');


// ----- fahrenheit -------------------

const FtoC = (F) => {
    // fahrenheit to celsius
    return (F - 32) * (5/9);
}

const FtoK = (F) => {
    // fahrenheit to kelvin
    return (F + 459.67) * (5/9);
}

// ----- celsius ----------------------

const CtoF = (C) => {
    // celsius to fahrenheit
    return C * (9/5) + 32;
}

const CtoK = (C) => {
    // celsius to kelvin
    return parseFloat(C) + 273.15;
}

// ----- kelvin -----------------------

const KtoC = (K) => {
    // kelvin to celsius
    return K - 273.15;
}

const KtoF = (K) => {
    // kelvin to fahrenheit
    return K * (9/5) - 459.67;
}


const tempFormat = (t) => {
    if( t.toString().indexOf('.') > -1 ){
        return t.toFixed(2)
    }
    else{
        return t;
    }
}


const tempScale = document.querySelectorAll("[name='scale']");
const tempValue = document.getElementById('tempValue');


const convert = (e) => {
    const outputDivs = document.querySelectorAll( "#output > div" );
    outputDivs.forEach( v => {
        v.classList.add('transparent');
    });
    window.setTimeout( () => {
        const temp = parseFloat( tempValue.value ) || 0;
        switch( document.querySelector('[name="scale"]:checked').value ){
            case "F":
                Foutput.innerHTML = tempFormat( temp );
                Coutput.innerHTML = tempFormat( FtoC( temp ) );
                Koutput.innerHTML = tempFormat( FtoK( temp ) );
                document.getElementsByTagName('body')[0].classList.toggle(document.getElementsByTagName('body')[0].classList[0]);
                document.getElementsByTagName('body')[0].classList.add('fahrenheit');
                break;
            case "C":
                Coutput.innerHTML = tempFormat( temp );
                Foutput.innerHTML = tempFormat( CtoF( temp ) );
                Koutput.innerHTML = tempFormat( CtoK( temp ) );
                document.getElementsByTagName('body')[0].classList.toggle(document.getElementsByTagName('body')[0].classList[0]);
                document.getElementsByTagName('body')[0].classList.add('celsius');
                break;
            case "K":
                Koutput.innerHTML = tempFormat( temp );
                Foutput.innerHTML = tempFormat( KtoF( temp ) );
                Coutput.innerHTML = tempFormat( KtoC( temp ) );
                document.getElementsByTagName('body')[0].classList.toggle(document.getElementsByTagName('body')[0].classList[0]);
                document.getElementsByTagName('body')[0].classList.add('kelvin');
                break;
            default:
                console.log( tempValue, e.target.value );
        }    
        outputDivs.forEach( v => {
            v.classList.remove('transparent');
        });
    }, 250);
}


tempScale.forEach( (v,k) => {
    v.onchange = convert;
});
tempValue.onkeyup = convert;
tempValue.onchange = convert;
window.onload = convert;




/*
----- Calibration ---------------------
C        F        K
0.00     32.00    273.15
-17.78   0.00     255.37
−273.15  −459.67  0.00
*/