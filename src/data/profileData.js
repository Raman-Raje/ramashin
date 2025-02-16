import qualcomm from '@assets/qualcomm.svg'
import imagination from '@assets/qualcomm.svg'

export const profile = {
  name: "Raman Shinde",
  title: "Senior Software Engineer & Solopreneur",
  summary: "Software professional with 9 years of experience specializing in building scalable applications. Passionate about entrepreneurship and creating innovative solutions.",
  skills: [
    "C/C++", "Python", "NodeJs", "AWS", "Docker", "Kubernetes",
    "AI", "Deep Learning", "Machin Learning", "System Design"
  ]
};

export const projects = [
  {
    name: "SaaS Analytics Platform",
    description: "Built and launched a B2B analytics platform serving 50+ clients",
    tech: ["React", "Node.js", "AWS", "MongoDB"]
  },
  {
    name: "E-commerce Solution",
    description: "Developed a scalable e-commerce platform with 99.9% uptime",
    tech: ["Next.js", "PostgreSQL", "Docker", "Redis"]
  }
]

export const experience = [
  {
    title: "Senior Lead Engineer [AI Research]",
    company: "Qualcomm",
    logo: imagination,
    duration: "Mar. 2024 - Present",
    location: "Banglore, India",
    highlights: [
      "Implemented optimized data handling for Adreno GPUs in TVM by adding texture support for OpenCL and Vulkan backends, resulting in a 50% improvement in network inference times.",
      "Enhanced TVM capabilities by adding support for new layers and operators to accommodate the latest Large Language Models (LLMs) and Diffusion networks on Adreno GPUs.",
      "Incorporated memory planner to support and efficiently run large-scale LLMs within constrained memory limits."
    ]
  },
  {
    title: "Deep Learning Engineer",
    company: "Imagination Technologies",
    logo: qualcomm,
    duration: "Sep. 2021 - Mar. 2024",
    location: "Pune, India",
    highlights: [
      "Developed an SDK enabling neural network execution on Imagination’s GPUs and Neural Network Accelerators (NNAs) using TVM, facilitating efficient model deployment on edge devices.",
      "Implemented LSTM/RNN support in Imagination’s Neural Compute SDK (NCSDK) for models built with PyTorch, TensorFlow, and ONNX, ensuring broader compatibility and accelerated performance.",
      "Created and optimized graph transforms for diverse operations and operators within RelayIR (TVM), enhancing computational efficiency.",
      "Contributed to the development of quantization tools (static, dynamic, and QAT) for multiple frameworks, driving improvements in model compression and inference speed."
    ]
  },
  {
    title: "Data Scientist",
    company: "Xpanxion (UST)",
    logo: imagination,
    duration: "Jan. 2020 - Aug. 2021",
    location: "Pune, India",
    highlights: [
      "Developed AI/ML solutions to extract information from medical documents, including document classification and candidate extraction (e.g., benefits, rates, and drug details) using libraries like Fonduer, Tesseract, and OpenCV.",
      "Built reusable AI/ML components within the Innovation Team, including a content-based and collaborative recommendation system, NLP modules such as Named Entity Recognition (NER), QA systems, and sequence translation.",
      "Led Computer Vision projects involving object localization and detection, image segmentation, and gesture recognition."
    ]
  },
  {
    title: "Product Development Engineer",
    company: "Siemens R&D",
    logo: imagination,
    duration: "Dec. 2018 - Dec. 2019",
    location: "Pune, India",
    highlights: [
      "Developed and enhanced an application for designing manufacturing sequences, with significant contributions to debugging and resolving issues in existing code.",
      "Accelerated feature deployment by implementing new use-cases and Proof-of-Concepts (POCs), enabling faster shipping of key features."
    ]
  },
  {
    title: "Software Developer",
    company: "TCS",
    logo: imagination,
    duration: "Dec. 2015 - Nov. 2018",
    location: "Pune, India",
    highlights: [
      "Developed monitoring and control applications for NCRA, including real-time issue monitoring, debugging, and GUI modifications based on client requirements.",
      "Provided support for financial applications such as CRD and SRD for Morgan Stanley, ensuring reliable performance and issue resolution.",
      "Built applications for various clients using Python and C++, contributing to diverse projects and delivering tailored software solutions."
    ]
  }
]

export const blogs = [
  {
    title: "Understanding TimeSeries data for LSTM…",
    date: "Apr 18, 2019",
    readTime: "6 min read",
    excerpt: "Get a deep uderstanding of the sequential data flow in LSTM. Data preperation and more...",
    tags: ["LSTM", "TimeSeries","Deep Learning"],
    link: "https://medium.com/@raman.shinde15/understanding-sequential-timeseries-data-for-lstm-4da78021ecd7"
  },
  {
    title: "Image Captioning With Flickr8k Dataset & BLEU",
    date: "May 1, 2019",
    readTime: "7 min read",
    excerpt: "Full walktrhough on implementation of generating image captions.",
    tags: ["Transfer Learning", "Gen AI"],
    link: "https://medium.com/@raman.shinde15/image-captioning-with-flickr8k-dataset-bleu-4bcba0b52926"
  },
  {
    title: "BackPropagation through LSTM: A differential approach",
    date: "May 17, 2019",
    readTime: "5 min read",
    excerpt: "Deep dive into backpropagation of LSTM, with in depth exaplanation of differatial equations.",
    tags: ["Backpropagation", "differential equations"],
    link: "https://medium.com/@raman.shinde15/backpropagation-through-lstm-a-differential-approach-4eb5ecc58d9d"
  },
  {
    title: "Imports in Solidity",
    date: "Apr 25, 2022",
    readTime: "3 min read",
    excerpt: "Walkthrough of various imports in solidity and how to use them...",
    tags: ["blockchain", "etherium","solidity"],
    link: "https://medium.com/@raman.shinde15/imports-in-solidity-7aec77c50423"
  }
]

export const ventures = [{
  name: "Medyzer",
  status: "Active",
  tagline: "Think Health, Think Medyzer",
  achievement: "Bootstrapped to $50K MRR",
  keyMetrics: {
    users: "500+",
    revenue: "$1K/mo",
    growth: "10% MoM"
  },
  highlights: [
    "Built and launched solo in 6 months",
    "Generated 5k digital prescriptions",
    "Helped 500+ patients to book online appointments"
  ],
  duration: "2023 - Present",
  links: [
    { label: "Live Site", url: "#" },
  ]
}]