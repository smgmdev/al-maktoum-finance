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
      <div className="relative z-10 h-full flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
            Access the world for personal and business needs
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AccessWorldSection;
