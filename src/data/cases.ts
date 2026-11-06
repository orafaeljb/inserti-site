export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  segment: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    label: string;
  }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
  servicesUsed: string[];
  technologies: string[];
}

export const casesData: CaseStudy[] = [
  {
    slug: "grupo-hospitalar-disponibilidade-critica",
    title: "99.99% de Disponibilidade e Blindagem de Borda para Grupo Hospitalar",
    client: "Rede Hospitalar São Lucas",
    segment: "Saúde & Farmacêutica",
    challenge: "Com mais de 450 leitos e 1.200 colaboradores, o hospital sofria com lentidões crônicas no prontuário eletrônico Tasy e paradas de link de internet que bloqueavam a recepção e o pronto-socorro. A infraestrutura de firewall anterior não suportava a inspeção profunda de pacotes e gerava pontos únicos de falha.",
    solution: "A Inserti projetou e executou a migração para um cluster de Firewall Fortinet FortiGate em Alta Disponibilidade (HA Ativo-Passivo) com SD-WAN integrado gerenciando 3 links de fibra óptica de operadoras distintas. Adicionalmente, ativou o monitoramento NOC 24x7 com Zabbix e telemetria preditiva de switches hospitalares.",
    results: [
      { metric: "99.99%", label: "Uptime sustentado de prontuário" },
      { metric: "Zero", label: "Horas de parada não programada em 18 meses" },
      { metric: "<15 ms", label: "Latência estável em toda a rede interna" },
    ],
    quote: {
      text: "No ambiente hospitalar, minutos sem sistema significam riscos à vida. A equipe da Inserti assumiu a responsabilidade com uma postura cirúrgica e nos deu estabilidade absoluta.",
      author: "Carlos Eduardo Mendes",
      role: "Diretor de TI e Governança Hospitalar",
    },
    servicesUsed: ["Firewall Fortinet", "MSP", "Monitoramento", "Infraestrutura de Redes"],
    technologies: ["FortiGate NGFW", "Zabbix Enterprise", "Dell PowerSwitch", "FortiGuard"],
  },
  {
    slug: "fintech-seguranca-soc-24x7",
    title: "SOC 24x7 e Conformidade Regulatória Rigorosa para FinTech de Investimentos",
    client: "FinSecure Investimentos",
    segment: "Mercado Financeiro & FinTech",
    challenge: "Para obter licenças regulatórias e homologações com bancos parceiros, a corretora precisava comprovar monitoramento contínuo de segurança, capacidade de resposta a incidentes em menos de 15 minutos e trilha de auditoria inviolável, sem o custo inviável de montar um SOC interno de 12 analistas.",
    solution: "Implementação da suíte MSSP da Inserti com SOC 24x7, agregando Fortinet FortiGate e FortiEDR com XDR em 100% dos notebooks dos operadores de mercado, associado a ingestão de logs centralizada e automação de contenção de máquinas suspeitas.",
    results: [
      { metric: "<3 min", label: "Tempo médio de contenção de ameaças" },
      { metric: "100%", label: "Aprovação em auditorias de grandes bancos" },
      { metric: "-65%", label: "Economia comparado a um SOC interno" },
    ],
    quote: {
      text: "A auditoria externa dos nossos investidores institucionais classificou nosso ambiente entre os mais seguros do setor. A Inserti é parte fundamental dessa conquista.",
      author: "Renata Vasconcellos",
      role: "CISO (Chief Information Security Officer)",
    },
    servicesUsed: ["MSSP", "Firewall Fortinet", "LGPD", "Consultoria"],
    technologies: ["FortiGate NGFW", "FortiEDR", "FortiAnalyzer", "Wazuh SIEM"],
  },
  {
    slug: "logistica-migracao-proxmox-sem-downtime",
    title: "Migração de Datacenter Legado para Proxmox VE com Economia de 38% para Operadora de Logística",
    client: "LogTrans Logística Integrada",
    segment: "Logística & Transporte Rodoviário",
    challenge: "Com o aumento das licenças de virtualização do hipervisor legado e servidores físicos atingindo fim de vida útil, a operadora com 8 filiais precisava renovar o parque computacional sem estourar o orçamento e sem parar as emissões de CTe e romaneios de carga que rodam 24x7.",
    solution: "A Inserti arquitetou um cluster hiperconvergente Proxmox VE com storage distribuído Ceph e rede de 25GbE redundante. A migração das 42 máquinas virtuais foi realizada a quente (Live Migration) em janelas noturnas coordenadas sem interrupção para os motoristas e armazéns.",
    results: [
      { metric: "-38%", label: "Redução em custos operacionais e de licença" },
      { metric: "42 VMs", label: "Migradas com 100% de integridade" },
      { metric: "Zero", label: "Interrupções nas emissões fiscais" },
    ],
    quote: {
      text: "Tínhamos receio de migrar do VMware tradicional, mas a engenharia da Inserti executou o projeto com tanta precisão técnica que a operação sequer notou a virada dos servidores.",
      author: "Marcelo Albuquerque",
      role: "Diretor de Operações e Logística",
    },
    servicesUsed: ["Virtualização", "Infraestrutura de Redes", "Backup", "Disaster Recovery"],
    technologies: ["Proxmox VE Enterprise", "Ceph Storage", "MikroTik 100G", "TrueNAS"],
  },
  {
    slug: "escritorio-advocacia-backup-imutavel-lgpd",
    title: "Backup Imutável e Governança de Dados para Escritório Jurídico Multidisciplinar",
    client: "Silveira & Associados Advocacia",
    segment: "Jurídico & Compliance",
    challenge: "Escritório de advocacia com mais de 30.000 processos ativos sofria com receio constante de ransomware em arquivos digitais e precisava atender aos rigorosos requisitos de confidencialidade de clientes corporativos e diretrizes da LGPD.",
    solution: "Implantação de Backup Corporativo Imutável com Acronis Cyber Protect integrado a repositório em nuvem com retenção WORM (Write Once, Read Many). Migração integral de e-mails e arquivos para Microsoft 365 com políticas de DLP e autenticação condicional no Entra ID.",
    results: [
      { metric: "100%", label: "Conformidade LGPD e segurança de sigilo" },
      { metric: "30TB+", label: "De dados protegidos com retenção imutável" },
      { metric: "<10 min", label: "Restauração pontual de qualquer documento" },
    ],
    quote: {
      text: "A segurança jurídica que entregamos aos nossos clientes agora está respaldada por uma fortaleza tecnológica. Dormimos tranquilos sabendo que nossos dados são inatacáveis.",
      author: "Dra. Patrícia Silveira",
      role: "Sócia-Diretora",
    },
    servicesUsed: ["Backup", "Microsoft 365", "LGPD", "Outsourcing de TI"],
    technologies: ["Acronis Cyber Protect", "Microsoft 365 Business Premium", "Entra ID", "Microsoft Purview"],
  },
];

