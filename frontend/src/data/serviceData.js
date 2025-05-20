const serviceData = {
  electrician: [
    {
      id: 2,
      name: "Ravi Sharma",
      experience: "5 years",
      location: "Delhi",
      rating: 4.8,
      description: "Certified electrician specialized in home wiring, appliance repair, and smart home installation.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Neeraj Verma",
      experience: "3 years",
      location: "Mumbai",
      rating: 4.6,
      description: "Reliable and punctual, handles everything from fan repairs to full electrical setups.",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      id: 4,
      name: "Sunil Kumar",
      experience: "7 years",
      location: "Bengaluru",
      rating: 4.9,
      description: "Specializes in industrial and commercial wiring with excellent safety practices.",
      image: "https://randomuser.me/api/portraits/men/50.jpg"
    },
    {
      id: 5,
      name: "Pooja Yadav",
      experience: "4 years",
      location: "Lucknow",
      rating: 4.7,
      description: "Experienced in residential installations and solar panel integration. Female-friendly services.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 6,
      name: "Imran Shaikh",
      experience: "6 years",
      location: "Hyderabad",
      rating: 4.5,
      description: "Known for quick diagnosis and budget-friendly fixes. Available for urgent repairs.",
      image: "https://randomuser.me/api/portraits/men/36.jpg"
    }
  ],
  plumber: [
    {
      id: 1,
      name: "Ramesh Singh",
      experience: "5 years",
      location: "Andheri East, Mumbai",
      rating: 4.6,
      description: "Expert in bathroom fittings, leakage repair, and pipeline installation.",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      id: 2,
      name: "Vikram Yadav",
      experience: "7 years",
      location: "Lajpat Nagar, Delhi",
      rating: 4.8,
      description: "Specialist in kitchen plumbing and water heater installation.",
      image: "https://randomuser.me/api/portraits/men/35.jpg"
    },
    {
      id: 3,
      name: "Suman Das",
      experience: "4 years",
      location: "Salt Lake, Kolkata",
      rating: 4.5,
      description: "Quick and reliable plumber for all home plumbing needs.",
      image: "https://randomuser.me/api/portraits/men/25.jpg"
    },
    {
      id: 4,
      name: "Rajeev Mehra",
      experience: "6 years",
      location: "Banjara Hills, Hyderabad",
      rating: 4.7,
      description: "Certified plumber with expertise in commercial pipework and sewage systems.",
      image: "https://randomuser.me/api/portraits/men/40.jpg"
    },
    {
      id: 5,
      name: "Faisal Khan",
      experience: "8 years",
      location: "Hazratganj, Lucknow",
      rating: 4.9,
      description: "Top-rated for emergency plumbing services and bathroom remodels.",
      image: "https://randomuser.me/api/portraits/men/30.jpg"
    },
    {
      id: 6,
      name: "Dinesh Patil",
      experience: "3 years",
      location: "Kothrud, Pune",
      rating: 4.4,
      description: "Affordable and skilled plumber, great with pipe blockages and sink repairs.",
      image: "https://randomuser.me/api/portraits/men/50.jpg"
    }
  ],
  carpenter: [
    {
      id: 1,
      name: "Amit Verma",
      experience: "10 years",
      location: "Tilak Nagar, Delhi",
      rating: 4.8,
      description: "Specialist in modular furniture, wooden partitions, and wardrobes.",
      image: "https://randomuser.me/api/portraits/men/60.jpg"
    },
    {
      id: 2,
      name: "Naresh Bhosale",
      experience: "6 years",
      location: "Hadapsar, Pune",
      rating: 4.5,
      description: "Expert in kitchen cabinets, bed frames, and custom woodwork.",
      image: "https://randomuser.me/api/portraits/men/61.jpg"
    },
    {
      id: 3,
      name: "Iqbal Shaikh",
      experience: "9 years",
      location: "Bandra West, Mumbai",
      rating: 4.7,
      description: "Known for premium finishing in doors, windows, and decorative panels.",
      image: "https://randomuser.me/api/portraits/men/62.jpg"
    },
    {
      id: 4,
      name: "Sukhdev Rana",
      experience: "5 years",
      location: "Sector 14, Gurugram",
      rating: 4.4,
      description: "Reliable for office furniture and workstation wood setups.",
      image: "https://randomuser.me/api/portraits/men/63.jpg"
    },
    {
      id: 5,
      name: "Ganesh Iyer",
      experience: "8 years",
      location: "T. Nagar, Chennai",
      rating: 4.6,
      description: "Traditional and modern carpentry expert with strong South Indian design sense.",
      image: "https://randomuser.me/api/portraits/men/64.jpg"
    },
    {
      id: 6,
      name: "Ravi Kant",
      experience: "4 years",
      location: "Alambagh, Lucknow",
      rating: 4.3,
      description: "Young and passionate carpenter, best for budget custom furniture.",
      image: "https://randomuser.me/api/portraits/men/65.jpg"
    }
  ],
  cleaner: [
    {
      id: 1,
      name: "Priya Sharma",
      experience: "4 years",
      location: "Malviya Nagar, Delhi",
      rating: 4.7,
      description: "Specialist in deep home cleaning, kitchen degreasing, and floor polishing.",
      image: "https://randomuser.me/api/portraits/women/60.jpg"
    },
    {
      id: 2,
      name: "Anita Joseph",
      experience: "6 years",
      location: "Kakkanad, Kochi",
      rating: 4.8,
      description: "Expert in sofa shampooing, bathroom sanitization, and pest-safe cleaning.",
      image: "https://randomuser.me/api/portraits/women/61.jpg"
    },
    {
      id: 3,
      name: "Ritu Raj",
      experience: "3 years",
      location: "Park Street, Kolkata",
      rating: 4.5,
      description: "Quick and efficient in daily cleaning services and waste segregation.",
      image: "https://randomuser.me/api/portraits/women/62.jpg"
    },
    {
      id: 4,
      name: "Sunita Yadav",
      experience: "7 years",
      location: "Ashok Nagar, Jaipur",
      rating: 4.9,
      description: "Known for event post-cleanup and commercial space sanitization.",
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      id: 5,
      name: "Komal Chauhan",
      experience: "5 years",
      location: "Maninagar, Ahmedabad",
      rating: 4.6,
      description: "Detail-focused cleaner for luxury apartments and boutique hotels.",
      image: "https://randomuser.me/api/portraits/women/64.jpg"
    },
    {
      id: 6,
      name: "Farah Ali",
      experience: "2 years",
      location: "Charminar, Hyderabad",
      rating: 4.4,
      description: "Young and energetic, great for budget home and office cleaning.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ]
};

export default serviceData;
