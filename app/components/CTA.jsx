const CTA = () => {
  return (
    <section id="CTA" className="bg-red-500">
      <div className="container flex flex-col items-center justify-between px-6 py-24  mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* Heading */}
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simply how your team works today
        </h2>

        {/* CTA */}

        <a
          href="#"
          className="p-3 px-6 pt-2 text-red-500 bg-white rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CTA;
