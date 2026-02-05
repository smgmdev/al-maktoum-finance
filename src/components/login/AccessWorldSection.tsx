const AccessWorldSection = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/access-world-bg.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center max-w-4xl leading-tight">
          Access the world for personal and business needs
        </h2>
      </div>
    </section>
  );
};

export default AccessWorldSection;
