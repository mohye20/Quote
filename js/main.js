var arrayOfQuotes = [
    { author: "--Elbert Hubbard1", qutoe: '"Do not take life too seriously. You will not get out alive1."' },
    { author: "― Frank Zappa", qutoe: "“So many books, so little time.”" },
    { author: "― Marcus Tullius Cicero", qutoe: '“A room without books is like a body without a soul.”' },
    { author: "― Bernard M. Baruch", qutoe: '“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.”' },
    { author: "― Mae West", qutoe: 'You only live once, but if you do it right, once is enough.”' },
]






var point = undefined;

function createQutoe() {

    var random = Math.floor((Math.random() * arrayOfQuotes.length) + 1)



    if (random >= arrayOfQuotes.length) {
        createQutoe();

    }

    if (point == random) {

        document.getElementById("quoteOutput").innerHTML = arrayOfQuotes[0].qutoe
        document.getElementById("authorOutput").innerHTML = arrayOfQuotes[0].author
        point = random = 0;

    }

    else {

        document.getElementById("quoteOutput").innerHTML = arrayOfQuotes[random].qutoe
        document.getElementById("authorOutput").innerHTML = arrayOfQuotes[random].author

        point = random;

    }


}












