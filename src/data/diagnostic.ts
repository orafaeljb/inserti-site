export interface DiagnosticQuestion {
  id: string;
  category: string;
  question: string;
  description: string;
  options: {
    label: string;
    score: number;
    feedback: string;
  }[];
}

export const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    id: "backup",
    category: "Resiliência & Backup",
    question: "Como sua empresa realiza o backup dos dados e servidores hoje?",
    description: "A resiliência contra incidentes depende da regra 3-2-1 e imutabilidade.",
    options: [
      {
        label: "Backup automatizado em nuvem com retenção imutável à prova de ransomware e testes frequentes",
        score: 25,
        feedback: "Excelente! Seu ambiente segue as melhores práticas de resiliência digital.",
      },
      {
        label: "Backup automático diário em storage local ou nuvem simples, mas sem imutabilidade ou testes regulares",
        score: 15,
        feedback: "Atenção: sem imutabilidade, ataques modernos de ransomware podem apagar suas cópias.",
      },
      {
        label: "Cópia manual de tempos em tempos em HD externo ou pastas de rede",
        score: 5,
        feedback: "Alerta Crítico: Altíssimo risco de perda definitiva de dados por esquecimento ou contaminação.",
      },
      {
        label: "Não temos uma rotina formal de backup estabelecida",
        score: 0,
        feedback: "Emergência: Sua empresa está a um incidente de perder todo o histórico financeiro e operacional.",
      },
    ],
  },
  {
    id: "firewall",
    category: "Segurança de Borda",
    question: "Qual o nível de proteção do perímetro da sua rede de internet?",
    description: "O firewall é o portão de entrada e saída de ameaças e conexões.",
    options: [
      {
        label: "Next-Generation Firewall (Fortinet) com inspeção SSL, SD-WAN seguro e cluster HA redundante",
        score: 25,
        feedback: "Nível Enterprise: Perímetro blindado com inspeção profunda de pacotes e redundância.",
      },
      {
        label: "Firewall básico instalado, mas sem inspeção de tráfego HTTPS criptografado ou sem suporte ativo",
        score: 15,
        feedback: "Ponto cego: A maior parte das ameaças passa por conexões criptografadas sem inspeção.",
      },
      {
        label: "Apenas o roteador fornecido pela operadora de internet (modem da operadora)",
        score: 5,
        feedback: "Vulnerabilidade severa: Roteadores de operadoras não oferecem proteção corporativa de borda.",
      },
      {
        label: "Não sei informar com precisão qual equipamento gerencia a borda",
        score: 0,
        feedback: "Risco oculto: A falta de visibilidade impede qualquer defesa coordenada contra invasores.",
      },
    ],
  },
  {
    id: "support",
    category: "Gestão & Monitoramento",
    question: "Como é feita a gestão e suporte dos computadores e servidores?",
    description: "A diferença entre apagar incêndios reativamente ou operar com previsibilidade.",
    options: [
      {
        label: "Monitoramento proativo 24x7 (NOC), patches automatizados e atendimento consultivo com SLA em minutos",
        score: 25,
        feedback: "Operação Madura: Tempo de inatividade mínimo e governança contínua alinhada ao negócio.",
      },
      {
        label: "Técnico interno ou terceirizado que atende chamados apenas quando algo quebra (Break-Fix)",
        score: 10,
        feedback: "Custo Invisível: Paradas não programadas custam horas de colaboradores improdutivos.",
      },
      {
        label: "Suporte pontual informal acionado esporadicamente por demanda",
        score: 5,
        feedback: "Incerteza: Sem histórico técnico ou documentação, cada problema demora dias para ser resolvido.",
      },
      {
        label: "Os próprios colaboradores tentam resolver seus problemas técnicos",
        score: 0,
        feedback: "Desperdício: Perda massiva de foco no core business e alto risco de desconfiguração de sistemas.",
      },
    ],
  },
  {
    id: "endpoint",
    category: "Cibersegurança & Endpoint",
    question: "Como estão protegidos os computadores, notebooks e dispositivos dos colaboradores?",
    description: "O usuário e a máquina são o principal alvo de ataques de phishing e malware.",
    options: [
      {
        label: "EDR/XDR com isolamento automático de ameaças, MFA obrigatório em todos os acessos e SOC 24x7",
        score: 25,
        feedback: "Postura Internacional: Defesa comportamental ativa contra invasões direcionadas.",
      },
      {
        label: "Antivírus corporativo comum gerenciado em nuvem, mas sem tecnologia de detecção comportamental (EDR)",
        score: 15,
        feedback: "Risco moderado: Antivírus de assinatura não protege contra ataques inéditos (zero-day).",
      },
      {
        label: "Antivírus gratuito ou padrão do Windows sem gestão centralizada de relatórios",
        score: 5,
        feedback: "Vulnerabilidade alta: Falta de visibilidade se as máquinas estão infectadas ou desatualizadas.",
      },
      {
        label: "Máquinas sem qualquer antivírus ou com licenças expiradas",
        score: 0,
        feedback: "Crítico: Porta escancarada para infecções laterais e sequestro de arquivos corporativos.",
      },
    ],
  },
];

