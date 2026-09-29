import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudy from "@/components/CaseStudy";
import ItemDetail from "@/components/ItemDetail";
import { allItems, getItem } from "@/data/items";

export function generateStaticParams() {
  return allItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) return { title: "Capricorn Hub" };
  return {
    title: item.title + " — Capricorn Hub",
    description: item.kind === "case-study" ? item.summary : item.description,
  };
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItem(slug);

  if (!item) notFound();

  return (
    <main>
      <Navbar />
      {item.kind === "case-study" ? (
        <CaseStudy item={item} />
      ) : (
        <ItemDetail item={item} />
      )}
      <Footer />
    </main>
  );
}
