function CallItem(pathkey) {
    fetch(`https://api.github.com/repos/DansAlto/Cubes/contents/${pathkey}`)
        .then(docs => {
            console.log(docs);
        })
}

CallItem(`test`);