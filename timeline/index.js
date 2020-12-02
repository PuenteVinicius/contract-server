module.exports = () => {
  const timeline = {
    propostaId: "27988395",
    celularValidado: false,
    emAndamento: true,
    assinado: false,
    valorAlteradoNaMesa: true,
    timeline: [
      {
        id: 15,
        descricao: "RESULTADO PARCIAL PENDENTE",
        descricaoExterna: "Pré cadastro",
        etapaAtual: false,
        detalheDescricao: "Análise realizada com sucesso",
        possuiAcao: false,
      },
      {
        id: 18,
        descricao: "EM PREENCHIMENTO",
        descricaoExterna: "Simulação",
        etapaAtual: true,
        detalheDescricao: "Preencher dados",
        possuiAcao: true,
      },
      {
        id: 0,
        descricaoExterna: "Vistoria Online",
        etapaAtual: false,
        possuiAcao: false,
      },
      {
        id: 0,
        descricaoExterna: "Contrato",
        etapaAtual: false,
        possuiAcao: false,
      },
    ],
  };
  return timeline;
};
