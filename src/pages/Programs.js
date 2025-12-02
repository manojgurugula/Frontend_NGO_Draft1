import React, { useState } from 'react';

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState('healthcare');

  const programs = {
    healthcare: {
      title: 'Healthcare Services',
      subtitle: 'Comprehensive medical care for tribal communities',
      description: 'Our healthcare program addresses critical medical needs through mobile units, health camps, and emergency services, ensuring quality healthcare reaches the most remote tribal areas.',
      image: '/photos/DSCN5906.JPG',
      stats: [
        { number: '25,000+', label: 'Patients Treated Annually' },
        { number: '150+', label: 'Health Camps Conducted' },
        { number: '5', label: 'Mobile Medical Units' },
        { number: '50+', label: 'Villages Covered' }
      ],
      services: [
        { icon: '🚑', title: 'Mobile Medical Units', description: 'Fully equipped ambulances providing doorstep healthcare services to remote tribal villages with qualified medical staff.' },
        { icon: '🏥', title: 'Health Camps', description: 'Regular medical camps with specialist doctors offering free consultations, medicines, and health screenings.' },
        { icon: '👶', title: 'Maternal & Child Care', description: 'Comprehensive prenatal, delivery, and postnatal care services for mothers and newborns in tribal areas.' },
        { icon: '💉', title: 'Immunization Programs', description: 'Complete vaccination drives for children and adults following government immunization schedules.' },
        { icon: '🩺', title: 'Emergency Services', description: '24/7 emergency medical response and patient transportation to district hospitals.' },
        { icon: '💊', title: 'Medicine Distribution', description: 'Free distribution of essential medicines and medical supplies to chronically ill patients.' }
      ],
      impact: 'Our healthcare initiatives have significantly reduced infant mortality rates and improved overall health outcomes in tribal communities, with 95% patient satisfaction rates.',
      gallery: ['/photos/DSCN1906.JPG', '/photos/DSCN5906.JPG', '/photos/CIMG0523.JPG']
    },
    education: {
      title: 'Education & Skill Development',
      subtitle: 'Empowering through knowledge and skills',
      description: 'We believe education is the key to breaking poverty cycles. Our comprehensive education program provides learning opportunities, skill development, and career guidance for tribal youth.',
      image: '/photos/DSCN8229.JPG',
      stats: [
        { number: '3,500+', label: 'Students Supported' },
        { number: '45', label: 'Learning Centers' },
        { number: '200+', label: 'Scholarships Provided' },
        { number: '85%', label: 'School Retention Rate' }
      ],
      services: [
        { icon: '📚', title: 'Educational Materials', description: 'Distribution of textbooks, notebooks, uniforms, and learning aids to tribal students from primary to higher secondary levels.' },
        { icon: '🏫', title: 'Community Learning Centers', description: 'Establishment of learning spaces with qualified teachers providing supplementary education and homework support.' },
        { icon: '💻', title: 'Digital Literacy', description: 'Computer training and digital skills development programs preparing youth for modern employment opportunities.' },
        { icon: '🎓', title: 'Scholarship Programs', description: 'Financial assistance for meritorious tribal students to pursue higher education and professional courses.' },
        { icon: '👨‍🏫', title: 'Teacher Training', description: 'Capacity building programs for local teachers to improve teaching methodologies and student engagement.' },
        { icon: '🔬', title: 'Science & Innovation Labs', description: 'Mobile science labs and innovation centers to promote STEM education among tribal students.' }
      ],
      impact: 'Our education programs have increased literacy rates by 40% in target villages and enabled 500+ students to pursue higher education and secure employment.',
      gallery: ['/photos/DSCN8229.JPG', '/photos/DSCN8246.JPG', '/photos/DSCN8304.JPG']
    },
    livelihoods: {
      title: 'Livelihood Development',
      subtitle: 'Sustainable income generation and economic empowerment',
      description: 'Our livelihood programs focus on creating sustainable income opportunities through agricultural development, skill training, and entrepreneurship support for tribal families.',
      image: '/photos/DSCN5885.JPG',
      stats: [
        { number: '2,000+', label: 'Families Benefited' },
        { number: '120', label: 'Self-Help Groups' },
        { number: '₹50L+', label: 'Microfinance Disbursed' },
        { number: '75%', label: 'Income Increase' }
      ],
      services: [
        { icon: '🌾', title: 'Agricultural Training', description: 'Modern farming techniques, organic agriculture, and crop diversification training for sustainable farming practices.' },
        { icon: '👩‍🤝‍👩', title: 'Women\'s Self-Help Groups', description: 'Formation and strengthening of women\'s groups for collective savings, microfinance, and income generation activities.' },
        { icon: '🎨', title: 'Traditional Crafts', description: 'Skill development in traditional handicrafts, weaving, and pottery with market linkage support for product sales.' },
        { icon: '🐄', title: 'Livestock Development', description: 'Cattle rearing, goat farming, and poultry development programs with veterinary support and training.' },
        { icon: '💰', title: 'Microfinance Services', description: 'Small loans and financial services for starting micro-enterprises and expanding existing livelihood activities.' },
        { icon: '🏪', title: 'Market Linkages', description: 'Connecting producers with markets, establishing collection centers, and facilitating fair trade practices.' }
      ],
      impact: 'Livelihood programs have helped 80% of participating families achieve food security and increased average household income by 75% over three years.',
      gallery: ['/photos/DSCN5885.JPG', '/photos/CIMG0524.JPG', '/photos/1461050054575 - Copy.jpg']
    },
    environment: {
      title: 'Environmental Conservation',
      subtitle: 'Protecting nature for future generations',
      description: 'We promote environmental awareness and conservation practices to protect natural resources while supporting sustainable development in tribal areas.',
      image: '/photos/DSCN5832.JPG',
      stats: [
        { number: '25,000+', label: 'Trees Planted' },
        { number: '500 Ha', label: 'Forest Area Restored' },
        { number: '80%', label: 'Sapling Survival Rate' },
        { number: '30+', label: 'Conservation Projects' }
      ],
      services: [
        { icon: '🌳', title: 'Afforestation Programs', description: 'Community-driven tree plantation drives focusing on native species and fruit-bearing trees for ecological and economic benefits.' },
        { icon: '♻️', title: 'Waste Management', description: 'Training communities in waste segregation, composting, and recycling practices to maintain clean and healthy environments.' },
        { icon: '💧', title: 'Water Conservation', description: 'Rainwater harvesting, watershed management, and construction of check dams to improve groundwater levels.' },
        { icon: '🦋', title: 'Biodiversity Protection', description: 'Conservation of local flora and fauna through community-based protection initiatives and awareness programs.' },
        { icon: '🌱', title: 'Organic Farming', description: 'Promoting chemical-free agriculture and organic farming practices to protect soil health and water resources.' },
        { icon: '🔋', title: 'Renewable Energy', description: 'Installation of solar panels and promotion of clean energy solutions in tribal villages and community centers.' }
      ],
      impact: 'Environmental programs have restored 500 hectares of degraded land and established community-managed forests benefiting 10,000+ tribal families.',
      gallery: ['/photos/DSCN5844.jpg', '/photos/DSCN1960.JPG', '/photos/DSCN1961.JPG']
    },
    disaster: {
      title: 'Disaster Relief & Preparedness',
      subtitle: 'Emergency response and community resilience',
      description: 'Our disaster management program focuses on emergency response, relief distribution, and building community resilience against natural disasters and emergencies.',
      image: '/photos/DSCN5906.JPG',
      stats: [
        { number: '15,000+', label: 'People Assisted' },
        { number: '50+', label: 'Emergency Responses' },
        { number: '100+', label: 'Relief Camps Managed' },
        { number: '24/7', label: 'Emergency Helpline' }
      ],
      services: [
        { icon: '🚨', title: 'Emergency Response', description: 'Rapid response teams for natural disasters, medical emergencies, and crisis situations in tribal areas.' },
        { icon: '🏕️', title: 'Relief Camps', description: 'Establishment and management of temporary shelters with food, water, and medical facilities during disasters.' },
        { icon: '📦', title: 'Relief Distribution', description: 'Distribution of food packets, clothing, medicines, and essential supplies to disaster-affected families.' },
        { icon: '🎯', title: 'Preparedness Training', description: 'Community training programs on disaster preparedness, first aid, and emergency response protocols.' },
        { icon: '📞', title: 'Emergency Helpline', description: '24/7 helpline service for reporting emergencies and coordinating rescue operations in tribal areas.' },
        { icon: '🏗️', title: 'Infrastructure Restoration', description: 'Rebuilding damaged community infrastructure including schools, health centers, and water systems.' }
      ],
      impact: 'Disaster relief programs have provided immediate assistance to 15,000+ people during emergencies and trained 500+ community volunteers in disaster preparedness.',
      gallery: ['/photos/DSCN1960.JPG', '/photos/DSCN1961.JPG', '/photos/DSCN1962.JPG']
    },
    nutrition: {
      title: 'Nutrition & Food Security',
      subtitle: 'Ensuring healthy nutrition for all',
      description: 'Our nutrition program addresses malnutrition and food insecurity through supplementary feeding, kitchen gardens, and nutrition education in tribal communities.',
      image: '/photos/CIMG0543.JPG',
      stats: [
        { number: '5,000+', label: 'Children Covered' },
        { number: '1,200+', label: 'Pregnant Women Supported' },
        { number: '300+', label: 'Kitchen Gardens' },
        { number: '60%', label: 'Malnutrition Reduction' }
      ],
      services: [
        { icon: '🍎', title: 'Supplementary Nutrition', description: 'Providing nutritious food supplements to malnourished children, pregnant women, and lactating mothers.' },
        { icon: '🥬', title: 'Kitchen Gardens', description: 'Promoting household vegetable gardens to improve dietary diversity and nutritional intake of tribal families.' },
        { icon: '📊', title: 'Nutrition Monitoring', description: 'Regular health checkups and growth monitoring of children to track nutritional status and intervention needs.' },
        { icon: '👩‍🍳', title: 'Cooking Demonstrations', description: 'Training women in preparing nutritious meals using locally available ingredients and traditional recipes.' },
        { icon: '🌾', title: 'Food Fortification', description: 'Distribution of fortified foods and micronutrient supplements to address specific nutritional deficiencies.' },
        { icon: '📚', title: 'Nutrition Education', description: 'Awareness programs on balanced diet, hygiene practices, and importance of exclusive breastfeeding.' }
      ],
      impact: 'Nutrition programs have reduced severe malnutrition by 60% among children and improved overall health outcomes in 80+ tribal villages.',
      gallery: ['/photos/CIMG0523.JPG', '/photos/1467890522078 - Copy.jpg', '/photos/1374837994449.jpg']
    },
    rights: {
      title: 'Land Rights & Advocacy',
      subtitle: 'Protecting tribal land and forest rights',
      description: 'We advocate for tribal land rights, support legal documentation, and help communities secure their traditional land and forest rights under various government schemes.',
      image: '/photos/DSCN1906.JPG',
      stats: [
        { number: '800+', label: 'Land Titles Secured' },
        { number: '1,500+', label: 'Forest Rights Claims' },
        { number: '95%', label: 'Success Rate' },
        { number: '25+', label: 'Legal Cases Won' }
      ],
      services: [
        { icon: '📋', title: 'Documentation Support', description: 'Assistance in preparing and submitting land title applications and forest rights claims under FRA 2006.' },
        { icon: '⚖️', title: 'Legal Advocacy', description: 'Legal support and representation for tribal communities in land disputes and rights violation cases.' },
        { icon: '🏛️', title: 'Government Liaison', description: 'Facilitating communication between tribal communities and government officials for policy implementation.' },
        { icon: '📢', title: 'Awareness Campaigns', description: 'Educating tribal communities about their constitutional rights and available government schemes and benefits.' },
        { icon: '🤝', title: 'Community Mobilization', description: 'Organizing tribal communities for collective action and advocacy on land and forest rights issues.' },
        { icon: '📊', title: 'Research & Documentation', description: 'Documenting traditional land use patterns and customary rights to support legal claims and policy advocacy.' }
      ],
      impact: 'Land rights programs have helped secure legal titles for 800+ tribal families and protected 5,000+ acres of traditional tribal land from encroachment.',
      gallery: ['/photos/DSCN8304.JPG', '/photos/1467890522078 - Copy.jpg', '/photos/CIMG0543.JPG']
    }
  };

  const programKeys = Object.keys(programs);
  const currentProgram = programs[activeProgram];

  return (
    <div className="programs-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Programs</h1>
          <p>Comprehensive initiatives transforming tribal communities</p>
        </div>
        <div className="hero-bg">
          <img src="/photos/DSCN5885.JPG" alt="Programs" />
        </div>
      </section>

      {/* Program Navigation */}
      <section className="program-nav-section">
        <div className="container">
          <div className="program-nav">
            {programKeys.map(key => (
              <button
                key={key}
                className={`program-nav-btn ${activeProgram === key ? 'active' : ''}`}
                onClick={() => setActiveProgram(key)}
              >
                {programs[key].title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Detail */}
      <section className="program-detail-section">
        <div className="container">
          {/* Program Header */}
          <div className="program-header">
            <div className="program-info">
              <h2>{currentProgram.title}</h2>
              <h3>{currentProgram.subtitle}</h3>
              <p>{currentProgram.description}</p>
            </div>
            <div className="program-image">
              <img src={currentProgram.image} alt={currentProgram.title} />
            </div>
          </div>

          {/* Program Stats */}
          <div className="program-stats">
            {currentProgram.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Program Services */}
          <div className="program-services">
            <h3>Key Services & Interventions</h3>
            <div className="services-grid">
              {currentProgram.services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Impact */}
          <div className="program-impact">
            <h3>Impact & Outcomes</h3>
            <div className="impact-content">
              <p>{currentProgram.impact}</p>
              <div className="impact-gallery">
                {currentProgram.gallery.map((image, index) => (
                  <div key={index} className="impact-image">
                    <img src={image} alt={`${currentProgram.title} Impact ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="program-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Support Our Programs</h2>
            <p>Your contribution can help us expand these vital programs and reach more tribal communities in need.</p>
            <div className="cta-buttons">
              <a href="/donate" className="btn btn-primary">Donate Now</a>
              <a href="/volunteer" className="btn btn-secondary">Volunteer With Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;