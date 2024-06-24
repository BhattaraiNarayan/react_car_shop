import bmw from '../images/bmw.png';
import corolla from '../images/toyota.png';
import honda from '../images/scorpio.png';
import mercedes from '../images/mercedes.png';
import nissan from '../images/nissan.png';
import volkswagen from '../images/scorpio2.png';
import tesla from '../images/sporty.png';
import toyota from '../images/toyota1.png';
import audi from '../images/Toyota3.png';



export const carData = [
  {
    id: 1,
    car_name: "Corolla",
    manufacturer: "Toyota",
    year: 2023,
    price: 2000,
    //image: corolla,
    images: [corolla, honda, toyota, tesla],
    top_speed: 118,
    Description:
      "The Toyota Corolla is a line of subcompact and compact cars manufactured by Toyota. Introduced in 1966, the Corolla was the best-selling car worldwide by 1974 and has been one of the best-selling cars in the world since then. In 1997, the Corolla became the best selling nameplate in the world, surpassing the Volkswagen Beetle. Toyota reached the milestone of 44 million Corollas sold over twelve generations in 2016.",
  },
  {
    id: 2,
    car_name: "Civic",
    manufacturer: "Honda",
    year: 2023,
    price: 1700,
    images: [honda,toyota,tesla,volkswagen],
    top_speed: 118,
    Description:
      "The Honda Civic is a series of cars manufactured by Honda. Originally a subcompact, the Civic has gone through several generational changes, becoming both larger and more upscale, moving into the compact car segment. EPA guidelines for vehicle size class stipulate a car having combined passenger and cargo room of 110 to 119.9 cubic feet (3,110 to 3,400 L) is considered a mid-size car, and as such the tenth generation Civic sedan is technically a small-end mid-size car, although it still competes in the compact class.",
  },
  {
    id: 3,
    car_name: "Camry",
    manufacturer: "Toyota",
    year: 2023,
    price: 2400,
    images: [toyota,tesla,volkswagen,audi],
    top_speed: 131,
    Description:
      'The Toyota Camry is an automobile sold internationally by the Japanese manufacturer Toyota since 1982, spanning multiple generations. Originally compact in size (narrow-body), later Camry models have grown to fit the mid-size classification (wide-body)—although the two sizes co-existed in the 1990s. Since the release of the wide-bodied versions, Camry has been extolled by Toyota as the firm\'s second "world car" after the Corolla. In Japan, Camry is exclusive to Toyota Corolla Store retail dealerships.',
  },
  {
    id: 4,
    car_name: "Model S",
    manufacturer: "Tesla",
    year: 2023,
    price: 3000,
    images: [tesla,volkswagen,audi,bmw],
    top_speed: 200,
    Description:
      "The Tesla Model S is an all-electric five-door liftback sedan produced by Tesla, Inc., and was introduced on June 22, 2012. As of August 2021, the Model S Long Range Plus has an EPA range of 405 miles (652 km), higher than that of any other battery electric car. Model S cars built from October 2014 have a feature called Autopilot, an advanced driver-assistance system that allows the car to operate semi-autonomously under certain conditions.",
  },
  {
    id: 5,
    car_name: "Civic Type R",
    manufacturer: "Honda",
    year: 2021,
    price: 1500,
    images: [honda,audi,bmw,nissan],
    top_speed: 169,
    Description:
      "The Honda Civic Type R (Japanese: ホンダ・シビックタイプR, Honda Shibikku Taipuāru) is the high-performance version of the Civic compact car made by Honda. It features a lightened and stiffened body, specially tuned engine, and upgraded brakes and chassis. Red is also used in the interior to give it a special sporting distinction and to separate it from other Honda models. In Japan, there is a one-make series of Honda Type R cars where a privateer can purchase an off-road Type R and compete in a series championship.",
  },
  {
    id: 6,
    car_name: "Mercedes-AMG GT",
    manufacturer: "Bugatti",
    year: 2023,
    price: 5000,
    images: [mercedes,nissan,audi,bmw],
    top_speed: 261,
    Description:
      "The Mercedes-AMG GT (C190 / R190) is a sports car produced in coupé and roadster bodystyles by German automobile manufacturer Mercedes-AMG. The car was introduced on 9 September 2014 and was officially unveiled to the public in October 2014 at the Paris Motor Show. After the SLS AMG, it is the second sports car developed entirely in-house by Mercedes-AMG. The car is produced in two performance variations, with the GT S (C120) having a slightly higher performance. Both models went on sale in March 2015, with a GT3 racing variant of the car expected to be released in 2016.",
  },
  {
    id: 7,
    car_name: "BMW",
    manufacturer: "Mercedes-Benz",
    year: 2023,
    price: 6000,
    images: [bmw,tesla,bmw,nissan],
    top_speed: 155,
    Description:
      "BMW is a German multinational corporation which produces luxury vehicles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.",
  },
  {
    id: 8,
    car_name: "Nisaan",
    manufacturer: "Nissan",
    year: 2023,
    price: 2100,
    images: [nissan,audi,bmw,volkswagen],
    top_speed: 190,
    Description:
      "Nissan Motor Co., Ltd. (Japanese: 日産自動車株式会社, Hepburn: Nissan Jidōsha kabushiki gaisha) (trading as the Nissan Motor Corporation and often shortened to Nissan) is a Japanese multinational automobile manufacturer headquartered in Yokohama, Japan. It was founded on 26 December 1933 by Yoshisuke Aikawa, and it became a part of the Renault–Nissan–Mitsubishi Alliance on 28 March 1999. As of 2013, Renault holds a 43.4% voting stake in Nissan, while Nissan holds a 15% non-voting stake in Renault.",
  },
  {
    id: 9,
    car_name: "Model X",
    manufacturer: "Tesla",
    year: 2023,
    price: 3000,
    images: [tesla,toyota,audi,bmw],
    top_speed: 163,
    Description:
      "The Tesla Model X is a mid-size all-electric luxury crossover utility vehicle (CUV) made by Tesla, Inc. The vehicle is unique in the concept that it uses falcon-wing doors instead of traditional automotive doors. The prototype was unveiled at Tesla's design studios in Hawthorne on February 9, 2012. The Model X has an official EPA rated 250–325 mi (402–523 km) range and the combined fuel economy equivalent and energy consumption for the Model X 100D variant is 89 mpg‑e (39 kW⋅h/100 mi), which is higher than that of any other SUV.",
  },
  {
    id: 10,
    car_name: "Mahindra",
    manufacturer: "Tesla",
    year: 2023,
    price: 400,
    images: [volkswagen,audi,bmw,nissan],
    top_speed: 140,
    Description:
      "Mahindra & Mahindra Limited is an Indian multinational automotive manufacturing corporation headquartered in Mumbai, Maharashtra, India. It was established in 1945 as Muhammad & Mahindra and later renamed as Mahindra and Mahindra. It is one of the largest vehicle manufacturers by production in India and the largest manufacturer of tractors in the world. It is a part of the Mahindra Group, an Indian conglomerate.",
  },
  {
    id: 11,
    car_name: "Audi",
    manufacturer: "Toyota",
    year: 2023,
    price: 1200,
    images: [audi,bmw,nissan,volkswagen],
    top_speed: 118,
    Description:
      "Audi AG is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi is a wholly owned subsidiary of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany. Audi-branded vehicles are produced in nine production facilities worldwide.",
  },
  {
    id: 12,
    car_name: "Corolla",
    manufacturer: "Toyota",
    year: 2023,
    price: 3500,
    images: [corolla, honda, toyota, tesla],
    top_speed: 118,
    Description:
      "The Toyota Corolla is a line of subcompact and compact cars manufactured by Toyota. Introduced in 1966, the Corolla was the best-selling car worldwide by 1974 and has been one of the best-selling cars in the world since then. In 1997, the Corolla became the best selling nameplate in the world, surpassing the Volkswagen Beetle. Toyota reached the milestone of 44 million Corollas sold over twelve generations in 2016.",
  },
];