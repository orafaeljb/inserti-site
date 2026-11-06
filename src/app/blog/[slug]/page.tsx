import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/data/posts";
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  Share2,
  BookOpen,
  CheckCircle2,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
import { SITE_CONFIG } from "@/lib/constants";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Artigo Não Encontrado | Inserti",
    };
  }

  const url = `${SITE_CONFIG.url}/blog/${post.slug}`;

  return {
    title: { absolute: `${post.title} | Blog Inserti` },
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: url,
      siteName: "Inserti Tecnologia",
      locale: "pt_BR",
      type: "article",
      authors: [post.author.name],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
    datePublished: "2026-10-01",
    mainEntityOfPage: `${SITE_CONFIG.url}/blog/${post.slug}`,
  };

  return (
    <article className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Header */}
      <header className="pt-12 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy/60 hover:text-brand-blue mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o Blog</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-brand-navy/60 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span className="text-xs text-brand-navy/60 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishedAt}
            </span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-brand-navy/75 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-bold text-brand-navy">{post.author.name}</div>
              <div className="text-xs text-brand-navy/60">{post.author.role}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate lg:prose-lg max-w-none text-brand-navy/85 space-y-6 leading-relaxed">
            {post.content.split("\n\n").map((block, idx) => {
              const trimmed = block.trim();
              if (trimmed.startsWith("### ")) {
                return (
                  <h3
                    key={idx}
                    className="font-heading font-bold text-2xl text-brand-navy mt-10 mb-4 pt-4 border-t border-slate-100"
                  >
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }
              if (trimmed.startsWith("* ")) {
                const listItems = trimmed
                  .split("\n")
                  .filter((item) => item.trim().startsWith("* "));
                return (
                  <ul key={idx} className="space-y-2 my-4 list-disc pl-5">
                    {listItems.map((li, lIdx) => (
                      <li key={lIdx} className="text-sm sm:text-base text-brand-navy/80">
                        {li.replace(/^\*\s*/, "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (trimmed.startsWith("1. ") || trimmed.startsWith("2. ") || trimmed.startsWith("3. ") || trimmed.startsWith("4. ") || trimmed.startsWith("5. ")) {
                const numItems = trimmed.split("\n").filter((item) => /^\d+\.\s/.test(item.trim()));
                return (
                  <ol key={idx} className="space-y-2 my-4 list-decimal pl-5">
                    {numItems.map((ol, oIdx) => (
                      <li key={oIdx} className="text-sm sm:text-base text-brand-navy/80 font-medium">
                        {ol.replace(/^\d+\.\s*/, "")}
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={idx} className="text-sm sm:text-base text-brand-navy/80 leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 mb-3">
              Tópicos Relacionados:
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium bg-slate-100 text-brand-navy px-3 py-1 rounded-lg"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Box */}
          <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-brand-navy text-white flex items-center justify-center font-heading font-black text-xl shrink-0">
              {post.author.name.charAt(0)}
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-heading font-bold text-base text-brand-navy">
                {post.author.name}
              </h4>
              <p className="text-xs text-brand-blue font-semibold mb-2">
                {post.author.role}
              </p>
              <p className="text-xs text-brand-navy/70 leading-relaxed">
                Especialista responsável pela produção e validação técnica dos padrões de engenharia e sustentação corporativa da Inserti Tecnologia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection
        title="Quer Implementar Essas Práticas na Sua Empresa?"
        subtitle="Nossos especialistas podem avaliar o ambiente da sua organização e aplicar as melhores estratégias de mercado."
        badge="Consultoria Especializada"
      />
    </article>
  );
}

