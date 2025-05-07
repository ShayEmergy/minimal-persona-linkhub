
export interface ContentItem {
  id: string;
  title: string;
  url: string;
  date?: string;
  description?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
}

export const profileData: ProfileData = {
  name: "Lior Lieberman",
  title: "Software Engineering Lead",
  bio: "Hey, I'm Lior, a senior engineer passionate about Kubernetes and Cloud Native platforms. I build reliable, well-designed systems, contribute to core Kubernetes projects, and develop observability tools. I mentor startups and dev teams worldwide on scaling platforms, optimizing cloud deployments, and improving cost efficiency. I'm driven by entrepreneurship and leadership, and I thrive collaborating with talented teams. This site is a home for my projects and insights.",
  avatarUrl: "/lovable-uploads/bc3389a1-5510-49ef-8f13-5db134e519f1.png",
};

export const talks: ContentItem[] = [
  {
    id: "talk-1",
    title: "Encryption, Identities, and Everything in Between; Building Secure Kubernetes Networks",
    url: "https://www.youtube.com/watch?v=Q15XbASxHM0",
    date: "April 2025",
    description: "A deep dive into Kubernetes network security approaches and implementations.",
  },
  {
    id: "talk-5",
    title: "Can Your Kubernetes Network Handle the Heat? Building Resilience with AI Chaos",
    url: "https://youtu.be/2oTtpRpv3M8?si=0RBHxFJhIC22NvBI",
    date: "November 2024",
    description: "Testing and building resilient Kubernetes networks using AI-driven chaos engineering.",
  },
  {
    id: "talk-2",
    title: "Architecting Istio for Large-Scale Deployments: R&D and Service Mesh Grow Together",
    url: "https://www.youtube.com/watch?v=GNi9ZJFuups",
    date: "April 2025",
    description: "Strategies for scaling service mesh architecture in enterprise environments.",
  },
  {
    id: "talk-3",
    title: "Towards a Standardized identity-based Authorization in Kubernetes",
    url: "https://www.youtube.com/watch?v=8JX0PUX-znQ",
    date: "March 2025",
    description: "Exploring the future of identity management and authorization in Kubernetes.",
  },
  {
    id: "talk-4",
    title: "Solving the Kubernetes Networking API Rubik's Cube",
    url: "https://www.youtube.com/watch?v=S5QsqEb8wec",
    date: "November 2024",
    description: "Navigating the complexities of Kubernetes networking APIs.",
  },
  {
    id: "talk-6",
    title: "Ingress2gateway - migrating from Ingress to Gateway API",
    url: "https://community.cncf.io/events/details/cncf-cncf-online-programs-presents-cncf-on-demand-webinar-ingress2gateway-migrating-from-ingress-to-gateway-api/",
    date: "September 2024",
    description: "Strategies for migrating from Kubernetes Ingress to the Gateway API.",
  },
  {
    id: "talk-7",
    title: "Gateway API: Beyond GA",
    url: "https://www.youtube.com/watch?v=LITg6TvctjM&t=1449s&ab_channel=CNCF%5BCloudNativeComputingFoundation%5D",
    date: "March 2024",
    description: "Exploring the future of Gateway API after General Availability.",
  },
  {
    id: "talk-8",
    title: "Enhancing Kubernetes with Referential Authorization; A Proof of Concept",
    url: "https://kcseu2024.sched.com/event/1aOqX?iframe=no",
    date: "March 2024",
    description: "Implementing referential authorization concepts in Kubernetes.",
  },
  {
    id: "talk-9",
    title: "Unlocking the Gateway: A Practical Guide from Ingress to Gateway API",
    url: "https://youtu.be/PWZJzjB7vso?t=19367",
    date: "March 2024",
    description: "A practical approach to transitioning from Ingress to Gateway API.",
  },
];

export const blogPosts: ContentItem[] = [
  {
    id: "post-1",
    title: "Introducing ingress2gateway; Simplifying Upgrades to Gateway API",
    url: "https://kubernetes.io/blog/2023/10/25/introducing-ingress2gateway/",
    date: "October 2023",
  },
  {
    id: "post-2",
    title: "The GitOps Way for Consistent Monitoring",
    url: "https://medium.com/riskified-technology/consistent-monitoring-the-gitops-way-1d481e9965c9",
    date: "April 2022",
  },
];

export const audio: ContentItem[] = [
  {
    id: "podcast-1",
    title: "Kubernetes Ingress & Gateway API Updates, with Lior Lieberman",
    url: "https://kubernetespodcast.com/episode/248-gateway-updates/",
    date: "March 2025",
  },
  {
    id: "podcast-2",
    title: "The future of Kubernetes: From Gateway API to AI integration",
    url: "https://kube.fm/gateway-api-to-api-lior",
    date: "March 2025",
  },
];
