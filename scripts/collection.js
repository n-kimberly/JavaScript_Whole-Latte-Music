(function () {
    "use strict";

    var collectionItemTemplate, i, collectionContainer;

    collectionItemTemplate =
             '<div class="collection-album-container column fourth">'
            + '  <img src="assets/images/album_covers/01.png"/>'
            + '  <div class="collection-album-info caption">'
            + '    <p>'
            + '      <a class="album-name" href="album.html"> The Colors </a>'
            + '      <br/>'
            + '      <a href="album.html"> Pablo Picasso </a>'
            + '      <br/>'
            + '      X songs'
            + '      <br/>'
            + '    </p>'
            + '  </div>'
            + '</div>';

    window.onload = function () {
        collectionContainer = document.getElementsByClassName('album-covers')[0];

        collectionContainer.innerHTML = '';

        for (i = 0; i < 12; i += 1) {
            collectionContainer.innerHTML += collectionItemTemplate;
        }
    };
    
}());