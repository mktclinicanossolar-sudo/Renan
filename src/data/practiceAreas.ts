import { PracticeArea } from '../types';

export const practiceAreas: PracticeArea[] = [
  {
    id: 'trabalhista',
    title: 'Direito Trabalhista',
    shortDescription: 'Orientação e atuação em questões relacionadas às relações de trabalho.',
    iconName: 'hardhat',
    topics: [
      'Relações de trabalho e contratos individuais',
      'Análise de verbas rescisórias e demissões',
      'Jornada de trabalho, horas extras e intervalos',
      'Condições laborais e normas de segurança',
      'Orientação preventiva e resolução extrajudicial'
    ],
    fullExplanation: 'Com atuação centralizada em Mogi Guaçu e região, o escritório examina detalhadamente os fatos que envolvem a relação laboral. Cada situação passa por uma análise documental cuidadosa para apontar com clareza os caminhos jurídicos pertinentes, sempre com transparência e responsabilidade técnica.'
  },
  {
    id: 'civil',
    title: 'Direito Civil',
    shortDescription: 'Análise e orientação em conflitos e relações jurídicas de natureza civil.',
    iconName: 'file-text',
    topics: [
      'Análise e elaboração de contratos civis',
      'Cobranças, obrigações e inadimplementos',
      'Responsabilidade civil e reparação de danos',
      'Orientação em disputas patrimoniais',
      'Mediação e acordos extrajudiciais'
    ],
    fullExplanation: 'Orientação em questões do cotidiano civil, focando na segurança jurídica das relações pessoais e contratuais. A atuação prioriza a prevenção de litígios e a busca por soluções equilibradas e fundamentadas na legislação vigente.'
  },
  {
    id: 'previdenciario',
    title: 'Direito Previdenciário',
    shortDescription: 'Orientação em questões relacionadas ao INSS e benefícios previdenciários.',
    iconName: 'users',
    topics: [
      'Análise do tempo de contribuição e regras de transição',
      'Aposentadoria por idade, tempo e especial',
      'Benefícios por incapacidade temporária ou permanente',
      'Auxílio-reclusão e pensão por morte',
      'Requerimentos administrativos perante o INSS'
    ],
    fullExplanation: 'Análise minuciosa de cadastros previdenciários (CNIS), documentação comprobatória e períodos de contribuição, visando orientar o segurado com precisão técnica sobre os critérios exigidos pela legislação previdenciária.'
  }
];
