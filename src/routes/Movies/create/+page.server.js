import db from "$lib/db.js";

export const actions = {
    create: async ({ request }) => {
        // Formulardaten abrufen
        const formData = await request.formData();

        // Daten aus dem Formular extrahieren
        const movie = {
            itle: formData.get('name'), 
            Year: parseInt(formData.get('year'), 10),
            Duration: `${formData.get('duration')} Minuten`, 
        };

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
