const Galerie = () => {
  return (
    <div className="pt-20 md:pt-24">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/food/Making off.jpg"
            alt="Galerie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-heading text-5xl md:text-7xl mb-6">
            Galerie
          </h1>
        </div>
      </section>
    </div>
  )
}

export default Galerie

