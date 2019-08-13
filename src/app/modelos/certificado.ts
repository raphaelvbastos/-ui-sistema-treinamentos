export class Certificado {

    verificarConclusao(curso, usuario) {
        let inscricao = curso.inscricoes.find(x => x.usuario._id == usuario._id);
        let assistiuTudo = true;
        let aproveitamento = true;
        let total = 0;
        let andamento = 0;

        if(inscricao != null) {

            curso.unidades.forEach(unidade => {
                // let videosAssistidos = unidade.videos.filter(x => x.vistoPor.findIndex(y => y.usuario._id == usuario._id) > -1);

                let videosAssistidos = 0;

                unidade.videos.forEach(video => {
                    let viu = video.vistoPor.find(y => y._id == usuario._id);
                    if(viu != null) {
                        videosAssistidos++;
                    }
                });

                if(videosAssistidos != unidade.videos.length) {
                    assistiuTudo = false;
                }

                andamento = (videosAssistidos / unidade.videos.length) * 100;

                unidade.questionarios.forEach(questionario => {
                    let respQuest = new Array();

                    questionario.questoes.forEach(questao => {
                        respQuest.push(questao.respostas.find(x => x.usuario._id == usuario._id));
                    });

                    if(respQuest.length != questionario.questoes.length) {
                        aproveitamento = false;
                    } else {
                        let corretas = 0;
                        respQuest.forEach(resp => {
                            if(resp.resposta.correta) {
                                corretas++;
                            }
                        });

                        if(corretas > 0) {
                            total = (corretas / questionario.questoes.length) * 100;

                            if(total < 70) {
                                aproveitamento = false;
                            }
                        } else {
                            aproveitamento = false;
                        }
                    }
                });
            });

            //percentualAndamento: 0, percentualAcertos: 0, gerouCertificado: false, aprovado: false }
            if(assistiuTudo && aproveitamento) {
                inscricao.aprovado = true;
            } else {
                inscricao.aprovado = false;
            }

        //     console.log("video", assistiuTudo);
        // console.log("aproveitamento", aproveitamento);
        // console.log("total%", total);

            inscricao.percentualAcertos = total;
            inscricao.percentualAndamento = andamento;

            let pos = curso.inscricoes.findIndex(x => x.usuario._id == usuario._id);

            if(pos > -1) {
                curso.inscricoes.splice(pos, 1);
                curso.inscricoes.push(inscricao);
            }
        }

        return curso;
    }
}



