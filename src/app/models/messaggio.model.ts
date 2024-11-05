export interface Messaggio {
    idm: string, //identificativo del messaggio
    idt: string, //identificativo del treno
    idu: string, //identificativo dell'utente
    testo: string, //testo del messaggio
    idd?: string, //identificativo del destinatario (opzionale)
}