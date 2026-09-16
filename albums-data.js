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
  }
];

