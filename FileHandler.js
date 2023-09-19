function GetItem(pathkey) {
    fetch(`https://api.github.com/repos/DansAlto/Cubes/contents/${pathkey}`)
        .then(docs => {
            console.log(docs);
        })
}

GetItem(`test`);
