export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Segurança" | "Firewall" | "Microsoft" | "Cloud" | "Backup" | "Redes" | "PostgreSQL" | "Infraestrutura";
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "como-proteger-sua-empresa-contra-ransomware-guia-pratico",
    title: "Como Proteger sua Empresa Contra Ransomware: Estratégia de Defesa em Profundidade",
    excerpt: "Conheça as camadas de proteção indispensáveis que impedem o sequestro de dados e garantem a sobrevivência da operação corporativa.",
    category: "Segurança",
    author: {
      name: "Engenharia de Segurança Inserti",
      role: "Equipe de Cibersegurança & SOC",
    },
    publishedAt: "24 de Outubro de 2026",
    readTime: "7 min de leitura",
    tags: ["Ransomware", "Cibersegurança", "SOC", "MSSP", "EDR"],
    content: `
O ransomware deixou de ser um simples vírus que contamina arquivos isolados para se tornar uma indústria bilionária e profissionalizada de cibercrime corporativo (Ransomware-as-a-Service). Hoje, grupos de invasores passam semanas dentro da rede corporativa mapeando servidores, identificando os repositórios de backup e exfiltrando dados antes de criptografar as bases de dados.

Para empresas que não podem tolerar interrupções, apoiar-se apenas em um antivírus tradicional é uma ilusão perigosa. A única resposta viável é a adoção de uma arquitetura de Defesa em Profundidade.

### 1. A Primeira Barreira: Borda Inspecionada e Zero Trust
A maioria dos ataques inicia por conexões VPN antigas sem duplo fator ou credenciais vazadas na Dark Web.
* **MFA Obrigatório:** Nenhuma porta de acesso remoto ou e-mail corporativo deve funcionar apenas com usuário e senha.
* **Inspeção SSL no Firewall:** Mais de 85% do malware trafega criptografado em HTTPS. Se seu firewall não inspeciona esse tráfego, as ameaças entram livremente.
* **ZTNA (Zero Trust Network Access):** Conecte usuários apenas às aplicações estritamente autorizadas, nunca à rede inteira.

### 2. A Camada de Endpoint: XDR e Detecção Comportamental
O antivírus de assinatura é ineficaz contra ataques zero-day. Soluções como o FortiEDR atuam no comportamento:
* Se um processo tentar criptografar 50 arquivos por segundo, o processo é encerrado imediatamente.
* O arquivo original é restaurado automaticamente através de cópias em cache de memória (Rollback).
* O dispositivo é isolado da rede local para evitar contaminação lateral de servidores.

### 3. A Última Linha de Defesa: Backup Imutável
Se tudo falhar, a empresa só não pagará resgate se possuir um backup imutável:
* Repositório em nuvem com retenção WORM ativada (Write Once, Read Many).
* Nenhum usuário administrativo consegue apagar ou sobrescrever os backups antes do término do período configurado.
* Testes rotineiros de recuperação que validam se os arquivos sobem em minutos.

A segurança corporativa não é um produto que se compra em caixa fechada, mas um processo diário de monitoramento, resposta a incidentes e governança técnica.
    `,
  },
  {
    slug: "por-que-sua-empresa-deve-adotar-o-microsoft-entra-id-e-intune",
    title: "Por que sua Empresa Deve Adotar Microsoft Entra ID e Intune Imediatamente",
    excerpt: "Como transformar a gestão de identidade e dispositivos móveis na espinha dorsal da segurança moderna da sua organização.",
    category: "Microsoft",
    author: {
      name: "Engenharia de Nuvem Inserti",
      role: "Especialistas Microsoft 365 & Cloud",
    },
    publishedAt: "12 de Outubro de 2026",
    readTime: "6 min de leitura",
    tags: ["Microsoft 365", "Entra ID", "Intune", "MDM", "Acesso Condicional"],
    content: `
O perímetro tradicional de rede desapareceu. Com colaboradores alternando entre escritório, home office, viagens e celulares particulares, prender a segurança aos muros físicos da empresa já não funciona.

A nova fronteira de segurança corporativa é a **Identidade**.

### O Papel do Microsoft Entra ID (antigo Azure AD)
O Entra ID é o centro de comando das identidades corporativas. Seus recursos transformam a segurança de acesso:
1. **Acesso Condicional Inteligente:** Em vez de permitir acessos indiscriminados, o sistema avalia o contexto do usuário (IP de origem, horário, nível de risco do dispositivo e país).
2. **Eliminação de Senhas Fracas com Passwordless:** Adoção de chaves FIDO2 e autenticação biométrica pelo app Microsoft Authenticator.
3. **Single Sign-On (SSO):** Um único login seguro para acessar o e-mail, ERP, CRM, portal financeiro e aplicativos de terceiros.

### Gestão Moderna de Dispositivos com Microsoft Intune
Com o crescimento do modelo BYOD (Bring Your Own Device), colaboradores usam seus próprios smartphones para checar e-mails e baixar relatórios sigilosos.
* **Wipe Seletivo:** Se o colaborador for desligado ou tiver o celular furtado, a empresa apaga os dados corporativos à distância sem tocar nas fotos pessoais ou conversas particulares dele.
* **Bloqueio de Copiar e Colar:** Políticas de MAM (Mobile Application Management) impedem que um usuário copie uma tabela do Excel corporativo e cole no bloco de notas pessoal ou envie pelo WhatsApp pessoal.
* **Conformidade de Segurança:** Dispositivos sem antivírus atualizado ou com tela sem bloqueio por senha são impedidos de sincronizar arquivos corporativos.

Implementar essas ferramentas com a governança da Inserti eleva o índice de segurança da sua empresa para os padrões das maiores multinacionais do mundo.
    `,
  },
  {
    slug: "migracao-vmware-para-proxmox-ve-vale-a-pena-em-2026",
    title: "Migração de VMware vSphere para Proxmox VE: Vale a Pena em 2026?",
    excerpt: "Entenda os impactos das mudanças de licenciamento da Broadcom e como o Proxmox VE se tornou uma alternativa enterprise madura e econômica.",
    category: "Infraestrutura",
    author: {
      name: "Rafael Barbosa",
      role: "Arquiteto de Infraestrutura e Virtualização",
    },
    publishedAt: "05 de Outubro de 2026",
    readTime: "8 min de leitura",
    tags: ["Proxmox", "VMware", "Virtualização", "Ceph", "KVM"],
    content: `
Desde a aquisição da VMware pela Broadcom e a eliminação de licenças perpétuas e pacotes básicos em favor de assinaturas caras cobradas por núcleo (core), diretores de tecnologia em todo o mundo têm feito a mesma pergunta: **existe uma alternativa confiável que não coloque em risco a estabilidade da empresa?**

A resposta é sim: o **Proxmox Virtual Environment (VE)**.

### Por que o Proxmox VE conquistou o mercado corporativo?
Longe de ser uma ferramenta experimental, o Proxmox VE é baseado em tecnologias de extrema maturidade:
* **Hipervisor KVM e Containers LXC:** O mesmo KVM que sustenta a nuvem da AWS e do Google Cloud.
* **Cluster Nativo sem Custo por Host:** Criação de clusters de alta disponibilidade (HA) com quorum via Corosync sem necessidade de licença extra de vCenter.
* **Storage Hiperconvergente com Ceph:** Replicação nativa de dados entre servidores sem a obrigação de adquirir storages externos de milhões de reais.
* **ZFS Nativo:** Proteção contra corrupção silenciosa de dados, snapshots instantâneos e replicação periódica entre nós.

### E quanto ao Proxmox Backup Server (PBS)?
O ecossistema conta com o Proxmox Backup Server, que entrega:
* Desduplicação em nível de blocos baseada em clientes.
* Criptografia nativa antes do envio pela rede.
* Verificação automática de integridade dos backups sem sobrecarregar a produção.

### Como a Inserti conduz a transição sem risco
Migrar dezenas de máquinas virtuais de missão crítica exige metodologia:
1. Levantamento de IOPS e compatibilidade de drivers (VirtIO).
2. Criação do cluster Proxmox em paralelo.
3. Conversão a quente e sincronização diferencial.
4. Janela de corte de poucos minutos no final de semana.

Com o Proxmox VE gerenciado pela Inserti, sua empresa elimina custos astronômicos recorrentes de licenciamento e ganha soberania sobre sua própria infraestrutura.
    `,
  },
  {
    slug: "dba-postgresql-5-erros-que-destroem-a-performance-do-seu-banco",
    title: "5 Erros Críticos que Destroem a Performance do seu Banco de Dados PostgreSQL",
    excerpt: "Descubra como configurações inadequadas de memória, autovacuum mal calibrado e consultas sem índice afundam a velocidade do seu sistema.",
    category: "PostgreSQL",
    author: {
      name: "Time de DBA PostgreSQL",
      role: "Especialistas em Alta Performance de Bancos",
    },
    publishedAt: "28 de Setembro de 2026",
    readTime: "7 min de leitura",
    tags: ["PostgreSQL", "DBA", "Tuning", "Autovacuum", "Performance"],
    content: `
O PostgreSQL é amplamente reconhecido como o banco de dados relacional open source mais avançado do mundo. No entanto, sua configuração padrão (out-of-the-box) foi propositalmente desenhada para rodar em hardware mínimo, exigindo intervenção de especialistas para sustentar sistemas empresariais com centenas de transações simultâneas.

A seguir, listamos os 5 erros mais comuns que encontramos em nossas auditorias de bancos corporativos:

### 1. Parâmetros de Memória com Valores Padrão
Deixar o \`shared_buffers\` em 128MB em um servidor com 64GB de RAM é um desperdício imperdoável.
* **Ajuste:** Configure o \`shared_buffers\` para cerca de 25% da memória física para instâncias dedicadas.
* Otimize \`work_mem\` com cautela para permitir ordenações em memória sem causar estouro (OOM Killer).
* Eleve \`effective_cache_size\` para 50% a 75% da RAM disponível para orientar o planejador de consultas.

### 2. Autovacuum Desativado ou Mal Calibrado
O PostgreSQL usa o conceito de MVCC (Multi-Version Concurrency Control), onde updates e deletes geram versões mortas de linhas (dead tuples). Se o Autovacuum não rodar com frequência suficiente, as tabelas sofrem de inchaço (bloat), consumindo gigabytes de disco à toa e tornando as leituras lentas.
* **Correção:** Calibre parâmetros agressivos de \`autovacuum_vacuum_scale_factor\` em tabelas transacionais de grande porte.

### 3. Excesso de Conexões Diretas sem Connection Pooler
Cada nova conexão aberta no PostgreSQL consome cerca de 10MB de memória e um processo fork no Linux. Aplicações web abrindo 500 conexões diretas levam o servidor à exaustão por troca de contexto.
* **Solução:** Implementação do **PgBouncer** para reaproveitar conexões ativas com latência quase nula.

### 4. Consultas com Table Scan e Falta de Índices Parciais
Executar \`EXPLAIN (ANALYZE, BUFFERS)\` frequentemente revela consultas lendo 10 milhões de linhas do disco para retornar apenas 10 registros.
* A criação de índices parciais (ex: apenas registros com \`status = 'PENDENTE'\`) reduz o tamanho do índice e acelera buscas em ordens de grandeza.

### 5. Inexistência de Réplica de Leitura para Relatórios
Derrubar o faturamento ou as vendas porque o setor financeiro rodou um relatório pesado de fechamento é um problema clássico de arquitetura.
* **Arquitetura Correta:** Implemente uma réplica de leitura via Streaming Replication física e direcione os relatórios analíticos para o servidor secundário.
    `,
  },
  {
    slug: "finops-como-reduzir-em-ate-40-por-cento-sua-conta-de-nuvem-aws-e-azure",
    title: "FinOps na Prática: Como Reduzir em até 40% sua Fatura de Nuvem AWS e Azure",
    excerpt: "Estratégias comprovadas de engenharia financeira em nuvem para eliminar desperdícios sem comprometer performance ou disponibilidade.",
    category: "Cloud",
    author: {
      name: "Rafael Barbosa",
      role: "Especialista Cloud & FinOps",
    },
    publishedAt: "20 de Setembro de 2026",
    readTime: "6 min de leitura",
    tags: ["Cloud", "FinOps", "AWS", "Azure", "Otimização de Custos"],
    content: `
A promessa inicial da computação em nuvem era redução de custos e elasticidade. Porém, na prática, muitas diretorias financeiras encaram faturas em dólares que crescem exponencialmente a cada trimestre sem que o faturamento da empresa acompanhe esse ritmo.

É aqui que entra a cultura de **FinOps (Financial Operations)**: a governança contínua entre equipes de tecnologia, finanças e negócios para maximizar o valor de cada centavo investido em nuvem.

### As 4 Principais Fontes de Desperdício em Cloud:
1. **Instâncias Superdimensionadas (Over-Provisioning):** Servidores rodando com 32 vCPUs e 128GB de RAM que passam 95% do mês com menos de 10% de uso de CPU.
2. **Volumes de Disco Órfãos e Snapshots Esquecidos:** Discos EBS desanexados de máquinas deletadas continuam cobrando aluguel de armazenamento mês após mês.
3. **Instâncias Sob Demanda sem Compromisso:** Pagar a taxa integral horária de servidores que rodam 24x7 durante o ano todo, em vez de contratar Savings Plans ou Reserved Instances com até 65% de abatimento.
4. **Tráfego de Dados Desnecessário (Data Egress):** Transferências entre zonas de disponibilidade ou internet pública sem utilização de endpoints privados (VPC Endpoints).

Com o processo de auditoria FinOps executado pela Inserti, nós reestruturamos seus recursos e geramos economias substanciais no primeiro mês de trabalho.
    `,
  },
  {
    slug: "por-que-adotar-politica-de-backup-3-2-1-1-0",
    title: "A Regra de Backup 3-2-1-1-0: O Padrão Ouro de Resiliência Corporativa",
    excerpt: "Conheça a metodologia definitiva recomendada pelos maiores especialistas globais em segurança para garantir que seus dados nunca se percam.",
    category: "Backup",
    author: {
      name: "Engenharia de Dados e Continuidade Inserti",
      role: "Time de Resiliência Digital",
    },
    publishedAt: "15 de Setembro de 2026",
    readTime: "5 min de leitura",
    tags: ["Backup", "3-2-1-1-0", "Imutabilidade", "Disaster Recovery", "Continuidade"],
    content: `
Durante anos, a regra de backup 3-2-1 foi considerada o padrão ideal da indústria: 3 cópias dos dados, em 2 mídias distintas, com 1 cópia fora da empresa (off-site).

No entanto, com a evolução das técnicas de invasão e a capacidade dos cibercriminosos de infectar tanto a matriz quanto filiais conectadas por VPN, a comunidade internacional de segurança expandiu o modelo para a regra **3-2-1-1-0**:

* **3 Cópias dos Dados:** O dado em produção e pelo menos duas cópias de segurança atualizadas.
* **2 Tipos de Mídias Distintas:** Exemplo: storage local de alta velocidade para restore rápido e armazenamento em nuvem para sobrevivência física.
* **1 Cópia Off-site:** Armazenada em um datacenter remoto geograficamente distante da sede da empresa.
* **1 Cópia Offline ou Imutável (Air-Gapped / WORM):** Um repositório que não permite alteração de dados por nenhum protocolo de escrita durante a janela de retenção programada.
* **0 Erros de Restauração:** Validação automatizada frequente garantindo que o arquivo não está corrompido e inicializa perfeitamente.

Com a Inserti gerenciando suas rotinas de backup sob essa metodologia, sua empresa ganha a certeza absoluta de que nenhum imprevisto é fatal para sua operação.
    `,
  },
  {
    slug: "sd-wan-corporativo-como-unir-filiais-com-seguranca-e-alta-performance",
    title: "SD-WAN Corporativo: Como Interligar Matriz e Filiais com Baixa Latência e Segurança",
    excerpt: "Descubra como o SD-WAN substitui links MPLS caros por múltiplos links de fibra comerciais com failover dinâmico e criptografia de ponta a ponta.",
    category: "Redes",
    author: {
      name: "Rafael Barbosa",
      role: "Especialista em Redes e SD-WAN",
    },
    publishedAt: "08 de Setembro de 2026",
    readTime: "7 min de leitura",
    tags: ["SD-WAN", "Redes", "Fortinet", "MikroTik", "MPLS", "Conectividade"],
    content: `
No passado, a única maneira segura de interligar escritórios distantes e centros de distribuição era a contratação de dispendiosos circuitos privados MPLS das operadoras de telecomunicações. Além do custo mensal exorbitante por megabit, o tempo de ativação de um novo ponto levava meses.

O **SD-WAN (Software-Defined Wide Area Network)** revolucionou esse cenário:
* **Uso Inteligente de Links Comerciais:** Agregue links de internet de fibra comuns de diferentes operadoras com economia de até 70% em telecomunicações.
* **Roteamento Baseado em Aplicação:** O tráfego de VoIP e ERP é direcionado para o link de menor latência e jitter. Downloads pesados e vídeos são despachados pelo link secundário.
* **Failover Instantâneo sem Queda de Ligação:** Se uma fibra romper na rua, o sistema transfere os pacotes para a conexão reserva em milissegundos sem derrubar reuniões do Teams ou conexões de terminal.
* **Criptografia IPsec Centralizada:** Todos os dados trafegam cifrados de ponta a ponta com certificados de segurança auditáveis.

A engenharia de redes da Inserti implementa e monitora arquiteturas SD-WAN corporativas que unem estabilidade, segurança e expressiva redução de custos.
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

