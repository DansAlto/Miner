function MakePiece(type, classlisting, appendlocation) {
    let piece = document.createElement(type);
    piece.classList.add(classlisting);
    appendlocation.appendChild(piece);
}

