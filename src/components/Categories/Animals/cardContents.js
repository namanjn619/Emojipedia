const jokes = [
  {
    key: 1,
    name: "Dog",
    img: "https://www.emojimeanings.net/img/emojis/dog-face_1f436.png" ,
    jokecontent: "A sweet dog face with a panting tongue and floppy ears. Stands for unconditional loyalty and attention. Can refer to your own pet (“I love my dog.“) or to people (“You sly dog!“)."
  },
  {
    key: 2,
    name: "Cat",
    img: "https://www.emojimeanings.net/img/emojis/cat-face_1f431.png",
    jokecontent: "The cute, playful and fluffy walkers on velvet paws are one of the most popular pets, especially in big cities. Cats are considered independent, stubborn, with the seventh sense. They symbolize wisdom, luck, individuality as well as affection and tenderness."
  },
  {
    key: 3,
    name: "Bear",
    img: "https://www.emojimeanings.net/img/emojis/bear-face_1f43b.png",
    jokecontent: "A cute teddy bear. Is considered cuddly. The bear can stand on two legs like a human. Is admired for its strength and power, but also feared. "
  },
  {
    key: 4,
    name: "Panda",
    img: "https://www.emojimeanings.net/img/emojis/panda-face_1f43c.png",
    jokecontent: "I'm going to a Cro concert! Pandas come from China, feed on bamboo and are threatened with extinction. You find something totally cute or as an expression of affection within friendships. "
  },
  {
    key: 5,
    name: "Tigre",
    img: "https://www.emojimeanings.net/img/emojis/tiger-face_1f42f.png",
    jokecontent: "The magnificent animal stands for strength, felinity and appetite. Central importance in Asia. There, the tiger is considered a wise leader (Buddhism) and national animal (India), it is a symbol of bravery and strength (China) and a Chinese zodiac. "
  },
  {
    key: 6,
    name: "Pig",
    img: "https://www.emojimeanings.net/img/emojis/pig-face_1f437.png",
    jokecontent: "Pigs might fly! At New Year's Eve the pig is one of the favorite lucky charms, apart from the chimney sweep. Represents prosperity and wealth. "
  },
  {
    key: 7,
    name: "Lion",
    img: "https://www.emojimeanings.net/img/emojis/lion-face_1f981.png",
    jokecontent: "A cute lion face, the king of animals and the jungle. A powerful, dangerous predator, a sublime ruler over its pack and a symbol of power.  "
  },
  {
    key: 8,
    name: "Frog",
    img: "https://www.emojimeanings.net/img/emojis/frog-face_1f438.png",
    jokecontent: "I have a frog in the throat! In mythology, stands for fertility, death and rebirth. Can also be seen in connection with prince charming (kiss the frog). Also known as Kermit, the frog from the Muppet Show. "
  },
  {
    key: 9,
    name: "Monkey",
    img: "https://www.emojimeanings.net/img/emojis/monkey-face_1f435.png",
    jokecontent: "That's monkey business! “You are a cheeky monkey!“ or “Real brass monkey weather!“. Can also be used in a playful way, while fooling around or referring to the animal itself. 	"
  },
  {
    key: 10,
    name: "Leopard",
    img: "https://www.emojimeanings.net/img/emojis/tiger_1f405.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "Three cheers and a tiger! Widespread in Asia, the predator with the strikingly striped fur is considered the largest cat species. King of the jungle. The tiger combines grace, courage, strength, wild beauty and sexual power. Likewise, it stands for a ballsy, freedom-loving and fearsome person	"
  },
  {
    key: 11,
    name: "Zebra",
    img: "https://www.emojimeanings.net/img/emojis/zebra-face_1f993.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "Lives in Africa, resembles the horse and has black and white stripes. Or white and black stripes? Everything has two sides, there is not only bright and dark. Negative and positive things are kept balanced. "
  },
  {
    key: 12,
    name: "Gorilla",
    img: "https://www.emojimeanings.net/img/emojis/gorilla_1f98d.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "Don’t mess with me! Standing, up to 1.75 m tall and weighing up to 200 kg: Gorillas are the largest apes. The gentle giants are vegetarians and endangered. Pejorative for a primitive or uncivilized person. Symbolizes strength, power, but also aggressiveness."
  },
  {
    key: 13,
    name: "Elephant",
    img: "https://www.emojimeanings.net/img/emojis/elephant_1f418.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "This house is a white elephant, you are the elephant in the room or you are seeing pink elephants. The heaviest surviving land mammal stands for wisdom. We are going on holiday: to a safari in Africa or to Asia. Unflattering symbol for an overweight person	"
  },
  {
    key: 14,
    name: "Camel",
    img: "https://www.emojimeanings.net/img/emojis/bactrian-camel_1f42b.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "You’re as dumb as a camel! The two-humped camel lives in Central Asia. Camels are adapted to extreme habitats (ship of the desert). Symbol of stamina, will to survive, staying power and resilience. "
  },
  {
    key: 15,
    name: "Giraffe",
    img: "https://www.emojimeanings.net/img/emojis/giraffe-face_1f992.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "The animal with the longest neck is native to Africa. Giraffes are up to 6 meters tall, have a maximum weight of 1,600 kilograms and reach a speed of up to 55 k.p.h. Symbol of farsightedness and gentleness."
  },{
    key: 16,
    name: "Kangaroo",
    img: "https://www.emojimeanings.net/img/emojis/kangaroo_1f998.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33" ,
    jokecontent: "We are going to the other end of the world! Apart from the koala, the kangaroo is the most famous animal in Australia. The world's largest marsupial has even made it to the Australian coat of arms. Kangaroos are walking with their tail, they cannot run backwards and they do not sweat. "
  },
  {
    key: 17,
    name: "Snail",
    img: "https://www.emojimeanings.net/img/emojis/snail_1f40c.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "Being as slow as a snail, moving at a snail's pace, sending letters by snail mail. Represents slowness and also vulnerability because of the fragile snail shell. Causes revulsion in many people. "
  },
  {
    key: 18,
    name: "Cow",
    img: "https://www.emojimeanings.net/img/emojis/cow_1f404.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "Female cattle symbolize fertility, prosperity and blessing in many cultures. Cows are considered affectionate and innocent. On the alpine cows are found in the pastures. Also swearword that aims at weight or intelligence. "
  },
  {
    key: 19,
    name: "Horse",
    img: "https://www.emojimeanings.net/img/emojis/horse_1f40e.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "“Wild horses couldn’t drag me there.” Horses symbolize beauty, elegance, passion and nature. Former workhorse and means of transportation, today riding is a popular hobby. Symbolically, the horse can also point to eroticism and sexuality. 	"
  },
  {
    key: 20,
    name: "Sheep",
    img: "https://www.emojimeanings.net/img/emojis/sheep_1f411.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "Counting sheep as a sleeping aid, separate the sheep from the goats, be a wolf in sheep's clothing or make sheep’s eyes at someone. Sheep blindly follow the flock and are considered good-natured and simple-minded. A gentle, easily manipulable and naive person is often referred to as sheep. "
  },
  {
    key: 21,
    name: "Deer",
    img: "https://www.emojimeanings.net/img/emojis/deer_1f98c.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "The deer is an antlered mammal and king of the forest. The doe belongs to the family of deer. Christmas symbol (Rudolph Reindeer) or famous character of the Disney movie Bambi. In mythology, both the deer and the unicorn are representations of soul and mind. In popular belief, the deer has also an erotic meaning.  "
  },
  {
    key: 22,
    name: "Peacock",
    img: "https://www.emojimeanings.net/img/emojis/peacock_1f99a.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "He is flouncing around like a peacock! In order to attract females, the peacock raises its feathers into a fan. Symbol of beauty, wealth and love. Also the epitome of vanity. "
  },
  {
    key: 23,
    name: "Parrot",
    img: "https://www.emojimeanings.net/img/emojis/parrot_1f99c.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "You parrot everyone or “She put her parrot make-up on“. The tropical bird with the bright colors is able to repeat words and even imitate telephone ringing. "
  },
  {
    key: 24,
    name: "Swan",
    img: "https://www.emojimeanings.net/img/emojis/swan_1f9a2.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "From the ugly duckling to the beautiful swan. The graceful bird with a long neck and brilliant white plumage appears in many myths and fairy tales. The swan commits itself to its partner for life. Symbolizes loyalty and purity. "
  },
  {
    key: 25,
    name: "Bunny",
    img: "https://www.emojimeanings.net/img/emojis/rabbit_1f407.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "Happy Easter or “That's cute!“ The bunny is usually sent on Easter and in spring. In addition, the bunny is in fourth place of the Chinese zodiac signs and is used to wish a happy New Year. The next year of the bunny is 2023. 	"
  },
  {
    key: 26,
    name: "Raccoon",
    img: "https://www.emojimeanings.net/img/emojis/raccoon_1f99d.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "There is a raccoon in the attic! Zorro on four paws. The cute, masked small bear with a striking black and white face originally comes from North America. The loner is nocturnal, color-blind and a good climber. "
  },
  {
    key: 27,
    name: "Beaver",
    img: "https://www.emojimeanings.net/img/emojis/beaver_1f9ab.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "He likes working with wood! The rodent sometimes builds gigantic dams and is considered the best lumberjack in the world. Beavers are loyal and monogamous. On land, the aquatic animal becomes clumsy and gawky	"
  },
  {
    key: 28,
    name: "Rat",
    img: "https://www.emojimeanings.net/img/emojis/rat_1f400.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "Easily confused with the mouse emoji. The rat is one of the twelve zodiac signs in the Chinese horoscope. It is also used negatively as an insult (“to rat on someone“) for traitors and untrustworthy persons. "
  },
  {
    key: 29,
    name: "Chipmunk",
    img: "https://www.emojimeanings.net/img/emojis/chipmunk_1f43f.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "Alvin and the Chipmunks. The cute animals live in America and in contrast to the squirrel they have stripes. It can store its food in the thick cheeks to feed on it later unhurriedly. Let's go for a walk in the park! 	"
  },
  {
    key: 30,
    name: "Ant",
    img: "https://www.emojimeanings.net/img/emojis/ant_1f41c.png?ezimgfmt=rs:60x60/rscb33/ng:webp/ngcb33",
    jokecontent: "The diligent animals live in a colony, are organized and can carry many times their body weight. Ants are found worldwide and they can grow between 1 mm and 7 cm. Are seen as the health police of the forest. Symbol of zeal and diligence."
  },
];

export default jokes;
