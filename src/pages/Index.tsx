
import React from "react";
import ProfileSection from "@/components/ProfileSection";
import ContentSection from "@/components/ContentSection";
import { profileData, talks, blogPosts, audio } from "@/data/portfolioData";
import { Separator } from "@/components/ui/separator";
import { Award } from "lucide-react";

const Index = () => {
  const professionalActivities = [
    "Program committee (KubeCon London, KubeCon Japan, KubeCon China, PlatforMa IL)",
    "CNCF mentorship",
    "BCS fellow"
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto">
        <ProfileSection data={profileData} />
        
        <div className="border-t border-border">
          <ContentSection 
            title="Talks" 
            type="talk" 
            items={talks} 
            id="talks"
          />
        </div>
        
        <div className="border-t border-border">
          <ContentSection 
            title="Blog Posts" 
            type="blog" 
            items={blogPosts} 
            id="blog"
          />
        </div>
        
        <div className="border-t border-border">
          <ContentSection 
            title="Audio" 
            type="podcast" 
            items={audio} 
            id="audio"
          />
        </div>
        
        <div className="border-t border-border">
          <section id="professional-activities" className="py-12 px-4 md:px-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-primary"><Award className="h-5 w-5" /></span>
              <h2 className="text-2xl font-semibold tracking-tight">Professional Activities</h2>
            </div>
            <div className="space-y-3 mt-4">
              {professionalActivities.map((activity, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 py-2 px-3 -mx-2 rounded-md hover:bg-secondary/50 transition-colors"
                >
                  <span className="text-primary font-medium">•</span>
                  <p className="text-base">{activity}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        <footer className="py-12 px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lior Lieberman. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
