export interface TechPartner {
  id: string;
  name: string;
  /** Caminho da logo em /public (ex: "/logo-fortinet.png"). Se vazio, exibe o nome. */
  logo?: string;
}

export const techPartners: TechPartner[] = [
  { id: "fortinet", name: "Fortinet", logo: "/logo-fortinet.png" },
  { id: "microsoft", name: "Microsoft", logo: "/logo-microsoft.png" },
  { id: "proxmox", name: "Proxmox", logo: "/logo-proxmox.png" },
  { id: "mikrotik", name: "MikroTik", logo: "/logo-mikrotik.png" },
  { id: "ubiquiti", name: "Ubiquiti", logo: "/logo-ubiquiti.png" },
  { id: "acronis", name: "Acronis", logo: "/logo-acronis.png" },
];
