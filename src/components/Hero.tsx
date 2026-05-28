import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-white/90">MD. Ragib Ulfat Toha</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-white/90">
              Aspiring Software Engineer
            </h2>
            <p className="text-lg text-white/80">
              CSE student at AIUB | Passionate about coding and problem-solving
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold mt-4"
            >
              Contact Me
            </Button>
          </div>
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
              <img
                src={profilePhoto}
                alt="MD. Ragib Ulfat Toha"
                className="relative rounded-full w-80 h-80 object-cover border-8 border-white/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
