import Image, { StaticImageData } from "next/image";

const ratioClass: Record<string, string> = {
    portrait: "aspect-[4/5]",
    square: "aspect-square",
    landscape: "aspect-[16/10]",
    tall: "aspect-[3/5]",
};

export function PhotoSlot({
    ratio = "portrait",
    src,
    alt,
    label,
    className = "",
    eager = false,
}: {
    ratio?: keyof typeof ratioClass | undefined;
    src?: string | StaticImageData;
    alt?: string | undefined;
    label?: string | undefined;
    className?: string | undefined;
    eager?: boolean | undefined;
}) {
    return (
        <figure className={`relative overflow-hidden ${ratioClass[ratio]} ${className}`}>
            {src ? (
                <Image
                    src={src}
                    alt={alt ?? ""}
                    loading={eager ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-1200 ease-out will-change-transform hover:scale-[1.03]"
                />
            ) : (
                <div className="plate flex h-full w-full items-end p-4">
                    <span className="eyebrow">{label ?? "Fotografia"}</span>
                </div>
            )}
        </figure>
    );
}
