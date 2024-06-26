"use strict";

var inverted_wordles = inverted_wordles || {};

inverted_wordles.languages = {
    en: {
        idrc_wordles: "IDRC Word Clouds",
        inverted_wordles: "Inverted Word Clouds",
        manage_wordles: "Manage Word Clouds",
        answer_wordle_question: "Answer A Word Cloud's Question",
        menu: "menu",
        workshop_name: "Workshop Name",
        question: "Question",
        word_entries: "Word Entries",
        answer: "Answer",
        answers: "Answers",
        wordle: "Word Cloud",
        last_modified: "Last Modified",
        max_length: "Note: The max length for each answer is",
        characters: "characters",
        view: "View",
        view_answers_page: "View the answers page for the question",
        view_wordle_page: "View the word cloud page for the question",
        from_workshop: "from the workshop",
        delete_wordle_with_question: "Delete a word cloud with the question",
        delete: "Delete",
        submit_answer: "Submit Answer",
        view_wordle: "View A Word Cloud",
        speak_wordle: "Speak the word cloud text under the pointer",
        apply_weight: "Apply conventional weighting",
        error_voiceover:
      "*Unable to activate VoiceOver. Your browser version or config does not support web speech API*",
        confirm_delete: "Confirm to Delete",
        confirm_delete_detail:
      "This will delete the question link permanently and you will not be able to view the answers or the word cloud. Are you sure you want to delete?",
        confirm_delete_yes: "Yes, delete the question",
        confirm_delete_no: "No, keep the question",
        success_answer_submit: "Your answer has been submitted successfully.",
        error_answer_submit:
      "There is a problem submitting your answer. Please try again later.",
        enter_an_answer: "Enter a word or a phrase",
        error_check_netlify: "Error at checking the Netlify site: ",
        error_load_data: "Error at populating the page data: ",
        error_create_wordle: "Error at creating a new word cloud: ",
        error_delete_wordle:
      "*FAILED: Sorry, the question failed to delete. Error: ",
        success_new_edits: "*New edits SUCCESSFUL*",
        error_new_edits: "*FAILED: New edits FAILED. Error: ",
        not_netlify_site:
      "Note: Current Github repository is not a Netlify site. New questions cannot be created.",
        error_fetch_wordles: "Error at fetching word clouds: ",
        error_at_leaset_one_answer: "Please submit at least one answer.",
        page_not_found: "Page Not Found",
        page_not_found_detail: "The page you requested could not be found."
    },
    fr: {
        idrc_wordles: "Nuages de mots de l'IDRC",
        inverted_wordles: "Nuages de mots inversés",
        manage_wordles: "Gérer les nuages de mots",
        answer_wordle_question: "Répondre à la question d'un nuage de mots",
        menu: "menu",
        workshop_name: "Nom du séminaire",
        question: "Question",
        word_entries: "Entrées de mots",
        answer: "Réponse",
        answers: "Réponses",
        wordle: "nuage de mots",
        last_modified: "Dernière modification",
        max_length: "Note: La longueur maximale de chaque réponse est de",
        characters: "caractères",
        view: "Voir",
        view_answers_page: "Voir la page des réponses à la question",
        view_wordle_page: "Voir la page du nuage de mots pour la question",
        from_workshop: "du séminaire",
        delete_wordle_with_question: "Supprimer un nuage de mots avec la question",
        delete: "Supprimer",
        submit_answer: "Soumettre la réponse",
        view_wordle: "Voir un nuage de mots",
        speak_wordle: "Prononcez le texte du nuage de mots sous le pointeur",
        apply_weight: "Appliquer la pondération conventionnelle",
        error_voiceover:
      "*Impossible d'activer VoiceOver. La version ou la configuration de votre navigateur ne prend pas en charge l'API vocale Web.*",
        confirm_delete: "Confirmer pour supprimer",
        confirm_delete_detail:
      "Cela supprimera définitivement le lien de la question et vous ne pourrez plus voir les réponses ou le nuage de mots. Êtes-vous sûr de vouloir supprimer le lien?",
        confirm_delete_yes: "Oui, supprimer la question",
        confirm_delete_no: "Non, maintenir la question",
        success_answer_submit: "Votre réponse a été soumise avec succès.",
        error_answer_submit:
      "Il y a un problème pour soumettre votre réponse. Veuillez réessayer plus tard.",
        enter_an_answer: "Saisir un mot ou une phrase",
        error_check_netlify: "Erreur lors de la vérification du site Netlify: ",
        error_load_data: "Erreur lors du remplissage des données de la page: ",
        error_create_wordle:
      "Erreur lors de la création d'un nouveau nuage de mots: ",
        error_delete_wordle:
      "*ÉCHEC: Désolé, la question n'a pas pu être supprimée. Erreur: ",
        success_new_edits: "*Nouvelles éditions SUCCÈS*",
        error_new_edits: "*ÉCHEC: Nouvelles éditions ont ÉCHOUÉ. Erreur: ",
        not_netlify_site:
      "Note: Le dépôt Github actuel n'est pas un site Netlify. Il n'est pas possible de créer de nouvelles questions.",
        error_fetch_wordles: "Erreur lors de l'extraction du nuage de mots: ",
        error_at_leaset_one_answer: "Veuillez soumettre au moins une réponse.",
        page_not_found: "Page non trouvée",
        page_not_found_detail: "La page demandée n'a pu être trouvée."
    }
};
