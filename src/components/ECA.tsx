import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Trophy, Users, Music, GraduationCap } from "lucide-react";
import physicsSeminar from "@/assets/physics-seminar-certificate.jpg";

const ECA = () => {
  const activities = [
    {
      id: 1,
      title: "Physics Research Seminar",
      description: "Seminar on The Advancement of Physics Research for Engineering Students - AIUB (June 2024)",
      icon: GraduationCap,
      image: physicsSeminar,
    },
    {
      id: 2,
      title: "Sports & Athletics",
      description: "Participation in various sports events and competitions",
      icon: Trophy,
      image: null,
    },
    {
      id: 3,
      title: "Club Activities",
      description: "Active member in student organizations and clubs",
      icon: Users,
      image: null,
    },
    {
      id: 4,
      title: "Cultural Events",
      description: "Involvement in cultural programs and performances",
      icon: Music,
      image: null,
    },
  ];

  return (
    <section id="eca" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">
          Extra Curricular Activities
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Beyond academics - showcasing my involvement in various activities
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <Dialog key={activity.id}>
                <DialogTrigger asChild>
                  <Card className="p-6 cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in group">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {activity.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                    {activity.image && (
                      <div className="mt-4 rounded-lg overflow-hidden">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                  <DialogHeader>
                    <DialogTitle>{activity.title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    {activity.image ? (
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-auto rounded-lg"
                      />
                    ) : (
                      <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <IconComponent className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                          <p className="text-muted-foreground">
                            Add your activity image to src/assets/
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Then import and update this component
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        <Card className="mt-6 p-6 text-center bg-muted/50 border-dashed">
          <p className="text-sm text-muted-foreground">
            💡 <strong>How to add your images:</strong> Upload your ECA images to{" "}
            <code className="bg-background px-2 py-1 rounded">src/assets/</code>, then update the
            ECA.tsx component to import and use them.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default ECA;
