export interface TeamMember {
  name: string;
  role: string;
  certifications: string[];
  bio: string;
}

export const aboutData = {
  stats: {
    yearsInMarket: "14+",
    yearsDescription: "Anos de solidez e inovação contínua",
    certifiedEngineers: "100%",
    certifiedDescription: "Equipe técnica com certificações globais",
    supportAvailability: "24x7x365",
    supportDescription: "NOC e SOC operando ininterruptamente",
    uptimeTarget: "99.98%",
    uptimeDescription: "Disponibilidade média sustentada para clientes",
    activeProtectedHosts: "8.500+",
    hostsDescription: "Servidores e endpoints sob gestão proativa",
  },
  history: `
Fundada há mais de 14 anos, a Inserti nasceu da convicção de que a tecnologia de uma empresa nunca deveria ser uma fonte de estresse, paradas inesperadas ou custos imprevisíveis. Em um mercado saturado pelo modelo arcaico de "quebrou-consertou" (break-fix), nós nos posicionamos pioneiramente como um verdadeiro Managed Service Provider (MSP) e Managed Security Service Provider (MSSP).

Ao longo de nossa trajetória, acompanhamos e lideramos as maiores transformações do setor: desde a consolidação de datacenters locais com virtualização VMware e Proxmox, a revolução do trabalho em nuvem com Microsoft 365 e Azure, até a escalada das ameaças cibernéticas que exigiram a criação de nosso SOC 24x7 próprio.

Hoje, a Inserti é a parceira de confiança de hospitais, operadoras de logística, escritórios jurídicos de renome, instituições financeiras e indústrias que exigem padrão internacional de engenharia, governança transparente e disponibilidade contínua.
  `,
  mission: "Garantir a continuidade, cibersegurança e eficiência tecnológica de empresas em crescimento, transformando a TI em uma alavanca estratégica de valor e tranquilidade operacional.",
  vision: "Ser a empresa de MSP e MSSP mais respeitada e recomendada do país pela profundidade técnica, ética exemplar e atendimento consultivo humanizado.",
  values: [
    {
      title: "Excelência Técnica Sem Atalhos",
      description: "Seguimos rigorosamente as melhores práticas internacionais (ITIL, CIS Controls, ISO 27001). Não improvisamos com a infraestrutura dos nossos clientes.",
    },
    {
      title: "Transparência Radical",
      description: "Sem pegadinhas contratuais, sem tecnicalidades confusas. Relatórios claros, dashboards em tempo real e comunicação honesta em todos os momentos.",
    },
    {
      title: "Cultura Preditiva",
      description: "Nossa meta é resolver o problema antes que o usuário final perceba. Monitoramento ativo, telemetria contínua e automação de correções.",
    },
    {
      title: "Parceria Estratégica de Longo Prazo",
      description: "Não somos apenas fornecedores de chamados. Sentamos à mesa da diretoria como conselheiros tecnológicos para ajudar o seu negócio a prosperar.",
    },
    {
      title: "Segurança como Princípio Vital",
      description: "A confidencialidade, integridade e disponibilidade dos dados sob nossa guarda são tratados com o mais alto rigor ético e legal.",
    },
  ],
  methodology: [
    {
      step: "01",
      title: "Assessment & Diagnóstico Profundo",
      description: "Realizamos uma auditoria minuciosa de toda a infraestrutura física, lógica, contratos e vulnerabilidades existentes.",
    },
    {
      step: "02",
      title: "Estabilização & Hardening",
      description: "Fechamos brechas críticas de segurança imediatas, eliminamos pontos únicos de falha e documentamos o ambiente.",
    },
    {
      step: "03",
      title: "Operação NOC & SOC 24x7",
      description: "Ativação de sensores inteligentes, monitoramento ininterrupto e central de atendimento ágil com SLA contratual.",
    },
    {
      step: "04",
      title: "Governança Contínua (vCIO)",
      description: "Reuniões periódicas com a diretoria para planejamento orçamentário anual, novas tecnologias e capacity planning.",
    },
  ],
  leadership: [
    {
      name: "Rafael Barbosa",
      role: "Diretor de Engenharia & Arquitetura",
      certifications: ["Fortinet NSE 7", "Proxmox Certified", "PostgreSQL Specialist"],
      bio: "Mais de 16 anos liderando projetos de missão crítica em infraestrutura corporativa, segurança de borda e alta disponibilidade para grandes operações.",
    },
    {
      name: "Equipe de Operações NOC & SOC",
      role: "Analistas e Engenheiros de Suporte 24x7",
      certifications: ["Microsoft M365 Enterprise", "Zabbix Certified Specialist", "CompTIA Security+", "ITIL v4"],
      bio: "Corpo técnico multidisciplinar dedicado ao monitoramento preditivo de alertas, triagem de incidentes e sustentação contínua dos ambientes clientes.",
    },
    {
      name: "Consultoria de Governança & DPO",
      role: "Especialistas em LGPD e Compliance",
      certifications: ["EXIN DPO", "ISO 27001 Lead Implementer", "CIS Controls Specialist"],
      bio: "Orientação técnica e jurídica para adequação contínua a normas regulatórias, proteção de privacidade e auditorias de cibersegurança.",
    },
  ],
  differentials: [
    {
      title: "14+ Anos de Mercado Consolidado",
      description: "Estabilidade e solidez comprovadas. Não somos aventureiros: temos histórico de entrega em centenas de empresas com operações 24x7.",
    },
    {
      title: "Engenharia Multidisciplinar Própria",
      description: "Especialistas certificados em Fortinet, Microsoft, VMware, Proxmox, MikroTik e bancos de dados trabalhando integrados.",
    },
    {
      title: "Atendimento Consultivo e Humanizado",
      description: "Você fala diretamente com quem resolve. Nada de robôs engessados ou atendentes desinteressados: nossa cultura é focada no seu sucesso.",
    },
    {
      title: "SLA Contratual Rigoroso",
      description: "Compromisso formal em contrato com tempos de resposta a partir de 15 minutos para emergências críticas de operação.",
    },
    {
      title: "Padrão Internacional de Entrega",
      description: "Processos alinhados aos frameworks globais de governança (ITIL) e cibersegurança (CIS Controls, NIST).",
    },
    {
      title: "Sem Amarras ou Multas Abusivas",
      description: "Conquistamos nossos clientes pela qualidade do serviço todos os dias, não por contratos punitivos.",
    },
  ],
};

