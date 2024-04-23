import React, { useEffect, useState } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import blog1 from "../../Assets/blog1.jpg";
import blog2 from "../../Assets/blog2.jpg";
import blog3 from "../../Assets/blog3.jpg";
import blog4 from "../../Assets/blog4.jpg";
import blog5 from "../../Assets/blog5.jpg";
import blog6 from "../../Assets/blog6.jpg";
import blog7 from "../../Assets/blog7.jpg";
import blog8 from "../../Assets/blog8.jpg";
import blog9 from "../../Assets/blog9.jpg";
import blog10 from "../../Assets/blog10.jpg";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const blog = [
  {
    id: 1,
    title: "Tales from the Traveler",
    desc: "Greetings, fellow wanderers, In the heart of every traveler lies an insatiable curiosity, a relentless desire to explore the unexplored and to unravel the mysteries of faraway lands. We are not just nomads; we are storytellers, weaving tales of our adventures across continents, under starlit skies, and through ancient cities. Each passport stamp is not just an inked emblem; it's a chapter in the book of our lives, filled with encounters, friendships, and the sweet taste of the unknown.As I put pen to paper (or rather, fingers to keyboard) in this virtual diary, I invite you to step into the shoes of an adventurer. Together, let’s wander off the beaten paths, where the echo of our footsteps mingles with the whispers of history, and where every turn promises a new discovery. Whether you're an armchair traveler, a seasoned explorer, or someone daydreaming of their next escapade, this space is yours. Here, we are bound by our shared love for exploration, our fascination with diverse cultures, and our reverence for the natural wonders that adorn our planet. Day 1: The Arrival:As the plane touched down on the sun-kissed island, a sense of excitement washed over me. Santorini welcomed me with open arms,and I instantly felt at home amidst the warm hospitality of the locals. After settling into a charming guesthouse in Oia, Iembarked on a leisurely stroll through its narrow, winding streets. Every corner revealed a postcard-worthy view, and the iconic blue-domed churches added a touch of magic to the landscape.Day 2: Sailing the Caldera:One cannot truly experience Santorini without sailing the cerulean waters of the Caldera. I joined a sailing excursion that took me on a journey around the island's volcanic craters. The boat glided smoothly on the gentle waves, offering breathtaking views of the cliffs and the charming villages perched atop them. We anchored near the volcanic hot springs, where I indulged in a relaxing dip,rejuvenating my body and soul.Day 3: Culinary Delights:Santorini is a paradise for food enthusiasts, and I made it a mission to savor its delectable cuisine. From fresh seafood served at seaside tavernas to traditional Greek delicacies,every meal was a gastronomic delight. The local wines,especially the renowned Assyrtiko, paired perfectly with the flavors of the Mediterranean, leaving my taste buds dancing with joy.Day 4: Sunset at Amoudi Bay :The highlight of my journey was undoubtedly the sunset at Amoudi Bay. I made my way down the stone steps, following the tantalizing aroma of grilled seafood.As the sun descended, painting the sky in hues of orange and pink, I dined at a seaside restaurant, indulging in a feast while basking in the golden glow of the setting sun. The moment was surreal, etching a memory that would last a lifetime.And so, my fellow travelers, my sojourn in Santorini came to an end,leaving me with a heart brimming with gratitude and a soul enriched by the wonders of this enchanting island. As I bid adieu to the whitewashed cliffs and the endless Aegean horizon,I carry with me the spirit of adventure and the promise of new explorations.Until next time, may your journeys be filled with discovery and may the road lead you to places where dreams meet reality.Bon voyage!",
    category: "Wanderlust Diaries",
    cover: blog1,
    date: "APRIL 05, 2018",
  },

  {
    id: 2,
    title: "Exploring the Intersection of Art and Literature",
    desc: "Introduction: Art and literature, two distinct forms of expression, have always shared a profound connection. The brushstroke of a painter and the stroke of a writer's pen both create worlds, evoke emotions, and capture the human experience. In this intricate dance between colors and words, artists and writers find a unique intersection, a space where creativity knows no bounds. This blog delves into the captivating realm where palette meets pen, exploring the symbiotic relationship between art and literature.The Birth of Expression:Since ancient times, humans have been driven to express their thoughts, emotions, and stories. Early cave paintings tell tales of hunting exploits, while ancient manuscripts carry myths and legends. Art and literature served as mediums for communication, helping civilizations connect and share their narratives. The evolution of these forms of expression gave rise to rich cultural tapestries, laying the foundation for the intricate relationship we observe today.The Language of Colors: Artists, armed with palettes of vibrant hues, create visual narratives that resonate with viewers on a profound level. Colors convey emotions, from the passionate reds to the calming blues, each shade telling a unique story. The strokes of a brush can depict an entire saga, capturing the essence of characters, places, and emotions. Artists like Vincent van Gogh and Pablo Picasso mastered this language, using colors to express the depths of human psyche, thereby intertwining the visual and emotional aspects of the human experience.The Power of Words: On the flip side, writers, armed with nothing but a pen and paper, weave intricate worlds through the power of words. Literature dives deep into the complexities of human existence, exploring themes of love, loss, identity, and society. Through storytelling, writers can transport readers to far-off lands, introduce them to fantastical creatures, and make them ponder the profound questions of life. Authors such as Shakespeare, Jane Austen, and Gabriel Garcia Marquez have left an indelible mark on the literary world, showcasing the endless possibilities of the written word.The Confluence of Art and Literature: When art and literature converge, magic happens. Visual artists often find inspiration in literary works, translating words into images. Illustrations breathe life into stories, allowing readers to visualize characters and settings in a way that complements their imagination. Think of the whimsical drawings in Lewis Carroll's Alice in Wonderland, which have become inseparable from the narrative itself. Similarly, literature often draws inspiration from visual art, with authors describing paintings, sculptures, and artworks within their stories, adding layers of depth and meaning.Artistic Movements and Literary Genres: Throughout history, artistic movements and literary genres have influenced each other significantly. The surrealism of Salvador Dali found its counterpart in the magical realism of authors like Marquez, blurring the lines between reality and fantasy. The impressionist paintings of Claude Monet mirrored the lyrical prose of poets like William Wordsworth, both capturing the fleeting beauty of nature. These interconnections have given rise to hybrid forms of art and literature, where boundaries dissolve, and creativity flourishes.Conclusion: A Harmonious Symphony of Creativity.In the vast tapestry of human expression, the intersection of art and literature stands as a testament to the boundless creativity of the human mind. The palette and the pen, though distinct, find common ground in their ability to evoke emotions, provoke thoughts, and inspire change. As we continue to explore this harmonious symphony of creativity, let us celebrate the artists and writers who blur the lines between these forms, reminding us that the essence of human experience lies in the intricate dance between colors and words, between palette and pen.",
    category: "Palette & Pen",
    cover: blog2,
    date: "MARCH 15, 2018",
  },
  {
    id: 3,
    title: "A Culinary Journey",
    desc: "Introduction: Food is more than mere sustenance; it is a journey that engages all our senses. It has the power to nourish not only our bodies but also our souls. In the delightful world of culinary arts, every recipe tells a story, and every dish is a work of art. Join us on a culinary expedition, where flavors, aromas, and textures come together to create a symphony of taste. This is not just about food; it's about nourishing our lives and flourishing in the process. Chapter 1: The Origins of Flavor: Our culinary journey begins with understanding the origins of flavors. From the spice markets of India to the olive groves of Italy, every culture contributes its unique essence to the global palate. We'll explore the history behind spices, herbs, and exotic ingredients, uncovering the secrets that chefs have guarded for centuries. Understanding these flavors is not just about cooking; it's about appreciating the diversity of our world.Chapter 2: The Art of Cooking: Cooking is an art form, and every chef is an artist. We delve into the techniques that transform raw ingredients into culinary masterpieces. From the precise chopping of vegetables to the perfect sear on a steak, we'll unravel the mysteries of the kitchen. Through the eyes of passionate chefs, we'll discover the creativity and innovation that turn a simple recipe into a gastronomic wonder. Chapter 3: The Joy of Sharing: Food is meant to be shared. In this chapter, we explore the joy of communal dining, from family gatherings to elaborate feasts with friends. We'll discuss the cultural significance of sharing meals and how it strengthens bonds between people. Along the way, we'll encounter heartwarming stories of chefs and home cooks who use their culinary skills to bring communities together, emphasizing that the act of sharing goes beyond the table. Chapter 4: Nourishing the Body and Soul: Food is medicine, and the right nutrients can heal and rejuvenate our bodies. We'll explore the world of nutrition, focusing on the balance between indulgence and well-being. From superfoods to mindful eating practices, we'll discover how food can be a source of vitality. Additionally, we'll explore the therapeutic aspects of cooking, highlighting how the process itself can be meditative and soothing, nourishing not just the body but also the soul. Chapter 5: Flourishing Through Food: Our culinary journey culminates in the concept of flourishing. Food has the power to inspire, empower, and transform lives. We'll meet individuals and organizations that use food as a means of social change, addressing issues such as hunger, food waste, and sustainability. From farm-to-table initiatives to culinary education programs, we'll learn how the food industry can be a force for good, helping communities flourish in a sustainable and inclusive way. Conclusion: The Endless Feast: As our culinary journey comes to an end, we realize that the feast of flavors, experiences, and emotions is endless. The world of food is ever-evolving, and there's always something new to explore and savor. Nourishing our bodies with wholesome food, indulging in culinary delights, and sharing these experiences with others, we find ourselves not just nourished but also flourishing in the delightful tapestry of tastes and aromas that life has to offer. So, let's continue this journey, one recipe at a time, and let the culinary adventures never cease. Bon appétit!",
    category: "Nourish & Flourish",
    cover: blog3,
    date: "MARCH 15, 2018",
  },
  {
    id: 4,
    title: "Navigating the Digital Age",
    desc: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.",
    category: "Tech Tonic",
    cover: blog4,
    date: "February 20, 2018",
  },
  {
    id: 5,
    title: "Capturing Life's Stories Through Photography",
    desc: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.",
    category: "Beyond the Lens",
    cover: blog5,
    date: "February 20, 2018",
  },
  {
    id: 6,
    title: "Celebrating Poetry and Artistic Expression",
    desc: "Magnis modipsae que lib voloratati andigen daepedor quiate ut reporemni aut labor. Laceaque quiae sitiorem ut restibusaes es tumquam core posae volor remped modis volor. Doloreiur qui commolu ptatemp dolupta orem retibusam emnis et consent accullignis lomnus. We don't want to overload you with hundreds of styles you don't want, or need. We give you a strong base to express your own creativity.",
    category: "Verse & Vision",
    cover: blog6,
    date: "February 20, 2018",
  },
  {
    id: 7,
    title: "Unraveling the Wonders of Science",
    desc: "Magnis modipsae que lib voloratati andigen daepedor quiate ut reporemni aut labor. Laceaque quiae sitiorem ut restibusaes es tumquam core posae volor remped modis volor. Doloreiur qui commolu ptatemp dolupta orem retibusam emnis et consent accullignis lomnus. We don't want to overload you with hundreds of styles you don't want, or need. We give you a strong base to express your own creativity.",
    category: "Curious Minds",
    cover: blog7,
    date: "February 20, 2018",
  },
  {
    id: 8,
    title: "DIY Projects and Handmade Happiness",
    desc: "Magnis modipsae que lib voloratati andigen daepedor quiate ut reporemni aut labor. Laceaque quiae sitiorem ut restibusaes es tumquam core posae volor remped modis volor. Doloreiur qui commolu ptatemp dolupta orem retibusam emnis et consent accullignis lomnus. We don't want to overload you with hundreds of styles you don't want, or need. We give you a strong base to express your own creativity.",
    category: "Crafted Curiosities",
    cover: blog8,
    date: "February 20, 2018",
  },
  {
    id: 9,
    title: "Cultivating a Beautiful Garden and a Sustainable Lifestyle",
    desc: "Magnis modipsae que lib voloratati andigen daepedor quiate ut reporemni aut labor. Laceaque quiae sitiorem ut restibusaes es tumquam core posae volor remped modis volor. Doloreiur qui commolu ptatemp dolupta orem retibusam emnis et consent accullignis lomnus. We don't want to overload you with hundreds of styles you don't want, or need. We give you a strong base to express your own creativity.",
    category: "Green Thumb Gazette",
    cover: blog9,
    date: "February 20, 2018",
  },

  {
    id: 10,
    title: "Exploring the Universe and Beyond",
    desc: "Magnis modipsae que lib voloratati andigen daepedor quiate ut reporemni aut labor. Laceaque quiae sitiorem ut restibusaes es tumquam core posae volor remped modis volor. Doloreiur qui commolu ptatemp dolupta orem retibusam emnis et consent accullignis lomnus. We don't want to overload you with hundreds of styles you don't want, or need. We give you a strong base to express your own creativity.",
    category: "Infinite Horizons",
    cover: blog10,
    date: "February 20, 2018",
  },
];

const Details = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id));
    if (blogs) {
      setBlogs(blogs);
    }
  }, []);
  return (
    <>
      {blogs ? (
        <section className="singlePost">
          <div className="container">
            <div className="left">
              <img src={blogs.cover} />
            </div>
            <div className="right">
              <div className="buttons">
                <button className="button">
                  <BsPencilSquare />
                </button>
                <button className="button">
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>{blogs.title}</h1>
              <p>{blogs.desc}</p>
              <p>
             
              </p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Details;
