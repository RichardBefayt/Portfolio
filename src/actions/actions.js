export const FETCH_CV_DATA_SUCCESS = 'FETCH_CV_DATA_SUCCESS';

export const fetchCVDataSuccess = (data) => ({
    type: FETCH_CV_DATA_SUCCESS,
    payload: data,
});

export const fetchCVData = () => {
    return async (dispatch) => {
        try {
            // Ici, vous effectuez un appel à votre source de données pour récupérer les données CV
            const data = await fetch("../data/curriculumData.js");
            console.log("data de fetch :", data);

            const cvData = await data.json();
            console.log("cvData de await :", cvData);

            // Dispatchez l'action pour mettre à jour le store Redux avec les données récupérées
            dispatch(fetchCVDataSuccess(cvData));
        } catch (error) {
            // Gérez les erreurs si nécessaire
            console.error('Erreur lors de la récupération des données CV : ', error);
        }
    };
};