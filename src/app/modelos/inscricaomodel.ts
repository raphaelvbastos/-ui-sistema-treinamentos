export class Inscricaomodel {
    usuario: any;
    percentualAndamento: any;
    percentualAcertos: any;
    gerouCertificado: boolean;
    aprovado: boolean;

    constructor() {
        this.usuario = "";
        this.percentualAndamento = 0;
        this.percentualAcertos = 0;
        this.gerouCertificado = false;
        this.aprovado = false;
    }
}
