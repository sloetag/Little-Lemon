import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p> 

Little Lemon began as a dream shared by two cousins, Mario and Adrian, who grew up cooking together in their grandmother’s sun-drenched kitchen on the Mediterranean coast. Inspired by her simple, vibrant recipes—bursting with lemon, olive oil, fresh herbs, and love—they brought those flavors to the city. What started as a tiny corner bistro has blossomed into a beloved neighborhood gem, where every dish honors tradition while embracing fresh, local ingredients. At Little Lemon, we don’t just serve food—we share memories, warmth, and the timeless joy of gathering around the table. Come taste the Mediterranean, made with heart.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
