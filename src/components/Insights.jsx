import React, { useEffect, useState, useCallback } from "react";
import img1 from "../assets/Group 235.png";
import img2 from "../assets/image 132.png";
import img3 from "../assets/Rectangle 190.png";

// Configuration for API endpoints
const API_CONFIG = {
  BASE_URL: 'https://saurav.tech/NewsAPI/top-headlines/category',
  CATEGORIES: {
    TECHNOLOGY: 'technology/in.json',
    BUSINESS: 'business/in.json',
    ENTERTAINMENT: 'entertainment/in.json'
  }
};

const Insights = () => {
  // Initial state with default insights
  const [insights, setInsights] = useState([
    {
      id: 1,
      image: img1,
      date: "Dec 18",
      title: "Top 10+ DevOps Consulting Companies to Watch in 2025",
      category: "Cloud & DevOps",
      avatar: img2,
      trending: true
    },
    {
      id: 2,
      image: img3,
      date: "Dec 18, 2024",
      title: "A Practical Guide to Building A Pharmacy App Like Walgreens",
      category: "Development",
      avatar: img2,
      trending: true
    },
    {
      id: 3,
      image: img3,
      date: "Dec 18, 2024",
      title: "A Practical Guide to Building A Pharmacy App Like Walgreens",
      category: "Development",
      avatar: img2,
      trending: true
    }
  ]);

  // Loading and error states
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch insights function
  const fetchInsights = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/${API_CONFIG.CATEGORIES.TECHNOLOGY}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Transform API data to match original structure
      const mappedInsights = data.articles.slice(0, 1000).map((article, index) => ({
        id: index + 1,
        image: article.urlToImage || img3,
        date: formatDate(article.publishedAt),
        title: truncateTitle(article.title),
        category: article.source.name || 'Technology',
        avatar: img2,
        trending: true
      }));

      // Ensure at least 3 insights are always available
      const finalInsights = mappedInsights.length >= 3 
        ? mappedInsights 
        : [
            ...mappedInsights, 
            ...insights.slice(mappedInsights.length)
          ];

      // Update insights while maintaining original structure
      setInsights(finalInsights);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch insights:", error);
      setError(error.message);
      setIsLoading(false);
    }
  }, []);

  // Fetch insights on mount
  useEffect(() => {
    fetchInsights();
  }, [fetchInsights]);

  // Helper function to format date
  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return "Recent";
    }
  };

  // Helper function to truncate long titles
  const truncateTitle = (title, maxLength = 60) => {
    return title && title.length > maxLength 
      ? `${title.substring(0, maxLength)}...` 
      : title;
  };

  // Loading state - using original styling
  if (isLoading) {
    return (
      <>
        <div className="flex flex-col md:flex-row justify-between bg-white px-5 md:px-10 py-10 space-y-10 md:space-y-0 ">
          <div className="md:ml-12">
            <h1 className="text-customBodyColor font-bold text-center text-[1.8rem] md:text-2xl mt-5">
              Loading Insights...
            </h1>
          </div>
        </div>
      </>
    );
  }

  // Error state - using original styling
  if (error) {
    return (
      <>
        <div className="flex flex-col md:flex-row justify-between bg-white px-5 md:px-10 py-10 space-y-10 md:space-y-0 ">
          <div className="md:ml-12">
            <h1 className="text-customBodyColor font-bold text-center text-[1.8rem] md:text-2xl mt-5 text-red-500">
              Failed to Load Insights
            </h1>
            <div className="text-center mt-4">
              <button 
                onClick={fetchInsights}
                className="bg-custom-gradient px-4 py-2 rounded-full text-white"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between bg-white px-5 md:px-10 py-10 space-y-10 md:space-y-0 ">
        <div className="md:ml-12">
          <h1 className="text-customBodyColor font-bold text-center text-[1.8rem] md:text-2xl mt-5  ">
            Latest Industry Insights
          </h1>
          <div className="md:h-96 h-96 w-80 rounded-3xl mt-5 bg-whiteShade ml-2 ">
            <div className="w-full h-48 overflow-hidden rounded-3xl">
              <img 
                src={insights[0].image} 
                className="w-full h-full object-cover relative bottom-2" 
                alt={insights[0].title} 
              />
            </div>
            <p className="font-thin text-custom ml-3 mt-2">{insights[0].date}</p>
            <p className="font-medium text-bold ml-3 mt-4">
              {insights[0].title}
            </p>
            <img
              src={insights[0].avatar}
              className="font-thin text-custom ml-3 h-8 w-8 mt-4"
              alt="Author Avatar"
            />
            <div className="flex justify-between space-x-1">
              <div>
                <p className="font-thin text-sm ml-3 mt-4">{insights[0].category}</p>
              </div>
              <div>
                <button className="bg-custom-gradient w-28 h-6  rounded-full mr-5 text-[0.7rem] font-medium">
                  Trending
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block ">
          <h1 className=" text-lg md:text-2xl font-light mt-1 md:mt-0 ml-0 md:ml-24 text-center md:text-left  ">
            Check out the blog section for recent developments, trends, and
            developments in the development industry.
          </h1>
          <div
            className=" space-y-5   md:ml-20 h-96 overflow-y-auto "
            style={{
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              scrollbarColor: "transparent transparent",
            }}
          >
            {insights.slice(1).map((insight) => (
              <div key={insight.id} className="w-[50rem] h-44 bg-whiteShade ml-9 rounded-xl relative">
                <div className="absolute left-0 top-0 bottom-0 w-44 overflow-hidden">
                  <img 
                    src={insight.image} 
                    alt={insight.title} 
                    className="w-full h-full object-cover " 
                  />
                </div>
                <div className="ml-52 relative">
                  <p className="text-xl w-[29rem] font-medium mt-1 top-5">
                    {insight.title}
                  </p>
                  <img 
                    src={insight.avatar} 
                    alt="Author Avatar" 
                    className="h-6 mt-2" 
                  />
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-thin text-sm">
                      {insight.date}
                    </p>
                    <button className="bg-custom-gradient w-28 h-6 rounded-full mr-5 text-[0.7rem] font-medium">
                      Trending
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
