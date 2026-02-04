const stats = [
  { value: "80M+", label: "Locations worldwide" },
  { value: "0%", label: "Foreign transaction fees" },
  { value: "25+", label: "Currencies supported" },
  { value: "24/7", label: "Customer support" },
];

const StatsSection = () => {
  return (
    <section className="py-20 px-6 bg-card/30 border-y border-border/50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
