
let fields = [
    null, null, null,
    null, null, null,
    null, null, null
];

let currentPlayer = 'circle'; // Aktueller Spieler (circle oder cross)

function init() {
    render();
}

function handleClick(index) {
    // Überprüfen, ob das Feld bereits belegt ist
    if (fields[index] !== null) {
        return;
    }

    // Setzen des Spielersymbols (O oder X) basierend auf dem aktuellen Spieler
    const symbol = currentPlayer === 'circle' ? 'O' : 'X';

    // Aktualisieren des Felds mit dem Spielersymbol
    fields[index] = symbol;

    // Aktualisieren des aktuellen Spielers
    currentPlayer = currentPlayer === 'circle' ? 'cross' : 'circle';

    // Aktualisieren des spezifischen <td>-Elements im DOM
    const tdElement = document.getElementById(`td-${index}`);
    if (symbol === 'O') {
        tdElement.innerHTML = generateCircleSVG();
    } else {
        tdElement.innerHTML = generateXSVG();
    }
}

function render() {
    let content = document.getElementById('content');
    let tableHTML = '<table>'; // Beginn der Tabellen-HTML-Zeichenkette

    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>'; // Erzeugung einer neuen Tabellenzeile

        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            tableHTML += `<td id="td-${index}" onclick="handleClick(${index})">`; // Erzeugung einer neuen Tabellenspalte
            let fieldValue = fields[index];

            if (fieldValue === 'circle') {
                tableHTML += generateCircleSVG(); // Hinzufügen eines Kreises ('O')
            } else if (fieldValue === 'cross') {
                tableHTML += generateXSVG(); // Hinzufügen eines Kreuzes ('X')
            }

            tableHTML += '</td>'; // Schließen der Tabellenzelle
        }

        tableHTML += '</tr>'; // Schließen der Tabellenzeile
    }

    tableHTML += '</table>'; // Schließen der Tabelle
    content.innerHTML = tableHTML; // Einsetzen der Tabellen-HTML-Zeichenkette in den 'content'-Container
}



function generateCircleSVG() {
    const svgCode = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <circle cx="50" cy="50" r="0" fill="none" stroke="#00B0EF" stroke-width="10">
          <animate attributeName="r" values="0;45" dur="0.2s" fill="freeze" />
        </circle>
      </svg>
    `;
    return svgCode;
  }
  
  function generateXSVG() {
    const svgCode = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <line x1="10" y1="10" x2="90" y2="90" stroke="gold" stroke-width="10">
          <animate attributeName="x2" values="10;90" dur="0.2s" fill="freeze" />
        </line>
        <line x1="90" y1="10" x2="10" y2="90" stroke="gold" stroke-width="10">
          <animate attributeName="x2" values="90;10" dur="0.2s" fill="freeze" />
        </line>
      </svg>
    `;
    return svgCode;
  }
  