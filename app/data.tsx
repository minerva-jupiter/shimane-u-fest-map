// import places from "./testdata";
import React from "react";

export type Place = {
  id: number;
  position: { lat: number; lng: number };
  title: string;
  description: React.ReactNode;
};

const places: Place[] = [
  {
    id: 1,
    position: { lat: 35.4871686, lng: 133.067712 },
    title: "メインステージ 10/12",
    description: (
      <>
        <table className="mainStage">
          <thead>
            <tr>
              <th>時間</th>
              <th>出演者</th>
              <th>出演内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:30～10:10</td>
              <td>島根大学お笑いサークル「あちゃらか」</td>
              <td>あちゃらか3番勝負! vs ブーゲンビリア</td>
            </tr>
            <tr>
              <td>10:30～11:00</td>
              <td>ギター部</td>
              <td>ギター部! 秋のミニコンサート!</td>
            </tr>
            <tr>
              <td>11:15～11:35</td>
              <td>Kpop dance circle</td>
              <td>Kpop ダンスメドレー</td>
            </tr>
            <tr>
              <td>11:50～12:00</td>
              <td>島根大学ジャグリングサークル Kaleido</td>
              <td>ジャグリングパフォーマンス</td>
            </tr>
            <tr>
              <td>12:20～15:50</td>
              <td>軽音楽部 (選出9組) </td>
              <td>軽音楽部ステージライブ</td>
            </tr>
            <tr>
              <td>16:00～18:00</td>
              <td>Pop’n Light Party</td>
              <td>Pop’n Light Party ステージ</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 2,
    position: { lat: 35.4871456, lng: 133.067822 },
    title: "メインステージ 10/13",
    description: (
      <>
        <table className="mainStage">
          <thead>
            <tr>
              <th>時間</th>
              <th>出演者</th>
              <th>出演内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:30～10:00</td>
              <td>AM2:00, Telescope</td>
              <td>コピーバンド</td>
            </tr>
            <tr>
              <td>10:10～10:40</td>
              <td>地域工学バンド</td>
              <td>バンド演奏</td>
            </tr>
            <tr>
              <td>10:55～11:25</td>
              <td>島根大学吹奏楽部</td>
              <td>しますいスペシャルステージ</td>
            </tr>
            <tr>
              <td>11:40～12:20</td>
              <td>島根大学お笑いサークル「あちゃらか」</td>
              <td>あちゃらかネタライブ!!</td>
            </tr>
            <tr>
              <td>12:30～13:10</td>
              <td>Yin Youngs</td>
              <td>HIPHOP LIVE!!</td>
            </tr>
            <tr>
              <td>13:25～13:45</td>
              <td>スナフキン</td>
              <td>スナフキン アコステージ</td>
            </tr>
            <tr>
              <td>14:05～14:40</td>
              <td>島根県立大学石見神楽 舞濱社中</td>
              <td>塵輪</td>
            </tr>
            <tr>
              <td>15:20～16:00</td>
              <td>実行委員会</td>
              <td>ビンゴ大会</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 3,
    position: { lat: 35.487909, lng: 133.067738 },
    title: "軽音楽部 & Pop’n Light Party 合同ライブ",
    description: (
      <>
        <h3 className="op">軽音楽部 & Pop’n Light Party</h3>
        <h3 className="area">大学会館 3階 大集会室</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>
          軽音楽部と軽音サークルのPop’n Light Partyが合同でライブを行います!{" "}
        </p>
      </>
    ),
  },
  {
    id: 4,
    position: { lat: 35.485218, lng: 133.067691 },
    title: "お茶席",
    description: (
      <>
        <h3 className="op">裏千家茶道部</h3>
        <h3 className="area">FLAT</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>裏千家茶道部によるお菓子とお茶の提供 (場所: FLAT) </p>
      </>
    ),
  },
  {
    id: 5,
    position: { lat: 35.486988, lng: 133.067417 },
    title: "教養講義室棟1号館",
    description: (
      <>
        <table>
          <thead>
            <tr>
              <th>教室</th>
              <th>時間</th>
              <th>出演・内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>101</td>
              <td>
                10/12: <br />
                10/13:{" "}
              </td>
              <td>怨霊の金縛り屋敷</td>
            </tr>
            <tr>
              <td>102</td>
              <td>
                10/12: 9:30～18:00
                <br />
                10/13: 9:30～16:00
              </td>
              <td>
                島大いきもの博物館／ザリガニ・カニ釣り (総合環境サークル
                エコロジー・ネットワーク){" "}
              </td>
            </tr>
            <tr>
              <td>201</td>
              <td>
                10/12: 9:30～16:00
                <br />
                10/13: 9:30～15:00
              </td>
              <td>ダンボール迷路</td>
            </tr>
            <tr>
              <td>202</td>
              <td>10/12: 14:00～15:00</td>
              <td>
                あちゃらかネタライブ!! feat. ブーゲンビリア
                (島根大学お笑いサークル「あちゃらか」){" "}
              </td>
            </tr>
            <tr>
              <td>202</td>
              <td>10/13: 14:00～15:00</td>
              <td>
                あちゃらか大喜利決定戦!! (島根大学お笑いサークル「あちゃらか」){" "}
              </td>
            </tr>
            <tr>
              <td>301</td>
              <td>
                10/12: 9:30～18:00
                <br />
                10/13: 9:30～16:00
              </td>
              <td>
                美術科教育専攻・作品展示会 －まじわるところ－ (美術科教育専攻){" "}
              </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 6,
    position: { lat: 35.486893, lng: 133.066854 },
    title: "教養講義室棟2号館",
    description: (
      <>
        <table>
          <thead>
            <tr>
              <th>教室</th>
              <th>時間</th>
              <th>出演・内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>エントランス</td>
              <td>
                10/12: 9:30～18:00
                <br />
                10/13: 9:30～16:00
              </td>
              <td>いけばな展示 (草月流華道部) </td>
            </tr>
            <tr>
              <td>401</td>
              <td>
                10/12: 9:30～18:00
                <br />
                10/13: 9:30～16:00
              </td>
              <td>ジャグリング体験会 (島根大学ジャグリングサークル Kaleido)</td>
            </tr>
            <tr>
              <td>402</td>
              <td>
                10/12: 9:30～18:00
                <br />
                10/13: 9:30～16:00
              </td>
              <td>美術部展示・グッズ販売／イラスト風船を作ろう (美術部) </td>
            </tr>
            {/*
            <tr>
              <td>404</td>
              <td>10/12: 10:00～18:00<br />10/13: 10:00～16:00</td>
              <td>みんなの職員室 (小学校教育専攻4回生) </td>
            </tr>*/}
            <tr>
              <td>501</td>
              <td>10/12: 9:30～15:00</td>
              <td>スタンプラリー (島大すみれ食堂) </td>
            </tr>
            <tr>
              <td>502</td>
              <td>
                10/12: 10:00～17:30
                <br />
                10/13: 10:00～15:30
              </td>
              <td>不昧流茶道部お茶席 (不昧流茶道部) </td>
            </tr>
            <tr>
              <td>503</td>
              <td>
                10/12: 9:30～材料なくなり次第終了
                <br />
                10/13: 9:30～材料なくなり次第終了
              </td>
              <td>飛行機製作!! (自由研究サークルてらこや) </td>
            </tr>
            <tr>
              <td>601</td>
              <td>
                10/12: 9:30～18:00
                <br />
                10/13: 9:30～16:00
              </td>
              <td>囲碁で遊ぼう! (囲碁部) </td>
            </tr>
            <tr>
              <td>602</td>
              <td>
                10/12: 9:30～18:00
                <br />
                10/13: 9:30～16:00
              </td>
              <td>部員作品展示 (島根大学プラモデル部) </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 7,
    position: { lat: 35.486748, lng: 133.06791 },
    title: "法文学部棟",
    description: (
      <>
        <table>
          <thead>
            <tr>
              <th>教室</th>
              <th>時間</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>エントランス</td>
              <td>
                10/12: 9:30～18:00
                <br />
                10/13: 9:30～16:00
              </td>
              <td>臨書・詩文書 作品展示 (書道部) </td>
            </tr>
            <tr>
              <td>135</td>
              <td>10/13: 10:00～12:00</td>
              <td>ポリ小屋 (ポリレンジャー) </td>
            </tr>
            <tr>
              <td>135</td>
              <td>
                10/12: 9:30～18:00
                <br />
                10/13: 9:30～16:00
              </td>
              <td>活動展示 + くまカフェ (行政学ゼミ) </td>
            </tr>
            <tr>
              <td>138 地域交流スペース2</td>
              <td>
                10/12: 9:30～18:00
                <br />
                10/13: 9:30～16:00
              </td>
              <td>知ってほしい! しまねの献血のこと (ぷらす&ぐっぱ) </td>
            </tr>
            <tr>
              <td>147 セミナー室</td>
              <td>
                10/12: 10:00～16:00
                <br />
                10/13: 10:00～16:00
              </td>
              <td>古文書ゼミ展示 (古文書ゼミ) </td>
            </tr>
            <tr>
              <td>241</td>
              <td>
                10/12: 9:30～17:00
                <br />
                10/13: 9:30～16:00
              </td>
              <td>ぴぴぴッ! 電波広場 (無線通信技術部) </td>
            </tr>
            <tr>
              <td>340</td>
              <td>
                10/12: 9:30～18:00
                <br />
                10/13: 9:30～16:00
              </td>
              <td>第4回島大鐵研フェスタ (島根大学鐵道研究会) </td>
            </tr>
            <tr>
              <td>342</td>
              <td>10/12: 11:00～15:00</td>
              <td>言語文化学科教育プロジェクト紹介 (法文学部言語文化学科) </td>
            </tr>
            <tr>
              <td>433 多目的室</td>
              <td>
                10/12: 9:30～18:00
                <br />
                10/13: 9:30～16:00
              </td>
              <td>イラスト展，漫画コーナー，缶バッジ製作体験 (漫画研究会) </td>
            </tr>
            <tr>
              <td>436 法廷教室</td>
              <td>
                10/12: 9:30～18:00
                <br />
                10/13: 9:30～16:00
              </td>
              <td>鉱石すくい (地学部) </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 8,
    position: { lat: 35.485518, lng: 133.067536 },
    title: "教育学部棟",
    description: (
      <>
        <table>
          <thead>
            <tr>
              <th>教室／場所</th>
              <th>時間</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>188 多目的室2</td>
              <td>
                10/12: 10:00～16:00
                <br />
                10/13: 10:00～16:00
              </td>
              <td>親子で学んで遊ぼう！消費者教育 (消費者教育プロジェクト) </td>
            </tr>
            <tr>
              <td>189, 190, 191, IPM</td>
              <td>
                10/12: 10:00～18:00
                <br />
                10/13: 10:00～16:00
              </td>
              <td>喫茶1904 子ども縁日 (特別支援教育専攻) </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 9,
    position: { lat: 35.485138, lng: 133.068436 },
    title: "総合理工学部棟1号館",
    description: (
      <>
        <table>
          <thead>
            <tr>
              <th>教室／場所</th>
              <th>時間</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            {/*
            <tr>
              <td>玄関ホール</td>
              <td>10/12: 10:00～18:00</td>
              <td>化学と遊ぼう (物質化学科) </td>
            </tr>*/}
            <tr>
              <td>数学第1講義室</td>
              <td>
                10/12: 10:00～15:00
                <br />
                10/13: 10:00～15:00
              </td>
              <td>
                遊んで，学ぼう! ／アプリを使って，数学を視る (数理科学科){" "}
              </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 10,
    position: { lat: 35.485181, lng: 133.069291 },
    title: "総合理工学部棟3号館",
    description: (
      <>
        <table>
          <thead>
            <tr>
              <th>教室／場所</th>
              <th>時間</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>エントランス</td>
              <td>10/13: 10:00～15:00</td>
              <td>半導体デバイスって何？ (物理・マテリアル工学科) </td>
            </tr>
            <tr>
              <td>614</td>
              <td>
                10/12: 10:00～12:00，13:00～15:00
                <br />
                10/13: 10:00～12:00，13:00～15:00
              </td>
              <td>VRを体験しよう (建築デザイン学科) </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 11,
    position: { lat: 35.485781, lng: 133.069291 },
    title: "生物資源科学部棟3号館",
    description: (
      <>
        <table>
          <thead>
            <tr>
              <th>教室／場所</th>
              <th>時間</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>島大総合博物館アシカル</td>
              <td>
                10/12: 10:00～17:00
                <br />
                10/13: 10:00～16:00
              </td>
              <td>
                展示クイズに答えて島大グッズをもらおう
                (島根大学総合博物館アシカル){" "}
              </td>
            </tr>
            <tr>
              <td>外国語教育センター Global Hub</td>
              <td>10/12: 10:00～16:00</td>
              <td>
                カフェ&留学生ポスター発表 (外国語教育センター Global Hub){" "}
              </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 12,
    position: { lat: 35.488018, lng: 133.068236 },
    title: "サバゲー体験会",
    description: (
      <>
        <h3 className="op">サバイバルゲーム部</h3>
        <h3 className="area">第2体育館</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～15:00
        </h3>
        <p>
          射的や赤外線で行う弾が出ないサバゲー等のサバイバルゲーム部の活動を体験していただけるブースを開催しております!
          ぜひ遊びに来てください!{" "}
        </p>
      </>
    ),
  },
  // 屋外企画
  {
    id: 20,
    position: { lat: 35.485546, lng: 133.068026 },
    title: "やきそばさっちゃん",
    description: (
      <>
        <h3 className="op">音楽科研究室</h3>
        <h3 className="area">ブース1</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>
          私たちは教育学部音楽科教育専攻生です。「やきそばさっちゃん」という店名で，毎年焼きそばを販売しています。今年も丹精込めてつくった焼きそばを販売します。皆様のご来店，お待ちしております!{" "}
        </p>
      </>
    ),
  },
  {
    id: 21,
    position: { lat: 35.485668, lng: 133.068011 },
    title: "たこ焼き屋",
    description: (
      <>
        <h3 className="op">SFIDA</h3>
        <h3 className="area">ブース2</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>たくさんのイケメンが美味しいたこ焼きを作ってます!!</p>
      </>
    ),
  },
  {
    id: 22,
    position: { lat: 35.485712, lng: 133.067985 },
    title: "牛串屋デュース",
    description: (
      <>
        <h3 className="op">硬式テニス同好会</h3>
        <h3 className="area">ブース3</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>
          大学祭フードの“王道”は，この一本。外はカリッ，中は肉汁ジュワッ。厳選肉を高品質な鉄板で丁寧に焼き上げました。香りだけでもお腹が鳴る特製牛串は，大学祭の食べ歩きコースにぴったりです!
          売り切れ御免。
        </p>
      </>
    ),
  },
  {
    id: 23,
    position: { lat: 35.485531, lng: 133.067869 },
    title: "型抜き",
    description: (
      <>
        <h3 className="op">野外研究同好会</h3>
        <h3 className="area">ブース4</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>型抜きをしています! ! 皆さんぜひお越しください! </p>
      </>
    ),
  },
  {
    id: 24,
    position: { lat: 35.485618, lng: 133.067855 },
    title: "合氣ドーナツ",
    description: (
      <>
        <h3 className="op">合氣道部</h3>
        <h3 className="area">ブース5</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>
          今年の学祭では，“心も体も満たされる『合氣ドーナツ』”
          を販売します。合気道の精神とドーナツの美味しさが，ここで出会います。柔軟な心とお腹を満たす甘いひとときをお楽しみください!{" "}
        </p>
      </>
    ),
  },
  {
    id: 25,
    position: { lat: 35.485759, lng: 133.067821 },
    title: "外部出展",
    description: (
      <>
        <h3 className="op">ジョブカフェしまね</h3>
        <h3 className="area">ブース6</h3>
        <h3 className="time">10/12: 10:00～16:00</h3>
        <p>
          ジョブカフェしまねブースでは，就職活動などに関連したイベントの案内を行っております!
        </p>
      </>
    ),
  },
  {
    id: 26,
    position: { lat: 35.485858, lng: 133.067802 },
    title: "ベビーカステラ屋",
    description: (
      <>
        <h3 className="op">shimasuno</h3>
        <h3 className="area">ブース7</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>
          いろんな種類のベビーカステラとドリンク
          (冷たいものも温かいものもあります) を売ってます!ぜひ足を運んで下さい!{" "}
        </p>
      </>
    ),
  },
  {
    id: 27,
    position: { lat: 35.485912, lng: 133.067787 },
    title: "ヘアアレンジ",
    description: (
      <>
        <h3 className="op">総務企画</h3>
        <h3 className="area">ブース8</h3>
        <h3 className="time">
          10/12: 10:00～16:00
          <br />
          10/13: 10:00～16:00
        </h3>
        <p>
          プロ美容師によるヘアアレンジを体験できます! ぜひお越しください! !{" "}
        </p>
      </>
    ),
  },
  {
    id: 28,
    position: { lat: 35.486033, lng: 133.067735 },
    title: "肉巻きおにぎり",
    description: (
      <>
        <h3 className="op">フラット</h3>
        <h3 className="area">ブース9</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>
          肉の旨味がジュワッ!
          外は香ばしく中はほっかほか，フラット特製「肉巻きおにぎり」登場!
          秘伝のタレが染み込んだジューシーなお肉でごはんを包み，一口食べれば笑顔間違いなし!
          学園祭限定，この味を見逃すな!{" "}
        </p>
      </>
    ),
  },
  {
    id: 29,
    position: { lat: 35.486028, lng: 133.067672 },
    title: "ケバ部",
    description: (
      <>
        <h3 className="op">ケバ部</h3>
        <h3 className="area">ブース10</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>おいしいケバブ! </p>
      </>
    ),
  },
  {
    id: 30,
    position: { lat: 35.485831, lng: 133.067464 },
    title: "もぎたてスナフキンの森",
    description: (
      <>
        <h3 className="op">スナフキン</h3>
        <h3 className="area">ブース11</h3>
        <h3 className="time">
          10/12: 10:00～17:00
          <br />
          10/13: 10:00～15:00
        </h3>
        <p>
          スナフキンでは缶ジュースを販売します! ライブのお供にいかがでしょうか？
        </p>
      </>
    ),
  },
  {
    id: 31,
    position: { lat: 35.48589, lng: 133.06745 },
    title: "スナフキンライブ",
    description: (
      <>
        <h3 className="op">スナフキン</h3>
        <h3 className="area">ブース12</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>
          スナフキンでは，ギター，カホン，キーボード，打楽器など，さまざまな楽器を用いたライブ演奏を2日間にわたって行います。
        </p>
      </>
    ),
  },
  {
    id: 32,
    position: { lat: 35.485767, lng: 133.067979 },
    title: "島大の駄菓子屋 綿菓子堂",
    description: (
      <>
        <h3 className="op">水泳部</h3>
        <h3 className="area">ブース13</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        水泳部は，綿菓子と飲み物を販売します。綿菓子は「ちんちろ」で出目に応じてサイズが変化!
        運試しで<p>特大サイズを狙おう! </p>
      </>
    ),
  },
  {
    id: 33,
    position: { lat: 35.48582, lng: 133.06799 },
    title: "ざまく",
    description: (
      <>
        <h3 className="op">ざまく</h3>
        <h3 className="area">ブース14</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>
          下東川津の居酒屋バイトが出店! 炭火の団子と焼き鳥が絶品! !
          バイトも募集中♡
        </p>
      </>
    ),
  } /*
  {
    id: 34,
    position: { lat: 35.485856, lng: 133.06797 },
    title: "チョコバナナとジュース",
    description: (
      <>
        <h3 className="op">ユースホステルクラブ</h3>
        <h3 className="area">ブース15</h3>
        <h3 className="time">
        10/12: 9:30～17:55<br />10/13: 9:30～15:55</h3>
        <p>美味しいジュースとチョコバナナ等を販売しています。是非お立ち寄りください。</p>
      </>
    ),
  },*/,
  {
    id: 35,
    position: { lat: 35.485907, lng: 133.067961 },
    title: "たません",
    description: (
      <>
        <h3 className="op">島根大学ボート部</h3>
        <h3 className="area">ブース16</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>たませんとペットボトルドリンクを販売します。</p>
      </>
    ),
  },
  {
    id: 36,
    position: { lat: 35.48597, lng: 133.06795 },
    title: "餃子パーティー! ",
    description: (
      <>
        <h3 className="op">ESS部</h3>
        <h3 className="area">ブース17</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>
          ESS部による餃子パーティー。韓国版の餃子を販売。夕方からはクレープ販売の可能性もあります。
        </p>
      </>
    ),
  },
  {
    id: 37,
    position: { lat: 35.486119, lng: 133.067917 },
    title: "ワッフル屋／ダーツ体験",
    description: (
      <>
        <h3 className="op">ダーツ部</h3>
        <h3 className="area">ブース18,19</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>
          ダーツ部では，実際のダーツを投げる体験とワッフルの販売を行います。賞品も用意しています!{" "}
        </p>
      </>
    ),
  },
  {
    id: 38,
    position: { lat: 35.486194, lng: 133.06793 },
    title: "陶器の販売",
    description: (
      <>
        <h3 className="op">陶芸部</h3>
        <h3 className="area">ブース20</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>陶芸部による手作り陶器販売。数量限定，売り切れ次第終了。</p>
      </>
    ),
  },
  {
    id: 39,
    position: { lat: 35.486212, lng: 133.068034 },
    title: "未来の先生が作るベビーカステラ屋さん",
    description: (
      <>
        <h3 className="op">小学校教育専攻4回生</h3>
        <h3 className="area">ブース21,22</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>
          小学校教育専攻4回生によるベビーカステラ販売。ミニゲームでトッピング無料などの企画も。
        </p>
      </>
    ),
  },
  {
    id: 40,
    position: { lat: 35.486229, lng: 133.068137 },
    title: "献血バスコラボ! 輸血パックジュース&アイス販売",
    description: (
      <>
        <h3 className="op">ぷらす&ぐっぱ</h3>
        <h3 className="area">ブース23</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>
          献血推進サークルぐっぱと赤十字奉仕団ぷらすによる輸血パックジュースとアイス販売。献血協力者には割引・トッピング特典あり。
        </p>
      </>
    ),
  },
  {
    id: 41,
    position: { lat: 35.48632, lng: 133.067688 },
    title: "俺のチュロス",
    description: (
      <>
        <h3 className="op">島根大学eスポーツサークル</h3>
        <h3 className="area">ブース24</h3>
        <h3 className="time">
          10/12: 9:30～12:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>丹精込めて調理したチュロスを販売します! </p>
      </>
    ),
  },
  {
    id: 42,
    position: { lat: 35.48644, lng: 133.067666 },
    title: "理科教育専攻",
    description: (
      <>
        <h3 className="op">理科教育専攻</h3>
        <h3 className="area">ブース25</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>ソーダゼリーとドリンクの販売を行います。</p>
      </>
    ),
  },
  {
    id: 43,
    position: { lat: 35.486547, lng: 133.067639 },
    title: "唐揚げ",
    description: (
      <>
        <h3 className="op">バドミントン愛好会</h3>
        <h3 className="area">ブース26</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>バドミントン愛好会による唐揚げ販売。手頃な価格で提供します。</p>
      </>
    ),
  },
  {
    id: 44,
    position: { lat: 35.486733, lng: 133.067623 },
    title: "島大barへんにゅう",
    description: (
      <>
        <h3 className="op">島大編入会</h3>
        <h3 className="area">ブース27</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>島大編入会による軽飲食ブース。インスタフォローで割引特典あり。</p>
      </>
    ),
  },
  {
    id: 45,
    position: { lat: 35.486332, lng: 133.067884 },
    title: "水餃子・飲み物・お菓子",
    description: (
      <>
        <h3 className="op">裏千家茶道部</h3>
        <h3 className="area">ブース28</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00 (無くなり次第終了){" "}
        </h3>
        <p>裏千家茶道部による水餃子・飲み物・お菓子の販売。</p>
      </>
    ),
  },
  {
    id: 46,
    position: { lat: 35.486437, lng: 133.06786 },
    title: "ドリンク&オリジナルグッズ販売",
    description: (
      <>
        <h3 className="op">軽音楽部</h3>
        <h3 className="area">ブース29</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>
          軽音楽部によるアイスフロート入りドリンクとオリジナルグッズ
          (タオル・ラバーバンド等) 販売。
        </p>
      </>
    ),
  },
  {
    id: 47,
    position: { lat: 35.486528, lng: 133.06784 },
    title: "鳥，好きになりました。-島吹編-",
    description: (
      <>
        <h3 className="op">島根大学吹奏楽部</h3>
        <h3 className="area">ブース30</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>
          鳥，好きになりました。-島吹編–
          現役大学生たちの"運命の鳥とたれの文化祭"
          リアルで等身大な，本気の"鳥"と"たれ"を追いかけます
          果たしてあなたたちは運命の焼き鳥をみつけることができるのか?
        </p>
      </>
    ),
  },
  {
    id: 48,
    position: { lat: 35.486614, lng: 133.067821 },
    title: "Tea&Chips",
    description: (
      <>
        <h3 className="op">園芸同好会</h3>
        <h3 className="area">ブース31</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>香り広がるほうじ茶ラテ・濃厚抹茶ラテ＋さつまいもチップスの販売。</p>
      </>
    ),
  },
  {
    id: 49,
    position: { lat: 35.486699, lng: 133.067801 },
    title: "ポップコーン屋さん",
    description: (
      <>
        <h3 className="op">BBS</h3>
        <h3 className="area">ブース32</h3>
        <h3 className="time">
          10/12: 9:30～17:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>
          BBS ボランティアサークルによるポップコーン販売 (複数フレーバーあり) 。
        </p>
      </>
    ),
  },
  {
    id: 50,
    position: { lat: 35.486869, lng: 133.067597 },
    title: "たこやき",
    description: (
      <>
        <h3 className="op">香川FC</h3>
        <h3 className="area">ブース33</h3>
        <h3 className="time">
          10/12: 10:00～18:00
          <br />
          10/13: 10:00～16:00
        </h3>
        <p>たこ焼き提供 (“香川FC” 名義) ＋各種トッピングあり。</p>
      </>
    ),
  },
  {
    id: 51,
    position: { lat: 35.48694, lng: 133.067578 },
    title: "ワークショップ&作品販売",
    description: (
      <>
        <h3 className="op">美術科教育専攻</h3>
        <h3 className="area">ブース34</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>
          美術科教育専攻による鋳造アニマル制作ワークショップおよび部員作品販売。
        </p>
      </>
    ),
  },
  {
    id: 52,
    position: { lat: 35.487088, lng: 133.067536 },
    title: "ベビーカステラとかき氷",
    description: (
      <>
        <h3 className="op">島根大学軟式野球部</h3>
        <h3 className="area">ブース35</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>島根大学軟式野球部によるベビーカステラと かき氷 の販売。</p>
      </>
    ),
  },
  {
    id: 53,
    position: { lat: 35.487181, lng: 133.067518 },
    title: "フルーツアメ屋",
    description: (
      <>
        <h3 className="op">アイスホッケー部</h3>
        <h3 className="area">ブース36</h3>
        <h3 className="time">
          10/12: 11:00～14:00
          <br />
          10/13: 11:00～14:00
        </h3>
        <p>
          色んな果物をアメでコーティングしたフルーツアメ販売 (部活動:
          アイスホッケー部) 。
        </p>
      </>
    ),
  },
  {
    id: 54,
    position: { lat: 35.4868, lng: 133.067768 },
    title: "島根大学料理サークル ワッフル",
    description: (
      <>
        <h3 className="op">島根大学料理サークル</h3>
        <h3 className="area">ブース37</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>料理サークルによるワッフル販売 (複数味あり) 。</p>
      </>
    ),
  },
  {
    id: 55,
    position: { lat: 35.486905, lng: 133.067748 },
    title: "クレープ店",
    description: (
      <>
        <h3 className="op">天文部</h3>
        <h3 className="area">ブース38</h3>
        <h3 className="time">
          10/12: 10:00～売り切れまで
          <br />
          10/13: 10:00～売り切れまで
        </h3>
        <p>
          天文部によるクレープ販売。学祭期間中の合間にぜひお立ち寄りください。
        </p>
      </>
    ),
  },
  {
    id: 56,
    position: { lat: 35.48697, lng: 133.067737 },
    title: "ポップコーンとドリンク",
    description: (
      <>
        <h3 className="op">放送サークル</h3>
        <h3 className="area">ブース39</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>放送サークルによるポップコーン販売。</p>
      </>
    ),
  },
  {
    id: 57,
    position: { lat: 35.487037, lng: 133.06773 },
    title: "ワニ君の唐揚げ屋さん",
    description: (
      <>
        <h3 className="op">ISF</h3>
        <h3 className="area">ブース40</h3>
        <h3 className="time">
          10/12: 9:30～18:00
          <br />
          10/13: 9:30～16:00
        </h3>
        <p>ISFによる噛むほど旨味が広がるワニ肉の唐揚げ販売 (数量限定) 。</p>
      </>
    ),
  },
  {
    id: 58,
    position: { lat: 35.486537, lng: 133.06753 },
    title: "島根スサノオマジック × 島根大学",
    description: (
      <>
        <h3 className="op">地域人材育成コース10期生</h3>
        <h3 className="area">ブース41</h3>
        <h3 className="time">10/12: 9:30～18:00</h3>
        <p>
          私たちは，地域人材育成コース，コース生プロジェクトの一環として，島根スサノオマジックとの合同プロジェクトを行っています。今回の大学祭では，体験型の活動を通して，バスケットボールや島根スサノオマジックの魅力について知っていただけたらと思っています。
        </p>
      </>
    ),
  },
  {
    id: 59,
    position: { lat: 35.48619, lng: 133.067718 },
    title: "A.クロスワード",
    description: (
      <>
        <h3 className="area">本部テント</h3>
        <h3 className="time">
          10/12: 9:30～16:00
          <br />
          10/13: 9:30～15:00
        </h3>
        <p>会場: 学内全体，受付: 本部テント</p>
      </>
    ),
  },
  {
    id: 60,
    position: { lat: 35.484746, lng: 133.067826 }, // 正門横駐車場
    title: "献血",
    description: (
      <>
        <h3 className="area">正門横駐車場</h3>
        <h3 className="time">
          10/12: 9:30～11:30，13:00～16:00
          <br />
          10/13: 9:30～11:30，13:00～16:00
        </h3>
        <p>受付: 正門横駐車場</p>
      </>
    ),
  },
];
export default places;
