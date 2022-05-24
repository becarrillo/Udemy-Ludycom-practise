function validateCredentials(user: FieldsUser, password: FieldsUser) {
    // Empty object error
    if (isNull(user)) {
        throw new Error("No has ingresado un dato en el campo usuario todavía");
    }

    // Empty object error
    if (isNull(password)) {
        throw new Error("No has ingresado un dato en el campo contraseña todavía");
    }

    // Validation
    let validated = data.filter(function (doc) {
        if (user && password) return user === doc.USUARIO && password === doc.CONTRASENA
    });

    let oportunidades = 10;
    if (!validated) {
        while (oportunidades) {
            oportunidades = oportunidades - 1;
            alert(`Intento fallido. Quedan ${oportunidades} oportunidades`);
        }
    } else {
        console.log("Usuario autenticado, espere mientras el cajero procese su pago")
    }
};
// data object created by myself
const data = [
    {
        USUARIO: 'brian_mack23',
        CONTRASENA: 'pdf67M88G3'
    },
    {
        USUARIO: 'esperanza_gomez05',
        CONTRASENA: '45A74_hs9'
    },
    {
        USUARIO: 'Nathaly-Barraza',
        CONTRASENA: '01234F'
    },
    {
        USUARIO: 'Carlos_Bacca-2',
        CONTRASENA: 'mBof53'
    },
    {
        USUARIO: 'Daniel Rudas',
        CONTRASENA: 'jMP099'
    },
    {
        USUARIO: 'Soro Bermudez',
        CONTRASENA: '12345t'
    },
    {
        USUARIO: 'teo_gutierrez',
        CONTRASENA: '24680G'
    },
    {
        USUARIO: 'Maritza_Ramirez',
        CONTRASENA: 'p1357$'
    },
    {
        USUARIO: 'Esteban93',
        CONTRASENA: 'r90123'
    },
    {
        USUARIO: 'penelope_cruz08',
        CONTRASENA: 'abcdef76'
    }
];

type FieldsUser = string | null;

function isNull(obj: FieldsUser): obj is null {
    return typeof obj === null
};

let login = {
    usuario: window.prompt("Ingrese nuevo usuario"),
    contrasena: window.prompt("Ingrese una contraseña segura")
};


validateCredentials(login.usuario, login.contrasena);