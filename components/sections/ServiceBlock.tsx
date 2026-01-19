import Image from "next/image";

interface ServiceBlockProps {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export function ServiceBlock({
  title,
  text,
  imageSrc,
  imageAlt,
  imagePosition = "left",
}: ServiceBlockProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        imagePosition === "right" ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative aspect-[4/3] rounded-xl overflow-hidden ${
          imagePosition === "right" ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Content */}
      <div className={imagePosition === "right" ? "lg:order-1" : ""}>
        <h3 className="text-2xl font-bold text-navy mb-4">{title}</h3>
        <p className="text-charcoal leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
