import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/TOHA_CV.pdf';
    link.download = 'TOHA_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 px-6" style={{ background: "var(--gradient-section)" }}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-primary">My Story</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm MD. Ragib Ulfat Toha, currently pursuing a Bachelor's in Computer Science and Engineering 
              at American International University–Bangladesh. I'm in my 5th semester and expect to graduate in 2027.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My goal is to become a skilled software engineer capable of solving real-world problems through 
              innovative technology. I'm passionate about learning new technologies and building impactful solutions.
            </p>
          </Card>

          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow bg-primary text-primary-foreground">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-lg">BSc in Computer Science & Engineering</p>
                <p className="text-primary-foreground/80">American International University–Bangladesh (AIUB)</p>
              </div>
              <div className="border-t border-primary-foreground/20 pt-3">
                <p className="font-medium">Current Semester: 5th</p>
                <p className="text-primary-foreground/80">Expected Graduation: 2027</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="font-semibold"
            onClick={handleDownloadResume}
          >
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
