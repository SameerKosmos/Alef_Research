import FoundersGrid from "./FoundersGrid";
import type { ChapterSection } from "../config/chapterContent";

interface ChapterSectionViewProps {
  section: ChapterSection;
}

function renderInlineText(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^\)]+\))/g);

  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^\)]+)\)$/);
    if (!match) {
      return <span key={index}>{part}</span>;
    }

    const [, label, href] = match;
    const isExternal = href.startsWith("http") || href.startsWith("https");

    return (
      <a
        key={index}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={(event) => event.stopPropagation()}
        className="font-semibold text-alef-gold-dark underline underline-offset-4 hover:text-alef-ink transition-colors"
      >
        {label}
      </a>
    );
  });
}

export default function ChapterSectionView({
  section,
}: ChapterSectionViewProps) {
  return (
    <section id={section.id} className="mb-4 scroll-mt-10">
      <h2 className="font-bold italic text-lg sm:text-xl md:text-2xl text-alef-ink text-center mb-6">
        {section.heading}
      </h2>

      {section.id === "founders" ? (
        <FoundersGrid />
      ) : (
        <div className="flex flex-col gap-4">
          {section.blocks.map((block, i) => {
            if (block.type === "p") {
              return (
                <p
                  key={i}
                  className="font-semibold text-alef-ink text-[0.95rem] md:text-base leading-relaxed text-left"
                >
                  {renderInlineText(block.text)}
                </p>
              );
            }
            if (block.type === "point") {
              return (
                <p
                  key={i}
                  className="font-semibold text-alef-ink text-[0.95rem] md:text-base leading-relaxed text-left pl-4 md:pl-6"
                >
                  <span className="font-bold text-alef-gold-dark mr-1">
                    {block.marker}
                  </span>
                  {renderInlineText(block.text)}
                </p>
              );
            }
            if (block.type === "img") {
              return (
                <img
                  key={i}
                  src={block.src}
                  alt={block.alt}
                  loading="lazy"
                  className="max-w-xs mx-auto rounded-xl border-4 border-alef-gold"
                />
              );
            }
            if (block.type === "link") {
              return (
                <a
                  key={i}
                  href={block.href}
                  target={block.href.startsWith("http") ? "_blank" : undefined}
                  rel={block.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={(event) => event.stopPropagation()}
                  className="font-semibold text-alef-gold-dark underline underline-offset-4 text-[0.95rem] md:text-base text-center block hover:text-alef-ink transition-colors"
                >
                  {block.label}
                </a>
              );
            }
            return null;
          })}
        </div>
      )}
    </section>
  );
}
