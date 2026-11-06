"use client";

import React, { useState } from "react";
import Link from "next/link";
import { blogPosts, BlogPost } from "@/data/posts";
import { BookOpen, Clock, User, ArrowRight, Search, ShieldCheck } from "lucide-react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "Todos",
    "Segurança",
    "Firewall",
    "Microsoft",
    "Cloud",
    "Backup",
    "Redes",
    "PostgreSQL",
    "Infraestrutura",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Conhecimento Técnico Especializado</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.15]">
            Blog de Engenharia, Cibersegurança e Infraestrutura
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-brand-navy/75 max-w-3xl mx-auto leading-relaxed">
            Artigos aprofundados, guias práticos e análises de mercado escritos por engenheiros que vivem a rotina da tecnologia de missão crítica.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por artigos, tecnologias, termos..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 text-sm text-brand-navy focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all shadow-sm"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* Main Blog Area */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Pill Nav */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-brand-navy text-white shadow-md scale-105"
                    : "bg-slate-100 text-brand-navy/70 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-3xl border border-slate-200 hover:border-brand-blue/40 shadow-sm hover:shadow-card transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue px-2.5 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-brand-navy/60 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="font-heading font-bold text-xl text-brand-navy group-hover:text-brand-blue transition-colors line-clamp-2 mb-3 leading-snug">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-xs text-brand-navy/70 leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-medium bg-slate-100 text-brand-navy/70 px-2 py-0.5 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-7 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-[10px]">
                        {post.author.name.charAt(0)}
                      </div>
                      <div className="text-[11px] font-semibold text-brand-navy truncate max-w-[140px]">
                        {post.author.name}
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-brand-blue hover:text-brand-navy flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Ler Artigo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-base text-brand-navy/60">
                Nenhum artigo encontrado para a busca &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Todos");
                }}
                className="mt-4 px-4 py-2 text-xs font-bold text-brand-blue hover:underline"
              >
                Limpar filtros e exibir todos
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

