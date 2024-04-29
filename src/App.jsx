
import Slider from 'react-slick';
import './App.css';
import About from './Components/About';
import Client from './Components/Client';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Plans from './Components/Plans';
import Platforms from './Components/Platforms';
import Process from './Components/Process';
import Tagline from './Components/Tagline';
import WhyChoose from './Components/WhyChoose';
import WhyOpposite from './Components/WhyOpposite';


function App() {
  const why = {
    title : "We Take Social Media Off Your 'To-Do' List!",
    description : "Tired of juggling social media? Let us take that off your plate! Our team’s got your back – from witty posts to timely updates, we’ll handle it all while you focus on bossing your business. Say goodbye to social media stress and hello to more time for what matters!",
    url: "images/smiley-face.webp"
  }
  const why2 = {
    title : "We've Got It All! SEO Blogs, Social Media Marketing.",
    description : "We provide a comprehensive range of services to enhance your online presence. From SEO-optimised blogs that drive traffic to your website,, and targeted social media ads that engage your audience – we’ve got you covered. Our goal is to help you succeed in the digital world by offering solutions that meet your specific needs and goals.",
    url: "images/boost-graph.webp"
  }

  const whyOpposite = {
    title : "Eye-Catching Visuals That Grab Attention!",
    description : "Unlike other agencies that might slap on extra fees for branded or designed posts, we’ve got you covered! We include those eye-catching visuals as part of the deal. So, no need to stress about extra costs – just sit back and let your content shine while we handle the creative side of things!",
    url: "images/social-media-post-collage.webp"
  }
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Tagline/>
    <WhyChoose why={why} />
    <WhyOpposite why={whyOpposite}/>
    <WhyChoose why={why2} />
    <Process/>
    <Plans/>
    <Client/>
    <Platforms/>
    <FAQ/>
    <Footer/>
    </>
  );
}

export default App;
