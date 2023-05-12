let fields = [
    'null', 'circle', 'null',
    'cross', 'circle', 'null',
    'null', 'null', 'cross'
];
function init() {
    render()
};

function render() {
    let content = document.getElementById('content');
    let tableHTML = '<table>'; // Beginn der Tabellen-HTML-Zeichenkette

    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>'; // Erzeugung einer neuen Tabellenzeile

        for (let j = 0; j < 3; j++) {
            tableHTML += '<td>'; // Erzeugung einer neuen Tabellenspalte
            let fieldValue = fields[i * 3 + j];

            if (fieldValue === 'circle') {
                tableHTML += 'O'; // Hinzufügen eines Kreises ('O')
            } else if (fieldValue === 'cross') {
                tableHTML += 'X'; // Hinzufügen eines Kreuzes ('X')
            }

            tableHTML += '</td>'; // Schließen der Tabellenzelle
        }

        tableHTML += '</tr>'; // Schließen der Tabellenzeile
    }

    tableHTML += '</table>'; // Schließen der Tabelle
    content.innerHTML = tableHTML; // Einsetzen der Tabellen-HTML-Zeichenkette in den 'content'-Container
}