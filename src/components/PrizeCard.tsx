export interface PrizeCardProps {
  imageUrl: string;
  title: string;
  description?: string;
  timeReq: string;
  customColor?: string;
}

export default function PrizeCard({
  imageUrl,
  title,
  description,
  timeReq,
  customColor,
}: PrizeCardProps) {
  return (
    <div
      className="group relative flex flex-col w-full max-w-75 mx-auto bg-neutral-900 border-2 border-neutral-800 rounded-2xl overflow-hidden"
      style={customColor ? { borderColor: customColor } : {}}
    >
      <div className="relative h-60 w-full overflow-hidden border-b border-neutral-800">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-neutral-900/60 to-transparent opacity-40"></div>
      </div>

      <div className="p-6 flex flex-col items-center text-center grow">
        <h2 className="text-xl font-black uppercase tracking-wide mb-1 text-white">
          {title}
        </h2>
        <p className="text-neutral-400 text-sm mb-2">{timeReq}</p>

        {description && (
          <>
            <div className="w-8 h-1 bg-blue-500 rounded-full mb-4 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <p className="text-neutral-400 text-sm leading-relaxed grow">
              {description}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
