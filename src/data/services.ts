export interface ServiceGroup {
  id: string;
  name: string;
  description: string;
  iconName: string;
  services: ServiceItem[];
}

export interface ServiceItem {
  slug: string;
  title: string;
  groupName: string;
  groupDescription: string;
  shortDescription: string;
  badge: string;
  icon: string;
  hero: {
    title: string;
    subtitle: string;
    highlight: string;
    metrics: { value: string; label: string }[];
    /** Texto de apoio acima do título (substitui as etiquetas de grupo/badge) */
    eyebrow?: string;
    /** Etiquetas curtas exibidas abaixo do subtítulo */
    chips?: string[];
    /** Diferenciais em texto (substituem as métricas numéricas quando presentes) */
    differentials?: string[];
    /** Botões de ação do hero (substituem o link de WhatsApp quando presentes) */
    cta?: { primary: string; secondary: string; mode?: "whatsapp-diagnostico" | "form-whatsapp" };
    /** Textos do formulário lateral (substituem os padrões) */
    form?: { title: string; description: string; messageLabel: string; button: string };
  };
  problem: {
    /** Texto da etiqueta da seção (padrão: "O Problema & As Dores do Negócio") */
    eyebrow?: string;
    title: string;
    description: string;
    painPoints: { title: string; description: string }[];
  };
  solution: {
    /** Texto da etiqueta da seção (padrão: "Nossa Solução & Metodologia") */
    eyebrow?: string;
    /** Oculta o selo "Padrão Corporativo Homologado" no rodapé dos cards */
    hideCardBadge?: boolean;
    title: string;
    description: string;
    features: { title: string; description: string }[];
  };
  /** Banner de tecnologia/parceiro exibido entre benefícios e escopo */
  techBanner?: {
    eyebrow: string;
    brand: string;
    /** Caminho da logo em /public (ex: "/partners/acronis.png"). Se vazio, exibe o nome da marca. */
    logo?: string;
    tag: string;
    title: string;
    text: string;
    items: { title: string; description: string }[];
    footnote?: string;
    linkLabel?: string;
    linkHref?: string;
    /** Links adicionais exibidos ao lado do link principal */
    extraLinks?: { label: string; href: string }[];
    /** Diagrama vertical de arquitetura (entrada, agente, ramificações e resultado) */
    flowDiagram?: {
      title: string;
      input: { title: string; description: string };
      center: { title: string; description: string };
      branches: { title: string; description: string; icon: "data" | "systems" | "processes" }[];
      result: { title: string; description: string };
    };
    /** Diagrama de fluxo exibido no banner (ex.: failover/failback) */
    diagram?: {
      title: string;
      sources: { title: string; description: string; icon: "server" | "cloud" }[];
      condition: string;
      failover: { title: string; description: string };
      afterText: string;
      failback: { title: string; description: string };
    };
  };
  /** Seção de comparação (mesmo formato de objectivesSection), exibida após o banner/escopo */
  comparisonSection?: NonNullable<ServiceItem["objectivesSection"]>;
  /** Seção extra de cards (mesmo formato de objectivesSection), exibida após escopo/banner e antes da comparação */
  managementSection?: NonNullable<ServiceItem["objectivesSection"]>;
  /** Seção de conceitos/objetivos (ex.: RTO e RPO), exibida após os benefícios */
  objectivesSection?: {
    eyebrow: string;
    title: string;
    description?: string;
    cards: { title: string; description: string; items?: string[] }[];
    support?: string;
    disclaimer?: string;
  };
  /** Cabeçalho personalizado da seção de benefícios (oculta também o selo "Garantia de Entrega") */
  benefitsSection?: { eyebrow: string; title: string };
  benefits: {
    title: string;
    description: string;
    metric?: string;
  }[];
  /** CTA final simplificado (apenas um botão, sem selos de confiança) */
  finalCta?: { badge: string; title: string; subtitle: string; button: string; secondaryButton?: string; primaryHref?: string };
  /** Título personalizado da seção de perguntas frequentes */
  faqTitle?: string;
  /** Cabeçalho personalizado da seção de escopo (description removida quando ausente; note aparece abaixo dos cards) */
  scopeSection?: {
    eyebrow: string;
    title: string;
    description?: string;
    note?: string;
    /** Bloco de destaque comercial exibido abaixo dos cards de escopo */
    highlight?: { title: string; paragraphs: string[]; cta: string; whatsappMessage: string };
  };
  /** Exibe o escopo antes do banner de tecnologia (padrão: depois) */
  scopeBeforeBanner?: boolean;
  includedScope: {
    category: string;
    /** Texto introdutório opcional do card */
    intro?: string;
    items: string[];
  }[];
  /** Cabeçalho personalizado da seção "Por que escolher" (oculta também o selo "Padrão Internacional") */
  differentialsSection?: { eyebrow: string; title: string; description?: string };
  differentials: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  visualSuggestion?: {
    badge: string;
    title: string;
    description: string;
    elements: string[];
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const serviceGroupsData = [
  {
    id: "cyber-protect",
    name: "Cyber Protect",
    description: "Proteção de dados",
    iconName: "ShieldCheck",
    serviceSlugs: [
      "backup-empresarial",
      "disaster-recovery",
      "backup-microsoft-365-google-workspace",
    ],
  },
  {
    id: "cyber-security",
    name: "Cyber Security",
    description: "Segurança da informação",
    iconName: "Lock",
    serviceSlugs: [
      "firewall-como-servico",
      "endpoint-security-edr",
    ],
  },
  {
    id: "servicos-ti",
    name: "Serviços de TI",
    description: "Gestão e suporte de tecnologia",
    iconName: "ServerCog",
    serviceSlugs: [
      "gestao-suporte-ti-msp",
      "suporte-avancado-n2-n3-especialistas",
      "wifi-corporativo-redes-gerenciadas",
    ],
  },
  {
    id: "cloud-produtividade",
    name: "Cloud e produtividade",
    description: "Infraestrutura e soluções em nuvem",
    iconName: "Cloud",
    serviceSlugs: [
      "cloud-corporativa",
      "armazenamento-em-nuvem",
      "microsoft-365",
    ],
  },
  {
    id: "solucoes-digitais-automacao",
    name: "Soluções digitais e automação",
    description: "Desenvolvimento, automação e inteligência artificial",
    iconName: "Cpu",
    serviceSlugs: [
      "desenvolvimento-software-sob-demanda",
      "automacao-processos-integracoes",
      "agentes-ia-empresas",
      "infraestrutura-hospedagem-aplicacoes",
    ],
  },
];

export const servicesData: ServiceItem[] = [
  // ==========================================
  // GRUPO 1: CYBER PROTECT (Proteção de dados)
  // ==========================================
  {
    slug: "backup-empresarial",
    title: "Backup empresarial",
    groupName: "Cyber Protect",
    groupDescription: "Proteção de dados",
    shortDescription: "Backup corporativo automatizado e imutável contra ransomware, seguindo a regra 3-2-1 com retenção em nuvem de alta disponibilidade.",
    badge: "Proteção Contínua & Imutável",
    icon: "DatabaseBackup",
    hero: {
      eyebrow: "CYBER PROTECT | PROTEÇÃO DE DADOS",
      title: "Seus dados são valiosos demais para depender de um backup sem gestão.",
      subtitle: "Proteja servidores, computadores, máquinas virtuais e informações essenciais da sua empresa com uma solução profissional de backup e recuperação de dados, gerenciada pela Inserti e baseada na tecnologia Acronis.",
      chips: ["Backup empresarial", "Proteção de servidores", "Recuperação de dados"],
      highlight: "Seus dados protegidos, seus backups acompanhados e sua empresa preparada para recuperar informações quando precisar.",
      cta: { primary: "Solicitar avaliação", secondary: "Falar com especialista", mode: "form-whatsapp" },
      form: {
        title: "Sua empresa está preparada para recuperar seus dados?",
        description: "Conte um pouco sobre sua infraestrutura e suas necessidades de proteção. Nossa equipe ajudará a identificar a solução de backup adequada.",
        messageLabel: "Descreva sua necessidade (opcional)",
        button: "Solicitar avaliação de backup",
      },
      metrics: [],
    },
    problem: {
      eyebrow: "Os riscos da perda de dados",
      title: "Sua empresa conseguiria continuar operando se perdesse seus servidores ou informações hoje?",
      description: "Falhas de hardware, erros humanos, ataques cibernéticos e problemas na infraestrutura podem comprometer informações essenciais para o funcionamento de uma empresa. Ter uma cópia dos dados não é suficiente: é preciso garantir que os backups estejam atualizados, protegidos e disponíveis para recuperação.",
      painPoints: [
        {
          title: "01. Falhas em servidores e equipamentos",
          description: "Problemas em discos, servidores e máquinas virtuais podem interromper sistemas e comprometer informações importantes da operação.",
        },
        {
          title: "02. Ataques e sequestro de dados",
          description: "Ransomware e outras ameaças podem comprometer arquivos, sistemas e até mesmo cópias de segurança que não estejam adequadamente protegidas.",
        },
        {
          title: "03. Exclusões e alterações acidentais",
          description: "Erros humanos, exclusões indevidas e alterações incorretas podem causar perda de informações importantes para o negócio.",
        },
        {
          title: "04. Backups sem acompanhamento",
          description: "Rotinas que falham silenciosamente, cópias desatualizadas e ausência de testes de recuperação podem gerar uma falsa sensação de segurança.",
        },
      ],
    },
    solution: {
      eyebrow: "Nossa solução e metodologia",
      hideCardBadge: true,
      title: "Proteção de dados com tecnologia profissional e gestão especializada.",
      description: "A Inserti implementa e administra soluções de backup utilizando a plataforma Acronis Cyber Protect. Protegemos os dados e ambientes tecnológicos da sua empresa com políticas de backup planejadas, acompanhamento das rotinas e suporte técnico especializado.",
      features: [
        {
          title: "Análise do ambiente",
          description: "Avaliamos servidores, estações de trabalho, máquinas virtuais, aplicações e informações que precisam ser protegidas.",
        },
        {
          title: "Planejamento da proteção",
          description: "Definimos políticas de backup, frequência das cópias, períodos de retenção e destinos de armazenamento conforme a criticidade dos dados e as necessidades da empresa.",
        },
        {
          title: "Implantação e gerenciamento",
          description: "Configuramos a solução Acronis, implementamos as rotinas de backup e acompanhamos a execução das políticas de proteção.",
        },
        {
          title: "Acompanhamento e recuperação",
          description: "Monitoramos os resultados das rotinas, identificamos falhas e prestamos suporte nas operações de recuperação de arquivos, sistemas e ambientes protegidos.",
        },
      ],
    },
    benefitsSection: {
      eyebrow: "Resultados para sua empresa",
      title: "Mais segurança para seus dados. Mais tranquilidade para sua operação.",
    },
    benefits: [
      {
        title: "Proteção das informações",
        description: "Preserve dados importantes da empresa, servidores, aplicações e estações de trabalho.",
      },
      {
        title: "Recuperação quando necessário",
        description: "Recupere arquivos, sistemas e ambientes protegidos diante de falhas ou perdas de dados.",
      },
      {
        title: "Proteção contra ameaças",
        description: "Utilize recursos de proteção e segurança para reduzir os riscos de comprometimento das cópias de segurança.",
      },
      {
        title: "Gestão e acompanhamento",
        description: "Tenha visibilidade sobre as rotinas de backup e suporte especializado para administrar a proteção dos dados.",
      },
    ],
    techBanner: {
      eyebrow: "Tecnologia e confiança",
      brand: "Acronis",
      tag: "Tecnologia de proteção",
      title: "Proteção empresarial com tecnologia Acronis.",
      text: "Sua empresa conta com uma plataforma especializada em backup, proteção de dados e recuperação de ambientes, implementada e gerenciada pela equipe da Inserti.",
      items: [
        {
          title: "Proteção de dados",
          description: "Backup de servidores, estações e ambientes virtuais.",
        },
        {
          title: "Segurança integrada",
          description: "Recursos de proteção contra ameaças e ransomware, conforme a licença e configuração.",
        },
        {
          title: "Flexibilidade de armazenamento",
          description: "Opções de armazenamento local, em nuvem ou em arquiteturas híbridas.",
        },
        {
          title: "Recuperação flexível",
          description: "Recuperação de arquivos, sistemas e máquinas virtuais, conforme o ambiente protegido.",
        },
      ],
      footnote: "A Inserti cuida da implantação, configuração e administração da solução para que sua empresa tenha uma estratégia de proteção adequada às suas necessidades.",
      linkLabel: "Conheça a tecnologia: Acronis Cyber Protect",
      linkHref: "https://www.acronis.com/pt-br/products/cyber-protect/",
    },
    scopeSection: {
      eyebrow: "Escopo do serviço",
      title: "Uma solução de backup adaptada à infraestrutura da sua empresa.",
      description: "A plataforma Acronis permite proteger diferentes tipos de ambientes tecnológicos. A Inserti dimensiona e administra a solução conforme os sistemas, volumes de dados e necessidades de recuperação de cada cliente.",
      note: "As plataformas, recursos, destinos de armazenamento e modalidades de recuperação dependem da compatibilidade técnica, licenciamento e arquitetura contratada.",
    },
    includedScope: [
      {
        category: "Proteção de servidores e estações",
        items: [
          "Backup de servidores Windows e Linux compatíveis.",
          "Backup de estações de trabalho.",
          "Proteção de arquivos, pastas e discos.",
          "Backup completo de sistemas por imagem.",
          "Recuperação de arquivos e sistemas.",
        ],
      },
      {
        category: "Proteção de ambientes virtualizados",
        items: [
          "Backup de máquinas virtuais.",
          "Proteção de ambientes VMware e Hyper-V.",
          "Suporte a ambientes Proxmox conforme compatibilidade da versão e licença.",
          "Recuperação de máquinas virtuais.",
          "Planejamento de proteção para ambientes virtualizados.",
        ],
      },
      {
        category: "Gestão das rotinas de backup",
        items: [
          "Configuração de políticas de proteção.",
          "Definição de frequência e retenção.",
          "Acompanhamento da execução dos backups.",
          "Identificação de falhas nas rotinas.",
          "Suporte técnico para recuperação de dados.",
        ],
      },
      {
        category: "Armazenamento e proteção das cópias",
        items: [
          "Armazenamento local.",
          "Armazenamento em nuvem.",
          "Estratégias de cópias externas.",
          "Criptografia dos backups, quando configurada.",
          "Recursos de proteção e imutabilidade, conforme a solução contratada.",
        ],
      },
    ],
    differentialsSection: {
      eyebrow: "Autoridade e confiança",
      title: "Tecnologia especializada, gestão profissional e compromisso com seus dados.",
      description: "Um backup eficiente depende de mais do que uma ferramenta. É necessário entender a infraestrutura, definir políticas adequadas e acompanhar continuamente a proteção das informações.",
    },
    differentials: [
      {
        title: "Tecnologia Acronis",
        description: "Utilizamos uma plataforma especializada em proteção de dados e recuperação de ambientes.",
      },
      {
        title: "Gestão especializada",
        description: "Profissionais de TI responsáveis pela implantação e acompanhamento da solução.",
      },
      {
        title: "Conhecimento em infraestrutura",
        description: "Experiência em servidores, virtualização, redes, sistemas e ambientes empresariais.",
      },
      {
        title: "Proteção sob medida",
        description: "Políticas e estratégias dimensionadas de acordo com a realidade e a criticidade de cada ambiente.",
      },
    ],
    faqTitle: "Perguntas frequentes sobre backup empresarial.",
    faqs: [
      {
        question: "Por que minha empresa precisa de uma solução profissional de backup?",
        answer: "Dados empresariais podem ser perdidos por falhas de hardware, erros humanos, ataques cibernéticos ou problemas na infraestrutura. Uma solução profissional permite automatizar cópias de segurança, acompanhar sua execução e recuperar informações quando necessário.",
      },
      {
        question: "Qual a diferença entre backup local e backup em nuvem?",
        answer: "O backup local armazena cópias em dispositivos ou infraestrutura dentro da própria empresa, permitindo recuperações próximas e rápidas em determinadas situações. O backup em nuvem mantém cópias em uma infraestrutura externa, oferecendo uma camada adicional de proteção caso o ambiente local seja comprometido. As duas modalidades podem ser combinadas.",
      },
      {
        question: "Quais sistemas podem ser protegidos com Acronis?",
        answer: "A solução oferece suporte a diferentes ambientes, incluindo servidores Windows e Linux, estações de trabalho, máquinas virtuais e aplicações empresariais. A compatibilidade depende da versão, plataforma e licença contratada.",
      },
      {
        question: "O backup protege minha empresa contra ransomware?",
        answer: "O backup é uma parte fundamental da estratégia de recuperação contra ransomware. A Acronis também oferece recursos de segurança e proteção das cópias, dependendo da edição e configuração utilizada. É importante implementar políticas que dificultem o comprometimento dos backups junto com o ambiente de produção.",
      },
      {
        question: "Com que frequência os backups são realizados?",
        answer: "A frequência é definida conforme a criticidade das informações, o volume de dados e a necessidade de recuperação da empresa. Podemos configurar rotinas diárias ou intervalos menores, conforme a tecnologia e o dimensionamento contratado.",
      },
      {
        question: "Se meu servidor parar de funcionar, consigo recuperar todo o ambiente?",
        answer: "A recuperação de sistemas completos é possível quando o ambiente está adequadamente protegido e a estratégia contratada contempla esse tipo de restauração. Dependendo da arquitetura, é possível recuperar o sistema em outro hardware ou ambiente virtualizado.",
      },
      {
        question: "A Inserti acompanha se os backups estão funcionando?",
        answer: "Sim. A gestão da solução contempla o acompanhamento das rotinas de backup e a identificação de falhas, conforme o escopo contratado, permitindo que problemas sejam investigados e tratados.",
      },
    ],
    finalCta: {
      badge: "Proteção de dados empresariais",
      title: "Seus dados precisam estar protegidos antes que você precise deles.",
      subtitle: "Não espere uma falha ou perda de informações para descobrir a importância de um backup confiável. Conte com a Inserti para implementar e administrar uma solução de proteção de dados com tecnologia Acronis.",
      button: "Solicitar avaliação de backup",
      secondaryButton: "Falar com um especialista",
      primaryHref: "#form-lead",
    },
    seo: {
      metaTitle: "Backup Empresarial com Acronis | Inserti",
      metaDescription: "Proteja servidores, computadores e máquinas virtuais com backup empresarial Acronis. Implantação, gerenciamento e recuperação de dados pela Inserti.",
      keywords: ["backup empresarial", "backup Acronis", "backup de servidores", "backup em nuvem", "backup de máquinas virtuais", "proteção de dados empresariais"],
    },
  },

  {
    slug: "disaster-recovery",
    title: "Disaster Recovery",
    groupName: "Cyber Protect",
    groupDescription: "Proteção de dados",
    shortDescription: "Plano de continuidade e recuperação de desastres (DRaaS) com replicação contínua e RTO/RPO medidos em minutos para manter sua empresa operando.",
    badge: "Continuidade de Negócios",
    icon: "ShieldAlert",
    hero: {
      eyebrow: "CYBER PROTECT | CONTINUIDADE DE TI",
      title: "Sua empresa está preparada para continuar operando quando a infraestrutura parar?",
      subtitle: "Falhas em servidores, ataques cibernéticos ou problemas na infraestrutura podem interromper sistemas essenciais e comprometer toda a operação. Com a solução de Disaster Recovery da Inserti, sua empresa conta com um ambiente planejado para recuperar servidores e aplicações críticas, reduzindo o impacto das interrupções e acelerando a retomada das atividades.",
      chips: ["Recuperação de servidores e aplicações", "Ambiente de contingência em nuvem", "Planejamento de continuidade de TI"],
      highlight: "Não basta ter uma cópia dos seus dados. É preciso ter um plano para colocar seus sistemas de volta em funcionamento.",
      cta: { primary: "Solicitar avaliação de Disaster Recovery", secondary: "Falar com um especialista", mode: "form-whatsapp" },
      form: {
        title: "Sua empresa está preparada para uma interrupção?",
        description: "Converse com nossos especialistas e avalie as necessidades de recuperação do seu ambiente de TI.",
        messageLabel: "Principal preocupação (opcional)",
        button: "Solicitar avaliação",
      },
      metrics: [],
    },
    problem: {
      eyebrow: "O risco da indisponibilidade",
      title: "Quanto custa para sua empresa ficar sem acesso aos sistemas essenciais?",
      description: "Uma falha grave na infraestrutura pode comprometer vendas, atendimento, processos internos e acesso às informações. E, sem um plano de recuperação, o tempo necessário para retomar as operações pode ser muito maior do que o esperado.",
      painPoints: [
        {
          title: "01. Falhas na infraestrutura",
          description: "Problemas em servidores, equipamentos de armazenamento ou ambientes de virtualização podem deixar sistemas inteiros indisponíveis.",
        },
        {
          title: "02. Ataques cibernéticos",
          description: "Ransomware e outros incidentes podem comprometer servidores, aplicações e dados, exigindo uma recuperação estruturada.",
        },
        {
          title: "03. Ausência de ambiente alternativo",
          description: "Ter backups não significa que sua empresa conseguirá executar seus sistemas rapidamente. A infraestrutura necessária para a retomada também precisa estar planejada.",
        },
        {
          title: "04. Recuperação improvisada",
          description: "Sem procedimentos definidos, dependências mapeadas e prioridades estabelecidas, a equipe pode perder tempo tentando descobrir por onde começar.",
        },
      ],
    },
    solution: {
      eyebrow: "Como funciona o Disaster Recovery",
      hideCardBadge: true,
      title: "Da proteção dos dados à retomada das operações.",
      description: "A Inserti planeja e implementa uma estratégia de recuperação alinhada à infraestrutura e às necessidades do negócio. Com a tecnologia Acronis, é possível preparar ambientes de recuperação em nuvem e executar processos de failover e failback, conforme a arquitetura contratada.",
      features: [
        {
          title: "Análise e planejamento",
          description: "Identificamos os servidores, sistemas e aplicações essenciais, suas dependências e os impactos que uma interrupção pode causar à operação.",
        },
        {
          title: "Definição da estratégia de recuperação",
          description: "Definimos prioridades, objetivos de recuperação, pontos de restauração e a infraestrutura necessária para executar o plano de contingência.",
        },
        {
          title: "Implantação do ambiente de recuperação",
          description: "Configuramos a proteção das cargas de trabalho e os recursos necessários para permitir a recuperação dos sistemas em um ambiente alternativo.",
        },
        {
          title: "Testes e preparação",
          description: "Validamos os procedimentos de recuperação e verificamos o funcionamento dos sistemas em ambiente de teste, conforme o escopo contratado.",
        },
      ],
    },
    benefitsSection: {
      eyebrow: "O que sua empresa ganha",
      title: "Mais preparo para enfrentar interrupções.",
    },
    benefits: [
      {
        title: "Menor impacto operacional",
        description: "Tenha uma estratégia para recuperar sistemas essenciais e reduzir o período de indisponibilidade diante de falhas graves.",
      },
      {
        title: "Recuperação planejada",
        description: "Defina prioridades, responsabilidades e procedimentos para evitar decisões improvisadas durante uma crise.",
      },
      {
        title: "Ambiente alternativo",
        description: "Conte com a possibilidade de executar cargas de trabalho elegíveis em uma infraestrutura de recuperação na nuvem.",
      },
      {
        title: "Mais confiança na recuperação",
        description: "Com testes e validações periódicas, sua empresa pode identificar falhas no plano antes de precisar utilizá-lo em uma situação real.",
      },
    ],
    objectivesSection: {
      eyebrow: "Entenda os objetivos de recuperação",
      title: "Cada sistema tem uma importância diferente para o negócio.",
      description: "Um bom projeto de Disaster Recovery considera quanto tempo a empresa pode ficar sem determinado sistema e quanto de informação pode tolerar perder.",
      cards: [
        {
          title: "RTO: tempo para recuperar",
          description: "O Recovery Time Objective define o tempo-alvo para restabelecer um sistema ou serviço após uma interrupção.",
        },
        {
          title: "RPO: perda de dados aceitável",
          description: "O Recovery Point Objective define até que ponto os dados podem ser recuperados no tempo, estabelecendo a perda máxima de informações que o negócio está disposto a tolerar.",
        },
      ],
      support: "A Inserti ajuda a avaliar esses objetivos considerando a criticidade de cada aplicação, as dependências da infraestrutura e as necessidades da operação.",
      disclaimer: "Os objetivos de RTO e RPO dependem da arquitetura, frequência de proteção, recursos contratados e testes realizados. Não representam uma garantia universal de tempo de recuperação.",
    },
    techBanner: {
      eyebrow: "Tecnologia",
      brand: "Acronis",
      tag: "Disaster Recovery",
      title: "Recuperação de desastres com tecnologia Acronis.",
      text: "A solução utiliza a plataforma Acronis para conectar backup, infraestrutura de recuperação em nuvem e recursos de orquestração, permitindo preparar e executar a recuperação de ambientes de TI.",
      items: [
        {
          title: "Failover",
          description: "Execução de servidores protegidos em um ambiente alternativo de recuperação.",
        },
        {
          title: "Failback",
          description: "Retorno controlado das cargas de trabalho ao ambiente original após sua recuperação.",
        },
        {
          title: "Testes de recuperação",
          description: "Validação do ambiente alternativo sem interromper a produção.",
        },
        {
          title: "Orquestração",
          description: "Organização da sequência de inicialização dos sistemas e suas dependências.",
        },
        {
          title: "Pontos de recuperação",
          description: "Seleção de versões disponíveis dos dados para iniciar a recuperação.",
        },
      ],
      footnote: "A Inserti é responsável pelo planejamento, implantação e gestão da solução, considerando as necessidades e características de cada ambiente.",
      linkLabel: "Conheça a tecnologia Acronis",
      linkHref: "https://www.acronis.com/pt/platform/disaster-recovery/",
      diagram: {
        title: "Como funciona a recuperação",
        sources: [
          { title: "Ambiente principal", description: "Servidores e aplicações da empresa", icon: "server" },
          { title: "Acronis Cloud", description: "Backups e ambiente de recuperação preparado", icon: "cloud" },
        ],
        condition: "Em caso de interrupção",
        failover: { title: "Failover", description: "Sistemas recuperados no ambiente alternativo" },
        afterText: "Após a recuperação do ambiente original",
        failback: { title: "Failback", description: "Retorno controlado dos sistemas à infraestrutura original" },
      },
    },
    scopeSection: {
      eyebrow: "O que está incluído na solução",
      title: "Uma estratégia de recuperação dimensionada para sua infraestrutura.",
      note: "Os recursos disponíveis e o escopo efetivo dependem da compatibilidade do ambiente, licenciamento Acronis, arquitetura de implantação e serviços contratados.",
    },
    includedScope: [
      {
        category: "Planejamento de recuperação",
        items: [
          "Levantamento de servidores e aplicações críticas.",
          "Identificação de dependências entre sistemas.",
          "Definição de prioridades de recuperação.",
          "Planejamento de RTO e RPO.",
          "Desenho da estratégia de contingência.",
        ],
      },
      {
        category: "Proteção e ambiente alternativo",
        items: [
          "Configuração de backups elegíveis para recuperação.",
          "Preparação dos recursos de recuperação em nuvem.",
          "Configuração de rede e conectividade, conforme arquitetura.",
          "Definição dos pontos de recuperação.",
          "Preparação dos servidores de contingência.",
        ],
      },
      {
        category: "Recuperação e retorno",
        items: [
          "Execução de procedimentos de failover.",
          "Inicialização de servidores e aplicações.",
          "Organização da sequência de recuperação.",
          "Procedimentos de failback para retorno ao ambiente original.",
          "Apoio técnico durante as atividades previstas no contrato.",
        ],
      },
      {
        category: "Testes e acompanhamento",
        items: [
          "Testes de recuperação em ambiente isolado.",
          "Validação de inicialização dos servidores.",
          "Verificação de aplicações e conectividade.",
          "Registro dos resultados dos testes.",
          "Revisão do plano diante de mudanças relevantes na infraestrutura.",
        ],
      },
    ],
    differentialsSection: {
      eyebrow: "Por que escolher a Inserti?",
      title: "Tecnologia especializada com gestão próxima da sua operação.",
    },
    differentials: [
      {
        title: "Experiência em infraestrutura empresarial",
        description: "Conhecemos os desafios de ambientes com servidores, virtualização, redes, bancos de dados e aplicações essenciais para o negócio.",
      },
      {
        title: "Planejamento orientado ao negócio",
        description: "A estratégia considera a importância de cada sistema para a operação, não apenas os aspectos técnicos da infraestrutura.",
      },
      {
        title: "Implantação e gestão especializada",
        description: "Acompanhamos o projeto desde o levantamento do ambiente até a configuração e validação dos procedimentos de recuperação.",
      },
      {
        title: "Solução integrada de proteção",
        description: "Conectamos backup, infraestrutura e recuperação de desastres em uma estratégia alinhada às necessidades da empresa.",
      },
    ],
    faqs: [
      {
        question: "O que é Disaster Recovery?",
        answer: "Disaster Recovery, ou recuperação de desastres, é uma estratégia para restaurar servidores, aplicações e serviços de TI após falhas graves, ataques cibernéticos ou interrupções na infraestrutura.",
      },
      {
        question: "Qual é a diferença entre Backup e Disaster Recovery?",
        answer: "O backup mantém cópias dos dados para que possam ser restaurados. O Disaster Recovery vai além: prepara os recursos e procedimentos necessários para colocar servidores e aplicações novamente em funcionamento. São soluções complementares.",
      },
      {
        question: "Minha empresa precisa ter backup para implementar Disaster Recovery?",
        answer: "Sim. Na solução Acronis, o Disaster Recovery utiliza backups elegíveis como pontos de recuperação. A estratégia precisa considerar também o armazenamento e a infraestrutura necessários para executar os sistemas recuperados.",
      },
      {
        question: "Onde os sistemas são executados durante a recuperação?",
        answer: "Na arquitetura de recuperação em nuvem da Acronis, os servidores protegidos podem ser iniciados no ambiente de recuperação configurado na Acronis Cloud, conforme disponibilidade regional e condições do serviço contratado.",
      },
      {
        question: "É possível testar o Disaster Recovery sem parar a operação?",
        answer: "Sim. A plataforma Acronis oferece recursos de failover de teste em ambiente isolado, permitindo validar a inicialização dos servidores sem interromper o ambiente de produção.",
      },
      {
        question: "Quanto tempo leva para recuperar um servidor?",
        answer: "Depende da arquitetura, do volume de dados, dos recursos de processamento, da conectividade e do objetivo de recuperação definido. O projeto deve estabelecer metas de RTO e validá-las por meio de testes.",
      },
      {
        question: "O Disaster Recovery protege contra ransomware?",
        answer: "O Disaster Recovery contribui para a estratégia de recuperação após incidentes, mas não substitui as medidas de prevenção e segurança. A escolha de um ponto de recuperação seguro, a análise de ameaças e a proteção dos backups são fundamentais.",
      },
      {
        question: "Minha empresa precisa contratar um segundo data center?",
        answer: "Não necessariamente. A recuperação em nuvem pode oferecer um ambiente alternativo sem exigir que a empresa mantenha uma segunda infraestrutura física própria. A viabilidade depende das necessidades e da arquitetura do projeto.",
      },
    ],
    finalCta: {
      badge: "Continuidade de TI",
      title: "Se a sua infraestrutura parar, sua empresa sabe como vai continuar?",
      subtitle: "Não espere uma falha grave para descobrir quanto tempo sua operação levaria para se recuperar. Converse com a Inserti e avalie uma estratégia de Disaster Recovery adequada à realidade da sua empresa.",
      button: "Solicitar avaliação de Disaster Recovery",
      secondaryButton: "Falar com um especialista",
      primaryHref: "#form-lead",
    },
    seo: {
      metaTitle: "Disaster Recovery e Recuperação de Desastres | Inserti",
      metaDescription: "Prepare sua empresa para falhas, ataques e interrupções com Disaster Recovery. Planejamento e recuperação de ambientes de TI com tecnologia Acronis.",
      keywords: ["Disaster Recovery", "recuperação de desastres", "DRaaS", "recuperação de servidores", "continuidade de TI", "recuperação em nuvem", "plano de recuperação de desastres"],
    },
  },

  {
    slug: "backup-microsoft-365-google-workspace",
    title: "Backup Microsoft 365 e Google Workspace",
    groupName: "Cyber Protect",
    groupDescription: "Proteção de dados",
    shortDescription: "Proteção independente e recuperação granular para caixas postais, OneDrive, SharePoint, Teams e Google Drive contra exclusões acidentais e ransomware.",
    badge: "Proteção SaaS em Nuvem",
    icon: "CloudRain",
    hero: {
      eyebrow: "CYBER PROTECT | PROTEÇÃO DE DADOS",
      title: "Seus dados na nuvem também precisam de backup.",
      subtitle: "E-mails, documentos e arquivos compartilhados fazem parte do patrimônio da sua empresa. Uma exclusão acidental, um ataque ou uma falha na gestão de usuários pode comprometer informações importantes. Com o backup empresarial da Inserti, seus dados do Microsoft 365 e Google Workspace contam com uma camada adicional de proteção, armazenamento de cópias e recursos para recuperar informações quando necessário.",
      chips: ["Backup Microsoft 365 e Google Workspace", "Proteção de e-mails e arquivos corporativos", "Recuperação de informações e dados excluídos"],
      highlight: "Mais proteção para as informações que movimentam sua empresa, mesmo quando estão armazenadas em plataformas de produtividade na nuvem.",
      cta: { primary: "Solicitar avaliação de backup", secondary: "Falar com um especialista", mode: "form-whatsapp" },
      form: {
        title: "Sua empresa protege os dados armazenados na nuvem?",
        description: "Avalie a proteção dos seus e-mails, documentos e arquivos corporativos com nossos especialistas.",
        messageLabel: "Plataforma utilizada (Microsoft 365, Google Workspace ou ambas) e número de usuários (opcional)",
        button: "Solicitar avaliação",
      },
      metrics: [],
    },
    problem: {
      eyebrow: "Seus dados não estão livres de riscos",
      title: "Utilizar serviços em nuvem não elimina o risco de perder informações.",
      description: "Microsoft 365 e Google Workspace oferecem infraestrutura e recursos de disponibilidade para seus serviços. Mas sua empresa ainda precisa avaliar como proteger e recuperar os dados diante de exclusões, erros operacionais e incidentes de segurança.",
      painPoints: [
        {
          title: "01. Exclusões acidentais",
          description: "Um usuário pode excluir e-mails, documentos ou pastas importantes sem perceber. Dependendo do tempo e das condições, os recursos nativos de recuperação podem não atender à necessidade.",
        },
        {
          title: "02. Ataques cibernéticos",
          description: "Ransomware e comprometimentos de contas podem afetar informações armazenadas em e-mails, drives e ambientes de colaboração.",
        },
        {
          title: "03. Erros de usuários e alterações indevidas",
          description: "Uma edição incorreta, exclusão de arquivos ou alteração de informações pode comprometer documentos essenciais para a operação.",
        },
        {
          title: "04. Desligamento de colaboradores",
          description: "Quando um funcionário deixa a empresa, informações importantes podem ficar associadas à sua conta. Sem uma estratégia adequada, recuperar esses dados posteriormente pode se tornar um problema.",
        },
      ],
    },
    solution: {
      eyebrow: "Backup gerenciado pela Inserti",
      hideCardBadge: true,
      title: "Uma camada adicional de proteção para os dados da sua empresa.",
      description: "A Inserti implementa e gerencia uma solução de backup em nuvem baseada na tecnologia Acronis, permitindo proteger informações do Microsoft 365 e Google Workspace em uma estrutura independente dos serviços de produtividade.",
      features: [
        {
          title: "Análise do ambiente",
          description: "Identificamos as contas, usuários, serviços e informações que precisam de proteção.",
        },
        {
          title: "Planejamento da proteção",
          description: "Definimos quais dados serão protegidos, políticas de backup, frequência e retenção conforme as necessidades do negócio e os recursos contratados.",
        },
        {
          title: "Implantação da solução",
          description: "Configuramos a integração com Microsoft 365 ou Google Workspace e estabelecemos os planos de proteção e armazenamento.",
        },
        {
          title: "Gestão e recuperação",
          description: "Acompanhamos o funcionamento dos backups e prestamos suporte para localizar e recuperar informações conforme as necessidades da empresa.",
        },
      ],
    },
    benefitsSection: {
      eyebrow: "Proteção para o trabalho diário",
      title: "Mais controle sobre os dados da sua empresa.",
    },
    benefits: [
      {
        title: "Proteção independente",
        description: "Mantenha cópias de segurança fora do ambiente principal do Microsoft 365 ou Google Workspace, conforme a arquitetura de armazenamento contratada.",
      },
      {
        title: "Recuperação granular",
        description: "Recupere informações específicas, como e-mails, arquivos e outros itens compatíveis, sem necessariamente restaurar todo o ambiente.",
      },
      {
        title: "Retenção configurável",
        description: "Defina por quanto tempo manter as cópias de segurança de acordo com as políticas e necessidades da empresa.",
      },
      {
        title: "Gestão centralizada",
        description: "Tenha uma administração organizada dos planos de proteção e acompanhamento dos backups por meio da plataforma Acronis.",
      },
    ],
    scopeBeforeBanner: true,
    scopeSection: {
      eyebrow: "O que protegemos?",
      title: "Backup dos principais serviços utilizados pela sua equipe.",
      note: "Os itens protegidos e as possibilidades de recuperação variam conforme o serviço, a API da plataforma, a edição e o licenciamento contratado.",
    },
    includedScope: [
      {
        category: "Microsoft 365",
        intro: "Proteção dos dados de produtividade e colaboração:",
        items: [
          "Exchange Online: e-mails, calendários e contatos.",
          "OneDrive for Business: arquivos e pastas.",
          "SharePoint Online: sites e documentos.",
          "Microsoft Teams: conteúdos compatíveis de equipes, canais e arquivos.",
        ],
      },
      {
        category: "Google Workspace",
        intro: "Proteção dos dados do ambiente Google:",
        items: [
          "Gmail: caixas de e-mail e mensagens.",
          "Google Drive: arquivos e documentos.",
          "Shared Drives: unidades compartilhadas.",
          "Google Calendar: calendários e eventos compatíveis.",
          "Google Contacts: contatos dos usuários.",
        ],
      },
    ],
    techBanner: {
      eyebrow: "Tecnologia",
      brand: "Acronis",
      tag: "Backup em nuvem",
      title: "Proteção em nuvem com tecnologia Acronis.",
      text: "A Inserti utiliza a plataforma Acronis para proteger e recuperar dados de serviços corporativos em nuvem. A solução permite realizar backups de nuvem para nuvem, mantendo cópias independentes dos dados e recursos de recuperação para diferentes necessidades operacionais.",
      items: [
        {
          title: "Backup automatizado",
          description: "Execução de cópias conforme os planos de proteção configurados.",
        },
        {
          title: "Recuperação granular",
          description: "Restauração de itens específicos, como mensagens, arquivos e outros conteúdos compatíveis.",
        },
        {
          title: "Retenção configurável",
          description: "Políticas para manter os pontos de recuperação pelo período definido.",
        },
        {
          title: "Criptografia",
          description: "Proteção dos backups com recursos de criptografia disponíveis na solução contratada.",
        },
        {
          title: "Armazenamento independente",
          description: "Possibilidade de manter cópias na Acronis Cloud, conforme o plano contratado.",
        },
        {
          title: "Gerenciamento centralizado",
          description: "Acompanhamento dos planos de proteção e status dos backups.",
        },
      ],
      linkLabel: "Conheça a solução oficial de Backup Microsoft 365 da Acronis",
      linkHref: "https://www.acronis.com/pt/platform/backup-microsoft-365/",
      extraLinks: [
        { label: "Conheça as soluções Acronis para Google Workspace", href: "https://www.acronis.com/pt/solutions/" },
      ],
    },
    differentialsSection: {
      eyebrow: "Por que escolher a Inserti?",
      title: "Sua empresa conta com uma equipe especializada para cuidar da proteção dos dados.",
    },
    differentials: [
      {
        title: "Gestão especializada",
        description: "Não entregamos apenas uma ferramenta. A Inserti realiza a implantação, configuração e gestão da solução de backup.",
      },
      {
        title: "Experiência em infraestrutura e segurança",
        description: "Entendemos como os serviços em nuvem se conectam à infraestrutura, aos usuários e aos processos das empresas.",
      },
      {
        title: "Proteção adequada ao seu ambiente",
        description: "Avaliamos as necessidades da organização para definir quais usuários, serviços e informações precisam de proteção.",
      },
      {
        title: "Suporte próximo",
        description: "Conte com uma equipe de TI para acompanhar a solução e apoiar os processos de recuperação quando necessário.",
      },
    ],
    faqs: [
      {
        question: "A Microsoft e o Google já não fazem backup dos meus dados?",
        answer: "As plataformas oferecem mecanismos de disponibilidade, proteção da infraestrutura e recursos próprios de recuperação. Porém, isso não substitui necessariamente uma estratégia independente de backup, com políticas de retenção e recuperação adequadas às necessidades da empresa.",
      },
      {
        question: "O que acontece se um funcionário excluir um e-mail ou arquivo?",
        answer: "Com um backup válido, é possível localizar um ponto de recuperação e restaurar os dados compatíveis, conforme a retenção e os recursos disponíveis na solução contratada.",
      },
      {
        question: "É possível recuperar apenas um e-mail ou arquivo?",
        answer: "Sim. A plataforma Acronis oferece recursos de recuperação granular para diferentes tipos de dados, permitindo restaurar itens específicos sem precisar recuperar todo o ambiente, conforme a compatibilidade do serviço.",
      },
      {
        question: "O backup funciona para Microsoft 365 e Google Workspace?",
        answer: "Sim. A solução Acronis possui recursos de proteção para as duas plataformas. A cobertura e os itens disponíveis para recuperação variam conforme cada serviço e configuração.",
      },
      {
        question: "O backup inclui Microsoft Teams?",
        answer: "A Acronis oferece proteção para conteúdos compatíveis do Teams, como equipes, canais e arquivos de canais. Existem limitações específicas: por exemplo, chats privados individuais e em grupo não recebem backup nessa modalidade. É importante avaliar a cobertura antes da contratação.",
      },
      {
        question: "O backup inclui unidades compartilhadas do Google Drive?",
        answer: "Sim. A Acronis oferece proteção para Shared Drives, além de dados compatíveis de Gmail, Drive, Calendar e Contacts.",
      },
      {
        question: "Onde os backups ficam armazenados?",
        answer: "Podem ser armazenados na Acronis Cloud, conforme a modalidade contratada. Isso permite manter cópias independentes do ambiente principal de produtividade.",
      },
      {
        question: "Por quanto tempo os dados ficam armazenados?",
        answer: "O período de retenção é definido conforme a política de backup e o plano contratado. A estratégia deve considerar as necessidades de recuperação e os requisitos internos da empresa.",
      },
      {
        question: "O backup protege contra ransomware?",
        answer: "O backup permite recuperar informações a partir de cópias disponíveis e protegidas. Recursos como imutabilidade podem adicionar proteção contra exclusões indevidas dos próprios backups, quando configurados e disponíveis no plano. Ainda assim, backup não substitui antivírus, EDR e outras medidas de segurança.",
      },
      {
        question: "Posso contratar o serviço mesmo já utilizando Microsoft 365 ou Google Workspace há anos?",
        answer: "Sim. A solução pode ser implantada em ambientes já existentes, mediante avaliação das contas, permissões, compatibilidade e licenciamento.",
      },
    ],
    finalCta: {
      badge: "Proteção de dados em nuvem",
      title: "Seus dados estão na nuvem. Mas estão realmente protegidos?",
      subtitle: "Não deixe informações importantes da sua empresa dependerem apenas dos recursos nativos de recuperação das plataformas. Conte com a Inserti para implementar e gerenciar uma estratégia de backup para Microsoft 365 e Google Workspace.",
      button: "Solicitar avaliação de backup",
      secondaryButton: "Falar com um especialista",
      primaryHref: "#form-lead",
    },
    seo: {
      metaTitle: "Backup Microsoft 365 e Google Workspace | Inserti",
      metaDescription: "Proteja e-mails, arquivos e dados do Microsoft 365 e Google Workspace com backup em nuvem Acronis, gerenciamento e recuperação pela Inserti.",
      keywords: ["Backup Microsoft 365", "backup Google Workspace", "backup Office 365", "backup Gmail", "backup OneDrive", "backup Google Drive", "backup SharePoint", "proteção de dados em nuvem"],
    },
  },

  // ==========================================
  // GRUPO 2: CYBER SECURITY (Segurança da informação)
  // ==========================================
  {
    slug: "firewall-como-servico",
    title: "Firewall como serviço (Fortinet)",
    groupName: "Cyber Security",
    groupDescription: "Segurança da informação",
    shortDescription: "Appliance FortiGate Next-Generation Firewall como serviço (FaaS): hardware, licenciamento FortiGuard, cluster HA, SD-WAN e gestão especializada.",
    badge: "Fortinet Expert Partner",
    icon: "ShieldCheck",
    hero: {
      eyebrow: "CYBER SECURITY | SEGURANÇA DA INFORMAÇÃO",
      title: "Sua empresa precisa de uma rede protegida, não apenas de um firewall instalado.",
      subtitle: "A segurança da rede empresarial exige mais do que um equipamento conectado à internet. É necessário configurar políticas de acesso, controlar o tráfego, proteger os usuários e acompanhar continuamente as necessidades da infraestrutura. Com o Firewall como Serviço da Inserti, sua empresa conta com tecnologia Fortinet e gestão especializada para proteger a rede, controlar acessos e manter a conectividade corporativa sob controle.",
      chips: ["Firewall empresarial Fortinet", "Gestão e administração especializada", "Proteção e controle do tráfego de rede"],
      highlight: "Tenha uma infraestrutura de segurança bem configurada e administrada por especialistas, sem precisar assumir toda a complexidade técnica internamente.",
      cta: { primary: "Solicitar avaliação de segurança", secondary: "Falar com um especialista", mode: "form-whatsapp" },
      form: {
        title: "Sua rede está realmente protegida?",
        description: "Avalie a segurança da sua infraestrutura e descubra como um firewall gerenciado pode proteger sua empresa.",
        messageLabel: "Quantidade de unidades ou filiais e se já possui firewall (opcional)",
        button: "Solicitar avaliação",
      },
      metrics: [],
    },
    problem: {
      eyebrow: "Os riscos de uma rede sem gestão adequada",
      title: "Um firewall mal configurado pode deixar sua empresa exposta.",
      description: "Ter um equipamento de segurança não significa que a rede esteja protegida. Regras inadequadas, acessos sem controle e falta de acompanhamento podem criar brechas que comprometem toda a infraestrutura.",
      painPoints: [
        {
          title: "01. Acessos sem controle",
          description: "Usuários, dispositivos e aplicações podem acessar recursos da rede sem políticas adequadas de segurança e autorização.",
        },
        {
          title: "02. Ameaças vindas da internet",
          description: "Tentativas de invasão, exploração de vulnerabilidades, conexões maliciosas e outros ataques podem comprometer a infraestrutura empresarial.",
        },
        {
          title: "03. Falta de visibilidade do tráfego",
          description: "Sem controle adequado, a empresa pode ter dificuldade para identificar quais aplicações consomem a internet, quais serviços estão sendo acessados e onde estão os problemas.",
        },
        {
          title: "04. Configurações desatualizadas",
          description: "Regras antigas, firmware desatualizado e configurações inadequadas podem comprometer a eficiência e a segurança do firewall.",
        },
      ],
    },
    solution: {
      eyebrow: "Firewall gerenciado pela Inserti",
      hideCardBadge: true,
      title: "Segurança de rede com tecnologia Fortinet e gestão especializada.",
      description: "A Inserti implanta, configura e administra firewalls FortiGate, desenvolvendo políticas de segurança alinhadas à estrutura e às necessidades da sua empresa.",
      features: [
        {
          title: "Análise da infraestrutura",
          description: "Avaliamos a rede, os links de internet, os equipamentos, os usuários, as aplicações e os requisitos de segurança.",
        },
        {
          title: "Projeto e implantação",
          description: "Dimensionamos o firewall, estruturamos a arquitetura de rede e configuramos as políticas necessárias para proteger o ambiente.",
        },
        {
          title: "Administração e proteção",
          description: "Gerenciamos regras de acesso, VPNs, filtros de segurança e demais recursos contratados, mantendo a configuração alinhada às necessidades da operação.",
        },
        {
          title: "Acompanhamento e melhoria",
          description: "Acompanhamos o funcionamento do equipamento, avaliamos necessidades de ajustes e apoiamos a evolução da infraestrutura de segurança.",
        },
      ],
    },
    benefitsSection: {
      eyebrow: "O que sua empresa ganha",
      title: "Mais segurança, controle e previsibilidade para sua rede.",
    },
    benefits: [
      {
        title: "Proteção do perímetro",
        description: "Controle o tráfego entre sua rede interna e a internet, aplicando políticas para reduzir a exposição da infraestrutura a acessos e conexões indesejadas.",
      },
      {
        title: "Controle de aplicações e usuários",
        description: "Defina quais serviços e aplicações podem ser utilizados, conforme as políticas de segurança da empresa.",
      },
      {
        title: "Conectividade segura",
        description: "Estabeleça conexões VPN entre unidades, filiais e usuários remotos, permitindo acesso seguro aos recursos corporativos.",
      },
      {
        title: "Gestão especializada",
        description: "Conte com profissionais responsáveis pela administração do firewall, ajustes de configuração e acompanhamento da infraestrutura.",
      },
    ],
    scopeBeforeBanner: true,
    scopeSection: {
      eyebrow: "O que está incluído no serviço",
      title: "Uma solução de segurança dimensionada para sua empresa.",
      note: "Os recursos de proteção dependem do modelo FortiGate, da versão do FortiOS, das licenças FortiGuard e do escopo contratado.",
    },
    includedScope: [
      {
        category: "Firewall e políticas de segurança",
        items: [
          "Implantação e configuração do FortiGate.",
          "Criação e administração de regras de firewall.",
          "Controle de entrada e saída de tráfego.",
          "Segmentação de redes e configuração de VLANs.",
          "Controle de acesso entre diferentes ambientes.",
          "Administração de objetos, serviços e políticas.",
        ],
      },
      {
        category: "Proteção contra ameaças",
        items: [
          "Configuração de prevenção contra intrusões (IPS).",
          "Antivírus de rede, quando disponível no licenciamento.",
          "Filtros de navegação e categorias de conteúdo.",
          "Controle de aplicações.",
          "Proteção contra conexões maliciosas.",
          "Administração dos recursos de segurança contratados.",
        ],
      },
      {
        category: "Conectividade e VPN",
        items: [
          "VPN site-to-site entre unidades.",
          "VPN para acesso remoto de usuários.",
          "Integração segura entre redes.",
          "Administração de múltiplos links de internet.",
          "Configuração de redundância e failover, quando aplicável.",
          "Recursos de SD-WAN, conforme arquitetura.",
        ],
      },
      {
        category: "Administração e acompanhamento",
        items: [
          "Administração das configurações do firewall.",
          "Revisão e ajustes de políticas.",
          "Acompanhamento do funcionamento do equipamento.",
          "Atualizações de firmware planejadas.",
          "Análise de registros e eventos disponíveis.",
          "Suporte técnico e documentação das configurações.",
        ],
      },
    ],
    techBanner: {
      eyebrow: "Tecnologia",
      brand: "Fortinet",
      tag: "FortiGate",
      title: "Segurança empresarial com tecnologia Fortinet.",
      text: "A Inserti utiliza a plataforma FortiGate da Fortinet, uma solução de firewall de próxima geração (NGFW) que integra recursos de segurança e conectividade em uma única plataforma. Com o FortiGate, é possível controlar o tráfego, aplicar políticas de segurança, proteger aplicações e estabelecer conexões seguras entre diferentes unidades da empresa.",
      items: [
        {
          title: "IPS",
          description: "Prevenção contra intrusões e exploração de vulnerabilidades conhecidas.",
        },
        {
          title: "Antivírus",
          description: "Inspeção de arquivos e tráfego para identificar ameaças, conforme licenciamento.",
        },
        {
          title: "Web Filtering",
          description: "Controle de acesso a sites e categorias de conteúdo.",
        },
        {
          title: "Application Control",
          description: "Identificação e controle de aplicações utilizadas na rede.",
        },
        {
          title: "VPN",
          description: "Conexões seguras entre unidades e usuários remotos.",
        },
        {
          title: "SD-WAN",
          description: "Gerenciamento inteligente de múltiplos links de internet e caminhos de conexão.",
        },
      ],
      footnote: "A tecnologia é Fortinet. O planejamento, a implantação e a gestão da sua solução ficam com a Inserti.",
      linkLabel: "Conheça a tecnologia Fortinet",
      linkHref: "https://www.fortinet.com/br/products/next-generation-firewall",
    },
    differentialsSection: {
      eyebrow: "Por que escolher a Inserti?",
      title: "Segurança de rede com acompanhamento especializado.",
    },
    differentials: [
      {
        title: "Experiência em infraestrutura empresarial",
        description: "Nossa atuação envolve redes, servidores, conectividade, virtualização e segurança. Isso permite avaliar o firewall dentro do contexto de toda a infraestrutura.",
      },
      {
        title: "Gestão além da instalação",
        description: "Não entregamos apenas um equipamento configurado. A Inserti acompanha a administração e as necessidades de evolução da solução.",
      },
      {
        title: "Soluções dimensionadas para cada ambiente",
        description: "Cada empresa possui uma estrutura, quantidade de usuários, aplicações e requisitos diferentes. O projeto considera essas particularidades.",
      },
      {
        title: "Integração com sua infraestrutura",
        description: "O firewall pode ser integrado à rede corporativa, VPNs, servidores, Wi-Fi e demais recursos de segurança e conectividade da empresa.",
      },
    ],
    faqs: [
      {
        question: "O que é Firewall como Serviço?",
        answer: "É um modelo em que a empresa contrata não apenas o equipamento de firewall, mas também os serviços de implantação, configuração, administração e suporte. A Inserti assume a gestão técnica da solução conforme o contrato.",
      },
      {
        question: "Qual é a diferença entre um firewall comum e um firewall Fortinet?",
        answer: "O FortiGate é uma plataforma de firewall de próxima geração que reúne recursos de segurança de rede, inspeção de tráfego, controle de aplicações, VPN e conectividade. Os recursos disponíveis variam conforme o modelo e o licenciamento.",
      },
      {
        question: "Preciso comprar o equipamento?",
        answer: "Não necessariamente. A modalidade comercial pode incluir equipamento em comodato ou fornecimento por assinatura, conforme disponibilidade e condições do contrato. Também podemos administrar equipamentos FortiGate já existentes e compatíveis.",
      },
      {
        question: "O firewall protege contra ransomware?",
        answer: "O FortiGate possui recursos que ajudam a identificar e bloquear diferentes tipos de ameaças de rede, incluindo tráfego associado a atividades maliciosas. Porém, ele não substitui soluções de proteção de endpoints, backup e outras camadas de segurança.",
      },
      {
        question: "É possível controlar os sites que os funcionários acessam?",
        answer: "Sim. Recursos de filtragem web e controle de aplicações permitem aplicar políticas de navegação e utilização de serviços, conforme o licenciamento disponível e as regras definidas pela empresa.",
      },
      {
        question: "O firewall permite conectar filiais?",
        answer: "Sim. É possível configurar VPNs site-to-site para conectar diferentes unidades de forma segura, permitindo comunicação entre redes corporativas.",
      },
      {
        question: "Já tenho um firewall. Posso contratar apenas o gerenciamento?",
        answer: "Sim. Podemos avaliar o equipamento existente, sua configuração, licenciamento e compatibilidade para verificar a viabilidade de assumir sua administração.",
      },
      {
        question: "A Inserti monitora o firewall 24 horas por dia?",
        answer: "O acompanhamento e os horários de atendimento dependem do plano contratado. A proposta de Firewall como Serviço contempla a gestão técnica da solução, mas não deve ser confundida com um serviço SOC de monitoramento e resposta a incidentes 24x7.",
      },
      {
        question: "O firewall substitui antivírus e EDR?",
        answer: "Não. O firewall protege e controla o tráfego de rede. Antivírus e EDR atuam nos dispositivos e servidores. São camadas complementares de segurança.",
      },
    ],
    finalCta: {
      badge: "Segurança de rede",
      title: "Sua empresa não precisa administrar sozinha a segurança da rede.",
      subtitle: "Tenha um firewall empresarial Fortinet implantado e gerenciado por especialistas. A Inserti ajuda sua empresa a proteger a infraestrutura, controlar acessos e manter a conectividade sob gestão.",
      button: "Solicitar avaliação de segurança",
      secondaryButton: "Falar com um especialista",
      primaryHref: "#form-lead",
    },
    seo: {
      metaTitle: "Firewall como Serviço com Fortinet | Inserti",
      metaDescription: "Proteja a rede da sua empresa com Firewall Fortinet gerenciado pela Inserti. Segurança, controle de acesso, VPN, proteção contra ameaças e gestão especializada.",
      keywords: ["Firewall como Serviço", "firewall Fortinet", "firewall empresarial", "firewall gerenciado", "segurança de rede", "firewall corporativo", "FortiGate"],
    },
  },

  {
    slug: "endpoint-security-edr",
    title: "Endpoint Security e EDR",
    groupName: "Cyber Security",
    groupDescription: "Segurança da informação",
    shortDescription: "Proteção avançada de computadores e servidores com detecção comportamental, inteligência artificial, reversão de ransomware (Rollback) e isolamento imediato de ameaças.",
    badge: "Detecção e Resposta Avançada",
    icon: "ShieldAlert",
    hero: {
      eyebrow: "CYBER SECURITY | SEGURANÇA DA INFORMAÇÃO",
      title: "Proteja os dispositivos da sua empresa contra ameaças digitais.",
      subtitle: "Computadores e servidores são portas de entrada para ameaças que podem comprometer informações, interromper operações e colocar toda a infraestrutura em risco. Com Endpoint Security e EDR gerenciados pela Inserti, sua empresa conta com proteção para os dispositivos corporativos, identificação de atividades suspeitas e recursos avançados para prevenir e conter ameaças.",
      chips: ["Proteção de computadores e servidores", "Defesa contra malware e ransomware", "Gestão centralizada de segurança"],
      highlight: "Mais do que instalar um antivírus: tenha uma estratégia de proteção dos endpoints administrada por especialistas.",
      cta: { primary: "Solicitar avaliação de segurança", secondary: "Falar com um especialista", mode: "form-whatsapp" },
      form: {
        title: "Seus dispositivos estão protegidos?",
        description: "Avalie a segurança dos computadores e servidores da sua empresa com nossos especialistas.",
        messageLabel: "Quantidade aproximada de dispositivos e se já utiliza antivírus empresarial (opcional)",
        button: "Solicitar avaliação",
      },
      metrics: [],
    },
    problem: {
      eyebrow: "Ameaças que começam nos dispositivos",
      title: "Um único dispositivo comprometido pode colocar toda a empresa em risco.",
      description: "Computadores e servidores estão constantemente expostos a arquivos maliciosos, links suspeitos, vulnerabilidades e tentativas de acesso indevido. Sem uma proteção adequada e uma gestão centralizada, identificar e conter essas ameaças pode se tornar muito mais difícil.",
      painPoints: [
        {
          title: "01. Malware e ransomware",
          description: "Arquivos maliciosos podem comprometer dispositivos, criptografar informações e interromper atividades importantes da empresa.",
        },
        {
          title: "02. Ameaças que passam despercebidas",
          description: "Nem toda ameaça é identificada por assinaturas tradicionais. Comportamentos suspeitos podem permanecer ativos sem uma camada de detecção mais avançada.",
        },
        {
          title: "03. Dispositivos sem gestão centralizada",
          description: "Computadores sem proteção atualizada, configurações inconsistentes e falta de acompanhamento aumentam a exposição da empresa.",
        },
        {
          title: "04. Dificuldade para investigar incidentes",
          description: "Sem registros e recursos de análise, pode ser difícil entender o que aconteceu, quais dispositivos foram afetados e quais medidas devem ser tomadas.",
        },
      ],
    },
    solution: {
      eyebrow: "Proteção e gestão de endpoints",
      hideCardBadge: true,
      title: "Segurança para os dispositivos que mantêm sua empresa funcionando.",
      description: "A Inserti implanta e administra soluções de Endpoint Security e EDR para proteger computadores e servidores, centralizar políticas de segurança e acompanhar a situação dos dispositivos.",
      features: [
        {
          title: "Avaliação do ambiente",
          description: "Identificamos os dispositivos, sistemas operacionais, soluções existentes e necessidades de proteção.",
        },
        {
          title: "Implantação da proteção",
          description: "Instalamos e configuramos os agentes de segurança, definindo políticas adequadas para cada grupo de dispositivos.",
        },
        {
          title: "Gestão e acompanhamento",
          description: "Administramos as políticas de proteção, acompanhamos alertas e verificamos a situação dos endpoints protegidos.",
        },
        {
          title: "Análise e suporte",
          description: "Apoiamos a análise de detecções e a aplicação das medidas de contenção e correção disponíveis na solução e no serviço contratado.",
        },
      ],
    },
    benefitsSection: {
      eyebrow: "O que sua empresa ganha",
      title: "Mais proteção e controle sobre os dispositivos corporativos.",
    },
    benefits: [
      {
        title: "Proteção contra ameaças",
        description: "Reduza a exposição a vírus, malware, ransomware e outras ameaças digitais com recursos de segurança para endpoints.",
      },
      {
        title: "Detecção comportamental",
        description: "Identifique atividades suspeitas que podem indicar uma tentativa de ataque, inclusive ameaças que não dependem apenas de assinaturas conhecidas.",
      },
      {
        title: "Gestão centralizada",
        description: "Administre a proteção dos dispositivos por meio de uma plataforma centralizada, com políticas e visibilidade sobre os endpoints.",
      },
      {
        title: "Mais controle sobre incidentes",
        description: "Conte com recursos para investigar detecções, identificar dispositivos afetados e executar ações de contenção compatíveis com a solução contratada.",
      },
    ],
    objectivesSection: {
      eyebrow: "Entenda a diferença",
      title: "Endpoint Security e EDR: duas camadas complementares para proteger sua empresa.",
      cards: [
        {
          title: "Endpoint Security: prevenção e proteção",
          description: "A camada de proteção dos endpoints atua na prevenção, identificação e bloqueio de ameaças nos dispositivos.",
          items: [
            "Antivírus e antimalware.",
            "Proteção contra ransomware.",
            "Análise de arquivos e processos.",
            "Proteção em tempo real.",
            "Políticas de segurança.",
            "Atualizações de proteção.",
          ],
        },
        {
          title: "EDR: detecção e investigação",
          description: "O Endpoint Detection and Response amplia a visibilidade sobre as atividades dos dispositivos e permite identificar comportamentos suspeitos.",
          items: [
            "Monitoramento de atividades nos endpoints.",
            "Detecção comportamental de ameaças.",
            "Análise de eventos e alertas.",
            "Investigação de atividades suspeitas.",
            "Identificação de processos e dispositivos afetados.",
            "Recursos de contenção e resposta, conforme a plataforma.",
          ],
        },
      ],
      support: "Enquanto a proteção tradicional busca impedir que ameaças comprometam os dispositivos, o EDR amplia a capacidade de identificar e investigar atividades suspeitas quando uma ameaça consegue avançar.",
    },
    scopeSection: {
      eyebrow: "O que está incluído no serviço",
      title: "Proteção gerenciada para computadores e servidores.",
      note: "O escopo efetivo depende da plataforma, do licenciamento, dos sistemas operacionais compatíveis e do plano contratado.",
    },
    includedScope: [
      {
        category: "Implantação e configuração",
        items: [
          "Avaliação dos dispositivos compatíveis.",
          "Instalação dos agentes de proteção.",
          "Configuração das políticas de segurança.",
          "Organização dos dispositivos por grupos.",
          "Configuração de níveis de proteção conforme o ambiente.",
        ],
      },
      {
        category: "Proteção dos endpoints",
        items: [
          "Proteção contra vírus e malware.",
          "Proteção contra ransomware.",
          "Análise de arquivos e processos.",
          "Proteção em tempo real.",
          "Recursos de prevenção contra ameaças.",
          "Políticas de segurança para estações e servidores.",
        ],
      },
      {
        category: "Detecção e investigação com EDR",
        items: [
          "Detecção de comportamentos suspeitos.",
          "Acompanhamento de alertas da plataforma.",
          "Análise de eventos disponíveis.",
          "Identificação de dispositivos afetados.",
          "Recursos de isolamento e contenção, quando disponíveis.",
          "Apoio na aplicação das medidas previstas no contrato.",
        ],
      },
      {
        category: "Gestão e acompanhamento",
        items: [
          "Administração centralizada da solução.",
          "Acompanhamento do status dos agentes.",
          "Gestão de políticas de proteção.",
          "Verificação de atualizações.",
          "Análise de alertas e ocorrências.",
          "Suporte técnico relacionado à solução.",
        ],
      },
    ],
    differentialsSection: {
      eyebrow: "Por que escolher a Inserti?",
      title: "Segurança de endpoints com gestão especializada.",
    },
    differentials: [
      {
        title: "Gestão além da instalação",
        description: "A proteção não termina quando o agente é instalado. A Inserti administra a solução e acompanha seu funcionamento conforme o serviço contratado.",
      },
      {
        title: "Visão integrada da infraestrutura",
        description: "Consideramos os endpoints como parte de um ambiente maior, conectado a servidores, redes, usuários e aplicações corporativas.",
      },
      {
        title: "Proteção adequada ao seu negócio",
        description: "Avaliamos as características da empresa para estruturar políticas de segurança compatíveis com seus dispositivos e necessidades operacionais.",
      },
      {
        title: "Suporte especializado",
        description: "Conte com uma equipe de TI para apoiar a administração da solução e a análise de ocorrências relacionadas à proteção dos dispositivos.",
      },
    ],
    faqs: [
      {
        question: "O que é Endpoint Security?",
        answer: "É o conjunto de tecnologias e políticas utilizadas para proteger dispositivos conectados à rede corporativa, como computadores, notebooks e servidores, contra ameaças digitais.",
      },
      {
        question: "Qual é a diferença entre antivírus e EDR?",
        answer: "O antivírus tradicional concentra-se principalmente na identificação e bloqueio de ameaças. O EDR amplia essa proteção com análise de comportamentos, registros de atividades, investigação e recursos de resposta a incidentes nos endpoints.",
      },
      {
        question: "O EDR substitui o antivírus?",
        answer: "O EDR não deve ser entendido como uma substituição automática. As plataformas modernas podem integrar prevenção, antivírus e detecção e resposta em uma única solução. O conjunto de recursos depende da tecnologia e do licenciamento.",
      },
      {
        question: "O EDR protege contra ransomware?",
        answer: "As soluções de Endpoint Security e EDR podem identificar e bloquear diferentes comportamentos associados a ransomware, além de oferecer recursos de investigação e contenção. Nenhuma solução elimina completamente o risco de ataques.",
      },
      {
        question: "É possível proteger servidores e computadores?",
        answer: "Sim. As soluções de proteção de endpoints podem atender estações de trabalho e servidores, desde que os sistemas operacionais e as versões sejam compatíveis com a plataforma contratada.",
      },
      {
        question: "É possível administrar todos os dispositivos em uma única plataforma?",
        answer: "Sim. A gestão centralizada permite acompanhar os dispositivos protegidos, administrar políticas e visualizar alertas em uma plataforma de gerenciamento.",
      },
      {
        question: "O que acontece quando uma ameaça é identificada?",
        answer: "A plataforma gera alertas e pode disponibilizar ações automáticas ou manuais de bloqueio e contenção. A atuação da Inserti depende dos recursos contratados e dos procedimentos definidos para o serviço.",
      },
      {
        question: "A Inserti oferece monitoramento 24 horas por dia?",
        answer: "O acompanhamento e os horários de atendimento dependem do plano contratado. O serviço de Endpoint Security e EDR gerenciado não deve ser confundido com uma operação SOC 24x7.",
      },
      {
        question: "O EDR substitui o firewall?",
        answer: "Não. O firewall controla e protege o tráfego de rede. O Endpoint Security e o EDR protegem os dispositivos. São camadas complementares de segurança.",
      },
      {
        question: "Minha empresa já possui antivírus. Posso contratar o gerenciamento?",
        answer: "Sim. Podemos avaliar a solução existente, sua capacidade de gestão centralizada e os recursos disponíveis para verificar a possibilidade de assumir a administração ou recomendar uma evolução da proteção.",
      },
    ],
    finalCta: {
      badge: "Segurança de endpoints",
      title: "A segurança da sua empresa começa pelos dispositivos.",
      subtitle: "Proteja computadores e servidores contra ameaças digitais com Endpoint Security e EDR gerenciados pela Inserti. Tenha mais controle sobre os dispositivos, visibilidade sobre atividades suspeitas e suporte especializado para administrar sua proteção.",
      button: "Solicitar avaliação de segurança",
      secondaryButton: "Falar com um especialista",
      primaryHref: "#form-lead",
    },
    seo: {
      metaTitle: "Endpoint Security e EDR Gerenciado para Empresas | Inserti",
      metaDescription: "Proteja computadores e servidores contra malware, ransomware e ameaças cibernéticas com Endpoint Security e EDR gerenciados pela Inserti.",
      keywords: ["Endpoint Security", "EDR para empresas", "antivírus empresarial", "proteção de endpoints", "segurança de computadores corporativos", "proteção contra ransomware", "EDR gerenciado"],
    },
  },

  // ==========================================
  // GRUPO 3: SERVIÇOS DE TI (Gestão e suporte de tecnologia)
  // ==========================================
  {
    slug: "gestao-suporte-ti-msp",
    title: "Gestão e suporte de TI (MSP)",
    groupName: "Serviços de TI",
    groupDescription: "Gestão e suporte de tecnologia",
    shortDescription: "Gerenciamento completo e preditivo da infraestrutura de TI corporativa, eliminando paradas não planejadas com NOC 24x7 e suporte consultivo estruturado em ITIL.",
    badge: "Managed Service Provider",
    icon: "ServerCog",
    hero: {
      eyebrow: "SERVIÇOS DE TI | MSP",
      title: "Sua empresa precisa de uma TI que funcione. Nós cuidamos disso.",
      subtitle: "Cuidamos da infraestrutura, dos sistemas e do suporte aos usuários para que sua empresa tenha uma operação de TI mais estável, segura e produtiva.",
      chips: ["Gestão de TI", "Suporte especializado", "Monitoramento"],
      highlight: "Gestão proativa, suporte técnico e acompanhamento contínuo da sua infraestrutura.",
      differentials: [
        "Gestão proativa da infraestrutura",
        "Suporte remoto e presencial",
        "Acompanhamento contínuo do ambiente de TI",
      ],
      cta: { primary: "Falar com especialista", secondary: "Solicitar diagnóstico" },
      metrics: [],
    },
    problem: {
      eyebrow: "O Problema",
      title: "Sua empresa não pode depender de uma TI que só funciona quando tudo dá certo.",
      description: "Problemas tecnológicos afetam diretamente a produtividade, a segurança e a continuidade das operações. Sem uma gestão adequada, pequenas falhas podem se transformar em grandes prejuízos.",
      painPoints: [
        {
          title: "01. Sistemas e infraestrutura instáveis",
          description: "Lentidão, falhas de conexão, servidores indisponíveis e problemas recorrentes que prejudicam o trabalho da equipe.",
        },
        {
          title: "02. Falta de acompanhamento preventivo",
          description: "Atualizações pendentes, equipamentos sem manutenção e problemas que poderiam ser identificados antes de afetar a operação.",
        },
        {
          title: "03. Suporte técnico insuficiente",
          description: "Usuários sem atendimento adequado, chamados acumulados e demora para solucionar problemas do dia a dia.",
        },
        {
          title: "04. Falta de controle e planejamento",
          description: "Ausência de inventário, documentação, previsibilidade de custos e planejamento para evolução da infraestrutura.",
        },
      ],
    },
    solution: {
      eyebrow: "Como trabalhamos",
      hideCardBadge: true,
      title: "Uma gestão de TI completa, com acompanhamento e suporte especializado.",
      description: "Atuamos na administração e sustentação do ambiente tecnológico da sua empresa, combinando atendimento técnico, manutenção preventiva e acompanhamento da infraestrutura.",
      features: [
        {
          title: "Gestão da infraestrutura",
          description: "Administração de servidores, estações de trabalho, redes e sistemas utilizados pela empresa.",
        },
        {
          title: "Monitoramento e prevenção",
          description: "Acompanhamento dos equipamentos e serviços, identificação de falhas e atuação preventiva para reduzir interrupções.",
        },
        {
          title: "Suporte aos usuários",
          description: "Atendimento remoto e presencial para solucionar problemas, orientar colaboradores e manter a produtividade da equipe.",
        },
        {
          title: "Administração e melhoria contínua",
          description: "Atualizações, manutenção, documentação e recomendações técnicas para manter a infraestrutura adequada às necessidades do negócio.",
        },
      ],
    },
    benefitsSection: {
      eyebrow: "Resultados para sua empresa",
      title: "Mais estabilidade, produtividade e controle sobre sua TI.",
    },
    benefits: [
      {
        title: "Menos interrupções",
        description: "Acompanhamento preventivo para identificar problemas e reduzir impactos na operação.",
      },
      {
        title: "Equipe mais produtiva",
        description: "Usuários com acesso a suporte técnico para resolver problemas e manter suas atividades.",
      },
      {
        title: "Mais previsibilidade",
        description: "Planejamento e acompanhamento das necessidades de tecnologia e dos investimentos.",
      },
      {
        title: "Mais segurança e controle",
        description: "Melhores práticas de administração, atualização e proteção dos ambientes tecnológicos.",
      },
    ],
    scopeSection: {
      eyebrow: "Escopo do serviço",
      title: "O que sua empresa recebe com a gestão de TI da Inserti.",
      note: "Os ativos e serviços cobertos são definidos em contrato, de acordo com as necessidades de cada empresa.",
    },
    includedScope: [
      {
        category: "Gestão da infraestrutura",
        items: [
          "Monitoramento de servidores e estações.",
          "Inventário de hardware e software.",
          "Administração de sistemas operacionais.",
          "Manutenção preventiva e atualizações.",
          "Administração de redes e infraestrutura.",
        ],
      },
      {
        category: "Suporte e atendimento",
        items: [
          "Central de atendimento técnico.",
          "Suporte remoto aos usuários.",
          "Atendimento presencial conforme contrato.",
          "Administração de chamados e prioridades.",
          "Relatórios e acompanhamento dos serviços.",
        ],
      },
    ],
    differentialsSection: {
      eyebrow: "Por que escolher a Inserti?",
      title: "Tecnologia, experiência e compromisso com a operação da sua empresa.",
    },
    differentials: [
      {
        title: "Visão integrada de TI",
        description: "Atuamos em infraestrutura, redes, segurança, cloud e sistemas.",
      },
      {
        title: "Suporte especializado",
        description: "Profissionais preparados para atender desde demandas cotidianas até desafios técnicos complexos.",
      },
      {
        title: "Gestão proativa",
        description: "Acompanhamento contínuo, manutenção e prevenção para reduzir problemas operacionais.",
      },
      {
        title: "Parceria de longo prazo",
        description: "Entendemos as necessidades do negócio e ajudamos a planejar a evolução da tecnologia.",
      },
    ],
    faqs: [
      {
        question: "O que é o serviço de MSP e como funciona?",
        answer: "MSP é o modelo de gestão terceirizada de tecnologia. A Inserti assume a administração e o acompanhamento dos recursos de TI definidos em contrato, incluindo suporte aos usuários, manutenção preventiva, monitoramento e gestão da infraestrutura.",
      },
      {
        question: "Minha empresa já possui um profissional de TI interno. Posso contratar a Inserti?",
        answer: "Sim. A Inserti também atua como parceira das equipes internas de TI, oferecendo suporte especializado, conhecimento técnico e apoio na administração de ambientes que exigem maior experiência ou capacidade operacional.",
      },
      {
        question: "O atendimento é remoto ou presencial?",
        answer: "Grande parte das demandas pode ser resolvida remotamente, proporcionando agilidade no atendimento. Quando necessário, também realizamos atendimentos presenciais, conforme a localização e as condições estabelecidas em contrato.",
      },
      {
        question: "Quais equipamentos e sistemas podem ser gerenciados?",
        answer: "Podemos administrar estações de trabalho, servidores Windows e Linux, redes, firewalls, ambientes virtualizados e outros recursos de infraestrutura, conforme o escopo contratado.",
      },
      {
        question: "A Inserti também cuida de backup e segurança da informação?",
        answer: "Sim. A Inserti oferece soluções complementares de proteção de dados, backup, recuperação de desastres, firewall e segurança de endpoints, permitindo integrar diferentes necessidades de TI.",
      },
      {
        question: "Como funciona a contratação do serviço?",
        answer: "Iniciamos com o entendimento da infraestrutura e das necessidades da empresa. A partir dessa avaliação, definimos o escopo de atendimento, os serviços necessários e as condições comerciais para a contratação.",
      },
    ],
    finalCta: {
      badge: "Gestão e suporte de TI",
      title: "Sua empresa merece uma TI que acompanha seu crescimento.",
      subtitle: "Deixe a gestão da tecnologia com quem entende do assunto. Converse com a Inserti e descubra como podemos ajudar sua empresa.",
      button: "Falar com um especialista",
    },
    seo: {
      metaTitle: "Gestão e Suporte de TI MSP | Proatividade e SLA | Inserti",
      metaDescription: "Transforme a tecnologia da sua empresa com a Gestão de TI MSP da Inserti. Monitoramento 24x7, redução de paradas, suporte ágil e governança estratégica.",
      keywords: ["gestao de ti", "suporte de ti", "msp", "ti gerenciada", "terceirizacao de ti", "noc 24x7", "Inserti"],
    },
  },

  {
    slug: "suporte-avancado-n2-n3-especialistas",
    title: "Suporte avançado N2, N3 e especialistas",
    groupName: "Serviços de TI",
    groupDescription: "Gestão e suporte de tecnologia",
    shortDescription: "Escalonamento técnico de alta complexidade com engenheiros certificados em virtualização, banco de dados PostgreSQL, redes corporativas e segurança.",
    badge: "Engenharia Sênior Dedicada",
    icon: "Users",
    hero: {
      eyebrow: "SERVIÇOS DE TI",
      title: "Sua equipe de TI precisa de reforço? Conte com especialistas para os desafios mais complexos.",
      subtitle: "Oferecemos suporte técnico especializado para ambientes de TI que exigem conhecimento avançado. Atuamos em servidores, redes, virtualização, bancos de dados e infraestrutura, apoiando sua equipe interna na resolução de problemas e execução de projetos.",
      highlight: "Conhecimento especializado para resolver problemas que exigem mais do que o suporte convencional.",
      differentials: [
        "Especialistas em infraestrutura e tecnologia.",
        "Suporte remoto e presencial.",
        "Atuação em demandas de alta complexidade.",
      ],
      cta: { primary: "Solicitar suporte especializado", secondary: "Falar com um especialista", mode: "form-whatsapp" },
      form: {
        title: "Precisa de apoio técnico especializado?",
        description: "Conte um pouco sobre seu ambiente ou desafio técnico. Nossa equipe avaliará sua necessidade e entrará em contato.",
        messageLabel: "Descreva sua necessidade técnica (opcional)",
        button: "Solicitar atendimento especializado",
      },
      metrics: [],
    },
    problem: {
      eyebrow: "Os desafios da infraestrutura de TI",
      title: "Sua equipe de TI está preparada para resolver todos os desafios que surgem?",
      description: "Nem todos os problemas de tecnologia podem ser resolvidos pelo suporte convencional. Ambientes complexos exigem experiência, conhecimento especializado e capacidade técnica para identificar causas e implementar soluções.",
      painPoints: [
        {
          title: "01. Problemas que exigem conhecimento avançado",
          description: "Falhas em servidores, bancos de dados, redes e sistemas que ultrapassam a capacidade de resolução do suporte convencional.",
        },
        {
          title: "02. Equipe interna sobrecarregada",
          description: "Profissionais de TI divididos entre demandas operacionais, projetos e incidentes que exigem atenção especializada.",
        },
        {
          title: "03. Falta de especialistas em determinadas tecnologias",
          description: "A necessidade de conhecimentos específicos em virtualização, bancos de dados, segurança e infraestrutura nem sempre justifica manter profissionais dedicados na equipe.",
        },
        {
          title: "04. Projetos e mudanças de infraestrutura",
          description: "Migrações, atualizações, reestruturações e melhorias que exigem planejamento e experiência técnica para evitar riscos à operação.",
        },
      ],
    },
    solution: {
      eyebrow: "Nossa solução e metodologia",
      hideCardBadge: true,
      title: "Especialistas em tecnologia para apoiar sua equipe nos desafios mais complexos.",
      description: "A Inserti oferece suporte técnico avançado para empresas que precisam ampliar sua capacidade de TI. Atuamos como extensão da equipe interna, apoiando diagnósticos, resoluções de problemas e projetos de infraestrutura.",
      features: [
        {
          title: "Diagnóstico e análise técnica",
          description: "Investigamos problemas, analisamos ambientes e identificamos as causas de falhas e comportamentos inesperados.",
        },
        {
          title: "Atuação especializada",
          description: "Mobilizamos conhecimento técnico em diferentes áreas da infraestrutura para implementar soluções adequadas a cada cenário.",
        },
        {
          title: "Projetos e melhorias",
          description: "Apoiamos atualizações, migrações, reestruturações e melhorias na infraestrutura tecnológica da empresa.",
        },
        {
          title: "Documentação e orientação técnica",
          description: "Registramos as intervenções realizadas e compartilhamos recomendações para melhorar a estabilidade, segurança e administração do ambiente.",
        },
      ],
    },
    benefitsSection: {
      eyebrow: "Resultados para sua empresa",
      title: "Mais capacidade técnica para sua TI. Mais segurança para suas decisões.",
    },
    benefits: [
      {
        title: "Resolução de problemas complexos",
        description: "Conte com profissionais preparados para investigar e solucionar desafios que exigem conhecimento técnico especializado.",
      },
      {
        title: "Reforço para sua equipe interna",
        description: "Amplie a capacidade de atendimento da sua equipe sem precisar manter especialistas de todas as áreas em seu quadro de profissionais.",
      },
      {
        title: "Menos riscos em projetos",
        description: "Conte com apoio técnico no planejamento e execução de mudanças importantes na infraestrutura.",
      },
      {
        title: "Acesso a diferentes especialidades",
        description: "Tenha acesso a conhecimentos em servidores, redes, virtualização, bancos de dados e segurança da informação conforme a necessidade da sua empresa.",
      },
    ],
    scopeSection: {
      eyebrow: "Escopo do serviço",
      title: "Conhecimento especializado em diferentes áreas da infraestrutura de TI.",
      description: "A Inserti reúne experiência técnica para apoiar empresas na administração, sustentação e evolução de seus ambientes tecnológicos.",
      note: "Os serviços são executados conforme as tecnologias, a complexidade do ambiente e as condições estabelecidas na contratação.",
    },
    includedScope: [
      {
        category: "Infraestrutura e servidores",
        items: [
          "Administração de servidores Windows e Linux.",
          "Active Directory, DNS e DHCP.",
          "Diagnóstico e resolução de falhas de infraestrutura.",
          "Administração e otimização de ambientes de servidores.",
        ],
      },
      {
        category: "Redes e segurança",
        items: [
          "Administração de firewalls e políticas de segurança.",
          "Configuração e troubleshooting de VPNs.",
          "Diagnóstico de problemas de conectividade.",
          "Administração de redes corporativas e infraestrutura de comunicação.",
        ],
      },
      {
        category: "Virtualização e armazenamento",
        items: [
          "Administração de ambientes Proxmox e Hyper-V.",
          "Planejamento e execução de migrações de máquinas virtuais.",
          "Análise de desempenho e utilização de recursos.",
          "Administração de ambientes de armazenamento.",
        ],
      },
      {
        category: "Bancos de dados e aplicações",
        items: [
          "Administração de bancos de dados PostgreSQL.",
          "Análise e otimização de desempenho.",
          "Diagnóstico de problemas e consultas.",
          "Apoio técnico em aplicações e sistemas empresariais.",
        ],
      },
    ],
    differentialsSection: {
      eyebrow: "Autoridade e confiança",
      title: "Experiência em infraestrutura para resolver desafios que exigem conhecimento especializado.",
      description: "A Inserti combina experiência em diferentes áreas da tecnologia para oferecer apoio técnico consistente, desde problemas operacionais até projetos complexos de infraestrutura.",
    },
    differentials: [
      {
        title: "Visão integrada de tecnologia",
        description: "Conhecimento que conecta servidores, redes, segurança, virtualização, bancos de dados e aplicações.",
      },
      {
        title: "Experiência em ambientes empresariais",
        description: "Atuação em infraestruturas corporativas que exigem disponibilidade, organização e confiabilidade.",
      },
      {
        title: "Complemento para sua equipe de TI",
        description: "Trabalhamos em conjunto com os profissionais da empresa, respeitando os processos e as necessidades de cada ambiente.",
      },
      {
        title: "Soluções orientadas ao problema",
        description: "Analisamos cada cenário para identificar a causa dos problemas e recomendar soluções tecnicamente adequadas.",
      },
    ],
    faqTitle: "Perguntas frequentes sobre suporte avançado N2, N3 e especialistas.",
    faqs: [
      {
        question: "Qual a diferença entre suporte N1, N2 e N3?",
        answer: "O N1 atende demandas iniciais e problemas mais comuns dos usuários. O N2 atua em problemas que exigem maior conhecimento técnico e investigação. O N3 envolve especialistas responsáveis por analisar e resolver questões de alta complexidade, envolvendo infraestrutura, sistemas e tecnologias específicas.",
      },
      {
        question: "Minha empresa já possui uma equipe interna de TI. Posso contratar a Inserti?",
        answer: "Sim. Esse é um dos principais cenários de atuação do nosso suporte especializado. Trabalhamos como extensão da equipe interna, oferecendo conhecimento técnico adicional e apoio em demandas que exigem especialização.",
      },
      {
        question: "Quais tecnologias a Inserti atende?",
        answer: "Atuamos em diferentes tecnologias e ambientes corporativos, incluindo Windows Server, Linux, Proxmox, Hyper-V, PostgreSQL, Fortinet, Mikrotik, redes corporativas e infraestrutura em nuvem, conforme o escopo técnico da contratação.",
      },
      {
        question: "O atendimento é remoto ou presencial?",
        answer: "O atendimento pode ser realizado remotamente ou presencialmente, dependendo da natureza da demanda, da infraestrutura envolvida e da localização do cliente.",
      },
      {
        question: "Posso contratar a Inserti apenas para resolver um problema específico?",
        answer: "Sim. Podemos avaliar demandas pontuais, projetos específicos ou necessidades recorrentes de suporte especializado. O modelo de contratação é definido conforme a complexidade e o escopo do trabalho.",
      },
      {
        question: "A Inserti também executa projetos de infraestrutura?",
        answer: "Sim. Além do suporte técnico, podemos apoiar projetos de implantação, migração, atualização, reestruturação e otimização de ambientes de TI.",
      },
    ],
    finalCta: {
      badge: "Especialização em tecnologia",
      title: "Sua equipe precisa de especialistas? A Inserti está pronta para ajudar.",
      subtitle: "Conte com experiência técnica para resolver problemas complexos, fortalecer sua infraestrutura e executar projetos com mais segurança. Converse com nossos especialistas e apresente seu desafio.",
      button: "Solicitar suporte especializado",
      secondaryButton: "Falar com um especialista",
      primaryHref: "#form-lead",
    },
    seo: {
      metaTitle: "Suporte N2, N3 e Especialistas em TI | Inserti",
      metaDescription: "Suporte técnico especializado N2 e N3 para servidores, redes, virtualização, PostgreSQL e infraestrutura de TI. Conte com a Inserti.",
      keywords: ["suporte técnico especializado", "suporte N2 e N3", "suporte avançado de TI", "especialistas em infraestrutura", "suporte a servidores"],
    },
  },

  {
    slug: "wifi-corporativo-redes-gerenciadas",
    title: "Wi-Fi corporativo e redes gerenciadas",
    groupName: "Serviços de TI",
    groupDescription: "Gestão e suporte de tecnologia",
    shortDescription: "Projetos de rede sem fio de alta densidade Wi-Fi 6, switches gerenciáveis, segmentação de VLANs e conectividade estável para escritórios e galpões.",
    badge: "Alta Performance & Densidade",
    icon: "Wifi",
    hero: {
      eyebrow: "SERVIÇOS DE TI | REDES GERENCIADAS",
      title: "Uma rede corporativa confiável começa com uma infraestrutura bem planejada.",
      subtitle: "Projetamos, implantamos e gerenciamos redes Wi-Fi e infraestrutura de conectividade para empresas que precisam de estabilidade, cobertura e segurança em suas operações.",
      chips: ["Wi-Fi corporativo", "Redes gerenciadas", "Gestão centralizada"],
      highlight: "Conectividade profissional para sua equipe, clientes e operação.",
      cta: { primary: "Solicitar projeto de rede", secondary: "Falar com especialista", mode: "form-whatsapp" },
      form: {
        title: "Sua empresa precisa de uma rede melhor?",
        description: "Conte como funciona sua infraestrutura atual e quais são suas necessidades de conectividade. Nossa equipe ajudará a encontrar a solução adequada.",
        messageLabel: "Descreva sua necessidade (opcional)",
        button: "Solicitar projeto de rede",
      },
      metrics: [],
    },
    problem: {
      eyebrow: "Os desafios da conectividade",
      title: "Sua empresa sofre com Wi-Fi instável, áreas sem cobertura ou problemas recorrentes de conexão?",
      description: "Uma infraestrutura de rede inadequada compromete a produtividade dos colaboradores, prejudica a experiência dos clientes e pode afetar diretamente sistemas e processos essenciais da empresa.",
      painPoints: [
        {
          title: "01. Wi-Fi instável e baixa cobertura",
          description: "Áreas sem sinal, quedas frequentes e lentidão que dificultam o trabalho dos colaboradores e o acesso aos sistemas.",
        },
        {
          title: "02. Rede sem planejamento adequado",
          description: "Equipamentos instalados sem dimensionamento, interferências e configurações inadequadas comprometem o desempenho da conexão.",
        },
        {
          title: "03. Falta de segurança e controle",
          description: "Redes corporativas e de visitantes sem a devida separação, controle de acesso ou políticas de segurança.",
        },
        {
          title: "04. Dificuldade de gerenciamento",
          description: "Equipamentos administrados individualmente, ausência de visibilidade sobre a infraestrutura e dificuldade para identificar problemas.",
        },
      ],
    },
    solution: {
      eyebrow: "Nossa solução e metodologia",
      hideCardBadge: true,
      title: "Da implantação ao gerenciamento: cuidamos da conectividade da sua empresa.",
      description: "A Inserti desenvolve soluções de conectividade corporativa considerando as características de cada ambiente, a quantidade de usuários e as necessidades operacionais da empresa. Projetamos e administramos redes preparadas para oferecer desempenho, segurança e facilidade de gerenciamento.",
      features: [
        {
          title: "Análise e planejamento",
          description: "Avaliamos o ambiente, a infraestrutura existente, a quantidade de usuários e as necessidades de cobertura para dimensionar a solução adequada.",
        },
        {
          title: "Projeto e implantação",
          description: "Planejamos e configuramos access points, switches, roteadores e demais equipamentos necessários para a infraestrutura de conectividade.",
        },
        {
          title: "Segurança e gerenciamento",
          description: "Configuramos redes, segmentação de acessos, políticas de segurança e gerenciamento centralizado dos equipamentos.",
        },
        {
          title: "Monitoramento e suporte",
          description: "Acompanhamos a infraestrutura, identificamos problemas e prestamos suporte para manter a conectividade funcionando adequadamente.",
        },
      ],
    },
    benefitsSection: {
      eyebrow: "Resultados para sua empresa",
      title: "Conectividade confiável para manter pessoas, sistemas e operações conectados.",
    },
    benefits: [
      {
        title: "Melhor cobertura e desempenho",
        description: "Infraestrutura dimensionada para atender às características e necessidades do ambiente.",
      },
      {
        title: "Mais segurança",
        description: "Controle de acesso, segmentação de redes e políticas de segurança para proteger sua infraestrutura.",
      },
      {
        title: "Gestão centralizada",
        description: "Administração dos equipamentos e visibilidade sobre o funcionamento da rede.",
      },
      {
        title: "Facilidade de expansão",
        description: "Infraestrutura preparada para acompanhar o crescimento da empresa e a necessidade de novos pontos de conexão.",
      },
    ],
    scopeSection: {
      eyebrow: "Escopo do serviço",
      title: "Tudo o que sua empresa precisa para ter uma infraestrutura de rede profissional.",
      description: "Da infraestrutura física ao gerenciamento dos equipamentos, a Inserti oferece soluções completas para implantação e administração de redes corporativas.",
      note: "O escopo de implantação, equipamentos, monitoramento e suporte é definido conforme a solução e o modelo de contratação.",
      highlight: {
        title: "Wi-Fi corporativo sem precisar investir em toda a infraestrutura.",
        paragraphs: [
          "Com o modelo Wi-Fi como Serviço, sua empresa pode contar com equipamentos e infraestrutura de conectividade gerenciados pela Inserti, reduzindo a necessidade de investimento inicial e simplificando a administração da rede.",
          "A solução pode incluir fornecimento de equipamentos em comodato, implantação, configuração, gerenciamento e suporte contínuo, conforme as condições da contratação.",
        ],
        cta: "Conheça o Wi-Fi como Serviço",
        whatsappMessage: "Olá! Gostaria de conhecer o modelo Wi-Fi como Serviço da Inserti.",
      },
    },
    includedScope: [
      {
        category: "Projeto e implantação de redes",
        items: [
          "Análise e dimensionamento de cobertura Wi-Fi.",
          "Planejamento de pontos de acesso.",
          "Implantação e configuração de access points.",
          "Instalação e configuração de switches e roteadores.",
          "Organização e documentação da infraestrutura.",
        ],
      },
      {
        category: "Wi-Fi corporativo",
        items: [
          "Redes Wi-Fi para colaboradores e visitantes.",
          "Configuração de SSIDs e políticas de acesso.",
          "Segmentação de redes e VLANs.",
          "Configuração de autenticação e segurança.",
          "Gestão centralizada dos pontos de acesso.",
        ],
      },
      {
        category: "Redes gerenciadas",
        items: [
          "Administração de roteadores e switches.",
          "Configuração e manutenção de equipamentos.",
          "Gerenciamento de redes locais e conectividade.",
          "Configuração de VPNs e interligação de unidades.",
          "Monitoramento de equipamentos e disponibilidade.",
        ],
      },
      {
        category: "Gestão e suporte contínuo",
        items: [
          "Acompanhamento da infraestrutura de rede.",
          "Identificação e diagnóstico de falhas.",
          "Manutenção e ajustes de configuração.",
          "Suporte técnico especializado.",
          "Expansão e atualização da infraestrutura.",
        ],
      },
    ],
    differentialsSection: {
      eyebrow: "Autoridade e confiança",
      title: "Mais do que instalar equipamentos, entregamos conectividade com gestão e responsabilidade técnica.",
      description: "Uma rede corporativa exige planejamento, segurança e acompanhamento. A Inserti reúne conhecimento em infraestrutura e conectividade para oferecer soluções alinhadas às necessidades de cada negócio.",
    },
    differentials: [
      {
        title: "Experiência em infraestrutura",
        description: "Conhecimento em redes corporativas, servidores, segurança e conectividade.",
      },
      {
        title: "Gestão centralizada",
        description: "Administração e acompanhamento dos equipamentos em uma infraestrutura integrada.",
      },
      {
        title: "Segurança desde o projeto",
        description: "Planejamento de acessos, segmentação e políticas de segurança desde a implantação.",
      },
      {
        title: "Suporte especializado",
        description: "Uma equipe de TI para apoiar a operação e a evolução da infraestrutura.",
      },
    ],
    faqTitle: "Perguntas frequentes sobre Wi-Fi corporativo e redes gerenciadas.",
    faqs: [
      {
        question: "Qual a diferença entre Wi-Fi residencial e Wi-Fi corporativo?",
        answer: "O Wi-Fi corporativo é planejado para atender ambientes com maior quantidade de usuários, dispositivos e necessidades de conectividade. Utiliza equipamentos profissionais, gerenciamento centralizado, segmentação de redes e políticas de segurança adequadas ao ambiente empresarial.",
      },
      {
        question: "A Inserti realiza projetos e instalação de redes Wi-Fi?",
        answer: "Sim. Realizamos análise do ambiente, planejamento de cobertura, dimensionamento de equipamentos, implantação e configuração da infraestrutura Wi-Fi corporativa.",
      },
      {
        question: "É possível separar a rede dos funcionários da rede de visitantes?",
        answer: "Sim. Podemos configurar redes independentes, segmentação por VLANs e políticas específicas de acesso, proporcionando maior organização e segurança para a infraestrutura.",
      },
      {
        question: "A Inserti também gerencia redes que já estão instaladas?",
        answer: "Sim. Podemos avaliar a infraestrutura existente, identificar oportunidades de melhoria e assumir a administração e o suporte dos equipamentos, conforme a compatibilidade e o escopo contratado.",
      },
      {
        question: "O que é Wi-Fi como Serviço (WaaS)?",
        answer: "É um modelo de contratação no qual a empresa utiliza uma infraestrutura Wi-Fi gerenciada por um fornecedor especializado. A solução pode incluir fornecimento de equipamentos, implantação, gerenciamento e suporte mediante pagamento recorrente.",
      },
      {
        question: "A Inserti atende empresas com várias unidades?",
        answer: "Sim. Podemos projetar e gerenciar infraestruturas de conectividade distribuídas, permitindo padronização, administração centralizada e maior visibilidade das redes das diferentes unidades.",
      },
      {
        question: "Quais equipamentos e fabricantes a Inserti utiliza?",
        answer: "Trabalhamos com tecnologias de conectividade corporativa adequadas a cada projeto, incluindo soluções Ubiquiti UniFi, MikroTik e outros equipamentos compatíveis com as necessidades da infraestrutura.",
      },
    ],
    finalCta: {
      badge: "Conectividade corporativa",
      title: "Sua empresa merece uma rede preparada para acompanhar sua operação.",
      subtitle: "Conte com a Inserti para projetar, implantar e gerenciar sua infraestrutura de conectividade. Fale com nossos especialistas e encontre a solução ideal para sua empresa.",
      button: "Solicitar projeto de rede",
      primaryHref: "#form-lead",
    },
    seo: {
      metaTitle: "Wi-Fi Corporativo e Redes Gerenciadas | Inserti",
      metaDescription: "Projetos de Wi-Fi corporativo, implantação e gestão de redes empresariais. Conte com a Inserti para ter conectividade segura e confiável.",
      keywords: ["Wi-Fi corporativo", "redes gerenciadas", "Wi-Fi empresarial", "gestão de redes", "Wi-Fi como Serviço", "infraestrutura de redes"],
    },
  },

  // ==========================================
  // GRUPO 4: CLOUD E PRODUTIVIDADE (Infraestrutura e soluções em nuvem)
  // ==========================================
  {
    slug: "cloud-corporativa",
    title: "Cloud corporativa",
    groupName: "Cloud e produtividade",
    groupDescription: "Infraestrutura e soluções em nuvem",
    shortDescription: "Cloud empresarial em data center Tier III no Brasil, com infraestrutura personalizada, tráfego ilimitado e mensalidade previsível.",
    badge: "Cloud Tier III no Brasil",
    icon: "Cloud",
    hero: {
      eyebrow: "CLOUD E PRODUTIVIDADE | INFRAESTRUTURA EM NUVEM",
      title: "Sua empresa precisa de uma Cloud empresarial. Não de uma fatura imprevisível.",
      subtitle: "Tenha servidores, aplicações e sistemas corporativos em uma infraestrutura hospedada no Brasil, em data center com certificação Tier III.\n\nCom a Cloud Corporativa da Inserti, você monta uma infraestrutura personalizada, paga pelos recursos contratados e conta com tráfego de rede ilimitado, sem cobranças adicionais por volume transferido.\n\nE tem mais: podemos cuidar de toda a operação, desde a infraestrutura até os sistemas operacionais, bancos de dados, backup e monitoramento.",
      chips: ["Data center Tier III no Brasil", "Tráfego de rede ilimitado", "Infraestrutura personalizada", "Gestão completa de TI disponível"],
      highlight: "Infraestrutura profissional, custos previsíveis e uma equipe especializada para cuidar da sua operação.",
      cta: { primary: "Solicitar uma proposta", secondary: "Falar com um especialista", mode: "form-whatsapp" },
      form: {
        title: "Sua infraestrutura está pronta para a nuvem?",
        description: "Conte com nossos especialistas para dimensionar uma Cloud adequada às necessidades da sua empresa.",
        messageLabel: "Quantidade aproximada de servidores e principal necessidade (opcional)",
        button: "Solicitar proposta",
      },
      metrics: [],
    },
    problem: {
      eyebrow: "Os custos imprevisíveis das clouds públicas",
      title: "Sua infraestrutura não deveria gerar surpresas no fechamento do mês.",
      description: "As grandes plataformas de cloud oferecem muitos recursos, mas seus modelos de cobrança podem ser complexos. Além dos recursos contratados, determinadas operações podem gerar custos adicionais que nem sempre são fáceis de prever.",
      painPoints: [
        {
          title: "01. Cobranças por transferência de dados",
          description: "O tráfego de saída e a movimentação de dados podem gerar cobranças adicionais, dependendo da plataforma, região e modalidade contratada.",
        },
        {
          title: "02. Custos difíceis de prever",
          description: "Uma aplicação que cresce, um aumento no volume de acessos ou uma mudança no consumo pode alterar significativamente a fatura.",
        },
        {
          title: "03. Complexidade de gerenciamento",
          description: "Administrar recursos, serviços, configurações e diferentes componentes de cobrança exige conhecimento técnico e acompanhamento constante.",
        },
        {
          title: "04. Infraestrutura fora do Brasil",
          description: "Dependendo da região escolhida, a localização da infraestrutura pode influenciar latência, conectividade e requisitos de hospedagem de dados.",
        },
      ],
    },
    solution: {
      eyebrow: "Cloud Corporativa Inserti",
      hideCardBadge: true,
      title: "Sua infraestrutura personalizada, com uma mensalidade previsível.",
      description: "A Inserti oferece infraestrutura de computação em nuvem hospedada em data center Tier III no Brasil, para executar servidores, sistemas e aplicações corporativas. Você não precisa se adaptar a planos engessados. Dimensionamos os recursos de acordo com a necessidade da sua operação e oferecemos tráfego ilimitado, sem cobrança adicional por volume transferido.",
      features: [
        {
          title: "Análise da necessidade",
          description: "Avaliamos seus sistemas, aplicações, consumo de recursos e requisitos de infraestrutura.",
        },
        {
          title: "Dimensionamento personalizado",
          description: "Definimos a quantidade de vCPU, memória RAM, armazenamento e demais recursos necessários para atender sua operação.",
        },
        {
          title: "Implantação do ambiente",
          description: "Provisionamos a infraestrutura e preparamos os recursos necessários para receber seus servidores, aplicações e sistemas.",
        },
        {
          title: "Gestão e evolução",
          description: "Podemos assumir a administração da infraestrutura, sistemas operacionais, bancos de dados, backup e monitoramento, conforme o escopo contratado.",
        },
      ],
    },
    benefitsSection: {
      eyebrow: "Por que escolher a Cloud Inserti?",
      title: "Infraestrutura profissional sem complicar sua gestão financeira.",
    },
    benefits: [
      {
        title: "Previsibilidade de custos",
        description: "Tenha uma composição de preços clara, baseada nos recursos contratados, sem cobranças adicionais por volume de tráfego de rede.",
      },
      {
        title: "Data center Tier III no Brasil",
        description: "Sua infraestrutura hospedada em uma instalação com certificações Tier III de projeto e de instalação construída.",
      },
      {
        title: "Recursos personalizados",
        description: "Escolha a capacidade de processamento, memória e armazenamento de acordo com as necessidades dos seus sistemas.",
      },
      {
        title: "Tráfego ilimitado",
        description: "Transfira dados sem cobrança adicional por volume de tráfego, conforme as condições comerciais do serviço.",
      },
      {
        title: "Gestão completa de TI",
        description: "Se desejar, a Inserti também pode administrar servidores, sistemas operacionais, bancos de dados, backup e monitoramento.",
      },
      {
        title: "Crescimento sob demanda",
        description: "Expanda os recursos de infraestrutura conforme sua operação evolui, com dimensionamento e ajuste da mensalidade contratada.",
      },
    ],
    scopeBeforeBanner: true,
    scopeSection: {
      eyebrow: "Infraestrutura — Recursos para sua empresa",
      title: "Uma Cloud dimensionada para suas aplicações e sistemas.",
      note: "Os recursos disponíveis dependem da configuração contratada, compatibilidade e arquitetura de cada projeto.",
    },
    includedScope: [
      {
        category: "Processamento e memória",
        items: [
          "Recursos de CPU virtual (vCPU).",
          "Memória RAM personalizada.",
          "Configurações para aplicações empresariais.",
          "Possibilidade de expansão de recursos.",
        ],
      },
      {
        category: "Armazenamento",
        items: [
          "Armazenamento em SSD ou NVMe, conforme configuração.",
          "Dimensionamento de capacidade.",
          "Volumes adicionais para dados e aplicações.",
          "Opções de expansão conforme necessidade.",
        ],
      },
      {
        category: "Rede e conectividade",
        items: [
          "Conectividade de rede para os servidores.",
          "Endereços IP conforme necessidade.",
          "Comunicação entre ambientes.",
          "Acesso administrativo seguro.",
          "Tráfego de rede ilimitado, sem cobrança adicional por volume transferido.",
        ],
      },
      {
        category: "Sistemas e aplicações",
        items: [
          "Servidores Windows e Linux.",
          "Sistemas ERP e CRM.",
          "Bancos de dados.",
          "Aplicações web e APIs.",
          "Ambientes de desenvolvimento e homologação.",
          "Sistemas corporativos personalizados.",
        ],
      },
    ],
    techBanner: {
      eyebrow: "Diferencial",
      brand: "Tier III",
      tag: "Data center no Brasil",
      title: "Sua infraestrutura hospedada em um data center Tier III no Brasil.",
      text: "A Cloud Corporativa da Inserti é hospedada em um data center no Brasil com certificações Tier III de projeto e de instalação construída.",
      items: [
        {
          title: "Tier III de projeto",
          description: "Infraestrutura projetada com critérios de redundância e manutenção concorrente.",
        },
        {
          title: "Tier III de instalação construída",
          description: "Validação da instalação física conforme os requisitos da classificação.",
        },
        {
          title: "Redundância de infraestrutura",
          description: "Recursos de energia e refrigeração projetados para aumentar a resiliência.",
        },
        {
          title: "Localização nacional",
          description: "Servidores hospedados em território brasileiro.",
        },
      ],
      footnote: "A camada de computação, a gestão dos ambientes e o suporte à sua operação são entregues pela Inserti.",
    },
    managementSection: {
      eyebrow: "Mais do que Cloud",
      title: "Da infraestrutura física à aplicação: a Inserti pode cuidar de tudo.",
      description: "Não queremos apenas entregar máquinas virtuais. Nossa proposta é permitir que sua empresa tenha uma infraestrutura completa sem precisar administrar cada camada internamente.",
      cards: [
        {
          title: "Infraestrutura Cloud",
          description: "Provisionamento e administração dos recursos de computação, memória, armazenamento e conectividade.",
        },
        {
          title: "Sistemas operacionais e servidores",
          description: "Instalação, configuração, atualização e administração de ambientes Windows Server e Linux, conforme escopo contratado.",
        },
        {
          title: "Bancos de dados e aplicações",
          description: "Administração de bancos de dados, suporte à infraestrutura de aplicações e acompanhamento de desempenho.",
        },
        {
          title: "Backup e recuperação",
          description: "Implantação e gestão de políticas de backup, proteção de dados e estratégias de recuperação.",
        },
        {
          title: "Monitoramento",
          description: "Acompanhamento de disponibilidade e desempenho dos recursos contratados, com ferramentas de monitoramento adequadas ao ambiente.",
        },
        {
          title: "Segurança e conectividade",
          description: "Administração de firewalls, VPNs, controle de acesso e demais componentes de segurança e rede, conforme contratação.",
        },
      ],
      support: "Sua empresa pode contratar apenas a infraestrutura ou contar com a Inserti para administrar toda a operação. Você escolhe o nível de gestão que precisa.",
    },
    comparisonSection: {
      eyebrow: "Cloud Inserti x Cloud pública",
      title: "Compare o modelo de contratação, não apenas o preço inicial.",
      cards: [
        {
          title: "Cloud Corporativa Inserti",
          description: "",
          items: [
            "Mensalidade definida pelos recursos contratados.",
            "Tráfego de rede ilimitado, sem cobrança adicional por volume transferido.",
            "Infraestrutura hospedada no Brasil.",
            "Data center no Brasil com certificação Tier III.",
            "Recursos personalizados de CPU, RAM e armazenamento.",
            "Possibilidade de gestão completa pela Inserti.",
            "Relacionamento e suporte especializado.",
          ],
        },
        {
          title: "Grandes clouds públicas",
          description: "",
          items: [
            "Cobrança por diferentes componentes e serviços.",
            "Possibilidade de tarifas por transferência de dados.",
            "Custos que variam conforme região, consumo e arquitetura.",
            "Grande variedade de serviços e configurações.",
            "Necessidade de acompanhar consumo e faturamento.",
            "Administração técnica que pode exigir profissionais especializados.",
          ],
        },
      ],
      support: "AWS, Azure e Google Cloud oferecem recursos avançados e grande flexibilidade. Mas nem toda empresa precisa dessa complexidade. Para muitas aplicações empresariais, uma infraestrutura personalizada, com preço previsível e gestão especializada, pode ser uma escolha mais simples e econômica.",
    },
    differentialsSection: {
      eyebrow: "Por que escolher a Inserti?",
      title: "Mais do que infraestrutura: uma empresa de TI cuidando da sua operação.",
    },
    differentials: [
      {
        title: "Conhecimento em infraestrutura",
        description: "Nossa experiência envolve servidores, virtualização, redes, bancos de dados e aplicações empresariais.",
      },
      {
        title: "Infraestrutura personalizada",
        description: "Avaliamos as necessidades da sua empresa para entregar recursos adequados à operação, sem planos engessados.",
      },
      {
        title: "Gestão de ponta a ponta",
        description: "Podemos assumir desde a infraestrutura até os sistemas operacionais, bancos de dados, backup e monitoramento.",
      },
      {
        title: "Relacionamento próximo",
        description: "Você conta com uma empresa de tecnologia que conhece sua infraestrutura e pode apoiar sua evolução.",
      },
    ],
    faqs: [
      {
        question: "Onde ficam os servidores da Cloud Inserti?",
        answer: "Nossa infraestrutura é hospedada em data center no Brasil. A instalação possui certificações Tier III de projeto e de instalação construída.",
      },
      {
        question: "O que significa Tier III?",
        answer: "Tier III é uma classificação do Uptime Institute para infraestrutura de data centers. Entre suas características estão componentes redundantes e capacidade de manutenção concorrente, permitindo realizar determinadas manutenções sem interromper a operação da infraestrutura crítica.",
      },
      {
        question: "Vou pagar por tráfego de rede?",
        answer: "Não. A Cloud Inserti oferece tráfego de rede ilimitado, sem cobrança adicional por volume transferido, conforme as condições comerciais do serviço.",
      },
      {
        question: "A mensalidade é fixa?",
        answer: "A mensalidade é definida com base nos recursos contratados. Alterações na quantidade de CPU, memória, armazenamento ou outros serviços podem modificar o valor, sempre conforme a proposta e as condições comerciais.",
      },
      {
        question: "Posso personalizar a configuração do servidor?",
        answer: "Sim. Não trabalhamos apenas com planos fechados. Dimensionamos CPU, memória, armazenamento e demais recursos conforme a necessidade da aplicação e da empresa.",
      },
      {
        question: "Posso hospedar meu ERP na Cloud Inserti?",
        answer: "Sim. A infraestrutura pode ser utilizada para hospedar ERPs, bancos de dados, sistemas de gestão e outras aplicações empresariais, desde que atendidos os requisitos técnicos e de licenciamento de cada aplicação.",
      },
      {
        question: "Posso utilizar Windows Server ou Linux?",
        answer: "Sim. A infraestrutura pode suportar ambientes Windows e Linux, considerando os sistemas operacionais, licenças e configurações disponíveis.",
      },
      {
        question: "A Inserti administra os servidores?",
        answer: "Sim. Além de fornecer a infraestrutura, podemos assumir a administração dos sistemas operacionais, bancos de dados, backup, monitoramento e componentes de segurança, conforme o escopo contratado.",
      },
      {
        question: "A Cloud já inclui backup e monitoramento?",
        answer: "Esses serviços podem ser incorporados à solução, de acordo com a necessidade do cliente e a proposta comercial. A contratação da infraestrutura não significa que todos esses serviços estejam automaticamente incluídos.",
      },
      {
        question: "É possível migrar servidores que hoje estão na empresa?",
        answer: "Sim. Podemos avaliar o ambiente atual, planejar a migração e executar a transferência dos servidores e aplicações conforme a arquitetura e o escopo do projeto.",
      },
      {
        question: "A Cloud Inserti é igual à AWS ou Azure?",
        answer: "Não. São modelos diferentes. As grandes clouds públicas oferecem um catálogo muito amplo de serviços e configurações. A Cloud Inserti tem foco em infraestrutura empresarial personalizada, com tráfego ilimitado e condições comerciais mais simples e previsíveis.",
      },
    ],
    finalCta: {
      badge: "Cloud corporativa",
      title: "Sua empresa merece uma Cloud sem surpresas na fatura.",
      subtitle: "Tenha servidores e aplicações em uma infraestrutura Tier III no Brasil, com recursos personalizados, tráfego ilimitado e possibilidade de gestão completa pela Inserti. Converse com nossos especialistas e descubra como levar sua infraestrutura para a nuvem.",
      button: "Solicitar proposta",
      secondaryButton: "Falar com um especialista",
      primaryHref: "#form-lead",
    },
    seo: {
      metaTitle: "Cloud Corporativa no Brasil com Tier III | Inserti",
      metaDescription: "Cloud empresarial em data center Tier III no Brasil. Infraestrutura personalizada, tráfego ilimitado e mensalidade previsível. Conheça a Cloud Inserti.",
      keywords: ["Cloud corporativa", "cloud empresarial", "cloud no Brasil", "servidores em nuvem", "infraestrutura em nuvem", "cloud Tier III", "hospedagem de servidores", "cloud gerenciada"],
    },
  },

  {
    slug: "armazenamento-em-nuvem",
    title: "Armazenamento em nuvem",
    groupName: "Cloud e produtividade",
    groupDescription: "Infraestrutura e soluções em nuvem",
    shortDescription: "Armazenamento seguro, escalável e compatível com S3 para grandes volumes de arquivos, documentos corporativos e retenção histórica de dados.",
    badge: "Segurança & Escalabilidade S3",
    icon: "HardDrive",
    hero: {
      title: "Armazenamento em Nuvem Corporativo: Seus Arquivos Acessíveis e Criptografados",
      subtitle: "Aposente storages locais caros e vulneráveis a falhas. Armazene terabytes de documentos, projetos e históricos de auditoria em repositórios corporativos com alta durabilidade e custo previsível em reais.",
      highlight: "Durabilidade de dados de 99.999999999% (11 noves) e faturamento em reais sem sustos",
      metrics: [
        { value: "11 Noves", label: "Durabilidade dos Dados" },
        { value: "Criptografado", label: "AES-256 Ponta a Ponta" },
        { value: "Compatível S3", label: "Integração Universal" },
      ],
    },
    problem: {
      title: "Seus servidores de arquivos estão sem espaço e com risco de queima de discos?",
      description: "Storages físicos exigem investimentos pesados de expansão, consomem energia elétrica, precisam de manutenção de hardware e correm o risco de queima em descargas elétricas ou sinistros físicos.",
      painPoints: [
        {
          title: "Espaço em Disco Esgotando Rapidamente",
          description: "Necessidade de comprar novos storages físicos caros a cada poucos meses para guardar arquivos da equipe.",
        },
        {
          title: "Dificuldade de Acesso Remoto Seguro",
          description: "Colaboradores fora do escritório com problemas para abrir arquivos pesados através de VPNs lentas.",
        },
        {
          title: "Falta de Criptografia em Repouso",
          description: "Discos sem proteção criptográfica expondo dados sigilosos a furtos físicos de equipamentos.",
        },
        {
          title: "Custos Imprevisíveis em Dólar",
          description: "Provedores de nuvem que cobram taxas abusivas para cada download ou transferência de dados (egress fees).",
        },
      ],
    },
    solution: {
      title: "Armazenamento em Nuvem com Custo Previsível e Máxima Proteção",
      description: "Implementamos repositórios em nuvem compatíveis com a API S3 e soluções de sincronização híbrida com cache local, entregando velocidade máxima no escritório e mobilidade para quem está remoto.",
      features: [
        {
          title: "Durabilidade Extrema de Dados",
          description: "Arquitetura com redundância geográfica distribuída protegida contra falha simultânea de múltiplos datacenters.",
        },
        {
          title: "Criptografia Rigorosa em Repouso e em Trânsito",
          description: "Seus dados são cifrados com chaves exclusivas antes mesmo de saírem do seu ambiente de trabalho.",
        },
        {
          title: "Cache Local de Alta Velocidade (Nuvem Híbrida)",
          description: "Os arquivos de uso diário abrem na velocidade da rede local (10Gbps), sincronizando automaticamente para a nuvem.",
        },
        {
          title: "Controle Granular de Permissões e Auditoria",
          description: "Definição precisa de quais departamentos podem acessar, editar ou compartilhar cada pasta corporativa.",
        },
      ],
    },
    benefits: [
      {
        title: "Escalabilidade Infinita",
        description: "Aumente de 1TB para 100TB instantaneamente sem precisar comprar nenhum hardware físico adicional.",
        metric: "Sem Limites",
      },
      {
        title: "Custo Fixo e Previsível",
        description: "Opções de planos sem cobrança de tráfego de saída (zero egress fees) e faturamento nacional em reais.",
        metric: "Fatura Fixa",
      },
      {
        title: "Acesso de Qualquer Lugar",
        description: "Seus colaboradores acessam documentos corporativos com segurança no escritório, em casa ou em viagens.",
        metric: "100% Remoto",
      },
    ],
    includedScope: [
      {
        category: "Armazenamento e Integração",
        items: [
          "Provisionamento de buckets de armazenamento seguro em datacenters Tier III",
          "Configuração de gateway de sincronização local com servidores de arquivos existentes",
          "Criptografia de ponta a ponta e integração com credenciais corporativas",
          "Monitoramento contínuo de capacidade e saúde dos repositórios",
        ],
      },
    ],
    differentials: [
      {
        title: "Sem Pegadinhas de Faturamento",
        description: "Eliminamos as complexidades e custos ocultos de transferência de dados que tornam as contas de nuvem caras.",
      },
      {
        title: "Integração Perfeita com o Dia a Dia",
        description: "O colaborador continua enxergando a mesma letra de unidade de rede (ex: drive Z:), sem mudar seus hábitos de trabalho.",
      },
      {
        title: "Conformidade LGPD",
        description: "Garantia de custódia e trilha de auditoria completa para comprovação perante órgãos reguladores.",
      },
    ],
    faqs: [
      {
        question: "Meus arquivos vão demorar para abrir pela internet?",
        answer: "Não. Utilizamos a tecnologia de cache híbrido: os arquivos em uso frequente ficam em cache local de altíssima velocidade no servidor da sua empresa e são sincronizados silenciosamente em segundo plano com a nuvem.",
      },
      {
        question: "É seguro guardar documentos confidenciais na nuvem?",
        answer: "Sim, é muito mais seguro do que em um servidor físico local. Nossos repositórios contam com criptografia AES-256, múltiplas cópias geográficas e certificações internacionais que a grande maioria das empresas não consegue implementar internamente.",
      },
      {
        question: "Posso recuperar uma versão antiga de um arquivo que foi sobrescrito por engano?",
        answer: "Sim! O versionamento automático mantém as versões anteriores de cada documento salvas, permitindo reverter para o arquivo exato de ontem ou da semana passada com facilidade.",
      },
    ],
    visualSuggestion: {
      badge: "Armazenamento S3",
      title: "Repositório em Nuvem Criptografado",
      description: "Visual de gateway de sincronização local conectado ao cofre em nuvem com alta durabilidade e versionamento.",
      elements: ["API S3", "Criptografia AES-256", "Versionamento", "Durabilidade 11 Noves"],
    },
    seo: {
      metaTitle: "Armazenamento em Nuvem Corporativo | Inserti",
      metaDescription: "Armazene os arquivos da sua empresa com segurança e escalabilidade com o Armazenamento em Nuvem da Inserti. Compatível com S3 e com custo previsível.",
      keywords: ["armazenamento em nuvem", "storage corporativo", "cloud storage s3", "servidor de arquivos nuvem", "Inserti"],
    },
  },

  {
    slug: "microsoft-365",
    title: "Microsoft 365",
    groupName: "Cloud e produtividade",
    groupDescription: "Infraestrutura e soluções em nuvem",
    shortDescription: "Implantação, migração, administração e suporte do Microsoft 365: e-mail corporativo, Teams, OneDrive, SharePoint e segurança.",
    badge: "Microsoft 365 gerenciado",
    icon: "Boxes",
    hero: {
      eyebrow: "CLOUD E PRODUTIVIDADE | MICROSOFT 365",
      title: "Mais produtividade e colaboração. Menos complicação com tecnologia.",
      subtitle: "Tenha as ferramentas certas para conectar sua equipe, organizar informações e trabalhar de qualquer lugar.\n\nA Inserti ajuda sua empresa a implantar, configurar e administrar o Microsoft 365, desde o e-mail corporativo até as ferramentas de colaboração, armazenamento e segurança.",
      chips: ["E-mail corporativo profissional", "Teams, OneDrive e SharePoint", "Implantação, administração e suporte especializado"],
      highlight: "Sua empresa aproveita melhor o Microsoft 365 enquanto a Inserti cuida da configuração, administração e suporte do ambiente.",
      cta: { primary: "Solicitar uma avaliação", secondary: "Falar com um especialista", mode: "form-whatsapp" },
      form: {
        title: "Sua empresa aproveita todo o potencial do Microsoft 365?",
        description: "Converse com nossos especialistas e descubra como organizar e administrar melhor seu ambiente Microsoft.",
        messageLabel: "Quantidade aproximada de usuários e se já utiliza Microsoft 365 (sim, não ou parcialmente)",
        button: "Solicitar avaliação",
      },
      metrics: [],
    },
    problem: {
      eyebrow: "Quando a tecnologia não acompanha a equipe",
      title: "Sua empresa utiliza Microsoft 365, mas será que está aproveitando todos os recursos?",
      description: "Contratar licenças é apenas o começo. Sem uma configuração adequada e uma administração organizada, ferramentas que deveriam facilitar o trabalho podem gerar dificuldades e riscos.",
      painPoints: [
        {
          title: "01. E-mails e contas desorganizados",
          description: "Contas mal configuradas, problemas de acesso, caixas de e-mail e permissões sem gestão podem prejudicar a comunicação e a rotina da equipe.",
        },
        {
          title: "02. Arquivos espalhados",
          description: "Documentos armazenados em computadores, compartilhados por e-mail ou distribuídos em diferentes pastas dificultam a colaboração e o controle das informações.",
        },
        {
          title: "03. Falta de segurança",
          description: "Contas sem autenticação multifator, permissões excessivas e configurações inadequadas podem aumentar os riscos de comprometimento dos dados corporativos.",
        },
        {
          title: "04. Licenças mal dimensionadas",
          description: "Empresas podem pagar por recursos que não utilizam ou contratar planos que não atendem às necessidades reais de seus colaboradores.",
        },
      ],
    },
    solution: {
      eyebrow: "Microsoft 365 gerenciado pela Inserti",
      hideCardBadge: true,
      title: "Implantamos, organizamos e administramos seu ambiente Microsoft.",
      description: "A Inserti ajuda sua empresa a aproveitar os recursos do Microsoft 365, estruturando usuários, acessos, ferramentas de colaboração e políticas de administração.",
      features: [
        {
          title: "Análise e planejamento",
          description: "Avaliamos a estrutura atual, quantidade de usuários, necessidades de comunicação, armazenamento e colaboração.",
        },
        {
          title: "Implantação e configuração",
          description: "Configuramos o ambiente, criamos usuários, organizamos domínios, e-mails, grupos e demais serviços necessários.",
        },
        {
          title: "Organização e segurança",
          description: "Estruturamos permissões, compartilhamentos e configurações de segurança adequadas à realidade da empresa.",
        },
        {
          title: "Administração e suporte",
          description: "Apoiamos a gestão de usuários, licenças, serviços e solicitações técnicas para manter o ambiente funcionando conforme as necessidades do negócio.",
        },
      ],
    },
    benefitsSection: {
      eyebrow: "O que sua empresa ganha",
      title: "Um ambiente de trabalho mais organizado, conectado e produtivo.",
    },
    benefits: [
      {
        title: "Comunicação profissional",
        description: "Utilize e-mail corporativo com domínio próprio, calendários compartilhados e ferramentas de comunicação integradas.",
      },
      {
        title: "Colaboração entre equipes",
        description: "Compartilhe documentos, trabalhe simultaneamente em arquivos e organize informações em ambientes colaborativos.",
      },
      {
        title: "Acesso de qualquer lugar",
        description: "Acesse documentos, e-mails e ferramentas de trabalho por diferentes dispositivos, conforme os recursos do plano contratado.",
      },
      {
        title: "Administração centralizada",
        description: "Tenha usuários, licenças, permissões e serviços organizados em um ambiente administrado de forma centralizada.",
      },
      {
        title: "Mais controle e segurança",
        description: "Aplique políticas de acesso, autenticação e proteção de acordo com os recursos disponíveis no licenciamento.",
      },
      {
        title: "Suporte especializado",
        description: "Conte com uma equipe de TI para apoiar a administração do Microsoft 365 e resolver dificuldades técnicas do ambiente.",
      },
    ],
    scopeBeforeBanner: true,
    scopeSection: {
      eyebrow: "O que fazemos com Microsoft 365",
      title: "Tudo o que sua empresa precisa para trabalhar melhor com a plataforma.",
    },
    includedScope: [
      {
        category: "E-mail corporativo",
        items: [
          "Configuração de domínio e registros DNS.",
          "Criação e administração de caixas postais.",
          "Configuração de Outlook.",
          "Grupos e caixas de e-mail compartilhadas.",
          "Administração de calendários e permissões.",
          "Migração de e-mails de outras plataformas.",
        ],
      },
      {
        category: "Microsoft Teams",
        items: [
          "Implantação e configuração do Teams.",
          "Organização de equipes e canais.",
          "Administração de usuários e permissões.",
          "Configuração de reuniões e colaboração.",
          "Apoio à adoção da plataforma pela equipe.",
        ],
      },
      {
        category: "OneDrive e SharePoint",
        items: [
          "Configuração do armazenamento corporativo.",
          "Organização de bibliotecas e documentos.",
          "Estruturação de sites de equipes.",
          "Administração de permissões e compartilhamentos.",
          "Migração de arquivos para a nuvem.",
          "Orientação para uso e colaboração.",
        ],
      },
      {
        category: "Administração e segurança",
        items: [
          "Criação e administração de usuários.",
          "Gestão de licenças.",
          "Configuração de autenticação multifator (MFA).",
          "Administração de grupos e permissões.",
          "Revisão de configurações de acesso.",
          "Aplicação de políticas de segurança disponíveis no plano contratado.",
        ],
      },
    ],
    techBanner: {
      eyebrow: "Tecnologia",
      brand: "Microsoft 365",
      tag: "Ecossistema completo",
      title: "Um ecossistema completo para conectar sua empresa.",
      text: "O Microsoft 365 reúne ferramentas de produtividade, comunicação, armazenamento e colaboração em uma plataforma integrada. A Inserti ajuda sua empresa a escolher, implantar e administrar os recursos mais adequados à sua operação.",
      items: [
        {
          title: "Exchange Online",
          description: "E-mail corporativo, calendários, contatos e recursos de comunicação empresarial.",
        },
        {
          title: "Microsoft Teams",
          description: "Reuniões, chamadas, conversas e colaboração entre equipes.",
        },
        {
          title: "OneDrive for Business",
          description: "Armazenamento individual de arquivos na nuvem e sincronização entre dispositivos.",
        },
        {
          title: "SharePoint Online",
          description: "Compartilhamento de documentos, sites internos e organização de informações corporativas.",
        },
        {
          title: "Word, Excel e PowerPoint",
          description: "Aplicativos para criação e edição de documentos, planilhas e apresentações.",
        },
        {
          title: "Microsoft Entra ID",
          description: "Recursos de identidade e gerenciamento de acesso aos serviços Microsoft.",
        },
      ],
      footnote: "A tecnologia é Microsoft. A Inserti cuida da implantação, configuração, administração e suporte para que sua empresa aproveite melhor a plataforma.",
      linkLabel: "Conheça o Microsoft 365 para empresas",
      linkHref: "https://www.microsoft.com/pt-br/microsoft-365/business",
    },
    managementSection: {
      eyebrow: "Migração",
      title: "Sua empresa ainda utiliza e-mail ou arquivos em servidores locais?",
      description: "Migrar para o Microsoft 365 pode simplificar a administração da infraestrutura e facilitar o trabalho colaborativo. A Inserti planeja e executa projetos de migração considerando a estrutura atual, a quantidade de usuários e os dados que precisam ser transferidos.",
      cards: [
        {
          title: "Migração de e-mails",
          description: "Transferência de caixas postais, mensagens, calendários e contatos de plataformas compatíveis.",
        },
        {
          title: "Migração de arquivos",
          description: "Transferência e organização de documentos para OneDrive e SharePoint.",
        },
        {
          title: "Configuração dos usuários",
          description: "Criação de contas, atribuição de licenças, configuração de dispositivos e permissões.",
        },
        {
          title: "Acompanhamento da transição",
          description: "Planejamento da mudança, validação dos serviços e apoio aos usuários durante a implantação.",
        },
      ],
      support: "Leve seu ambiente para o Microsoft 365 com planejamento, validação e acompanhamento de uma equipe de TI.",
    },
    differentialsSection: {
      eyebrow: "Por que escolher a Inserti?",
      title: "Microsoft 365 com uma equipe de TI ao seu lado.",
    },
    differentials: [
      {
        title: "Implantação profissional",
        description: "Planejamos a configuração do ambiente considerando as necessidades e a estrutura da empresa.",
      },
      {
        title: "Gestão contínua",
        description: "Apoiamos a administração de usuários, licenças, permissões e serviços do Microsoft 365.",
      },
      {
        title: "Segurança e organização",
        description: "Ajudamos a estruturar políticas de acesso, compartilhamento e proteção dos dados corporativos.",
      },
      {
        title: "Suporte integrado",
        description: "Além do Microsoft 365, a Inserti atua em infraestrutura, redes, segurança e suporte de TI, permitindo uma visão mais completa do ambiente tecnológico.",
      },
    ],
    faqs: [
      {
        question: "O que é Microsoft 365?",
        answer: "É uma plataforma de produtividade e colaboração da Microsoft que reúne serviços como e-mail corporativo, armazenamento em nuvem, aplicativos Office, comunicação e compartilhamento de documentos.",
      },
      {
        question: "A Inserti vende licenças Microsoft 365?",
        answer: "Sim. Podemos orientar sua empresa na escolha e contratação das licenças mais adequadas, além de apoiar a implantação e administração do ambiente.",
      },
      {
        question: "Qual plano Microsoft 365 minha empresa deve contratar?",
        answer: "Depende da necessidade de cada usuário. Existem planos com aplicativos Web, aplicativos instalados no computador, e-mail corporativo, armazenamento e recursos adicionais de segurança e gerenciamento. Avaliamos o perfil da equipe para recomendar a combinação adequada.",
      },
      {
        question: "Posso migrar meus e-mails atuais para o Microsoft 365?",
        answer: "Sim. Podemos planejar e executar a migração de plataformas de e-mail compatíveis, considerando caixas postais, mensagens e demais dados disponíveis.",
      },
      {
        question: "Posso utilizar meu domínio próprio no e-mail?",
        answer: "Sim. É possível configurar o domínio da empresa para utilizar endereços profissionais, como usuario@suaempresa.com.br.",
      },
      {
        question: "Qual é a diferença entre OneDrive e SharePoint?",
        answer: "O OneDrive é voltado principalmente ao armazenamento e gerenciamento de arquivos individuais. O SharePoint permite estruturar bibliotecas, sites e ambientes de documentos compartilhados por equipes e departamentos.",
      },
      {
        question: "O Microsoft 365 já inclui backup?",
        answer: "A plataforma oferece recursos próprios de retenção e recuperação, mas eles não substituem necessariamente uma estratégia independente de backup. A Inserti também oferece backup específico para Microsoft 365, com proteção e recuperação de dados conforme a solução contratada.",
      },
      {
        question: "O Microsoft 365 possui recursos de segurança?",
        answer: "Sim. Existem recursos de autenticação multifator, gerenciamento de identidades, políticas de acesso e proteção contra ameaças. A disponibilidade varia conforme o plano e as licenças adicionais contratadas.",
      },
      {
        question: "A Inserti oferece suporte aos usuários?",
        answer: "Sim. Podemos prestar suporte remoto aos usuários e administrar o ambiente Microsoft 365, conforme o escopo contratado.",
      },
      {
        question: "Minha empresa já utiliza Microsoft 365. Posso contratar somente a administração e o suporte?",
        answer: "Sim. Podemos avaliar o ambiente existente e assumir atividades de administração, configuração, gestão de licenças e suporte técnico.",
      },
    ],
    finalCta: {
      badge: "Microsoft 365",
      title: "Sua empresa já utiliza Microsoft 365. Está aproveitando tudo o que ele pode oferecer?",
      subtitle: "Organize seu ambiente, melhore a colaboração e tenha uma equipe especializada para cuidar da administração e do suporte. Conte com a Inserti para implantar e gerenciar o Microsoft 365 da sua empresa.",
      button: "Solicitar avaliação",
      secondaryButton: "Falar com um especialista",
      primaryHref: "#form-lead",
    },
    seo: {
      metaTitle: "Microsoft 365 para Empresas | Implantação e Suporte | Inserti",
      metaDescription: "Implante e gerencie o Microsoft 365 com a Inserti. E-mail corporativo, Teams, OneDrive, SharePoint, segurança, migração e suporte especializado.",
      keywords: ["Microsoft 365 para empresas", "Microsoft 365 empresarial", "suporte Microsoft 365", "implantação Microsoft 365", "e-mail corporativo Microsoft", "administração Microsoft 365", "migração Office 365"],
    },
  },

  // ==========================================
  // GRUPO 5: SOLUÇÕES DIGITAIS E AUTOMAÇÃO (Desenvolvimento, automação e inteligência artificial)
  // ==========================================
  {
    slug: "desenvolvimento-software-sob-demanda",
    title: "Desenvolvimento de software sob demanda",
    groupName: "Soluções digitais e automação",
    groupDescription: "Desenvolvimento e inteligência",
    shortDescription: "Sistemas web, plataformas empresariais, portais e aplicações sob medida para automatizar processos e resolver desafios do seu negócio.",
    badge: "Software sob medida",
    icon: "Code",
    hero: {
      eyebrow: "SOLUÇÕES DIGITAIS E AUTOMAÇÃO | DESENVOLVIMENTO DE SOFTWARE",
      title: "Sua empresa tem processos únicos. Seu software também pode ser.",
      subtitle: "Nem sempre os sistemas disponíveis no mercado atendem às necessidades de uma operação. Processos específicos, ferramentas desconectadas e controles manuais podem limitar a produtividade e o crescimento do negócio.\n\nA Inserti desenvolve softwares sob demanda, criando sistemas, plataformas e aplicações personalizados para resolver problemas reais e acompanhar a evolução da sua empresa.",
      chips: ["Sistemas e plataformas personalizados", "Aplicações web e soluções empresariais", "Integração com sistemas e bancos de dados"],
      highlight: "Da ideia à aplicação em produção: desenvolvemos a tecnologia que sua empresa precisa para trabalhar melhor.",
      cta: { primary: "Apresentar meu projeto", secondary: "Falar com um especialista", mode: "form-whatsapp" },
      form: {
        title: "Tem uma ideia ou precisa de um sistema personalizado?",
        description: "Conte seu desafio. Vamos entender sua necessidade e avaliar como podemos transformar sua ideia em uma solução tecnológica.",
        messageLabel: "O que você precisa desenvolver? E já possui algum sistema ou projeto iniciado? (sim, não ou em planejamento)",
        button: "Quero desenvolver meu projeto",
      },
      metrics: [],
    },
    problem: {
      eyebrow: "Quando os sistemas não acompanham o negócio",
      title: "Sua empresa está se adaptando ao software ou o software deveria se adaptar à sua empresa?",
      description: "Muitas organizações dependem de planilhas, controles manuais e sistemas que não conversam entre si. Com o crescimento da operação, essas limitações começam a gerar retrabalho, custos e dificuldades de gestão.",
      painPoints: [
        {
          title: "01. Processos manuais",
          description: "Atividades repetitivas dependem de planilhas, e-mails e controles paralelos, consumindo tempo da equipe e aumentando a possibilidade de erros.",
        },
        {
          title: "02. Sistemas que não atendem à operação",
          description: "Softwares prontos nem sempre contemplam regras de negócio, fluxos de trabalho e necessidades específicas da empresa.",
        },
        {
          title: "03. Informações desconectadas",
          description: "Dados espalhados em diferentes sistemas dificultam a integração das informações e a construção de uma visão completa da operação.",
        },
        {
          title: "04. Limitações para crescer",
          description: "Soluções improvisadas podem funcionar no início, mas se tornam obstáculos quando aumentam o volume de usuários, dados e processos.",
        },
      ],
    },
    solution: {
      eyebrow: "Desenvolvimento sob medida",
      hideCardBadge: true,
      title: "Transformamos necessidades de negócio em soluções tecnológicas.",
      description: "A Inserti desenvolve sistemas e aplicações personalizados, considerando os processos, objetivos e necessidades de cada empresa. Nosso trabalho vai além da programação: participamos da compreensão do problema, definição da solução, desenvolvimento, implantação e evolução do software.",
      features: [
        {
          title: "Entendimento do negócio",
          description: "Conhecemos os processos, identificamos os problemas e entendemos os objetivos que o software precisa atender.",
        },
        {
          title: "Planejamento e arquitetura",
          description: "Definimos funcionalidades, estrutura do sistema, tecnologias, integrações e arquitetura adequada ao projeto.",
        },
        {
          title: "Desenvolvimento e validação",
          description: "Construímos a solução, apresentamos as funcionalidades, realizamos testes e validamos os resultados com o cliente.",
        },
        {
          title: "Implantação e evolução",
          description: "Colocamos o sistema em produção, apoiamos sua utilização e podemos continuar evoluindo a solução conforme as necessidades do negócio.",
        },
      ],
    },
    benefits: [],
    scopeBeforeBanner: true,
    scopeSection: {
      eyebrow: "O que desenvolvemos",
      title: "Tecnologia construída de acordo com os desafios da sua empresa.",
    },
    includedScope: [
      {
        category: "Sistemas empresariais",
        intro: "Desenvolvimento de sistemas personalizados para administrar processos, informações e operações específicas. Exemplos:",
        items: [
          "Sistemas de gestão internos.",
          "Controle operacional e administrativo.",
          "Gestão de clientes e relacionamento.",
          "Gestão de equipes e atividades.",
          "Sistemas de indicadores e relatórios.",
        ],
      },
      {
        category: "Plataformas e aplicações web",
        intro: "Aplicações acessíveis pelo navegador, com interfaces modernas e recursos desenvolvidos para diferentes perfis de usuários. Exemplos:",
        items: [
          "Portais corporativos.",
          "Plataformas de atendimento.",
          "Sistemas de gestão online.",
          "Painéis administrativos.",
          "Plataformas digitais e SaaS.",
        ],
      },
      {
        category: "Dashboards e inteligência de dados",
        intro: "Transformação de informações operacionais em indicadores que ajudam gestores a acompanhar resultados e tomar decisões. Exemplos:",
        items: [
          "Dashboards gerenciais.",
          "Painéis de indicadores.",
          "Consolidação de dados.",
          "Relatórios personalizados.",
          "Visualização de informações em tempo real, quando suportada pela arquitetura.",
        ],
      },
      {
        category: "Aplicações e projetos personalizados",
        intro: "Desenvolvimento de soluções específicas para necessidades que não são atendidas adequadamente por ferramentas prontas. Exemplos:",
        items: [
          "Aplicações para dispositivos móveis, conforme escopo.",
          "Sistemas de controle e acompanhamento.",
          "Portais para clientes e fornecedores.",
          "Aplicações integradas a equipamentos e serviços.",
          "Modernização de sistemas existentes.",
        ],
      },
    ],
    techBanner: {
      eyebrow: "Tecnologia",
      brand: "Arquitetura",
      tag: "Preparada para evoluir",
      title: "Desenvolvemos pensando no que sua aplicação precisa hoje e no que poderá precisar amanhã.",
      text: "Um bom software precisa funcionar bem, proteger informações e permitir evolução sem exigir reconstruções constantes. A Inserti trabalha com tecnologias modernas de desenvolvimento, bancos de dados, APIs e infraestrutura em nuvem, escolhendo a arquitetura de acordo com as características de cada projeto.",
      items: [
        {
          title: "Aplicações modernas",
          description: "Sistemas web com interfaces responsivas e experiência de uso adequada aos dispositivos.",
        },
        {
          title: "Arquitetura escalável",
          description: "Estrutura técnica dimensionada para acompanhar a evolução da aplicação.",
        },
        {
          title: "Integrações",
          description: "Comunicação entre sistemas por APIs e serviços compatíveis.",
        },
        {
          title: "Banco de dados",
          description: "Modelagem e organização das informações de acordo com a necessidade do negócio.",
        },
        {
          title: "Segurança",
          description: "Controle de acesso, autenticação e proteção das informações desde a concepção do projeto.",
        },
        {
          title: "Infraestrutura",
          description: "Preparação dos ambientes de desenvolvimento, homologação e produção.",
        },
      ],
      footnote: "Da arquitetura ao ambiente de produção, a Inserti pode cuidar de todo o ciclo técnico da aplicação.",
    },
    managementSection: {
      eyebrow: "Integração",
      title: "O software da sua empresa não precisa funcionar isolado.",
      description: "Desenvolvemos soluções capazes de se conectar a sistemas e serviços existentes, permitindo compartilhar informações e integrar processos.",
      cards: [
        {
          title: "Integração com ERPs e CRMs",
          description: "Conectamos aplicações a sistemas de gestão e relacionamento para integrar dados e reduzir controles duplicados.",
        },
        {
          title: "APIs e serviços externos",
          description: "Desenvolvemos integrações com plataformas, serviços de terceiros e APIs, respeitando as possibilidades técnicas de cada fornecedor.",
        },
        {
          title: "Bancos de dados",
          description: "Trabalhamos com estruturas de dados e bancos relacionais e não relacionais para atender às necessidades das aplicações.",
        },
        {
          title: "Ecossistema digital",
          description: "Conectamos diferentes ferramentas e aplicações para construir fluxos de informação mais organizados e eficientes.",
        },
      ],
      support: "Antes de substituir um sistema, avaliamos se a melhor solução é integrá-lo, ampliar suas funcionalidades ou desenvolver uma aplicação complementar.",
    },
    comparisonSection: {
      eyebrow: "Mais do que desenvolver",
      title: "Seu sistema não termina quando o desenvolvimento é concluído.",
      description: "Uma aplicação precisa de infraestrutura, atualizações, correções e acompanhamento para continuar atendendo às necessidades do negócio. A Inserti também pode assumir a operação técnica do software após sua implantação.",
      cards: [
        {
          title: "Implantação e hospedagem",
          description: "Preparação do ambiente de produção, configuração de infraestrutura, domínio, certificados e publicação da aplicação.",
        },
        {
          title: "Manutenção e evolução",
          description: "Correção de problemas, melhorias funcionais, atualizações e desenvolvimento de novas funcionalidades conforme contrato.",
        },
        {
          title: "Backup e proteção",
          description: "Planejamento de cópias de segurança e medidas de proteção para os dados e componentes da aplicação.",
        },
        {
          title: "Monitoramento e infraestrutura",
          description: "Acompanhamento dos recursos de infraestrutura, disponibilidade e funcionamento técnico do ambiente, conforme o serviço contratado.",
        },
      ],
      support: "Você pode contratar apenas o desenvolvimento ou contar com a Inserti também para hospedar, administrar e evoluir sua aplicação.",
    },
    differentialsSection: {
      eyebrow: "Por que escolher a Inserti?",
      title: "Desenvolvimento de software com visão de negócio e infraestrutura.",
    },
    differentials: [
      {
        title: "Entendemos tecnologia além do código",
        description: "Nossa experiência em infraestrutura, redes, bancos de dados e operações empresariais permite avaliar o software dentro do ambiente tecnológico da empresa.",
      },
      {
        title: "Soluções orientadas ao problema",
        description: "Começamos entendendo o que precisa ser resolvido. A tecnologia é escolhida para atender ao objetivo, não o contrário.",
      },
      {
        title: "Um parceiro para todo o ciclo",
        description: "Podemos participar do planejamento, desenvolvimento, implantação, hospedagem, manutenção e evolução da aplicação.",
      },
      {
        title: "Visão de longo prazo",
        description: "Desenvolvemos soluções considerando manutenção, segurança, documentação e possibilidade de evolução.",
      },
    ],
    faqs: [
      {
        question: "O que é desenvolvimento de software sob demanda?",
        answer: "É o desenvolvimento de sistemas e aplicações personalizados para atender às necessidades específicas de uma empresa, considerando seus processos, regras de negócio e objetivos.",
      },
      {
        question: "A Inserti desenvolve sistemas do zero?",
        answer: "Sim. Podemos desenvolver projetos novos ou trabalhar sobre aplicações existentes, conforme a avaliação técnica e a viabilidade do projeto.",
      },
      {
        question: "Minha empresa já utiliza um ERP. Posso desenvolver um sistema complementar?",
        answer: "Sim. Podemos desenvolver aplicações complementares e integrações com ERPs e outros sistemas, desde que existam recursos técnicos de integração disponíveis.",
      },
      {
        question: "Como funciona a contratação de um projeto?",
        answer: "Começamos pelo entendimento da necessidade, levantamento de requisitos e definição do escopo. Depois apresentamos uma proposta com etapas, entregáveis, prazo estimado e investimento.",
      },
      {
        question: "Quanto custa desenvolver um software personalizado?",
        answer: "O valor depende da complexidade, funcionalidades, integrações, arquitetura e requisitos do projeto. Após entender a necessidade, elaboramos uma proposta adequada ao escopo.",
      },
      {
        question: "Quanto tempo demora para desenvolver um sistema?",
        answer: "Depende do tamanho e da complexidade da solução. Projetos menores podem ter ciclos mais curtos, enquanto plataformas com várias funcionalidades e integrações exigem planejamento e desenvolvimento em etapas.",
      },
      {
        question: "Posso começar com uma versão mais simples do sistema?",
        answer: "Sim. Quando faz sentido, recomendamos começar com uma primeira versão funcional, priorizando as funcionalidades essenciais e permitindo validar a solução antes de ampliar o projeto.",
      },
      {
        question: "A Inserti também hospeda os sistemas desenvolvidos?",
        answer: "Sim. Podemos hospedar as aplicações em infraestrutura adequada, incluindo nossa Cloud Corporativa, conforme os requisitos técnicos do projeto.",
      },
      {
        question: "Quem fica com o código-fonte do sistema?",
        answer: "As condições de propriedade intelectual, acesso ao código-fonte, repositórios e direitos de utilização são definidas na proposta e no contrato. Essa definição deve estar clara antes do início do desenvolvimento.",
      },
      {
        question: "A Inserti oferece manutenção depois da entrega?",
        answer: "Sim. Podemos contratar planos de manutenção e evolução para correções, atualizações, melhorias e novas funcionalidades, conforme o escopo acordado.",
      },
    ],
    finalCta: {
      badge: "Desenvolvimento de software",
      title: "Sua ideia pode se transformar em uma solução real.",
      subtitle: "Se sua empresa precisa de um sistema personalizado, uma plataforma digital ou uma aplicação para resolver um desafio operacional, a Inserti pode ajudar. Vamos entender sua necessidade e construir uma solução tecnológica alinhada aos objetivos do seu negócio.",
      button: "Apresentar meu projeto",
      secondaryButton: "Falar com um especialista",
      primaryHref: "#form-lead",
    },
    seo: {
      metaTitle: "Desenvolvimento de Software sob Demanda | Inserti",
      metaDescription: "Desenvolvemos sistemas web, plataformas empresariais, portais e aplicações sob medida para automatizar processos e resolver desafios do seu negócio.",
      keywords: ["Desenvolvimento de software sob demanda", "desenvolvimento de software personalizado", "sistemas sob medida", "desenvolvimento de sistemas web", "software empresarial", "fábrica de software", "desenvolvimento de aplicações"],
    },
  },

  {
    slug: "automacao-processos-integracoes",
    title: "Automação de processos e integrações",
    groupName: "Soluções digitais e automação",
    groupDescription: "Desenvolvimento, automação e inteligência artificial",
    shortDescription: "Automatize processos empresariais, conecte ERPs, CRMs, WhatsApp e outros sistemas e reduza tarefas manuais.",
    badge: "Automação e integrações",
    icon: "Workflow",
    hero: {
      eyebrow: "SOLUÇÕES DIGITAIS E AUTOMAÇÃO | AUTOMAÇÃO EMPRESARIAL",
      title: "Sua equipe não deveria perder tempo fazendo o que os sistemas podem fazer sozinhos.",
      subtitle: "Tarefas repetitivas, informações espalhadas e sistemas que não se comunicam consomem tempo e aumentam os custos da operação.\n\nA Inserti desenvolve automações e integrações para conectar ferramentas, organizar fluxos de trabalho e executar processos automaticamente, permitindo que sua equipe dedique mais tempo ao que realmente importa.",
      chips: ["Automação de processos empresariais", "Integração entre ERPs, CRMs e sistemas", "Workflows inteligentes com n8n e APIs"],
      highlight: "Menos tarefas manuais, menos retrabalho e processos que funcionam de forma integrada.",
      cta: { primary: "Quero automatizar minha empresa", secondary: "Falar com um especialista", mode: "form-whatsapp" },
      form: {
        title: "Quais processos sua empresa poderia automatizar?",
        description: "Conte como funciona sua operação hoje. Vamos identificar oportunidades para simplificar tarefas e conectar seus sistemas.",
        messageLabel: "Qual processo deseja automatizar e quais sistemas utiliza? (opcional)",
        button: "Quero automatizar meus processos",
      },
      metrics: [],
    },
    problem: {
      eyebrow: "O custo dos processos manuais",
      title: "Quanto tempo sua equipe perde com tarefas que poderiam ser automatizadas?",
      description: "Muitas empresas ainda dependem de planilhas, cópia e transferência de informações, lançamentos manuais e atividades repetitivas para manter seus processos funcionando. Além de consumir tempo, essas atividades aumentam a possibilidade de erros e dificultam o crescimento da operação.",
      painPoints: [
        {
          title: "01. Retrabalho constante",
          description: "Informações são cadastradas em diferentes sistemas, planilhas e ferramentas, exigindo que a equipe repita as mesmas tarefas.",
        },
        {
          title: "02. Sistemas desconectados",
          description: "ERP, CRM, WhatsApp, plataformas financeiras e outras ferramentas funcionam isoladamente, dificultando o fluxo de informações.",
        },
        {
          title: "03. Processos dependentes de pessoas",
          description: "Atividades importantes dependem de alguém lembrar de executar uma tarefa, enviar uma mensagem ou atualizar determinado sistema.",
        },
        {
          title: "04. Falta de visibilidade",
          description: "Sem processos estruturados, fica difícil acompanhar o andamento das atividades, identificar falhas e saber onde estão os gargalos da operação.",
        },
      ],
    },
    solution: {
      eyebrow: "Automação e integração de processos",
      hideCardBadge: true,
      title: "Conectamos seus sistemas e automatizamos o trabalho repetitivo.",
      description: "A Inserti analisa os processos da empresa, identifica oportunidades de automação e desenvolve fluxos que integram sistemas, organizam informações e executam tarefas automaticamente.",
      features: [
        {
          title: "Mapeamento dos processos",
          description: "Entendemos como as atividades funcionam hoje, quais sistemas estão envolvidos e onde existem tarefas repetitivas ou gargalos.",
        },
        {
          title: "Planejamento da automação",
          description: "Definimos os fluxos, regras de negócio, integrações e condições necessárias para executar cada processo.",
        },
        {
          title: "Desenvolvimento e integração",
          description: "Construímos as automações utilizando ferramentas como n8n, APIs, webhooks e bancos de dados, conectando os sistemas envolvidos.",
        },
        {
          title: "Implantação e acompanhamento",
          description: "Colocamos os fluxos em produção, validamos os resultados e podemos acompanhar seu funcionamento, corrigir falhas e evoluir as automações.",
        },
      ],
    },
    benefits: [],
    scopeBeforeBanner: true,
    scopeSection: {
      eyebrow: "O que podemos automatizar?",
      title: "Processos mais simples, integrados e eficientes.",
    },
    includedScope: [
      {
        category: "Comercial e relacionamento",
        intro: "Automatize atividades de vendas, atendimento e relacionamento com clientes.",
        items: [
          "Captura e distribuição de leads.",
          "Integração entre formulários, CRM e WhatsApp.",
          "Atualização automática de oportunidades.",
          "Envio de notificações e mensagens.",
          "Organização de etapas do funil comercial.",
          "Acompanhamento de interações com clientes.",
        ],
      },
      {
        category: "Financeiro e administrativo",
        intro: "Reduza tarefas operacionais e conecte informações entre sistemas.",
        items: [
          "Integração com sistemas financeiros.",
          "Processamento e organização de informações.",
          "Notificações de vencimentos e pagamentos.",
          "Atualização de cadastros e registros.",
          "Geração e distribuição de relatórios.",
          "Automatização de rotinas administrativas.",
        ],
      },
      {
        category: "Operações e processos internos",
        intro: "Automatize fluxos de trabalho entre departamentos e sistemas.",
        items: [
          "Abertura e atualização de solicitações.",
          "Aprovações e notificações.",
          "Distribuição de tarefas.",
          "Atualização de planilhas e bancos de dados.",
          "Integração de sistemas internos.",
          "Rotinas de conferência e validação de informações.",
        ],
      },
      {
        category: "Atendimento e comunicação",
        intro: "Conecte canais de comunicação aos processos da empresa.",
        items: [
          "Integração com WhatsApp.",
          "Distribuição e registro de atendimentos.",
          "Notificações automáticas.",
          "Chatbots e fluxos de atendimento.",
          "Integração com CRMs e plataformas de suporte.",
          "Comunicação automatizada com clientes e colaboradores.",
        ],
      },
    ],
    techBanner: {
      eyebrow: "Tecnologia",
      brand: "n8n",
      tag: "Automação e integrações inteligentes",
      title: "A tecnologia certa para conectar processos e sistemas.",
      text: "A Inserti utiliza ferramentas de automação e integração para construir fluxos que conectam diferentes plataformas e executam processos de acordo com as regras de cada negócio.",
      items: [
        {
          title: "n8n",
          description: "Plataforma de automação para criar workflows e integrar diferentes serviços.",
        },
        {
          title: "APIs",
          description: "Comunicação entre sistemas para consultar, enviar e atualizar informações.",
        },
        {
          title: "Webhooks",
          description: "Execução de processos a partir de eventos e notificações.",
        },
        {
          title: "Bancos de dados",
          description: "Consulta, armazenamento e sincronização de informações.",
        },
        {
          title: "Integrações com IA",
          description: "Utilização de modelos e agentes de inteligência artificial em processos que exigem interpretação, classificação e geração de conteúdo.",
        },
        {
          title: "Monitoramento de workflows",
          description: "Acompanhamento das execuções e identificação de falhas, conforme a estrutura implantada.",
        },
      ],
      footnote: "Não entregamos apenas fluxos automatizados. Projetamos integrações considerando regras de negócio, segurança, tratamento de erros e possibilidade de evolução.",
      linkLabel: "Conheça o n8n",
      linkHref: "https://n8n.io/",
    },
    managementSection: {
      eyebrow: "Integrações",
      title: "Conectamos as ferramentas que sua empresa já utiliza.",
      description: "Muitas vezes, sua empresa não precisa substituir os sistemas existentes. Precisa fazer com que eles compartilhem informações e trabalhem de forma integrada.",
      cards: [
        {
          title: "ERPs e sistemas de gestão",
          description: "Integração com sistemas empresariais para sincronizar cadastros, pedidos, produtos, informações financeiras e dados operacionais, conforme as APIs disponíveis.",
        },
        {
          title: "CRMs e plataformas comerciais",
          description: "Conectamos ferramentas de relacionamento, formulários, canais de atendimento e sistemas de vendas para organizar a jornada do cliente.",
        },
        {
          title: "WhatsApp e canais digitais",
          description: "Integração com WhatsApp Business Platform, sistemas de atendimento e ferramentas de comunicação para automatizar notificações e fluxos de relacionamento.",
        },
        {
          title: "APIs e serviços externos",
          description: "Integração com plataformas de terceiros, serviços web, bancos de dados e aplicações que disponibilizam interfaces de comunicação.",
        },
      ],
      support: "Se os sistemas possuem recursos de integração, podemos avaliar como conectá-los. Quando não existe uma API disponível, analisamos alternativas tecnicamente viáveis.",
    },
    comparisonSection: {
      eyebrow: "Mais do que automatizar",
      title: "Uma automação precisa continuar funcionando depois de entrar em produção.",
      description: "Um fluxo automatizado pode depender de APIs, credenciais, serviços externos e regras de negócio que mudam com o tempo. Por isso, a Inserti também pode cuidar da infraestrutura e da sustentação técnica das automações.",
      cards: [
        {
          title: "Implantação e hospedagem",
          description: "Configuração do ambiente de automação, instalação, publicação e administração da infraestrutura necessária.",
        },
        {
          title: "Gestão de integrações",
          description: "Administração das conexões, credenciais, parâmetros e configurações dos serviços integrados.",
        },
        {
          title: "Monitoramento e tratamento de falhas",
          description: "Acompanhamento das execuções, identificação de erros e apoio na correção dos fluxos, conforme o serviço contratado.",
        },
        {
          title: "Evolução dos processos",
          description: "Ajustes, melhorias e criação de novas automações conforme os processos da empresa evoluem.",
        },
      ],
      support: "Sua empresa pode contratar um projeto pontual ou contar com a Inserti para hospedar, administrar e evoluir suas automações continuamente.",
    },
    differentialsSection: {
      eyebrow: "Por que escolher a Inserti?",
      title: "Automação com visão de negócio e conhecimento técnico.",
    },
    differentials: [
        {
          title: "Entendemos os processos",
          description: "Antes de automatizar, buscamos compreender como sua empresa trabalha e quais problemas precisam ser resolvidos.",
        },
        {
          title: "Integramos tecnologia e operação",
          description: "Nossa experiência com infraestrutura, bancos de dados, sistemas empresariais e desenvolvimento permite construir integrações além de simples conexões entre ferramentas.",
        },
        {
          title: "Soluções personalizadas",
          description: "Cada empresa possui regras e processos próprios. Desenvolvemos automações alinhadas à realidade da operação.",
        },
        {
          title: "Acompanhamento contínuo",
          description: "Podemos cuidar da implantação, hospedagem, monitoramento e evolução dos fluxos para que a automação acompanhe as mudanças do negócio.",
        },
      ],
    faqs: [
      {
        question: "O que é automação de processos empresariais?",
        answer: "É a utilização de tecnologias para executar tarefas e processos automaticamente, seguindo regras definidas, reduzindo atividades manuais e melhorando a integração entre pessoas e sistemas.",
      },
      {
        question: "O que é integração de sistemas?",
        answer: "É a conexão entre diferentes aplicações para permitir que elas compartilhem informações e executem processos de forma coordenada, evitando retrabalho e duplicidade de dados.",
      },
      {
        question: "Minha empresa precisa trocar de ERP para automatizar processos?",
        answer: "Não necessariamente. Em muitos casos, podemos integrar o ERP existente com outras ferramentas. A viabilidade depende dos recursos de integração disponibilizados pelo sistema.",
      },
      {
        question: "O que é n8n?",
        answer: "É uma plataforma de automação que permite criar fluxos de trabalho e conectar diferentes serviços, APIs, bancos de dados e aplicações, com recursos visuais e possibilidade de desenvolvimento personalizado.",
      },
      {
        question: "É possível integrar o WhatsApp ao meu CRM?",
        answer: "Sim. Podemos desenvolver integrações com a WhatsApp Business Platform e sistemas de CRM compatíveis para automatizar registros, notificações e processos de atendimento.",
      },
      {
        question: "É possível automatizar processos que utilizam planilhas?",
        answer: "Sim. Podemos integrar planilhas a sistemas, bancos de dados e outras ferramentas para automatizar consultas, atualizações, notificações e processamento de informações.",
      },
      {
        question: "A automação funciona sem intervenção humana?",
        answer: "Depende do processo. Algumas tarefas podem ser totalmente automatizadas, enquanto outras exigem validação ou aprovação de pessoas. O fluxo é desenhado de acordo com as regras do negócio.",
      },
      {
        question: "A Inserti hospeda as automações?",
        answer: "Sim. Podemos hospedar e administrar a infraestrutura necessária para executar as automações, conforme o projeto e o modelo de contratação.",
      },
      {
        question: "O que acontece quando uma automação apresenta erro?",
        answer: "Os fluxos podem ser configurados para registrar falhas, gerar notificações e permitir novas tentativas de execução quando tecnicamente apropriado. Também podemos prestar suporte e manutenção conforme o contrato.",
      },
      {
        question: "É possível utilizar inteligência artificial nas automações?",
        answer: "Sim. Podemos integrar modelos de IA e agentes inteligentes para interpretar informações, classificar solicitações, gerar respostas e executar etapas de processos, sempre considerando os limites e controles necessários.",
      },
    ],
    finalCta: {
      badge: "Automação de processos",
      title: "Quanto tempo sua empresa poderia economizar automatizando seus processos?",
      subtitle: "Elimine tarefas repetitivas, conecte seus sistemas e transforme processos manuais em fluxos de trabalho inteligentes. Converse com a Inserti e descubra o que pode ser automatizado na sua empresa.",
      button: "Quero automatizar meus processos",
      secondaryButton: "Falar com um especialista",
      primaryHref: "#form-lead",
    },
    seo: {
      metaTitle: "Automação de Processos e Integrações | Inserti",
      metaDescription: "Automatize processos empresariais, conecte ERPs, CRMs, WhatsApp e outros sistemas. Reduza tarefas manuais e aumente a produtividade com a Inserti.",
      keywords: ["Automação de processos empresariais", "integração de sistemas", "automação empresarial", "automação com n8n", "integração de APIs", "automação de tarefas", "workflows empresariais"],
    },
  },

  {
    slug: "agentes-ia-empresas",
    title: "Agentes de IA para empresas",
    groupName: "Soluções digitais e automação",
    groupDescription: "Desenvolvimento, automação e inteligência artificial",
    shortDescription: "Agentes de IA para automatizar atendimentos, vendas e processos, integrados a WhatsApp, CRM, ERP e sistemas da empresa.",
    badge: "Agentes de IA",
    icon: "Bot",
    hero: {
      eyebrow: "SOLUÇÕES DIGITAIS E AUTOMAÇÃO | INTELIGÊNCIA ARTIFICIAL",
      title: "Sua empresa pode fazer mais com inteligência artificial.",
      subtitle: "Imagine uma equipe que conta com agentes de IA capazes de atender clientes, consultar informações, organizar solicitações e executar tarefas diretamente nos sistemas da empresa.\n\nA Inserti desenvolve agentes inteligentes integrados aos processos e ferramentas do seu negócio, transformando a inteligência artificial em uma solução prática para atendimento, vendas e operações.",
      chips: ["Agentes de IA personalizados", "Integração com WhatsApp, CRM e ERP", "Automação de processos empresariais"],
      highlight: "Muito além de responder perguntas: agentes de IA que entendem solicitações, acessam informações e ajudam sua empresa a executar tarefas.",
      cta: { primary: "Quero implementar IA na minha empresa", secondary: "Falar com um especialista", mode: "form-whatsapp" },
      form: {
        title: "Sua empresa está pronta para trabalhar com agentes de IA?",
        description: "Conte qual processo deseja transformar com inteligência artificial.",
        messageLabel: "Qual área deseja automatizar? E já utiliza alguma solução de IA? (sim, não ou em avaliação)",
        button: "Quero implementar IA",
      },
      metrics: [],
    },
    problem: {
      eyebrow: "Sua empresa ainda depende de tarefas manuais?",
      title: "Muitas atividades poderiam ser realizadas de forma mais inteligente.",
      description: "Atender clientes, consultar informações, organizar solicitações e atualizar sistemas são atividades que consomem tempo das equipes. Com a inteligência artificial, parte desses processos pode ser executada de forma automatizada e integrada.",
      painPoints: [
        {
          title: "01. Atendimento limitado",
          description: "Sua equipe precisa responder repetidamente às mesmas perguntas, consultar informações e atender solicitações que poderiam ser resolvidas automaticamente.",
        },
        {
          title: "02. Oportunidades comerciais perdidas",
          description: "Leads chegam fora do horário comercial, demoram para receber atendimento ou não recebem o acompanhamento necessário.",
        },
        {
          title: "03. Informações espalhadas",
          description: "Os dados da empresa estão distribuídos entre documentos, sistemas, planilhas e plataformas diferentes, dificultando consultas e respostas rápidas.",
        },
        {
          title: "04. Processos dependentes de pessoas",
          description: "Atividades repetitivas e operacionais ocupam profissionais que poderiam estar concentrados em tarefas de maior valor para o negócio.",
        },
      ],
    },
    solution: {
      eyebrow: "Agentes de IA personalizados",
      hideCardBadge: true,
      title: "Inteligência artificial que entende, consulta e executa.",
      description: "A Inserti desenvolve agentes de IA conectados às informações e ferramentas da empresa. Eles podem interpretar solicitações, consultar bases de conhecimento, acionar integrações e executar tarefas conforme regras e permissões definidas.",
      features: [
        {
          title: "Identificação das oportunidades",
          description: "Entendemos os processos da empresa e identificamos onde a inteligência artificial pode gerar ganhos de produtividade, atendimento ou eficiência.",
        },
        {
          title: "Desenvolvimento do agente",
          description: "Definimos as instruções, conhecimentos, ferramentas e limites de atuação do agente, considerando o objetivo do projeto.",
        },
        {
          title: "Integração com os sistemas",
          description: "Conectamos o agente a canais de comunicação, bancos de dados, CRMs, ERPs e outras ferramentas compatíveis.",
        },
        {
          title: "Implantação e evolução",
          description: "Testamos os fluxos, colocamos o agente em operação e podemos acompanhar seu desempenho, ajustar comportamentos e ampliar suas capacidades.",
        },
      ],
    },
    benefits: [],
    scopeBeforeBanner: true,
    scopeSection: {
      eyebrow: "O que seus agentes de IA podem fazer?",
      title: "Inteligência artificial aplicada à realidade da sua empresa.",
    },
    includedScope: [
      {
        category: "Atendimento inteligente",
        intro: "Agentes capazes de interagir com clientes, compreender solicitações e fornecer informações.",
        items: [
          "Atendimento pelo WhatsApp.",
          "Respostas com base em informações da empresa.",
          "Consulta de produtos e serviços.",
          "Qualificação de solicitações.",
          "Encaminhamento para atendentes humanos.",
          "Atendimento integrado ao CRM.",
        ],
      },
      {
        category: "Agentes comerciais",
        intro: "Apoio inteligente às atividades de vendas e relacionamento.",
        items: [
          "Qualificação de leads.",
          "Identificação das necessidades dos clientes.",
          "Consulta de informações comerciais.",
          "Registro de interações no CRM.",
          "Apoio ao acompanhamento de oportunidades.",
          "Preparação de informações para vendedores.",
        ],
      },
      {
        category: "Agentes internos",
        intro: "Assistentes inteligentes para apoiar colaboradores e equipes.",
        items: [
          "Consulta a documentos e procedimentos.",
          "Busca de informações internas.",
          "Apoio a processos administrativos.",
          "Consulta a dados de sistemas.",
          "Organização de solicitações.",
          "Apoio a equipes de suporte e operações.",
        ],
      },
      {
        category: "Agentes operacionais",
        intro: "Agentes que interagem com sistemas e participam de processos empresariais.",
        items: [
          "Consulta e atualização de informações.",
          "Abertura e acompanhamento de solicitações.",
          "Execução de fluxos automatizados.",
          "Integração com APIs e bancos de dados.",
          "Geração de relatórios e resumos.",
          "Encaminhamento de tarefas para aprovação.",
        ],
      },
    ],
    techBanner: {
      eyebrow: "Tecnologia",
      brand: "IA + integrações",
      tag: "Agentes construídos sob medida",
      title: "Modelos de inteligência artificial conectados a ferramentas e dados empresariais.",
      text: "A Inserti utiliza tecnologias de inteligência artificial, automação e integração para construir agentes adaptados aos objetivos de cada projeto.",
      flowDiagram: {
        title: "Como funciona um agente de IA empresarial",
        input: { title: "Usuário ou cliente", description: "WhatsApp, site ou sistema interno" },
        center: { title: "Agente de IA", description: "Interpreta, consulta, decide e coordena tarefas" },
        branches: [
          { title: "Dados", description: "Documentos e bancos", icon: "data" },
          { title: "Sistemas", description: "CRM, ERP e APIs", icon: "systems" },
          { title: "Processos", description: "Automações e tarefas", icon: "processes" },
        ],
        result: { title: "Resultado", description: "Resposta, atualização, execução ou encaminhamento para aprovação humana" },
      },
      items: [
        {
          title: "Modelos de IA",
          description: "Utilização de modelos de linguagem para interpretar solicitações, compreender contextos e gerar respostas.",
        },
        {
          title: "Bases de conhecimento",
          description: "Conexão com documentos e informações empresariais para fundamentar as respostas dos agentes.",
        },
        {
          title: "Ferramentas e integrações",
          description: "APIs e funções que permitem consultar sistemas e executar ações autorizadas.",
        },
        {
          title: "Automação com n8n",
          description: "Orquestração de processos e integração entre diferentes serviços.",
        },
        {
          title: "Bancos de dados",
          description: "Acesso estruturado às informações necessárias para cada operação.",
        },
        {
          title: "Monitoramento e controle",
          description: "Acompanhamento das execuções, registros e resultados dos agentes, conforme a arquitetura implantada.",
        },
      ],
      footnote: "Não entregamos apenas um chatbot conectado a um modelo de IA. Projetamos agentes considerando os processos, os dados, as integrações e as regras de negócio da sua empresa.",
    },
    managementSection: {
      eyebrow: "Integração",
      title: "Seus agentes precisam conhecer e acessar as ferramentas da empresa.",
      description: "Um agente de IA se torna muito mais útil quando consegue trabalhar com informações reais e interagir com os sistemas que já fazem parte da operação.",
      cards: [
        {
          title: "WhatsApp e canais de atendimento",
          description: "Integração com WhatsApp Business Platform e outros canais compatíveis para atendimento, comunicação e relacionamento.",
        },
        {
          title: "CRM e sistemas comerciais",
          description: "Consulta e atualização de informações, registro de interações e apoio aos processos de vendas.",
        },
        {
          title: "ERP e sistemas empresariais",
          description: "Integração com sistemas de gestão para consultar informações operacionais, produtos, pedidos e outros dados disponibilizados.",
        },
        {
          title: "Documentos e bases de conhecimento",
          description: "Conexão com documentos, manuais, políticas, procedimentos e fontes internas para fornecer respostas fundamentadas nas informações da empresa.",
        },
      ],
      support: "A inteligência artificial não precisa trabalhar isolada. Desenvolvemos integrações para conectar os agentes às ferramentas e informações que fazem parte do seu negócio.",
    },
    comparisonSection: {
      eyebrow: "Segurança e governança",
      title: "Inteligência artificial precisa trabalhar dentro das regras da sua empresa.",
      description: "Agentes que acessam informações e executam tarefas precisam de permissões bem definidas. Por isso, planejamos a arquitetura considerando segurança, controle de acesso e supervisão.",
      cards: [
        {
          title: "Acesso controlado",
          description: "Definição das informações e ferramentas que cada agente pode consultar e utilizar.",
        },
        {
          title: "Limites de atuação",
          description: "Estabelecimento de regras para determinar o que o agente pode executar, quais ações são proibidas e quando deve solicitar intervenção humana.",
        },
        {
          title: "Supervisão humana",
          description: "Possibilidade de exigir aprovação de um colaborador antes de executar ações sensíveis ou que envolvam decisões importantes.",
        },
        {
          title: "Histórico e acompanhamento",
          description: "Registro das interações e execuções para facilitar a análise de resultados, identificação de falhas e melhoria dos agentes.",
        },
      ],
      support: "A IA deve ampliar a capacidade da equipe, não retirar o controle da empresa sobre seus processos e informações.",
    },
    differentialsSection: {
      eyebrow: "Por que escolher a Inserti?",
      title: "Inteligência artificial aplicada com conhecimento de tecnologia e negócios.",
    },
    differentials: [
        {
          title: "Entendemos a operação empresarial",
          description: "Nossa experiência com infraestrutura, sistemas, bancos de dados e processos de TI permite desenvolver agentes conectados à realidade das empresas.",
        },
        {
          title: "Soluções personalizadas",
          description: "Cada agente é construído de acordo com o objetivo, as informações disponíveis e as regras de negócio da organização.",
        },
        {
          title: "Integração além do chatbot",
          description: "Conectamos inteligência artificial a sistemas, APIs, bancos de dados e ferramentas empresariais para permitir que os agentes participem de processos reais.",
        },
        {
          title: "Um parceiro para todo o ciclo",
          description: "Podemos cuidar do desenvolvimento, integrações, implantação, hospedagem, monitoramento e evolução dos agentes.",
        },
      ],
    faqs: [
      {
        question: "O que é um agente de IA?",
        answer: "É um sistema baseado em inteligência artificial que consegue interpretar solicitações, utilizar informações e ferramentas e executar tarefas dentro de objetivos e limites definidos.",
      },
      {
        question: "Qual é a diferença entre um chatbot e um agente de IA?",
        answer: "Um chatbot tradicional geralmente segue respostas e fluxos mais previsíveis. Um agente de IA pode interpretar contextos, consultar diferentes fontes de informação, utilizar ferramentas e executar etapas de processos de acordo com as instruções e permissões configuradas.",
      },
      {
        question: "Um agente de IA pode atender clientes pelo WhatsApp?",
        answer: "Sim. Podemos integrar agentes de IA ao WhatsApp Business Platform para atender solicitações, consultar informações e encaminhar conversas para atendentes humanos quando necessário.",
      },
      {
        question: "Um agente consegue acessar meu ERP ou CRM?",
        answer: "Sim, desde que existam interfaces de integração compatíveis, como APIs, conectores ou outros mecanismos tecnicamente viáveis. As permissões de acesso são definidas de acordo com as necessidades e regras da empresa.",
      },
      {
        question: "É possível criar um agente treinado com os documentos da empresa?",
        answer: "Sim. Podemos conectar o agente a bases de conhecimento contendo documentos, manuais, políticas, procedimentos e outras informações empresariais para fundamentar suas respostas.",
      },
      {
        question: "Um agente pode executar tarefas sozinho?",
        answer: "Sim. Conforme a arquitetura, ele pode consultar informações, atualizar registros, iniciar fluxos e executar ações autorizadas. Operações sensíveis podem exigir aprovação humana.",
      },
      {
        question: "A inteligência artificial pode cometer erros?",
        answer: "Sim. Modelos de IA podem interpretar incorretamente informações ou produzir respostas inadequadas. Por isso, utilizamos fontes de conhecimento, validações, limites de atuação e supervisão humana de acordo com o risco do processo.",
      },
      {
        question: "Minha empresa precisa ter uma equipe de desenvolvimento?",
        answer: "Não. A Inserti pode cuidar do projeto, desenvolvimento, integrações e infraestrutura, conforme o modelo de contratação.",
      },
      {
        question: "Quanto custa desenvolver um agente de IA?",
        answer: "O investimento depende da complexidade, dos modelos utilizados, do volume de interações, das integrações e dos processos envolvidos. Após entender a necessidade, elaboramos uma proposta adequada.",
      },
      {
        question: "A Inserti oferece hospedagem e manutenção dos agentes?",
        answer: "Sim. Podemos hospedar e administrar a infraestrutura necessária, acompanhar o funcionamento e evoluir os agentes conforme o escopo contratado.",
      },
    ],
    finalCta: {
      badge: "Agentes de IA",
      title: "Sua empresa está pronta para trabalhar com inteligência artificial?",
      subtitle: "Transforme processos, melhore o atendimento e conecte a inteligência artificial às operações da sua empresa. A Inserti desenvolve agentes de IA personalizados para ajudar seu negócio a trabalhar de forma mais inteligente.",
      button: "Quero implementar agentes de IA",
      secondaryButton: "Falar com um especialista",
      primaryHref: "#form-lead",
    },
    seo: {
      metaTitle: "Agentes de IA para Empresas | Automação Inteligente | Inserti",
      metaDescription: "Desenvolva agentes de IA para automatizar atendimentos, vendas e processos empresariais. Integração com WhatsApp, CRM, ERP e sistemas pela Inserti.",
      keywords: ["Agentes de IA para empresas", "inteligência artificial empresarial", "agentes inteligentes", "agente de IA para atendimento", "automação com inteligência artificial", "IA para empresas", "agentes de IA WhatsApp"],
    },
  },

  {
    slug: "infraestrutura-hospedagem-aplicacoes",
    title: "Infraestrutura e hospedagem de aplicações",
    groupName: "Soluções digitais e automação",
    groupDescription: "Desenvolvimento, automação e inteligência artificial",
    shortDescription: "Hospedagem de aplicações empresariais com infraestrutura gerenciada, servidores, bancos de dados, backup, monitoramento e suporte especializado.",
    badge: "Infraestrutura gerenciada",
    icon: "Server",
    hero: {
      eyebrow: "SOLUÇÕES DIGITAIS E AUTOMAÇÃO | INFRAESTRUTURA",
      title: "Sua aplicação precisa de uma infraestrutura tão confiável quanto o seu negócio.",
      subtitle: "Hospedamos e administramos aplicações empresariais em ambientes preparados para oferecer desempenho, segurança, disponibilidade e suporte especializado.",
      chips: ["Infraestrutura dimensionada para sua aplicação", "Administração de servidores e bancos de dados", "Backup, monitoramento e segurança", "Suporte técnico especializado"],
      highlight: "",
      cta: { primary: "Converse com um especialista", secondary: "", mode: "form-whatsapp" },
      form: {
        title: "Converse com um especialista",
        description: "Conte um pouco sobre sua aplicação e descubra a infraestrutura ideal para mantê-la funcionando.",
        messageLabel: "Conte um pouco sobre sua aplicação (opcional)",
        button: "Converse com um especialista",
      },
      metrics: [],
    },
    problem: {
      eyebrow: "Problemas e dores",
      title: "Sua aplicação não pode depender de uma infraestrutura improvisada.",
      description: "Quando a infraestrutura não acompanha as necessidades do sistema, os problemas aparecem na operação e afetam diretamente o negócio.",
      painPoints: [
        {
          title: "01. Lentidão e instabilidade",
          description: "Aplicações lentas, falhas recorrentes e servidores sem recursos suficientes comprometem a experiência dos usuários e a produtividade da equipe.",
        },
        {
          title: "02. Falta de segurança",
          description: "Servidores desatualizados, acessos mal configurados e ausência de políticas de proteção aumentam os riscos para aplicações e dados empresariais.",
        },
        {
          title: "03. Ausência de monitoramento e backup",
          description: "Sem acompanhamento da infraestrutura e políticas adequadas de backup, problemas podem passar despercebidos até provocarem uma interrupção ou perda de dados.",
        },
        {
          title: "04. Complexidade de administração",
          description: "Manter servidores, sistemas operacionais, bancos de dados e serviços funcionando exige conhecimento técnico e acompanhamento contínuo.",
        },
      ],
    },
    solution: {
      eyebrow: "Nossa solução",
      hideCardBadge: true,
      title: "A infraestrutura da sua aplicação sob gestão especializada.",
      description: "A Inserti estrutura e administra o ambiente tecnológico necessário para executar suas aplicações, cuidando dos componentes de infraestrutura para que sua empresa possa focar no negócio.",
      features: [
        {
          title: "Entendimento e dimensionamento",
          description: "Analisamos a aplicação, seus requisitos técnicos, volume de acessos, consumo de recursos e necessidades de disponibilidade.",
        },
        {
          title: "Implantação da infraestrutura",
          description: "Preparamos o ambiente com recursos computacionais, sistema operacional, banco de dados, rede e configurações necessárias para a aplicação.",
        },
        {
          title: "Proteção e monitoramento",
          description: "Implementamos medidas de segurança, políticas de backup e acompanhamento dos recursos e serviços contratados.",
        },
        {
          title: "Administração e suporte",
          description: "Acompanhamos o ambiente, realizamos atividades de administração e prestamos suporte técnico para manter a infraestrutura adequada às necessidades da aplicação.",
        },
      ],
    },
    benefitsSection: {
      eyebrow: "Benefícios",
      title: "Mais tranquilidade para operar. Mais estrutura para crescer.",
    },
    benefits: [
        {
          title: "Desempenho adequado",
          description: "Recursos dimensionados de acordo com as características e necessidades da aplicação.",
        },
        {
          title: "Segurança da infraestrutura",
          description: "Configurações, controles de acesso e atualizações para reduzir riscos no ambiente hospedado.",
        },
        {
          title: "Proteção dos dados",
          description: "Políticas de backup e estratégias de recuperação conforme a solução contratada.",
        },
        {
          title: "Monitoramento",
          description: "Acompanhamento dos recursos e serviços de infraestrutura para identificar situações que possam comprometer a operação.",
        },
        {
          title: "Suporte especializado",
          description: "Conte com profissionais que conhecem servidores, sistemas operacionais, redes e bancos de dados.",
        },
        {
          title: "Escalabilidade",
          description: "Possibilidade de ajustar os recursos computacionais conforme a aplicação evolui e a demanda aumenta.",
        },
      ],
    objectivesSection: {
      eyebrow: "O que podemos hospedar",
      title: "Infraestrutura preparada para diferentes aplicações empresariais.",
      description: "Cada aplicação possui requisitos próprios. Estruturamos o ambiente de acordo com sua arquitetura, tecnologia e necessidades operacionais.",
      cards: [
        {
          title: "Sistemas empresariais e ERPs",
          description: "Ambientes para sistemas de gestão, aplicações comerciais e plataformas utilizadas na operação da empresa.",
        },
        {
          title: "Aplicações web e plataformas SaaS",
          description: "Hospedagem de aplicações web, portais, sistemas personalizados e plataformas digitais.",
        },
        {
          title: "Bancos de dados",
          description: "Ambientes para bancos de dados como PostgreSQL e outros mecanismos compatíveis com a arquitetura da aplicação.",
        },
        {
          title: "APIs e serviços de integração",
          description: "Infraestrutura para APIs, serviços de backend, integrações entre sistemas e processos automatizados.",
        },
        {
          title: "Aplicações em containers",
          description: "Ambientes com Docker e tecnologias relacionadas, conforme os requisitos do projeto.",
        },
        {
          title: "Serviços e aplicações Windows/Linux",
          description: "Hospedagem de aplicações que dependem de servidores Windows ou Linux e seus respectivos serviços.",
        },
      ],
    },
    scopeBeforeBanner: true,
    scopeSection: {
      eyebrow: "Gestão da infraestrutura",
      title: "Não entregamos apenas um servidor. Cuidamos do ambiente.",
      description: "A Inserti pode assumir diferentes camadas da infraestrutura, conforme a necessidade e o modelo de contratação.",
      note: "Os serviços são definidos conforme a arquitetura e o escopo contratado. A administração do código-fonte e da aplicação em si pode permanecer com o cliente ou fornecedor responsável pelo desenvolvimento.",
    },
    includedScope: [
      {
        category: "Servidores e sistemas",
        items: [
          "Provisionamento e configuração de servidores.",
          "Administração de sistemas operacionais Windows e Linux.",
          "Atualizações e manutenção da infraestrutura.",
        ],
      },
      {
        category: "Dados e conectividade",
        items: [
          "Instalação e administração de bancos de dados.",
          "Configuração de rede e conectividade.",
          "Gestão de acessos e permissões.",
        ],
      },
      {
        category: "Proteção e suporte",
        items: [
          "Backup e estratégias de recuperação.",
          "Monitoramento de recursos e serviços.",
          "Suporte técnico e troubleshooting.",
        ],
      },
    ],
    techBanner: {
      eyebrow: "Infraestrutura e tecnologias",
      brand: "Infraestrutura",
      tag: "Gerenciada",
      title: "Tecnologia adequada para cada necessidade.",
      text: "Trabalhamos com diferentes tecnologias de infraestrutura e administração de ambientes, escolhendo a arquitetura mais adequada para cada aplicação.",
      items: [
        {
          title: "Virtualização",
          description: "Proxmox e Hyper-V.",
        },
        {
          title: "Sistemas operacionais",
          description: "Windows Server e Linux.",
        },
        {
          title: "Bancos de dados",
          description: "PostgreSQL e outros compatíveis com o projeto.",
        },
        {
          title: "Containers",
          description: "Docker.",
        },
        {
          title: "Monitoramento",
          description: "Ferramentas especializadas de infraestrutura.",
        },
        {
          title: "Backup",
          description: "Soluções empresariais de proteção e recuperação de dados.",
        },
      ],
      footnote: "A arquitetura é definida de acordo com os requisitos técnicos, desempenho esperado, segurança e orçamento do projeto.",
    },
    differentialsSection: {
      eyebrow: "Diferenciais Inserti",
      title: "Infraestrutura, segurança e suporte em um só parceiro.",
    },
    differentials: [
        {
          title: "Visão integrada de TI",
          description: "Consideramos a infraestrutura como parte de um ambiente maior, conectando servidores, redes, segurança, backup e aplicações.",
        },
        {
          title: "Gestão especializada",
          description: "Profissionais com experiência em ambientes empresariais, virtualização, sistemas operacionais e bancos de dados.",
        },
        {
          title: "Soluções sob medida",
          description: "Nada de dimensionamento genérico. A infraestrutura é planejada conforme a necessidade de cada aplicação.",
        },
        {
          title: "Um parceiro para evoluir",
          description: "Acompanhamos o crescimento do ambiente e podemos apoiar a evolução da infraestrutura conforme novas demandas surgem.",
        },
      ],
    faqs: [
      {
        question: "Qual a diferença entre hospedagem de aplicações e Cloud Corporativa?",
        answer: "A Cloud Corporativa disponibiliza recursos computacionais, como processamento, memória e armazenamento. Na hospedagem de aplicações, a Inserti pode assumir também a preparação, configuração e administração das camadas necessárias para executar o sistema. O escopo depende do modelo contratado.",
      },
      {
        question: "Vocês hospedam sistemas desenvolvidos por outras empresas?",
        answer: "Sim. Podemos avaliar e hospedar aplicações desenvolvidas por terceiros, desde que seus requisitos técnicos sejam compatíveis com a infraestrutura proposta e que as responsabilidades de suporte estejam definidas.",
      },
      {
        question: "Posso hospedar meu ERP ou sistema de gestão?",
        answer: "Sim. Avaliamos os requisitos do sistema, banco de dados, quantidade de usuários, integrações e recursos necessários para dimensionar o ambiente.",
      },
      {
        question: "A Inserti também administra o banco de dados?",
        answer: "Sim. Podemos incluir instalação, configuração, administração e acompanhamento de bancos de dados, conforme a tecnologia e o escopo contratado.",
      },
      {
        question: "Vocês fazem backup das aplicações?",
        answer: "Podemos implementar políticas de backup para os dados e componentes contemplados no projeto. A cobertura, retenção e periodicidade são definidas conforme a necessidade e o contrato.",
      },
      {
        question: "Posso manter o desenvolvimento com minha própria equipe?",
        answer: "Sim. Sua equipe ou fornecedor pode continuar responsável pelo desenvolvimento, enquanto a Inserti cuida da infraestrutura. As responsabilidades de implantação e suporte da aplicação devem ser alinhadas previamente.",
      },
      {
        question: "É possível aumentar os recursos conforme a aplicação cresce?",
        answer: "Sim. Podemos avaliar a necessidade de expansão de processamento, memória, armazenamento e outros recursos, conforme a arquitetura e a capacidade disponível.",
      },
      {
        question: "Como é definido o valor da hospedagem?",
        answer: "O investimento depende dos recursos necessários, arquitetura, tecnologias utilizadas, volume de armazenamento, serviços de administração, backup, monitoramento e nível de suporte contratado.",
      },
    ],
    finalCta: {
      badge: "Infraestrutura e hospedagem",
      title: "Sua aplicação merece uma infraestrutura preparada para crescer.",
      subtitle: "Conte com a Inserti para estruturar, hospedar e administrar o ambiente tecnológico das suas aplicações empresariais. Vamos entender sua aplicação e apresentar uma proposta adequada à sua necessidade.",
      button: "Solicitar uma avaliação de infraestrutura",
      primaryHref: "#form-lead",
    },
    seo: {
      metaTitle: "Infraestrutura e Hospedagem de Aplicações | Inserti",
      metaDescription: "Hospedagem de aplicações empresariais com infraestrutura gerenciada, servidores, bancos de dados, backup, monitoramento e suporte especializado.",
      keywords: ["Hospedagem de aplicações empresariais", "infraestrutura para aplicações", "hospedagem de sistemas empresariais", "hospedagem de servidores", "hospedagem de aplicações web", "infraestrutura gerenciada"],
    },
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((s) => s.slug === slug);
}
