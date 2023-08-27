import {z} from "zod"

export const validationSchema = z.object({
    nom: z
        .string()
        .nonempty("Le Nom est un champ obilgtoire")
        .min(3,"Voulillez fornir un nom d'au moins trois lettres " ),
    prenom: z
        .string()
        .nonempty("Le prénom est un champ obilgtoire ")
        .min(3,"Voulillez fornir un prenom d'au moins trois lettres " ),
    email: z
        .string()
        .nonempty("Voulliez respecter le format d'email ").email(" exemple : xxxx@gmail.com "),
    password: z
        .string()
        .nonempty("Votre le mot de pass est obligatoire")
        .min(6,"Voulillez fornir unmot de passe d'au moins 6 lettres  " )
})