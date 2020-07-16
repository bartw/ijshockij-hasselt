import React from "react";
import logo from "../images/ijshockij-hasselt.png";

const ITEMS = [
  { date: new Date("2020-07-14"), doors: "19:45", ice: "20:15 - 21:15" },
  { date: new Date("2020-07-28"), doors: "19:45", ice: "20:15 - 21:15" },
  { date: new Date("2020-08-04"), doors: "19:45", ice: "20:15 - 21:15" },
  { date: new Date("2020-08-06"), doors: "19:30", ice: "20:00 - 21:15" },
  { date: new Date("2020-08-11"), doors: "19:45", ice: "20:15 - 21:15" },
  { date: new Date("2020-08-13"), doors: "19:30", ice: "20:00 - 21:15" },
  { date: new Date("2020-08-18"), doors: "19:45", ice: "20:15 - 21:15" },
  { date: new Date("2020-08-25"), doors: "19:45", ice: "20:15 - 21:15" },
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getMonth = (date) => MONTHS[date.getMonth()];

const hasPassed = (date) => {
  const now = new Date();

  if (now.getFullYear() > date.getFullYear()) {
    return true;
  }

  if (
    now.getFullYear() === date.getFullYear() &&
    now.getMonth() > date.getMonth()
  ) {
    return true;
  }

  if (
    now.getFullYear() === date.getFullYear() &&
    now.getMonth() === date.getMonth() &&
    now.getDate() > date.getDate()
  ) {
    return true;
  }

  return false;
};

const Doodle = () => (
  <div className="mt-8 text-center">
    <a
      className="p-4 inline-block text-center shadow-md rounded bg-pink-700 text-pink-100"
      href="https://doodle.com/poll/nzn5cmcferrtf6mu"
    >
      Claim your spot!
    </a>
  </div>
);

const Paragraph = ({ children }) => (
  <p className="mt-4 max-w-md text-left">{children}</p>
);

const Title = ({ children }) => (
  <h2 className="uppercase font-semibold text-blue-200">{children}</h2>
);

const Home = () => (
  <div className="min-h-screen bg-blue-900 text-blue-100 p-2">
    <div className="max-w-screen-sm m-auto">
      <header className="mt-2 flex flex-col items-center">
        <img
          alt="ijshockij-hasselt-logo"
          className="w-64 rounded-full bg-blue-100"
          src={logo}
        />
        <h1 className="mt-4 uppercase font-semibold text-4xl">summer ice</h1>
      </header>
      <Doodle />
      <div className="mt-8">
        <Title>Price</Title>
        <Paragraph>
          The cost of the ice is €120 an hour. Everyone is expected to pay
          his/her fair share after practice.
        </Paragraph>
        <Paragraph>
          This means that if 10 skaters show up, it will cost you €12, if 15
          skaters show up it will cost you €8.
        </Paragraph>
      </div>
      <div className="mt-8">
        <Title>Format</Title>
        <Paragraph>
          We warm-up for 5 to 10 minutes and then play a game.
        </Paragraph>
        <Paragraph>Gameplay is no contact.</Paragraph>
        <Paragraph>You should bring a blue and white jersey.</Paragraph>
      </div>
      <Doodle />
      <div className="mt-8">
        <Title>Covid-19 restrictions</Title>
        <Paragraph>
          Everyone that enters the buildings of Sport Vlaanderen needs to
          disinfect their hands. Disinfectants will be available at the
          entrance.
        </Paragraph>
        <Paragraph>
          Social distancing rules should be respected at all times.
        </Paragraph>
        <Paragraph>
          Arrive at practice no longer than 30 minutes in advance.
        </Paragraph>
        <Paragraph>
          A maximum of 6 players at once in the locker room.
        </Paragraph>
        <Paragraph>
          Every player uses his own gear. Gear can not be swapped or loaned, not
          from other players and not from the club.
        </Paragraph>
        <Paragraph>
          Parents and others are asked to stay outside. When they do go inside
          they should wear a mouth mask.
        </Paragraph>
        <Paragraph>
          Inside the buildings of Sport Vlaanderen there is one way traffic.
        </Paragraph>
        <Paragraph>Player benches can not be used.</Paragraph>
        <Paragraph>
          There will be dedicated gates to enter the ice and dedicated gates to
          exit the ice.
        </Paragraph>
        <Paragraph>
          The locker room needs to be empty 30 minutes after practice. This
          allows the people of Sport Vlaanderen to clean the locker room
          thoroughly.
        </Paragraph>
      </div>
      <Doodle />
      <div className="mt-8">
        <Title>Dates</Title>
        <ul className="mt-4">
          {ITEMS.map(({ date, doors, ice }) => (
            <li key={date} className="mt-6 bg-blue-700 rounded flex relative">
              <div className="m-4 flex flex-col rounded">
                <div className="bg-blue-100 py-3 w-16 text-blue-900 text-center font-semibold">
                  {date.getDate()}
                </div>
                <div className="bg-blue-900 py-2 w-16 text-center">
                  {getMonth(date)}
                </div>
              </div>
              <div className="flex-1 py-4 ml-4 pr-2 border-dashed border-r-2 border-blue-900">
                <div>Doors: {doors}</div>
                <div className="mt-1">Ice: {ice}</div>
                <div className="mt-2 text-sm">@ Sport Vlaanderen Hasselt</div>
              </div>
              <div
                className={`w-12 sm:w-16${
                  hasPassed(date) ? " bg-blue-900" : ""
                }`}
              ></div>
              <div
                className="absolute right-0 bg-blue-900"
                style={{
                  width: "20px",
                  height: "40px",
                  borderRadius: "20px 0 0 20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              ></div>
            </li>
          ))}
        </ul>
      </div>
      <Doodle />
      <footer className="mt-16 mb-8 text-center text-xs">
        © 2020 ijshockij hasselt
      </footer>
    </div>
  </div>
);

export default Home;
