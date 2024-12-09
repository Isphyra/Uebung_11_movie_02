import db from "$lib/db.js";

export const actions = {
    create: async ({ request }) => {
        // Formulardaten abrufen
        const formData = await request.formData();

        // Daten aus dem Formular extrahieren
        const movie = {
            itle: formData.get('name'), // Name-Feld
            Year: parseInt(formData.get('Year'), 10), // Jahr als Zahl
            Duration: `${formData.get('Duration')} Minuten`, // Länge mit Einheit
        };

        // Film in der Datenbank erstellen
        const id = await db.createMovie(movie);

        if (id) {
            return {
                success: true,
                id,
            };
        } else {
            return {
                success: false,
                error: 'Movie could not be created.',
            };
        }
    },
};
