import { Card } from "@/components/ui/card";
import javaIcon from "@/assets/java-icon.png";
import cppIcon from "@/assets/cpp-icon.png";
import dataStructuresIcon from "@/assets/data-structures-icon.png";
import databaseIcon from "@/assets/database-icon.png";

const skills = [
  { name: "Java", level: 100, image: javaIcon },
  { name: "C++", level: 90, image: cppIcon },
  { name: "Data Structures", level: 90, image: dataStructuresIcon },
  { name: "Database", level: 80, image: databaseIcon },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">Technical Skills</h2>
        <p className="text-center text-muted-foreground mb-12">
          My areas of expertise and proficiency levels
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            return (
              <Card
                key={skill.name}
                className="p-8 hover:shadow-lg transition-all hover:scale-105 animate-fade-in flex flex-col items-center justify-center text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-background p-6 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <img src={skill.image} alt={skill.name} className="w-16 h-16 object-contain" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-muted">
            <p className="text-sm font-medium text-muted-foreground mb-2">Currently Learning</p>
            <p className="text-lg font-semibold">Advanced Algorithms & Web Development</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
