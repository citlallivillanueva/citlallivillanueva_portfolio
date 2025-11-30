interface MarqueeTextProps {
  text: string;
  className?: string;
}

const MarqueeText = ({ text, className = "" }: MarqueeTextProps) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="inline-block animate-marquee">
        {Array(20).fill(text).map((item, i) => (
          <span key={i} className="mx-8">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;
