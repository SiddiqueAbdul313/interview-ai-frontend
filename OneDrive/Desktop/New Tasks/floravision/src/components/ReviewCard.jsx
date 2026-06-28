import GlassCard from "./GlassCard";

const Star = ({ filled }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={filled ? "text-yellow-300" : "text-white/25"}
  >
    <path d="M12 17.3l-6.18 3.73 1.64-7.03L2 9.24l7.19-.62L12 2l2.81 6.62 7.19.62-5.46 4.76 1.64 7.03z" />
  </svg>
);

const initialsFromName = (name = "") =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

const ReviewCard = ({
  name = "Ronnie Hamill",
  rating = 5,
  text = "I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.",
  avatarSrc,
  className = "",
  ...props
}) => {
  const initials = initialsFromName(name);

  return (
    <GlassCard className={`p-5 sm:p-6 ${className}`} {...props}>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white/10">
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-white/80 font-semibold">
              {initials}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <p className="text-white/90 font-medium leading-tight truncate">
            {name}
          </p>
          <div className="mt-1 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} filled={i < Math.round(rating)} />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-4 text-white/70 text-sm leading-relaxed">{text}</p>
    </GlassCard>
  );
};

export default ReviewCard;
