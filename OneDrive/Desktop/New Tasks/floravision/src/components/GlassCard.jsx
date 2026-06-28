const GlassCard = ({
  as: Component = "div",
  blur = 18,
  radius = 28,
  tint = "rgba(255,255,255,0.08)",
  border = "rgba(255,255,255,0.18)",
  className = "",
  style,
  children,
  ...props
}) => {
  return (
    <Component
      className={`relative ${className}`}
      style={{
        background: tint,
        border: `1px solid ${border}`,
        borderRadius: radius,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
        ...style,
      }}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ borderRadius: radius }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-60"
          style={{ borderRadius: radius }}
        />
      </div>
      <div className="relative">{children}</div>
    </Component>
  );
};

export default GlassCard;
