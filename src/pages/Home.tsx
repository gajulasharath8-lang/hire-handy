import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, CheckCircle, Star, ArrowRight, MapPin, Clock, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { StarRating } from '../components/ui/StarRating';
import { useAuth } from '../contexts/AuthContext';

export const Home: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  const services = [
    { name: 'Plumbing', icon: '🔧', workers: 156 },
    { name: 'Electrical', icon: '⚡', workers: 243 },
    { name: 'Carpentry', icon: '🔨', workers: 189 },
    { name: 'Cleaning', icon: '🧹', workers: 298 },
    { name: 'Painting', icon: '🎨', workers: 167 },
    { name: 'Gardening', icon: '🌱', workers: 134 }
  ];

  const featuredWorkers = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      profession: 'Plumber',
      rating: 4.8,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      location: 'Mumbai, Maharashtra',
      experience: '5+ years'
    },
    {
      id: '2',
      name: 'Amit Singh',
      profession: 'Electrician',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      location: 'Delhi, India',
      experience: '7+ years'
    },
    {
      id: '3',
      name: 'Priya Sharma',
      profession: 'House Cleaner',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      location: 'Bangalore, Karnataka',
      experience: '3+ years'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Workers' },
    { number: '50,000+', label: 'Happy Customers' },
    { number: '100+', label: 'Cities Covered' },
    { number: '4.8', label: 'Average Rating' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/hero-workers.jpg" 
            alt="Professional workers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Find Trusted
            <span className="block text-secondary">Service Workers</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
            Connect with skilled professionals for all your home service needs
          </p>
          
          {!isAuthenticated ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Link to="/register?role=customer">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
                  <Search className="mr-2" />
                  Find Workers
                </Button>
              </Link>
              <Link to="/register?role=worker">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                  <Users className="mr-2" />
                  Join as Worker
                </Button>
              </Link>
            </div>
          ) : (
            <div className="animate-scale-in">
              <Link to="/search">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
                  <Search className="mr-2" />
                  Find Workers Now
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Services
            </h2>
            <p className="text-xl text-gray-600">
              Choose from a wide range of professional services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 card-hover cursor-pointer group relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  {service.name === 'Electrical' && (
                    <img src="/src/assets/tech-support.jpg" alt="Tech Support" className="w-full h-full object-cover" />
                  )}
                  {service.name === 'Carpentry' && (
                    <img src="/src/assets/design-services.jpg" alt="Design Services" className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600">{service.workers} workers</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/search">
              <Button className="btn-primary">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Workers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Rated Workers
            </h2>
            <p className="text-xl text-gray-600">
              Meet some of our highest-rated professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorkers.map((worker) => (
              <Card key={worker.id} className="p-6 card-hover cursor-pointer">
                <div className="flex items-center mb-4">
                  <img
                    src={worker.image}
                    alt={worker.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{worker.name}</h3>
                    <p className="text-gray-600">{worker.profession}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <StarRating rating={worker.rating} size="sm" showRating />
                  <span className="text-sm text-gray-500">({worker.reviews} reviews)</span>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {worker.location}
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  {worker.experience} experience
                </div>

                <Button className="w-full btn-outline">
                  View Profile
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get your work done in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Search & Browse</h3>
              <p className="text-gray-600">
                Find the right professional for your needs by browsing profiles and reviews
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Connect & Book</h3>
              <p className="text-gray-600">
                Contact workers directly and book their services at your convenience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Get Work Done</h3>
              <p className="text-gray-600">
                Sit back and relax while skilled professionals complete your work
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of satisfied customers and skilled workers
          </p>
          
          {!isAuthenticated ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register?role=customer">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4">
                  Find Workers
                </Button>
              </Link>
              <Link to="/register?role=worker">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
                  Become a Worker
                </Button>
              </Link>
            </div>
          ) : (
            <Link to={user?.role === 'customer' ? '/search' : '/profile'}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4">
                {user?.role === 'customer' ? 'Find Workers' : 'Manage Profile'}
              </Button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};