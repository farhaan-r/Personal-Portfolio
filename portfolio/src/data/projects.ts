export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  demo?: string;
  highlights: string[];
  featured: boolean;
  image?: string;
  comparison?: {
    before: string;
    after: string;
    beforeLabel?: string;
    afterLabel?: string;
  };
}

export const projects: Project[] = [
  {
    id: "warehouse-cv",
    title: "Warehouse Computer Vision",
    description:
      "Real-time object classification system for warehouse inventory management using GPU-accelerated deep learning.",
    longDescription:
      "Developed a real-time object classification system to automate stock identification in warehouse environments. The system uses a custom-trained deep learning model with GPU-accelerated inference to classify inventory items from camera feeds, dramatically reducing manual tracking overhead.",
    tech: ["Python", "PyTorch", "CUDA", "OpenCV", "NumPy"],
    github: "https://github.com/farhaan-r",
    highlights: [
      "GPU-accelerated inference pipeline",
      "Custom image preprocessing and augmentation",
      "Real-time classification from live camera feeds",
      "Automated inventory tracking integration",
    ],
    featured: true,
    image: "/projects/warehouse.jpg",
  },
  {
    id: "vqvae-ml",
    title: "VQVAE2 Image Generation",
    description:
      "Research into generative models using Vector Quantized Variational Autoencoders for high-fidelity image synthesis on Hip MRI data.",
    longDescription:
      "Explored hierarchical latent representations using VQVAE2 architecture for image generation. Investigated the trade-offs between codebook size, commitment loss, and reconstruction fidelity, with experiments on learning discrete latent spaces.",
    tech: ["Python", "PyTorch", "CUDA", "Matplotlib", "NumPy"],
    github: "https://github.com/farhaan-r/COMP3710-Project/tree/topic-recognition/recognition/VQVAE_s4803279",
    highlights: [
      "Implemented hierarchical VQVAE2 from scratch",
      "Experiments on codebook size vs reconstruction quality",
      "Custom training loop with commitment and codebook losses",
      "Generated authentic looking images of hip MRI scans",
    ],
    featured: true,
    comparison: {
      before: "/projects/vqvae_original.png",
      after: "/projects/vqvae_generated.png",
      beforeLabel: "Original",
      afterLabel: "Generated",
    },
  },
];

export const skills = {
  Languages: ["Java", "Python", "C", "TypeScript", "JavaScript", "SQL"],
  Frameworks: ["React", "PyTorch", "Next.js", "FastAPI", "Node.js"],
  Tools: ["CUDA", "Git", "Linux", "Docker", "Vercel"],
  Domains: ["Machine Learning", "Computer Vision", "Backend Systems", "Data Engineering"],
};
