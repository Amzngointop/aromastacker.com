import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white";
  external?: boolean;
  className?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: Props) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-forest text-white hover:bg-opacity-90 hover:scale-105 focus:ring-forest shadow-md",
    secondary:
      "bg-sage text-white hover:bg-opacity-90 hover:scale-105 focus:ring-sage shadow-md",
    outline:
      "border-2 border-forest text-forest hover:bg-forest hover:text-white hover:scale-105 focus:ring-forest",
    white:
      "bg-white text-forest hover:bg-cream hover:scale-105 focus:ring-white shadow-md",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
