import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BookOpen, ExternalLink } from "lucide-react";
import bookshopInventory from "@/assets/bookshop-inventory.png";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6" style={{ background: "var(--gradient-section)" }}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">Projects & Work</h2>
        <p className="text-center text-muted-foreground mb-12">
          Showcasing my development experience and problem-solving skills
        </p>

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
            <div className="bg-primary p-8 text-primary-foreground">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Book Shop Management System</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "OOP", "File Handling", "Swing"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                A Java-based desktop application that helps manage books, customers, and sales for a 
                bookstore efficiently. Features include inventory management, customer records, sales tracking, 
                and report generation using object-oriented programming principles.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm">Complete CRUD operations for books and customers</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm">Sales transaction processing and invoice generation</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm">File-based data persistence system</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm">User-friendly GUI built with Java Swing</p>
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                  <DialogHeader>
                    <DialogTitle>Book Shop Management System - Inventory Page</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <img 
                      src={bookshopInventory} 
                      alt="Book Shop Management System Inventory Page showing product details, inventory list with books like The Great Gatsby and To Kill a Mockingbird" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </Card>

          <Card className="p-8 text-center bg-muted/50 border-dashed">
            <p className="text-muted-foreground mb-2">More projects coming soon...</p>
            <p className="text-sm text-muted-foreground">
              Currently working on expanding my portfolio with new innovative solutions
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
