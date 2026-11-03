// The topic pages: the same tool with one check in front, each with its own title, description, H1, body text and
// questions in every language, at /<lang>/<page>/. The build gives each page its URLs, sitemap entries, hreflang and
// link preview; the page script fills the focus panel from the same sniffers as the main page.
//   rows   the sniffer rows the focus panel shows
//   check  the disguise check whose verdict heads it
//   go     what to link to when the host announces it: "dns" DNS Test, "egress" EgressLens
export const PAGES = {
  fingerprint: { rows: ["fpid", "canvas", "webgl", "audio", "fontfp", "rand"], check: "fp" },
  "dns-leak": { rows: ["dns", "ip", "ex_cn", "ex_intl", "stack"], check: "dns", go: "dns" },
  "webrtc-leak": { rows: ["webrtc", "lan", "ip", "stack"], check: "webrtc", go: "egress" },
  "browser-check": { rows: ["engine", "browser", "h_ua", "h_lang", "langs", "tz", "fonts"], check: "tamper" },
  "timezone-check": { rows: ["tz", "tzip", "hour", "geo", "clock"], check: "tz" },
  "proxy-check": { rows: ["edge", "ip", "isp", "dns", "webrtc"], check: "rtt", go: "egress" },
  "language-check": { rows: ["langs", "h_lang", "locale", "kbd", "voices", "fonts"], check: "lang" },
  "canvas-fingerprint": { rows: ["canvas", "webgl", "audio", "rand", "fpid"], check: "fp" },
  "user-agent": { rows: ["h_ua", "os", "browser", "h_chua", "h_plat", "engine"], check: "ua" },
  "extensions": { rows: ["ext", "adblock", "engine", "h_ua"], check: "tamper" },
  "anti-detect-browser": { rows: ["engver", "worker", "h_ua", "browser", "gpu", "tz"], check: "fpb" },
  "icloud-private-relay": { rows: ["ip", "isp", "geo", "webrtc", "ex_intl"], check: "dc" },
  "warp-check": { rows: ["warp", "ip", "isp", "edge", "kex"], check: "warp" },
  "http3-ech": { rows: ["proto", "kex", "tlsfp", "edge"], check: "ech" },
};

