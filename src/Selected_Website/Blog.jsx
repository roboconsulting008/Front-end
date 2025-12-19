import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const Blog = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentBlogSlide, setCurrentBlogSlide] = useState(0);
  const observerRef = useRef(null);

  const blogPosts = [
    {
      title: "The Future of Cloud Computing in 2024",
      excerpt: "Explore the latest trends and innovations shaping the cloud computing landscape.",
      author: "Alex Thompson",
      date: "Aug 15, 2024",
      readTime: "5 min read",
      category: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      featured: true
    },
    {
      title: "Cybersecurity Best Practices for SMBs",
      excerpt: "Essential security measures every small and medium business should implement.",
      author: "Maria Garcia",
      date: "Aug 10, 2024",
      readTime: "7 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop"
    },
    {
      title: "AI Integration: A Step-by-Step Guide",
      excerpt: "How to successfully integrate artificial intelligence into your existing workflows.",
      author: "David Kim",
      date: "Aug 5, 2024",
      readTime: "6 min read",
      category: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop"
    },
    {
      title: "Mobile-First Development Strategies",
      excerpt: "Why mobile-first approach is crucial for modern application development.",
      author: "Lisa Chen",
      date: "Jul 30, 2024",
      readTime: "4 min read",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop"
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  // Auto-rotate blog slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBlogSlide((prev) => (prev + 1) % Math.ceil(blogPosts.length / 2));
    }, 4500);
    return () => clearInterval(interval);
  }, [blogPosts.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" data-animate id="blog">
      <div className="lg:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center space-y-4 mb-16 transform transition-all duration-1000 ${visibleSections.has('blog') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with our expert analysis on technology trends and industry developments
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentBlogSlide * 100}%)` }}>
            {Array.from({ length: Math.ceil(blogPosts.length / 2) }, (_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.slice(slideIndex * 2, slideIndex * 2 + 2).map((post, index) => (
                    <article 
                      key={index} 
                      className={`bg-white rounded-2xl overflow-hidden  transition-all duration-500 transform hover:-translate-y-4 group cursor-pointer ${post.featured ? 'ring-2 ring-blue-200' : ''}`}
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </div>
                        {post.featured && (
                          <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                            Featured
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                          <span className="mx-2">•</span>
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="ml-2 text-sm text-gray-700 font-medium">{post.author}</span>
                          </div>
                          <button className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300 group">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: Math.ceil(blogPosts.length / 2) }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBlogSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentBlogSlide ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Blog;