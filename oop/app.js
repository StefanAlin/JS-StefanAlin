function musicPlayer(pList) {
  this.playlist = pList;
  this.play = function(pos = 0) {
    console.log("Now playing: ", this.playlist[pos]);
  };
  this.addToPlayList = function(song) {
    this.playlist.push(song);
    console.log(`Added to playlist: ${song} `);
  };

  this.removeFromPlaylist = function(melodie) {
    let sterge = this.playlist.indexOf(melodie);
    this.playlist.splice(sterge, 1);
  };
  this.showPlaylist = function() {
    this.playlist.forEach(function(value) {
      return value;
    });
  };
}

var playlist = ["suna soneria", "suna iar", "tot mai suna"];

var sunaMuzica = new musicPlayer(playlist);
sunaMuzica.play(2);
sunaMuzica.addToPlayList("Macalan - Sefu");
sunaMuzica.removeFromPlaylist("suna iar");
sunaMuzica.showPlaylist();
