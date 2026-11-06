import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog: artigos sobre TI, segurança e infraestrutura",
  description:
    "Artigos técnicos da Inserti sobre segurança da informação, firewall, backup, nuvem, Microsoft 365, redes e infraestrutura para empresas.",
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