// per page, per language: seo_title, seo_desc, seo_kw, h1, og_sub, intro (the body text above the result),
// focus_h (the result's heading) and docs (the page's own questions)
export const TEXT = {
  fingerprint: {
    en: {
      seo_title: "Browser Fingerprint Test: can sites track you without cookies? · Who Are You",
      seo_desc: "Free browser fingerprint test: your canvas, WebGL, audio and font fingerprints and the combined ID any site can compute without cookies, whether your browser randomizes it, and whether it recognized you since your last visit. No IP or raw data is kept, only anonymous counts of how common you are.",
      seo_kw: "browser fingerprint test, browser fingerprinting, canvas fingerprint, WebGL fingerprint, audio fingerprint, fingerprint checker, anti-fingerprinting, am I trackable",
      h1: "Browser fingerprint test", og_sub: "The ID any site computes for you, without cookies",
      intro: "Sites don't need cookies to recognize you. How your system draws text and shapes, processes sound and which fonts it has add up to an ID that stays the same across sites, private windows and VPNs. Here is yours, what it is made of, and whether your browser scrambles it.",
      focus_h: "Your fingerprint",
      docs: [
        ["What is a browser fingerprint?", "A set of small differences between computers: how the graphics card and driver draw a canvas or a WebGL scene, how the audio stack rounds a sound, which fonts are installed, plus screen, language and time zone. Each alone is common; together they are often unique. A site hashes them into an ID, and every site that runs the same script gets the same ID for you."],
        ["Does a VPN or a private window change it?", "No. None of it depends on your IP address, and private windows draw and play sound the same way. That is why a fingerprint can follow you after you clear cookies or switch VPN servers. The ID card on this page remembers your last visit (in your browser only) to show it."],
        ["How do I stop being fingerprinted?", "Use a browser that fights it: Brave adds random noise to canvas, WebGL and audio by default; Firefox has privacy.resistFingerprinting; Tor Browser makes every user look the same. Extensions that change the user agent or block canvas often make you more unique, not less. The \"Fingerprint protection\" row tells whether your browser randomizes."],
        ["Can this test tell how unique I am?", "Yes, roughly. The page counts, anonymously, how many checks had each of your values and your whole fingerprint ID (its first 8 characters), and shows how many matched yours out of every check on this site. It keeps no IP and no full fingerprint. The numbers mean something only once enough people have taken the test; until then it says the count is still building up."],
      ],
    },
    "zh-CN": {
      seo_title: "浏览器指纹检测：不用 Cookie，网站能认出你吗 · 你是谁",
      seo_desc: "免费浏览器指纹检测：查看你的 Canvas、WebGL、音频和字体指纹，以及任何网站不用 Cookie 就能算出的综合指纹 ID；看浏览器有没有开防指纹，上次来访后有没有被认出来。不保存 IP 和原始数据，只累计匿名计数，用来算你有多常见。",
      seo_kw: "浏览器指纹检测, 浏览器指纹, Canvas 指纹, WebGL 指纹, 音频指纹, 指纹浏览器检测, 防指纹, 指纹追踪",
      h1: "浏览器指纹检测", og_sub: "不用 Cookie，网站也能算出你的 ID",
      intro: "网站不需要 Cookie 也能认出你。你的系统怎么画文字和图形、怎么处理声音、装了哪些字体，合在一起就是一个 ID：换网站、开无痕、开 VPN 都不变。下面是你的指纹、它由什么组成，以及你的浏览器有没有把它打乱。",
      focus_h: "你的指纹",
      docs: [
        ["浏览器指纹是什么？", "电脑之间的一组细微差别：显卡和驱动画 Canvas、WebGL 的结果，声卡处理声音时的舍入，装了哪些字体，再加上屏幕、语言和时区。单看每一项都很常见，合在一起往往独一无二。网站把它们算成一个哈希，跑同一段脚本的每个网站，都会得到你同一个 ID。"],
        ["开 VPN 或无痕模式会改变指纹吗？", "不会。这些都和 IP 无关，无痕窗口画图、放声音的方式也一样。所以清了 Cookie、换了 VPN 节点，指纹照样能跟着你。页面上的指纹卡会记住你上次来访（只记在你的浏览器里），下次来就能看到效果。"],
        ["怎样防止被指纹追踪？", "用会对抗指纹的浏览器：Brave 默认给 Canvas、WebGL 和音频加随机干扰；Firefox 可以开 privacy.resistFingerprinting；Tor 浏览器让所有人看起来一模一样。改 UA、屏蔽 Canvas 的扩展反而常常让你更独特。「防指纹」那一行会告诉你你的浏览器有没有随机化。"],
        ["这个检测能说出我有多独特吗？", "能，大致能。页面会匿名统计你的每一项读数、以及整个指纹 ID（前 8 位）在本站的检测里出现过多少次，告诉你在所有检测里有多少次和你一样。不存 IP，也不存完整指纹。检测的人够多，这些数字才有意义；在那之前页面会显示「数据还在积累」。"],
      ],
    },
    "zh-TW": {
      seo_title: "瀏覽器指紋檢測：不用 Cookie，網站認得出你嗎 · 你是誰",
      seo_desc: "免費瀏覽器指紋檢測：查看你的 Canvas、WebGL、音訊和字型指紋，以及任何網站不用 Cookie 就能算出的綜合指紋 ID；看瀏覽器有沒有開防指紋，上次造訪後有沒有被認出來。不保存 IP 和原始資料，只累計匿名計數，用來算你有多常見。",
      seo_kw: "瀏覽器指紋檢測, 瀏覽器指紋, Canvas 指紋, WebGL 指紋, 音訊指紋, 指紋瀏覽器, 防指紋, 指紋追蹤",
      h1: "瀏覽器指紋檢測", og_sub: "不用 Cookie，網站也能算出你的 ID",
      intro: "網站不需要 Cookie 也認得出你。你的系統怎麼畫文字和圖形、怎麼處理聲音、裝了哪些字型，合在一起就是一個 ID：換網站、開無痕、開 VPN 都不變。下面是你的指紋、它由什麼組成，以及你的瀏覽器有沒有把它打亂。",
      focus_h: "你的指紋",
      docs: [
        ["瀏覽器指紋是什麼？", "電腦之間的一組細微差異：顯示卡和驅動畫 Canvas、WebGL 的結果，音效處理時的捨入，裝了哪些字型，再加上螢幕、語言和時區。單看每一項都很常見，合在一起往往獨一無二。網站把它們算成一個雜湊，跑同一段腳本的每個網站，都會得到你同一個 ID。"],
        ["開 VPN 或無痕模式會改變指紋嗎？", "不會。這些都和 IP 無關，無痕視窗畫圖、播聲音的方式也一樣。所以清了 Cookie、換了 VPN 節點，指紋照樣跟著你。頁面上的指紋卡會記住你上次造訪（只記在你的瀏覽器裡），下次來就看得到效果。"],
        ["怎樣防止被指紋追蹤？", "用會對抗指紋的瀏覽器：Brave 預設給 Canvas、WebGL 和音訊加隨機干擾；Firefox 可以開 privacy.resistFingerprinting；Tor 瀏覽器讓所有人看起來一模一樣。改 UA、封鎖 Canvas 的擴充功能反而常讓你更獨特。「防指紋」那一列會告訴你瀏覽器有沒有隨機化。"],
        ["這個檢測能說出我有多獨特嗎？", "能，大致能。頁面會匿名統計你的每一項讀數、以及整個指紋 ID（前 8 位）在本站的檢測裡出現過多少次，告訴你在所有檢測裡有多少次和你一樣。不存 IP，也不存完整指紋。檢測的人夠多，這些數字才有意義；在那之前頁面會顯示「資料還在累積」。"],
      ],
    },
    ja: {
      seo_title: "ブラウザフィンガープリント検査：Cookie なしで追跡される？ · あなたは誰",
      seo_desc: "無料のブラウザフィンガープリント検査：Canvas・WebGL・オーディオ・フォントのフィンガープリントと、どのサイトでも Cookie なしで計算できる総合 ID、ブラウザがランダム化しているか、前回の訪問から見分けられたかを表示。IP や元のデータは保存せず、どれだけありふれているかを数える匿名の集計だけを残します。",
      seo_kw: "ブラウザフィンガープリント, フィンガープリント 確認, Canvas フィンガープリント, WebGL フィンガープリント, オーディオ フィンガープリント, 追跡 防止, アンチフィンガープリント",
      h1: "ブラウザフィンガープリント検査", og_sub: "Cookie なしでサイトが計算するあなたの ID",
      intro: "サイトは Cookie がなくてもあなたを見分けられます。文字や図形の描き方、音の処理、入っているフォントを合わせると 1 つの ID になり、サイトを変えても、プライベートウィンドウでも、VPN でも変わりません。あなたの ID と、その中身、ブラウザがそれをかき混ぜているかをここに示します。",
      focus_h: "あなたのフィンガープリント",
      docs: [
        ["ブラウザフィンガープリントとは？", "コンピューターごとの小さな違いの集まりです：GPU とドライバーによる Canvas や WebGL の描画結果、音声処理の丸め方、インストール済みフォント、それに画面・言語・タイムゾーン。1 つずつはありふれていても、合わせると唯一になりがちです。サイトはこれをハッシュにして ID にし、同じスクリプトを動かすサイトはどこでも同じ ID を得ます。"],
        ["VPN やプライベートウィンドウで変わる？", "変わりません。どれも IP に関係なく、プライベートウィンドウでも描画や音の処理は同じです。だから Cookie を消しても VPN を変えても追いかけられます。このページの ID カードは前回の訪問を（ブラウザ内だけに）覚えていて、それを確かめられます。"],
        ["フィンガープリント追跡を防ぐには？", "対策のあるブラウザを使います：Brave は標準で Canvas・WebGL・オーディオにノイズを加え、Firefox には privacy.resistFingerprinting があり、Tor Browser は全員を同じに見せます。UA を変えたり Canvas をブロックする拡張機能は、かえって目立つことが多いです。「フィンガープリント対策」の行で、ランダム化されているか分かります。"],
        ["どれくらい珍しいか分かる？", "おおよそ分かります。ページは各読み取り値と指紋 ID 全体（先頭 8 文字）がこのサイトの検査で何回あったかを匿名で数え、全検査のうち何回が同じだったかを示します。IP や完全な指紋は保存しません。十分な人数が検査するまでは数字に意味がないので、それまでは集計中と表示します。"],
      ],
    },
    ko: {
      seo_title: "브라우저 지문 검사: 쿠키 없이도 추적될까 · 당신은 누구",
      seo_desc: "무료 브라우저 지문 검사: Canvas, WebGL, 오디오, 글꼴 지문과 어떤 사이트든 쿠키 없이 계산하는 종합 지문 ID, 브라우저가 무작위화하는지, 지난 방문 이후 알아봤는지를 보여 줍니다. IP와 원본 데이터는 저장하지 않고, 얼마나 흔한지 세는 익명 집계만 남깁니다.",
      seo_kw: "브라우저 지문 검사, 브라우저 핑거프린트, 캔버스 지문, WebGL 지문, 오디오 지문, 핑거프린팅 방지, 추적 방지",
      h1: "브라우저 지문 검사", og_sub: "쿠키 없이 사이트가 계산하는 당신의 ID",
      intro: "사이트는 쿠키 없이도 당신을 알아봅니다. 시스템이 글자와 도형을 그리는 방식, 소리를 처리하는 방식, 설치된 글꼴을 합치면 하나의 ID가 되고, 사이트를 바꿔도, 시크릿 창에서도, VPN을 써도 그대로입니다. 당신의 ID와 그 구성, 그리고 브라우저가 그것을 뒤섞는지 보여 줍니다.",
      focus_h: "당신의 지문",
      docs: [
        ["브라우저 지문이란?", "컴퓨터마다 다른 작은 차이들의 묶음입니다. 그래픽 카드와 드라이버가 Canvas, WebGL을 그린 결과, 오디오 처리의 반올림, 설치된 글꼴, 여기에 화면, 언어, 시간대. 하나씩은 흔해도 합치면 대개 유일합니다. 사이트는 이것을 해시로 만들어 ID로 쓰고, 같은 스크립트를 돌리는 모든 사이트가 당신에게서 같은 ID를 얻습니다."],
        ["VPN이나 시크릿 창을 쓰면 바뀌나요?", "아니요. 모두 IP와 무관하고, 시크릿 창도 그리는 방식과 소리 처리는 같습니다. 그래서 쿠키를 지우거나 VPN 서버를 바꿔도 지문이 따라옵니다. 이 페이지의 ID 카드는 지난 방문을 브라우저 안에만 기억해서 그걸 보여 줍니다."],
        ["지문 추적을 막으려면?", "지문에 대응하는 브라우저를 쓰세요. Brave는 기본으로 Canvas, WebGL, 오디오에 무작위 잡음을 넣고, Firefox는 privacy.resistFingerprinting이 있으며, Tor 브라우저는 모두를 똑같이 보이게 합니다. UA를 바꾸거나 Canvas를 막는 확장은 오히려 더 눈에 띄게 만들기 쉽습니다. ‘지문 보호’ 줄에서 무작위화 여부를 볼 수 있습니다."],
        ["내가 얼마나 독특한지 알 수 있나요?", "대략 알 수 있어요. 페이지는 각 값과 지문 ID 전체(앞 8자리)가 이 사이트의 검사에서 몇 번 나왔는지 익명으로 세고, 전체 검사 중 몇 번이 같았는지 보여 줍니다. IP와 전체 지문은 저장하지 않아요. 충분히 많은 사람이 검사해야 숫자가 의미가 있어서, 그 전에는 아직 쌓이는 중이라고 표시합니다."],
      ],
    },
    es: {
      seo_title: "Test de huella del navegador: ¿te rastrean sin cookies? · ¿Quién eres?",
      seo_desc: "Test gratuito de huella digital del navegador: tus huellas canvas, WebGL, audio y de fuentes y el ID combinado que cualquier sitio calcula sin cookies, si tu navegador la aleatoriza y si te reconoció desde tu última visita. No guarda tu IP ni los datos en bruto, solo recuentos anónimos de lo común que eres.",
      seo_kw: "test huella digital navegador, browser fingerprint, huella canvas, huella WebGL, huella de audio, fingerprinting, anti fingerprinting, rastreo sin cookies",
      h1: "Test de huella del navegador", og_sub: "El ID que cualquier sitio calcula para ti, sin cookies",
      intro: "Los sitios no necesitan cookies para reconocerte. Cómo dibuja tu sistema texto y formas, cómo procesa el sonido y qué fuentes tiene suman un ID que no cambia entre sitios, ventanas privadas ni VPN. Aquí está el tuyo, de qué está hecho y si tu navegador lo mezcla.",
      focus_h: "Tu huella",
      docs: [
        ["¿Qué es la huella del navegador?", "Un conjunto de pequeñas diferencias entre equipos: cómo la gráfica y el controlador dibujan un canvas o una escena WebGL, cómo redondea el audio, qué fuentes hay instaladas, más pantalla, idioma y zona horaria. Cada una es común; juntas suelen ser únicas. Un sitio las convierte en un ID, y cada sitio que ejecuta el mismo script obtiene el mismo ID tuyo."],
        ["¿La cambia una VPN o una ventana privada?", "No. Nada de eso depende de tu IP, y una ventana privada dibuja y suena igual. Por eso la huella te sigue aunque borres cookies o cambies de servidor VPN. La tarjeta de ID de esta página recuerda tu última visita (solo en tu navegador) para demostrarlo."],
        ["¿Cómo evito el fingerprinting?", "Usa un navegador que lo combata: Brave añade ruido aleatorio a canvas, WebGL y audio por defecto; Firefox tiene privacy.resistFingerprinting; Tor Browser hace que todos parezcan iguales. Las extensiones que cambian el user agent o bloquean canvas suelen hacerte más único, no menos. La fila «Protección de huella» dice si tu navegador la aleatoriza."],
        ["¿Puede decir lo único que soy?", "Sí, más o menos. La página cuenta, de forma anónima, cuántas comprobaciones tuvieron cada uno de tus valores y tu ID de huella completo (sus 8 primeros caracteres), y muestra cuántas coincidieron con la tuya entre todas las del sitio. No guarda IP ni la huella completa. Los números solo significan algo cuando suficiente gente ha hecho el test; hasta entonces dice que el recuento se está formando."],
      ],
    },
    fr: {
      seo_title: "Test d’empreinte du navigateur : un site peut-il vous suivre sans cookies ? · Qui êtes-vous ?",
      seo_desc: "Test gratuit d’empreinte du navigateur : vos empreintes canvas, WebGL, audio et polices, et l’ID combiné que n’importe quel site calcule sans cookies. Vous voyez aussi si votre navigateur le brouille et s’il vous a reconnu depuis votre dernière visite. Aucune IP ni donnée brute n’est gardée, seulement des compteurs anonymes.",
      seo_kw: "test empreinte navigateur, empreinte digitale navigateur, browser fingerprint, empreinte canvas, empreinte WebGL, empreinte audio, anti fingerprinting, pistage sans cookies",
      h1: "Test d’empreinte du navigateur", og_sub: "L’ID que tout site calcule pour vous, sans cookies",
      intro: "Un site n’a pas besoin de cookies pour vous reconnaître. La façon dont votre système dessine le texte et les formes, traite le son, et les polices qu’il contient suffisent à former un ID. Il reste le même d’un site à l’autre, en navigation privée et derrière un VPN. Voici le vôtre, ce qui le compose, et si votre navigateur le brouille.",
      focus_h: "Votre empreinte",
      docs: [
        ["Qu’est-ce qu’une empreinte de navigateur ?", "Un ensemble de petites différences entre appareils : la façon dont la carte graphique et son pilote dessinent un canvas ou une scène WebGL, la manière dont le son est arrondi, les polices installées, plus l’écran, la langue et le fuseau horaire. Chaque détail pris seul est banal ; ensemble, ils sont souvent uniques. Un site les combine en un code fixe qui sert d’ID, et tous les sites qui utilisent le même script obtiennent le même ID pour vous."],
        ["Un VPN ou la navigation privée la changent-ils ?", "Non. Rien de tout cela ne dépend de votre adresse IP, et une fenêtre privée dessine et traite le son exactement de la même façon. C’est pour cela qu’une empreinte vous suit même après avoir effacé vos cookies ou changé de serveur VPN. La carte d’ID de cette page garde le souvenir de votre dernière visite (dans votre navigateur uniquement) pour vous le montrer."],
        ["Comment éviter d’être suivi par empreinte ?", "Prenez un navigateur qui s’en défend : Brave ajoute par défaut un bruit aléatoire au canvas, au WebGL et à l’audio ; Firefox propose privacy.resistFingerprinting ; Tor Browser fait que tous ses utilisateurs se ressemblent. Les extensions qui changent le user agent ou bloquent le canvas vous rendent souvent plus repérable, pas moins. La ligne « Protection anti-empreinte » indique si votre navigateur brouille l’empreinte."],
        ["Le test peut-il dire à quel point je suis unique ?", "Oui, à peu près. La page compte, de façon anonyme, combien de tests avaient chacune de vos valeurs et votre ID d’empreinte (ses 8 premiers caractères), puis montre combien de tests sur ce site correspondaient au vôtre. Elle ne garde ni votre IP ni votre empreinte complète. Ces chiffres n’ont de sens qu’une fois assez de personnes testées ; d’ici là, la page indique que le comptage est en cours."],
      ],
    },
    de: {
      seo_title: "Browser-Fingerprint-Test: Können Websites dich ohne Cookies verfolgen? · Wer bist du?",
      seo_desc: "Kostenloser Browser-Fingerprint-Test: deine Canvas-, WebGL-, Audio- und Schriften-Fingerabdrücke und die Gesamt-ID, die jede Website ohne Cookies berechnen kann. Dazu siehst du, ob dein Browser sie verwürfelt und ob du seit deinem letzten Besuch wiedererkannt wurdest. IP und Rohdaten werden nicht gespeichert, nur anonyme Zähler.",
      seo_kw: "Browser Fingerprint Test, Browser-Fingerabdruck, Canvas Fingerprint, WebGL Fingerprint, Audio Fingerprint, Fingerprinting verhindern, Tracking ohne Cookies",
      h1: "Browser-Fingerprint-Test", og_sub: "Die ID, die jede Website ohne Cookies für dich berechnet",
      intro: "Websites brauchen keine Cookies, um dich wiederzuerkennen. Wie dein System Text und Formen zeichnet, wie es Ton verarbeitet und welche Schriften es hat, ergibt zusammen eine ID. Sie bleibt gleich, egal auf welcher Website, im privaten Fenster und hinter einem VPN. Hier siehst du deine, woraus sie besteht und ob dein Browser sie verwürfelt.",
      focus_h: "Dein Fingerabdruck",
      docs: [
        ["Was ist ein Browser-Fingerabdruck?", "Eine Reihe kleiner Unterschiede zwischen Geräten: wie Grafikkarte und Treiber ein Canvas oder eine WebGL-Szene zeichnen, wie die Audioverarbeitung Töne rundet, welche Schriften installiert sind, dazu Bildschirm, Sprache und Zeitzone. Jedes Detail für sich ist alltäglich, zusammen sind sie oft einmalig. Eine Website rechnet daraus einen festen Code als ID, und jede Website mit demselben Skript bekommt für dich dieselbe ID."],
        ["Ändern ein VPN oder ein privates Fenster ihn?", "Nein. Nichts davon hängt von deiner IP-Adresse ab, und ein privates Fenster zeichnet und spielt Ton genauso ab. Deshalb folgt dir ein Fingerabdruck auch, wenn du Cookies löschst oder den VPN-Server wechselst. Die ID-Karte auf dieser Seite merkt sich deinen letzten Besuch (nur in deinem Browser), damit du das selbst siehst."],
        ["Wie schütze ich mich vor Fingerprinting?", "Nimm einen Browser, der sich dagegen wehrt: Brave verrauscht Canvas, WebGL und Audio standardmäßig; Firefox hat privacy.resistFingerprinting; der Tor Browser lässt alle Nutzer gleich aussehen. Erweiterungen, die den User-Agent ändern oder Canvas blockieren, machen dich oft auffälliger statt unauffälliger. Die Zeile „Fingerabdruckschutz“ zeigt, ob dein Browser verwürfelt."],
        ["Kann der Test sagen, wie einmalig ich bin?", "Ja, ungefähr. Die Seite zählt anonym, wie viele Checks jeden deiner Werte und deine Fingerabdruck-ID (ihre ersten 8 Zeichen) hatten, und zeigt, wie viele Checks auf dieser Website zu deinem passten. Sie speichert weder deine IP noch den vollständigen Fingerabdruck. Aussagekräftig werden die Zahlen erst, wenn genug Leute getestet haben; bis dahin steht dort, dass die Zählung noch läuft."],
      ],
    },
    pt: {
      seo_title: "Teste de impressão digital do navegador: rastreado sem cookies? · Quem é você?",
      seo_desc: "Teste gratuito de impressão digital do navegador: suas impressões canvas, WebGL, de áudio e de fontes e o ID combinado que qualquer site calcula sem cookies, se o navegador embaralha e se ele reconheceu você desde a última visita. Não guarda seu IP nem os dados brutos, só contagens anônimas de quão comum você é.",
      seo_kw: "teste impressão digital navegador, browser fingerprint, fingerprint canvas, fingerprint WebGL, fingerprint de áudio, anti fingerprinting, rastreamento sem cookies",
      h1: "Teste de impressão digital do navegador", og_sub: "O ID que qualquer site calcula para você, sem cookies",
      intro: "Sites não precisam de cookies para reconhecer você. O jeito como seu sistema desenha texto e formas, processa som e quais fontes tem somam um ID que não muda entre sites, janelas anônimas e VPNs. Aqui está o seu, do que ele é feito e se o seu navegador o embaralha.",
      focus_h: "Sua impressão digital",
      docs: [
        ["O que é a impressão digital do navegador?", "Um conjunto de pequenas diferenças entre computadores: como a placa de vídeo e o driver desenham um canvas ou uma cena WebGL, como o áudio arredonda, quais fontes estão instaladas, mais tela, idioma e fuso. Cada uma é comum; juntas costumam ser únicas. Um site transforma isso num ID, e todo site que roda o mesmo script obtém o mesmo ID seu."],
        ["VPN ou janela anônima mudam a impressão?", "Não. Nada disso depende do seu IP, e uma janela anônima desenha e toca som do mesmo jeito. Por isso a impressão segue você mesmo depois de apagar cookies ou trocar de servidor VPN. O cartão de ID desta página lembra sua última visita (só no seu navegador) para mostrar isso."],
        ["Como evitar o fingerprinting?", "Use um navegador que o combata: o Brave adiciona ruído aleatório a canvas, WebGL e áudio por padrão; o Firefox tem privacy.resistFingerprinting; o Tor Browser faz todos parecerem iguais. Extensões que trocam o user agent ou bloqueiam canvas costumam deixar você mais único. A linha \"Proteção de impressão\" mostra se o seu navegador embaralha."],
        ["O teste diz quão único eu sou?", "Sim, mais ou menos. A página conta, de forma anônima, quantas verificações tiveram cada um dos seus valores e seu ID de impressão completo (os 8 primeiros caracteres), e mostra quantas bateram com a sua entre todas do site. Não guarda IP nem a impressão completa. Os números só fazem sentido quando gente suficiente fez o teste; até lá, a página diz que a contagem ainda está se formando."],
      ],
    },
    ru: {
      seo_title: "Проверка отпечатка браузера: могут ли сайты следить за вами без cookie? · Кто вы?",
      seo_desc: "Бесплатная проверка отпечатка браузера: отпечатки canvas, WebGL, аудио и шрифтов и общий ID, который любой сайт вычисляет без cookie. Вы также увидите, перемешивает ли его браузер и узнали ли вас с прошлого визита. IP и исходные данные не сохраняются — только анонимные счётчики.",
      seo_kw: "проверка отпечатка браузера, отпечаток браузера, browser fingerprint, canvas fingerprint, WebGL отпечаток, аудио отпечаток, защита от фингерпринтинга, слежка без cookie",
      h1: "Проверка отпечатка браузера", og_sub: "ID, который любой сайт вычисляет для вас без cookie",
      intro: "Сайтам не нужны cookie, чтобы вас узнать. То, как ваша система рисует текст и фигуры, обрабатывает звук, и какие в ней шрифты, складывается в ID. Он не меняется ни на другом сайте, ни в режиме инкогнито, ни через VPN. Здесь — ваш ID, из чего он состоит и перемешивает ли его ваш браузер.",
      focus_h: "Ваш отпечаток",
      docs: [
        ["Что такое отпечаток браузера?", "Набор мелких различий между устройствами: как видеокарта и драйвер рисуют canvas или сцену WebGL, как округляется звук, какие установлены шрифты, плюс экран, язык и часовой пояс. По отдельности всё это обычно, вместе — часто уникально. Сайт сводит это в постоянный код, который служит ID, и каждый сайт с тем же скриптом получает для вас один и тот же ID."],
        ["Меняют ли его VPN или режим инкогнито?", "Нет. Ничто из этого не зависит от IP-адреса, а окно инкогнито рисует и обрабатывает звук точно так же. Поэтому отпечаток следует за вами, даже если вы очистили cookie или сменили VPN-сервер. Карточка ID на этой странице помнит прошлый визит (только в вашем браузере), чтобы вы увидели это сами."],
        ["Как защититься от слежки по отпечатку?", "Возьмите браузер, который с этим борется: Brave по умолчанию добавляет случайный шум в canvas, WebGL и аудио; в Firefox есть privacy.resistFingerprinting; Tor Browser делает всех пользователей одинаковыми. Расширения, которые меняют User-Agent или блокируют canvas, часто делают вас только заметнее. Строка «Защита от отпечатков» показывает, перемешивает ли отпечаток ваш браузер."],
        ["Покажет ли тест, насколько я уникален?", "Примерно — да. Страница анонимно считает, сколько проверок было с каждым вашим значением и с вашим ID отпечатка (его первыми 8 символами), и показывает, сколько проверок на сайте совпало с вашей. Ни IP, ни полный отпечаток не сохраняются. Числа имеют смысл, только когда тест прошло достаточно людей; до тех пор страница пишет, что данные ещё накапливаются."],
      ],
    },
  },
  "dns-leak": {
    en: {
      seo_title: "DNS Leak Test: does your DNS go around your VPN? · Who Are You",
      seo_desc: "Free DNS leak test: find the DNS resolver that actually looks up sites for you, its country and network, and compare it with the IP sites see. If they differ, your VPN or proxy leaks DNS. With how to fix it in Clash, V2Ray and the browser.",
      seo_kw: "DNS leak test, DNS leak, VPN DNS leak, which DNS server am I using, DNS resolver test, Clash DNS leak, fake-ip, proxy DNS leak",
      h1: "DNS leak test", og_sub: "Does your DNS go around your VPN?",
      intro: "Your VPN may carry your traffic while your DNS lookups still go to your own provider, which tells whoever runs the name servers where you really are. This test makes a lookup nobody made before and asks the name server who made it: your resolver, its country and network, compared with the address sites see.",
      focus_h: "Your DNS resolver",
      docs: [
        ["What is a DNS leak?", "Before your browser connects to a site, a DNS resolver turns the name into an address. If that lookup skips the VPN or proxy, it goes to your own ISP's resolver: the ISP sees every site you visit, and sites that compare your resolver with your IP can tell you're using a VPN and where you actually are."],
        ["How does this test find my resolver?", "The page looks up a random name under edns.ip-api.com that has never been asked before, so no cache can answer: your resolver has to ask ip-api's name server, which reports the resolver's address and network, and the client subnet if your resolver passes one along (ECS). The test compares the resolver's country with the country of your IP."],
        ["How do I fix a DNS leak?", "Clash / Mihomo: enable its DNS with enhanced-mode fake-ip, or use TUN mode so every lookup goes through it. V2Ray / Xray clients: route DNS through the proxy (or set a DoH server that goes through it). In the browser, Secure DNS (DoH) also keeps lookups away from the ISP. Then run this test again."],
        ["My resolver is Cloudflare or Google in another city. Is that a leak?", "Usually not. Public resolvers like 1.1.1.1 and 8.8.8.8 answer from the data center nearest to the request, so the city may differ from your VPN exit. What gives you away is a resolver run by your home ISP, or in your home country while your IP is abroad."],
      ],
    },
    "zh-CN": {
      seo_title: "DNS 泄露检测：你的 DNS 有没有绕过 VPN · 你是谁",
      seo_desc: "免费 DNS 泄露检测：找出实际替你解析域名的 DNS 服务器，看它在哪个国家、属于哪家运营商，再和网站看到的 IP 对比。对不上，就是 VPN 或代理漏了 DNS。附 Clash、V2Ray 和浏览器里的修复方法。",
      seo_kw: "DNS 泄露检测, DNS 泄漏, VPN DNS 泄露, 查看我的 DNS 服务器, DNS 解析器检测, Clash DNS 泄露, fake-ip, 代理 DNS 泄露",
      h1: "DNS 泄露检测", og_sub: "你的 DNS 有没有绕过 VPN？",
      intro: "VPN 可能替你转发了流量，DNS 查询却还是发给本地运营商，等于告诉别人你真正在哪。这个检测会查询一个从来没人查过的域名，再问权威服务器是谁来查的：也就是你的解析器、它所在的国家和运营商，然后和网站看到的 IP 对比。",
      focus_h: "你的 DNS 解析器",
      docs: [
        ["什么是 DNS 泄露？", "浏览器连接网站之前，要先由 DNS 解析器把域名换成地址。如果这一步没走 VPN 或代理，查询就发给了你本地运营商的解析器：运营商能看到你访问的每个网站；网站把解析器和你的 IP 一对比，也能看出你在用 VPN，以及你实际在哪。"],
        ["这个检测怎么找到我的解析器？", "页面会查询 edns.ip-api.com 下一个随机的、从没人查过的域名，所以没有缓存能直接回答：你的解析器只能去问 ip-api 的权威服务器，它会报告解析器的地址和运营商；如果解析器带上了你的客户端子网（ECS），也会一起报告。检测再把解析器所在国家和你 IP 的国家对比。"],
        ["DNS 泄露怎么修？", "Clash / Mihomo：开启 DNS，并把 enhanced-mode 设为 fake-ip，或者开 TUN 模式让所有查询都经过它。V2Ray / Xray 客户端：让 DNS 也走代理（或者设置一个走代理的 DoH 服务器）。浏览器里打开「安全 DNS」（DoH）也能让查询避开运营商。改完再测一次。"],
        ["解析器显示是 Cloudflare 或 Google，但在另一个城市，算泄露吗？", "一般不算。1.1.1.1、8.8.8.8 这类公共 DNS 会从离请求最近的数据中心回答，所以城市可能和 VPN 出口不一样。真正会暴露你的，是本地运营商的解析器，或者 IP 在国外、解析器却在国内。"],
      ],
    },
    "zh-TW": {
      seo_title: "DNS 洩漏檢測：你的 DNS 有沒有繞過 VPN · 你是誰",
      seo_desc: "免費 DNS 洩漏檢測：找出實際替你解析網域的 DNS 伺服器，看它在哪個國家、屬於哪家電信業者，再和網站看到的 IP 比對。對不上，就是 VPN 或代理漏了 DNS。附 Clash、V2Ray 和瀏覽器裡的修正方法。",
      seo_kw: "DNS 洩漏檢測, DNS 洩漏, VPN DNS 洩漏, 查看我的 DNS 伺服器, DNS 解析器檢測, Clash DNS 洩漏, fake-ip",
      h1: "DNS 洩漏檢測", og_sub: "你的 DNS 有沒有繞過 VPN？",
      intro: "VPN 可能替你轉送了流量，DNS 查詢卻還是送到本地電信業者，等於告訴別人你真正在哪。這個檢測會查詢一個從來沒人查過的網域，再問權威伺服器是誰來查的：也就是你的解析器、它所在的國家和業者，然後和網站看到的 IP 比對。",
      focus_h: "你的 DNS 解析器",
      docs: [
        ["什麼是 DNS 洩漏？", "瀏覽器連上網站之前，要先由 DNS 解析器把網域換成位址。如果這一步沒走 VPN 或代理，查詢就送到你本地電信業者的解析器：業者看得到你造訪的每個網站；網站把解析器和你的 IP 一比對，也看得出你在用 VPN，以及你實際在哪。"],
        ["這個檢測怎麼找到我的解析器？", "頁面會查詢 edns.ip-api.com 底下一個隨機、從沒人查過的網域，所以沒有快取能直接回答：你的解析器只能去問 ip-api 的權威伺服器，它會回報解析器的位址和業者；如果解析器帶上了你的用戶端子網（ECS），也會一起回報。檢測再把解析器所在國家和你 IP 的國家比對。"],
        ["DNS 洩漏怎麼修？", "Clash / Mihomo：開啟 DNS，並把 enhanced-mode 設為 fake-ip，或開 TUN 模式讓所有查詢都經過它。V2Ray / Xray 用戶端：讓 DNS 也走代理（或設定一個走代理的 DoH 伺服器）。瀏覽器裡開啟「安全 DNS」（DoH）也能讓查詢避開業者。改完再測一次。"],
        ["解析器是 Cloudflare 或 Google，但在另一個城市，算洩漏嗎？", "通常不算。1.1.1.1、8.8.8.8 這類公共 DNS 會從離請求最近的資料中心回答，所以城市可能和 VPN 出口不一樣。真正會暴露你的，是本地電信業者的解析器，或者 IP 在國外、解析器卻在本國。"],
      ],
    },
    ja: {
      seo_title: "DNS リークテスト：DNS が VPN を迂回していない？ · あなたは誰",
      seo_desc: "無料の DNS リークテスト：実際にあなたの名前解決をしている DNS リゾルバーを見つけ、国とネットワークを、サイトから見える IP と比べます。食い違えば VPN やプロキシから DNS が漏れています。Clash、V2Ray、ブラウザでの直し方付き。",
      seo_kw: "DNS リーク テスト, DNS 漏れ, VPN DNS リーク, 使っている DNS サーバー 確認, DNS リゾルバー 確認, Clash DNS 漏れ, fake-ip",
      h1: "DNS リークテスト", og_sub: "DNS が VPN を迂回していませんか？",
      intro: "VPN が通信を運んでいても、DNS の問い合わせは手元のプロバイダーに出ているかもしれません。そうなると、ネームサーバーの運営者にあなたの本当の居場所が分かります。このテストは誰も問い合わせたことのない名前を引き、ネームサーバーに誰が問い合わせたかを聞きます。それがあなたのリゾルバーで、その国とネットワークを、サイトから見えるアドレスと比べます。",
      focus_h: "あなたの DNS リゾルバー",
      docs: [
        ["DNS リークとは？", "ブラウザがサイトにつなぐ前に、DNS リゾルバーが名前をアドレスに変えます。この問い合わせが VPN やプロキシを通らないと、手元のプロバイダーのリゾルバーに行きます。プロバイダーには訪れたサイトがすべて見え、リゾルバーと IP を比べるサイトには、VPN を使っていることと本当の居場所が分かります。"],
        ["どうやってリゾルバーを見つける？", "ページは edns.ip-api.com の下の、誰も問い合わせたことのないランダムな名前を引きます。キャッシュでは答えられないので、あなたのリゾルバーは ip-api のネームサーバーに聞くしかなく、ネームサーバーはリゾルバーのアドレスとネットワーク、リゾルバーが付けたクライアントサブネット（ECS）を報告します。テストはリゾルバーの国と IP の国を比べます。"],
        ["DNS リークの直し方は？", "Clash / Mihomo：DNS を有効にして enhanced-mode を fake-ip にするか、TUN モードで全問い合わせを通します。V2Ray / Xray：DNS もプロキシ経由に（プロキシを通る DoH サーバーを設定）。ブラウザの「セキュア DNS」（DoH）でもプロバイダーを避けられます。直したらもう一度テストしてください。"],
        ["リゾルバーが別の都市の Cloudflare や Google。これは漏れ？", "たいてい違います。1.1.1.1 や 8.8.8.8 のような公開 DNS は問い合わせに最も近いデータセンターから答えるので、都市が VPN の出口と違うことがあります。正体がばれるのは、手元のプロバイダーのリゾルバーや、IP は海外なのにリゾルバーが自国にある場合です。"],
      ],
    },
    ko: {
      seo_title: "DNS 유출 테스트: DNS가 VPN을 우회하나 · 당신은 누구",
      seo_desc: "무료 DNS 유출 테스트: 실제로 이름 조회를 해 주는 DNS 리졸버를 찾아 국가와 네트워크를 사이트가 보는 IP와 비교합니다. 다르면 VPN이나 프록시에서 DNS가 새는 것입니다. Clash, V2Ray, 브라우저에서 고치는 방법 포함.",
      seo_kw: "DNS 유출 테스트, DNS 누출, VPN DNS 유출, 내 DNS 서버 확인, DNS 리졸버 확인, Clash DNS 유출, fake-ip",
      h1: "DNS 유출 테스트", og_sub: "DNS가 VPN을 우회하고 있나요?",
      intro: "VPN이 트래픽을 옮겨도 DNS 조회는 여전히 내 통신사로 갈 수 있고, 그러면 네임서버 운영자에게 진짜 위치가 드러납니다. 이 테스트는 아무도 조회한 적 없는 이름을 조회한 뒤 네임서버에 누가 물었는지 묻습니다. 그것이 당신의 리졸버이고, 그 국가와 네트워크를 사이트가 보는 주소와 비교합니다.",
      focus_h: "당신의 DNS 리졸버",
      docs: [
        ["DNS 유출이란?", "브라우저가 사이트에 접속하기 전에 DNS 리졸버가 이름을 주소로 바꿉니다. 이 조회가 VPN이나 프록시를 거치지 않으면 내 통신사의 리졸버로 갑니다. 통신사는 방문하는 모든 사이트를 보게 되고, 리졸버와 IP를 비교하는 사이트는 VPN 사용과 실제 위치를 알아챕니다."],
        ["리졸버를 어떻게 찾나요?", "페이지는 edns.ip-api.com 아래에서 아무도 조회한 적 없는 무작위 이름을 조회합니다. 캐시로는 답할 수 없으니 리졸버가 ip-api의 네임서버에 물어야 하고, 네임서버는 리졸버의 주소와 네트워크, 리졸버가 전달한 클라이언트 서브넷(ECS)을 알려 줍니다. 테스트는 리졸버의 국가와 IP의 국가를 비교합니다."],
        ["DNS 유출은 어떻게 고치나요?", "Clash / Mihomo: DNS를 켜고 enhanced-mode를 fake-ip로 하거나, TUN 모드로 모든 조회를 거치게 합니다. V2Ray / Xray: DNS도 프록시로 보내세요(프록시를 거치는 DoH 서버 설정). 브라우저의 보안 DNS(DoH)도 통신사를 피하게 해 줍니다. 고친 뒤 다시 테스트하세요."],
        ["리졸버가 다른 도시의 Cloudflare나 Google이면 유출인가요?", "대개 아닙니다. 1.1.1.1, 8.8.8.8 같은 공개 DNS는 요청에 가장 가까운 데이터 센터에서 답하므로 도시가 VPN 출구와 다를 수 있습니다. 정체가 드러나는 건 내 통신사의 리졸버이거나, IP는 해외인데 리졸버는 자국에 있는 경우입니다."],
      ],
    },
    es: {
      seo_title: "Test de fuga de DNS: ¿tu DNS se salta la VPN? · ¿Quién eres?",
      seo_desc: "Test gratuito de fuga de DNS: encuentra el resolvedor DNS que de verdad busca los sitios por ti, su país y su red, y compáralo con la IP que ven los sitios. Si no coinciden, tu VPN o proxy filtra el DNS. Con cómo arreglarlo en Clash, V2Ray y el navegador.",
      seo_kw: "test fuga DNS, fuga de DNS, DNS leak test, fuga DNS VPN, qué servidor DNS uso, comprobar resolvedor DNS, Clash fuga DNS, fake-ip",
      h1: "Test de fuga de DNS", og_sub: "¿Tu DNS se salta la VPN?",
      intro: "Tu VPN puede llevar tu tráfico mientras tus consultas DNS siguen yendo a tu proveedor, lo que le dice a quien gestiona los servidores de nombres dónde estás de verdad. Este test hace una consulta que nadie ha hecho antes y pregunta al servidor de nombres quién la hizo: tu resolvedor, su país y su red, comparados con la dirección que ven los sitios.",
      focus_h: "Tu resolvedor DNS",
      docs: [
        ["¿Qué es una fuga de DNS?", "Antes de que el navegador se conecte a un sitio, un resolvedor DNS convierte el nombre en una dirección. Si esa consulta se salta la VPN o el proxy, va al resolvedor de tu proveedor: este ve cada sitio que visitas, y los sitios que comparan tu resolvedor con tu IP notan que usas VPN y dónde estás en realidad."],
        ["¿Cómo encuentra el test mi resolvedor?", "La página consulta un nombre aleatorio bajo edns.ip-api.com que nadie ha pedido antes, así que ninguna caché puede responder: tu resolvedor tiene que preguntar al servidor de nombres de ip-api, que informa de la dirección y la red del resolvedor, y de la subred del cliente si el resolvedor la envía (ECS). El test compara el país del resolvedor con el de tu IP."],
        ["¿Cómo arreglo una fuga de DNS?", "Clash / Mihomo: activa su DNS con enhanced-mode fake-ip o usa el modo TUN para que todas las consultas pasen por él. Clientes V2Ray / Xray: envía el DNS por el proxy (o configura un servidor DoH que pase por él). En el navegador, el DNS seguro (DoH) también aleja las consultas del proveedor. Después, repite el test."],
        ["Mi resolvedor es Cloudflare o Google en otra ciudad. ¿Es una fuga?", "Normalmente no. Los resolvedores públicos como 1.1.1.1 y 8.8.8.8 responden desde el centro de datos más cercano a la consulta, así que la ciudad puede no coincidir con la salida de la VPN. Lo que te delata es un resolvedor de tu proveedor, o uno en tu país cuando tu IP está en el extranjero."],
      ],
    },
    fr: {
      seo_title: "Test de fuite DNS : votre DNS passe-t-il à côté du VPN ? · Qui êtes-vous ?",
      seo_desc: "Test gratuit de fuite DNS : trouvez le serveur DNS qui cherche réellement l’adresse des sites pour vous, son pays et son réseau, et comparez-le à l’IP que voient les sites. S’ils ne correspondent pas, votre VPN ou votre proxy laisse fuir le DNS. Avec les corrections pour Clash, V2Ray et le navigateur.",
      seo_kw: "test fuite DNS, fuite DNS, DNS leak test, fuite DNS VPN, quel serveur DNS j’utilise, vérifier serveur DNS, Clash fuite DNS, fake-ip",
      h1: "Test de fuite DNS", og_sub: "Votre DNS passe-t-il à côté du VPN ?",
      intro: "Votre VPN peut transporter votre trafic alors que vos requêtes DNS partent encore chez votre fournisseur d’accès. Celui qui gère ces serveurs voit alors où vous êtes vraiment. Ce test demande une adresse que personne n’a jamais demandée, puis interroge le serveur qui fait autorité sur ce nom pour savoir qui a posé la question : c’est votre serveur DNS. Vous voyez son pays et son réseau, comparés à l’adresse que voient les sites.",
      focus_h: "Votre serveur DNS",
      docs: [
        ["Qu’est-ce qu’une fuite DNS ?", "Avant de se connecter à un site, le navigateur demande à un serveur DNS de transformer le nom du site en adresse. Si cette demande passe à côté du VPN ou du proxy, elle part chez le serveur DNS de votre fournisseur d’accès : celui-ci voit chaque site que vous visitez. Et un site qui compare votre serveur DNS à votre IP peut voir que vous utilisez un VPN, et où vous êtes réellement."],
        ["Comment le test trouve-t-il mon serveur DNS ?", "La page demande un nom aléatoire sous edns.ip-api.com que personne n’a jamais demandé : aucun cache ne connaît la réponse. Votre serveur DNS doit donc interroger le serveur de noms d’ip-api, qui note l’adresse et le réseau de votre serveur DNS, ainsi que votre sous-réseau si votre serveur DNS le transmet (ECS). Le test compare ensuite le pays du serveur DNS à celui de votre IP."],
        ["Comment corriger une fuite DNS ?", "Clash / Mihomo : activez son DNS avec enhanced-mode en fake-ip, ou passez en mode TUN pour que toutes les requêtes passent par lui. Clients V2Ray / Xray : faites passer le DNS par le proxy (ou configurez un serveur DoH qui passe par lui). Dans le navigateur, le DNS sécurisé (DoH) tient aussi vos requêtes à l’écart du fournisseur d’accès. Puis relancez ce test."],
        ["Mon serveur DNS est Cloudflare ou Google, mais dans une autre ville. Est-ce une fuite ?", "En général, non. Les DNS publics comme 1.1.1.1 et 8.8.8.8 répondent depuis le centre de données le plus proche de la requête : la ville peut donc différer de la sortie du VPN. Ce qui vous trahit, c’est un serveur DNS de votre fournisseur d’accès, ou un serveur DNS situé dans votre pays alors que votre IP est à l’étranger."],
      ],
    },
    de: {
      seo_title: "DNS-Leak-Test: Umgeht dein DNS das VPN? · Wer bist du?",
      seo_desc: "Kostenloser DNS-Leak-Test: Finde den DNS-Server, der die Adressen von Websites wirklich für dich nachschlägt, mit Land und Netz, und vergleiche ihn mit der IP, die Websites sehen. Passen sie nicht zusammen, leckt dein VPN oder Proxy DNS. Mit Lösungen für Clash, V2Ray und den Browser.",
      seo_kw: "DNS Leak Test, DNS-Leck, VPN DNS Leak, welchen DNS-Server nutze ich, DNS-Server prüfen, Clash DNS Leak, fake-ip",
      h1: "DNS-Leak-Test", og_sub: "Umgeht dein DNS das VPN?",
      intro: "Dein VPN leitet vielleicht deinen Verkehr um, während deine DNS-Anfragen weiter bei deinem Provider landen. Wer diese Server betreibt, sieht dann, wo du wirklich bist. Dieser Test fragt nach einem Namen, nach dem noch nie jemand gefragt hat, und erkundigt sich dann beim zuständigen Nameserver, wer gefragt hat: Das ist dein DNS-Server. Du siehst sein Land und Netz, verglichen mit der Adresse, die Websites sehen.",
      focus_h: "Dein DNS-Server",
      docs: [
        ["Was ist ein DNS-Leck?", "Bevor der Browser eine Website aufruft, übersetzt ein DNS-Server den Namen in eine Adresse. Läuft diese Anfrage am VPN oder Proxy vorbei, landet sie beim DNS-Server deines Providers: Er sieht jede Website, die du besuchst. Und Websites, die deinen DNS-Server mit deiner IP vergleichen, erkennen das VPN und deinen tatsächlichen Standort."],
        ["Wie findet der Test meinen DNS-Server?", "Die Seite fragt nach einem zufälligen Namen unter edns.ip-api.com, nach dem noch nie jemand gefragt hat; kein Cache kennt die Antwort. Dein DNS-Server muss also den Nameserver von ip-api fragen, und der meldet Adresse und Netz deines DNS-Servers, dazu dein Subnetz, falls dein DNS-Server es mitschickt (ECS). Der Test vergleicht dann das Land des DNS-Servers mit dem deiner IP."],
        ["Wie behebe ich ein DNS-Leck?", "Clash / Mihomo: DNS mit enhanced-mode fake-ip einschalten oder den TUN-Modus nutzen, damit alle Anfragen durch ihn laufen. V2Ray / Xray: DNS ebenfalls über den Proxy schicken (oder einen DoH-Server eintragen, der über ihn läuft). Im Browser hält sicheres DNS (DoH) die Anfragen ebenfalls von deinem Provider fern. Danach den Test wiederholen."],
        ["Mein DNS-Server ist Cloudflare oder Google in einer anderen Stadt. Ist das ein Leck?", "Meist nicht. Öffentliche DNS-Server wie 1.1.1.1 und 8.8.8.8 antworten aus dem Rechenzentrum, das der Anfrage am nächsten ist; die Stadt kann also vom VPN-Ausgang abweichen. Verräterisch ist ein DNS-Server deines eigenen Providers oder einer in deinem Heimatland, während deine IP im Ausland liegt."],
      ],
    },
    pt: {
      seo_title: "Teste de vazamento de DNS: seu DNS escapa da VPN? · Quem é você?",
      seo_desc: "Teste gratuito de vazamento de DNS: encontre o resolvedor de DNS que de fato consulta os sites para você, seu país e sua rede, e compare com o IP que os sites veem. Se não batem, sua VPN ou proxy vaza DNS. Com como corrigir no Clash, V2Ray e no navegador.",
      seo_kw: "teste vazamento DNS, vazamento de DNS, DNS leak test, vazamento DNS VPN, qual servidor DNS uso, verificar resolvedor DNS, Clash vazamento DNS, fake-ip",
      h1: "Teste de vazamento de DNS", og_sub: "Seu DNS escapa da VPN?",
      intro: "Sua VPN pode levar seu tráfego enquanto as consultas DNS continuam indo para o seu provedor, o que conta a quem opera os servidores de nomes onde você realmente está. Este teste faz uma consulta que ninguém fez antes e pergunta ao servidor de nomes quem a fez: seu resolvedor, o país e a rede dele, comparados com o endereço que os sites veem.",
      focus_h: "Seu resolvedor de DNS",
      docs: [
        ["O que é vazamento de DNS?", "Antes de o navegador se conectar a um site, um resolvedor de DNS transforma o nome em endereço. Se essa consulta escapa da VPN ou do proxy, ela vai para o resolvedor do seu provedor: ele vê cada site que você visita, e sites que comparam o resolvedor com o seu IP percebem a VPN e onde você realmente está."],
        ["Como o teste encontra meu resolvedor?", "A página consulta um nome aleatório em edns.ip-api.com que ninguém pediu antes, então nenhum cache responde: seu resolvedor precisa perguntar ao servidor de nomes da ip-api, que informa o endereço e a rede do resolvedor, e a sub-rede do cliente se o resolvedor a repassar (ECS). O teste compara o país do resolvedor com o do seu IP."],
        ["Como corrijo um vazamento de DNS?", "Clash / Mihomo: ligue o DNS com enhanced-mode fake-ip ou use o modo TUN para que todas as consultas passem por ele. Clientes V2Ray / Xray: mande o DNS pelo proxy (ou configure um servidor DoH que passe por ele). No navegador, o DNS seguro (DoH) também afasta as consultas do provedor. Depois, teste de novo."],
        ["Meu resolvedor é Cloudflare ou Google em outra cidade. É vazamento?", "Normalmente não. Resolvedores públicos como 1.1.1.1 e 8.8.8.8 respondem do data center mais próximo da consulta, então a cidade pode não bater com a saída da VPN. O que entrega você é um resolvedor do seu provedor, ou um no seu país enquanto seu IP está no exterior."],
      ],
    },
    ru: {
      seo_title: "Проверка утечки DNS: не идёт ли ваш DNS в обход VPN? · Кто вы?",
      seo_desc: "Бесплатная проверка утечки DNS: узнайте, какой DNS-сервер на самом деле ищет для вас адреса сайтов, в какой он стране и сети, и сравните его с IP, который видят сайты. Если они не совпадают, ваш VPN или прокси пропускает DNS мимо себя. С инструкциями для Clash, V2Ray и браузера.",
      seo_kw: "проверка утечки DNS, утечка DNS, DNS leak test, утечка DNS VPN, какой DNS сервер я использую, проверить DNS сервер, Clash утечка DNS, fake-ip",
      h1: "Проверка утечки DNS", og_sub: "Не идёт ли ваш DNS в обход VPN?",
      intro: "VPN может пропускать через себя весь ваш трафик, а DNS-запросы при этом по-прежнему уходят к провайдеру. Тот, кто держит эти серверы, видит, где вы на самом деле. Этот тест запрашивает имя, которое ещё никто не запрашивал, и спрашивает у ответственного за него сервера имён, кто прислал запрос. Это и есть ваш DNS-сервер: вы увидите его страну и сеть рядом с адресом, который видят сайты.",
      focus_h: "Ваш DNS-сервер",
      docs: [
        ["Что такое утечка DNS?", "Прежде чем открыть сайт, браузер просит DNS-сервер превратить имя сайта в адрес. Если этот запрос идёт мимо VPN или прокси, он попадает на DNS-сервер провайдера: тот видит каждый сайт, который вы открываете. А сайты, которые сравнивают ваш DNS-сервер с вашим IP, понимают, что вы через VPN, и где вы на самом деле."],
        ["Как тест находит мой DNS-сервер?", "Страница запрашивает случайное имя в зоне edns.ip-api.com, которое никто раньше не запрашивал, поэтому ни в одном кэше ответа нет. Вашему DNS-серверу приходится спросить сервер имён ip-api, а тот записывает адрес и сеть вашего DNS-сервера, а также вашу подсеть, если DNS-сервер её передаёт (ECS). Затем тест сравнивает страну DNS-сервера со страной вашего IP."],
        ["Как устранить утечку DNS?", "Clash / Mihomo: включите DNS с enhanced-mode fake-ip или режим TUN, чтобы все запросы шли через него. Клиенты V2Ray / Xray: пустите DNS через прокси (или укажите DoH-сервер, который ходит через него). В браузере безопасный DNS (DoH) тоже уводит запросы от провайдера. Потом пройдите тест ещё раз."],
        ["Мой DNS-сервер — Cloudflare или Google, но в другом городе. Это утечка?", "Обычно нет. Публичные DNS вроде 1.1.1.1 и 8.8.8.8 отвечают из ближайшего к запросу дата-центра, поэтому город может не совпадать с выходом VPN. Выдаёт вас DNS-сервер вашего провайдера или DNS-сервер в вашей стране, когда IP — за границей."],
      ],
    },
  },
  "webrtc-leak": {
    "en": {
      "seo_title": "WebRTC Leak Test: does WebRTC show your real IP? · Who Are You",
      "seo_desc": "Free WebRTC leak test: the public IPv4 and IPv6 addresses and the local addresses WebRTC hands to any site, compared with the IP your VPN or proxy shows. If they differ, WebRTC leaks your real IP. With how to fix it in Chrome, Firefox, Brave and proxy clients.",
      "seo_kw": "WebRTC leak test, WebRTC leak, WebRTC IP leak, VPN WebRTC leak, check WebRTC, STUN IP leak, local IP leak, disable WebRTC",
      "h1": "WebRTC leak test",
      "og_sub": "Does WebRTC show your real IP?",
      "intro": "Video calls in the browser use WebRTC, and any page can start it without asking. It asks a STUN server which address you came from, over UDP, which many VPNs and proxies don't carry. Here are the addresses WebRTC gives away, compared with the address sites see.",
      "focus_h": "Your WebRTC addresses",
      "docs": [
        [
          "What is a WebRTC leak?",
          "To set up a call, WebRTC collects every address it could be reached at: the local ones on your network card, and the public one a STUN server sees. A page reads them with a few lines of script, no permission needed. If your VPN or proxy carries only the page's web requests, the STUN request goes out on your own line, and the page learns your real IP behind the VPN."
        ],
        [
          "How does this test work?",
          "The page opens a WebRTC connection to the STUN servers of Cloudflare and Google and lists the addresses they report (\"server reflexive\" candidates), then compares them with the address this site, your other exits and the IPv6 test see. An address that none of them show is a leak. The local addresses come from the \"host\" candidates; nothing is stored or sent anywhere."
        ],
        [
          "How do I fix a WebRTC leak?",
          "Proxy clients (Clash, V2Ray and others): turn on TUN mode so UDP goes through the proxy too. Chrome and Edge: the WebRTC Network Limiter extension, or uBlock Origin's \"Prevent WebRTC from leaking local IP addresses\". Brave: Settings → Privacy → WebRTC IP handling policy → Disable non-proxied UDP. Firefox: set media.peerconnection.ice.default_address_only to true in about:config, or media.peerconnection.enabled to false to turn WebRTC off. Then run this test again."
        ],
        [
          "Is a local address or a .local name a leak?",
          "A name ending in .local is the browser hiding your local address (mDNS), which is what you want. A real local address such as 192.168.1.5 doesn't reveal where you are, but it makes your fingerprint more unique. An IPv6 address that differs from your IPv4 exit is a leak only if it isn't your IPv6 exit: the test checks it against the IPv6 address sites see."
        ]
      ]
    },
    "zh-CN": {
      "seo_title": "WebRTC 泄漏检测：WebRTC 会不会暴露你的真实 IP · 你是谁",
      "seo_desc": "免费 WebRTC 泄漏检测：列出 WebRTC 交给任何网站的公网 IPv4、IPv6 和局域网地址，和 VPN 或代理显示的 IP 对比。对不上，就是 WebRTC 泄露了真实 IP。附 Chrome、Firefox、Brave 和代理客户端的修复方法。",
      "seo_kw": "WebRTC 泄漏检测, WebRTC 泄露检测, WebRTC 泄露, WebRTC IP 泄露, VPN WebRTC 泄漏, WebRTC 检测, 真实 IP 泄露, 关闭 WebRTC, WebRTC leak test",
      "h1": "WebRTC 泄漏检测",
      "og_sub": "WebRTC 会不会暴露你的真实 IP？",
      "intro": "浏览器里的视频通话靠 WebRTC，任何网页都能直接启动它，不用你同意。它会通过 UDP 问 STUN 服务器你从哪个地址来，而很多 VPN 和代理不转发 UDP。下面是 WebRTC 暴露的地址，和网站看到的地址对比。",
      "focus_h": "你的 WebRTC 地址",
      "docs": [
        [
          "什么是 WebRTC 泄漏？",
          "为了建立通话，WebRTC 会收集所有能联系到你的地址：网卡上的局域网地址，以及 STUN 服务器看到的公网地址。网页几行脚本就能读到，不需要任何权限。如果 VPN 或代理只转发网页请求，STUN 请求就会走你自己的线路，网页就能拿到 VPN 背后的真实 IP。"
        ],
        [
          "这个检测怎么做的？",
          "页面向 Cloudflare 和 Google 的 STUN 服务器发起 WebRTC 连接，列出它们报告的地址（srflx 候选），再和本站、你的其他出口以及 IPv6 测试看到的地址比较。哪个都对不上的地址，就是泄漏。局域网地址来自 host 候选。所有数据不存储、不上传。"
        ],
        [
          "WebRTC 泄漏怎么修？",
          "代理客户端（Clash、V2Ray 等）：打开 TUN 模式，让 UDP 也走代理。Chrome 和 Edge：装 WebRTC Network Limiter 扩展，或在 uBlock Origin 里勾选「防止 WebRTC 泄露本地 IP 地址」。Brave：设置 → 隐私 → WebRTC IP 处理策略 → 禁用非代理 UDP。Firefox：在 about:config 把 media.peerconnection.ice.default_address_only 设为 true，或把 media.peerconnection.enabled 设为 false 彻底关闭。改完再测一次。"
        ],
        [
          "局域网地址或 .local 名字算泄漏吗？",
          "以 .local 结尾的名字是浏览器把局域网地址藏起来了（mDNS），这正是你想要的。真实的局域网地址（比如 192.168.1.5）不会暴露你在哪，但会让你的指纹更独特。和 IPv4 出口不同的 IPv6 地址，只有不是你的 IPv6 出口时才算泄漏：检测会拿它和网站看到的 IPv6 地址比对。"
        ]
      ]
    },
    "zh-TW": {
      "seo_title": "WebRTC 洩漏檢測：WebRTC 會不會暴露你的真實 IP · 你是誰",
      "seo_desc": "免費 WebRTC 洩漏檢測：列出 WebRTC 交給任何網站的公網 IPv4、IPv6 和區域網路位址，與 VPN 或代理顯示的 IP 比對。對不上，就是 WebRTC 洩漏了真實 IP。附 Chrome、Firefox、Brave 和代理用戶端的修復方法。",
      "seo_kw": "WebRTC 洩漏檢測, WebRTC 洩露, WebRTC IP 洩漏, VPN WebRTC 洩漏, WebRTC 檢測, 真實 IP 洩漏, 關閉 WebRTC, WebRTC leak test",
      "h1": "WebRTC 洩漏檢測",
      "og_sub": "WebRTC 會不會暴露你的真實 IP？",
      "intro": "瀏覽器裡的視訊通話靠 WebRTC，任何網頁都能直接啟動它，不必經過你同意。它會透過 UDP 問 STUN 伺服器你從哪個位址來，而很多 VPN 和代理不轉送 UDP。下面是 WebRTC 暴露的位址，與網站看到的位址比對。",
      "focus_h": "你的 WebRTC 位址",
      "docs": [
        [
          "什麼是 WebRTC 洩漏？",
          "為了建立通話，WebRTC 會收集所有能聯絡到你的位址：網卡上的區域網路位址，以及 STUN 伺服器看到的公網位址。網頁幾行程式就能讀到，不需要任何權限。如果 VPN 或代理只轉送網頁請求，STUN 請求就會走你自己的線路，網頁就能拿到 VPN 背後的真實 IP。"
        ],
        [
          "這個檢測怎麼做的？",
          "頁面向 Cloudflare 和 Google 的 STUN 伺服器發起 WebRTC 連線，列出它們回報的位址（srflx 候選），再與本站、你的其他出口以及 IPv6 測試看到的位址比較。哪個都對不上的位址，就是洩漏。區域網路位址來自 host 候選。所有資料不儲存、不上傳。"
        ],
        [
          "WebRTC 洩漏怎麼修？",
          "代理用戶端（Clash、V2Ray 等）：開啟 TUN 模式，讓 UDP 也走代理。Chrome 和 Edge：安裝 WebRTC Network Limiter 擴充功能，或在 uBlock Origin 勾選「防止 WebRTC 洩漏本機 IP 位址」。Brave：設定 → 隱私 → WebRTC IP 處理政策 → 停用非代理 UDP。Firefox：在 about:config 把 media.peerconnection.ice.default_address_only 設為 true，或把 media.peerconnection.enabled 設為 false 完全關閉。改完再測一次。"
        ],
        [
          "區域網路位址或 .local 名稱算洩漏嗎？",
          "以 .local 結尾的名稱是瀏覽器把區域網路位址藏起來了（mDNS），這正是你要的。真實的區域網路位址（例如 192.168.1.5）不會暴露你在哪，但會讓你的指紋更獨特。與 IPv4 出口不同的 IPv6 位址，只有不是你的 IPv6 出口時才算洩漏：檢測會拿它和網站看到的 IPv6 位址比對。"
        ]
      ]
    },
    "ja": {
      "seo_title": "WebRTC リークテスト：WebRTC で本当の IP が見えていないか · あなたは誰",
      "seo_desc": "無料の WebRTC リークテスト：WebRTC がどのサイトにも渡す公開 IPv4・IPv6 アドレスとローカルアドレスを一覧にし、VPN やプロキシが示す IP と比べます。違えば WebRTC から本当の IP が漏れています。Chrome、Firefox、Brave、プロキシクライアントでの対策つき。",
      "seo_kw": "WebRTC リークテスト, WebRTC リーク, WebRTC IP 漏れ, VPN WebRTC リーク, WebRTC チェック, ローカル IP 漏洩, WebRTC 無効化, WebRTC leak test",
      "h1": "WebRTC リークテスト",
      "og_sub": "WebRTC で本当の IP が見えていないか",
      "intro": "ブラウザのビデオ通話は WebRTC を使い、どのページも許可なしに起動できます。WebRTC は UDP で STUN サーバーにどのアドレスから来たかを尋ねますが、UDP を通さない VPN やプロキシは少なくありません。WebRTC が明かすアドレスを、サイトから見えるアドレスと比べます。",
      "focus_h": "あなたの WebRTC アドレス",
      "docs": [
        [
          "WebRTC リークとは？",
          "通話をつなぐため、WebRTC は連絡に使えるアドレスをすべて集めます。ネットワークカードのローカルアドレスと、STUN サーバーから見た公開アドレスです。ページは数行のスクリプトで、許可なしにそれを読めます。VPN やプロキシがページの通信しか運ばないと、STUN の問い合わせは自分の回線から出て、VPN の裏の本当の IP がページに知られます。"
        ],
        [
          "このテストの仕組みは？",
          "ページは Cloudflare と Google の STUN サーバーに WebRTC 接続を開き、返ってきたアドレス（srflx 候補）を一覧にして、このサイト、ほかの出口、IPv6 テストから見えるアドレスと比べます。どれとも一致しないアドレスがリークです。ローカルアドレスは host 候補から取ります。何も保存・送信しません。"
        ],
        [
          "WebRTC リークの直し方は？",
          "プロキシクライアント（Clash、V2Ray など）：TUN モードをオンにして UDP もプロキシに通します。Chrome と Edge：拡張機能 WebRTC Network Limiter か、uBlock Origin の「WebRTC によるローカル IP アドレスの漏洩を防ぐ」。Brave：設定 → プライバシー → WebRTC IP 処理ポリシー → プロキシ経由でない UDP を無効にする。Firefox：about:config で media.peerconnection.ice.default_address_only を true に、完全に止めるなら media.peerconnection.enabled を false に。変更後にもう一度テストしてください。"
        ],
        [
          "ローカルアドレスや .local の名前はリーク？",
          ".local で終わる名前は、ブラウザがローカルアドレスを隠している（mDNS）印で、望ましい状態です。192.168.1.5 のような本物のローカルアドレスは居場所を明かしませんが、フィンガープリントをより一意にします。IPv4 の出口と違う IPv6 アドレスは、それが自分の IPv6 出口でない場合だけリークです。テストはサイトから見える IPv6 アドレスと照合します。"
        ]
      ]
    },
    "ko": {
      "seo_title": "WebRTC 유출 테스트: WebRTC가 실제 IP를 드러내나요? · 당신은 누구",
      "seo_desc": "무료 WebRTC 유출 테스트: WebRTC가 아무 사이트에나 넘겨주는 공인 IPv4·IPv6 주소와 로컬 주소를 보여 주고, VPN이나 프록시가 보여 주는 IP와 비교합니다. 다르면 WebRTC가 실제 IP를 유출하는 것입니다. Chrome, Firefox, Brave, 프록시 클라이언트에서 고치는 법도 함께.",
      "seo_kw": "WebRTC 유출 테스트, WebRTC 누출, WebRTC IP 유출, VPN WebRTC 유출, WebRTC 확인, 로컬 IP 유출, WebRTC 끄기, WebRTC leak test",
      "h1": "WebRTC 유출 테스트",
      "og_sub": "WebRTC가 실제 IP를 드러내나요?",
      "intro": "브라우저의 영상 통화는 WebRTC를 쓰고, 어떤 페이지든 묻지 않고 실행할 수 있습니다. WebRTC는 UDP로 STUN 서버에 어느 주소에서 왔는지 묻는데, UDP를 전달하지 않는 VPN과 프록시가 많습니다. WebRTC가 드러내는 주소를 사이트가 보는 주소와 비교합니다.",
      "focus_h": "내 WebRTC 주소",
      "docs": [
        [
          "WebRTC 유출이란?",
          "통화를 연결하려고 WebRTC는 연락 가능한 모든 주소를 모읍니다. 네트워크 카드의 로컬 주소와 STUN 서버가 본 공인 주소입니다. 페이지는 스크립트 몇 줄로 권한 없이 이를 읽습니다. VPN이나 프록시가 페이지 요청만 전달하면 STUN 요청은 내 회선으로 나가고, 페이지는 VPN 뒤의 실제 IP를 알게 됩니다."
        ],
        [
          "이 테스트는 어떻게 작동하나요?",
          "페이지는 Cloudflare와 Google의 STUN 서버에 WebRTC 연결을 열고, 돌려받은 주소(srflx 후보)를 이 사이트, 다른 출구, IPv6 테스트가 보는 주소와 비교합니다. 어느 것과도 맞지 않는 주소가 유출입니다. 로컬 주소는 host 후보에서 옵니다. 아무것도 저장하거나 보내지 않습니다."
        ],
        [
          "WebRTC 유출은 어떻게 막나요?",
          "프록시 클라이언트(Clash, V2Ray 등): TUN 모드를 켜서 UDP도 프록시로 보냅니다. Chrome과 Edge: WebRTC Network Limiter 확장 프로그램, 또는 uBlock Origin의 \"WebRTC가 로컬 IP 주소를 유출하지 않도록 방지\". Brave: 설정 → 개인정보 보호 → WebRTC IP 처리 정책 → 프록시되지 않은 UDP 사용 중지. Firefox: about:config에서 media.peerconnection.ice.default_address_only를 true로, 완전히 끄려면 media.peerconnection.enabled를 false로. 바꾼 뒤 다시 테스트하세요."
        ],
        [
          "로컬 주소나 .local 이름도 유출인가요?",
          ".local로 끝나는 이름은 브라우저가 로컬 주소를 숨긴 것(mDNS)으로, 바람직한 상태입니다. 192.168.1.5 같은 실제 로컬 주소는 위치를 드러내지 않지만 지문을 더 고유하게 만듭니다. IPv4 출구와 다른 IPv6 주소는 그것이 내 IPv6 출구가 아닐 때만 유출입니다. 테스트는 사이트가 보는 IPv6 주소와 대조합니다."
        ]
      ]
    },
    "es": {
      "seo_title": "Test de fuga WebRTC: ¿WebRTC muestra tu IP real? · ¿Quién eres?",
      "seo_desc": "Test de fuga WebRTC gratis: las direcciones IPv4 e IPv6 públicas y las locales que WebRTC entrega a cualquier sitio, comparadas con la IP que muestra tu VPN o proxy. Si no coinciden, WebRTC filtra tu IP real. Con cómo arreglarlo en Chrome, Firefox, Brave y clientes proxy.",
      "seo_kw": "test de fuga WebRTC, fuga WebRTC, WebRTC leak test, fuga de IP WebRTC, VPN fuga WebRTC, comprobar WebRTC, fuga de IP local, desactivar WebRTC",
      "h1": "Test de fuga WebRTC",
      "og_sub": "¿WebRTC muestra tu IP real?",
      "intro": "Las videollamadas en el navegador usan WebRTC, y cualquier página puede iniciarlo sin pedir permiso. Pregunta a un servidor STUN, por UDP, desde qué dirección llegas, y muchas VPN y proxies no llevan UDP. Aquí están las direcciones que WebRTC revela, comparadas con la que ven los sitios.",
      "focus_h": "Tus direcciones WebRTC",
      "docs": [
        [
          "¿Qué es una fuga WebRTC?",
          "Para establecer una llamada, WebRTC reúne todas las direcciones en las que se te puede alcanzar: las locales de tu tarjeta de red y la pública que ve un servidor STUN. Una página las lee con unas líneas de script, sin permiso. Si tu VPN o proxy solo lleva las peticiones web de la página, la consulta STUN sale por tu propia línea y la página conoce tu IP real tras la VPN."
        ],
        [
          "¿Cómo funciona este test?",
          "La página abre una conexión WebRTC con los servidores STUN de Cloudflare y Google, lista las direcciones que devuelven (candidatos srflx) y las compara con la que ven este sitio, tus otras salidas y el test de IPv6. Una dirección que ninguno muestra es una fuga. Las direcciones locales salen de los candidatos host; no se guarda ni se envía nada."
        ],
        [
          "¿Cómo arreglo una fuga WebRTC?",
          "Clientes proxy (Clash, V2Ray y otros): activa el modo TUN para que el UDP también pase por el proxy. Chrome y Edge: la extensión WebRTC Network Limiter, o en uBlock Origin «Evitar que WebRTC filtre direcciones IP locales». Brave: Configuración → Privacidad → Política de gestión de IP de WebRTC → Desactivar UDP sin proxy. Firefox: en about:config pon media.peerconnection.ice.default_address_only en true, o media.peerconnection.enabled en false para apagar WebRTC. Luego repite el test."
        ],
        [
          "¿Una dirección local o un nombre .local es una fuga?",
          "Un nombre terminado en .local es el navegador ocultando tu dirección local (mDNS), justo lo que quieres. Una dirección local real como 192.168.1.5 no revela dónde estás, pero hace tu huella más única. Una IPv6 distinta de tu salida IPv4 solo es una fuga si no es tu salida IPv6: el test la compara con la IPv6 que ven los sitios."
        ]
      ]
    },
    "fr": {
      "seo_title": "Test de fuite WebRTC : WebRTC révèle-t-il votre vraie IP ? · Qui êtes-vous ?",
      "seo_desc": "Test gratuit de fuite WebRTC : les adresses IPv4 et IPv6 publiques et les adresses locales que WebRTC donne à n’importe quel site, comparées à l’IP qu’affiche votre VPN ou votre proxy. Si elles diffèrent, WebRTC laisse fuir votre vraie IP. Avec les corrections pour Chrome, Firefox, Brave et les clients proxy.",
      "seo_kw": "test fuite WebRTC, fuite WebRTC, fuite IP WebRTC, WebRTC leak test, fuite WebRTC VPN, vérifier WebRTC, désactiver WebRTC, fuite IP locale",
      "h1": "Test de fuite WebRTC",
      "og_sub": "WebRTC révèle-t-il votre vraie IP ?",
      "intro": "Les appels vidéo dans le navigateur passent par WebRTC, et n’importe quelle page peut le lancer sans vous demander votre avis. WebRTC demande à un serveur STUN depuis quelle adresse vous arrivez, en UDP, un trafic que beaucoup de VPN et de proxys ne transportent pas. Voici les adresses que WebRTC laisse voir, comparées à celle que voient les sites.",
      "focus_h": "Vos adresses WebRTC",
      "docs": [
        [
          "Qu’est-ce qu’une fuite WebRTC ?",
          "Pour établir un appel, WebRTC rassemble toutes les adresses où l’on pourrait vous joindre : les adresses locales de votre carte réseau, et l’adresse publique que voit un serveur STUN. Une page les lit en quelques lignes de script, sans autorisation. Si votre VPN ou votre proxy ne transporte que les requêtes web de la page, la requête STUN sort par votre propre connexion, et la page découvre votre vraie IP derrière le VPN."
        ],
        [
          "Comment fonctionne ce test ?",
          "La page ouvre une connexion WebRTC vers les serveurs STUN de Cloudflare et de Google et liste les adresses qu’ils renvoient (candidats « server reflexive »). Elle les compare ensuite à l’adresse que voient ce site, vos autres sorties et le test IPv6. Une adresse qu’aucun d’eux ne voit est une fuite. Les adresses locales viennent des candidats « host » ; rien n’est enregistré ni envoyé ailleurs."
        ],
        [
          "Comment corriger une fuite WebRTC ?",
          "Clients proxy (Clash, V2Ray, etc.) : activez le mode TUN pour que l’UDP passe aussi par le proxy. Chrome et Edge : l’extension WebRTC Network Limiter, ou l’option « Prevent WebRTC from leaking local IP addresses » d’uBlock Origin. Brave : Paramètres → Confidentialité → Règle de traitement des IP WebRTC → Désactiver l’UDP sans proxy. Firefox : dans about:config, passez media.peerconnection.ice.default_address_only à true, ou media.peerconnection.enabled à false pour couper WebRTC. Puis relancez ce test."
        ],
        [
          "Une adresse locale ou un nom en .local, est-ce une fuite ?",
          "Un nom qui finit par .local, c’est le navigateur qui cache votre adresse locale (mDNS) : c’est ce qu’il faut. Une vraie adresse locale comme 192.168.1.5 ne dit pas où vous êtes, mais elle rend votre empreinte plus unique. Une adresse IPv6 différente de votre sortie IPv4 n’est une fuite que si ce n’est pas votre sortie IPv6 : le test la compare à l’adresse IPv6 que voient les sites."
        ]
      ]
    },
    "de": {
      "seo_title": "WebRTC-Leak-Test: Zeigt WebRTC deine echte IP? · Wer bist du?",
      "seo_desc": "Kostenloser WebRTC-Leak-Test: die öffentlichen IPv4- und IPv6-Adressen und die lokalen Adressen, die WebRTC jeder Website verrät, verglichen mit der IP, die dein VPN oder Proxy zeigt. Weichen sie ab, verrät WebRTC deine echte IP. Mit Lösungen für Chrome, Firefox, Brave und Proxy-Clients.",
      "seo_kw": "WebRTC Leak Test, WebRTC-Leck, WebRTC IP Leak, VPN WebRTC Leak, WebRTC prüfen, STUN IP Leak, lokale IP Leak, WebRTC deaktivieren",
      "h1": "WebRTC-Leak-Test",
      "og_sub": "Zeigt WebRTC deine echte IP?",
      "intro": "Videoanrufe im Browser laufen über WebRTC, und jede Seite kann es starten, ohne zu fragen. WebRTC fragt einen STUN-Server, von welcher Adresse du kommst, und zwar über UDP, das viele VPNs und Proxys nicht weiterleiten. Hier siehst du die Adressen, die WebRTC preisgibt, verglichen mit der Adresse, die Websites sehen.",
      "focus_h": "Deine WebRTC-Adressen",
      "docs": [
        [
          "Was ist ein WebRTC-Leck?",
          "Um einen Anruf aufzubauen, sammelt WebRTC jede Adresse, unter der du erreichbar sein könntest: die lokalen deiner Netzwerkkarte und die öffentliche, die ein STUN-Server sieht. Eine Seite liest sie mit ein paar Zeilen Skript, ganz ohne Berechtigung. Leitet dein VPN oder Proxy nur die Webanfragen der Seite weiter, geht die STUN-Anfrage über deine eigene Leitung raus, und die Seite erfährt deine echte IP hinter dem VPN."
        ],
        [
          "Wie funktioniert dieser Test?",
          "Die Seite baut eine WebRTC-Verbindung zu den STUN-Servern von Cloudflare und Google auf und listet die Adressen, die sie melden („server reflexive“-Kandidaten). Dann vergleicht sie sie mit der Adresse, die diese Website, deine anderen Ausgänge und der IPv6-Test sehen. Eine Adresse, die keiner davon zeigt, ist ein Leck. Die lokalen Adressen stammen aus den „host“-Kandidaten; nichts wird gespeichert oder irgendwohin geschickt."
        ],
        [
          "Wie behebe ich ein WebRTC-Leck?",
          "Proxy-Clients (Clash, V2Ray und andere): TUN-Modus einschalten, damit auch UDP über den Proxy läuft. Chrome und Edge: die Erweiterung WebRTC Network Limiter oder in uBlock Origin „Prevent WebRTC from leaking local IP addresses“. Brave: Einstellungen → Datenschutz → WebRTC-IP-Verarbeitungsrichtlinie → Nicht über Proxy geleitetes UDP deaktivieren. Firefox: in about:config media.peerconnection.ice.default_address_only auf true setzen, oder media.peerconnection.enabled auf false, um WebRTC ganz abzuschalten. Danach den Test wiederholen."
        ],
        [
          "Ist eine lokale Adresse oder ein .local-Name ein Leck?",
          "Ein Name, der auf .local endet, bedeutet: Der Browser versteckt deine lokale Adresse (mDNS). Genau das willst du. Eine echte lokale Adresse wie 192.168.1.5 verrät nicht, wo du bist, macht deinen Fingerabdruck aber einmaliger. Eine IPv6-Adresse, die von deinem IPv4-Ausgang abweicht, ist nur dann ein Leck, wenn sie nicht dein IPv6-Ausgang ist: Der Test vergleicht sie mit der IPv6-Adresse, die Websites sehen."
        ]
      ]
    },
    "pt": {
      "seo_title": "Teste de vazamento WebRTC: o WebRTC mostra seu IP real? · Quem é você?",
      "seo_desc": "Teste de vazamento WebRTC grátis: os endereços IPv4 e IPv6 públicos e os locais que o WebRTC entrega a qualquer site, comparados com o IP que sua VPN ou proxy mostra. Se forem diferentes, o WebRTC vaza seu IP real. Com como corrigir no Chrome, Firefox, Brave e clientes proxy.",
      "seo_kw": "teste de vazamento WebRTC, vazamento WebRTC, WebRTC leak test, vazamento de IP WebRTC, VPN vazamento WebRTC, verificar WebRTC, vazamento de IP local, desativar WebRTC",
      "h1": "Teste de vazamento WebRTC",
      "og_sub": "O WebRTC mostra seu IP real?",
      "intro": "Chamadas de vídeo no navegador usam WebRTC, e qualquer página pode iniciá-lo sem pedir. Ele pergunta a um servidor STUN, por UDP, de qual endereço você vem, e muitas VPNs e proxies não transportam UDP. Aqui estão os endereços que o WebRTC revela, comparados com o que os sites veem.",
      "focus_h": "Seus endereços WebRTC",
      "docs": [
        [
          "O que é um vazamento WebRTC?",
          "Para montar uma chamada, o WebRTC reúne todos os endereços em que você pode ser alcançado: os locais da sua placa de rede e o público que um servidor STUN vê. Uma página os lê com poucas linhas de script, sem permissão. Se sua VPN ou proxy só leva as requisições web da página, a consulta STUN sai pela sua própria linha e a página descobre seu IP real por trás da VPN."
        ],
        [
          "Como este teste funciona?",
          "A página abre uma conexão WebRTC com os servidores STUN da Cloudflare e do Google, lista os endereços que eles devolvem (candidatos srflx) e os compara com o que este site, suas outras saídas e o teste de IPv6 veem. Um endereço que nenhum deles mostra é um vazamento. Os endereços locais vêm dos candidatos host; nada é guardado nem enviado."
        ],
        [
          "Como corrijo um vazamento WebRTC?",
          "Clientes proxy (Clash, V2Ray e outros): ative o modo TUN para que o UDP também passe pelo proxy. Chrome e Edge: a extensão WebRTC Network Limiter, ou no uBlock Origin \"Impedir que o WebRTC vaze endereços IP locais\". Brave: Configurações → Privacidade → Política de tratamento de IP do WebRTC → Desativar UDP sem proxy. Firefox: em about:config, defina media.peerconnection.ice.default_address_only como true, ou media.peerconnection.enabled como false para desligar o WebRTC. Depois, teste de novo."
        ],
        [
          "Um endereço local ou um nome .local é vazamento?",
          "Um nome terminado em .local é o navegador escondendo seu endereço local (mDNS), que é o que você quer. Um endereço local real como 192.168.1.5 não revela onde você está, mas deixa sua impressão digital mais única. Um IPv6 diferente da sua saída IPv4 só é vazamento se não for a sua saída IPv6: o teste o compara com o IPv6 que os sites veem."
        ]
      ]
    },
    "ru": {
      "seo_title": "Проверка утечки WebRTC: показывает ли WebRTC ваш настоящий IP? · Кто вы?",
      "seo_desc": "Бесплатная проверка утечки WebRTC: публичные адреса IPv4 и IPv6 и локальные адреса, которые WebRTC отдаёт любому сайту, рядом с IP, который показывает ваш VPN или прокси. Если они не совпадают, WebRTC выдаёт ваш настоящий IP. С инструкциями для Chrome, Firefox, Brave и прокси-клиентов.",
      "seo_kw": "проверка утечки WebRTC, утечка WebRTC, утечка IP через WebRTC, WebRTC leak test, утечка WebRTC VPN, проверить WebRTC, отключить WebRTC, утечка локального IP",
      "h1": "Проверка утечки WebRTC",
      "og_sub": "Показывает ли WebRTC ваш настоящий IP?",
      "intro": "Видеозвонки в браузере работают через WebRTC, и любая страница может запустить его, ничего не спрашивая. WebRTC узнаёт у STUN-сервера, с какого адреса вы пришли, причём по UDP, который многие VPN и прокси не пропускают. Здесь — адреса, которые выдаёт WebRTC, рядом с адресом, который видят сайты.",
      "focus_h": "Ваши адреса WebRTC",
      "docs": [
        [
          "Что такое утечка WebRTC?",
          "Чтобы наладить звонок, WebRTC собирает все адреса, по которым до вас можно достучаться: локальные адреса сетевой карты и публичный адрес, который видит STUN-сервер. Страница читает их парой строк скрипта, без всяких разрешений. Если ваш VPN или прокси пропускает только веб-запросы страницы, запрос к STUN уходит напрямую через ваше подключение, и страница узнаёт ваш настоящий IP за VPN."
        ],
        [
          "Как работает этот тест?",
          "Страница открывает WebRTC-соединение со STUN-серверами Cloudflare и Google и выписывает адреса, которые они сообщают (кандидаты «server reflexive»). Затем сравнивает их с адресом, который видят этот сайт, ваши другие выходы и тест IPv6. Адрес, которого не видит ни один из них, — это утечка. Локальные адреса берутся из кандидатов «host»; ничего не сохраняется и никуда не отправляется."
        ],
        [
          "Как устранить утечку WebRTC?",
          "Прокси-клиенты (Clash, V2Ray и другие): включите режим TUN, чтобы UDP тоже шёл через прокси. Chrome и Edge: расширение WebRTC Network Limiter или в uBlock Origin пункт «Prevent WebRTC from leaking local IP addresses». Brave: Настройки → Конфиденциальность → Правила обработки IP-адресов WebRTC → Отключить UDP без прокси. Firefox: в about:config поставьте media.peerconnection.ice.default_address_only = true или media.peerconnection.enabled = false, чтобы выключить WebRTC совсем. Потом пройдите тест ещё раз."
        ],
        [
          "Локальный адрес или имя на .local — это утечка?",
          "Имя на .local значит, что браузер прячет ваш локальный адрес (mDNS), — так и должно быть. Настоящий локальный адрес вроде 192.168.1.5 не говорит, где вы, но делает ваш отпечаток уникальнее. Адрес IPv6, который отличается от вашего выхода IPv4, — утечка, только если это не ваш выход IPv6: тест сверяет его с адресом IPv6, который видят сайты."
        ]
      ]
    }
  },
  "browser-check": {
    "en": {
      "seo_title": "Browser Environment Check: is your browser consistent, or does it give itself away? · Who Are You",
      "seo_desc": "Free browser environment check for anti-detect browsers and multi-account setups: whether the user agent, JavaScript engine, languages, time zone, fonts and fingerprint agree, whether extensions rewrote what sites read, and an A–F grade.",
      "seo_kw": "browser environment check, anti-detect browser test, browser consistency check, fingerprint browser check, user agent spoofing detection, multi-account browser check",
      "h1": "Browser environment check",
      "og_sub": "Does your browser agree with itself?",
      "intro": "Sites that fight fraud don't just read your IP: they check that everything your browser says fits together. A user agent that says Safari on a Chromium engine, a language set only in JavaScript, a time zone that two APIs disagree on: each is a giveaway. Here is what this browser says, and where it contradicts itself.",
      "focus_h": "Tampering check",
      "docs": [
        [
          "What does this check look at?",
          "Whether properties sites read (user agent, platform, languages, screen) were redefined instead of coming from the browser, whether the drawing and audio functions fingerprints use were replaced, whether the JavaScript engine matches the user agent, whether the request header's language matches the one in JavaScript, and whether Date and Intl agree on the time zone. Every other check on the page counts toward the grade too."
        ],
        [
          "Why do extensions that change the user agent get caught?",
          "They change what JavaScript reads, but not the request headers the browser sends, the engine underneath, or the functions they wrap. Each mismatch is something a site can compare. To seem to be elsewhere, change the system itself: its language and time zone."
        ],
        [
          "Is anything stored?",
          "Nothing about you. The checks run in your browser, and the server answers only with what it sees of this request. Afterwards the page adds one to anonymous counters (which values you had, how each check came out), with no IP and no record of a single visit; \"Don't count me\" on the page turns it off."
        ]
      ]
    },
    "zh-CN": {
      "seo_title": "浏览器环境检测：指纹浏览器、多开环境前后一致吗 · 你是谁",
      "seo_desc": "免费浏览器环境检测，适合指纹浏览器和多账号环境：UA、JS 引擎、语言、时区、字体和指纹是否一致，插件有没有篡改网站读到的信息，并给出 A 到 F 的环境评分。",
      "seo_kw": "浏览器环境检测, 指纹浏览器检测, 浏览器指纹检测, 多开环境检测, UA 伪装检测, 环境一致性检测, AdsPower 检测, 跨境电商环境检测",
      "h1": "浏览器环境检测",
      "og_sub": "你的浏览器前后说得一致吗？",
      "intro": "做风控的网站不只看 IP，还会核对浏览器说的每件事能不能对上：UA 说是 Safari，引擎却是 Chromium 的；语言只在 JS 里改了；两个接口给出的时区不一样……每一处都是破绽。下面是这个浏览器的说法，以及它自相矛盾的地方。",
      "focus_h": "篡改检测",
      "docs": [
        [
          "这个检测看哪些地方？",
          "网站读的属性（UA、平台、语言、屏幕）是不是被重新定义过，指纹用到的画图和音频函数有没有被替换，JS 引擎和 UA 对不对得上，请求头里的语言和 JS 里的是否一致，Date 和 Intl 给出的时区是否相同。页面上其他检测项也都计入评分。"
        ],
        [
          "为什么改 UA 的插件会被识破？",
          "它们只改了 JS 读到的那一份，浏览器发出的请求头、底层引擎、被它们包起来的函数都还是原样。每一处对不上，网站都能比出来。想伪装成在别处，要在系统层面改：系统语言和时区。"
        ],
        [
          "会保存什么吗？",
          "不存关于你本人的东西。检测都在你的浏览器里进行，服务器只回答它从这次请求里本来就能看到的东西。检测完，页面会给匿名计数器加一（你的各项读数、每项检查的结果），不存 IP，也没有单次访问的记录；页面上的「不参与统计」可以关掉。"
        ]
      ]
    },
    "zh-TW": {
      "seo_title": "瀏覽器環境檢測：指紋瀏覽器、多開環境前後一致嗎 · 你是誰",
      "seo_desc": "免費瀏覽器環境檢測，適合指紋瀏覽器和多帳號環境：UA、JS 引擎、語言、時區、字型和指紋是否一致，擴充功能有沒有竄改網站讀到的資訊，並給出 A 到 F 的環境評分。",
      "seo_kw": "瀏覽器環境檢測, 指紋瀏覽器檢測, 瀏覽器指紋檢測, 多開環境檢測, UA 偽裝檢測, 環境一致性檢測",
      "h1": "瀏覽器環境檢測",
      "og_sub": "你的瀏覽器前後說得一致嗎？",
      "intro": "做風控的網站不只看 IP，還會核對瀏覽器說的每件事能不能對上：UA 說是 Safari，引擎卻是 Chromium 的；語言只在 JS 裡改了；兩個介面給出的時區不一樣……每一處都是破綻。下面是這個瀏覽器的說法，以及它自相矛盾的地方。",
      "focus_h": "竄改檢測",
      "docs": [
        [
          "這個檢測看哪些地方？",
          "網站讀的屬性（UA、平台、語言、螢幕）是不是被重新定義過，指紋用到的繪圖和音訊函式有沒有被替換，JS 引擎和 UA 對不對得上，請求標頭裡的語言和 JS 裡的是否一致，Date 和 Intl 給出的時區是否相同。頁面上其他檢測項也都計入評分。"
        ],
        [
          "為什麼改 UA 的擴充功能會被識破？",
          "它們只改了 JS 讀到的那一份，瀏覽器送出的請求標頭、底層引擎、被它們包起來的函式都還是原樣。每一處對不上，網站都比得出來。想偽裝成在別處，要在系統層面改：系統語言和時區。"
        ],
        [
          "會儲存什麼嗎？",
          "不存關於你本人的東西。檢測都在你的瀏覽器裡進行，伺服器只回答它從這次請求裡本來就看得到的東西。檢測完，頁面會替匿名計數器加一（你的各項讀數、每項檢查的結果），不存 IP，也沒有單次造訪的紀錄；頁面上的「不參與統計」可以關掉。"
        ]
      ]
    },
    "ja": {
      "seo_title": "ブラウザ環境チェック：アンチディテクトブラウザの整合性を確認 · あなたは誰",
      "seo_desc": "アンチディテクトブラウザや複数アカウント運用向けの無料ブラウザ環境チェック：UA、JS エンジン、言語、タイムゾーン、フォント、指紋が一致しているか、拡張機能がサイトの読む値を書き換えていないか、A〜F の評価付き。",
      "seo_kw": "ブラウザ環境チェック, アンチディテクトブラウザ, ブラウザ指紋チェック, UA 偽装 検出, 複数アカウント 環境",
      "h1": "ブラウザ環境チェック",
      "og_sub": "あなたのブラウザは辻褄が合っている？",
      "intro": "不正対策をするサイトは IP だけでなく、ブラウザの言うことがすべて噛み合うかを確かめます。UA は Safari なのにエンジンは Chromium、言語は JS の中だけ変更、二つの API でタイムゾーンが違う――どれも手がかりです。このブラウザの言い分と、矛盾している所を示します。",
      "focus_h": "改ざんチェック",
      "docs": [
        [
          "何を調べますか？",
          "サイトが読むプロパティ（UA、プラットフォーム、言語、画面）が再定義されていないか、指紋に使う描画や音声の関数が差し替えられていないか、JS エンジンが UA と合うか、リクエストヘッダーの言語が JS の言語と同じか、Date と Intl のタイムゾーンが一致するか。ページの他の検査も評価に入ります。"
        ],
        [
          "UA を変える拡張機能はなぜ見破られる？",
          "JS が読む値だけを変え、ブラウザが送るヘッダーや下のエンジン、包んだ関数はそのままだからです。食い違いはどれもサイトが比べられます。別の場所にいるように見せるなら、システムの言語とタイムゾーンを変えてください。"
        ],
        [
          "何か保存されますか？",
          "あなた個人のことは保存しません。検査はブラウザの中で行われ、サーバーはこのリクエストから見える内容を返すだけです。検査後、ページは匿名のカウンター（あなたの値、各チェックの結果）に 1 を足しますが、IP も 1 回ごとの記録も残しません。ページの「集計に含めない」で止められます。"
        ]
      ]
    },
    "ko": {
      "seo_title": "브라우저 환경 검사: 안티디텍트 브라우저가 앞뒤가 맞나요? · 당신은 누구",
      "seo_desc": "안티디텍트 브라우저와 다계정 환경을 위한 무료 브라우저 환경 검사: UA, JS 엔진, 언어, 시간대, 글꼴, 지문이 일치하는지, 확장 프로그램이 사이트가 읽는 값을 바꿨는지, A~F 등급까지.",
      "seo_kw": "브라우저 환경 검사, 안티디텍트 브라우저, 브라우저 지문 검사, UA 위장 탐지, 다계정 환경",
      "h1": "브라우저 환경 검사",
      "og_sub": "브라우저가 앞뒤가 맞나요?",
      "intro": "부정 사용을 막는 사이트는 IP만 보지 않고, 브라우저가 말하는 모든 것이 맞아떨어지는지 확인합니다. UA는 Safari인데 엔진은 Chromium, 언어는 JS에서만 바뀜, 두 API의 시간대가 다름… 모두 단서예요. 이 브라우저가 말하는 것과 스스로 모순되는 곳을 보여 줍니다.",
      "focus_h": "변조 검사",
      "docs": [
        [
          "무엇을 보나요?",
          "사이트가 읽는 속성(UA, 플랫폼, 언어, 화면)이 다시 정의됐는지, 지문에 쓰는 그리기·오디오 함수가 바뀌었는지, JS 엔진이 UA와 맞는지, 요청 헤더의 언어가 JS의 언어와 같은지, Date와 Intl의 시간대가 같은지 봅니다. 페이지의 다른 검사도 등급에 들어가요."
        ],
        [
          "UA를 바꾸는 확장 프로그램은 왜 들키나요?",
          "JS가 읽는 값만 바꾸고, 브라우저가 보내는 헤더나 아래 엔진, 감싼 함수는 그대로이기 때문이에요. 어긋남은 모두 사이트가 비교할 수 있습니다. 다른 곳에 있는 것처럼 보이려면 시스템 언어와 시간대를 바꾸세요."
        ],
        [
          "무언가 저장되나요?",
          "당신에 대한 것은 저장하지 않습니다. 검사는 브라우저 안에서 이뤄지고, 서버는 이 요청에서 보이는 것만 돌려줍니다. 검사 후 페이지는 익명 카운터(당신의 값, 각 검사 결과)에 1을 더하지만 IP도 방문 한 건의 기록도 남기지 않아요. 페이지의 '집계에서 빼기'로 끌 수 있습니다."
        ]
      ]
    },
    "de": {
      "seo_title": "Browser-Umgebungs-Check: Passt alles zusammen, oder verrät sich dein Browser? · Wer bist du?",
      "seo_desc": "Kostenloser Browser-Umgebungs-Check für Anti-Detect-Browser und Multi-Accounting: ob User-Agent, JavaScript-Engine, Sprachen, Zeitzone, Schriften und Fingerabdruck zusammenpassen, ob Erweiterungen umgeschrieben haben, was Websites lesen, und eine Note von A bis F.",
      "seo_kw": "Browser Umgebung prüfen, Anti-Detect-Browser Test, Browser Konsistenz Check, Fingerprint Browser Check, User-Agent Spoofing erkennen, Multi-Account Browser",
      "h1": "Browser-Umgebungs-Check",
      "og_sub": "Passt dein Browser zu sich selbst?",
      "intro": "Websites, die Betrug bekämpfen, lesen nicht nur deine IP: Sie prüfen, ob alles, was dein Browser sagt, zusammenpasst. Ein User-Agent, der Safari behauptet, auf einer Chromium-Engine; eine Sprache, die nur in JavaScript geändert wurde; eine Zeitzone, bei der sich zwei APIs uneinig sind: Jedes Detail verrät dich. Hier siehst du, was dieser Browser sagt und wo er sich widerspricht.",
      "focus_h": "Spuren von Manipulation",
      "docs": [
        [
          "Was prüft dieser Check?",
          "Ob Eigenschaften, die Websites lesen (User-Agent, Plattform, Sprachen, Bildschirm), umdefiniert wurden statt vom Browser zu kommen; ob die Zeichen- und Audiofunktionen, die für Fingerabdrücke genutzt werden, ersetzt wurden; ob die JavaScript-Engine zum User-Agent passt; ob die Sprache im mitgesendeten Header dieselbe ist wie in JavaScript; und ob Date und Intl dieselbe Zeitzone melden. Alle anderen Prüfungen auf der Seite fließen ebenfalls in die Note ein."
        ],
        [
          "Warum fliegen Erweiterungen auf, die den User-Agent ändern?",
          "Sie ändern, was JavaScript liest, aber nicht die Header, die der Browser bei jeder Anfrage mitschickt, nicht die Engine darunter und nicht die Funktionen, die sie umhüllen. Jede Abweichung kann eine Website vergleichen. Um woanders zu wirken, stell das System selbst um: Sprache und Zeitzone."
        ],
        [
          "Wird etwas gespeichert?",
          "Nichts, was dich identifiziert. Die Prüfungen laufen in deinem Browser, und der Server antwortet nur mit dem, was er in dieser Anfrage ohnehin sieht, ohne Protokoll. Danach zählt die Seite anonyme Zähler um eins hoch (welche Werte du hattest, wie jede Prüfung ausging), ohne IP und ohne Eintrag zu einzelnen Besuchen. „Nicht mitzählen“ nimmt dich aus der Zählung, und ein Browser, der Global Privacy Control sendet, wird nie gezählt."
        ]
      ]
    },
    "fr": {
      "seo_title": "Vérification de l’environnement du navigateur : cohérent ou trahi par un détail ? · Qui êtes-vous ?",
      "seo_desc": "Vérification gratuite de l’environnement du navigateur, pour les navigateurs anti-détection et le multicompte : le user agent, le moteur JavaScript, les langues, le fuseau horaire, les polices et l’empreinte concordent-ils ? Une extension a-t-elle réécrit ce que lisent les sites ? Avec une note de A à F.",
      "seo_kw": "vérification environnement navigateur, test navigateur anti-détection, cohérence navigateur, test empreinte navigateur, détection user agent modifié, multicompte navigateur",
      "h1": "Vérification de l’environnement du navigateur",
      "og_sub": "Votre navigateur est-il cohérent avec lui-même ?",
      "intro": "Les sites qui luttent contre la fraude ne lisent pas seulement votre IP : ils vérifient que tout ce que dit votre navigateur va ensemble. Un user agent qui annonce Safari sur un moteur Chromium, une langue changée seulement dans JavaScript, un fuseau horaire sur lequel deux API ne sont pas d’accord : chacun de ces détails vous trahit. Voici ce que dit ce navigateur, et où il se contredit.",
      "focus_h": "Traces de modification",
      "docs": [
        [
          "Qu’est-ce que ce test vérifie ?",
          "Il regarde si les propriétés que lisent les sites (user agent, plateforme, langues, écran) ont été redéfinies au lieu de venir du navigateur ; si les fonctions de dessin et d’audio utilisées pour l’empreinte ont été remplacées ; si le moteur JavaScript correspond au user agent ; si la langue envoyée dans les en-têtes est la même que dans JavaScript ; et si Date et Intl donnent le même fuseau horaire. Tous les autres contrôles de la page comptent aussi dans la note."
        ],
        [
          "Pourquoi les extensions qui changent le user agent se font-elles repérer ?",
          "Elles changent ce que lit JavaScript, mais pas les en-têtes que le navigateur envoie avec chaque requête, ni le moteur en dessous, ni les fonctions qu’elles enveloppent. Chaque décalage est une chose qu’un site peut comparer. Pour paraître ailleurs, changez le système lui-même : sa langue et son fuseau horaire."
        ],
        [
          "Quelque chose est-il enregistré ?",
          "Rien qui vous identifie. Les contrôles se font dans votre navigateur, et le serveur répond seulement avec ce qu’il voit déjà dans cette requête, sans tenir de journal. Ensuite, la page ajoute un à des compteurs anonymes (les valeurs que vous aviez, le résultat de chaque contrôle), sans IP ni trace d’une visite en particulier. Le bouton « Ne pas me compter » vous retire du comptage, et un navigateur qui envoie Global Privacy Control n’est jamais compté."
        ]
      ]
    },
    "es": {
      "seo_title": "Test de entorno del navegador: ¿tu navegador es coherente consigo mismo? · Quién eres",
      "seo_desc": "Test gratuito de entorno del navegador para navegadores antidetección y multicuenta: si coinciden user agent, motor JS, idiomas, zona horaria, fuentes y huella, si las extensiones reescriben lo que leen los sitios, y una nota de la A a la F.",
      "seo_kw": "test entorno navegador, navegador antidetección test, coherencia navegador, detección de user agent falso, test huella navegador",
      "h1": "Test de entorno del navegador",
      "og_sub": "¿Tu navegador es coherente consigo mismo?",
      "intro": "Los sitios que combaten el fraude no solo leen tu IP: comprueban que todo lo que dice tu navegador encaje. Un user agent de Safari sobre un motor Chromium, un idioma cambiado solo en JavaScript, dos interfaces que no coinciden en la zona horaria: cada uno te delata. Esto es lo que dice este navegador y dónde se contradice.",
      "focus_h": "Comprobación de alteraciones",
      "docs": [
        [
          "¿Qué se comprueba?",
          "Si las propiedades que leen los sitios (user agent, plataforma, idiomas, pantalla) se redefinieron, si se reemplazaron las funciones de dibujo y audio que usan las huellas, si el motor JS cuadra con el user agent, si el idioma de la cabecera coincide con el de JavaScript, y si Date e Intl coinciden en la zona horaria. El resto de comprobaciones de la página también cuenta para la nota."
        ],
        [
          "¿Por qué pillan a las extensiones que cambian el user agent?",
          "Solo cambian lo que lee JavaScript, no las cabeceras que envía el navegador, ni el motor de debajo, ni las funciones que envuelven. Cada diferencia se puede comparar. Para parecer de otro sitio, cambia el propio sistema: su idioma y zona horaria."
        ],
        [
          "¿Se guarda algo?",
          "Nada sobre ti. Las comprobaciones se hacen en tu navegador y el servidor solo responde con lo que ve de esta petición. Después la página suma uno a contadores anónimos (qué valores tenías, cómo salió cada comprobación), sin IP y sin registro de una visita; «No contarme» en la página lo desactiva."
        ]
      ]
    },
    "pt": {
      "seo_title": "Teste de ambiente do navegador: seu navegador é coerente? · Quem é você",
      "seo_desc": "Teste gratuito de ambiente do navegador para navegadores antidetecção e multicontas: se user agent, motor JS, idiomas, fuso, fontes e impressão digital batem, se extensões reescrevem o que os sites leem, e uma nota de A a F.",
      "seo_kw": "teste ambiente navegador, navegador antidetecção teste, coerência do navegador, detecção de user agent falso, teste impressão digital navegador",
      "h1": "Teste de ambiente do navegador",
      "og_sub": "Seu navegador é coerente consigo mesmo?",
      "intro": "Sites que combatem fraude não leem só o seu IP: conferem se tudo o que o navegador diz se encaixa. Um user agent de Safari num motor Chromium, um idioma mudado só no JavaScript, duas interfaces discordando do fuso: cada um te entrega. Aqui está o que este navegador diz, e onde ele se contradiz.",
      "focus_h": "Verificação de adulteração",
      "docs": [
        [
          "O que é verificado?",
          "Se as propriedades que os sites leem (user agent, plataforma, idiomas, tela) foram redefinidas, se as funções de desenho e áudio usadas pelas impressões digitais foram trocadas, se o motor JS bate com o user agent, se o idioma do cabeçalho é o mesmo do JavaScript, e se Date e Intl concordam no fuso. As demais verificações da página também contam para a nota."
        ],
        [
          "Por que extensões que mudam o user agent são pegas?",
          "Elas mudam só o que o JavaScript lê, não os cabeçalhos que o navegador envia, nem o motor por baixo, nem as funções que envolvem. Cada diferença pode ser comparada. Para parecer estar em outro lugar, mude o próprio sistema: idioma e fuso."
        ],
        [
          "Algo é salvo?",
          "Nada sobre você. As verificações rodam no seu navegador, e o servidor só responde com o que vê desta requisição. Depois a página soma um a contadores anônimos (quais valores você tinha, o resultado de cada verificação), sem IP e sem registro de uma visita; \"Não me contar\" na página desativa isso."
        ]
      ]
    },
    "ru": {
      "seo_title": "Проверка окружения браузера: всё ли сходится или браузер себя выдаёт? · Кто вы?",
      "seo_desc": "Бесплатная проверка окружения браузера для антидетект-браузеров и мультиаккаунтинга: сходятся ли User-Agent, движок JavaScript, языки, часовой пояс, шрифты и отпечаток, не переписали ли расширения то, что читают сайты. Плюс оценка от A до F.",
      "seo_kw": "проверка окружения браузера, проверка антидетект браузера, проверка согласованности браузера, проверка браузера на отпечатки, обнаружение подмены User-Agent, мультиаккаунтинг",
      "h1": "Проверка окружения браузера",
      "og_sub": "Не противоречит ли браузер сам себе?",
      "intro": "Сайты, которые борются с мошенничеством, смотрят не только на IP: они проверяют, сходится ли всё, что сообщает ваш браузер. User-Agent говорит «Safari», а движок — Chromium; язык поменян только в JavaScript; два API называют разный часовой пояс — каждая такая мелочь вас выдаёт. Здесь — что сообщает этот браузер и в чём он себе противоречит.",
      "focus_h": "Следы подмены",
      "docs": [
        [
          "Что проверяется?",
          "Не переопределены ли свойства, которые читают сайты (User-Agent, платформа, языки, экран), вместо того чтобы браузер отдавал их сам; не подменены ли функции рисования и звука, по которым снимают отпечаток; совпадает ли движок JavaScript с User-Agent; совпадает ли язык в заголовках запроса с языком в JavaScript; одинаковый ли часовой пояс у Date и Intl. В оценку идут и все остальные проверки на странице."
        ],
        [
          "Почему расширения, меняющие User-Agent, попадаются?",
          "Они меняют то, что читает JavaScript, но не заголовки, которые браузер отправляет с каждым запросом, не движок под ними и не функции, которые они оборачивают. Любое расхождение сайт может сравнить. Чтобы сойти за жителя другой страны, меняйте саму систему: её язык и часовой пояс."
        ],
        [
          "Что-нибудь сохраняется?",
          "Ничего, что указывало бы на вас. Проверки идут в вашем браузере, а сервер отвечает только тем, что и так видит в этом запросе, и не ведёт журналов. Затем страница прибавляет единицу к анонимным счётчикам (какие у вас были значения, чем закончилась каждая проверка) — без IP и без записей об отдельных визитах. Кнопка «Не учитывать меня» исключает вас из подсчёта, а браузер с Global Privacy Control не учитывается никогда."
        ]
      ]
    }
  },
  "timezone-check": {
    "en": {
      "seo_title": "Time Zone Check: does your time zone match your IP? · Who Are You",
      "seo_desc": "Free time zone check: your system time zone and clock format against the time zone of your IP address. A mismatch is one of the first things sites use to spot a VPN or proxy. With how to fix it on Windows, macOS and phones.",
      "seo_kw": "time zone check, timezone IP mismatch, browser time zone, VPN time zone, what is my time zone, time zone detection",
      "h1": "Time zone check",
      "og_sub": "Does your clock match your IP?",
      "intro": "Every page can read your system's time zone without asking, and every site knows roughly where your IP is. When the two disagree, say an IP in Japan and a clock on China Standard Time, it's one of the first signs sites use to spot a VPN or proxy. Here are both, side by side.",
      "focus_h": "Your time zone against your IP",
      "docs": [
        [
          "How do sites know my time zone?",
          "Through JavaScript's Intl and Date, available to every page without a permission prompt. The IP's time zone comes from the same kind of location database that places your IP in a city."
        ],
        [
          "How do I fix a mismatch?",
          "Set the system time zone to one in the country your IP is in: on Windows in Settings → Time & language, on macOS in System Settings → General → Date & Time, on phones in the date and time settings. A browser extension that only changes JavaScript's time zone is easy to catch: the browser environment check shows why."
        ],
        [
          "Why is a different zone in the same country only a warning?",
          "Large countries have several time zones, and an IP is often placed in the right country but the wrong city. A zone of another country is a clear contradiction; a zone of the same country is only a hint."
        ]
      ]
    },
    "zh-CN": {
      "seo_title": "时区检测：系统时区和 IP 对得上吗 · 你是谁",
      "seo_desc": "免费时区检测：对比你的系统时区、时钟格式和 IP 所在地的时区。两者不一致，是网站识别 VPN 和代理最先看的破绽之一。附 Windows、macOS 和手机上的改法。",
      "seo_kw": "时区检测, 时区与 IP 不一致, 浏览器时区, VPN 时区, 我的时区, 系统时区检测, 时区泄露",
      "h1": "时区检测",
      "og_sub": "你的时钟和 IP 对得上吗？",
      "intro": "任何网页都能不经授权读到你系统的时区，任何网站也大致知道你的 IP 在哪儿。两者对不上，比如 IP 在日本、时钟却是中国标准时间，就是网站识别 VPN 和代理时最先看的破绽之一。下面把两者并排放着。",
      "focus_h": "你的时区和 IP",
      "docs": [
        [
          "网站怎么知道我的时区？",
          "通过 JavaScript 的 Intl 和 Date，任何网页都能用，不会弹授权。IP 的时区则来自把 IP 定位到城市的那类地理数据库。"
        ],
        [
          "时区对不上怎么改？",
          "把系统时区改成 IP 所在国家的：Windows 在「设置 → 时间和语言」，macOS 在「系统设置 → 通用 → 日期与时间」，手机在日期和时间设置里。只改 JS 时区的浏览器插件很容易被识破，原因见浏览器环境检测。"
        ],
        [
          "同一个国家的不同时区为什么只算黄色？",
          "大国有好几个时区，IP 也常常只定位准了国家、城市不对。别国的时区是明显矛盾，同一个国家的只是提示。"
        ]
      ]
    },
    "zh-TW": {
      "seo_title": "時區檢測：系統時區和 IP 對得上嗎 · 你是誰",
      "seo_desc": "免費時區檢測：比對你的系統時區、時鐘格式和 IP 所在地的時區。兩者不一致，是網站辨識 VPN 和代理最先看的破綻之一。附 Windows、macOS 和手機上的改法。",
      "seo_kw": "時區檢測, 時區與 IP 不一致, 瀏覽器時區, VPN 時區, 我的時區, 系統時區檢測",
      "h1": "時區檢測",
      "og_sub": "你的時鐘和 IP 對得上嗎？",
      "intro": "任何網頁都能不經授權讀到你系統的時區，任何網站也大致知道你的 IP 在哪裡。兩者對不上，例如 IP 在日本、時鐘卻是中國標準時間，就是網站辨識 VPN 和代理時最先看的破綻之一。下面把兩者並排放著。",
      "focus_h": "你的時區和 IP",
      "docs": [
        [
          "網站怎麼知道我的時區？",
          "透過 JavaScript 的 Intl 和 Date，任何網頁都能用，不會跳出授權。IP 的時區則來自把 IP 定位到城市的那類地理資料庫。"
        ],
        [
          "時區對不上怎麼改？",
          "把系統時區改成 IP 所在國家的：Windows 在「設定 → 時間與語言」，macOS 在「系統設定 → 一般 → 日期與時間」，手機在日期和時間設定裡。只改 JS 時區的擴充功能很容易被識破，原因見瀏覽器環境檢測。"
        ],
        [
          "同一個國家的不同時區為什麼只算黃色？",
          "大國有好幾個時區，IP 也常常只定位準了國家、城市不對。別國的時區是明顯矛盾，同一個國家的只是提示。"
        ]
      ]
    },
    "ja": {
      "seo_title": "タイムゾーンチェック：システムの時刻と IP は一致している？ · あなたは誰",
      "seo_desc": "無料タイムゾーンチェック：システムのタイムゾーンと時計の形式を、IP のある場所のタイムゾーンと比べます。食い違いは、サイトが VPN やプロキシを見抜く最初の手がかりの一つ。Windows・macOS・スマホでの直し方付き。",
      "seo_kw": "タイムゾーン チェック, タイムゾーン IP 不一致, ブラウザ タイムゾーン, VPN タイムゾーン, 時刻 検出",
      "h1": "タイムゾーンチェック",
      "og_sub": "時計と IP は合っている？",
      "intro": "どのページも許可なしにシステムのタイムゾーンを読めますし、どのサイトも IP のおおよその場所を知っています。二つが食い違う――IP は日本なのに時計は中国標準時――のは、サイトが VPN やプロキシを見抜く最初の手がかりの一つです。両方を並べて示します。",
      "focus_h": "タイムゾーンと IP",
      "docs": [
        [
          "サイトはどうやってタイムゾーンを知る？",
          "JavaScript の Intl と Date からで、どのページでも許可なしに使えます。IP のタイムゾーンは、IP を都市まで特定するのと同じ種類の位置データベースから来ます。"
        ],
        [
          "食い違いはどう直す？",
          "システムのタイムゾーンを IP の国のものにします：Windows は「設定 → 時刻と言語」、macOS は「システム設定 → 一般 → 日付と時刻」、スマホは日付と時刻の設定。JS のタイムゾーンだけを変える拡張機能はすぐ見破られます（ブラウザ環境チェック参照）。"
        ],
        [
          "同じ国の別のタイムゾーンはなぜ黄色だけ？",
          "大きな国には複数のタイムゾーンがあり、IP は国は合っていても都市がずれることがよくあります。他国のタイムゾーンははっきりした矛盾、同じ国ならヒントにとどめます。"
        ]
      ]
    },
    "ko": {
      "seo_title": "시간대 검사: 시스템 시간대와 IP가 맞나요? · 당신은 누구",
      "seo_desc": "무료 시간대 검사: 시스템 시간대와 시계 형식을 IP 위치의 시간대와 비교합니다. 둘이 다르면 사이트가 VPN·프록시를 알아보는 첫 단서가 됩니다. Windows, macOS, 휴대폰에서 고치는 법 포함.",
      "seo_kw": "시간대 검사, 시간대 IP 불일치, 브라우저 시간대, VPN 시간대, 내 시간대",
      "h1": "시간대 검사",
      "og_sub": "시계와 IP가 맞나요?",
      "intro": "어떤 페이지든 권한 없이 시스템 시간대를 읽을 수 있고, 어떤 사이트든 IP가 대략 어디인지 압니다. 둘이 어긋나면(IP는 일본인데 시계는 중국 표준시) 사이트가 VPN·프록시를 알아보는 첫 단서가 됩니다. 둘을 나란히 보여 줍니다.",
      "focus_h": "시간대와 IP",
      "docs": [
        [
          "사이트는 내 시간대를 어떻게 아나요?",
          "JavaScript의 Intl과 Date로, 어떤 페이지든 권한 없이 씁니다. IP의 시간대는 IP를 도시까지 찾는 것과 같은 위치 데이터베이스에서 나와요."
        ],
        [
          "어긋나면 어떻게 고치나요?",
          "시스템 시간대를 IP가 있는 나라의 것으로 바꾸세요. Windows는 설정 → 시간 및 언어, macOS는 시스템 설정 → 일반 → 날짜 및 시간, 휴대폰은 날짜 및 시간 설정. JS 시간대만 바꾸는 확장 프로그램은 쉽게 들켜요(브라우저 환경 검사 참고)."
        ],
        [
          "같은 나라의 다른 시간대는 왜 노란색인가요?",
          "큰 나라는 시간대가 여럿이고, IP는 나라는 맞아도 도시가 틀리는 일이 흔해요. 다른 나라의 시간대는 분명한 모순, 같은 나라는 힌트일 뿐입니다."
        ]
      ]
    },
    "de": {
      "seo_title": "Zeitzonen-Check: Passt deine Zeitzone zu deiner IP? · Wer bist du?",
      "seo_desc": "Kostenloser Zeitzonen-Check: Zeitzone und Uhrzeitformat deines Systems im Vergleich zur Zeitzone deiner IP-Adresse. Eine Abweichung ist eines der ersten Anzeichen, an denen Websites ein VPN oder einen Proxy erkennen. Mit Anleitung für Windows, macOS und Smartphones.",
      "seo_kw": "Zeitzone prüfen, Zeitzone IP Abweichung, Browser Zeitzone, VPN Zeitzone, welche Zeitzone habe ich, Zeitzone erkennen",
      "h1": "Zeitzonen-Check",
      "og_sub": "Passt deine Uhr zu deiner IP?",
      "intro": "Jede Seite kann ohne Nachfrage die Zeitzone deines Systems lesen, und jede Website weiß ungefähr, wo deine IP liegt. Passen beide nicht zusammen, etwa eine IP in Japan und eine Uhr auf chinesischer Zeit, ist das eines der ersten Zeichen, an denen Websites ein VPN oder einen Proxy erkennen. Hier siehst du beides nebeneinander.",
      "focus_h": "Deine Zeitzone im Vergleich zur IP",
      "docs": [
        [
          "Woher kennen Websites meine Zeitzone?",
          "Über Intl und Date in JavaScript, die jeder Seite ohne Berechtigungsabfrage zur Verfügung stehen. Die Zeitzone der IP stammt aus derselben Art von Geodatenbank, die deine IP einer Stadt zuordnet."
        ],
        [
          "Wie behebe ich eine Abweichung?",
          "Stell die Systemzeitzone auf eine im Land deiner IP: unter Windows in Einstellungen → Zeit und Sprache, unter macOS in Systemeinstellungen → Allgemein → Datum & Uhrzeit, auf dem Smartphone in den Einstellungen für Datum und Uhrzeit. Eine Browsererweiterung, die nur die Zeitzone für JavaScript ändert, fällt leicht auf: Der Browser-Umgebungs-Check zeigt, warum."
        ],
        [
          "Warum ist eine andere Zone im selben Land nur eine Warnung?",
          "Große Länder haben mehrere Zeitzonen, und eine IP wird oft dem richtigen Land, aber der falschen Stadt zugeordnet. Eine Zone eines anderen Landes ist ein klarer Widerspruch; eine Zone desselben Landes nur ein Hinweis."
        ]
      ]
    },
    "fr": {
      "seo_title": "Vérification du fuseau horaire : correspond-il à votre IP ? · Qui êtes-vous ?",
      "seo_desc": "Vérification gratuite du fuseau horaire : le fuseau et le format d’heure de votre système, comparés au fuseau de votre adresse IP. Un décalage est l’un des premiers indices qu’utilisent les sites pour repérer un VPN ou un proxy. Avec la marche à suivre sur Windows, macOS et téléphone.",
      "seo_kw": "vérifier fuseau horaire, fuseau horaire IP, fuseau horaire navigateur, fuseau horaire VPN, quel est mon fuseau horaire, détection fuseau horaire",
      "h1": "Vérification du fuseau horaire",
      "og_sub": "Votre horloge correspond-elle à votre IP ?",
      "intro": "N’importe quelle page peut lire le fuseau horaire de votre système sans rien demander, et tout site sait à peu près où se trouve votre IP. Quand les deux ne concordent pas, par exemple une IP au Japon et une horloge à l’heure de Pékin, c’est l’un des premiers signes qu’utilisent les sites pour repérer un VPN ou un proxy. Les voici côte à côte.",
      "focus_h": "Votre fuseau face à votre IP",
      "docs": [
        [
          "Comment les sites connaissent-ils mon fuseau horaire ?",
          "Grâce à Intl et Date en JavaScript, accessibles à toute page sans demande d’autorisation. Le fuseau de l’IP vient du même genre de base de géolocalisation que celle qui place votre IP dans une ville."
        ],
        [
          "Comment corriger un décalage ?",
          "Réglez le fuseau du système sur un fuseau du pays de votre IP : sur Windows dans Paramètres → Heure et langue, sur macOS dans Réglages Système → Général → Date et heure, sur téléphone dans les réglages de date et heure. Une extension qui change seulement le fuseau vu par JavaScript se repère facilement : la vérification de l’environnement du navigateur montre pourquoi."
        ],
        [
          "Pourquoi un autre fuseau du même pays n’est-il qu’un avertissement ?",
          "Les grands pays ont plusieurs fuseaux horaires, et une IP est souvent placée dans le bon pays mais dans la mauvaise ville. Un fuseau d’un autre pays est une vraie contradiction ; un fuseau du même pays n’est qu’un indice."
        ]
      ]
    },
    "es": {
      "seo_title": "Test de zona horaria: ¿tu zona horaria coincide con tu IP? · Quién eres",
      "seo_desc": "Test gratuito de zona horaria: la zona y el formato de hora de tu sistema frente a la zona horaria de tu IP. Un desajuste es una de las primeras pistas que usan los sitios para detectar una VPN o un proxy. Con cómo arreglarlo en Windows, macOS y móvil.",
      "seo_kw": "test zona horaria, zona horaria IP, zona horaria navegador, zona horaria VPN, mi zona horaria",
      "h1": "Test de zona horaria",
      "og_sub": "¿Tu reloj coincide con tu IP?",
      "intro": "Cualquier página puede leer la zona horaria de tu sistema sin pedir permiso, y cualquier sitio sabe más o menos dónde está tu IP. Cuando no coinciden –una IP en Japón y un reloj en hora de China–, es una de las primeras pistas de una VPN o un proxy. Aquí están las dos, una junto a otra.",
      "focus_h": "Tu zona horaria frente a tu IP",
      "docs": [
        [
          "¿Cómo saben los sitios mi zona horaria?",
          "Con Intl y Date de JavaScript, disponibles para cualquier página sin permiso. La zona de la IP sale del mismo tipo de base de datos que sitúa tu IP en una ciudad."
        ],
        [
          "¿Cómo arreglo un desajuste?",
          "Pon en el sistema una zona horaria del país de tu IP: en Windows en Configuración → Hora e idioma, en macOS en Ajustes del Sistema → General → Fecha y hora, en el móvil en los ajustes de fecha y hora. Una extensión que solo cambia la zona de JavaScript se detecta fácilmente; el test de entorno del navegador explica por qué."
        ],
        [
          "¿Por qué otra zona del mismo país es solo un aviso?",
          "Los países grandes tienen varias zonas horarias, y una IP a menudo se sitúa en el país correcto pero en otra ciudad. Una zona de otro país es una contradicción clara; una del mismo país, solo una pista."
        ]
      ]
    },
    "pt": {
      "seo_title": "Teste de fuso horário: seu fuso bate com seu IP? · Quem é você",
      "seo_desc": "Teste gratuito de fuso horário: o fuso e o formato de hora do seu sistema contra o fuso do seu IP. Uma diferença é uma das primeiras pistas que os sites usam para pegar VPN ou proxy. Com como corrigir no Windows, macOS e celular.",
      "seo_kw": "teste fuso horário, fuso horário IP, fuso do navegador, fuso VPN, meu fuso horário",
      "h1": "Teste de fuso horário",
      "og_sub": "Seu relógio bate com seu IP?",
      "intro": "Qualquer página lê o fuso do seu sistema sem pedir permissão, e qualquer site sabe mais ou menos onde está seu IP. Quando os dois não batem – um IP no Japão e um relógio no horário da China –, é uma das primeiras pistas de VPN ou proxy. Aqui estão os dois, lado a lado.",
      "focus_h": "Seu fuso contra seu IP",
      "docs": [
        [
          "Como os sites sabem meu fuso?",
          "Pelo Intl e Date do JavaScript, disponíveis para qualquer página sem permissão. O fuso do IP vem do mesmo tipo de base de localização que coloca seu IP numa cidade."
        ],
        [
          "Como corrijo uma diferença?",
          "Coloque no sistema um fuso do país do seu IP: no Windows em Configurações → Hora e idioma, no macOS em Ajustes do Sistema → Geral → Data e Hora, no celular nos ajustes de data e hora. Uma extensão que só muda o fuso do JavaScript é fácil de pegar; o teste de ambiente do navegador mostra por quê."
        ],
        [
          "Por que outro fuso do mesmo país é só um aviso?",
          "Países grandes têm vários fusos, e um IP muitas vezes cai no país certo mas na cidade errada. Um fuso de outro país é contradição clara; um do mesmo país, só uma pista."
        ]
      ]
    },
    "ru": {
      "seo_title": "Проверка часового пояса: совпадает ли он с вашим IP? · Кто вы?",
      "seo_desc": "Бесплатная проверка часового пояса: часовой пояс и формат времени вашей системы рядом с часовым поясом вашего IP-адреса. Несовпадение — один из первых признаков, по которым сайты замечают VPN или прокси. С инструкциями для Windows, macOS и телефонов.",
      "seo_kw": "проверка часового пояса, часовой пояс не совпадает с IP, часовой пояс браузера, часовой пояс VPN, какой у меня часовой пояс, определение часового пояса",
      "h1": "Проверка часового пояса",
      "og_sub": "Совпадают ли ваши часы с IP?",
      "intro": "Любая страница может без спроса прочитать часовой пояс вашей системы, а любой сайт примерно знает, где находится ваш IP. Если они не сходятся — скажем, IP в Японии, а часы идут по пекинскому времени, — это один из первых признаков, по которым сайты замечают VPN или прокси. Здесь они стоят рядом.",
      "focus_h": "Ваш часовой пояс и ваш IP",
      "docs": [
        [
          "Откуда сайты знают мой часовой пояс?",
          "Из Intl и Date в JavaScript — они доступны любой странице без запроса разрешения. Часовой пояс IP берётся из такой же базы геолокации, которая привязывает ваш IP к городу."
        ],
        [
          "Как исправить несовпадение?",
          "Поставьте в системе часовой пояс страны, где находится ваш IP: в Windows — Параметры → Время и язык, в macOS — Системные настройки → Основные → Дата и время, на телефоне — в настройках даты и времени. Расширение браузера, которое меняет часовой пояс только для JavaScript, легко раскусить: проверка окружения браузера покажет почему."
        ],
        [
          "Почему другой пояс в той же стране — только предупреждение?",
          "В больших странах несколько часовых поясов, а IP часто привязывается к нужной стране, но не к тому городу. Пояс другой страны — явное противоречие; пояс той же страны — лишь намёк."
        ]
      ]
    }
  },
  "proxy-check": {
    "en": {
      "seo_title": "Proxy Check: can sites tell you're behind a proxy? · Who Are You",
      "seo_desc": "Free proxy check: the round trip your browser measures against the one Cloudflare sees on its connection, whether your IP belongs to a data center, your DNS and WebRTC addresses. A proxy adds a leg sites can measure, even on a clean residential IP.",
      "seo_kw": "proxy check, proxy detection test, am I behind a proxy, VPN detection, latency proxy detection, data center IP check",
      "h1": "Proxy check",
      "og_sub": "Can sites tell there's a proxy in between?",
      "intro": "A proxy hides your IP, but not the extra leg of the trip. Cloudflare measures the round trip on its own connection, which ends at the proxy; your browser measures the whole way. When the browser's is much longer, something sits in between, whatever the IP looks like. Here are both, with the other signs sites use.",
      "focus_h": "Your round trip",
      "docs": [
        [
          "How does the latency check work?",
          "The page asks this site's edge for a tiny response a few times and takes the quickest, from the moment the request leaves to the first byte back. Cloudflare reports the round trip it measured on the TCP connection it served you on. Without a proxy they're close; through one, Cloudflare only sees the proxy's part."
        ],
        [
          "Can a residential IP still be caught?",
          "Yes. A residential IP passes the data center check, but the extra round trip, a DNS resolver in another country, a time zone that doesn't match and WebRTC addresses all still give it away."
        ],
        [
          "Why is the check sometimes \"couldn't read\"?",
          "Over HTTP/3 there is no TCP connection, so Cloudflare has no round trip to report, and some networks block the measuring requests."
        ]
      ]
    },
    "zh-CN": {
      "seo_title": "代理检测：网站能看出你在用代理吗 · 你是谁",
      "seo_desc": "免费代理检测：对比浏览器测到的往返延迟和 Cloudflare 在自己连接上看到的延迟，看 IP 是不是机房的，DNS 和 WebRTC 漏了什么。代理会多出一段网站量得出来的路程，住宅 IP 也藏不住。",
      "seo_kw": "代理检测, 代理 IP 检测, 是否使用代理, VPN 检测, 延迟检测代理, 机房 IP 检测, 住宅 IP 检测, 节点检测",
      "h1": "代理检测",
      "og_sub": "网站看得出中间有代理吗？",
      "intro": "代理能藏住 IP，藏不住多出来的那段路。Cloudflare 在自己的连接上测往返时间，这条连接的另一头是代理；你的浏览器测的是全程。浏览器测出来比它长很多，就说明中间还有一段，不管 IP 看起来多干净。下面是这两个数，以及网站常看的其他破绽。",
      "focus_h": "你的往返延迟",
      "docs": [
        [
          "延迟检测是怎么做的？",
          "页面向本站的边缘节点要几次很小的响应，取最快的一次，从请求发出到收到第一个字节。Cloudflare 则报告它在给你服务的那条 TCP 连接上测到的往返时间。不走代理时两者接近；走代理时，Cloudflare 只看到代理那一段。"
        ],
        [
          "住宅 IP 也会被识破吗？",
          "会。住宅 IP 能过「机房 IP」这一关，但多出来的延迟、在别国的 DNS 解析器、对不上的时区和 WebRTC 漏出的地址，照样会把它暴露出来。"
        ],
        [
          "为什么有时显示「读不到」？",
          "走 HTTP/3 时没有 TCP 连接，Cloudflare 就没有往返时间可报；有些网络也会拦下测量请求。"
        ]
      ]
    },
    "zh-TW": {
      "seo_title": "代理檢測：網站看得出你在用代理嗎 · 你是誰",
      "seo_desc": "免費代理檢測：比對瀏覽器測到的往返延遲和 Cloudflare 在自己連線上看到的延遲，看 IP 是不是機房的，DNS 和 WebRTC 洩漏了什麼。代理會多出一段網站量得出來的路程，住宅 IP 也藏不住。",
      "seo_kw": "代理檢測, 代理 IP 檢測, 是否使用代理, VPN 檢測, 延遲檢測代理, 機房 IP 檢測, 住宅 IP 檢測",
      "h1": "代理檢測",
      "og_sub": "網站看得出中間有代理嗎？",
      "intro": "代理能藏住 IP，藏不住多出來的那段路。Cloudflare 在自己的連線上測往返時間，這條連線的另一頭是代理；你的瀏覽器測的是全程。瀏覽器測出來比它長很多，就表示中間還有一段，不管 IP 看起來多乾淨。下面是這兩個數，以及網站常看的其他破綻。",
      "focus_h": "你的往返延遲",
      "docs": [
        [
          "延遲檢測是怎麼做的？",
          "頁面向本站的邊緣節點要幾次很小的回應，取最快的一次，從請求送出到收到第一個位元組。Cloudflare 則回報它在服務你的那條 TCP 連線上測到的往返時間。不走代理時兩者接近；走代理時，Cloudflare 只看到代理那一段。"
        ],
        [
          "住宅 IP 也會被識破嗎？",
          "會。住宅 IP 能過「機房 IP」這一關，但多出來的延遲、在別國的 DNS 解析器、對不上的時區和 WebRTC 洩漏的位址，照樣會把它暴露出來。"
        ],
        [
          "為什麼有時顯示「讀不到」？",
          "走 HTTP/3 時沒有 TCP 連線，Cloudflare 就沒有往返時間可報；有些網路也會擋下測量請求。"
        ]
      ]
    },
    "ja": {
      "seo_title": "プロキシチェック：サイトはプロキシ経由だと見抜ける？ · あなたは誰",
      "seo_desc": "無料プロキシチェック：ブラウザが測った往復時間と、Cloudflare が自分の接続で見た往復時間を比べ、IP がデータセンターか、DNS や WebRTC が何を漏らすかも確認。プロキシは測れる区間を一つ増やすので、住宅 IP でも隠せません。",
      "seo_kw": "プロキシ チェック, プロキシ 検出, プロキシ 判定, VPN 検出, 遅延 プロキシ 検出, データセンター IP",
      "h1": "プロキシチェック",
      "og_sub": "間にプロキシがあると見抜かれる？",
      "intro": "プロキシは IP を隠せても、増えた区間は隠せません。Cloudflare は自分の接続で往復時間を測り、その接続の相手はプロキシです。ブラウザは全行程を測ります。ブラウザの値がずっと長ければ、IP がどれほどきれいでも間に何かがあります。二つの値と、サイトが見る他の手がかりを示します。",
      "focus_h": "往復時間",
      "docs": [
        [
          "遅延チェックの仕組みは？",
          "このサイトのエッジに小さな応答を何度か求め、送信から最初のバイトまでの最短を取ります。Cloudflare はあなたに応じた TCP 接続で測った往復時間を返します。プロキシなしなら近い値、プロキシ経由なら Cloudflare にはプロキシの区間しか見えません。"
        ],
        [
          "住宅 IP でも見抜かれる？",
          "はい。住宅 IP はデータセンター判定を通っても、増えた往復時間、他国の DNS リゾルバー、合わないタイムゾーン、WebRTC のアドレスで分かります。"
        ],
        [
          "「読み取れない」になるのはなぜ？",
          "HTTP/3 では TCP 接続がないので Cloudflare に往復時間がなく、測定のリクエストを止めるネットワークもあります。"
        ]
      ]
    },
    "ko": {
      "seo_title": "프록시 검사: 사이트가 프록시를 알아챌까요? · 당신은 누구",
      "seo_desc": "무료 프록시 검사: 브라우저가 잰 왕복 시간과 Cloudflare가 자기 연결에서 본 왕복 시간을 비교하고, IP가 데이터센터인지, DNS와 WebRTC가 무엇을 흘리는지 확인합니다. 프록시는 잴 수 있는 구간을 하나 더해서 가정용 IP로도 숨기지 못해요.",
      "seo_kw": "프록시 검사, 프록시 탐지, 프록시 사용 확인, VPN 탐지, 지연 프록시 탐지, 데이터센터 IP",
      "h1": "프록시 검사",
      "og_sub": "중간에 프록시가 있다는 걸 알아챌까요?",
      "intro": "프록시는 IP를 숨겨도 늘어난 구간은 숨기지 못해요. Cloudflare는 자기 연결에서 왕복 시간을 재는데, 그 연결의 상대는 프록시예요. 브라우저는 전체 경로를 잽니다. 브라우저 값이 훨씬 길면, IP가 아무리 깨끗해도 중간에 무언가 있어요. 두 값과 사이트가 보는 다른 단서를 보여 줍니다.",
      "focus_h": "왕복 시간",
      "docs": [
        [
          "지연 검사는 어떻게 하나요?",
          "이 사이트의 엣지에 작은 응답을 몇 번 요청해, 보낸 순간부터 첫 바이트까지의 최솟값을 씁니다. Cloudflare는 당신을 응대한 TCP 연결에서 잰 왕복 시간을 알려 줘요. 프록시가 없으면 비슷하고, 있으면 Cloudflare는 프록시 구간만 봅니다."
        ],
        [
          "가정용 IP도 들키나요?",
          "네. 가정용 IP는 데이터센터 검사를 통과해도, 늘어난 왕복 시간, 다른 나라의 DNS 리졸버, 안 맞는 시간대, WebRTC 주소로 드러나요."
        ],
        [
          "왜 가끔 '읽을 수 없음'이 나오나요?",
          "HTTP/3에서는 TCP 연결이 없어서 Cloudflare가 왕복 시간을 줄 수 없고, 측정 요청을 막는 네트워크도 있어요."
        ]
      ]
    },
    "de": {
      "seo_title": "Proxy-Check: Merken Websites, dass du einen Proxy nutzt? · Wer bist du?",
      "seo_desc": "Kostenloser Proxy-Check: die Laufzeit, die dein Browser misst, im Vergleich zu der, die Cloudflare auf seiner Verbindung sieht, ob deine IP zu einem Rechenzentrum gehört, dazu dein DNS und deine WebRTC-Adressen. Ein Proxy fügt einen Umweg hinzu, den Websites messen können, selbst bei einer sauberen IP von einem Privatanschluss.",
      "seo_kw": "Proxy Check, Proxy erkennen Test, bin ich hinter einem Proxy, VPN erkennen, Proxy Erkennung Latenz, Rechenzentrums-IP prüfen",
      "h1": "Proxy-Check",
      "og_sub": "Merken Websites, dass ein Proxy dazwischen sitzt?",
      "intro": "Ein Proxy versteckt deine IP, aber nicht den zusätzlichen Umweg. Cloudflare misst die Laufzeit auf seiner eigenen Verbindung, und die endet am Proxy; dein Browser misst den ganzen Weg. Ist die Zeit des Browsers deutlich länger, sitzt etwas dazwischen, ganz gleich, wie die IP aussieht. Hier siehst du beide Werte und die anderen Anzeichen, auf die Websites achten.",
      "focus_h": "Deine Laufzeit",
      "docs": [
        [
          "Wie funktioniert die Laufzeitmessung?",
          "Die Seite fragt den nächsten Cloudflare-Server dieser Website mehrmals nach einer winzigen Antwort und nimmt die schnellste, vom Absenden bis zum ersten zurückkommenden Byte. Cloudflare meldet die Laufzeit, die es auf der TCP-Verbindung zu dir gemessen hat. Ohne Proxy liegen beide nah beieinander; mit Proxy sieht Cloudflare nur den Teil ab dem Proxy."
        ],
        [
          "Kann eine IP von einem Privatanschluss trotzdem auffallen?",
          "Ja. Eine solche IP besteht den Rechenzentrums-Check, aber die zusätzliche Laufzeit, ein DNS-Server in einem anderen Land, eine unpassende Zeitzone und die WebRTC-Adressen können sie trotzdem verraten."
        ],
        [
          "Warum steht bei der Prüfung manchmal „nicht lesbar“?",
          "Über HTTP/3 gibt es keine TCP-Verbindung, also hat Cloudflare keine Laufzeit zu melden. Außerdem blockieren manche Netze die Messanfragen."
        ]
      ]
    },
    "fr": {
      "seo_title": "Détection de proxy : les sites voient-ils que vous passez par un proxy ? · Qui êtes-vous ?",
      "seo_desc": "Détection de proxy gratuite : le temps d’aller-retour mesuré par votre navigateur comparé à celui que Cloudflare voit sur sa connexion, le type de votre IP (datacenter ou non), votre DNS et vos adresses WebRTC. Un proxy ajoute un détour que les sites peuvent mesurer, même avec une IP résidentielle propre.",
      "seo_kw": "détection proxy, test proxy, suis-je derrière un proxy, détection VPN, détection proxy latence, vérifier IP datacenter",
      "h1": "Détection de proxy",
      "og_sub": "Les sites voient-ils qu’un proxy se glisse entre vous ?",
      "intro": "Un proxy cache votre IP, mais pas le détour qu’il ajoute au trajet. Cloudflare mesure l’aller-retour sur sa propre connexion, qui s’arrête au proxy ; votre navigateur mesure le trajet complet. Quand celui du navigateur est nettement plus long, il y a quelque chose entre les deux, quelle que soit l’allure de l’IP. Voici les deux mesures, avec les autres indices qu’utilisent les sites.",
      "focus_h": "Votre aller-retour",
      "docs": [
        [
          "Comment fonctionne la mesure de latence ?",
          "La page demande plusieurs fois une toute petite réponse au serveur Cloudflare de ce site et garde la plus rapide, du départ de la requête jusqu’au premier octet reçu. Cloudflare indique de son côté l’aller-retour mesuré sur la connexion TCP qui vous a servi. Sans proxy, les deux sont proches ; avec un proxy, Cloudflare ne voit que la partie entre le proxy et lui."
        ],
        [
          "Une IP résidentielle peut-elle quand même être repérée ?",
          "Oui. Une IP résidentielle passe le contrôle « datacenter », mais l’aller-retour supplémentaire, un serveur DNS dans un autre pays, un fuseau horaire qui ne correspond pas et les adresses WebRTC peuvent encore vous trahir."
        ],
        [
          "Pourquoi la mesure indique-t-elle parfois « lecture impossible » ?",
          "En HTTP/3, il n’y a pas de connexion TCP, donc Cloudflare n’a pas d’aller-retour à fournir. Et certains réseaux bloquent les requêtes de mesure."
        ]
      ]
    },
    "es": {
      "seo_title": "Test de proxy: ¿pueden los sitios saber que usas un proxy? · Quién eres",
      "seo_desc": "Test de proxy gratuito: el tiempo de ida y vuelta que mide tu navegador frente al que ve Cloudflare en su conexión, si tu IP es de un centro de datos, tus direcciones DNS y WebRTC. Un proxy añade un tramo que se puede medir, incluso con una IP residencial limpia.",
      "seo_kw": "test proxy, detectar proxy, estoy detrás de un proxy, detección VPN, detección de proxy por latencia, IP de centro de datos",
      "h1": "Test de proxy",
      "og_sub": "¿Notan los sitios un proxy en medio?",
      "intro": "Un proxy oculta tu IP, pero no el tramo de más. Cloudflare mide la ida y vuelta en su propia conexión, que acaba en el proxy; tu navegador mide el camino entero. Si la del navegador es mucho más larga, hay algo en medio, por limpia que parezca la IP. Aquí están las dos, con las demás pistas que miran los sitios.",
      "focus_h": "Tu ida y vuelta",
      "docs": [
        [
          "¿Cómo funciona la comprobación de latencia?",
          "La página pide varias veces una respuesta mínima al servidor de borde de este sitio y se queda con la más rápida, desde que sale la petición hasta el primer byte. Cloudflare informa de la ida y vuelta medida en la conexión TCP con que te atendió. Sin proxy se parecen; con proxy, Cloudflare solo ve su parte."
        ],
        [
          "¿También pillan una IP residencial?",
          "Sí. Pasa la comprobación de centro de datos, pero la ida y vuelta de más, un DNS en otro país, una zona horaria que no cuadra y las direcciones WebRTC la delatan igual."
        ],
        [
          "¿Por qué a veces sale «no se pudo leer»?",
          "Con HTTP/3 no hay conexión TCP, así que Cloudflare no tiene ida y vuelta que informar, y algunas redes bloquean las peticiones de medición."
        ]
      ]
    },
    "pt": {
      "seo_title": "Teste de proxy: os sites percebem que você usa proxy? · Quem é você",
      "seo_desc": "Teste de proxy gratuito: a ida e volta que seu navegador mede contra a que o Cloudflare vê na conexão dele, se seu IP é de data center, seus endereços de DNS e WebRTC. Um proxy acrescenta um trecho mensurável, mesmo com IP residencial limpo.",
      "seo_kw": "teste proxy, detectar proxy, estou atrás de um proxy, detecção de VPN, detecção de proxy por latência, IP de data center",
      "h1": "Teste de proxy",
      "og_sub": "Os sites percebem um proxy no meio?",
      "intro": "Um proxy esconde seu IP, mas não o trecho a mais. O Cloudflare mede a ida e volta na própria conexão, que termina no proxy; seu navegador mede o caminho todo. Se a do navegador for bem maior, tem algo no meio, por mais limpo que o IP pareça. Aqui estão as duas, com as outras pistas que os sites observam.",
      "focus_h": "Sua ida e volta",
      "docs": [
        [
          "Como funciona a verificação de latência?",
          "A página pede algumas vezes uma resposta mínima ao servidor de borda deste site e fica com a mais rápida, do envio ao primeiro byte. O Cloudflare informa a ida e volta medida na conexão TCP que te atendeu. Sem proxy, ficam próximas; com proxy, o Cloudflare só vê a parte do proxy."
        ],
        [
          "Um IP residencial também é pego?",
          "Sim. Ele passa na verificação de data center, mas a ida e volta a mais, um DNS em outro país, um fuso que não bate e os endereços do WebRTC o entregam do mesmo jeito."
        ],
        [
          "Por que às vezes aparece \"não deu para ler\"?",
          "No HTTP/3 não há conexão TCP, então o Cloudflare não tem ida e volta para informar, e algumas redes bloqueiam as requisições de medição."
        ]
      ]
    },
    "ru": {
      "seo_title": "Проверка на прокси: видят ли сайты, что вы за прокси? · Кто вы?",
      "seo_desc": "Бесплатная проверка на прокси: время отклика, которое измеряет браузер, рядом с тем, что Cloudflare видит на своём соединении; принадлежит ли ваш IP дата-центру; ваш DNS и адреса WebRTC. Прокси добавляет лишний участок пути, который сайты могут измерить, даже если IP чистый и домашний.",
      "seo_kw": "проверка на прокси, обнаружение прокси, я за прокси, проверка VPN, обнаружение прокси по задержке, проверка IP дата-центра",
      "h1": "Проверка на прокси",
      "og_sub": "Видят ли сайты, что между вами есть прокси?",
      "intro": "Прокси скрывает ваш IP, но не лишний участок пути. Cloudflare измеряет время отклика на своём соединении, а оно заканчивается на прокси; браузер измеряет весь путь целиком. Если у браузера заметно дольше, значит, между вами что-то есть, как бы ни выглядел IP. Здесь — оба значения и другие признаки, на которые смотрят сайты.",
      "focus_h": "Ваше время отклика",
      "docs": [
        [
          "Как работает проверка задержки?",
          "Страница несколько раз запрашивает у ближайшего сервера Cloudflare этого сайта крошечный ответ и берёт самый быстрый — от отправки запроса до первого байта ответа. Cloudflare со своей стороны сообщает время отклика, измеренное на TCP-соединении с вами. Без прокси значения близки; через прокси Cloudflare видит только участок от прокси до себя."
        ],
        [
          "Могут ли вычислить даже с домашним IP?",
          "Да. Домашний IP проходит проверку на дата-центр, но лишнее время отклика, DNS-сервер в другой стране, неподходящий часовой пояс и адреса WebRTC всё равно могут вас выдать."
        ],
        [
          "Почему иногда написано «не удалось прочитать»?",
          "По HTTP/3 нет TCP-соединения, поэтому Cloudflare нечего сообщить о времени отклика. Кроме того, некоторые сети блокируют измерительные запросы."
        ]
      ]
    }
  },
  "language-check": {
    "en": {
      "seo_title": "Browser Language Check: what language do sites think you speak? · Who Are You",
      "seo_desc": "Free browser language check: the languages your browser sends in its Accept-Language header and exposes in JavaScript, your locale, keyboard layout, voices and fonts, and whether they match the country of your IP.",
      "seo_kw": "browser language check, Accept-Language check, what is my browser language, navigator.languages, language IP mismatch, locale test",
      "h1": "Browser language check",
      "og_sub": "What language do sites think you speak?",
      "intro": "Every request your browser sends says which languages you read, and every page can read the same list in JavaScript, along with your locale, keyboard layout and the voices and fonts your system has. Sites compare them with where your IP is. Here is what yours say.",
      "focus_h": "Your language against your IP",
      "docs": [
        [
          "Where do sites get my language from?",
          "From the Accept-Language header on every request, from navigator.languages in JavaScript, and indirectly from the locale, the keyboard layout, the speech voices and the fonts your system installed."
        ],
        [
          "How do I change it?",
          "In the browser's language settings: put the language you want first. Changing only one place, like an extension that edits navigator.languages, leaves the header as it was, and the two disagree."
        ],
        [
          "Why is English only \"info\"?",
          "English is used everywhere, so it says little about where you are. Other languages point to a country, and a mismatch with the IP is a hint."
        ]
      ]
    },
    "zh-CN": {
      "seo_title": "浏览器语言检测：网站以为你说什么语言 · 你是谁",
      "seo_desc": "免费浏览器语言检测：查看浏览器在 Accept-Language 请求头里发出、在 JavaScript 里暴露的语言，以及区域设置、键盘布局、语音和字体，看它们和 IP 所在国家对不对得上。",
      "seo_kw": "浏览器语言检测, Accept-Language 检测, 浏览器语言, navigator.languages, 语言与 IP 不一致, 区域设置检测",
      "h1": "浏览器语言检测",
      "og_sub": "网站以为你说什么语言？",
      "intro": "浏览器发出的每个请求都会说明你读哪些语言，任何网页也能在 JavaScript 里读到同一份列表，再加上区域设置、键盘布局，以及系统装了哪些语音和字体。网站会拿它们和 IP 所在地对照。下面是你的。",
      "focus_h": "你的语言和 IP",
      "docs": [
        [
          "网站从哪里知道我的语言？",
          "每个请求里的 Accept-Language 请求头、JavaScript 里的 navigator.languages，还有区域设置、键盘布局、语音朗读和系统装的字体，都会间接透露。"
        ],
        [
          "怎么改？",
          "在浏览器的语言设置里，把想要的语言放到第一位。只改一处（比如插件改了 navigator.languages）会让请求头还是原样，两边对不上反而更显眼。"
        ],
        [
          "为什么英文只算「提示」？",
          "英文全世界都在用，说明不了你在哪。其他语言会指向某个国家，和 IP 对不上时才算破绽。"
        ]
      ]
    },
    "zh-TW": {
      "seo_title": "瀏覽器語言檢測：網站以為你說什麼語言 · 你是誰",
      "seo_desc": "免費瀏覽器語言檢測：查看瀏覽器在 Accept-Language 請求標頭送出、在 JavaScript 裡暴露的語言，以及地區設定、鍵盤配置、語音和字型，看它們和 IP 所在國家對不對得上。",
      "seo_kw": "瀏覽器語言檢測, Accept-Language 檢測, 瀏覽器語言, navigator.languages, 語言與 IP 不一致",
      "h1": "瀏覽器語言檢測",
      "og_sub": "網站以為你說什麼語言？",
      "intro": "瀏覽器送出的每個請求都會說明你讀哪些語言，任何網頁也能在 JavaScript 裡讀到同一份清單，再加上地區設定、鍵盤配置，以及系統裝了哪些語音和字型。網站會拿它們和 IP 所在地對照。下面是你的。",
      "focus_h": "你的語言和 IP",
      "docs": [
        [
          "網站從哪裡知道我的語言？",
          "每個請求裡的 Accept-Language 請求標頭、JavaScript 裡的 navigator.languages，還有地區設定、鍵盤配置、語音朗讀和系統裝的字型，都會間接透露。"
        ],
        [
          "怎麼改？",
          "在瀏覽器的語言設定裡，把想要的語言放到第一位。只改一處（例如擴充功能改了 navigator.languages）會讓請求標頭還是原樣，兩邊對不上反而更顯眼。"
        ],
        [
          "為什麼英文只算「提示」？",
          "英文全世界都在用，說明不了你在哪。其他語言會指向某個國家，和 IP 對不上時才算破綻。"
        ]
      ]
    },
    "ja": {
      "seo_title": "ブラウザ言語チェック：サイトはあなたを何語の人だと思う？ · あなたは誰",
      "seo_desc": "無料ブラウザ言語チェック：Accept-Language ヘッダーと JavaScript に出る言語、ロケール、キーボード配列、音声、フォントを調べ、IP の国と合うかを確認します。",
      "seo_kw": "ブラウザ 言語 チェック, Accept-Language, navigator.languages, 言語 IP 不一致, ロケール",
      "h1": "ブラウザ言語チェック",
      "og_sub": "サイトはあなたを何語の人だと思う？",
      "intro": "ブラウザが送るリクエストには読める言語が書かれ、どのページも JavaScript で同じ一覧やロケール、キーボード配列、システムの音声とフォントを読めます。サイトはそれを IP の場所と照らし合わせます。あなたの場合はこうです。",
      "focus_h": "言語と IP",
      "docs": [
        [
          "サイトはどこから言語を知る？",
          "毎回のリクエストの Accept-Language ヘッダー、JavaScript の navigator.languages、さらにロケール、キーボード配列、音声、インストール済みフォントからも間接的に分かります。"
        ],
        [
          "どう変える？",
          "ブラウザの言語設定で、使いたい言語を一番上に。拡張機能で navigator.languages だけ変えるとヘッダーはそのままで、食い違いがかえって目立ちます。"
        ],
        [
          "英語はなぜ「情報」だけ？",
          "英語は世界中で使われ、居場所の手がかりになりません。他の言語は国を指すので、IP と合わなければヒントになります。"
        ]
      ]
    },
    "ko": {
      "seo_title": "브라우저 언어 검사: 사이트는 당신이 무슨 말을 한다고 볼까요? · 당신은 누구",
      "seo_desc": "무료 브라우저 언어 검사: Accept-Language 헤더와 JavaScript에 드러나는 언어, 로캘, 키보드 배열, 음성, 글꼴을 보고 IP 국가와 맞는지 확인합니다.",
      "seo_kw": "브라우저 언어 검사, Accept-Language, navigator.languages, 언어 IP 불일치, 로캘",
      "h1": "브라우저 언어 검사",
      "og_sub": "사이트는 당신이 무슨 말을 한다고 볼까요?",
      "intro": "브라우저가 보내는 모든 요청에는 읽는 언어가 적혀 있고, 어떤 페이지든 JavaScript로 같은 목록과 로캘, 키보드 배열, 시스템의 음성과 글꼴을 읽을 수 있어요. 사이트는 이것을 IP 위치와 비교합니다. 당신의 결과예요.",
      "focus_h": "언어와 IP",
      "docs": [
        [
          "사이트는 내 언어를 어디서 알까요?",
          "모든 요청의 Accept-Language 헤더, JavaScript의 navigator.languages, 그리고 로캘, 키보드 배열, 음성, 설치된 글꼴에서도 간접적으로 드러나요."
        ],
        [
          "어떻게 바꾸나요?",
          "브라우저 언어 설정에서 원하는 언어를 맨 위로. 확장 프로그램으로 navigator.languages만 바꾸면 헤더는 그대로라 어긋남이 오히려 눈에 띄어요."
        ],
        [
          "영어는 왜 '정보'일 뿐인가요?",
          "영어는 어디서나 쓰여 위치를 말해 주지 않아요. 다른 언어는 나라를 가리키니 IP와 안 맞으면 단서가 됩니다."
        ]
      ]
    },
    "de": {
      "seo_title": "Browsersprache prüfen: Welche Sprache sprichst du für Websites? · Wer bist du?",
      "seo_desc": "Kostenloser Check der Browsersprache: die Sprachen, die dein Browser im Accept-Language-Header sendet und in JavaScript zeigt, dein Gebietsschema, Tastaturlayout, Vorlesestimmen und Schriften, und ob sie zum Land deiner IP passen.",
      "seo_kw": "Browsersprache prüfen, Accept-Language prüfen, welche Sprache hat mein Browser, navigator.languages, Sprache IP Abweichung, Gebietsschema Test",
      "h1": "Browsersprache prüfen",
      "og_sub": "Welche Sprache sprichst du für Websites?",
      "intro": "Jede Anfrage deines Browsers sagt, welche Sprachen du liest, und jede Seite kann dieselbe Liste in JavaScript lesen, dazu dein Gebietsschema, dein Tastaturlayout sowie die Stimmen und Schriften deines Systems. Websites vergleichen das mit dem Land deiner IP. Hier siehst du, was deine verraten.",
      "focus_h": "Deine Sprache im Vergleich zur IP",
      "docs": [
        [
          "Woher kennen Websites meine Sprache?",
          "Aus dem Accept-Language-Header, der bei jeder Anfrage mitgeht, aus navigator.languages in JavaScript und indirekt aus Gebietsschema, Tastaturlayout, Vorlesestimmen und den Schriften, die auf deinem System installiert sind."
        ],
        [
          "Wie ändere ich sie?",
          "In den Spracheinstellungen des Browsers: Setz die gewünschte Sprache an die erste Stelle. Änderst du nur eine Stelle, etwa mit einer Erweiterung, die navigator.languages umschreibt, bleibt der Header, wie er war, und beide passen nicht mehr zusammen."
        ],
        [
          "Warum ist Englisch nur ein Hinweis?",
          "Englisch wird überall genutzt und verrät kaum, wo du bist. Andere Sprachen deuten auf ein Land, und eine Abweichung von der IP wird zum Indiz."
        ]
      ]
    },
    "fr": {
      "seo_title": "Vérification de la langue du navigateur : quelle langue les sites vous attribuent-ils ? · Qui êtes-vous ?",
      "seo_desc": "Vérification gratuite de la langue du navigateur : les langues que votre navigateur annonce dans l’en-tête Accept-Language et dans JavaScript, vos paramètres régionaux, la disposition du clavier, les voix et les polices, et si tout cela correspond au pays de votre IP.",
      "seo_kw": "langue du navigateur, vérifier Accept-Language, quelle est la langue de mon navigateur, navigator.languages, langue IP différente, test paramètres régionaux",
      "h1": "Vérification de la langue du navigateur",
      "og_sub": "Quelle langue les sites pensent-ils que vous parlez ?",
      "intro": "Chaque requête de votre navigateur indique les langues que vous lisez, et toute page peut lire la même liste dans JavaScript, ainsi que vos paramètres régionaux, la disposition de votre clavier, et les voix et polices de votre système. Les sites les comparent avec le pays de votre IP. Voici ce que disent les vôtres.",
      "focus_h": "Votre langue face à votre IP",
      "docs": [
        [
          "D’où les sites tirent-ils ma langue ?",
          "De l’en-tête Accept-Language envoyé avec chaque requête, de navigator.languages dans JavaScript, et indirectement des paramètres régionaux, de la disposition du clavier, des voix de synthèse et des polices installées sur votre système."
        ],
        [
          "Comment la changer ?",
          "Dans les réglages de langue du navigateur : placez la langue voulue en premier. Si vous ne changez qu’un seul endroit, par exemple avec une extension qui modifie navigator.languages, l’en-tête reste inchangé et les deux ne concordent plus."
        ],
        [
          "Pourquoi l’anglais n’est-il qu’une « info » ?",
          "L’anglais est utilisé partout : il ne dit presque rien de l’endroit où vous êtes. Les autres langues renvoient à un pays, et un décalage avec l’IP devient un indice."
        ]
      ]
    },
    "es": {
      "seo_title": "Test de idioma del navegador: ¿qué idioma creen los sitios que hablas? · Quién eres",
      "seo_desc": "Test gratuito de idioma del navegador: los idiomas de la cabecera Accept-Language y de JavaScript, la configuración regional, el teclado, las voces y las fuentes, y si cuadran con el país de tu IP.",
      "seo_kw": "test idioma navegador, Accept-Language, navigator.languages, idioma IP distinto, configuración regional",
      "h1": "Test de idioma del navegador",
      "og_sub": "¿Qué idioma creen los sitios que hablas?",
      "intro": "Cada petición de tu navegador dice qué idiomas lees, y cualquier página puede leer la misma lista en JavaScript, junto con tu configuración regional, tu teclado y las voces y fuentes de tu sistema. Los sitios lo comparan con dónde está tu IP. Esto es lo tuyo.",
      "focus_h": "Tu idioma frente a tu IP",
      "docs": [
        [
          "¿De dónde sacan los sitios mi idioma?",
          "De la cabecera Accept-Language de cada petición, de navigator.languages en JavaScript, e indirectamente de la configuración regional, el teclado, las voces y las fuentes instaladas."
        ],
        [
          "¿Cómo lo cambio?",
          "En los ajustes de idioma del navegador, pon primero el que quieras. Cambiar solo un sitio, como navigator.languages con una extensión, deja la cabecera igual y la diferencia se nota más."
        ],
        [
          "¿Por qué el inglés es solo «info»?",
          "El inglés se usa en todas partes y dice poco de dónde estás. Los demás idiomas apuntan a un país; si no cuadra con la IP, es una pista."
        ]
      ]
    },
    "pt": {
      "seo_title": "Teste de idioma do navegador: que idioma os sites acham que você fala? · Quem é você",
      "seo_desc": "Teste gratuito de idioma do navegador: os idiomas do cabeçalho Accept-Language e do JavaScript, a localidade, o teclado, as vozes e as fontes, e se batem com o país do seu IP.",
      "seo_kw": "teste idioma navegador, Accept-Language, navigator.languages, idioma IP diferente, localidade",
      "h1": "Teste de idioma do navegador",
      "og_sub": "Que idioma os sites acham que você fala?",
      "intro": "Cada requisição do navegador diz quais idiomas você lê, e qualquer página lê a mesma lista no JavaScript, junto com sua localidade, seu teclado e as vozes e fontes do sistema. Os sites comparam isso com onde está seu IP. Aqui está o seu.",
      "focus_h": "Seu idioma contra seu IP",
      "docs": [
        [
          "De onde os sites tiram meu idioma?",
          "Do cabeçalho Accept-Language de cada requisição, do navigator.languages no JavaScript e, indiretamente, da localidade, do teclado, das vozes e das fontes instaladas."
        ],
        [
          "Como mudo?",
          "Nas configurações de idioma do navegador, coloque o que quiser em primeiro. Mudar só um lugar, como o navigator.languages por extensão, deixa o cabeçalho igual, e a diferença chama mais atenção."
        ],
        [
          "Por que o inglês é só «info»?",
          "O inglês é usado em todo lugar e diz pouco sobre onde você está. Os outros idiomas apontam um país; se não bate com o IP, é uma pista."
        ]
      ]
    },
    "ru": {
      "seo_title": "Проверка языка браузера: на каком языке вы говорите для сайтов? · Кто вы?",
      "seo_desc": "Бесплатная проверка языка браузера: языки, которые браузер отправляет в заголовке Accept-Language и показывает в JavaScript, локаль, раскладка клавиатуры, голоса и шрифты — и совпадают ли они со страной вашего IP.",
      "seo_kw": "проверка языка браузера, проверить Accept-Language, какой язык у моего браузера, navigator.languages, язык не совпадает с IP, проверка локали",
      "h1": "Проверка языка браузера",
      "og_sub": "На каком языке вы говорите для сайтов?",
      "intro": "Каждый запрос браузера сообщает, на каких языках вы читаете, а любая страница может прочитать тот же список в JavaScript — вместе с локалью, раскладкой клавиатуры, голосами и шрифтами вашей системы. Сайты сверяют всё это со страной вашего IP. Здесь — что говорят ваши.",
      "focus_h": "Ваш язык и ваш IP",
      "docs": [
        [
          "Откуда сайты знают мой язык?",
          "Из заголовка Accept-Language, который уходит с каждым запросом, из navigator.languages в JavaScript и косвенно — из локали, раскладки клавиатуры, голосов озвучки и шрифтов, установленных в системе."
        ],
        [
          "Как его поменять?",
          "В языковых настройках браузера: поставьте нужный язык первым. Если поменять только в одном месте — например, расширением, которое переписывает navigator.languages, — заголовок останется прежним, и они разойдутся."
        ],
        [
          "Почему английский — только «для сведения»?",
          "Английским пользуются везде, поэтому он почти ничего не говорит о том, где вы. Другие языки указывают на страну, и несовпадение с IP становится уликой."
        ]
      ]
    }
  },
  "canvas-fingerprint": {
    "en": {
      "seo_title": "Canvas Fingerprint Test: what your canvas, WebGL and audio fingerprints are · Who Are You",
      "seo_desc": "Free canvas fingerprint test: the hashes of how your system draws a canvas, renders WebGL and processes audio, whether your browser adds noise to them, and the combined fingerprint ID sites use to recognize you without cookies.",
      "seo_kw": "canvas fingerprint test, canvas fingerprinting, WebGL fingerprint, audio fingerprint, canvas noise, anti canvas fingerprint",
      "h1": "Canvas fingerprint test",
      "og_sub": "How your computer draws gives it away",
      "intro": "Ask two computers to draw the same text and shapes, and the pixels come out slightly different: the graphics card, the driver, the fonts and the anti-aliasing all leave a mark. Sites hash that drawing into a fingerprint. Here are yours, and whether your browser scrambles them.",
      "focus_h": "Your canvas fingerprint",
      "docs": [
        [
          "What is a canvas fingerprint?",
          "A page draws text and shapes on an invisible canvas, reads the pixels back and hashes them. The result is the same every time on your machine and differs between machines, so it works like an ID."
        ],
        [
          "How do I stop it?",
          "Use a browser that adds random noise to canvas, WebGL and audio, like Brave by default or Firefox with resistFingerprinting. The \"fingerprint protection\" row shows whether two drawings came out different."
        ],
        [
          "Do privacy extensions help?",
          "Some do, by wrapping the drawing functions. That can itself be noticed: the browser environment check flags replaced functions."
        ]
      ]
    },
    "zh-CN": {
      "seo_title": "Canvas 指纹检测：你的 Canvas、WebGL 和音频指纹 · 你是谁",
      "seo_desc": "免费 Canvas 指纹检测：查看你的系统画 Canvas、渲染 WebGL、处理音频得出的哈希，浏览器有没有给它们加干扰，以及网站不用 Cookie 就能认出你的综合指纹 ID。",
      "seo_kw": "Canvas 指纹检测, Canvas 指纹, WebGL 指纹, 音频指纹, Canvas 防指纹, Canvas 噪声, 指纹识别",
      "h1": "Canvas 指纹检测",
      "og_sub": "电脑怎么画图，就会暴露它是谁",
      "intro": "让两台电脑画同样的文字和图形，像素会有细微差别：显卡、驱动、字体、抗锯齿都会留下痕迹。网站把这张图算成哈希，就是指纹。下面是你的，以及浏览器有没有打乱它们。",
      "focus_h": "你的 Canvas 指纹",
      "docs": [
        [
          "Canvas 指纹是什么？",
          "网页在看不见的画布上画文字和图形，再把像素读回来算哈希。同一台机器每次都一样，不同机器各不相同，所以能当 ID 用。"
        ],
        [
          "怎么防？",
          "用会给 Canvas、WebGL 和音频加随机干扰的浏览器，比如默认就开的 Brave，或开了 resistFingerprinting 的 Firefox。「防指纹」那一行会显示两次画出来的结果是否不同。"
        ],
        [
          "隐私插件有用吗？",
          "有些有用，它们把画图函数包了一层。但这本身也可能被发现：浏览器环境检测会把被替换的函数标出来。"
        ]
      ]
    },
    "zh-TW": {
      "seo_title": "Canvas 指紋檢測：你的 Canvas、WebGL 和音訊指紋 · 你是誰",
      "seo_desc": "免費 Canvas 指紋檢測：查看你的系統畫 Canvas、轉譯 WebGL、處理音訊得出的雜湊，瀏覽器有沒有替它們加干擾，以及網站不用 Cookie 就能認出你的綜合指紋 ID。",
      "seo_kw": "Canvas 指紋檢測, Canvas 指紋, WebGL 指紋, 音訊指紋, Canvas 防指紋",
      "h1": "Canvas 指紋檢測",
      "og_sub": "電腦怎麼畫圖，就會暴露它是誰",
      "intro": "讓兩台電腦畫同樣的文字和圖形，像素會有細微差異：顯示卡、驅動、字型、反鋸齒都會留下痕跡。網站把這張圖算成雜湊，就是指紋。下面是你的，以及瀏覽器有沒有打亂它們。",
      "focus_h": "你的 Canvas 指紋",
      "docs": [
        [
          "Canvas 指紋是什麼？",
          "網頁在看不見的畫布上畫文字和圖形，再把像素讀回來算雜湊。同一台機器每次都一樣，不同機器各不相同，所以能當 ID 用。"
        ],
        [
          "怎麼防？",
          "用會替 Canvas、WebGL 和音訊加隨機干擾的瀏覽器，例如預設就開的 Brave，或開了 resistFingerprinting 的 Firefox。「防指紋」那一列會顯示兩次畫出來的結果是否不同。"
        ],
        [
          "隱私擴充功能有用嗎？",
          "有些有用，它們把繪圖函式包了一層。但這本身也可能被發現：瀏覽器環境檢測會把被替換的函式標出來。"
        ]
      ]
    },
    "ja": {
      "seo_title": "Canvas フィンガープリント検査：Canvas・WebGL・音声の指紋 · あなたは誰",
      "seo_desc": "無料 Canvas フィンガープリント検査：Canvas の描画、WebGL、音声処理から得られるハッシュ、ブラウザがノイズを加えているか、Cookie なしで識別に使われる総合 ID を表示します。",
      "seo_kw": "Canvas フィンガープリント, Canvas 指紋 検査, WebGL フィンガープリント, 音声 指紋, Canvas ノイズ",
      "h1": "Canvas フィンガープリント検査",
      "og_sub": "描き方でコンピュータがばれる",
      "intro": "二台のコンピュータに同じ文字と図形を描かせると、ピクセルがわずかに違います。GPU、ドライバ、フォント、アンチエイリアスが跡を残すからです。サイトはその絵をハッシュにして指紋にします。あなたの指紋と、ブラウザがそれを乱しているかを示します。",
      "focus_h": "Canvas の指紋",
      "docs": [
        [
          "Canvas フィンガープリントとは？",
          "ページが見えないキャンバスに文字と図形を描き、ピクセルを読み戻してハッシュにします。同じマシンなら毎回同じ、マシンが違えば違うので ID になります。"
        ],
        [
          "防ぐには？",
          "Canvas・WebGL・音声にランダムなノイズを入れるブラウザを使う：標準で有効な Brave や、resistFingerprinting を有効にした Firefox。「フィンガープリント保護」の行で二回の描画が違ったか分かります。"
        ],
        [
          "プライバシー拡張機能は効く？",
          "描画関数を包むことで効くものもあります。ただしそれ自体が見つかることもあり、ブラウザ環境チェックは差し替えられた関数を示します。"
        ]
      ]
    },
    "ko": {
      "seo_title": "Canvas 지문 검사: Canvas·WebGL·오디오 지문 · 당신은 누구",
      "seo_desc": "무료 Canvas 지문 검사: 시스템이 Canvas를 그리고 WebGL을 렌더링하고 오디오를 처리한 해시, 브라우저가 노이즈를 넣는지, 쿠키 없이 당신을 알아보는 종합 지문 ID를 보여 줍니다.",
      "seo_kw": "Canvas 지문 검사, Canvas 핑거프린팅, WebGL 지문, 오디오 지문, Canvas 노이즈",
      "h1": "Canvas 지문 검사",
      "og_sub": "그리는 방식이 컴퓨터를 드러내요",
      "intro": "두 컴퓨터에 같은 글자와 도형을 그리게 하면 픽셀이 조금씩 달라요. 그래픽 카드, 드라이버, 글꼴, 안티앨리어싱이 흔적을 남기거든요. 사이트는 그 그림을 해시로 만들어 지문으로 씁니다. 당신의 지문과, 브라우저가 그걸 흐트러뜨리는지 보여 줍니다.",
      "focus_h": "Canvas 지문",
      "docs": [
        [
          "Canvas 지문이란?",
          "페이지가 보이지 않는 캔버스에 글자와 도형을 그리고 픽셀을 다시 읽어 해시를 만들어요. 같은 기계면 매번 같고 기계마다 달라서 ID처럼 쓰입니다."
        ],
        [
          "어떻게 막나요?",
          "Canvas·WebGL·오디오에 무작위 노이즈를 넣는 브라우저를 쓰세요. 기본으로 켜진 Brave나 resistFingerprinting을 켠 Firefox. '지문 보호' 행에서 두 번 그린 결과가 달랐는지 볼 수 있어요."
        ],
        [
          "개인정보 확장 프로그램은 도움이 되나요?",
          "그리기 함수를 감싸서 효과가 있는 것도 있어요. 다만 그 자체가 드러날 수 있어서, 브라우저 환경 검사가 바뀐 함수를 표시합니다."
        ]
      ]
    },
    "de": {
      "seo_title": "Canvas-Fingerprint-Test: deine Canvas-, WebGL- und Audio-Fingerabdrücke · Wer bist du?",
      "seo_desc": "Kostenloser Canvas-Fingerprint-Test: die Codes daraus, wie dein System ein Canvas zeichnet, WebGL rendert und Audio verarbeitet, ob dein Browser sie verrauscht, und die Gesamt-ID, mit der Websites dich ohne Cookies wiedererkennen.",
      "seo_kw": "Canvas Fingerprint Test, Canvas Fingerprinting, WebGL Fingerprint, Audio Fingerprint, Canvas Rauschen, Canvas Fingerprint verhindern",
      "h1": "Canvas-Fingerprint-Test",
      "og_sub": "Wie dein Computer zeichnet, verrät ihn",
      "intro": "Lass zwei Computer denselben Text und dieselben Formen zeichnen, und die Pixel fallen leicht unterschiedlich aus: Grafikkarte, Treiber, Schriften und Kantenglättung hinterlassen alle ihre Spur. Websites machen aus dieser Zeichnung einen festen Code, den Fingerabdruck. Hier siehst du deine und ob dein Browser sie verwürfelt.",
      "focus_h": "Dein Canvas-Fingerabdruck",
      "docs": [
        [
          "Was ist ein Canvas-Fingerabdruck?",
          "Eine Seite zeichnet Text und Formen auf ein unsichtbares Canvas, liest die Pixel zurück und macht daraus einen Code. Auf deinem Gerät kommt jedes Mal dasselbe heraus, auf anderen Geräten etwas anderes. Damit funktioniert er wie eine ID."
        ],
        [
          "Wie verhindere ich das?",
          "Nutze einen Browser, der Canvas, WebGL und Audio zufällig verrauscht, etwa Brave (standardmäßig) oder Firefox mit resistFingerprinting. Die Zeile „Fingerabdruckschutz“ zeigt, ob zwei gleiche Zeichnungen unterschiedlich herauskamen."
        ],
        [
          "Helfen Datenschutz-Erweiterungen?",
          "Manche schon, indem sie die Zeichenfunktionen umhüllen. Das kann aber selbst auffallen: Der Browser-Umgebungs-Check markiert ersetzte Funktionen."
        ]
      ]
    },
    "fr": {
      "seo_title": "Test d’empreinte canvas : vos empreintes canvas, WebGL et audio · Qui êtes-vous ?",
      "seo_desc": "Test gratuit d’empreinte canvas : les codes tirés de la façon dont votre système dessine un canvas, affiche du WebGL et traite l’audio, si votre navigateur y ajoute du bruit, et l’ID d’empreinte combiné qui permet aux sites de vous reconnaître sans cookies.",
      "seo_kw": "test empreinte canvas, canvas fingerprinting, empreinte WebGL, empreinte audio, bruit canvas, anti empreinte canvas",
      "h1": "Test d’empreinte canvas",
      "og_sub": "La façon dont votre ordinateur dessine le trahit",
      "intro": "Demandez à deux ordinateurs de dessiner le même texte et les mêmes formes : les pixels ne seront pas tout à fait identiques. La carte graphique, le pilote, les polices et le lissage laissent chacun leur marque. Les sites transforment ce dessin en un code fixe qui sert d’empreinte. Voici les vôtres, et si votre navigateur les brouille.",
      "focus_h": "Votre empreinte canvas",
      "docs": [
        [
          "Qu’est-ce qu’une empreinte canvas ?",
          "Une page dessine du texte et des formes sur un canvas invisible, relit les pixels et en tire un code. Le résultat est le même à chaque fois sur votre machine et diffère d’une machine à l’autre : il fonctionne donc comme un ID."
        ],
        [
          "Comment l’éviter ?",
          "Utilisez un navigateur qui ajoute un bruit aléatoire au canvas, au WebGL et à l’audio, comme Brave par défaut ou Firefox avec resistFingerprinting. La ligne « Protection anti-empreinte » montre si deux dessins identiques sont sortis différents."
        ],
        [
          "Les extensions de confidentialité aident-elles ?",
          "Certaines, oui, en enveloppant les fonctions de dessin. Mais cela peut se remarquer : la vérification de l’environnement du navigateur signale les fonctions remplacées."
        ]
      ]
    },
    "es": {
      "seo_title": "Test de huella Canvas: tus huellas Canvas, WebGL y de audio · Quién eres",
      "seo_desc": "Test gratuito de huella Canvas: los hashes de cómo tu sistema dibuja un canvas, renderiza WebGL y procesa audio, si tu navegador les añade ruido, y el ID combinado con que los sitios te reconocen sin cookies.",
      "seo_kw": "test huella canvas, canvas fingerprinting, huella WebGL, huella de audio, ruido canvas",
      "h1": "Test de huella Canvas",
      "og_sub": "Cómo dibuja tu ordenador lo delata",
      "intro": "Pide a dos ordenadores que dibujen el mismo texto y las mismas formas y los píxeles saldrán algo distintos: la gráfica, el driver, las fuentes y el suavizado dejan marca. Los sitios convierten ese dibujo en un hash: una huella. Aquí están las tuyas, y si tu navegador las altera.",
      "focus_h": "Tu huella Canvas",
      "docs": [
        [
          "¿Qué es una huella Canvas?",
          "Una página dibuja texto y formas en un canvas invisible, lee los píxeles y calcula un hash. En tu máquina sale siempre igual y en otras sale distinto, así que sirve de ID."
        ],
        [
          "¿Cómo lo evito?",
          "Con un navegador que añade ruido aleatorio a Canvas, WebGL y audio: Brave de serie o Firefox con resistFingerprinting. La fila «protección de huella» muestra si dos dibujos salieron distintos."
        ],
        [
          "¿Sirven las extensiones de privacidad?",
          "Algunas, envolviendo las funciones de dibujo. Eso también se puede notar: el test de entorno del navegador marca las funciones reemplazadas."
        ]
      ]
    },
    "pt": {
      "seo_title": "Teste de impressão digital Canvas: suas impressões Canvas, WebGL e de áudio · Quem é você",
      "seo_desc": "Teste gratuito de impressão digital Canvas: os hashes de como seu sistema desenha um canvas, renderiza WebGL e processa áudio, se o navegador adiciona ruído, e o ID combinado com que os sites te reconhecem sem cookies.",
      "seo_kw": "teste impressão digital canvas, canvas fingerprinting, impressão WebGL, impressão de áudio, ruído canvas",
      "h1": "Teste de impressão digital Canvas",
      "og_sub": "O jeito que seu computador desenha o entrega",
      "intro": "Peça a dois computadores para desenhar o mesmo texto e as mesmas formas e os pixels saem um pouco diferentes: placa de vídeo, driver, fontes e suavização deixam marca. Os sites transformam esse desenho num hash: uma impressão digital. Aqui estão as suas, e se o navegador as embaralha.",
      "focus_h": "Sua impressão Canvas",
      "docs": [
        [
          "O que é uma impressão digital Canvas?",
          "Uma página desenha texto e formas num canvas invisível, lê os pixels de volta e calcula um hash. Na sua máquina sai sempre igual e em outras sai diferente, então serve de ID."
        ],
        [
          "Como evitar?",
          "Com um navegador que adiciona ruído aleatório a Canvas, WebGL e áudio: o Brave por padrão ou o Firefox com resistFingerprinting. A linha «proteção de impressão» mostra se dois desenhos saíram diferentes."
        ],
        [
          "Extensões de privacidade ajudam?",
          "Algumas, envolvendo as funções de desenho. Isso também pode ser notado: o teste de ambiente do navegador marca funções substituídas."
        ]
      ]
    },
    "ru": {
      "seo_title": "Проверка canvas-отпечатка: ваши отпечатки canvas, WebGL и аудио · Кто вы?",
      "seo_desc": "Бесплатная проверка canvas-отпечатка: коды, полученные из того, как ваша система рисует canvas, выводит WebGL и обрабатывает звук, добавляет ли браузер в них шум, и общий ID отпечатка, по которому сайты узнают вас без cookie.",
      "seo_kw": "проверка canvas отпечатка, canvas fingerprinting, WebGL отпечаток, аудио отпечаток, шум canvas, защита от canvas fingerprint",
      "h1": "Проверка canvas-отпечатка",
      "og_sub": "Компьютер выдаёт себя тем, как рисует",
      "intro": "Попросите два компьютера нарисовать один и тот же текст и фигуры — пиксели выйдут чуть-чуть разными: свой след оставляют видеокарта, драйвер, шрифты и сглаживание. Сайты превращают такой рисунок в постоянный код — отпечаток. Здесь — ваши отпечатки и перемешивает ли их браузер.",
      "focus_h": "Ваш canvas-отпечаток",
      "docs": [
        [
          "Что такое canvas-отпечаток?",
          "Страница рисует текст и фигуры на невидимом canvas, считывает пиксели и получает из них код. На вашем устройстве он каждый раз одинаковый, а на других — другой, поэтому работает как ID."
        ],
        [
          "Как от этого защититься?",
          "Используйте браузер, который добавляет случайный шум в canvas, WebGL и аудио, — например, Brave (по умолчанию) или Firefox с resistFingerprinting. Строка «Защита от отпечатков» показывает, вышли ли два одинаковых рисунка разными."
        ],
        [
          "Помогают ли расширения для приватности?",
          "Некоторые — да: они оборачивают функции рисования. Но это само по себе заметно: проверка окружения браузера отмечает подменённые функции."
        ]
      ]
    }
  },
  "user-agent": {
    "en": {
      "seo_title": "User Agent Check: what browser and system do sites think you use? · Who Are You",
      "seo_desc": "Free user agent check: your User-Agent string, client hints (Sec-CH-UA, platform), the system and browser they claim, and whether the JavaScript engine, graphics card and hints agree with them.",
      "seo_kw": "user agent check, what is my user agent, user agent string, client hints, Sec-CH-UA, user agent spoofing check",
      "h1": "User agent check",
      "og_sub": "What browser and system do sites think you use?",
      "intro": "Every request names your browser and system, once in the User-Agent string and again, in Chromium browsers, in client hints. Pages can cross-check that against the JavaScript engine and the graphics card. Here is what yours claims, and whether the rest agrees.",
      "focus_h": "Your user agent against your system",
      "docs": [
        [
          "What is a user agent?",
          "A line of text your browser sends with every request, naming the browser, its version and your system. Chromium browsers also send client hints, a newer, structured version of the same information."
        ],
        [
          "Why does it say Windows 10 on Windows 11?",
          "Browsers froze the user agent at Windows 10 (and macOS at 10.15) for privacy. The real version comes from client hints, which is what this page shows."
        ],
        [
          "Can I fake it?",
          "You can change the string, but the JavaScript engine, the graphics card and client hints usually tell a different story; the checks on this page show where."
        ]
      ]
    },
    "zh-CN": {
      "seo_title": "UA 检测：网站以为你用什么浏览器和系统 · 你是谁",
      "seo_desc": "免费 User-Agent 检测：查看你的 UA 字符串、Client Hints（Sec-CH-UA、平台），它们声称的系统和浏览器，以及 JS 引擎、显卡和 Client Hints 跟它们对不对得上。",
      "seo_kw": "UA 检测, User-Agent 检测, 我的 UA, UA 查询, Client Hints, Sec-CH-UA, UA 伪装检测, 浏览器 UA",
      "h1": "UA 检测",
      "og_sub": "网站以为你用什么浏览器和系统？",
      "intro": "每个请求都会说明你的浏览器和系统：一次在 User-Agent 字符串里，在 Chromium 系浏览器里还会在 Client Hints 里再说一次。网页可以拿它们和 JS 引擎、显卡交叉核对。下面是你的 UA 声称的，以及其他信息认不认。",
      "focus_h": "你的 UA 和真实系统",
      "docs": [
        [
          "UA 是什么？",
          "浏览器每个请求都会带上的一行文字，写着浏览器、版本和系统。Chromium 系浏览器还会发 Client Hints，是同一份信息的新版、结构化写法。"
        ],
        [
          "为什么 Windows 11 显示成 Windows 10？",
          "出于隐私，浏览器把 UA 里的版本冻结在 Windows 10（macOS 冻结在 10.15）。真实版本来自 Client Hints，本页显示的就是它。"
        ],
        [
          "能伪装吗？",
          "字符串可以改，但 JS 引擎、显卡和 Client Hints 往往会说出另一个版本；本页的检测会指出哪里对不上。"
        ]
      ]
    },
    "zh-TW": {
      "seo_title": "UA 檢測：網站以為你用什麼瀏覽器和系統 · 你是誰",
      "seo_desc": "免費 User-Agent 檢測：查看你的 UA 字串、Client Hints（Sec-CH-UA、平台），它們聲稱的系統和瀏覽器，以及 JS 引擎、顯示卡和 Client Hints 跟它們對不對得上。",
      "seo_kw": "UA 檢測, User-Agent 檢測, 我的 UA, Client Hints, Sec-CH-UA, UA 偽裝檢測",
      "h1": "UA 檢測",
      "og_sub": "網站以為你用什麼瀏覽器和系統？",
      "intro": "每個請求都會說明你的瀏覽器和系統：一次在 User-Agent 字串裡，在 Chromium 系瀏覽器裡還會在 Client Hints 裡再說一次。網頁可以拿它們和 JS 引擎、顯示卡交叉核對。下面是你的 UA 聲稱的，以及其他資訊認不認。",
      "focus_h": "你的 UA 和真實系統",
      "docs": [
        [
          "UA 是什麼？",
          "瀏覽器每個請求都會帶上的一行文字，寫著瀏覽器、版本和系統。Chromium 系瀏覽器還會送 Client Hints，是同一份資訊的新版、結構化寫法。"
        ],
        [
          "為什麼 Windows 11 顯示成 Windows 10？",
          "基於隱私，瀏覽器把 UA 裡的版本凍結在 Windows 10（macOS 凍結在 10.15）。真實版本來自 Client Hints，本頁顯示的就是它。"
        ],
        [
          "能偽裝嗎？",
          "字串可以改，但 JS 引擎、顯示卡和 Client Hints 往往會說出另一個版本；本頁的檢測會指出哪裡對不上。"
        ]
      ]
    },
    "ja": {
      "seo_title": "ユーザーエージェント確認：サイトから見たブラウザとシステム · あなたは誰",
      "seo_desc": "無料ユーザーエージェント確認：User-Agent 文字列とクライアントヒント（Sec-CH-UA、プラットフォーム）、それが名乗るシステムとブラウザ、JS エンジン・GPU・ヒントが一致するかを表示します。",
      "seo_kw": "ユーザーエージェント 確認, UA 確認, User-Agent, クライアントヒント, Sec-CH-UA, UA 偽装",
      "h1": "ユーザーエージェント確認",
      "og_sub": "サイトから見たブラウザとシステム",
      "intro": "リクエストのたびにブラウザとシステムが名乗られます。User-Agent 文字列で一度、Chromium 系ではクライアントヒントでもう一度。ページはそれを JS エンジンや GPU と突き合わせられます。あなたの UA が名乗る内容と、他が認めるかを示します。",
      "focus_h": "UA と実際のシステム",
      "docs": [
        [
          "ユーザーエージェントとは？",
          "毎回のリクエストに付くテキスト一行で、ブラウザ・バージョン・システムを示します。Chromium 系は同じ情報を構造化したクライアントヒントも送ります。"
        ],
        [
          "Windows 11 なのに Windows 10 と出るのはなぜ？",
          "プライバシーのため、ブラウザは UA を Windows 10（macOS は 10.15）で固定しています。実際の版はクライアントヒントから取れ、このページはそれを表示します。"
        ],
        [
          "偽装できる？",
          "文字列は変えられますが、JS エンジンや GPU、クライアントヒントが別の話をすることが多く、このページの検査がどこが合わないか示します。"
        ]
      ]
    },
    "ko": {
      "seo_title": "사용자 에이전트 확인: 사이트가 보는 브라우저와 시스템 · 당신은 누구",
      "seo_desc": "무료 사용자 에이전트 확인: User-Agent 문자열과 클라이언트 힌트(Sec-CH-UA, 플랫폼), 그것이 말하는 시스템과 브라우저, JS 엔진·그래픽 카드·힌트가 일치하는지 보여 줍니다.",
      "seo_kw": "사용자 에이전트 확인, UA 확인, User-Agent, 클라이언트 힌트, Sec-CH-UA, UA 위장",
      "h1": "사용자 에이전트 확인",
      "og_sub": "사이트가 보는 브라우저와 시스템",
      "intro": "모든 요청은 브라우저와 시스템을 밝혀요. User-Agent 문자열로 한 번, Chromium 계열은 클라이언트 힌트로 한 번 더. 페이지는 이를 JS 엔진과 그래픽 카드와 대조할 수 있어요. 당신의 UA가 주장하는 것과 나머지가 인정하는지 보여 줍니다.",
      "focus_h": "UA와 실제 시스템",
      "docs": [
        [
          "사용자 에이전트란?",
          "모든 요청에 붙는 한 줄의 텍스트로 브라우저, 버전, 시스템을 알려요. Chromium 계열은 같은 정보를 구조화한 클라이언트 힌트도 보냅니다."
        ],
        [
          "Windows 11인데 왜 Windows 10으로 나오나요?",
          "개인정보 보호를 위해 브라우저가 UA를 Windows 10(macOS는 10.15)으로 고정했어요. 실제 버전은 클라이언트 힌트에서 나오며, 이 페이지는 그걸 보여 줍니다."
        ],
        [
          "위장할 수 있나요?",
          "문자열은 바꿀 수 있지만 JS 엔진, 그래픽 카드, 클라이언트 힌트가 다른 말을 하는 경우가 많아요. 이 페이지의 검사가 어디가 안 맞는지 보여 줍니다."
        ]
      ]
    },
    "de": {
      "seo_title": "User-Agent-Check: Welchen Browser und welches System sehen Websites? · Wer bist du?",
      "seo_desc": "Kostenloser User-Agent-Check: dein User-Agent-String, die Client Hints (Sec-CH-UA, Plattform), das System und der Browser, die sie angeben, und ob JavaScript-Engine, Grafikkarte und Client Hints dazu passen.",
      "seo_kw": "User-Agent Check, was ist mein User-Agent, User-Agent String, Client Hints, Sec-CH-UA, User-Agent Spoofing erkennen",
      "h1": "User-Agent-Check",
      "og_sub": "Welchen Browser und welches System sehen Websites bei dir?",
      "intro": "Jede Anfrage nennt deinen Browser und dein System: einmal im User-Agent-String und in Chromium-Browsern ein zweites Mal in den Client Hints. Seiten können das mit der JavaScript-Engine und der Grafikkarte abgleichen. Hier siehst du, was deiner angibt und ob der Rest dazu passt.",
      "focus_h": "Dein User-Agent im Vergleich zum System",
      "docs": [
        [
          "Was ist ein User-Agent?",
          "Eine Textzeile, die dein Browser bei jeder Anfrage mitschickt und die Browser, Version und System nennt. Chromium-Browser senden zusätzlich Client Hints, eine neuere, strukturierte Fassung derselben Angaben."
        ],
        [
          "Warum steht da Windows 10, obwohl ich Windows 11 habe?",
          "Aus Datenschutzgründen haben die Browser den User-Agent bei Windows 10 (und macOS bei 10.15) eingefroren. Die echte Version kommt aus den Client Hints, und die zeigt diese Seite."
        ],
        [
          "Kann ich ihn fälschen?",
          "Den String kannst du ändern, aber JavaScript-Engine, Grafikkarte und Client Hints erzählen meist etwas anderes; die Prüfungen auf dieser Seite zeigen, wo."
        ]
      ]
    },
    "fr": {
      "seo_title": "Vérification du user agent : quel navigateur et quel système les sites voient-ils ? · Qui êtes-vous ?",
      "seo_desc": "Vérification gratuite du user agent : votre chaîne User-Agent, les client hints (Sec-CH-UA, plateforme), le système et le navigateur qu’ils annoncent, et si le moteur JavaScript, la carte graphique et les client hints sont d’accord avec eux.",
      "seo_kw": "vérifier user agent, quel est mon user agent, chaîne user agent, client hints, Sec-CH-UA, détection user agent modifié",
      "h1": "Vérification du user agent",
      "og_sub": "Quel navigateur et quel système les sites vous prêtent-ils ?",
      "intro": "Chaque requête nomme votre navigateur et votre système : une fois dans la chaîne User-Agent, et une seconde fois, dans les navigateurs Chromium, dans les client hints. Les pages peuvent recouper cela avec le moteur JavaScript et la carte graphique. Voici ce qu’annonce le vôtre, et si le reste confirme.",
      "focus_h": "Votre user agent face à votre système",
      "docs": [
        [
          "Qu’est-ce que le user agent ?",
          "Une ligne de texte que votre navigateur envoie avec chaque requête, qui nomme le navigateur, sa version et votre système. Les navigateurs Chromium envoient aussi des client hints : une version plus récente et mieux structurée des mêmes informations."
        ],
        [
          "Pourquoi affiche-t-il Windows 10 alors que j’ai Windows 11 ?",
          "Pour protéger la vie privée, les navigateurs ont figé le user agent sur Windows 10 (et sur macOS 10.15). La vraie version vient des client hints, et c’est elle que montre cette page."
        ],
        [
          "Puis-je le falsifier ?",
          "Vous pouvez changer la chaîne, mais le moteur JavaScript, la carte graphique et les client hints racontent souvent une autre histoire ; les contrôles de cette page montrent où."
        ]
      ]
    },
    "es": {
      "seo_title": "Comprobación del user agent: ¿qué navegador y sistema ven los sitios? · Quién eres",
      "seo_desc": "Comprobación gratuita del user agent: tu cadena User-Agent, los client hints (Sec-CH-UA, plataforma), el sistema y navegador que dicen, y si el motor JS, la gráfica y los hints coinciden.",
      "seo_kw": "comprobar user agent, mi user agent, cadena user agent, client hints, Sec-CH-UA, falsificar user agent",
      "h1": "Comprobación del user agent",
      "og_sub": "¿Qué navegador y sistema ven los sitios?",
      "intro": "Cada petición nombra tu navegador y tu sistema, una vez en la cadena User-Agent y, en navegadores Chromium, otra en los client hints. Las páginas pueden cruzarlo con el motor JS y la gráfica. Esto es lo que dice el tuyo, y si el resto lo confirma.",
      "focus_h": "Tu user agent frente a tu sistema",
      "docs": [
        [
          "¿Qué es el user agent?",
          "Una línea de texto que el navegador envía con cada petición: navegador, versión y sistema. Los navegadores Chromium envían además client hints, una versión más nueva y estructurada de lo mismo."
        ],
        [
          "¿Por qué sale Windows 10 en Windows 11?",
          "Por privacidad, los navegadores congelaron el user agent en Windows 10 (y macOS en 10.15). La versión real sale de los client hints, que es lo que muestra esta página."
        ],
        [
          "¿Puedo falsificarlo?",
          "La cadena sí, pero el motor JS, la gráfica y los client hints suelen contar otra cosa; las comprobaciones de esta página muestran dónde."
        ]
      ]
    },
    "pt": {
      "seo_title": "Verificação do user agent: que navegador e sistema os sites veem? · Quem é você",
      "seo_desc": "Verificação gratuita do user agent: sua string User-Agent, os client hints (Sec-CH-UA, plataforma), o sistema e o navegador que eles dizem, e se o motor JS, a placa de vídeo e os hints concordam.",
      "seo_kw": "verificar user agent, meu user agent, string user agent, client hints, Sec-CH-UA, falsificar user agent",
      "h1": "Verificação do user agent",
      "og_sub": "Que navegador e sistema os sites veem?",
      "intro": "Cada requisição diz seu navegador e sistema, uma vez na string User-Agent e, em navegadores Chromium, de novo nos client hints. As páginas cruzam isso com o motor JS e a placa de vídeo. Aqui está o que o seu diz, e se o resto confirma.",
      "focus_h": "Seu user agent contra seu sistema",
      "docs": [
        [
          "O que é o user agent?",
          "Uma linha de texto que o navegador manda em toda requisição: navegador, versão e sistema. Navegadores Chromium mandam também client hints, uma versão mais nova e estruturada da mesma informação."
        ],
        [
          "Por que aparece Windows 10 no Windows 11?",
          "Por privacidade, os navegadores congelaram o user agent no Windows 10 (e o macOS no 10.15). A versão real vem dos client hints, que é o que esta página mostra."
        ],
        [
          "Dá para falsificar?",
          "A string sim, mas o motor JS, a placa de vídeo e os client hints costumam contar outra história; as verificações desta página mostram onde."
        ]
      ]
    },
    "ru": {
      "seo_title": "Проверка User-Agent: какой браузер и систему видят сайты? · Кто вы?",
      "seo_desc": "Бесплатная проверка User-Agent: ваша строка User-Agent, client hints (Sec-CH-UA, платформа), система и браузер, которые они называют, и согласуются ли с ними движок JavaScript, видеокарта и client hints.",
      "seo_kw": "проверка user agent, какой у меня user agent, строка user agent, client hints, Sec-CH-UA, обнаружение подмены user agent",
      "h1": "Проверка User-Agent",
      "og_sub": "Какой браузер и систему видят у вас сайты?",
      "intro": "Каждый запрос называет ваш браузер и систему: один раз в строке User-Agent и ещё раз — в браузерах на Chromium — в client hints. Страницы могут сверить это с движком JavaScript и видеокартой. Здесь — что заявляет ваш браузер и согласуется ли с этим остальное.",
      "focus_h": "Ваш User-Agent и ваша система",
      "docs": [
        [
          "Что такое User-Agent?",
          "Строка текста, которую браузер отправляет с каждым запросом: название браузера, его версия и ваша система. Браузеры на Chromium отправляют ещё и client hints — более новую и упорядоченную версию тех же сведений."
        ],
        [
          "Почему там Windows 10, хотя у меня Windows 11?",
          "Ради приватности браузеры заморозили User-Agent на Windows 10 (а macOS — на 10.15). Настоящая версия берётся из client hints — её эта страница и показывает."
        ],
        [
          "Можно ли его подделать?",
          "Строку поменять можно, но движок JavaScript, видеокарта и client hints обычно рассказывают другое; проверки на этой странице показывают, где именно."
        ]
      ]
    }
  },
  "extensions": {
    "en": {
      "seo_title": "Browser Extension Check: which of your extensions can sites see? · Who Are You",
      "seo_desc": "Free browser extension check: the extensions that leave a mark any site can read (crypto wallets, developer tools, Grammarly, Dark Reader, translators, antivirus web protection), your ad blocker, and whether something rewrote what sites read.",
      "seo_kw": "browser extension check, detect browser extensions, which extensions can websites see, extension fingerprinting, ad blocker detection, crypto wallet detection",
      "h1": "Browser extension check",
      "og_sub": "Which of your extensions can sites see?",
      "intro": "Many extensions change the page to do their job: a wallet adds an object, a dark mode adds attributes, a translator adds elements, antivirus web protection adds its own script. Any site can read those marks, and they say a lot about you. Here are the ones this page found.",
      "focus_h": "Extensions that rewrite the page",
      "docs": [
        [
          "How can a site see my extensions?",
          "It can't list them, but it can see what they leave behind: objects like window.ethereum, attributes on the page, elements they insert, scripts they add. Some extensions leave nothing and stay invisible."
        ],
        [
          "Why does it matter?",
          "Extensions narrow you down: a crypto wallet, developer tools or a particular translator says something about who you are, and adds to your fingerprint."
        ],
        [
          "What does the tamper check have to do with it?",
          "Extensions that change your user agent, language or time zone, or wrap the drawing functions fingerprints use, rewrite what sites read. That's what the check in front looks for."
        ]
      ]
    },
    "zh-CN": {
      "seo_title": "浏览器扩展检测：网站能看到你装了哪些插件 · 你是谁",
      "seo_desc": "免费浏览器扩展检测：查看哪些插件会留下任何网站都能读到的痕迹（加密钱包、开发者工具、Grammarly、Dark Reader、翻译插件、杀毒软件的网页防护），有没有装广告拦截，以及有没有东西改写网站读到的信息。",
      "seo_kw": "浏览器扩展检测, 插件检测, 网站能看到我的插件吗, 扩展指纹, 广告拦截检测, 钱包插件检测, 沉浸式翻译检测",
      "h1": "浏览器扩展检测",
      "og_sub": "网站能看到你装了哪些插件？",
      "intro": "很多插件要改动网页才能干活：钱包往页面里加对象，深色模式加属性，翻译插件插元素，杀毒软件的网页防护加自己的脚本。这些痕迹任何网站都读得到，而且很能说明你是谁。下面是本页找到的。",
      "focus_h": "改写网页的插件",
      "docs": [
        [
          "网站怎么看到我的插件？",
          "网站没法列出你装了什么，但能看到插件留下的东西：window.ethereum 这样的对象、页面上的属性、插进来的元素、加进来的脚本。有些插件什么都不留，就看不到。"
        ],
        [
          "这有什么关系？",
          "插件会缩小范围：装了加密钱包、开发者工具或某个翻译插件，都在说明你是什么人，也让你的指纹更独特。"
        ],
        [
          "和「环境被篡改」有什么关系？",
          "改 UA、语言、时区，或者包住指纹用的画图函数的插件，会改写网站读到的信息。最上面那项检测查的就是这个。"
        ]
      ]
    },
    "zh-TW": {
      "seo_title": "瀏覽器擴充功能檢測：網站看得到你裝了哪些擴充功能 · 你是誰",
      "seo_desc": "免費瀏覽器擴充功能檢測：查看哪些擴充功能會留下任何網站都讀得到的痕跡（加密錢包、開發者工具、Grammarly、Dark Reader、翻譯工具、防毒軟體的網頁防護），有沒有裝廣告攔截，以及有沒有東西改寫網站讀到的資訊。",
      "seo_kw": "瀏覽器擴充功能檢測, 外掛檢測, 網站看得到我的擴充功能嗎, 擴充功能指紋, 廣告攔截檢測, 錢包擴充功能檢測",
      "h1": "瀏覽器擴充功能檢測",
      "og_sub": "網站看得到你裝了哪些擴充功能？",
      "intro": "很多擴充功能要改動網頁才能運作：錢包往頁面裡加物件，深色模式加屬性，翻譯工具插元素，防毒軟體的網頁防護加自己的腳本。這些痕跡任何網站都讀得到，而且很能說明你是誰。下面是本頁找到的。",
      "focus_h": "改寫網頁的擴充功能",
      "docs": [
        [
          "網站怎麼看到我的擴充功能？",
          "網站沒辦法列出你裝了什麼，但看得到擴充功能留下的東西：window.ethereum 這樣的物件、頁面上的屬性、插進來的元素、加進來的腳本。有些擴充功能什麼都不留，就看不到。"
        ],
        [
          "這有什麼關係？",
          "擴充功能會縮小範圍：裝了加密錢包、開發者工具或某個翻譯工具，都在說明你是什麼人，也讓你的指紋更獨特。"
        ],
        [
          "和「環境被竄改」有什麼關係？",
          "改 UA、語言、時區，或包住指紋用的繪圖函式的擴充功能，會改寫網站讀到的資訊。最上面那項檢測查的就是這個。"
        ]
      ]
    },
    "ja": {
      "seo_title": "ブラウザ拡張機能チェック：サイトから見える拡張機能は？ · あなたは誰",
      "seo_desc": "無料ブラウザ拡張機能チェック：どのサイトでも読める跡を残す拡張機能（暗号資産ウォレット、開発者ツール、Grammarly、Dark Reader、翻訳、ウイルス対策のウェブ保護）、広告ブロッカー、サイトが読む値の書き換えを調べます。",
      "seo_kw": "ブラウザ 拡張機能 チェック, 拡張機能 検出, サイト 拡張機能 見える, 拡張機能 フィンガープリント, 広告ブロッカー 検出",
      "h1": "ブラウザ拡張機能チェック",
      "og_sub": "サイトから見える拡張機能は？",
      "intro": "多くの拡張機能は動くためにページを変えます。ウォレットはオブジェクトを、ダークモードは属性を、翻訳は要素を、ウイルス対策のウェブ保護は自前のスクリプトを足します。その跡はどのサイトでも読め、あなたについて多くを語ります。このページが見つけたものです。",
      "focus_h": "ページを書き換える拡張機能",
      "docs": [
        [
          "サイトはどうやって拡張機能を見る？",
          "一覧はできませんが、残した跡は見えます：window.ethereum のようなオブジェクト、ページの属性、挿入された要素、追加されたスクリプト。何も残さない拡張機能は見えません。"
        ],
        [
          "それが何に関係する？",
          "拡張機能はあなたを絞り込みます。暗号資産ウォレットや開発者ツール、特定の翻訳ツールは、あなたがどんな人かを語り、指紋も独自にします。"
        ],
        [
          "改ざんチェックとの関係は？",
          "UA・言語・タイムゾーンを変えたり、指紋に使う描画関数を包んだりする拡張機能は、サイトが読む値を書き換えます。上の検査はそれを見ています。"
        ]
      ]
    },
    "ko": {
      "seo_title": "브라우저 확장 프로그램 검사: 사이트가 볼 수 있는 확장 프로그램은? · 당신은 누구",
      "seo_desc": "무료 브라우저 확장 프로그램 검사: 어떤 사이트든 읽을 수 있는 흔적을 남기는 확장 프로그램(암호화폐 지갑, 개발자 도구, Grammarly, Dark Reader, 번역, 백신의 웹 보호), 광고 차단, 사이트가 읽는 값의 변조를 확인합니다.",
      "seo_kw": "브라우저 확장 프로그램 검사, 확장 프로그램 탐지, 사이트가 보는 확장 프로그램, 확장 프로그램 지문, 광고 차단 탐지",
      "h1": "브라우저 확장 프로그램 검사",
      "og_sub": "사이트가 볼 수 있는 확장 프로그램은?",
      "intro": "많은 확장 프로그램은 일하려고 페이지를 바꿔요. 지갑은 객체를, 다크 모드는 속성을, 번역은 요소를, 백신의 웹 보호는 자체 스크립트를 더합니다. 그 흔적은 어떤 사이트든 읽을 수 있고, 당신에 대해 많은 걸 말해요. 이 페이지가 찾은 것들입니다.",
      "focus_h": "페이지를 바꾸는 확장 프로그램",
      "docs": [
        [
          "사이트는 어떻게 내 확장 프로그램을 보나요?",
          "목록을 볼 수는 없지만 남긴 흔적은 보여요. window.ethereum 같은 객체, 페이지 속성, 삽입된 요소, 추가된 스크립트. 아무것도 남기지 않는 확장 프로그램은 보이지 않아요."
        ],
        [
          "그게 왜 중요한가요?",
          "확장 프로그램은 범위를 좁혀요. 암호화폐 지갑, 개발자 도구, 특정 번역 도구는 당신이 어떤 사람인지 말해 주고 지문도 더 독특하게 만들어요."
        ],
        [
          "변조 검사와는 무슨 관계인가요?",
          "UA·언어·시간대를 바꾸거나 지문에 쓰는 그리기 함수를 감싸는 확장 프로그램은 사이트가 읽는 값을 바꿔요. 맨 위 검사가 그걸 봅니다."
        ]
      ]
    },
    "de": {
      "seo_title": "Browser-Erweiterungen prüfen: Welche können Websites sehen? · Wer bist du?",
      "seo_desc": "Kostenloser Check der Browser-Erweiterungen: die Erweiterungen, die Spuren hinterlassen, die jede Website lesen kann (Krypto-Wallets, Entwicklertools, Grammarly, Dark Reader, Übersetzer, Webschutz von Virenscannern), dein Werbeblocker, und ob etwas umgeschrieben hat, was Websites lesen.",
      "seo_kw": "Browser Erweiterungen prüfen, Browser Erweiterungen erkennen, welche Erweiterungen sehen Websites, Extension Fingerprinting, Werbeblocker erkennen, Krypto-Wallet erkennen",
      "h1": "Browser-Erweiterungen prüfen",
      "og_sub": "Welche deiner Erweiterungen sehen Websites?",
      "intro": "Viele Erweiterungen verändern die Seite, um ihre Arbeit zu machen: Eine Wallet fügt ein Objekt hinzu, ein Dunkelmodus Attribute, ein Übersetzer Elemente, der Webschutz eines Virenscanners ein eigenes Skript. Jede Website kann diese Spuren lesen, und sie verraten viel über dich. Hier siehst du, welche diese Seite gefunden hat.",
      "focus_h": "Erweiterungen, die die Seite verändern",
      "docs": [
        [
          "Wie kann eine Website meine Erweiterungen sehen?",
          "Eine Liste bekommt sie nicht, aber sie sieht, was Erweiterungen hinterlassen: Objekte wie window.ethereum, Attribute auf der Seite, eingefügte Elemente, zusätzliche Skripte. Manche Erweiterungen hinterlassen nichts und bleiben unsichtbar."
        ],
        [
          "Warum ist das wichtig?",
          "Erweiterungen grenzen dich ein: Eine Krypto-Wallet, Entwicklertools oder ein bestimmter Übersetzer sagen etwas darüber, wer du bist, und machen deinen Fingerabdruck einmaliger."
        ],
        [
          "Was hat die Manipulationsprüfung damit zu tun?",
          "Erweiterungen, die User-Agent, Sprache oder Zeitzone ändern oder die Zeichenfunktionen für Fingerabdrücke umhüllen, schreiben um, was Websites lesen. Genau danach sucht die Prüfung oben auf der Seite."
        ]
      ]
    },
    "fr": {
      "seo_title": "Détection des extensions : lesquelles les sites peuvent-ils voir ? · Qui êtes-vous ?",
      "seo_desc": "Détection gratuite des extensions du navigateur : celles qui laissent une trace que tout site peut lire (portefeuilles crypto, outils de développement, Grammarly, Dark Reader, traducteurs, protection web d’antivirus), votre bloqueur de publicités, et si quelque chose a réécrit ce que lisent les sites.",
      "seo_kw": "détecter extensions navigateur, quelles extensions les sites voient, empreinte extensions, détection bloqueur de publicités, détection portefeuille crypto",
      "h1": "Détection des extensions",
      "og_sub": "Lesquelles de vos extensions les sites voient-ils ?",
      "intro": "Beaucoup d’extensions modifient la page pour faire leur travail : un portefeuille crypto ajoute un objet, un mode sombre ajoute des attributs, un traducteur ajoute des éléments, la protection web d’un antivirus ajoute son propre script. N’importe quel site peut lire ces traces, et elles en disent long sur vous. Voici celles que cette page a trouvées.",
      "focus_h": "Extensions qui modifient la page",
      "docs": [
        [
          "Comment un site peut-il voir mes extensions ?",
          "Il ne peut pas en obtenir la liste, mais il voit ce qu’elles laissent derrière elles : des objets comme window.ethereum, des attributs sur la page, des éléments qu’elles insèrent, des scripts qu’elles ajoutent. Certaines extensions ne laissent rien et restent invisibles."
        ],
        [
          "Pourquoi est-ce important ?",
          "Les extensions vous distinguent : un portefeuille crypto, des outils de développement ou un traducteur précis disent quelque chose de vous, et rendent votre empreinte plus unique."
        ],
        [
          "Quel rapport avec le contrôle des modifications ?",
          "Les extensions qui changent votre user agent, votre langue ou votre fuseau horaire, ou qui enveloppent les fonctions de dessin utilisées pour l’empreinte, réécrivent ce que lisent les sites. C’est exactement ce que recherche le contrôle affiché en tête."
        ]
      ]
    },
    "es": {
      "seo_title": "Test de extensiones del navegador: ¿cuáles ven los sitios? · Quién eres",
      "seo_desc": "Test gratuito de extensiones del navegador: las que dejan una marca que cualquier sitio puede leer (carteras cripto, herramientas de desarrollo, Grammarly, Dark Reader, traductores, protección web de antivirus), tu bloqueador de anuncios y si algo reescribe lo que leen los sitios.",
      "seo_kw": "test extensiones navegador, detectar extensiones, qué extensiones ven los sitios, huella de extensiones, detectar bloqueador de anuncios",
      "h1": "Test de extensiones del navegador",
      "og_sub": "¿Qué extensiones tuyas ven los sitios?",
      "intro": "Muchas extensiones cambian la página para hacer su trabajo: una cartera añade un objeto, un modo oscuro atributos, un traductor elementos, la protección web de un antivirus su propio script. Cualquier sitio puede leer esas marcas, y dicen mucho de ti. Estas son las que encontró esta página.",
      "focus_h": "Extensiones que reescriben la página",
      "docs": [
        [
          "¿Cómo ve un sitio mis extensiones?",
          "No puede listarlas, pero ve lo que dejan: objetos como window.ethereum, atributos en la página, elementos insertados, scripts añadidos. Las que no dejan nada son invisibles."
        ],
        [
          "¿Por qué importa?",
          "Las extensiones te acotan: una cartera cripto, herramientas de desarrollo o un traductor concreto dicen algo de ti y hacen tu huella más única."
        ],
        [
          "¿Qué tiene que ver con la comprobación de alteraciones?",
          "Las extensiones que cambian user agent, idioma o zona horaria, o envuelven las funciones de dibujo de las huellas, reescriben lo que leen los sitios. Eso es lo que busca la comprobación de arriba."
        ]
      ]
    },
    "pt": {
      "seo_title": "Teste de extensões do navegador: quais os sites conseguem ver? · Quem é você",
      "seo_desc": "Teste gratuito de extensões do navegador: as que deixam marca que qualquer site lê (carteiras cripto, ferramentas de desenvolvedor, Grammarly, Dark Reader, tradutores, proteção web de antivírus), seu bloqueador de anúncios e se algo reescreve o que os sites leem.",
      "seo_kw": "teste extensões navegador, detectar extensões, quais extensões os sites veem, impressão de extensões, detectar bloqueador de anúncios",
      "h1": "Teste de extensões do navegador",
      "og_sub": "Quais extensões suas os sites veem?",
      "intro": "Muitas extensões mudam a página para funcionar: uma carteira adiciona um objeto, um modo escuro atributos, um tradutor elementos, a proteção web de um antivírus o próprio script. Qualquer site lê essas marcas, e elas dizem muito sobre você. Aqui estão as que esta página encontrou.",
      "focus_h": "Extensões que reescrevem a página",
      "docs": [
        [
          "Como um site vê minhas extensões?",
          "Ele não consegue listá-las, mas vê o que deixam: objetos como window.ethereum, atributos na página, elementos inseridos, scripts adicionados. As que não deixam nada ficam invisíveis."
        ],
        [
          "Por que isso importa?",
          "Extensões te delimitam: uma carteira cripto, ferramentas de desenvolvedor ou um tradutor específico dizem algo sobre você e deixam sua impressão digital mais única."
        ],
        [
          "O que a verificação de adulteração tem a ver?",
          "Extensões que mudam user agent, idioma ou fuso, ou envolvem as funções de desenho das impressões digitais, reescrevem o que os sites leem. É isso que a verificação no topo procura."
        ]
      ]
    },
    "ru": {
      "seo_title": "Проверка расширений браузера: какие из них видят сайты? · Кто вы?",
      "seo_desc": "Бесплатная проверка расширений браузера: расширения, которые оставляют следы, видимые любому сайту (криптокошельки, инструменты разработчика, Grammarly, Dark Reader, переводчики, веб-защита антивирусов), ваш блокировщик рекламы и не переписал ли что-то то, что читают сайты.",
      "seo_kw": "проверка расширений браузера, обнаружение расширений браузера, какие расширения видят сайты, отпечаток расширений, обнаружение блокировщика рекламы, обнаружение криптокошелька",
      "h1": "Проверка расширений браузера",
      "og_sub": "Какие ваши расширения видят сайты?",
      "intro": "Многие расширения меняют страницу, чтобы делать свою работу: кошелёк добавляет объект, тёмная тема — атрибуты, переводчик — элементы, веб-защита антивируса — собственный скрипт. Любой сайт может прочитать эти следы, и они многое о вас говорят. Здесь — те, что нашла эта страница.",
      "focus_h": "Расширения, которые меняют страницу",
      "docs": [
        [
          "Как сайт может увидеть мои расширения?",
          "Получить их список он не может, но видит то, что они оставляют: объекты вроде window.ethereum, атрибуты на странице, вставленные элементы, добавленные скрипты. Некоторые расширения не оставляют ничего и остаются невидимыми."
        ],
        [
          "Почему это важно?",
          "Расширения сужают круг: криптокошелёк, инструменты разработчика или определённый переводчик что-то говорят о вас и делают ваш отпечаток уникальнее."
        ],
        [
          "При чём тут проверка на подмену?",
          "Расширения, которые меняют User-Agent, язык или часовой пояс либо оборачивают функции рисования, по которым снимают отпечаток, переписывают то, что читают сайты. Именно это и ищет проверка вверху страницы."
        ]
      ]
    }
  },
  "anti-detect-browser": {
    en: {
      seo_title: "Anti-Detect Browser Test: does your profile give itself away? · Who Are You",
      seo_desc: "Free anti-detect browser test: checks whether the user agent matches the engine's real version, whether a Worker reads the same navigator as the page, and whether platform, graphics card and time zone agree. No IP or raw data is kept, only anonymous counts of how common you are.",
      seo_kw: "anti-detect browser test, antidetect browser check, multilogin detection, browser profile check, fingerprint browser detection, user agent spoofing detection",
      h1: "Anti-detect browser test", og_sub: "Each part looks right; do they agree?",
      intro: "An anti-detect browser gives each profile its own user agent, screen, time zone and graphics card. Each value can look perfectly ordinary and still contradict another one. This page reads the parts a rewritten profile has trouble keeping in line, and says which disagree.",
      focus_h: "Your profile's traces",
      docs: [
        ["What gives an anti-detect browser away?", "Parts that don't agree. A user agent that says Chrome 156 while the engine lacks features Chrome shipped long ago; a Worker that reads another user agent or language than the page; navigator.platform saying Mac on a Windows user agent; WebGL naming one maker as vendor and another as the card. Sites rarely look for the browser itself, they look for these contradictions."],
        ["Why does the engine's real version matter?", "The user agent is a string any browser can rewrite. The JavaScript the engine supports can't be rewritten the same way: each Chromium version adds functions (Promise.try in 128, RegExp.escape in 136), and their presence pins the engine to a range. A user agent outside that range is a profile, not a browser."],
        ["How do I make a profile pass?", "Pick a user agent version that matches the browser's kernel; prefer changes made in the kernel over injected scripts, so a Worker reads the same values; choose system, platform and graphics vendor as one set; and set time zone and language to the proxy's country. Then check again here."],
      ],
    },
    "zh-CN": {
      seo_title: "指纹浏览器检测：你的环境配置露馅了吗 · 你是谁",
      seo_desc: "免费指纹浏览器检测：看用户代理和内核真实版本是否一致、Worker 里读到的 navigator 和页面是否相同、平台、显卡和时区是否对得上。适合检查 AdsPower、比特浏览器、Multilogin 等环境。不保存 IP 和原始数据，只累计匿名计数，用来算你有多常见。",
      seo_kw: "指纹浏览器检测, 指纹浏览器, 防关联浏览器, AdsPower 检测, 比特浏览器检测, 环境检测, 浏览器环境一致性, UA 伪装检测",
      h1: "指纹浏览器检测", og_sub: "每一项都像真的，合在一起对得上吗？",
      intro: "指纹浏览器给每个环境配一套自己的用户代理、屏幕、时区和显卡。每一项单看都很正常，却可能和另一项互相矛盾。这个页面专门读那些改过的环境最难保持一致的地方，告诉你哪几项对不上。",
      focus_h: "你的环境痕迹",
      docs: [
        ["指纹浏览器会在哪里露馅？", "露馅在各项互相对不上。用户代理写着 Chrome 156，内核却缺少 Chrome 早就有的功能；Worker 里读到的用户代理或语言和页面里不同；用户代理是 Windows，navigator.platform 却是 Mac；WebGL 的厂商写一家、显卡又是另一家。网站很少去认浏览器本身，它们找的是这些矛盾。"],
        ["为什么要看内核的真实版本？", "用户代理只是一串文字，谁都能改。内核支持哪些 JavaScript 功能却没法这样改：Chromium 每个版本都会加新函数（128 加了 Promise.try，136 加了 RegExp.escape），有没有这些函数就能把内核版本框在一个范围里。用户代理落在范围之外，说明这是配出来的环境，不是真浏览器。"],
        ["怎样让环境通过检测？", "用户代理的版本选成和内核一致；尽量用内核级的修改，不用注入脚本，这样 Worker 读到的也一样；系统、平台、显卡厂商选同一套，别混搭；时区和语言设成代理所在国的。改完回到这里再测一次。"],
      ],
    },
    "zh-TW": {
      seo_title: "指紋瀏覽器檢測：你的環境設定露餡了嗎 · 你是誰",
      seo_desc: "免費指紋瀏覽器檢測：看使用者代理和核心真實版本是否一致、Worker 裡讀到的 navigator 和頁面是否相同、平台、顯示卡和時區是否對得上。不保存 IP 和原始資料，只累計匿名計數，用來算你有多常見。",
      seo_kw: "指紋瀏覽器檢測, 指紋瀏覽器, 防關聯瀏覽器, 環境檢測, 瀏覽器環境一致性, UA 偽裝檢測",
      h1: "指紋瀏覽器檢測", og_sub: "每一項都像真的，合在一起對得上嗎？",
      intro: "指紋瀏覽器替每個環境配一套自己的使用者代理、螢幕、時區和顯示卡。每一項單看都很正常，卻可能和另一項互相矛盾。這個頁面專門讀那些改過的環境最難保持一致的地方，告訴你哪幾項對不上。",
      focus_h: "你的環境痕跡",
      docs: [
        ["指紋瀏覽器會在哪裡露餡？", "露餡在各項互相對不上。使用者代理寫著 Chrome 156，核心卻缺少 Chrome 早就有的功能；Worker 裡讀到的使用者代理或語言和頁面裡不同；使用者代理是 Windows，navigator.platform 卻是 Mac；WebGL 的廠商寫一家、顯示卡又是另一家。網站很少去認瀏覽器本身，它們找的是這些矛盾。"],
        ["為什麼要看核心的真實版本？", "使用者代理只是一串文字，誰都能改。核心支援哪些 JavaScript 功能卻沒辦法這樣改：Chromium 每個版本都會加新函式（128 加了 Promise.try，136 加了 RegExp.escape），有沒有這些函式就能把核心版本框在一個範圍裡。使用者代理落在範圍之外，代表這是配出來的環境。"],
        ["怎樣讓環境通過檢測？", "使用者代理的版本選成和核心一致；盡量用核心層級的修改，不用注入腳本，這樣 Worker 讀到的也一樣；系統、平台、顯示卡廠商選同一套，別混搭；時區和語言設成代理所在國的。改完回到這裡再測一次。"],
      ],
    },
    ja: {
      seo_title: "アンチディテクトブラウザ検査：プロファイルがばれていないか · Who Are You",
      seo_desc: "無料のアンチディテクトブラウザ検査：ユーザーエージェントとエンジンの実バージョンが合うか、Worker が読む navigator がページと同じか、プラットフォーム・GPU・タイムゾーンが整合するかを確認。IP や元のデータは保存せず、どれだけありふれているかを数える匿名の集計だけを残します。",
      seo_kw: "アンチディテクトブラウザ 検出, 指紋ブラウザ, ブラウザプロファイル 検査, UA 偽装 検出, 環境 一貫性",
      h1: "アンチディテクトブラウザ検査", og_sub: "どれも本物らしい。でも互いに合っている？",
      intro: "アンチディテクトブラウザはプロファイルごとにユーザーエージェント、画面、タイムゾーン、GPU を用意します。一つずつ見れば普通でも、別の値と矛盾することがあります。このページは書き換えた環境が揃えにくい部分を読み、どこが合わないかを示します。",
      focus_h: "プロファイルの痕跡",
      docs: [
        ["アンチディテクトブラウザはどこでばれる？", "値同士が合わないところです。Chrome 156 を名乗るのに古くからある機能がない、Worker が読むユーザーエージェントや言語がページと違う、Windows の UA なのに navigator.platform が Mac、WebGL のベンダーと GPU 名のメーカーが違う。サイトはブラウザそのものより、こうした矛盾を探します。"],
        ["なぜエンジンの実バージョンが重要？", "ユーザーエージェントはただの文字列で書き換えられます。エンジンが持つ JavaScript の機能はそうはいきません。Chromium は版ごとに関数を追加するので（128 で Promise.try、136 で RegExp.escape）、その有無でエンジンの版が絞れます。範囲外の UA は作られたプロファイルです。"],
        ["プロファイルを通すには？", "UA のバージョンをカーネルに合わせ、スクリプト注入ではなくカーネル側の変更を使って Worker でも同じ値にし、システム・プラットフォーム・GPU ベンダーを一揃いで選び、タイムゾーンと言語をプロキシの国に合わせます。そのあとここでもう一度確認を。"],
      ],
    },
    ko: {
      seo_title: "안티디텍트 브라우저 검사: 프로필이 들통나지 않았나 · Who Are You",
      seo_desc: "무료 안티디텍트 브라우저 검사: 사용자 에이전트와 엔진의 실제 버전이 맞는지, Worker가 읽는 navigator가 페이지와 같은지, 플랫폼·그래픽카드·시간대가 서로 맞는지 확인합니다. IP와 원본 데이터는 저장하지 않고, 얼마나 흔한지 세는 익명 집계만 남깁니다.",
      seo_kw: "안티디텍트 브라우저 검사, 지문 브라우저, 브라우저 프로필 검사, UA 위장 탐지, 환경 일관성",
      h1: "안티디텍트 브라우저 검사", og_sub: "하나하나는 진짜 같아도, 서로 맞나요?",
      intro: "안티디텍트 브라우저는 프로필마다 사용자 에이전트, 화면, 시간대, 그래픽카드를 따로 줍니다. 각각은 평범해 보여도 다른 값과 모순될 수 있어요. 이 페이지는 바꾼 환경이 맞추기 어려운 부분을 읽고 무엇이 맞지 않는지 알려줍니다.",
      focus_h: "프로필의 흔적",
      docs: [
        ["안티디텍트 브라우저는 어디서 들통나나요?", "값끼리 맞지 않는 곳입니다. Chrome 156이라면서 오래전에 나온 기능이 없거나, Worker가 읽는 사용자 에이전트나 언어가 페이지와 다르거나, Windows UA인데 navigator.platform이 Mac이거나, WebGL 벤더와 그래픽카드 제조사가 다를 때죠. 사이트는 브라우저 자체보다 이런 모순을 찾습니다."],
        ["왜 엔진의 실제 버전이 중요한가요?", "사용자 에이전트는 바꿀 수 있는 문자열일 뿐입니다. 엔진이 지원하는 JavaScript 기능은 그렇게 못 바꿔요. Chromium은 버전마다 함수를 추가하므로(128의 Promise.try, 136의 RegExp.escape) 그 유무로 엔진 버전 범위가 정해집니다. 범위를 벗어난 UA는 만든 프로필입니다."],
        ["프로필을 통과시키려면?", "UA 버전을 커널과 맞추고, 스크립트 주입 대신 커널 수준 변경으로 Worker에서도 같은 값이 나오게 하고, 시스템·플랫폼·그래픽 벤더를 한 세트로 고르고, 시간대와 언어를 프록시 국가에 맞추세요. 그다음 여기서 다시 확인하세요."],
      ],
    },
    es: {
      seo_title: "Test de navegador antidetección: ¿tu perfil se delata? · Who Are You",
      seo_desc: "Test gratuito de navegador antidetección: comprueba si el user agent cuadra con la versión real del motor, si un Worker lee el mismo navigator que la página y si plataforma, tarjeta gráfica y zona horaria coinciden. No guarda tu IP ni los datos en bruto, solo recuentos anónimos de lo común que eres.",
      seo_kw: "test navegador antidetección, detectar navegador antidetect, comprobar perfil de navegador, detectar user agent falso, coherencia del navegador",
      h1: "Test de navegador antidetección", og_sub: "Cada parte parece real; ¿encajan entre sí?",
      intro: "Un navegador antidetección da a cada perfil su propio user agent, pantalla, zona horaria y tarjeta gráfica. Cada valor puede parecer normal y aun así contradecir a otro. Esta página lee las partes que a un perfil reescrito le cuesta mantener coherentes y dice cuáles no encajan.",
      focus_h: "Los rastros de tu perfil",
      docs: [
        ["¿Qué delata a un navegador antidetección?", "Partes que no encajan: un user agent que dice Chrome 156 con un motor al que le faltan funciones que Chrome trae desde hace tiempo; un Worker que lee otro user agent o idioma que la página; navigator.platform que dice Mac con un user agent de Windows; WebGL con un fabricante como proveedor y otro en la tarjeta. Los sitios buscan esas contradicciones."],
        ["¿Por qué importa la versión real del motor?", "El user agent es un texto que cualquiera puede cambiar. Las funciones JavaScript del motor no: cada versión de Chromium añade algunas (Promise.try en la 128, RegExp.escape en la 136) y su presencia fija un rango. Un user agent fuera de ese rango es un perfil, no un navegador."],
        ["¿Cómo hago que un perfil pase?", "Elige una versión de user agent que coincida con el núcleo; prefiere cambios en el núcleo a scripts inyectados, para que un Worker lea lo mismo; elige sistema, plataforma y fabricante gráfico como un conjunto, y pon zona horaria e idioma del país del proxy. Luego vuelve a comprobar aquí."],
      ],
    },
    fr: {
      seo_title: "Test de navigateur anti-détection : votre profil se trahit-il ? · Qui êtes-vous ?",
      seo_desc: "Test gratuit de navigateur anti-détection : le user agent correspond-il à la vraie version du moteur ? Un Worker lit-il le même navigator que la page ? Plateforme, carte graphique et fuseau horaire concordent-ils ? Aucune IP ni donnée brute n’est gardée, seulement des compteurs anonymes.",
      seo_kw: "test navigateur anti-détection, navigateur antidetect, détection multilogin, vérifier profil navigateur, détection navigateur d’empreinte, détection user agent modifié",
      h1: "Test de navigateur anti-détection", og_sub: "Chaque détail semble juste ; vont-ils ensemble ?",
      intro: "Un navigateur anti-détection donne à chaque profil son propre user agent, son écran, son fuseau horaire et sa carte graphique. Chaque valeur peut sembler parfaitement ordinaire et pourtant en contredire une autre. Cette page lit les éléments qu’un profil réécrit a du mal à garder cohérents, et indique lesquels se contredisent.",
      focus_h: "Traces de votre profil",
      docs: [
        ["Qu’est-ce qui trahit un navigateur anti-détection ?", "Des éléments qui ne concordent pas. Un user agent qui annonce Chrome 156 alors que le moteur n’a pas des fonctions que Chrome a ajoutées depuis longtemps ; un Worker qui lit un autre user agent ou une autre langue que la page ; navigator.platform qui dit Mac avec un user agent Windows ; WebGL qui donne un fabricant comme fournisseur et un autre pour la carte. Les sites cherchent rarement le navigateur lui-même : ils cherchent ces contradictions."],
        ["Pourquoi la vraie version du moteur compte-t-elle ?", "Le user agent est une chaîne que n’importe quel navigateur peut réécrire. Les fonctions JavaScript que le moteur prend en charge ne se réécrivent pas aussi facilement : chaque version de Chromium en ajoute (Promise.try dans la 128, RegExp.escape dans la 136), et leur présence situe le moteur dans une fourchette de versions. Un user agent hors de cette fourchette, c’est un profil, pas un vrai navigateur."],
        ["Comment faire passer un profil ?", "Choisissez une version de user agent qui correspond au moteur du navigateur ; préférez les modifications faites dans le moteur aux scripts injectés, pour qu’un Worker lise les mêmes valeurs ; choisissez système, plateforme et fabricant graphique comme un tout cohérent ; réglez le fuseau horaire et la langue sur le pays du proxy. Puis revenez vérifier ici."],
      ],
    },
    de: {
      seo_title: "Anti-Detect-Browser-Test: Verrät sich dein Profil? · Wer bist du?",
      seo_desc: "Kostenloser Anti-Detect-Browser-Test: Passt der User-Agent zur echten Version der Engine? Liest ein Worker denselben navigator wie die Seite? Passen Plattform, Grafikkarte und Zeitzone zusammen? IP und Rohdaten werden nicht gespeichert, nur anonyme Zähler.",
      seo_kw: "Anti-Detect-Browser Test, Antidetect Browser prüfen, Multilogin erkennen, Browserprofil prüfen, Fingerprint-Browser erkennen, User-Agent Spoofing erkennen",
      h1: "Anti-Detect-Browser-Test", og_sub: "Jedes Detail wirkt echt, aber passen sie zusammen?",
      intro: "Ein Anti-Detect-Browser gibt jedem Profil einen eigenen User-Agent, Bildschirm, eine eigene Zeitzone und Grafikkarte. Jeder Wert kann völlig normal aussehen und trotzdem einem anderen widersprechen. Diese Seite liest die Teile, die ein umgeschriebenes Profil nur schwer stimmig hält, und zeigt, welche sich widersprechen.",
      focus_h: "Spuren deines Profils",
      docs: [
        ["Was verrät einen Anti-Detect-Browser?", "Teile, die nicht zusammenpassen. Ein User-Agent, der Chrome 156 angibt, während der Engine Funktionen fehlen, die Chrome längst hat; ein Worker, der einen anderen User-Agent oder eine andere Sprache liest als die Seite; navigator.platform, das Mac sagt, bei einem Windows-User-Agent; WebGL, das einen Hersteller als Anbieter und einen anderen als Karte nennt. Websites suchen selten nach dem Browser selbst, sondern nach solchen Widersprüchen."],
        ["Warum zählt die echte Version der Engine?", "Der User-Agent ist ein String, den jeder Browser umschreiben kann. Welche JavaScript-Funktionen die Engine kann, lässt sich nicht so einfach umschreiben: Jede Chromium-Version bringt neue mit (Promise.try in 128, RegExp.escape in 136), und ihr Vorhandensein grenzt die Engine auf einen Versionsbereich ein. Ein User-Agent außerhalb dieses Bereichs ist ein Profil, kein echter Browser."],
        ["Wie bekomme ich ein Profil durch?", "Wähl eine User-Agent-Version, die zum Kern des Browsers passt; bevorzuge Änderungen im Kern statt eingeschleuster Skripte, damit ein Worker dieselben Werte liest; wähl System, Plattform und Grafikhersteller als zusammenpassenden Satz; und stell Zeitzone und Sprache auf das Land des Proxys. Dann hier noch einmal prüfen."],
      ],
    },
    pt: {
      seo_title: "Teste de navegador antidetecção: seu perfil se entrega? · Who Are You",
      seo_desc: "Teste grátis de navegador antidetecção: verifica se o user agent bate com a versão real do motor, se um Worker lê o mesmo navigator que a página e se plataforma, placa de vídeo e fuso combinam. Não guarda seu IP nem os dados brutos, só contagens anônimas de quão comum você é.",
      seo_kw: "teste navegador antidetecção, detectar navegador antidetect, verificar perfil do navegador, detectar user agent falso, consistência do navegador",
      h1: "Teste de navegador antidetecção", og_sub: "Cada parte parece real; elas combinam?",
      intro: "Um navegador antidetecção dá a cada perfil seu próprio user agent, tela, fuso horário e placa de vídeo. Cada valor pode parecer normal e ainda assim contradizer outro. Esta página lê as partes que um perfil reescrito tem dificuldade de manter coerentes e diz quais não combinam.",
      focus_h: "Os rastros do seu perfil",
      docs: [
        ["O que entrega um navegador antidetecção?", "Partes que não combinam: um user agent que diz Chrome 156 com um motor sem funções que o Chrome tem há tempos; um Worker que lê outro user agent ou idioma que a página; navigator.platform dizendo Mac com user agent de Windows; um fabricante no WebGL diferente do da placa. Os sites procuram essas contradições."],
        ["Por que a versão real do motor importa?", "O user agent é um texto que qualquer um reescreve. As funções JavaScript do motor não: cada versão do Chromium adiciona algumas (Promise.try na 128, RegExp.escape na 136), e a presença delas situa o motor numa faixa. Um user agent fora dela é um perfil, não um navegador."],
        ["Como faço um perfil passar?", "Escolha uma versão de user agent igual à do núcleo; prefira mudanças no núcleo a scripts injetados, para que um Worker leia o mesmo; escolha sistema, plataforma e fabricante gráfico como um conjunto; ponha fuso e idioma do país do proxy. Depois verifique de novo aqui."],
      ],
    },
    ru: {
      seo_title: "Проверка антидетект-браузера: не выдаёт ли себя ваш профиль? · Кто вы?",
      seo_desc: "Бесплатная проверка антидетект-браузера: совпадает ли User-Agent с настоящей версией движка, видит ли Worker тот же navigator, что и страница, согласуются ли платформа, видеокарта и часовой пояс. IP и исходные данные не сохраняются — только анонимные счётчики.",
      seo_kw: "проверка антидетект браузера, antidetect browser проверка, обнаружение multilogin, проверка профиля браузера, обнаружение браузера для отпечатков, обнаружение подмены user agent",
      h1: "Проверка антидетект-браузера", og_sub: "Каждая деталь выглядит правдоподобно — но сходятся ли они?",
      intro: "Антидетект-браузер даёт каждому профилю свой User-Agent, экран, часовой пояс и видеокарту. Каждое значение может выглядеть совершенно обычным и всё же противоречить другому. Эта страница читает то, что переписанному профилю трудно держать согласованным, и показывает, что не сходится.",
      focus_h: "Следы вашего профиля",
      docs: [
        ["Что выдаёт антидетект-браузер?", "Детали, которые не сходятся. User-Agent говорит «Chrome 156», а в движке нет функций, которые Chrome давно добавил; Worker видит другой User-Agent или язык, чем страница; navigator.platform говорит Mac при User-Agent от Windows; WebGL называет одного производителя поставщиком, а другого — у видеокарты. Сайты редко ищут сам браузер — они ищут такие противоречия."],
        ["Почему важна настоящая версия движка?", "User-Agent — это строка, которую может переписать любой браузер. А набор функций JavaScript, которые поддерживает движок, так просто не перепишешь: каждая версия Chromium добавляет новые (Promise.try в 128, RegExp.escape в 136), и по их наличию движок можно отнести к диапазону версий. User-Agent вне этого диапазона — это профиль, а не настоящий браузер."],
        ["Как сделать профиль правдоподобным?", "Выберите версию User-Agent, совпадающую с ядром браузера; предпочитайте правки в самом ядре внедрённым скриптам, чтобы Worker видел те же значения; выбирайте систему, платформу и производителя видеокарты одним согласованным набором; поставьте часовой пояс и язык страны прокси. Потом проверьте здесь ещё раз."],
      ],
    },
  },
  "icloud-private-relay": {
    en: {
      seo_title: "iCloud Private Relay Check: what sites still see · Who Are You",
      seo_desc: "Free iCloud Private Relay check: whether your address is a relay exit, which network it belongs to, the region it shows, and whether WebRTC leaks anything past it. No IP or raw data is kept, only anonymous counts of how common you are.",
      seo_kw: "iCloud Private Relay check, is Private Relay on, Private Relay IP, Private Relay detection, Safari Private Relay test",
      h1: "iCloud Private Relay check", og_sub: "Is the relay on, and what does it still show?",
      intro: "iCloud Private Relay sends Safari's traffic through two hops, so sites see an exit run by Cloudflare, Akamai or Fastly instead of your address. Sites can still tell it's a relay, and roughly where you are. Here is what yours shows.",
      focus_h: "Your relay",
      docs: [
        ["Can sites tell I use Private Relay?", "Yes. Apple publishes the list of its exit addresses, and this page checks your address against it. A site sees a relay exit, not your own address, and usually a city or region near you, which Apple keeps on purpose so local content still works."],
        ["Is Private Relay a VPN?", "No. It covers Safari and unencrypted traffic from apps, not every app; it can't be pointed at another country; and it hides your address from sites and your network provider from what you visit. For a site, it looks like a privacy relay, not like a person abroad."],
        ["Why does WebRTC show another relay address?", "Each connection gets an exit of its own, so the page and WebRTC can come out of different relay addresses. Both being relay exits is no leak; the check flags only a real address beside them."],
      ],
    },
    "zh-CN": {
      seo_title: "iCloud 专用代理检测：网站还能看到什么 · 你是谁",
      seo_desc: "免费 iCloud 专用代理（Private Relay）检测：看你的地址是不是中继出口、属于哪家网络、显示在哪个地区，以及 WebRTC 有没有绕过它漏出真实地址。不保存 IP 和原始数据，只累计匿名计数，用来算你有多常见。",
      seo_kw: "iCloud 专用代理检测, iCloud Private Relay, 专用代理 IP, Private Relay 检测, Safari 专用代理",
      h1: "iCloud 专用代理检测", og_sub: "中继开着吗？还暴露了什么？",
      intro: "iCloud 专用代理让 Safari 的流量走两跳，网站看到的是 Cloudflare、Akamai 或 Fastly 的出口，不是你的地址。但网站仍然看得出这是中继，也能知道你大概在哪。下面是你的中继显示出来的样子。",
      focus_h: "你的中继",
      docs: [
        ["网站看得出我在用专用代理吗？", "看得出。苹果公开了它的出口地址列表，这个页面就拿你的地址去对照。网站看到的是中继出口，不是你自己的地址，通常还能看到你附近的城市或地区：苹果有意保留这一点，好让本地内容照常工作。"],
        ["专用代理是 VPN 吗？", "不是。它只管 Safari 和 App 里未加密的流量，不是所有 App；不能选到别的国家；它对网站隐藏你的地址，对网络运营商隐藏你访问了什么。在网站眼里，它像一个隐私中继，不像一个人在国外。"],
        ["为什么 WebRTC 显示另一个中继地址？", "每条连接都有自己的出口，所以页面和 WebRTC 可能从不同的中继地址出去。两个都是中继出口，不算泄露；只有旁边出现真实地址时，检测才会报警。"],
      ],
    },
    "zh-TW": {
      seo_title: "iCloud 私密轉送檢測：網站還能看到什麼 · 你是誰",
      seo_desc: "免費 iCloud 私密轉送（Private Relay）檢測：看你的位址是不是轉送出口、屬於哪家網路、顯示在哪個地區，以及 WebRTC 有沒有繞過它洩漏真實位址。不保存 IP 和原始資料，只累計匿名計數，用來算你有多常見。",
      seo_kw: "iCloud 私密轉送檢測, iCloud Private Relay, 私密轉送 IP, Private Relay 檢測, Safari 私密轉送",
      h1: "iCloud 私密轉送檢測", og_sub: "轉送開著嗎？還暴露了什麼？",
      intro: "iCloud 私密轉送讓 Safari 的流量走兩跳，網站看到的是 Cloudflare、Akamai 或 Fastly 的出口，不是你的位址。但網站仍然看得出這是轉送，也知道你大概在哪。下面是你的轉送顯示出來的樣子。",
      focus_h: "你的轉送",
      docs: [
        ["網站看得出我在用私密轉送嗎？", "看得出。蘋果公開了它的出口位址清單，這個頁面就拿你的位址去對照。網站看到的是轉送出口，不是你自己的位址，通常還看得到你附近的城市或地區：蘋果刻意保留這一點，讓在地內容照常運作。"],
        ["私密轉送是 VPN 嗎？", "不是。它只管 Safari 和 App 裡未加密的流量，不是所有 App；不能選到別的國家；它對網站隱藏你的位址，對網路業者隱藏你造訪了什麼。在網站眼裡，它像一個隱私轉送，不像一個人在國外。"],
        ["為什麼 WebRTC 顯示另一個轉送位址？", "每條連線都有自己的出口，所以頁面和 WebRTC 可能從不同的轉送位址出去。兩個都是轉送出口，不算洩漏；只有旁邊出現真實位址時，檢測才會警告。"],
      ],
    },
    ja: {
      seo_title: "iCloud プライベートリレー検査：サイトにまだ見えるもの · Who Are You",
      seo_desc: "無料の iCloud プライベートリレー検査：あなたのアドレスがリレーの出口か、どのネットワークか、どの地域に見えるか、WebRTC がその外へ漏れていないかを確認。IP や元のデータは保存せず、どれだけありふれているかを数える匿名の集計だけを残します。",
      seo_kw: "iCloud プライベートリレー 確認, Private Relay 検出, プライベートリレー IP, Safari プライベートリレー",
      h1: "iCloud プライベートリレー検査", og_sub: "リレーはオン？それでも見えるものは？",
      intro: "iCloud プライベートリレーは Safari の通信を 2 段で中継し、サイトにはあなたのアドレスではなく Cloudflare・Akamai・Fastly の出口が見えます。それでもリレーであることやおおよその場所は分かります。あなたのリレーの見え方はこちら。",
      focus_h: "あなたのリレー",
      docs: [
        ["プライベートリレーを使っているとサイトに分かる？", "分かります。Apple は出口アドレスの一覧を公開しており、このページもそれと照合します。サイトに見えるのはリレーの出口で、あなた自身のアドレスではありません。ただし近くの都市や地域は見えることが多く、地域のコンテンツが使えるよう Apple が意図的に残しています。"],
        ["プライベートリレーは VPN？", "いいえ。対象は Safari とアプリの暗号化されていない通信だけで、すべてのアプリではありません。別の国も選べません。サイトからはアドレスを、通信事業者からは閲覧先を隠します。サイトから見ればプライバシー中継であって、海外にいる人ではありません。"],
        ["WebRTC が別のリレーアドレスを示すのはなぜ？", "接続ごとに出口が割り当てられるため、ページと WebRTC が別のリレーアドレスから出ることがあります。どちらもリレーの出口なら漏れではありません。本当のアドレスが並んだときだけ警告します。"],
      ],
    },
    ko: {
      seo_title: "iCloud 비공개 릴레이 검사: 사이트가 여전히 보는 것 · Who Are You",
      seo_desc: "무료 iCloud 비공개 릴레이 검사: 주소가 릴레이 출구인지, 어느 네트워크인지, 어느 지역으로 보이는지, WebRTC가 그 밖으로 새지 않는지 확인합니다. IP와 원본 데이터는 저장하지 않고, 얼마나 흔한지 세는 익명 집계만 남깁니다.",
      seo_kw: "iCloud 비공개 릴레이 확인, Private Relay 탐지, 비공개 릴레이 IP, Safari 비공개 릴레이",
      h1: "iCloud 비공개 릴레이 검사", og_sub: "릴레이가 켜져 있나요? 그래도 보이는 건?",
      intro: "iCloud 비공개 릴레이는 Safari 트래픽을 두 단계로 중계해서, 사이트는 당신 주소 대신 Cloudflare·Akamai·Fastly의 출구를 봅니다. 그래도 릴레이라는 것과 대략적인 위치는 알 수 있어요. 당신의 릴레이가 보이는 모습입니다.",
      focus_h: "당신의 릴레이",
      docs: [
        ["사이트가 비공개 릴레이 사용을 알 수 있나요?", "네. Apple이 출구 주소 목록을 공개하고, 이 페이지도 그 목록과 대조합니다. 사이트에는 당신 주소가 아니라 릴레이 출구가 보이고, 보통 근처 도시나 지역도 보입니다. 지역 콘텐츠가 동작하도록 Apple이 일부러 남긴 것이에요."],
        ["비공개 릴레이는 VPN인가요?", "아니요. Safari와 앱의 암호화되지 않은 트래픽만 다루고 모든 앱이 아닙니다. 다른 나라를 고를 수도 없어요. 사이트에는 주소를, 통신사에는 방문한 곳을 숨깁니다. 사이트가 보기엔 해외에 있는 사람이 아니라 개인정보 릴레이입니다."],
        ["WebRTC가 다른 릴레이 주소를 보이는 이유는?", "연결마다 출구가 따로 주어져서 페이지와 WebRTC가 서로 다른 릴레이 주소로 나갈 수 있어요. 둘 다 릴레이 출구면 유출이 아닙니다. 실제 주소가 함께 보일 때만 경고합니다."],
      ],
    },
    es: {
      seo_title: "Comprobar el Relé Privado de iCloud: lo que los sitios aún ven · Who Are You",
      seo_desc: "Comprobación gratuita del Relé Privado de iCloud: si tu dirección es una salida del relé, de qué red es, qué región muestra y si WebRTC filtra algo por fuera. No guarda tu IP ni los datos en bruto, solo recuentos anónimos de lo común que eres.",
      seo_kw: "comprobar Relé Privado de iCloud, iCloud Private Relay, IP del relé privado, detectar Private Relay, Safari relé privado",
      h1: "Comprobar el Relé Privado de iCloud", og_sub: "¿Está activo el relé y qué sigue mostrando?",
      intro: "El Relé Privado de iCloud envía el tráfico de Safari por dos saltos, así que los sitios ven una salida de Cloudflare, Akamai o Fastly en lugar de tu dirección. Aun así saben que es un relé y más o menos dónde estás. Esto es lo que muestra el tuyo.",
      focus_h: "Tu relé",
      docs: [
        ["¿Los sitios saben que uso el Relé Privado?", "Sí. Apple publica la lista de sus direcciones de salida y esta página compara la tuya con ella. Un sitio ve una salida del relé, no tu dirección, y normalmente una ciudad o región cercana, que Apple conserva a propósito para que el contenido local siga funcionando."],
        ["¿El Relé Privado es una VPN?", "No. Cubre Safari y el tráfico sin cifrar de las apps, no todas las apps; no permite elegir otro país; y oculta tu dirección a los sitios y lo que visitas a tu proveedor. Para un sitio parece un relé de privacidad, no alguien en el extranjero."],
        ["¿Por qué WebRTC muestra otra dirección del relé?", "Cada conexión recibe su propia salida, así que la página y WebRTC pueden salir por direcciones distintas del relé. Que ambas sean salidas del relé no es una fuga; la comprobación solo avisa si aparece una dirección real a su lado."],
      ],
    },
    fr: {
      seo_title: "Vérification du relais privé iCloud : ce que les sites voient encore · Qui êtes-vous ?",
      seo_desc: "Vérification gratuite du relais privé iCloud (iCloud Private Relay) : votre adresse est-elle une sortie du relais, à quel réseau appartient-elle, quelle région affiche-t-elle, et WebRTC laisse-t-il fuir quelque chose malgré lui ? Aucune IP ni donnée brute n’est gardée, seulement des compteurs anonymes.",
      seo_kw: "relais privé iCloud, iCloud Private Relay test, relais privé activé, IP relais privé, détection relais privé, Safari relais privé",
      h1: "Vérification du relais privé iCloud", og_sub: "Le relais est-il actif, et que montre-t-il encore ?",
      intro: "Le relais privé iCloud fait passer le trafic de Safari par deux relais : les sites voient une sortie gérée par Cloudflare, Akamai ou Fastly, et non votre adresse. Les sites peuvent quand même voir que c’est un relais, et à peu près où vous êtes. Voici ce que montre le vôtre.",
      focus_h: "Votre relais",
      docs: [
        ["Les sites voient-ils que j’utilise le relais privé ?", "Oui. Apple publie la liste de ses adresses de sortie, et cette page compare votre adresse à cette liste. Un site voit une sortie du relais, pas votre propre adresse, et en général une ville ou une région proche de vous : Apple la garde exprès pour que les contenus locaux continuent de fonctionner."],
        ["Le relais privé est-il un VPN ?", "Non. Il couvre Safari et le trafic non chiffré des apps, pas toutes les apps ; on ne peut pas choisir un autre pays ; il cache votre adresse aux sites, et cache à votre fournisseur d’accès les sites que vous visitez. Pour un site, cela ressemble à un relais de confidentialité, pas à quelqu’un à l’étranger."],
        ["Pourquoi WebRTC affiche-t-il une autre adresse du relais ?", "Chaque connexion reçoit sa propre sortie : la page et WebRTC peuvent donc sortir par des adresses de relais différentes. Si ce sont toutes deux des sorties du relais, il n’y a pas de fuite ; le contrôle ne signale qu’une vraie adresse à côté d’elles."],
      ],
    },
    de: {
      seo_title: "iCloud Privat-Relay prüfen: Was Websites trotzdem sehen · Wer bist du?",
      seo_desc: "Kostenloser Check für iCloud Privat-Relay (Private Relay): ob deine Adresse ein Relay-Ausgang ist, zu welchem Netz sie gehört, welche Region sie zeigt und ob WebRTC an ihm vorbei etwas verrät. IP und Rohdaten werden nicht gespeichert, nur anonyme Zähler.",
      seo_kw: "iCloud Privat-Relay prüfen, iCloud Private Relay Test, ist Privat-Relay an, Private Relay IP, Private Relay erkennen, Safari Privat-Relay",
      h1: "iCloud Privat-Relay prüfen", og_sub: "Ist das Relay an, und was zeigt es noch?",
      intro: "iCloud Privat-Relay leitet den Verkehr von Safari über zwei Stationen, sodass Websites einen Ausgang von Cloudflare, Akamai oder Fastly sehen statt deiner Adresse. Websites erkennen trotzdem, dass es ein Relay ist, und ungefähr, wo du bist. Hier siehst du, was deins zeigt.",
      focus_h: "Dein Relay",
      docs: [
        ["Merken Websites, dass ich Privat-Relay nutze?", "Ja. Apple veröffentlicht die Liste seiner Ausgangsadressen, und diese Seite vergleicht deine Adresse damit. Eine Website sieht einen Relay-Ausgang, nicht deine eigene Adresse, und meist eine Stadt oder Region in deiner Nähe. Die behält Apple absichtlich bei, damit lokale Inhalte weiter funktionieren."],
        ["Ist Privat-Relay ein VPN?", "Nein. Es deckt Safari und unverschlüsselten Verkehr von Apps ab, nicht jede App; du kannst kein anderes Land wählen; und es versteckt deine Adresse vor Websites und vor deinem Provider, welche Websites du besuchst. Für eine Website sieht das nach einem Datenschutz-Relay aus, nicht nach jemandem im Ausland."],
        ["Warum zeigt WebRTC eine andere Relay-Adresse?", "Jede Verbindung bekommt einen eigenen Ausgang, daher können Seite und WebRTC über verschiedene Relay-Adressen rauskommen. Sind beide Relay-Ausgänge, ist das kein Leck; die Prüfung schlägt nur an, wenn daneben eine echte Adresse auftaucht."],
      ],
    },
    pt: {
      seo_title: "Verificar a Retransmissão Privada do iCloud: o que os sites ainda veem · Who Are You",
      seo_desc: "Verificação grátis da Retransmissão Privada do iCloud: se seu endereço é uma saída da retransmissão, de qual rede, qual região mostra e se o WebRTC vaza algo por fora. Não guarda seu IP nem os dados brutos, só contagens anônimas de quão comum você é.",
      seo_kw: "verificar Retransmissão Privada do iCloud, iCloud Private Relay, IP da retransmissão privada, detectar Private Relay, Safari",
      h1: "Verificar a Retransmissão Privada do iCloud", og_sub: "A retransmissão está ligada, e o que ainda mostra?",
      intro: "A Retransmissão Privada do iCloud manda o tráfego do Safari por dois saltos, então os sites veem uma saída da Cloudflare, Akamai ou Fastly em vez do seu endereço. Mesmo assim sabem que é uma retransmissão e mais ou menos onde você está. Veja o que a sua mostra.",
      focus_h: "Sua retransmissão",
      docs: [
        ["Os sites sabem que uso a Retransmissão Privada?", "Sim. A Apple publica a lista dos endereços de saída, e esta página compara o seu com ela. Um site vê uma saída da retransmissão, não seu endereço, e em geral uma cidade ou região próxima, que a Apple mantém de propósito para o conteúdo local funcionar."],
        ["A Retransmissão Privada é uma VPN?", "Não. Ela cobre o Safari e o tráfego sem criptografia de apps, não todos os apps; não deixa escolher outro país; e esconde seu endereço dos sites e o que você visita da operadora. Para um site, parece um retransmissor de privacidade, não alguém no exterior."],
        ["Por que o WebRTC mostra outro endereço da retransmissão?", "Cada conexão ganha uma saída própria, então a página e o WebRTC podem sair por endereços diferentes da retransmissão. Duas saídas da retransmissão não são vazamento; a verificação só avisa se aparecer um endereço real ao lado."],
      ],
    },
    ru: {
      seo_title: "Проверка «Частного узла» iCloud: что сайты видят всё равно · Кто вы?",
      seo_desc: "Бесплатная проверка «Частного узла» iCloud (iCloud Private Relay): является ли ваш адрес выходом ретранслятора, какой сети он принадлежит, какой регион показывает и не утекает ли что-то в обход него через WebRTC. IP и исходные данные не сохраняются — только анонимные счётчики.",
      seo_kw: "частный узел iCloud, iCloud Private Relay проверка, включён ли частный узел, IP частного узла, обнаружение Private Relay, Safari частный узел",
      h1: "Проверка «Частного узла» iCloud", og_sub: "Включён ли ретранслятор и что он всё же показывает?",
      intro: "«Частный узел» iCloud пропускает трафик Safari через два ретранслятора, поэтому сайты видят выход Cloudflare, Akamai или Fastly, а не ваш адрес. Но сайты всё равно понимают, что это ретранслятор, и примерно — где вы. Здесь — что показывает ваш.",
      focus_h: "Ваш ретранслятор",
      docs: [
        ["Видят ли сайты, что я пользуюсь «Частным узлом»?", "Да. Apple публикует список своих выходных адресов, и эта страница сверяет с ним ваш адрес. Сайт видит выход ретранслятора, а не ваш собственный адрес, и обычно город или регион рядом с вами: Apple оставляет его нарочно, чтобы местный контент продолжал работать."],
        ["«Частный узел» — это VPN?", "Нет. Он охватывает Safari и незашифрованный трафик приложений, а не все приложения; другую страну выбрать нельзя; он скрывает ваш адрес от сайтов, а от провайдера — то, какие сайты вы открываете. Для сайта это выглядит как ретранслятор для приватности, а не как человек за границей."],
        ["Почему WebRTC показывает другой адрес ретранслятора?", "Каждое соединение получает свой выход, поэтому страница и WebRTC могут выходить через разные адреса ретранслятора. Если оба — выходы ретранслятора, утечки нет; проверка срабатывает, только если рядом с ними появляется настоящий адрес."],
      ],
    },
  },
  "warp-check": {
    en: {
      seo_title: "Cloudflare WARP Check: is WARP on, and can sites tell? · Who Are You",
      seo_desc: "Free Cloudflare WARP check: whether your traffic goes through WARP, the address and network sites see, the Cloudflare data center you reach and the key exchange in use. No IP or raw data is kept, only anonymous counts of how common you are.",
      seo_kw: "Cloudflare WARP check, is WARP on, WARP detection, 1.1.1.1 WARP test, WARP IP",
      h1: "Cloudflare WARP check", og_sub: "Is WARP on, and what do sites see?",
      intro: "WARP, the VPN in Cloudflare's 1.1.1.1 app, sends your traffic into Cloudflare's network. Any site behind Cloudflare can read whether a visitor arrives through WARP. Here is what yours says, and what address and network the site sees.",
      focus_h: "Your WARP",
      docs: [
        ["How can a site tell I use WARP?", "Sites behind Cloudflare can ask Cloudflare's trace, which says warp=on for traffic that comes through WARP. Even elsewhere, a WARP address belongs to Cloudflare's own network (AS13335), which sites list as a data center rather than a home connection."],
        ["Does WARP hide where I am?", "Mostly not. WARP exits near you, usually in your own country, so a site still places you roughly where you are; it is built for privacy and speed, not for appearing elsewhere. Sites see a Cloudflare address instead of your provider's."],
        ["What does warp=plus mean?", "The trace says plus for WARP+, the paid tier with Cloudflare's faster routes. To a site the two look the same: a Cloudflare address and WARP on."],
      ],
    },
    "zh-CN": {
      seo_title: "Cloudflare WARP 检测：WARP 开着吗，网站看得出吗 · 你是谁",
      seo_desc: "免费 Cloudflare WARP 检测：看你的流量是否经过 WARP、网站看到的地址和网络、连到的 Cloudflare 机房和使用的密钥交换。不保存 IP 和原始数据，只累计匿名计数，用来算你有多常见。",
      seo_kw: "Cloudflare WARP 检测, WARP 是否开启, WARP 检测, 1.1.1.1 WARP, WARP IP",
      h1: "Cloudflare WARP 检测", og_sub: "WARP 开着吗？网站看到了什么？",
      intro: "WARP 是 Cloudflare 1.1.1.1 App 里的 VPN，把你的流量送进 Cloudflare 的网络。任何接入 Cloudflare 的网站都能读到访客是不是经 WARP 来的。下面是你的结果，以及网站看到的地址和网络。",
      focus_h: "你的 WARP",
      docs: [
        ["网站怎么知道我在用 WARP？", "接入 Cloudflare 的网站可以读 Cloudflare 的 trace，经 WARP 来的流量会显示 warp=on。就算在别处，WARP 的地址也属于 Cloudflare 自己的网络（AS13335），网站会把它当成机房，而不是家庭宽带。"],
        ["WARP 能隐藏我在哪吗？", "大多不能。WARP 从你附近出去，通常就在你自己的国家，所以网站仍能大致定位到你；它是为隐私和速度做的，不是为了装成在别处。网站看到的是 Cloudflare 的地址，而不是你运营商的。"],
        ["warp=plus 是什么意思？", "trace 里显示 plus 表示 WARP+，也就是走 Cloudflare 更快线路的付费版。对网站来说两者看起来一样：一个 Cloudflare 地址，WARP 开着。"],
      ],
    },
    "zh-TW": {
      seo_title: "Cloudflare WARP 檢測：WARP 開著嗎，網站看得出嗎 · 你是誰",
      seo_desc: "免費 Cloudflare WARP 檢測：看你的流量是否經過 WARP、網站看到的位址和網路、連到的 Cloudflare 機房和使用的金鑰交換。不保存 IP 和原始資料，只累計匿名計數，用來算你有多常見。",
      seo_kw: "Cloudflare WARP 檢測, WARP 是否開啟, WARP 檢測, 1.1.1.1 WARP, WARP IP",
      h1: "Cloudflare WARP 檢測", og_sub: "WARP 開著嗎？網站看到了什麼？",
      intro: "WARP 是 Cloudflare 1.1.1.1 App 裡的 VPN，把你的流量送進 Cloudflare 的網路。任何接入 Cloudflare 的網站都能讀到訪客是不是經 WARP 來的。下面是你的結果，以及網站看到的位址和網路。",
      focus_h: "你的 WARP",
      docs: [
        ["網站怎麼知道我在用 WARP？", "接入 Cloudflare 的網站可以讀 Cloudflare 的 trace，經 WARP 來的流量會顯示 warp=on。就算在別處，WARP 的位址也屬於 Cloudflare 自己的網路（AS13335），網站會把它當成機房，而不是家用寬頻。"],
        ["WARP 能隱藏我在哪嗎？", "大多不能。WARP 從你附近出去，通常就在你自己的國家，所以網站仍能大致定位到你；它是為隱私和速度設計的，不是為了裝成在別處。網站看到的是 Cloudflare 的位址，而不是你電信業者的。"],
        ["warp=plus 是什麼意思？", "trace 裡顯示 plus 表示 WARP+，也就是走 Cloudflare 更快線路的付費版。對網站來說兩者看起來一樣：一個 Cloudflare 位址，WARP 開著。"],
      ],
    },
    ja: {
      seo_title: "Cloudflare WARP 検査：WARP はオン？サイトに分かる？ · Who Are You",
      seo_desc: "無料の Cloudflare WARP 検査：通信が WARP を通っているか、サイトに見えるアドレスとネットワーク、つながった Cloudflare のデータセンター、使われている鍵交換を確認。IP や元のデータは保存せず、どれだけありふれているかを数える匿名の集計だけを残します。",
      seo_kw: "Cloudflare WARP 確認, WARP オン 確認, WARP 検出, 1.1.1.1 WARP, WARP IP",
      h1: "Cloudflare WARP 検査", og_sub: "WARP はオン？サイトには何が見える？",
      intro: "WARP は Cloudflare の 1.1.1.1 アプリに入っている VPN で、通信を Cloudflare のネットワークに送ります。Cloudflare の後ろにあるサイトなら、訪問者が WARP 経由かどうかを読めます。あなたの結果と、サイトに見えるアドレスとネットワークはこちら。",
      focus_h: "あなたの WARP",
      docs: [
        ["サイトはどうやって WARP 利用を知る？", "Cloudflare の後ろにあるサイトは Cloudflare の trace を読め、WARP 経由の通信では warp=on と出ます。それ以外でも、WARP のアドレスは Cloudflare 自身のネットワーク（AS13335）なので、サイトは家庭回線ではなくデータセンターとして扱います。"],
        ["WARP で居場所は隠せる？", "ほとんど隠せません。WARP は近くから、たいてい自国から出るので、サイトはおおよその場所を把握できます。プライバシーと速度のためのもので、別の場所に見せるためではありません。見えるのは通信事業者ではなく Cloudflare のアドレスです。"],
        ["warp=plus とは？", "trace の plus は有料版 WARP+ で、Cloudflare の速い経路を使います。サイトから見ればどちらも同じで、Cloudflare のアドレスと WARP オンです。"],
      ],
    },
    ko: {
      seo_title: "Cloudflare WARP 검사: WARP가 켜져 있고, 사이트가 알까? · Who Are You",
      seo_desc: "무료 Cloudflare WARP 검사: 트래픽이 WARP를 거치는지, 사이트가 보는 주소와 네트워크, 연결된 Cloudflare 데이터센터와 사용 중인 키 교환을 확인합니다. IP와 원본 데이터는 저장하지 않고, 얼마나 흔한지 세는 익명 집계만 남깁니다.",
      seo_kw: "Cloudflare WARP 확인, WARP 켜짐 확인, WARP 탐지, 1.1.1.1 WARP, WARP IP",
      h1: "Cloudflare WARP 검사", og_sub: "WARP가 켜져 있나요? 사이트는 무엇을 보나요?",
      intro: "WARP는 Cloudflare 1.1.1.1 앱의 VPN으로, 트래픽을 Cloudflare 네트워크로 보냅니다. Cloudflare 뒤에 있는 사이트라면 방문자가 WARP로 왔는지 읽을 수 있어요. 당신의 결과와 사이트가 보는 주소·네트워크입니다.",
      focus_h: "당신의 WARP",
      docs: [
        ["사이트는 WARP 사용을 어떻게 아나요?", "Cloudflare 뒤의 사이트는 Cloudflare trace를 읽을 수 있고, WARP로 온 트래픽은 warp=on으로 나옵니다. 그 밖에서도 WARP 주소는 Cloudflare 자체 네트워크(AS13335)라 사이트는 가정용 회선이 아니라 데이터센터로 봅니다."],
        ["WARP로 위치를 숨길 수 있나요?", "대부분 아니요. WARP는 가까운 곳, 보통 자기 나라에서 나가서 사이트는 대략적인 위치를 알 수 있어요. 개인정보와 속도를 위한 것이지 다른 곳처럼 보이려는 게 아닙니다. 보이는 건 통신사 대신 Cloudflare 주소예요."],
        ["warp=plus는 무슨 뜻인가요?", "trace의 plus는 Cloudflare의 더 빠른 경로를 쓰는 유료 WARP+입니다. 사이트 입장에서는 둘 다 같아요: Cloudflare 주소에 WARP 켜짐."],
      ],
    },
    es: {
      seo_title: "Comprobar Cloudflare WARP: ¿está activo y lo notan los sitios? · Who Are You",
      seo_desc: "Comprobación gratuita de Cloudflare WARP: si tu tráfico pasa por WARP, la dirección y la red que ven los sitios, el centro de datos de Cloudflare al que llegas y el intercambio de claves en uso. No guarda tu IP ni los datos en bruto, solo recuentos anónimos de lo común que eres.",
      seo_kw: "comprobar Cloudflare WARP, WARP activado, detectar WARP, 1.1.1.1 WARP, IP de WARP",
      h1: "Comprobar Cloudflare WARP", og_sub: "¿WARP está activo y qué ven los sitios?",
      intro: "WARP, la VPN de la app 1.1.1.1 de Cloudflare, mete tu tráfico en la red de Cloudflare. Cualquier sitio detrás de Cloudflare puede leer si un visitante llega por WARP. Esto dice el tuyo, y qué dirección y red ve el sitio.",
      focus_h: "Tu WARP",
      docs: [
        ["¿Cómo sabe un sitio que uso WARP?", "Los sitios detrás de Cloudflare pueden consultar su trace, que dice warp=on para el tráfico que llega por WARP. Incluso fuera de Cloudflare, una dirección de WARP pertenece a la red de Cloudflare (AS13335), que los sitios clasifican como centro de datos y no como conexión doméstica."],
        ["¿WARP oculta dónde estoy?", "Casi nunca. WARP sale cerca de ti, normalmente en tu propio país, así que un sitio te sigue ubicando más o menos donde estás; está hecho para privacidad y velocidad, no para parecer de otro lugar. Los sitios ven una dirección de Cloudflare en vez de la de tu proveedor."],
        ["¿Qué significa warp=plus?", "El trace dice plus para WARP+, la versión de pago con las rutas más rápidas de Cloudflare. Para un sitio ambas se ven igual: una dirección de Cloudflare y WARP activo."],
      ],
    },
    fr: {
      seo_title: "Vérification de Cloudflare WARP : WARP est-il actif, et les sites le voient-ils ? · Qui êtes-vous ?",
      seo_desc: "Vérification gratuite de Cloudflare WARP : votre trafic passe-t-il par WARP, quelle adresse et quel réseau voient les sites, quel centre de données Cloudflare vous atteignez, et quel échange de clés est utilisé. Aucune IP ni donnée brute n’est gardée, seulement des compteurs anonymes.",
      seo_kw: "vérifier Cloudflare WARP, WARP activé, détection WARP, test 1.1.1.1 WARP, IP WARP",
      h1: "Vérification de Cloudflare WARP", og_sub: "WARP est-il actif, et que voient les sites ?",
      intro: "WARP, le VPN de l’app 1.1.1.1 de Cloudflare, fait entrer votre trafic dans le réseau de Cloudflare. Tout site placé derrière Cloudflare peut savoir si un visiteur arrive par WARP. Voici ce que dit le vôtre, et quelle adresse et quel réseau voit le site.",
      focus_h: "Votre WARP",
      docs: [
        ["Comment un site sait-il que j’utilise WARP ?", "Les sites derrière Cloudflare peuvent consulter le trace de Cloudflare, qui indique warp=on pour le trafic venu par WARP. Même ailleurs, une adresse WARP appartient au réseau de Cloudflare (AS13335), que les sites classent comme datacenter et non comme connexion domestique."],
        ["WARP cache-t-il où je suis ?", "En grande partie, non. WARP sort près de chez vous, en général dans votre propre pays : un site vous situe donc toujours à peu près où vous êtes. WARP est pensé pour la confidentialité et la vitesse, pas pour paraître ailleurs. Les sites voient une adresse Cloudflare au lieu de celle de votre fournisseur d’accès."],
        ["Que signifie warp=plus ?", "Le trace indique plus pour WARP+, la formule payante avec les routes plus rapides de Cloudflare. Pour un site, les deux se ressemblent : une adresse Cloudflare et WARP actif."],
      ],
    },
    de: {
      seo_title: "Cloudflare-WARP-Check: Ist WARP an, und merken Websites das? · Wer bist du?",
      seo_desc: "Kostenloser Cloudflare-WARP-Check: ob dein Verkehr über WARP läuft, welche Adresse und welches Netz Websites sehen, welches Cloudflare-Rechenzentrum du erreichst und welcher Schlüsselaustausch genutzt wird. IP und Rohdaten werden nicht gespeichert, nur anonyme Zähler.",
      seo_kw: "Cloudflare WARP Check, ist WARP an, WARP erkennen, 1.1.1.1 WARP Test, WARP IP",
      h1: "Cloudflare-WARP-Check", og_sub: "Ist WARP an, und was sehen Websites?",
      intro: "WARP, das VPN in der App 1.1.1.1 von Cloudflare, leitet deinen Verkehr ins Netz von Cloudflare. Jede Website hinter Cloudflare kann lesen, ob ein Besucher über WARP kommt. Hier siehst du, was deins sagt und welche Adresse und welches Netz die Website sieht.",
      focus_h: "Dein WARP",
      docs: [
        ["Wie merkt eine Website, dass ich WARP nutze?", "Websites hinter Cloudflare können den Cloudflare-Trace abfragen, der bei Verkehr über WARP warp=on meldet. Auch anderswo gehört eine WARP-Adresse zum Netz von Cloudflare (AS13335), das Websites als Rechenzentrum einstufen und nicht als Privatanschluss."],
        ["Versteckt WARP, wo ich bin?", "Meist nicht. WARP kommt in deiner Nähe raus, meist im eigenen Land, also ordnet dich eine Website weiterhin ungefähr richtig ein. WARP ist für Privatsphäre und Tempo gebaut, nicht dafür, woanders zu wirken. Websites sehen eine Cloudflare-Adresse statt der deines Providers."],
        ["Was bedeutet warp=plus?", "Der Trace meldet plus für WARP+, das kostenpflichtige Angebot mit den schnelleren Routen von Cloudflare. Für eine Website sehen beide gleich aus: eine Cloudflare-Adresse und WARP an."],
      ],
    },
    pt: {
      seo_title: "Verificar o Cloudflare WARP: está ligado e os sites percebem? · Who Are You",
      seo_desc: "Verificação grátis do Cloudflare WARP: se seu tráfego passa pelo WARP, o endereço e a rede que os sites veem, o data center da Cloudflare que você alcança e a troca de chaves em uso. Não guarda seu IP nem os dados brutos, só contagens anônimas de quão comum você é.",
      seo_kw: "verificar Cloudflare WARP, WARP ligado, detectar WARP, 1.1.1.1 WARP, IP do WARP",
      h1: "Verificar o Cloudflare WARP", og_sub: "O WARP está ligado, e o que os sites veem?",
      intro: "O WARP, a VPN do app 1.1.1.1 da Cloudflare, leva seu tráfego para a rede da Cloudflare. Qualquer site atrás da Cloudflare consegue ler se o visitante chega pelo WARP. Veja o que diz o seu, e o endereço e a rede que o site vê.",
      focus_h: "Seu WARP",
      docs: [
        ["Como um site sabe que uso o WARP?", "Sites atrás da Cloudflare podem consultar o trace dela, que mostra warp=on para tráfego vindo pelo WARP. Mesmo fora dela, um endereço do WARP pertence à rede da Cloudflare (AS13335), que os sites classificam como data center e não como conexão residencial."],
        ["O WARP esconde onde estou?", "Quase nunca. O WARP sai perto de você, em geral no seu próprio país, então um site continua te localizando mais ou menos; ele foi feito para privacidade e velocidade, não para parecer de outro lugar. Os sites veem um endereço da Cloudflare em vez do da sua operadora."],
        ["O que significa warp=plus?", "O trace mostra plus para o WARP+, a versão paga com as rotas mais rápidas da Cloudflare. Para um site, os dois parecem iguais: um endereço da Cloudflare e WARP ligado."],
      ],
    },
    ru: {
      seo_title: "Проверка Cloudflare WARP: включён ли WARP и видят ли это сайты? · Кто вы?",
      seo_desc: "Бесплатная проверка Cloudflare WARP: идёт ли ваш трафик через WARP, какой адрес и какую сеть видят сайты, до какого дата-центра Cloudflare вы доходите и какой обмен ключами используется. IP и исходные данные не сохраняются — только анонимные счётчики.",
      seo_kw: "проверка Cloudflare WARP, включён ли WARP, обнаружение WARP, тест 1.1.1.1 WARP, IP WARP",
      h1: "Проверка Cloudflare WARP", og_sub: "Включён ли WARP и что видят сайты?",
      intro: "WARP — VPN из приложения 1.1.1.1 от Cloudflare — заводит ваш трафик в сеть Cloudflare. Любой сайт за Cloudflare может узнать, пришёл ли посетитель через WARP. Здесь — что говорит ваш и какой адрес и сеть видит сайт.",
      focus_h: "Ваш WARP",
      docs: [
        ["Как сайт узнаёт, что я пользуюсь WARP?", "Сайты за Cloudflare могут заглянуть в трассировку Cloudflare: для трафика через WARP там написано warp=on. Даже в других местах адрес WARP принадлежит собственной сети Cloudflare (AS13335), которую сайты относят к дата-центрам, а не к домашним подключениям."],
        ["Скрывает ли WARP, где я?", "В основном нет. WARP выходит рядом с вами, обычно в вашей же стране, так что сайт по-прежнему примерно знает, где вы: WARP сделан для приватности и скорости, а не для того, чтобы казаться в другом месте. Сайты видят адрес Cloudflare вместо адреса вашего провайдера."],
        ["Что значит warp=plus?", "Так трассировка помечает WARP+, платный тариф с более быстрыми маршрутами Cloudflare. Для сайта оба выглядят одинаково: адрес Cloudflare и включённый WARP."],
      ],
    },
  },
  "http3-ech": {
    en: {
      seo_title: "HTTP/3, ECH and Post-Quantum TLS Test · Who Are You",
      seo_desc: "Free connection test: whether your browser uses HTTP/3, hides the site's name with Encrypted Client Hello (ECH), and agrees a post-quantum key (X25519MLKEM768), and what a missing one says about your network or proxy. No IP or raw data is kept, only anonymous counts of how common you are.",
      seo_kw: "HTTP/3 test, ECH test, encrypted client hello check, post-quantum TLS test, X25519MLKEM768, QUIC test, TLS check",
      h1: "HTTP/3, ECH and post-quantum test", og_sub: "How modern is your connection, and what's in the way?",
      intro: "A current browser on an open network talks HTTP/3 over UDP, hides which site it connects to with ECH, and agrees a key that a future quantum computer can't break. When one of them is missing, something on the path is often the reason. Here is your connection.",
      focus_h: "Your connection",
      docs: [
        ["Why isn't HTTP/3 used?", "HTTP/3 runs over UDP port 443. A browser learns that a site speaks it from a first answer over TCP, so a first visit may not switch yet; but if UDP gets out nowhere, a network or a proxy is blocking it or doesn't carry UDP at all. Many proxy setups carry only TCP."],
        ["What is ECH and why is it off?", "Encrypted Client Hello encrypts the site's name, which TLS otherwise sends in the clear for anyone on the path to read. The browser needs the site's keys from a DNS HTTPS record: Firefox reads them only over its own DNS over HTTPS; Chrome needs a resolver that returns HTTPS records; Safari doesn't use ECH yet."],
        ["What does a classical key exchange mean?", "Chrome 124+, Firefox 132+ and Safari 26 offer X25519MLKEM768 by default. A current browser that ends up with plain X25519 points to something in between that makes its own TLS connection: an antivirus, a company proxy, or a proxy client that terminates TLS. On older browsers it's just their age."],
      ],
    },
    "zh-CN": {
      seo_title: "HTTP/3、ECH 与后量子加密检测 · 你是谁",
      seo_desc: "免费连接协议检测：看你的浏览器是否用上了 HTTP/3、是否用 ECH 隐藏了访问的网站名、是否协商了后量子密钥（X25519MLKEM768），缺了哪一项又说明你的网络或代理怎么了。不保存 IP 和原始数据，只累计匿名计数，用来算你有多常见。",
      seo_kw: "HTTP/3 检测, ECH 检测, Encrypted Client Hello, 后量子加密检测, X25519MLKEM768, QUIC 检测, TLS 检测",
      h1: "HTTP/3、ECH 与后量子加密检测", og_sub: "你的连接有多新？中间卡在哪？",
      intro: "新浏览器在畅通的网络上，会用 UDP 跑 HTTP/3，用 ECH 隐藏自己连的是哪个网站，再协商一把未来量子计算机也破不了的密钥。少了哪一项，往往是路上的什么东西造成的。下面是你的连接。",
      focus_h: "你的连接",
      docs: [
        ["为什么没用上 HTTP/3？", "HTTP/3 走 UDP 443 端口。浏览器要先通过 TCP 收到网站的第一次回应，才知道它支持 HTTP/3，所以第一次访问可能还没切换；但如果 UDP 哪都出不去，就是网络或代理把它拦了，或者根本不转发 UDP。很多代理配置只转 TCP。"],
        ["ECH 是什么，为什么没开？", "Encrypted Client Hello 会加密网站名。否则 TLS 会明文发送它，路上谁都看得到。浏览器得从 DNS 的 HTTPS 记录里拿到网站的密钥：Firefox 只在用自己的 DNS over HTTPS 时读取；Chrome 需要能返回 HTTPS 记录的解析器；Safari 目前还不用 ECH。"],
        ["密钥交换是传统的，说明什么？", "Chrome 124+、Firefox 132+ 和 Safari 26 默认都会提供 X25519MLKEM768。新浏览器最后却用了普通的 X25519，说明中间有东西自己建立了 TLS 连接：杀毒软件、公司代理，或者会解开 TLS 的代理客户端。旧浏览器则只是版本太老。"],
      ],
    },
    "zh-TW": {
      seo_title: "HTTP/3、ECH 與後量子加密檢測 · 你是誰",
      seo_desc: "免費連線協定檢測：看你的瀏覽器是否用上了 HTTP/3、是否用 ECH 隱藏了造訪的網站名稱、是否協商了後量子金鑰（X25519MLKEM768），缺了哪一項又代表你的網路或代理怎麼了。不保存 IP 和原始資料，只累計匿名計數，用來算你有多常見。",
      seo_kw: "HTTP/3 檢測, ECH 檢測, Encrypted Client Hello, 後量子加密檢測, X25519MLKEM768, QUIC 檢測, TLS 檢測",
      h1: "HTTP/3、ECH 與後量子加密檢測", og_sub: "你的連線有多新？中間卡在哪？",
      intro: "新瀏覽器在暢通的網路上，會用 UDP 跑 HTTP/3，用 ECH 隱藏自己連的是哪個網站，再協商一把未來量子電腦也破不了的金鑰。少了哪一項，往往是路上的什麼東西造成的。下面是你的連線。",
      focus_h: "你的連線",
      docs: [
        ["為什麼沒用上 HTTP/3？", "HTTP/3 走 UDP 443 連接埠。瀏覽器要先透過 TCP 收到網站的第一次回應，才知道它支援 HTTP/3，所以第一次造訪可能還沒切換；但如果 UDP 哪裡都出不去，就是網路或代理把它擋了，或者根本不轉送 UDP。很多代理設定只轉 TCP。"],
        ["ECH 是什麼，為什麼沒開？", "Encrypted Client Hello 會加密網站名稱。否則 TLS 會明文傳送它，路上誰都看得到。瀏覽器得從 DNS 的 HTTPS 紀錄裡拿到網站的金鑰：Firefox 只在用自己的 DNS over HTTPS 時讀取；Chrome 需要能回傳 HTTPS 紀錄的解析器；Safari 目前還不用 ECH。"],
        ["金鑰交換是傳統的，代表什麼？", "Chrome 124+、Firefox 132+ 和 Safari 26 預設都會提供 X25519MLKEM768。新瀏覽器最後卻用了普通的 X25519，代表中間有東西自己建立了 TLS 連線：防毒軟體、公司代理，或會解開 TLS 的代理用戶端。舊瀏覽器則只是版本太舊。"],
      ],
    },
    ja: {
      seo_title: "HTTP/3・ECH・耐量子暗号の検査 · Who Are You",
      seo_desc: "無料の接続検査：ブラウザが HTTP/3 を使っているか、ECH で接続先のサイト名を隠しているか、耐量子の鍵（X25519MLKEM768）で合意しているか、欠けている場合ネットワークやプロキシについて何が分かるかを確認。IP や元のデータは保存せず、どれだけありふれているかを数える匿名の集計だけを残します。",
      seo_kw: "HTTP/3 確認, ECH 確認, Encrypted Client Hello, 耐量子暗号 TLS, X25519MLKEM768, QUIC 確認, TLS 確認",
      h1: "HTTP/3・ECH・耐量子暗号の検査", og_sub: "接続はどれだけ新しい？どこで止まっている？",
      intro: "最新のブラウザは開かれたネットワークなら UDP で HTTP/3 を使い、ECH で接続先のサイトを隠し、将来の量子コンピュータでも破れない鍵で合意します。どれかが欠けていれば、経路上の何かが原因であることが多いです。あなたの接続はこちら。",
      focus_h: "あなたの接続",
      docs: [
        ["なぜ HTTP/3 が使われない？", "HTTP/3 は UDP 443 番を使います。ブラウザは TCP での最初の応答で対応を知るので、初回はまだ切り替わらないことがあります。しかし UDP がどこにも出られないなら、ネットワークかプロキシがブロックしているか、UDP を運んでいません。TCP だけを運ぶプロキシ設定は多いです。"],
        ["ECH とは？なぜオフ？", "Encrypted Client Hello はサイト名を暗号化します。そうしないと TLS はそれを平文で送り、経路上の誰でも読めます。ブラウザは DNS の HTTPS レコードからサイトの鍵を得る必要があり、Firefox は自身の DNS over HTTPS 使用時のみ読み、Chrome は HTTPS レコードを返すリゾルバが必要で、Safari はまだ ECH を使いません。"],
        ["従来型の鍵交換は何を意味する？", "Chrome 124 以降、Firefox 132 以降、Safari 26 は既定で X25519MLKEM768 を提示します。最新のブラウザなのに普通の X25519 になったなら、途中で独自に TLS 接続を張るもの（ウイルス対策ソフト、社内プロキシ、TLS を終端するプロキシクライアント）があります。古いブラウザなら単に古いだけです。"],
      ],
    },
    ko: {
      seo_title: "HTTP/3·ECH·양자내성 암호 검사 · Who Are You",
      seo_desc: "무료 연결 검사: 브라우저가 HTTP/3를 쓰는지, ECH로 접속하는 사이트 이름을 숨기는지, 양자내성 키(X25519MLKEM768)로 합의하는지, 빠진 항목이 네트워크나 프록시에 대해 무엇을 말하는지 확인합니다. IP와 원본 데이터는 저장하지 않고, 얼마나 흔한지 세는 익명 집계만 남깁니다.",
      seo_kw: "HTTP/3 확인, ECH 확인, Encrypted Client Hello, 양자내성 TLS, X25519MLKEM768, QUIC 확인, TLS 확인",
      h1: "HTTP/3·ECH·양자내성 암호 검사", og_sub: "연결은 얼마나 최신인가요? 어디서 막히나요?",
      intro: "최신 브라우저는 막힘없는 네트워크에서 UDP로 HTTP/3를 쓰고, ECH로 어느 사이트에 접속하는지 숨기고, 미래의 양자 컴퓨터도 못 깨는 키로 합의합니다. 하나라도 빠지면 대개 경로 위의 무언가가 원인이에요. 당신의 연결입니다.",
      focus_h: "당신의 연결",
      docs: [
        ["왜 HTTP/3를 안 쓰나요?", "HTTP/3는 UDP 443 포트를 씁니다. 브라우저는 TCP로 받은 첫 응답에서 지원 여부를 알기 때문에 첫 방문엔 아직 전환하지 않을 수 있어요. 하지만 UDP가 어디로도 못 나간다면 네트워크나 프록시가 막고 있거나 UDP를 전달하지 않는 겁니다. TCP만 전달하는 프록시 설정이 많아요."],
        ["ECH가 무엇이고 왜 꺼져 있나요?", "Encrypted Client Hello는 사이트 이름을 암호화합니다. 그러지 않으면 TLS가 평문으로 보내 경로 위의 누구나 읽을 수 있어요. 브라우저는 DNS HTTPS 레코드에서 사이트 키를 받아야 하는데, Firefox는 자체 DNS over HTTPS를 쓸 때만 읽고, Chrome은 HTTPS 레코드를 돌려주는 리졸버가 필요하며, Safari는 아직 ECH를 쓰지 않습니다."],
        ["기존 방식 키 교환은 무엇을 뜻하나요?", "Chrome 124+, Firefox 132+, Safari 26은 기본으로 X25519MLKEM768을 제시합니다. 최신 브라우저인데 일반 X25519로 끝났다면, 중간에서 직접 TLS 연결을 맺는 것(백신, 회사 프록시, TLS를 종료하는 프록시 클라이언트)이 있다는 뜻이에요. 오래된 브라우저라면 그냥 오래된 것입니다."],
      ],
    },
    es: {
      seo_title: "Test de HTTP/3, ECH y TLS poscuántico · Who Are You",
      seo_desc: "Test gratuito de conexión: si tu navegador usa HTTP/3, oculta el nombre del sitio con Encrypted Client Hello (ECH) y acuerda una clave poscuántica (X25519MLKEM768), y qué dice la que falte sobre tu red o tu proxy. No guarda tu IP ni los datos en bruto, solo recuentos anónimos de lo común que eres.",
      seo_kw: "test HTTP/3, test ECH, encrypted client hello, TLS poscuántico, X25519MLKEM768, test QUIC, comprobar TLS",
      h1: "Test de HTTP/3, ECH y poscuántico", og_sub: "¿Qué tan moderna es tu conexión y qué la frena?",
      intro: "Un navegador actual en una red abierta usa HTTP/3 sobre UDP, oculta con ECH a qué sitio se conecta y acuerda una clave que un futuro ordenador cuántico no podrá romper. Cuando falta alguna, suele haber algo en el camino. Esta es tu conexión.",
      focus_h: "Tu conexión",
      docs: [
        ["¿Por qué no se usa HTTP/3?", "HTTP/3 va por el puerto UDP 443. El navegador sabe que un sitio lo admite tras una primera respuesta por TCP, así que en la primera visita puede no cambiar aún; pero si UDP no sale a ningún sitio, una red o un proxy lo bloquea o no transporta UDP. Muchos proxies solo llevan TCP."],
        ["¿Qué es ECH y por qué está apagado?", "Encrypted Client Hello cifra el nombre del sitio, que TLS si no envía en claro para cualquiera en el camino. El navegador necesita las claves del sitio de un registro DNS HTTPS: Firefox solo las lee con su propio DNS sobre HTTPS; Chrome necesita un resolvedor que devuelva registros HTTPS; Safari aún no usa ECH."],
        ["¿Qué significa un intercambio de claves clásico?", "Chrome 124+, Firefox 132+ y Safari 26 ofrecen X25519MLKEM768 por defecto. Un navegador actual que acaba con X25519 simple apunta a algo intermedio que hace su propia conexión TLS: un antivirus, un proxy de empresa o un cliente proxy que termina TLS. En navegadores antiguos es solo su edad."],
      ],
    },
    fr: {
      seo_title: "Test HTTP/3, ECH et TLS post-quantique · Qui êtes-vous ?",
      seo_desc: "Test de connexion gratuit : votre navigateur utilise-t-il HTTP/3, cache-t-il le nom du site avec Encrypted Client Hello (ECH), et négocie-t-il une clé post-quantique (X25519MLKEM768) ? Et si l’un manque, ce que cela dit de votre réseau ou de votre proxy. Aucune IP ni donnée brute n’est gardée, seulement des compteurs anonymes.",
      seo_kw: "test HTTP/3, test ECH, encrypted client hello, test TLS post-quantique, X25519MLKEM768, test QUIC, vérifier TLS",
      h1: "Test HTTP/3, ECH et post-quantique", og_sub: "Votre connexion est-elle moderne, et qu’est-ce qui la freine ?",
      intro: "Un navigateur à jour sur un réseau ouvert parle HTTP/3 en UDP, cache avec ECH le nom du site auquel il se connecte, et négocie une clé qu’un futur ordinateur quantique ne pourra pas casser. Quand l’un des trois manque, c’est souvent à cause de quelque chose sur le chemin. Voici votre connexion.",
      focus_h: "Votre connexion",
      docs: [
        ["Pourquoi HTTP/3 n’est-il pas utilisé ?", "HTTP/3 passe par le port UDP 443. Le navigateur apprend qu’un site le parle grâce à une première réponse en TCP : à la première visite, il peut donc ne pas encore basculer. Mais si l’UDP ne sort nulle part, un réseau ou un proxy le bloque, ou ne transporte pas l’UDP du tout. Beaucoup de configurations de proxy ne transportent que le TCP."],
        ["Qu’est-ce que l’ECH, et pourquoi est-il désactivé ?", "Encrypted Client Hello chiffre le nom du site que TLS envoie sinon en clair, lisible par quiconque se trouve sur le chemin. Le navigateur a besoin des clés du site, fournies par un enregistrement DNS de type HTTPS : Firefox ne les lit que via son propre DNS over HTTPS ; Chrome a besoin d’un serveur DNS qui renvoie les enregistrements HTTPS ; Safari n’utilise pas encore ECH."],
        ["Que signifie un échange de clés classique ?", "Chrome 124+, Firefox 132+ et Safari 26 proposent X25519MLKEM768 par défaut. Un navigateur à jour qui finit avec un simple X25519 indique qu’un intermédiaire établit sa propre connexion TLS : un antivirus, un proxy d’entreprise, ou un client proxy qui termine le TLS. Sur un navigateur plus ancien, c’est simplement son âge."],
      ],
    },
    de: {
      seo_title: "HTTP/3-, ECH- und Post-Quanten-TLS-Test · Wer bist du?",
      seo_desc: "Kostenloser Verbindungstest: ob dein Browser HTTP/3 nutzt, den Namen der Website mit Encrypted Client Hello (ECH) verbirgt und einen Post-Quanten-Schlüssel (X25519MLKEM768) aushandelt, und was es über dein Netz oder deinen Proxy sagt, wenn eins davon fehlt. IP und Rohdaten werden nicht gespeichert, nur anonyme Zähler.",
      seo_kw: "HTTP/3 Test, ECH Test, Encrypted Client Hello prüfen, Post-Quanten TLS Test, X25519MLKEM768, QUIC Test, TLS prüfen",
      h1: "HTTP/3-, ECH- und Post-Quanten-Test", og_sub: "Wie modern ist deine Verbindung, und was steht im Weg?",
      intro: "Ein aktueller Browser in einem offenen Netz spricht HTTP/3 über UDP, verbirgt mit ECH, zu welcher Website er sich verbindet, und handelt einen Schlüssel aus, den auch ein künftiger Quantencomputer nicht knackt. Fehlt eins davon, liegt das oft an etwas auf dem Weg. Hier ist deine Verbindung.",
      focus_h: "Deine Verbindung",
      docs: [
        ["Warum wird HTTP/3 nicht genutzt?", "HTTP/3 läuft über UDP-Port 443. Dass eine Website es spricht, erfährt der Browser aus einer ersten Antwort über TCP; beim ersten Besuch schaltet er also womöglich noch nicht um. Kommt UDP aber nirgends raus, blockiert ein Netz oder ein Proxy es oder leitet UDP gar nicht weiter. Viele Proxy-Setups leiten nur TCP weiter."],
        ["Was ist ECH, und warum ist es aus?", "Encrypted Client Hello verschlüsselt den Namen der Website, den TLS sonst im Klartext sendet, lesbar für jeden auf dem Weg. Der Browser braucht dafür die Schlüssel der Website aus einem DNS-Eintrag vom Typ HTTPS: Firefox liest sie nur über sein eigenes DNS over HTTPS; Chrome braucht einen DNS-Server, der HTTPS-Einträge liefert; Safari nutzt ECH noch nicht."],
        ["Was bedeutet ein klassischer Schlüsselaustausch?", "Chrome 124+, Firefox 132+ und Safari 26 bieten standardmäßig X25519MLKEM768 an. Landet ein aktueller Browser bei einfachem X25519, deutet das auf etwas dazwischen hin, das eine eigene TLS-Verbindung aufbaut: einen Virenscanner, einen Firmenproxy oder einen Proxy-Client, der TLS terminiert. Bei älteren Browsern liegt es einfach am Alter."],
      ],
    },
    pt: {
      seo_title: "Teste de HTTP/3, ECH e TLS pós-quântico · Who Are You",
      seo_desc: "Teste grátis de conexão: se seu navegador usa HTTP/3, esconde o nome do site com Encrypted Client Hello (ECH) e combina uma chave pós-quântica (X25519MLKEM768), e o que a falta de um diz sobre sua rede ou proxy. Não guarda seu IP nem os dados brutos, só contagens anônimas de quão comum você é.",
      seo_kw: "teste HTTP/3, teste ECH, encrypted client hello, TLS pós-quântico, X25519MLKEM768, teste QUIC, verificar TLS",
      h1: "Teste de HTTP/3, ECH e pós-quântico", og_sub: "Quão moderna é sua conexão, e o que atrapalha?",
      intro: "Um navegador atual numa rede aberta usa HTTP/3 sobre UDP, esconde com ECH a qual site se conecta e combina uma chave que um futuro computador quântico não quebra. Quando falta um deles, costuma haver algo no caminho. Esta é sua conexão.",
      focus_h: "Sua conexão",
      docs: [
        ["Por que o HTTP/3 não é usado?", "O HTTP/3 usa a porta UDP 443. O navegador descobre que um site o suporta por uma primeira resposta via TCP, então na primeira visita pode ainda não trocar; mas se o UDP não sai para lugar nenhum, uma rede ou um proxy o bloqueia ou não transporta UDP. Muitos proxies só levam TCP."],
        ["O que é ECH e por que está desligado?", "O Encrypted Client Hello criptografa o nome do site, que o TLS senão envia em texto claro para qualquer um no caminho. O navegador precisa das chaves do site num registro DNS HTTPS: o Firefox só as lê com seu próprio DNS over HTTPS; o Chrome precisa de um resolvedor que devolva registros HTTPS; o Safari ainda não usa ECH."],
        ["O que significa uma troca de chaves clássica?", "Chrome 124+, Firefox 132+ e Safari 26 oferecem X25519MLKEM768 por padrão. Um navegador atual que termina em X25519 simples indica algo no meio que faz sua própria conexão TLS: um antivírus, um proxy corporativo ou um cliente proxy que encerra o TLS. Em navegadores antigos, é só a idade."],
      ],
    },
    ru: {
      seo_title: "Проверка HTTP/3, ECH и постквантового TLS · Кто вы?",
      seo_desc: "Бесплатная проверка соединения: использует ли ваш браузер HTTP/3, скрывает ли имя сайта с помощью Encrypted Client Hello (ECH) и договаривается ли о постквантовом ключе (X25519MLKEM768) — и что говорит отсутствие одного из них о вашей сети или прокси. IP и исходные данные не сохраняются — только анонимные счётчики.",
      seo_kw: "проверка HTTP/3, проверка ECH, encrypted client hello, проверка постквантового TLS, X25519MLKEM768, проверка QUIC, проверка TLS",
      h1: "Проверка HTTP/3, ECH и постквантовой защиты", og_sub: "Насколько современно ваше соединение и что ему мешает?",
      intro: "Свежий браузер в открытой сети работает по HTTP/3 поверх UDP, с помощью ECH скрывает, к какому сайту подключается, и договаривается о ключе, который не взломает и будущий квантовый компьютер. Если чего-то из этого нет, причина часто в чём-то на пути. Здесь — ваше соединение.",
      focus_h: "Ваше соединение",
      docs: [
        ["Почему не используется HTTP/3?", "HTTP/3 работает через UDP-порт 443. О том, что сайт его поддерживает, браузер узнаёт из первого ответа по TCP, поэтому при первом визите он может ещё не переключиться. Но если UDP никуда не выходит, его блокирует сеть или прокси — или прокси вообще не передаёт UDP. Многие прокси-конфигурации передают только TCP."],
        ["Что такое ECH и почему он выключен?", "Encrypted Client Hello шифрует имя сайта, которое TLS иначе отправляет открытым текстом, — его может прочитать любой на пути. Для этого браузеру нужны ключи сайта из DNS-записи типа HTTPS: Firefox читает их только через свой DNS over HTTPS; Chrome нужен DNS-сервер, который возвращает записи HTTPS; Safari ECH пока не использует."],
        ["Что значит классический обмен ключами?", "Chrome 124+, Firefox 132+ и Safari 26 по умолчанию предлагают X25519MLKEM768. Если свежий браузер в итоге получает обычный X25519, значит, посередине что-то устанавливает собственное TLS-соединение: антивирус, корпоративный прокси или прокси-клиент, который сам завершает TLS. У старых браузеров дело просто в возрасте."],
      ],
    },
  },
};
