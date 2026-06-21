
export default function Home() {
  return (
    // Hero 
    <div 
      style={{backgroundImage: "url('/hero.png')"}}
      className="relative h-[90vh] bg-cover bg-center flex justify-center items-center"
    >
      {/* Hero dark overlay */}
      <div className="absolute bg-black/50 inset-0"></div>
      {/* Hero Content */}
      <div className="z-20 flex flex-col w-[70%]">
        <h1 className="text-[text-secondary] text-2xl">Empowering your community</h1>
        <p className="text-white">
          The all-in-one management platform for modern religious organizations. 
          Effortlessly track attendance, coordinate events, share updates, 
          and manage donations all in one place.
        </p>
      </div>
    </div>
  );
}