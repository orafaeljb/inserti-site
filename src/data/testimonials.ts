export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  segment: string;
  content: string;
  metric: string;
  metricLabel: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Carlos Eduardo Mendes",
    role: "Diretor de Tecnologia (CTO)",
    company: "Grupo Hospitalar São Lucas",
    segment: "Saúde & Farmacêutica",
    content: "A governança e o monitoramento 24x7 da Inserti mudaram o patamar da nossa TI. Tínhamos paradas recorrentes no prontuário eletrônico e vulnerabilidades na borda. Com a implementação do Firewall Fortinet em HA e a gestão proativa de MSP, zeramos incidentes de indisponibilidade.",
    metric: "99.99%",
    metricLabel: "Disponibilidade sustentada",
  },
  {
    id: "2",
    name: "Renata Vasconcellos",
    role: "Head de Segurança da Informação (CISO)",
    company: "FinSecure Investimentos",
    segment: "Serviços Financeiros",
    content: "O SOC e MSSP da Inserti entregou a maturidade em cibersegurança que as auditorias do Banco Central exigiam. O tempo de resposta deles é excepcional: qualquer anomalia é mitigada em minutos antes de virar um incidente.",
    metric: "< 12 min",
    metricLabel: "Tempo de resposta a incidentes críticos",
  },
  {
    id: "3",
    name: "Marcelo Albuquerque",
    role: "Diretor de Operações",
    company: "LogTrans Logística Integrada",
    segment: "Logística & Transporte",
    content: "Operamos 24 horas por dia em 8 centros de distribuição no Brasil. A Inserti migrou toda a nossa infraestrutura para nuvem híbrida com Proxmox e implementou SD-WAN com tolerância a falhas. Reduzimos custos de telecom e licenciamento em mais de 35%.",
    metric: "35%",
    metricLabel: "Redução em custos operacionais",
  },
  {
    id: "4",
    name: "Dra. Patrícia Silveira",
    role: "Sócia-Diretora",
    company: "Silveira & Associados Advocacia",
    segment: "Jurídico & Compliance",
    content: "Nosso escritório lida com dados de sigilo extremo e auditoria contínua de clientes multinacionais. O trabalho de adequação técnica à LGPD e o backup imutável com a Inserti nos deu a tranquilidade de focar 100% no nosso core business.",
    metric: "100%",
    metricLabel: "Conformidade LGPD & ISO 27001",
  },
];

