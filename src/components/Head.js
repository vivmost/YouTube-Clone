import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "utils/appSlice";
import { Search_API } from "utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(Search_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&s"
          alt="hambrgr-icon"
        />

        <img
          className="h-8 mx-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s"
          alt="youtue-icon"
        />
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className=" border border-gray-400 px-5 py-2 rounded-r-full bg-slate-100">
            🔍
          </button>
        </div>
        <div className="fixed bg-white px-2 py-2 w-1/3 shadow-lg rounded-lg">
          <ul>
            <li className="py-2 shadow-sm hover:bg-gray-100">Iphone</li>
            <li className="py-2 shadow-sm hover:bg-gray-100">Iphone</li>
            <li className="py-2 shadow-sm hover:bg-gray-100">Iphone</li>
            <li className="py-2 shadow-sm hover:bg-gray-100">Iphone</li>
          </ul>
        </div>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA5gMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBAMFCAL/xABBEAABAwIDAwYKCAUFAAAAAAAAAQIDBAUGBxESITETIlFhcZEIFBcjMkFVgaHBFTNCUmKTsdIWVGPC0SRTcqKy/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1F/xJasPUvjF3rYqdnqRy853YnErW7582yB6stVsmqdOD5XIxq/MC4QUNHn/AFnKecsUOx1Trr+hJ7Fndh+vkZFcYZ6BzvtuTaYnvQC0gatDX01wp2VFFPFPC9NWvjXVFNlFUDIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQPM/MGDB1CkNNszXWdq8jEu9GJ953+PWS+73CK1W2qr6l2zFTxrI5epE4FA4AtM+ZGO6y+3hqyUVM5JHtXg5VXmRp3aqBy4Vy9vmPatL7iutqIaaRdpuv1kidDUXc1C37DgPDFija2hs9NyicZpW8pIvXtO+RJWMYxqNY1GtamiIibkQ+gNWS30T49h9JA5v3ViRUIfiXKzC19jkVlCygqXJzZ6RNjRetvBe4nRjRAPOE9LirKG7tnhldU2uV+m76qVOhU+y7sL1wniOhxRZoblbX8x6aPjd6Ubk4opt3200l7tk9vr4kkgnbsuTTenWnWUNgetq8vMyqjD1wkVaOom5NXLuauvoSJ2ooHohDJ8s3ofQAAAAAAAAAAAAAAAAAAAAAAAAAAAVznvcH0WA5oo10dVTNi92uq/BDlyQtjbfgCil2U5Wrc+d66cdV0b8EQ63whoXSYNgkbwjq2q73oqfMkWUtSyoy9srmLubDya9StVUX9AJiAAAAAw71FFeEVQJTV9lvUCI2RUdC53W1Uc39XF7FL+EnUR/RtmptfOOmkf7kaifNALYw9V+P2Kgq/8Aep2P70OwOlwXC6nwnaYX+kyljRe47oAAAAAAAAAAAAAAAAAAAAAAAAAAAI1mFZP4gwjcLexPPPjV0Wqa85u9CufB7xCjYa3DFYuxNFIs0DXbtU4Pb2oui+8ulU19XeUNmthSuwriCPGGHGqyBZEfMjE+pf0r+FQL61TpMkGy9zEteLKdkL5Y6e5tTn0zl0V/W3pQnGqa6esDIMamHuRrdXKiNTiqrpoAcqacTztjWsfj/NSltdCu3R0r0p2uTeioi6yO793uQlGaOaUEUMtkwzOlRVy+blqIuc1mu5Wt04r2HZ5M4Efh6gdd7pGqXOrb6Dt6ws6P+S8VAsyCNsMLImJo1jUaidSHIYbrpvMgAAAAAAAAAAAAAAAAAAAAAAAAADGu/QDJwzQsnifFMxskb0VrmOTVFReJ1l9xVZLAzau9xhp1+452rl7E4kLqc8MJRPVsTa+dv3mQaJ8VQDp8Z5LMlndcMJzpSzou2lO92jUcm9Nhyb0I7DiTNHCLeQrKSorKdnNRZoOVTTqc3f3k08uuFv5W5flN/cY8ueFtNFpbl+W1f7gIqucWM5WLHDYIkl4a+LyO+BpzUuaGPk5CrbPS0L9Ee1zeQjVOtOK+8mnlxwnrqlFcNenkWfuPry54W118WuW7+k39wG/gDKu14Xcysq3pXXJE3SOTmRr+FPmWI1NCrEz0wv8Ay1y/Kb+436DOfCFXK2OWeppVd654FRE7VTXQCxQaVsu1BdqdKi21cNTEqa7UT0cbiLqgGQAAAAAAAAAAAAAAAAAAAAAAAYV2ilS5q5nvtFQ6x4cVJLgvNmmRNrklX7KdLia5i4h/hjCVdcmqnLI1I4EX1yO3J3b19xWeRuE0uEs2K7szlplkVKblN/O+08Dgwrk9cL05LpjStmjfLzvF0dtSrrv5zl4diFh0eVODaaJGfRDJfxSuVy/EmmymiJruPoCIeTLBvsKm7lHkywb7Cpu5SXgCIeTLBvsKm7lHkywb7Cpu5SXgCILllg32HTdynXXTKDCFdErI6F1I/TmvgeqKnyUsAwqa+sDzpfsG4nyzq/piwVslRb2u84+NPRTokb0dZbGW+PKTGNsVURsNwgT/AFEGv/ZOol08LJo3xysSRj2K1zXJqiovFDztiehlyszGpbjbdptunXba3+mq89nu4oB6ORdURdFTXpMnFTTMqKeKeF21HIxHsXpRU1Q5QAAAAAAAAAAAAAAAAAAAAACnPCSqHtslopkXmSVL3u7Ws0T/ANKWFgGhjoMG2inY3RG0zFXtVNTs7paLdd42R3OjhqWMdtNSVuui9JuRsbGxrI2o1jU0RE4IgH0AAAAAAAAAAMKiLxKn8ImiZLhejqlTnw1KNRepyFsmrcbdR3SldS3CmiqIHb1jkbqigR/K2ofU5f2J8iqrkpUbqvQ1VanwQlRxUtNBR08dPSxMihjbssYxNEahygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z"
          alt="usr-icon"
        />
      </div>
    </div>
  );
};

export default Head;
