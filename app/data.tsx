import places from "./testdata";
import React from "react";

export type Place = {
  id: number;
  position: { lat: number; lng: number };
  title: string;
  description: React.ReactNode;
};

/*
const mainStage = () => {
  return (
    <table>
      <caption>メインステージの時程</caption>
      <thead>
        <tr>
          <th scope="col">時間帯</th>
          <th scope="col">内容</th>
          <th scope="col">出演者</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">8:30~9:30</th>
          <td>あちゃらか3番勝負!vsブーゲンビリア</td>
          <td>島根大学お笑いサークル「あちゃらか」</td>
        </tr>
      </tbody>
    </table>
  );
};

const markers: Place[] = [
  {
    id: 1,
    position: { lat: 0, lng: 0 },
    title: "メインステージ",
    description: {
    <table>
      <caption>メインステージの時程</caption>
      <thead>
        <tr>
          <th scope="col">時間帯</th>
          <th scope="col">内容</th>
          <th scope="col">出演者</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">8:30~9:30</th>
          <td>あちゃらか3番勝負!vsブーゲンビリア</td>
          <td>島根大学お笑いサークル「あちゃらか」</td>
        </tr>
      </tbody>
    </table>
	}
  },
];
*/

export default places;
