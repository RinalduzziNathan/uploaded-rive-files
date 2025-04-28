const fs = require('fs');
const path = require('path');

// Dossier où sont tes fichiers Rive
const riveDir = path.join(__dirname, 'rive');

// Fichier de sortie
const outputFile = path.join(__dirname, 'files.js');

// Lecture du dossier
fs.readdir(riveDir, (err, files) => {
    if (err) {
        console.error('Erreur lors de la lecture du dossier rive:', err);
        return;
    }

    // Filtrer uniquement les fichiers .riv si tu veux
    const riveFiles = files.filter(file => file.endsWith('.riv'));

    // Génération du contenu du fichier JS
    const content = `const riveFiles = ${JSON.stringify(riveFiles, null, 2)};`;

    // Écriture du fichier
    fs.writeFile(outputFile, content, (err) => {
        if (err) {
            console.error('Erreur lors de l\'écriture du fichier files.js:', err);
            return;
        }
        console.log('✅ Fichier files.js généré avec succès !');
    });
});
