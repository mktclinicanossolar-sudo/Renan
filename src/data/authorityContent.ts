import { AuthorityPost } from '../types';

export const authorityPosts: AuthorityPost[] = [
  {
    id: 'horas-extras-jornada',
    category: 'Direito Trabalhista',
    title: 'Jornada e Horas Extras: o que observar no dia a dia',
    summary: 'Entenda os parâmetros legais sobre controle de ponto, intervalos intrajornada e a comprovação de horas suplementares.',
    readTime: '3 min de leitura',
    date: 'Conteúdo informativo',
    mediaKey: 'authority.post01',
    content: [
      'A CLT estabelece a jornada padrão de até 8 horas diárias e 44 horas semanais, ressalvadas convenções coletivas e regimes especiais.',
      'O controle adequado do registro de ponto é um dos elementos mais relevantes para a segurança jurídica de qualquer relação de trabalho.',
      'Em caso de dúvidas sobre a contagem ou remuneração de horas extraordinárias, a orientação jurídica técnica permite avaliar se os critérios legais estão sendo devidamente cumpridos.'
    ]
  },
  {
    id: 'rescisao-direitos',
    category: 'Direito Trabalhista',
    title: 'Rescisão Contratual e Verbas: clareza na conferência',
    summary: 'Aspectos indispensáveis na apuração de valores devidos no término do vínculo empregatício e prazos de pagamento.',
    readTime: '4 min de leitura',
    date: 'Conteúdo informativo',
    mediaKey: 'authority.post02',
    content: [
      'O término da relação laboral envolve cálculos específicos conforme a modalidade rescisória: demissão sem justa causa, pedido de demissão, acordo ou rescisão indireta.',
      'Itens como aviso prévio, saldo de salário, 13º proporcional, férias vencidas/proporcionais e FGTS devem ser conferidos com rigor documental.',
      'A análise de um advogado trabalhista confere segurança ao trabalhador e assegura que nenhum direito legítimo seja suprimido.'
    ]
  },
  {
    id: 'planejamento-previdenciario',
    category: 'Direito Previdenciário',
    title: 'Planejamento Previdenciário: organizando sua transição',
    summary: 'A importância de auditar o Extrato CNIS e identificar as regras de transição mais vantajosas antes do requerimento.',
    readTime: '3 min de leitura',
    date: 'Conteúdo informativo',
    mediaKey: 'authority.post03',
    content: [
      'Com as constantes alterações na legislação previdenciária, o planejamento do momento oportuno para solicitar o benefício é fundamental.',
      'Inconsistências em cadastros do INSS (vínculos sem data de saída, pendências de remuneração) podem atrasar ou prejudicar a concessão.',
      'A análise prévia da documentação histórica possibilita corrigir inconsistências com antecedência e planejar com tranquilidade.'
    ]
  }
];
