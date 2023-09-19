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
            let dd = atob(data.content);
            const newStyle = document.createElement(`style`);
            newStyle.textContent = dd;
            document.head.appendChild(newStyle);
        })
    }
}

GetItem('effects.css');
