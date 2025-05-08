
import { Avatar } from "@/components/ui/avatar";
import { ProfileData } from "@/data/portfolioData";
import { Github, Linkedin } from "lucide-react";

interface ProfileSectionProps {
  data: ProfileData;
}

const ProfileSection = ({ data }: ProfileSectionProps) => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-4 md:py-24">
      <Avatar className="w-32 h-32 md:w-40 md:h-40 border-2 border-gray-100">
        <img 
          src={data.avatarUrl} 
          alt={`${data.name}'s portrait`} 
          className="object-cover"
        />
      </Avatar>
      <h1 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">{data.name}</h1>
      <p className="mt-2 text-lg text-muted-foreground">{data.title}</p>
      <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed mx-auto">
        {data.bio}
      </p>
      
      <div className="flex gap-4 mt-6">
        <a 
          href="https://github.com/LiorLieberman" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="GitHub profile"
        >
          <Github className="h-6 w-6" />
        </a>
        <a 
          href="https://linkedin.com/in/lior-lieberman/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="LinkedIn profile"
        >
          <Linkedin className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default ProfileSection;
