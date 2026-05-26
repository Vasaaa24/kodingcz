import Image from "next/image";

type LogoProps = {
  /** Rendered height in px. Width scales to the logo's aspect ratio. */
  size?: number;
  className?: string;
  /** On dark backgrounds, sit the logo on a light chip so it stays readable. */
  dark?: boolean;
};

const RATIO = 414 / 514; // intrinsic width / height of Koding.png

export default function Logo({ size = 40, className, dark = false }: LogoProps) {
  const height = size;
  const width = Math.round(size * RATIO);

  const img = (
    <Image
      src="/Koding-transparent.png"
      alt="KODING.CZ"
      width={width}
      height={height}
      priority
      style={{ height, width: "auto", display: "block" }}
    />
  );

  if (dark) {
    return (
      <span
        className={className}
        style={{
          display: "inline-flex",
          padding: "6px 8px",
          background: "#ffffff",
          borderRadius: 8,
        }}
      >
        {img}
      </span>
    );
  }

  return (
    <span className={className} style={{ display: "inline-flex" }}>
      {img}
    </span>
  );
}
