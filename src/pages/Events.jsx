import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faMoon, faClock, faCalendar, faFlag, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const events = [
    {
      id: 1,
      city: 'Brisbane',
      date: '31st of October',
      fullDate: '31 Oct, 2025',
      time: '07:00 PM',
      location: 'Brisbane, Australia',
      title: 'Pharaoh Shall Drown',
      description: 'Experience timeless narratives from the Quran, Hadith and history come to life. Perfect for the entire family, Muslims and Non-Muslims alike.',
      type: 'story'
    },
    {
      id: 2,
      city: 'Sydney',
      date: '2nd of November',
      fullDate: '02 Nov, 2025',
      time: '07:00 PM',
      location: 'Sydney, Australia',
      title: 'Pharaoh Shall Drown',
      description: 'Experience timeless narratives from the Quran, Hadith and history come to life. Perfect for the entire family, Muslims and Non-Muslims alike.',
      type: 'story'
    },
    {
      id: 3,
      city: 'Perth',
      date: '8th of November',
      fullDate: '08 Nov, 2025',
      time: '07:00 PM',
      location: 'Perth, Australia',
      title: 'Pharaoh Shall Drown',
      description: 'Experience timeless narratives from the Quran, Hadith and history come to life. Perfect for the entire family, Muslims and Non-Muslims alike.',
      type: 'story'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fff2e9] py-12 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#841400] mb-8 font-serif">
          Events & Programs
        </h1>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-white border-2 border-[#841400] text-[#841400]'
                : 'bg-white text-[#841400] hover:bg-gray-50'
            }`}
          >
            Show all
          </button>
          
          <button
            onClick={() => setActiveFilter('quran')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              activeFilter === 'quran'
                ? 'bg-white border-2 border-[#841400] text-[#841400]'
                : 'bg-white text-[#841400] hover:bg-gray-50'
            }`}
          >
            <FontAwesomeIcon icon={faBookOpen} />
            Quran Week
          </button>
          
          <button
            onClick={() => setActiveFilter('story')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              activeFilter === 'story'
                ? 'bg-white border-2 border-[#841400] text-[#841400]'
                : 'bg-white text-[#841400] hover:bg-gray-50'
            }`}
          >
            <FontAwesomeIcon icon={faMoon} />
            Story Night
          </button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Top Header */}
              <div className="bg-[#841400] px-4 py-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faMoon} className="text-white text-lg" />
                <span className="text-white font-semibold">Story</span>
              </div>

              {/* Image Section */}
              <div className="relative h-64 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
                {/* Ocean waves effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 opacity-80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="text-3xl font-bold mb-2">{event.city}</h3>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1">
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="bg-[#fff2e9] p-4 space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faClock} className="text-[#841400]" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faCalendar} className="text-[#841400]" />
                  <span className="text-sm">{event.fullDate}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FontAwesomeIcon icon={faFlag} className="text-[#841400]" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>

              {/* Event Title and Description */}
              <div className="bg-[#fff2e9] px-4 pb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {event.description}
                </p>
              </div>

              {/* Book Button */}
              <div className="bg-[#fff2e9] px-4 pb-4">
                <button className="w-full bg-[#841400] text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#c51f02] transition-colors">
                  Book your place
                  <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;