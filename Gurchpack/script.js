// Erstellen Sie eine neue Funktion, um den Download zu starten
function startDownload() {
    // Erstellen Sie ein neues Blob-Objekt
    var data = new Blob(['Hallo Welt!'], {type: 'text/plain'});

    // Erstellen Sie eine URL für das Blob-Objekt
    var url = window.URL.createObjectURL(data);

    // Erstellen Sie einen neuen Link-Element
    var link = document.createElement('a');
    link.href = url;
    link.download = 'meineDatei.txt';

    // Fügen Sie das Link-Element zum DOM hinzu
    document.body.appendChild(link);

    // Klicken Sie auf das Link-Element, um den Download zu starten
    link.click();

    // Entfernen Sie das Link-Element aus dem DOM
    document.body.removeChild(link);
}

// Rufen Sie die Funktion auf, um den Download zu starten
startDownload();
