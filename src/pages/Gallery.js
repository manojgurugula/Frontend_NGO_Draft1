import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const baseImages = [
    { src: '/photos/1374837994449.jpg', category: 'education', title: 'Student Support', description: 'Providing educational materials to students' },
    { src: '/photos/1461050054575 - Copy.jpg', category: 'livelihoods', title: 'Farmer Training', description: 'Agricultural training for tribal farmers' },
    { src: '/photos/1467890522078 - Copy.jpg', category: 'community', title: 'Community Meeting', description: 'Village development planning session' },
    { src: '/photos/CIMG0523.JPG', category: 'education', title: 'School Support', description: 'Educational infrastructure development' },
    { src: '/photos/CIMG0524.JPG', category: 'livelihoods', title: 'Skill Development', description: 'Vocational training program' },
    { src: '/photos/CIMG0543.JPG', category: 'community', title: 'Community Gathering', description: 'Village community meeting' },
    { src: '/photos/DSCN1906.JPG', category: 'events', title: 'Cultural Event', description: 'Traditional festival celebration' },
    { src: '/photos/DSCN1960.JPG', category: 'environment', title: 'Tree Plantation', description: 'Environmental conservation drive' },
    { src: '/photos/DSCN1961.JPG', category: 'environment', title: 'Green Initiative', description: 'Community plantation program' },
    { src: '/photos/DSCN1962.JPG', category: 'livelihoods', title: 'Cooperative Meeting', description: 'Farmer cooperative society meeting' },
    { src: '/photos/DSCN5844.jpg', category: 'environment', title: 'Sustainable Practices', description: 'Promoting eco-friendly practices' },
    { src: '/photos/DSCN5885.JPG', category: 'livelihoods', title: 'Women Empowerment', description: 'Women\'s self-help group meeting' },
    { src: '/photos/DSCN5906.JPG', category: 'health', title: 'Mobile Clinic', description: 'Mobile medical unit in action' },
    { src: '/photos/DSCN8229.JPG', category: 'education', title: 'Learning Center', description: 'Community learning center' },
    { src: '/photos/DSCN8246.JPG', category: 'education', title: 'Mobile Education', description: 'Mobile education unit' },
    { src: '/photos/DSCN8304.JPG', category: 'education', title: 'Career Guidance', description: 'Career counseling session' }
  ];

  // Generate 40 images by repeating the base images with different titles
  const galleryItems = [];
  const titles = [
    'Medical Camp', 'Health Checkup', 'School Visit', 'Student Support', 'Farmer Training',
    'Community Meeting', 'Health Awareness', 'School Support', 'Skill Development', 'Community Gathering',
    'Cultural Event', 'Tree Plantation', 'Green Initiative', 'Cooperative Meeting', 'Mobile Clinic',
    'Emergency Service', 'Medical Support', 'Traditional Medicine', 'Cashew Farming', 'Agricultural Training',
    'Women Empowerment', 'Craft Training', 'Youth Program', 'Study Materials', 'Learning Center',
    'Mobile Education', 'Career Guidance', 'Environment Awareness', 'Conservation Drive', 'Sustainable Practices',
    'Community Development', 'Annual Event', 'School Program', 'Livelihood Training', 'Community Leader',
    'Health Camp', 'Volunteer Training', 'Workshop', 'Awareness Program', 'Development Project'
  ];

  for (let i = 0; i < 40; i++) {
    const baseImage = baseImages[i % baseImages.length];
    galleryItems.push({
      id: i + 1,
      src: baseImage.src,
      category: baseImage.category,
      title: titles[i],
      description: baseImage.description
    });
  }

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryItems.length },
    { id: 'health', name: 'Health Programs', count: galleryItems.filter(item => item.category === 'health').length },
    { id: 'education', name: 'Education', count: galleryItems.filter(item => item.category === 'education').length },
    { id: 'livelihoods', name: 'Livelihoods', count: galleryItems.filter(item => item.category === 'livelihoods').length },
    { id: 'environment', name: 'Environment', count: galleryItems.filter(item => item.category === 'environment').length },
    { id: 'community', name: 'Community', count: galleryItems.filter(item => item.category === 'community').length },
    { id: 'events', name: 'Events', count: galleryItems.filter(item => item.category === 'events').length }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Photo Gallery</h1>
          <p>Capturing moments of transformation and hope</p>
        </div>
        <div className="hero-bg">
          <img src="/photos/DSCN5844.jpg" alt="Gallery" />
        </div>
      </section>

      <section className="gallery-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Our Work in Pictures</h2>
            <p>These images tell the story of our 23-year journey serving tribal and rural communities.</p>
          </div>
        </div>
      </section>

      <section className="gallery-filter">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
                <span className="count">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredItems.map(item => (
              <div 
                key={item.id} 
                className="gallery-item"
                onClick={() => openLightbox(item)}
              >
                <div className="gallery-image">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    loading="lazy"
                  />
                </div>
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{item.title}</h3>
                  <p className="gallery-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} className="lightbox-image" />
            <div className="lightbox-info">
              <h3 className="lightbox-title">{selectedImage.title}</h3>
              <p className="lightbox-description">{selectedImage.description}</p>
            </div>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-prev" onClick={prevImage}>‹</button>
            <button className="lightbox-next" onClick={nextImage}>›</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;