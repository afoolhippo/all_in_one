// アルバムの追加・変更は、このファイルを編集します。
// youtubeの「#」を、限定公開YouTube動画のURLへ置き換えてください。
// tracksのバッククォート内には、Excelの曲名列をまとめて貼り付けられます。
// 「曲順」「曲名」の2列を貼った場合は、曲順を自動で取り除きます。
// アルバムは古い順に並べ、新しい作品を一番下へ追加してください。
// ページ上では自動的に逆順となり、最新作品が一番上に表示されます。
const toTracks = (text) => text
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean)
  .map((line) => {
    const columns = line.split('\t').map((column) => column.trim());
    return columns.length > 1 && (/^\d+$/.test(columns[0]) || columns[0] === '曲順')
      ? columns.slice(1).join(' ').trim()
      : line;
  })
  .filter((track) => track && track !== '曲名');

const albums = [

  {
    title: 'Hippo Diary',
    year: '2019年11月',
    cover: 'images/1stfull.png',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
ゴミとダンス
Mellow Yellow
ブレンディ
タウン
Cloudy Song
カヌレのワルツ
Night of the bloody apes(inst.)
ブライアン
Black Riot
See you again
The autumun song feat. Yoshibiroko (inst.)
蝉の声
`)
  },

  {
    title: 'The Days of Cola and Peony',
    year: '2020年3月',
    cover: 'images/2ndfull.png',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
バドワイザー
ブエノス
狂う日
三蔵の残像
渇いたナイフで喉仏見せる
TEENAGER
メメント・モリ (inst.)
タイムマシン
迷い猫と雨の音
コールドレイン (inst.)
おやすみ
アネモネ
`)
  },

  {
    title: 'Slow and Mellow',
    year: '2020年8月',
    cover: 'images/3rdfull.png',
    description: '自己内省が色濃く反映されたアルバム。midnight chill outにて、打ち込み系ラップに初挑戦し、以降のスタイルの萌芽を感じさせる。',
    youtube: '#',
    tracks: toTracks(`
midnight chill out
海辺のまち
転校生
中学生
マジックアワー
fallin'
モノローグ
LOST
17歳
アンゲロニア
slow down
宇宙旅行
`)
  },

  {
    title: 'Jinn Lime E.P.',
    year: '2020年8月',
    cover: 'images/1step.png',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
ジンライム
茄子を食べたら
黒毛和牛
レモネード
憎めん拉麺
casual bar
`)
  },

  {
    title: 'Blue on Red',
    year: '2020年10月',
    cover: 'images/4thfull.png',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
モノクロの季節
ジェットストリーム
22.5
耳鳴り
夕暮れ
rain song
ナイトドライブ
パレード
冬空
鈍痛
navy blue
ラストナイト
`)
  },

  {
    title: 'Songs for Sunday vol.1',
    year: '2021年5月',
    cover: 'images/sunday1.png',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
ランドセル
三ツ矢サイダー
どら焼き食べて
アポロの記憶
歯磨きしようぜ
ペンギンさん
緑茶日和
アイス
おくのほそみち
`)
  },

  {
    title: 'Songs for Sunday vol.2',
    year: '2021年7月',
    cover: 'images/sunday2.png',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
カメカメライフ
ダイソン
テトリス (inst.)
myouga tabeta?
ペパーミント
ちらし寿司
梨 or nothing
セブンイレブンE気分
セコムボーイ
`)
  },

  {
    title: 'Songs for Sunday vol.3',
    year: '2021年9月',
    cover: 'images/sunday3.PNG',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
かき氷
花火 (inst.)
猫
pray
チンチン電車
焼肉食べたい
石炭掘って
真っ赤なもみじ
苗字苗字yeah
`)
  },

  {
    title: 'natsuyasumi',
    year: '2020年12月',
    cover: 'images/5thfull.png',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
夏の余韻
mushi mushiする日々
残暑
WSRT
no future
犬猫音頭
スピード
モグラ
smoke
echo
don't sleep
旅立つ君へ
`)
  },

  {
    title: 'summer sour E.P.',
    year: '2020年9月',
    cover: 'images/2ndep.png',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
summer sour
帰り道
daydreaming
秘密
100年後
washing machine
`)
  },

  {
    title: 'shinkokyu',
    year: '2020年12月',
    cover: 'images/6thfull.png',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
トラベログ
食卓
D and C
フランケン
カメレオン
ネオン
汚れた血
マグニチュード
モーニング　グローリー
付箋
futurama (inst.)
world's end girlfriend
`)
  },

  {
    title: 'no music no life',
    year: '2021年7月',
    cover: 'images/7thfull.PNG',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
そっか
アラビアータ
Boring days
三角定規
ノアの方舟
UFO
あかさたな
フルーツソング
マーダー
帰宅部
apple tea
no music no life
`)
  },

  {
    title: 'you and me',
    year: '2021年7月',
    cover: 'images/8thfull.PNG',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
夕方の女の子
片想い
sleeping days
bye bye
ビタースイート
静かな夜に
真夏の牢獄
in dreaming
欲望
戯言
Boys don't cry
あてどなく
`)
  },

  {
    title: 'forever young',
    year: '2021年9月',
    cover: 'images/9thfull.PNG',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
オールライト
カレンダー
ポキポキきゅうり
ウーパールーパーソングッ
角煮まん
たぬき
オシャレメガネ
仕事に行きたくない！
マジックマッシュルーム
ホームパーティー
ねむいね
orange girl
`)
  },

  {
    title: 'two more years',
    year: '2021年12月',
    cover: 'images/10thfull.PNG',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
2年後
荒野
クライベイビー
歪なダンス
我儘
remember me
ゆーれいの友だち
もしもし
nowhere
melt down (inst.)
nodoka
放物線
`)
  },

  {
    title: 'in the garage',
    year: '2022年3月',
    cover: 'images/11thfull.PNG',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
管楽団の夜 (inst.)
朝靄の歌
メロンソーダ
生徒会長
Wifiないと生きていけない
no noodle no life
バレンタインミー
ひつじさん (inst.)
ペガサスさん
電光石火
けだるい
ネオテニー
`)
  },

  {
    title: 'murmur from east coast',
    year: '2022年6月',
    cover: 'images/12thfull.PNG',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
夜のクリシェ
サンセット
三つ編みの女の子
志賀島サーフデイズ
クレイジーバッドフィーリング
ライブハウス
青い
drunken morning
ほわいとあうと
jellyfish dreaming
夏の日の午後
新しい朝
`)
  },

  {
    title: 'graffiti',
    year: '2022年8月',
    cover: 'images/13thfull.PNG',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
ハニー＆ダーリン
dope music
おやすみこーじー
タポタポオレンジ
nikujaga
party people
STUPID
2am
ふらふら
summer night
heartbeat (inst.)
飛行機雲
`)
  },

  {
    title: 'come again',
    year: '2022年9月',
    cover: 'images/14thfull.PNG',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
日常
パークサイドメモリー
リコリス
カムアゲイン
コードの唄
ダルいサマー
二度寝ガール
ダーティソング
ビートダンス
マルボロ (inst.)
メアリー
マイライフ
`)
  },

  {
    title: 'dialogue',
    year: '2022年8月',
    cover: 'images/15thfull.PNG',
    description: 'aaaa',
    youtube: '#',
    tracks: toTracks(`
ひかりのまち
シエスタ日和
sidestory
megane
soft skin
橙
aloha boys beachside fiction (inst.)
discord (inst.)
映画
asayake
conifer forest (inst.)
霜降
`)
  },

];

