function GetItem(pathkey) {
    if (pathkey.includes('.js')) {
        fetch(`https://api.github.com/repos/DansAlto/Cubes/contents/${pathkey}`)
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
    }
}
