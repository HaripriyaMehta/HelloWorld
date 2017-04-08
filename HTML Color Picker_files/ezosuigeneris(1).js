var ezosuigeneris = 'f8c5f44540fdbe5c80e91e106e31e205';
if(typeof ezosuigeneris != "undefined") {
    var ezosuigenerisDate = new Date();
    ezosuigenerisDate.setMonth(ezosuigenerisDate.getMonth() + 24);
    document.cookie = "ezosuigeneris=" + ezosuigeneris + ";expires=" + ezosuigenerisDate.toUTCString() + ";domain="+ezdomain+";path=/";
}
