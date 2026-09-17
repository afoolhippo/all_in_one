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
    description: 'ipadを購入しgaragebandを触り始めたことをきっかけにDTM活動に火が付き、勢いで制作した1stアルバム。学生時代の思い出の曲も複数再録。',
    youtube: 'https://youtu.be/KLxkMRpE0Oo',
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
    description: '1stの勢いそのままに制作した2nd。初期のライブを支えたバドワイザーほか、友人作詞の怪曲「渇いたナイフ」が誕生。',
    youtube: 'https://youtu.be/gM-0xw1-Sec',
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
    youtube: 'https://youtu.be/qN5K8F3qzxw',
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
    description: '食べ物に特化したEP。今後の食べ物ソングの先駆け的存在。シュールな世界観の「茄子を食べたら」収録。',
    youtube: 'https://youtu.be/lH_7tWx5DDA',
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
    description: '全体的に繊細な世界観を感じさせる4th。疾走感ある「モノクロの季節」は時折でライブで披露。',
    youtube: 'https://youtu.be/u9Q5pAtjTTE',
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
    description: '友人たちと期間限定で立ち上げたyoutube日替わりチャンネルをきっかけにしたコンセプトアルバム。食べ物ソングの元祖、「歯磨きしようぜ」収録。',
    youtube: 'https://youtu.be/Hz0jXEHxCew',
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
    description: '友人たちと期間限定で立ち上げたyoutube日替わりチャンネルをきっかけにしたコンセプトアルバム。某メーカーの掃除機への憧れを素直に歌い上げた「ダイソン」収録。',
    youtube: 'https://youtu.be/FWYR5RExJjA',
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
    description: '友人たちと期間限定で立ち上げたyoutube日替わりチャンネルをきっかけにしたコンセプトアルバム。夏になると歌いたくなる「かき氷」収録。',
    youtube: 'https://youtu.be/sL-fxQ7AqzY',
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
    description: '夏っぽい曲をはじめ様々なジャンルの曲がバランスよく収録。「echo」は最近ライブで頭角を現してきています。',
    youtube: 'https://youtu.be/o97NC2GTfjU',
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
    description: '「natsuyasumi」と地続き的な印象のEP。打ち込みの音色を試行錯誤しながら生まれた曲たちです。',
    youtube: 'https://youtu.be/Ym6zU9xrTvk',
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
    description: '無色ゆえ目立ちにくいが、いぶし銀的な曲が多いアルバム。ライブでは中々披露していないかも。',
    youtube: 'https://youtu.be/_Cn8i8Wq8xk',
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
    description: '稀代のキラーチューン「そっか」を収録。ファンク的なノリの曲もいくらか収録。',
    youtube: 'https://youtu.be/xuNrL4pH6Mw',
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
    description: '素直な歌ものとしての強さに挑戦したアルバム。「真夏の牢獄」は個人的に胸が締め付けられる佳曲。',
    youtube: 'https://youtu.be/dpYxlRtgMLc',
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
    description: 'SNS募集で即興作曲するようになり、ユニークなテーマの曲が多いアルバム。歌う際のTPOを選ばざるを得ない「仕事に行きたくない！」収録。',
    youtube: 'https://youtu.be/Lvnv5VtkF3Q',
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
    description: 'とめどない作曲意欲そのままに制作したアルバム。ほろ苦い景色を彷彿とさせる「放物線」収録。',
    youtube: 'https://youtu.be/5E-mJCK6w10',
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
    description: 'ポップな曲からあっさり系まで幅広く収録。ライブで盛り上がるときに欠かせない「Wifiないと生きていけない」収録。',
    youtube: 'https://youtu.be/JB_pb7NSdoA',
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
    description: 'バラエティに富んだ感のあるアルバム。何気なく続く日々の尊さに迫った「新しい朝」収録。',
    youtube: 'https://youtu.be/IT4CaAJv91s',
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
    description: '打ち込みラップ系に目覚め、短期間で大量作曲したアルバム。踏んでるんだか踏まれているのかは定かではない。',
    youtube: 'https://youtu.be/OjiGuRTak-A',
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
    description: '歌ものへ回帰した感のあるアルバム。「リコリス」や「カムアゲイン」はライブでも歌っています。',
    youtube: 'https://youtu.be/Upsh_yIvRbY',
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
    description: '学生時代から作り貯めた未収録曲を集めたアーカイブ的作品。',
    youtube: 'https://youtu.be/cwKvJFhvL68',
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

  {
    title: 'twilight',
    year: '2023年2月',
    cover: 'images/16thfull.PNG',
    description: '爽やかなポップチューン「ああキャンディ」ほかコロナにうなされながら作った「羽のない天使」収録。',
    youtube: 'https://youtu.be/wKOs-2pqAs4',
    tracks: toTracks(`
あ、ハッピーニューイヤー
ああ、キャンディ
芋九のブルース
ハロウィンナイト
名もなき詩
ちぐはぐ
カラス
羽のない天使
ビター＆シュガー
錠剤
ピンボケ
トワイライト
`)
  },

  {
    title: 'mud mud mud',
    year: '2023年3月',
    cover: 'images/17thfull.PNG',
    description: '小笹のスーパーでふと湧き上がり生まれた「僕らのスーパーマーケット」や過去の体験をありのままに告白した「狂った君へ」収録。',
    youtube: 'https://youtu.be/Eu7BS7SFVec',
    tracks: toTracks(`
BoTAniCal DaYs
僕らのスーパーマーケット
COW
蛙さん
ぬかるみ
ルースター
ジョン・タイター
ガラガラポン
Until the end
no color
沈黙
狂った君へ
`)
  },

  {
    title: 'yofukashi beatmaker',
    year: '2023年4月',
    cover: 'images/18thfull.PNG',
    description: 'ラップ系アルバム再来。勢いで作りました。',
    youtube: 'https://youtu.be/uM9sOpmvW7I',
    tracks: toTracks(`
opening
前兆
トクイテン
戒厳令
マッチ待ち
yurei in the coffeebreak
ワイト
love and…
白昼夢
退屈なドライブ
夕空の中へ
邂逅
`)
  },

  {
    title: 'Charanporan Days',
    year: '2023年6月',
    cover: 'images/19thfull.PNG',
    description: 'バス停で見つけた鳩の亡骸に捧げた「バス停の鳩」や巡りゆく季節を軽やかに',
    youtube: 'https://youtu.be/IOKdNJqtNgY',
    tracks: toTracks(`
ちゃらんぽらんデイズ
ピーターパン
midtown blues
入道雲と僕
ルージュの記憶
雨漏り酒盛り俺一人
オールドクロウ
pretty folky girl
hear me coming
夕暮れポエトリー
バス停の鳩
シーズナル
`)
  },

  {
    title: 'A La Carte',
    year: '2023年6月',
    cover: 'images/20thfull.PNG',
    description: '食べ物ソング爆発！ライブの定番「ハンバーガー」ほかシュールでダウナーな「二日酔い」など収録。',
    youtube: 'https://youtu.be/JS-gRvn3HU8',
    tracks: toTracks(`
ハンバーガー
コッペパン
プリンと小籠包
アラカブの煮付け
どこでもドーナツ
ラーメン三軒ハシゴ
ジュリー
二日酔い
癒着
梅雨
ファスティングダイエット
目玉のおやじ
`)
  },

  {
    title: 'my name is hippo',
    year: '2023年10月',
    cover: 'images/21thfull.PNG',
    description: '食べ物系の流れに加え、友人の歌詞提供を受けて制作した「箱崎はよかとこね」など箱崎ソングも収録。',
    youtube: 'https://youtu.be/z2dHeSk0Ijs',
    tracks: toTracks(`
my name is hippo
1988
箱崎はよかとこね
我らが箱崎商店街
酒893 wakachi
オレンジジムニー
トマトマト
げきあつ
えだまめ
わがしのうた
はしびろこう
放生会
`)
  },

  {
    title: 'endroll',
    year: '2023年11月',
    cover: 'images/22thfull.PNG',
    description: 'ライブで披露することは少ないけれども、確かに自分がその時感じたフィーリングが歌になっています。',
    youtube: 'https://youtu.be/p6Oqz9psv4E',
    tracks: toTracks(`
サマーサマー
タラタラしてんじゃねーよ
じゅげむ
狂犬
ペスカトーレ
プラットフォーム
ソラシド
曇天
ルサンチマン
エンドロール
slowmotion
looking for
`)
  },

  {
    title: 'bedroom music vol.1',
    year: '2021年2月',
    cover: 'images/beat1.PNG',
    description: 'ビートメイキング風な曲づくりにチャレンジしたコンセプトアルバムvol.1。',
    youtube: 'https://youtu.be/QSqCz4HLtnM',
    tracks: toTracks(`
yoake
warm
heptagon
ghost town
bad feeling
a sleep-walker
deep sheep
calm
memories
soft bird
good 4 u
coda
`)
  },

  {
    title: 'bedroom music vol.2',
    year: '2021年2月',
    cover: 'images/beat2.PNG',
    description: 'ビートメイキング風な曲づくりにチャレンジしたコンセプトアルバムvol.2。',
    youtube: 'https://youtu.be/5yO2pbN2l7I',
    tracks: toTracks(`
forgive me
reborn
freesia
tired of you
techno modoki
mountain book man
fog
deep inside
into the sea
disconnected
labyrinth
sugar and milk
`)
  },

  {
    title: '箱太郎BEST',
    year: '2023年9月',
    cover: 'images/hakotarou.png',
    description: '最狂の脂うどんを提供する「うどん箱太郎」さんのテーマソング詰め合わせのアルバム。',
    youtube: 'https://youtu.be/t5emob8rGeI',
    tracks: toTracks(`
箱太郎伝説
クレイジーパンダ
ねぎ大将
スウィートスウィート蘭王
潤滑油
キラキラうどん
おはよう昆布さん
切り干し大根ニキ
チャミポ！
かす＆ダンス
ジンジャー信者
ポテサラうどん?
`)
  },

  {
    title: 'moon',
    year: '2024年3月',
    cover: 'images/3rdep.PNG',
    description: '玉石混合なインストソングを集めたEP。',
    youtube: 'https://youtu.be/HPCNmz6jFjA',
    tracks: toTracks(`
another morning
aquarium
eniguma
good dreams
moon
under the sea
`)
  },

  {
    title: 'hayaoki beatmaker',
    year: '2023年4月',
    cover: 'images/4thep.PNG',
    description: 'ラップのような字余りの想いをフロウに乗せたEP。',
    youtube: 'https://youtu.be/8fPzK8rr8Rs',
    tracks: toTracks(`
KIRU YOU
Xデイ
you are my sun
クソ暑い夏
ダンシング　サンディ
ネイティブ　ドランカー
ピーナッツ　バター
`)
  },

  {
    title: 'no title',
    year: '2024年2月',
    cover: 'images/23thfull.PNG',
    description: 'ライブの定番「オムオムオムライス」や己の人生観について素直に歌えた「マイウェイ」収録。',
    youtube: 'https://youtu.be/ATiwnUxoN5Q',
    tracks: toTracks(`
hippo音頭
オムオムオムライス
からあげうまうま
サルトリイバラ
雨のち晴れ
君の好きな花
気になるほくろ
ネヴァーマインド
じいさんmeetsばあさん
放蕩息子
no titile
マイウェイ
`)
  },

  {
    title: 'haru no nioi',
    year: '2024年3月',
    cover: 'images/24thfull.PNG',
    description: '再開発される箱崎の街並みを想いながら作った「新しいハコザキ」や銭湯跡地でのライブを契機に生まれた「銭湯せんと？」など収録。',
    youtube: 'https://youtu.be/2TvrrynJJMc',
    tracks: toTracks(`
銭湯せんと？
朝焼けとコーヒーと君と
春の匂い
GO! GO! GOLF
たこ坊主
アブリサバズシ
さるちゃん農園
涙もろいおじさん
マイノリティ
helpless
僕らのハコさんぽマップ
新しいハコザキ
`)
  },

  {
    title: 'xxxx',
    year: '2024年6月',
    cover: 'images/25thfull.PNG',
    description: 'ダークな世界観も感じさせる風変わりな印象もあるアルバム。',
    youtube: 'https://youtu.be/5RPTQO8RZ0I',
    tracks: toTracks(`
fxxk you bayby
baby bamboo
荒唐無稽
いざ開戦！
夕暮れ part2
フラストレーション in the night
くるくるパー
アスファルトあつあつ
痙攣
混濁
ISO
xxxx
`)
  },

  {
    title: 'summergazer',
    year: '2024年8月',
    cover: 'images/26thfull.PNG',
    description: 'ありもしない夏の記憶が蘇るような「冷奴」や気まずい空気感を煮詰めたような「噛み合わない」収録。',
    youtube: 'https://youtu.be/hDGGAf9gzkw',
    tracks: toTracks(`
冷奴
ヘビースモーカー
覆水盆に返そうぜ！
すぐローソン
IGGY
カルマ
silent season(inst.)
年中五月病
噛み合わない
引っかき傷
summergazer(inst.)
夏の日の花火
`)
  },

  {
    title: 'A punk',
    year: '2024年10月',
    cover: 'images/27thfull.PNG',
    description: 'ポストパンクな趣のある「なんとなくパンク」や妖怪シリーズの先駆けとして「ぬらりひょん」収録。',
    youtube: 'https://youtu.be/DLBrIFwUIyQ',
    tracks: toTracks(`
なんとなくパンク
ぬらりひょん
リップサービス
野良猫のパーティー
にゃんこ
生姜焼き
透明な黒(inst.)
八方塞がり
捜査網
金輪際
薔薇のまち
モラトリアム35
`)
  },


];

