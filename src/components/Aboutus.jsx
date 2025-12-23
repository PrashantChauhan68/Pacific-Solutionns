import React from 'react';
  import { Image, Video, ShoppingBag, Database } from 'lucide-react';
  import '../index.css';

  const Aboutus = () => {
    const products = [
      {
        icon: <Image />,
        title: "Text-to-Image AI",
        description: "Create stunning visuals from text prompts to boost creativity and engagement."
      },
      {
        icon: <Video />,
        title: "Image-to-Video AI",
        description: "Turn images into dynamic videos for marketing and storytelling."
      },
      {
        icon: <ShoppingBag />,
        title: "E-Commerce Platforms",
        description: "Launch your store easily. Add products and start receiving orders."
      },
      {
        icon: <Database />,
        title: "CMS Software",
        description: "Manage operations, track progress, and handle daily tasks smoothly."
      }
    ];

    return (
      <div className="aboutus-container">
        <div className="aboutus-wrapper">
          
          {/* About Us Section */}
          <div className="about-section">
            <span className="about-label" style={{ background:" rgb(248 249 250)",
        background: " rgb(248 249 250)",
        color: "#3b82f6",
        padding: "6px 18px",
        borderRadius:"10px",
        fontWeight: "600",
        fontSize: "1.3rem",
      
        width:"175px",}}>ABOUT US</span>
        
            <h2 className="about-title" style={{
              fontSize:"55px",
              fontWeight:"bolder",
            }}>
              Shiwansh Solutions for Your Business  
                        </h2>


            
            <div className="about-content">
              <p className="about-paragraph">
                Welcome to Shiwansh Solutions, a leading SaaS company dedicated to driving digital 
                transformation through innovative software development and cutting-edge SaaS products. 
                As a product-based, well-established leader in the tech industry, we empower businesses 
                worldwide with scalable, high-performance digital solutions tailored to their unique needs. 
                Our mission is to deliver transformative technology that fuels growth, streamlines operations, 
                and elevates success.
              </p>

              <p className="about-paragraph">
                At Shiwansh Solutions, we specialize in delivering powerful SaaS solutions, including 
                text-to-image AI tools, image-to-video platforms, and ready-to-use e-commerce platforms 
                where businesses can simply add products and start receiving orders. Whether you need 
                custom software development or ready-to-deploy SaaS products, our expert team leverages 
                the latest technologies to deliver measurable results.
              </p>
            </div>
          </div>

          {/* Our Products Section */}
          <div className="products-section">
           
            <div
    style={{
      textAlign: "left",
      marginBottom: "20px",
    }}
  >
    <span
      style={{
        background: " rgb(248 249 250)",
        color: "#3b82f6",
        padding: "6px 18px",
        borderRadius:"10px",
        fontWeight: "600",
        fontSize: "1.3rem",
      }}
    >
      OUR PRODUCTS
    </span>
  </div>
            
            <div className="products-grid">
              {products.map((product, index) => (
                <div key={index} className="product-card">
                  <div className="product-icon-wrapper">
                    {product.icon}
                  </div>
                  <h3 className="product-title">
                    {product.title}
                  </h3>
                  <p className="product-description">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  };

  export default Aboutus;













