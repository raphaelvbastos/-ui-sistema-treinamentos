export class Certificado {

    verificarConclusao(curso, usuario) {
        let inscricao = curso.inscricoes.find(x => x.usuario._id == usuario._id);
        let assistiuTudo = true;
        
        if(inscricao != null) {

            curso.unidades.forEach(unidade => {
                let videosAssistidos = unidade.videos.filter(x => x.vistoPor.findIndex(y => y._id == usuario._id) > -1);
                
                if(videosAssistidos.length != unidade.videos.lenght) {
                    assistiuTudo = false;
                }
            });
        }
    }
}



