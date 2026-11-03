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
      seo_desc: "Free browser fingerprint test: see your canvas, WebGL, audio and font fingerprints and the combined ID any site can work out without cookies, whether your browser scrambles it, and whether this site recognized you since your last visit. No IP is kept, only anonymous counts of how common each value is.",
      seo_kw: "browser fingerprint test, browser fingerprinting, canvas fingerprint, WebGL fingerprint, audio fingerprint, fingerprint checker, anti-fingerprinting, am I trackable",
      h1: "Browser fingerprint test", og_sub: "The ID any site can work out for you, without cookies",
      intro: "Sites don't need cookies to recognize you. The way your system draws text and shapes, processes sound and which fonts it has add up to an ID that stays the same across sites, private windows and VPNs. Here is yours, what it's made of, and whether your browser scrambles it.",
      focus_h: "Your fingerprint",
      docs: [
        ["What is a browser fingerprint?", "A set of small differences between computers: how the graphics card and driver draw a canvas or a WebGL scene, how the audio system rounds a sound, which fonts are installed, plus your screen, language and time zone. Each one alone is common; together they're often unique. A site combines them into one ID, and every site that runs the same script gets the same ID for you."],
        ["Does a VPN or a private window change it?", "No. None of it depends on your IP address, and private windows draw and play sound the same way. That's why a fingerprint can follow you after you clear cookies or switch VPN servers. The ID card on this page remembers your last visit (in your browser only) so you can see it happen."],
        ["How do I stop being fingerprinted?", "Use a browser that fights it: Brave adds random noise to canvas, WebGL and audio by default, Firefox has privacy.resistFingerprinting, and Tor Browser makes every user look the same. Extensions that change the user agent or block canvas often make you stand out more, not less. The \"Fingerprint protection\" row shows whether your browser scrambles it."],
        ["Can this test tell how unique I am?", "Roughly, yes. The page counts, anonymously, how many checks had each of your values and your fingerprint ID (its first 8 characters), and shows how many of all the checks on this site matched yours. It keeps no IP and no full fingerprint. The numbers only mean something once enough people have taken the test; until then, the page says the count is still growing."],
      ],
    },
    "zh-CN": {
      seo_title: "浏览器指纹检测：不用 Cookie，网站也能认出你吗？ · 你是谁",
      seo_desc: "免费浏览器指纹检测：看看你的 Canvas、WebGL、音频和字体指纹，以及网站不用 Cookie 就能算出的指纹 ID；你的浏览器有没有打乱它，上次来过之后有没有被认出来。检测在你的浏览器里进行，不存 IP，只累计匿名计数，用来告诉你有多少人和你一样。",
      seo_kw: "浏览器指纹检测, 浏览器指纹, Canvas 指纹, WebGL 指纹, 音频指纹, 指纹浏览器检测, 防指纹, 指纹追踪",
      h1: "浏览器指纹检测", og_sub: "不用 Cookie，网站也能给你算出一个 ID",
      intro: "网站不用 Cookie 也能认出你。你的系统怎么画文字和图形、怎么处理声音、装了哪些字体，合起来就是一个 ID：换网站、开无痕、开 VPN 都不变。下面是你的指纹、它由哪几部分组成，以及你的浏览器有没有把它打乱。",
      focus_h: "你的指纹",
      docs: [
        ["浏览器指纹是什么？", "是电脑和电脑之间的细微差别：显卡和驱动画 Canvas、WebGL 的结果，处理声音时的取整误差，装了哪些字体，再加上屏幕、语言和时区。单看每一项都很普通，合在一起往往就独一无二。网站把它们算成一串固定的编码，也就是指纹 ID；跑同一段脚本的网站，算出来的你都是同一个 ID。"],
        ["开 VPN 或无痕窗口，指纹会变吗？", "不会。这些都和 IP 无关，无痕窗口画图、放声音的方式也和平时一样。所以清了 Cookie、换了 VPN 节点，指纹照样跟着你。页面上的指纹卡会记住你上次来访（只记在你的浏览器里），下次再来就能看到它还认不认得你。"],
        ["怎样防止被指纹追踪？", "换一个会对抗指纹的浏览器：Brave 默认给 Canvas、WebGL 和音频加随机干扰；Firefox 可以打开 privacy.resistFingerprinting；Tor 浏览器让所有用户看起来一模一样。改 UA、屏蔽 Canvas 的扩展反而常常让你更特别。「防指纹」那一行会告诉你，你的浏览器有没有打乱指纹。"],
        ["能看出我有多独特吗？", "能，大致能。页面会匿名统计你的每一项值、以及整个指纹 ID（只取前 8 位）在本站检测里出现过多少次，再告诉你所有检测里有多少次和你一样。不存 IP，也不存完整指纹。测的人足够多，这些数字才有意义；在那之前，页面会提示数据还在积累。"],
      ],
    },
    "zh-TW": {
      seo_title: "瀏覽器指紋檢測：不用 Cookie，網站也認得出你嗎？ · 你是誰",
      seo_desc: "免費瀏覽器指紋檢測：看看你的 Canvas、WebGL、音訊和字型指紋，以及網站不用 Cookie 就能算出的指紋 ID；你的瀏覽器有沒有把它打亂，上次來過之後有沒有被認出來。檢測在你的瀏覽器裡進行，不存 IP，只累計匿名計數，用來告訴你有多少人和你一樣。",
      seo_kw: "瀏覽器指紋檢測, 瀏覽器指紋, Canvas 指紋, WebGL 指紋, 音訊指紋, 指紋瀏覽器, 防指紋, 指紋追蹤",
      h1: "瀏覽器指紋檢測", og_sub: "不用 Cookie，網站也能替你算出一個 ID",
      intro: "網站不用 Cookie 也認得出你。你的系統怎麼畫文字和圖形、怎麼處理聲音、裝了哪些字型，合起來就是一個 ID：換網站、開無痕、開 VPN 都不會變。下面是你的指紋、它由哪幾部分組成，以及你的瀏覽器有沒有把它打亂。",
      focus_h: "你的指紋",
      docs: [
        ["瀏覽器指紋是什麼？", "是電腦和電腦之間的細微差異：顯示卡和驅動程式畫 Canvas、WebGL 的結果，處理聲音時的捨入誤差，裝了哪些字型，再加上螢幕、語言和時區。單看每一項都很普通，合在一起往往就獨一無二。網站把它們算成一串固定的編碼，也就是指紋 ID；執行同一段腳本的網站，算出來的你都是同一個 ID。"],
        ["開 VPN 或無痕視窗，指紋會變嗎？", "不會。這些都和 IP 無關，無痕視窗畫圖、播放聲音的方式也和平常一樣。所以清了 Cookie、換了 VPN 伺服器，指紋照樣跟著你。頁面上的指紋卡會記住你上次造訪（只記在你的瀏覽器裡），下次再來就能看到它還認不認得你。"],
        ["怎麼避免被指紋追蹤？", "改用會對抗指紋的瀏覽器：Brave 預設會替 Canvas、WebGL 和音訊加入隨機干擾；Firefox 可以開啟 privacy.resistFingerprinting；Tor 瀏覽器讓所有使用者看起來一模一樣。改 UA、封鎖 Canvas 的擴充功能反而常讓你更好認。「防指紋」那一列會告訴你，你的瀏覽器有沒有打亂指紋。"],
        ["看得出我有多獨特嗎？", "可以，大致看得出。頁面會匿名統計你的每一項值，以及整個指紋 ID（只取前 8 碼）在本站檢測裡出現過幾次，再告訴你所有檢測裡有多少次和你一樣。不存 IP，也不存完整指紋。測的人夠多，這些數字才有意義；在那之前，頁面會提示資料還在累積。"],
      ],
    },
    ja: {
      seo_title: "ブラウザフィンガープリント検査：Cookie なしで追跡される？ · あなたは誰",
      seo_desc: "無料のブラウザフィンガープリント検査：Canvas・WebGL・オーディオ・フォントのフィンガープリントと、どのサイトでも Cookie なしで割り出せる総合 ID を表示。ブラウザがそれをかき混ぜているか、前回の訪問から見分けられたかも分かります。IP は保存せず、残すのはそれぞれの値がどれだけありふれているかの匿名の集計だけです。",
      seo_kw: "ブラウザフィンガープリント, フィンガープリント 確認, Canvas フィンガープリント, WebGL フィンガープリント, オーディオ フィンガープリント, 追跡 防止, アンチフィンガープリント",
      h1: "ブラウザフィンガープリント検査", og_sub: "Cookie がなくても、サイトはあなたの ID を割り出せる",
      intro: "サイトは Cookie がなくてもあなたを見分けられます。文字や図形の描き方、音の処理、入っているフォントを合わせると 1 つの ID になり、サイトを変えても、プライベートウィンドウでも、VPN を使っても変わりません。あなたの ID とその中身、ブラウザがそれをかき混ぜているかを示します。",
      focus_h: "あなたのフィンガープリント",
      docs: [
        ["ブラウザフィンガープリントとは何ですか？", "端末ごとの小さな違いの集まりです。GPU とドライバーによる Canvas や WebGL の描画結果、音声処理の丸め方、インストール済みのフォント、それに画面・言語・タイムゾーン。一つひとつはありふれていても、合わせると唯一になることがよくあります。サイトはこれをまとめて 1 つの ID にします。同じスクリプトを使うサイトなら、どこでもあなたに同じ ID が付きます。"],
        ["VPN やプライベートウィンドウで変わりますか？", "変わりません。どれも IP とは関係がなく、プライベートウィンドウでも描画や音の処理は同じだからです。そのため、Cookie を消しても VPN のサーバーを変えても、フィンガープリントで追いかけられます。このページの ID カードは前回の訪問を（ブラウザの中にだけ）覚えているので、実際に確かめられます。"],
        ["フィンガープリントによる追跡を防ぐには？", "対策機能のあるブラウザを使いましょう。Brave は標準で Canvas・WebGL・オーディオにノイズを加え、Firefox には privacy.resistFingerprinting があり、Tor Browser は利用者全員を同じに見せます。UA を変えたり Canvas をブロックしたりする拡張機能は、かえって目立つことがよくあります。かき混ぜられているかは「フィンガープリント対策」の行で分かります。"],
        ["自分がどれくらい珍しいか分かりますか？", "おおよそ分かります。ページは、あなたの各値とフィンガープリント ID（先頭 8 文字）がこのサイトの検査で何回出たかを匿名で数え、全検査のうち何回が同じだったかを示します。IP や完全なフィンガープリントは保存しません。十分な人数が検査するまでは数字に意味がないので、それまでは「集計中」と表示します。"],
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
      seo_title: "Test d’empreinte du navigateur : pisté sans cookies ? · Qui êtes-vous ?",
      seo_desc: "Test gratuit d’empreinte du navigateur : vos empreintes canvas, WebGL, audio et polices et l’ID combiné que tout site calcule sans cookies, si votre navigateur la rend aléatoire et s’il vous a reconnu depuis votre dernière visite. Ni IP ni données brutes ne sont gardées, seulement des comptages anonymes de votre fréquence.",
      seo_kw: "test empreinte navigateur, empreinte digitale navigateur, browser fingerprint, empreinte canvas, empreinte WebGL, empreinte audio, anti fingerprinting, pistage sans cookies",
      h1: "Test d’empreinte du navigateur", og_sub: "L’ID que tout site calcule pour vous, sans cookies",
      intro: "Les sites n’ont pas besoin de cookies pour vous reconnaître. La façon dont votre système dessine texte et formes, traite le son et les polices qu’il possède forment un ID qui reste le même d’un site à l’autre, en navigation privée et derrière un VPN. Voici le vôtre, ce qui le compose, et si votre navigateur le brouille.",
      focus_h: "Votre empreinte",
      docs: [
        ["Qu’est-ce que l’empreinte du navigateur ?", "Un ensemble de petites différences entre machines : la façon dont la carte graphique et son pilote dessinent un canvas ou une scène WebGL, l’arrondi du son, les polices installées, plus l’écran, la langue et le fuseau. Chacune est banale ; ensemble, elles sont souvent uniques. Un site en fait un ID, et chaque site qui exécute le même script obtient le même ID pour vous."],
        ["Un VPN ou la navigation privée la changent-ils ?", "Non. Rien de tout cela ne dépend de votre IP, et une fenêtre privée dessine et joue le son de la même façon. C’est pourquoi l’empreinte vous suit après l’effacement des cookies ou un changement de serveur VPN. La carte d’ID de cette page garde votre dernière visite (dans votre navigateur seulement) pour le montrer."],
        ["Comment éviter le pistage par empreinte ?", "Prenez un navigateur qui le combat : Brave ajoute du bruit aléatoire au canvas, au WebGL et à l’audio par défaut ; Firefox a privacy.resistFingerprinting ; Tor Browser fait que tout le monde se ressemble. Les extensions qui changent le user agent ou bloquent le canvas vous rendent souvent plus unique. La ligne « Protection d’empreinte » indique si votre navigateur la rend aléatoire."],
        ["Le test peut-il dire à quel point je suis unique ?", "Oui, à peu près. La page compte, anonymement, combien de tests avaient chacune de vos valeurs et votre identifiant d’empreinte complet (ses 8 premiers caractères), et montre combien correspondaient au vôtre parmi tous les tests du site. Elle ne garde ni IP ni empreinte complète. Les chiffres n’ont de sens qu’une fois assez de tests faits ; d’ici là, elle indique que le comptage se constitue."],
      ],
    },
    de: {
      seo_title: "Browser-Fingerprint-Test: Tracking ohne Cookies? · Wer sind Sie?",
      seo_desc: "Kostenloser Browser-Fingerprint-Test: Ihre Canvas-, WebGL-, Audio- und Schriften-Fingerabdrücke und die Gesamt-ID, die jede Website ohne Cookies berechnen kann, ob Ihr Browser sie verwürfelt und ob er Sie seit dem letzten Besuch wiedererkannt hat. Weder IP noch Rohdaten werden gespeichert, nur anonyme Zähler, wie häufig Sie sind.",
      seo_kw: "Browser Fingerprint Test, Browser-Fingerabdruck, Canvas Fingerprint, WebGL Fingerprint, Audio Fingerprint, Fingerprinting verhindern, Tracking ohne Cookies",
      h1: "Browser-Fingerprint-Test", og_sub: "Die ID, die jede Website ohne Cookies für Sie berechnet",
      intro: "Websites brauchen keine Cookies, um Sie wiederzuerkennen. Wie Ihr System Text und Formen zeichnet, Ton verarbeitet und welche Schriften es hat, ergibt eine ID, die über Websites, private Fenster und VPNs hinweg gleich bleibt. Hier ist Ihre, woraus sie besteht und ob Ihr Browser sie verwürfelt.",
      focus_h: "Ihr Fingerabdruck",
      docs: [
        ["Was ist ein Browser-Fingerabdruck?", "Eine Menge kleiner Unterschiede zwischen Rechnern: wie Grafikkarte und Treiber ein Canvas oder eine WebGL-Szene zeichnen, wie die Audioverarbeitung rundet, welche Schriften installiert sind, dazu Bildschirm, Sprache und Zeitzone. Einzeln alltäglich, zusammen oft einmalig. Eine Website macht daraus eine ID, und jede Website mit demselben Skript bekommt dieselbe ID von Ihnen."],
        ["Ändert ein VPN oder ein privates Fenster ihn?", "Nein. Nichts davon hängt von Ihrer IP ab, und ein privates Fenster zeichnet und spielt Ton genauso. Deshalb folgt Ihnen der Fingerabdruck auch nach dem Löschen von Cookies oder einem VPN-Wechsel. Die ID-Karte dieser Seite merkt sich Ihren letzten Besuch (nur in Ihrem Browser) und zeigt das."],
        ["Wie verhindere ich Fingerprinting?", "Mit einem Browser, der dagegen arbeitet: Brave verrauscht Canvas, WebGL und Audio standardmäßig; Firefox hat privacy.resistFingerprinting; der Tor Browser lässt alle gleich aussehen. Erweiterungen, die den User-Agent ändern oder Canvas blockieren, machen Sie oft auffälliger. Die Zeile „Fingerabdruck-Schutz“ zeigt, ob Ihr Browser verwürfelt."],
        ["Kann der Test sagen, wie einmalig ich bin?", "Ja, ungefähr. Die Seite zählt anonym, wie viele Prüfungen jeden Ihrer Werte und Ihre gesamte Fingerabdruck-ID (ihre ersten 8 Zeichen) hatten, und zeigt, wie viele davon Ihrem entsprachen, unter allen Prüfungen auf dieser Seite. Sie speichert weder IP noch den vollständigen Fingerabdruck. Die Zahlen bedeuten erst etwas, wenn genug Menschen den Test gemacht haben; bis dahin sagt sie, dass die Zählung noch wächst."],
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
      seo_title: "Проверка отпечатка браузера: следят ли без cookie? · Кто вы?",
      seo_desc: "Бесплатная проверка отпечатка браузера: отпечатки canvas, WebGL, аудио и шрифтов и общий ID, который любой сайт вычисляет без cookie, перемешивает ли его браузер и узнал ли он вас с прошлого визита. IP и исходные данные не сохраняются — только анонимные счётчики того, насколько вы распространены.",
      seo_kw: "проверка отпечатка браузера, отпечаток браузера, browser fingerprint, canvas fingerprint, WebGL отпечаток, аудио отпечаток, защита от фингерпринтинга, слежка без cookie",
      h1: "Проверка отпечатка браузера", og_sub: "ID, который любой сайт вычисляет для вас без cookie",
      intro: "Сайтам не нужны cookie, чтобы узнать вас. То, как ваша система рисует текст и фигуры, обрабатывает звук и какие у неё шрифты, складывается в ID, который не меняется между сайтами, в приватном окне и через VPN. Вот ваш, из чего он состоит и перемешивает ли его ваш браузер.",
      focus_h: "Ваш отпечаток",
      docs: [
        ["Что такое отпечаток браузера?", "Набор мелких различий между компьютерами: как видеокарта и драйвер рисуют canvas или сцену WebGL, как аудиотракт округляет звук, какие установлены шрифты, плюс экран, язык и часовой пояс. По отдельности это обычно, вместе часто уникально. Сайт сводит это в ID, и каждый сайт с тем же скриптом получает от вас тот же ID."],
        ["Меняют ли его VPN или приватное окно?", "Нет. Ничто из этого не зависит от IP, а приватное окно рисует и звучит так же. Поэтому отпечаток следует за вами даже после очистки cookie и смены VPN-сервера. Карточка ID на этой странице помнит прошлый визит (только в вашем браузере), чтобы это показать."],
        ["Как защититься от отпечатков?", "Возьмите браузер, который с ними борется: Brave по умолчанию добавляет шум в canvas, WebGL и аудио; в Firefox есть privacy.resistFingerprinting; Tor Browser делает всех одинаковыми. Расширения, меняющие User-Agent или блокирующие canvas, часто делают вас заметнее. Строка «Защита от отпечатков» показывает, перемешивает ли ваш браузер."],
        ["Скажет ли тест, насколько я уникален?", "Да, примерно. Страница анонимно считает, сколько проверок было с каждым вашим значением и со всем ID отпечатка (его первыми 8 символами), и показывает, сколько из всех проверок на сайте совпали с вашей. IP и полный отпечаток не сохраняются. Числа имеют смысл, только когда тест прошло достаточно людей; до тех пор страница пишет, что данные ещё накапливаются."],
      ],
    },
  },
  "dns-leak": {
    en: {
      seo_title: "DNS Leak Test: does your DNS go around your VPN? · Who Are You",
      seo_desc: "Free DNS leak test: find the DNS resolver that actually looks up sites for you, see its country and network, and compare it with the IP sites see. If they don't match, your VPN or proxy leaks DNS. Includes fixes for Clash, V2Ray and the browser.",
      seo_kw: "DNS leak test, DNS leak, VPN DNS leak, which DNS server am I using, DNS resolver test, Clash DNS leak, fake-ip, proxy DNS leak",
      h1: "DNS leak test", og_sub: "Does your DNS go around your VPN?",
      intro: "Your VPN may carry your traffic while your DNS lookups still go to your own internet provider. Whoever runs those servers can then see where you really are. This test looks up a name nobody has asked for before and asks the name server who asked: that's your resolver. You'll see its country and network next to the address sites see.",
      focus_h: "Your DNS resolver",
      docs: [
        ["What is a DNS leak?", "Before your browser connects to a site, a DNS resolver turns the site's name into an address. If that lookup skips the VPN or proxy, it goes to your internet provider's resolver. Your provider then sees every site you visit, and sites that compare your resolver with your IP can tell you're using a VPN and where you actually are."],
        ["How does this test find my resolver?", "The page looks up a random name under edns.ip-api.com that has never been asked for, so no cache can answer. Your resolver has to ask ip-api's name server, which reports the resolver's address and network, plus your client subnet if the resolver passes it along (ECS). The test then compares the resolver's country with your IP's."],
        ["How do I fix a DNS leak?", "Clash / Mihomo: turn on its DNS with enhanced-mode fake-ip, or use TUN mode so every lookup goes through it. V2Ray / Xray clients: route DNS through the proxy (or set a DoH server that goes through it). In the browser, Secure DNS (DoH) also keeps lookups away from your provider. Then run this test again."],
        ["My resolver is Cloudflare or Google in another city. Is that a leak?", "Usually not. Public resolvers like 1.1.1.1 and 8.8.8.8 answer from the data center nearest the request, so the city can differ from your VPN exit. What gives you away is a resolver run by your home internet provider, or one in your home country while your IP is abroad."],
      ],
    },
    "zh-CN": {
      seo_title: "DNS 泄露检测：你的 DNS 有没有绕过 VPN？ · 你是谁",
      seo_desc: "免费 DNS 泄露检测：找出真正替你解析网址的 DNS 服务器，看它在哪个国家、属于哪家运营商，再和网站看到的 IP 对比。两边对不上，就是 VPN 或代理漏了 DNS。附 Clash、V2Ray 和浏览器里的修复方法。",
      seo_kw: "DNS 泄露检测, DNS 泄漏, VPN DNS 泄露, 查看我的 DNS 服务器, DNS 解析器检测, Clash DNS 泄露, fake-ip, 代理 DNS 泄露",
      h1: "DNS 泄露检测", og_sub: "你的 DNS 有没有绕过 VPN？",
      intro: "VPN 帮你转发了流量，DNS 查询却可能还发给本地运营商，等于告诉别人你真正在哪。这个检测会去查一个从没人查过的域名，再问负责这个域名的服务器：是谁来查的。这样就知道了你用的 DNS 服务器是哪台、在哪个国家、属于哪家运营商，再拿它和网站看到的 IP 对比。",
      focus_h: "你的 DNS 服务器",
      docs: [
        ["什么是 DNS 泄露？", "浏览器连网站之前，要先让 DNS 服务器把网址换成 IP 地址。如果这一步没走 VPN 或代理，查询就发给了本地运营商的 DNS 服务器。结果是：运营商能看到你访问的每个网站；网站把 DNS 服务器和你的 IP 一对比，也能看出你在用 VPN，以及你实际在哪。"],
        ["这个检测怎么找到我的 DNS 服务器？", "页面会去查 edns.ip-api.com 下面一个随机的、从没人查过的域名。没有缓存能直接回答，你的 DNS 服务器只能去问 ip-api 负责这个域名的服务器，于是 ip-api 就知道了它的地址和运营商；如果查询里带上了你所在的网段（ECS），也会一起报出来。检测再拿 DNS 服务器所在的国家和你 IP 的国家比较。"],
        ["DNS 泄露怎么修？", "Clash / Mihomo：打开 DNS，把 enhanced-mode 设成 fake-ip，或者开 TUN 模式，让所有查询都经过它。V2Ray / Xray 客户端：让 DNS 也走代理（或者设一个走代理的 DoH 服务器）。浏览器里打开「安全 DNS」（DoH，加密的 DNS）也能让查询绕开运营商。改完再测一次。"],
        ["显示的 DNS 服务器是 Cloudflare 或 Google，但城市不一样，算泄露吗？", "一般不算。1.1.1.1、8.8.8.8 这类公共 DNS 由离请求最近的机房来回答，所以城市可能和 VPN 出口不同。真正会暴露你的，是本地运营商的 DNS 服务器，或者 IP 在国外、DNS 服务器却在国内。"],
      ],
    },
    "zh-TW": {
      seo_title: "DNS 外洩檢測：你的 DNS 有沒有繞過 VPN？ · 你是誰",
      seo_desc: "免費 DNS 外洩檢測：找出真正幫你解析網址的 DNS 伺服器，看它在哪個國家、屬於哪家電信業者，再和網站看到的 IP 比對。兩邊對不上，就是 VPN 或代理漏掉了 DNS。附 Clash、V2Ray 和瀏覽器的修正方法。",
      seo_kw: "DNS 外洩檢測, DNS 洩漏, VPN DNS 外洩, 查詢我的 DNS 伺服器, DNS 解析器檢測, Clash DNS 外洩, fake-ip, 代理 DNS 外洩",
      h1: "DNS 外洩檢測", og_sub: "你的 DNS 有沒有繞過 VPN？",
      intro: "VPN 幫你轉送了流量，DNS 查詢卻可能還是送到當地電信業者，等於告訴別人你真正在哪裡。這個檢測會去查一個從來沒人查過的網域，再問負責這個網域的伺服器：是誰來查的。這樣就知道你用的 DNS 伺服器是哪一台、在哪個國家、屬於哪家電信業者，再拿它和網站看到的 IP 比對。",
      focus_h: "你的 DNS 伺服器",
      docs: [
        ["什麼是 DNS 外洩？", "瀏覽器連到網站之前，要先請 DNS 伺服器把網址換成 IP 位址。如果這一步沒走 VPN 或代理，查詢就會送到當地電信業者的 DNS 伺服器。結果是：電信業者看得到你造訪的每個網站；網站把 DNS 伺服器和你的 IP 一比對，也看得出你在用 VPN，以及你實際在哪裡。"],
        ["這個檢測怎麼找到我的 DNS 伺服器？", "頁面會去查 edns.ip-api.com 底下一個隨機、從來沒人查過的網域。沒有快取能直接回答，你的 DNS 伺服器只能去問 ip-api 負責這個網域的伺服器，於是 ip-api 就知道了它的位址和電信業者；如果查詢裡附上了你所在的網段（ECS），也會一併回報。檢測再拿 DNS 伺服器所在的國家和你 IP 的國家比較。"],
        ["DNS 外洩怎麼修？", "Clash / Mihomo：開啟 DNS，把 enhanced-mode 設成 fake-ip，或開啟 TUN 模式，讓所有查詢都經過它。V2Ray / Xray 用戶端：讓 DNS 也走代理（或設定一台走代理的 DoH 伺服器）。在瀏覽器開啟「安全 DNS」（DoH，加密的 DNS）也能讓查詢避開電信業者。改完再測一次。"],
        ["顯示的 DNS 伺服器是 Cloudflare 或 Google，但城市不一樣，算外洩嗎？", "通常不算。1.1.1.1、8.8.8.8 這類公共 DNS 會由離請求最近的機房回應，所以城市可能和 VPN 出口不同。真正會讓你露餡的，是當地電信業者的 DNS 伺服器，或是 IP 在國外、DNS 伺服器卻在國內。"],
      ],
    },
    ja: {
      seo_title: "DNS リークテスト：DNS が VPN を素通りしていない？ · あなたは誰",
      seo_desc: "無料の DNS リークテスト：実際にサイト名を調べている DNS サーバーを見つけ、その国とネットワークを、サイトから見える IP と比べます。食い違っていれば、VPN やプロキシから DNS が漏れています。Clash、V2Ray、ブラウザでの直し方付き。",
      seo_kw: "DNS リーク テスト, DNS 漏れ, VPN DNS リーク, 使っている DNS サーバー 確認, DNS サーバー 確認, Clash DNS 漏れ, fake-ip",
      h1: "DNS リークテスト", og_sub: "DNS が VPN を素通りしていませんか？",
      intro: "VPN が通信を運んでいても、DNS の問い合わせだけは手元のプロバイダーに出ていることがあります。そうなると、DNS サーバーを運営する側にあなたの本当の居場所が分かります。このテストは誰も問い合わせたことのない名前を引き、ネームサーバーに「誰が問い合わせてきたか」を聞きます。それがあなたの DNS サーバーです。その国とネットワークを、サイトから見えるアドレスと並べて示します。",
      focus_h: "あなたの DNS サーバー",
      docs: [
        ["DNS リークとは何ですか？", "ブラウザがサイトにつなぐ前に、DNS サーバーがサイト名をアドレスに変換します。この問い合わせが VPN やプロキシを通らないと、手元のプロバイダーの DNS サーバーに届きます。するとプロバイダーには訪れたサイトがすべて見え、DNS サーバーと IP を比べるサイトには、VPN を使っていることと本当の居場所が分かってしまいます。"],
        ["どうやって DNS サーバーを見つけるのですか？", "ページは edns.ip-api.com の下にある、誰も問い合わせたことのないランダムな名前を引きます。キャッシュでは答えられないので、あなたの DNS サーバーは ip-api のネームサーバーに聞くしかありません。ネームサーバーはその DNS サーバーのアドレスとネットワーク、さらに DNS サーバーが付けていればクライアントのサブネット（ECS）を報告します。テストはその国と IP の国を比べます。"],
        ["DNS リークはどう直しますか？", "Clash / Mihomo：DNS を有効にして enhanced-mode を fake-ip にするか、TUN モードですべての問い合わせを通します。V2Ray / Xray：DNS もプロキシ経由にします（プロキシを通る DoH サーバーを設定）。ブラウザの「セキュア DNS」（DoH）でも、プロバイダーへの問い合わせを避けられます。直したら、もう一度テストしてください。"],
        ["DNS サーバーが別の都市の Cloudflare や Google です。これは漏れ？", "たいていは違います。1.1.1.1 や 8.8.8.8 のような公開 DNS は問い合わせにいちばん近いデータセンターから答えるので、都市が VPN の出口と違うことがあります。正体がばれるのは、自宅のプロバイダーの DNS サーバーが使われている場合や、IP は海外なのに DNS サーバーが自国にある場合です。"],
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
      seo_title: "Test de fuite DNS : votre DNS contourne-t-il le VPN ? · Qui êtes-vous ?",
      seo_desc: "Test gratuit de fuite DNS : trouvez le résolveur DNS qui résout vraiment les sites pour vous, son pays et son réseau, et comparez-le à l’IP que voient les sites. S’ils diffèrent, votre VPN ou proxy laisse fuir le DNS. Avec la correction dans Clash, V2Ray et le navigateur.",
      seo_kw: "test fuite DNS, fuite DNS, DNS leak test, fuite DNS VPN, quel serveur DNS j’utilise, vérifier résolveur DNS, Clash fuite DNS, fake-ip",
      h1: "Test de fuite DNS", og_sub: "Votre DNS contourne-t-il le VPN ?",
      intro: "Votre VPN peut transporter votre trafic pendant que vos requêtes DNS partent encore chez votre fournisseur, ce qui indique à qui gère les serveurs de noms où vous êtes vraiment. Ce test fait une requête que personne n’a jamais faite et demande au serveur de noms qui l’a faite : votre résolveur, son pays et son réseau, comparés à l’adresse que voient les sites.",
      focus_h: "Votre résolveur DNS",
      docs: [
        ["Qu’est-ce qu’une fuite DNS ?", "Avant que le navigateur se connecte à un site, un résolveur DNS transforme le nom en adresse. Si cette requête contourne le VPN ou le proxy, elle part chez le résolveur de votre fournisseur : celui-ci voit chaque site visité, et les sites qui comparent votre résolveur à votre IP voient que vous utilisez un VPN et où vous êtes vraiment."],
        ["Comment le test trouve-t-il mon résolveur ?", "La page résout un nom aléatoire sous edns.ip-api.com que personne n’a jamais demandé, donc aucun cache ne peut répondre : votre résolveur doit interroger le serveur de noms d’ip-api, qui indique l’adresse et le réseau du résolveur, et le sous-réseau client s’il le transmet (ECS). Le test compare le pays du résolveur à celui de votre IP."],
        ["Comment corriger une fuite DNS ?", "Clash / Mihomo : activez son DNS avec enhanced-mode fake-ip, ou passez en mode TUN pour que toutes les requêtes passent par lui. Clients V2Ray / Xray : faites passer le DNS par le proxy (ou configurez un serveur DoH qui y passe). Dans le navigateur, le DNS sécurisé (DoH) éloigne aussi les requêtes du fournisseur. Puis refaites le test."],
        ["Mon résolveur est Cloudflare ou Google dans une autre ville. Est-ce une fuite ?", "En général, non. Les résolveurs publics comme 1.1.1.1 et 8.8.8.8 répondent depuis le centre de données le plus proche de la requête ; la ville peut donc différer de la sortie VPN. Ce qui vous trahit, c’est un résolveur de votre fournisseur, ou situé dans votre pays alors que votre IP est à l’étranger."],
      ],
    },
    de: {
      seo_title: "DNS-Leak-Test: Umgeht Ihr DNS das VPN? · Wer sind Sie?",
      seo_desc: "Kostenloser DNS-Leak-Test: Finden Sie den DNS-Resolver, der Websites tatsächlich für Sie auflöst, sein Land und Netz, und vergleichen Sie ihn mit der IP, die Websites sehen. Weichen sie ab, leckt Ihr VPN oder Proxy DNS. Mit Lösung für Clash, V2Ray und den Browser.",
      seo_kw: "DNS Leak Test, DNS-Leck, VPN DNS Leak, welchen DNS-Server nutze ich, DNS-Resolver prüfen, Clash DNS Leak, fake-ip",
      h1: "DNS-Leak-Test", og_sub: "Umgeht Ihr DNS das VPN?",
      intro: "Ihr VPN transportiert vielleicht Ihren Verkehr, während DNS-Anfragen weiter an Ihren Anbieter gehen, und das verrät den Betreibern der Nameserver, wo Sie wirklich sind. Dieser Test stellt eine Anfrage, die noch nie jemand gestellt hat, und fragt den Nameserver, wer sie gestellt hat: Ihren Resolver, sein Land und Netz, verglichen mit der Adresse, die Websites sehen.",
      focus_h: "Ihr DNS-Resolver",
      docs: [
        ["Was ist ein DNS-Leck?", "Bevor der Browser eine Website aufruft, übersetzt ein DNS-Resolver den Namen in eine Adresse. Umgeht diese Anfrage VPN oder Proxy, landet sie beim Resolver Ihres Anbieters: Er sieht jede besuchte Website, und Websites, die Resolver und IP vergleichen, erkennen das VPN und Ihren tatsächlichen Standort."],
        ["Wie findet der Test meinen Resolver?", "Die Seite löst einen zufälligen, nie zuvor abgefragten Namen unter edns.ip-api.com auf; kein Cache kann antworten. Ihr Resolver muss den Nameserver von ip-api fragen, der Adresse und Netz des Resolvers meldet, dazu das Client-Subnetz, falls der Resolver es mitschickt (ECS). Der Test vergleicht das Land des Resolvers mit dem Ihrer IP."],
        ["Wie behebe ich ein DNS-Leck?", "Clash / Mihomo: DNS mit enhanced-mode fake-ip einschalten oder den TUN-Modus nutzen, damit alle Anfragen hindurchgehen. V2Ray / Xray: DNS ebenfalls über den Proxy leiten (oder einen DoH-Server, der hindurchgeht). Im Browser hält sicheres DNS (DoH) Anfragen ebenfalls vom Anbieter fern. Danach erneut testen."],
        ["Mein Resolver ist Cloudflare oder Google in einer anderen Stadt. Ist das ein Leck?", "Meist nicht. Öffentliche Resolver wie 1.1.1.1 und 8.8.8.8 antworten aus dem Rechenzentrum, das der Anfrage am nächsten ist; die Stadt kann also vom VPN-Ausgang abweichen. Verräterisch ist ein Resolver Ihres eigenen Anbieters oder einer in Ihrem Heimatland, während Ihre IP im Ausland liegt."],
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
      seo_title: "Проверка утечки DNS: обходит ли DNS ваш VPN? · Кто вы?",
      seo_desc: "Бесплатная проверка утечки DNS: найдите DNS-резолвер, который на самом деле разрешает для вас сайты, его страну и сеть, и сравните с IP, который видят сайты. Если не совпадает, ваш VPN или прокси пропускает DNS. С инструкциями для Clash, V2Ray и браузера.",
      seo_kw: "проверка утечки DNS, утечка DNS, DNS leak test, утечка DNS VPN, какой DNS сервер я использую, проверить DNS резолвер, Clash утечка DNS, fake-ip",
      h1: "Проверка утечки DNS", og_sub: "Обходит ли ваш DNS VPN?",
      intro: "VPN может везти ваш трафик, а DNS-запросы при этом уходят к вашему провайдеру, и это сообщает владельцам серверов имён, где вы на самом деле. Тест делает запрос, которого ещё никто не делал, и спрашивает у сервера имён, кто его сделал: это ваш резолвер, его страна и сеть, которые сравниваются с адресом, видимым сайтам.",
      focus_h: "Ваш DNS-резолвер",
      docs: [
        ["Что такое утечка DNS?", "Прежде чем браузер откроет сайт, DNS-резолвер превращает имя в адрес. Если этот запрос идёт мимо VPN или прокси, он попадает к резолверу вашего провайдера: провайдер видит каждый сайт, а сайты, сравнивающие резолвер с IP, понимают, что вы через VPN, и где вы на самом деле."],
        ["Как тест находит мой резолвер?", "Страница запрашивает случайное имя в зоне edns.ip-api.com, которое никто раньше не запрашивал, поэтому ответить из кэша нельзя: ваш резолвер вынужден спросить сервер имён ip-api, а тот сообщает адрес и сеть резолвера и подсеть клиента, если резолвер её передаёт (ECS). Тест сравнивает страну резолвера со страной вашего IP."],
        ["Как устранить утечку DNS?", "Clash / Mihomo: включите DNS с enhanced-mode fake-ip или режим TUN, чтобы все запросы шли через него. Клиенты V2Ray / Xray: пустите DNS через прокси (или настройте DoH-сервер, идущий через него). В браузере безопасный DNS (DoH) тоже уводит запросы от провайдера. Потом проверьте снова."],
        ["Резолвер — Cloudflare или Google в другом городе. Это утечка?", "Обычно нет. Публичные резолверы вроде 1.1.1.1 и 8.8.8.8 отвечают из ближайшего к запросу дата-центра, так что город может не совпадать с выходом VPN. Выдаёт вас резолвер вашего провайдера или резолвер в вашей стране, когда IP за границей."],
      ],
    },
  },
  "webrtc-leak": {
    "en": {
      "seo_title": "WebRTC Leak Test: does WebRTC show your real IP? · Who Are You",
      "seo_desc": "Free WebRTC leak test: see the public IPv4 and IPv6 addresses and the local addresses WebRTC hands to any site, compared with the IP your VPN or proxy shows. If they differ, WebRTC leaks your real IP. Includes fixes for Chrome, Firefox, Brave and proxy clients.",
      "seo_kw": "WebRTC leak test, WebRTC leak, WebRTC IP leak, VPN WebRTC leak, check WebRTC, STUN IP leak, local IP leak, disable WebRTC",
      "h1": "WebRTC leak test",
      "og_sub": "Does WebRTC show your real IP?",
      "intro": "Video calls in the browser use WebRTC, and any page can start it without asking. WebRTC asks a STUN server which address you came from, over UDP, and many VPNs and proxies don't carry UDP. Here are the addresses WebRTC gives away, next to the address sites see.",
      "focus_h": "Your WebRTC addresses",
      "docs": [
        [
          "What is a WebRTC leak?",
          "To set up a call, WebRTC collects every address you could be reached at: the local ones on your network card, and the public one a STUN server sees. A page can read them with a few lines of script, no permission needed. If your VPN or proxy carries only the page's web requests, the STUN request goes out over your own connection, and the page learns your real IP behind the VPN."
        ],
        [
          "How does this test work?",
          "The page opens a WebRTC connection to Cloudflare's and Google's STUN servers and lists the addresses they report (\"server reflexive\" candidates). It then compares them with the addresses this site, your other exits and the IPv6 test see. An address none of them show is a leak. The local addresses come from the \"host\" candidates. Nothing is stored or sent anywhere."
        ],
        [
          "How do I fix a WebRTC leak?",
          "Proxy clients (Clash, V2Ray and others): turn on TUN mode so UDP goes through the proxy too. Chrome and Edge: the WebRTC Network Limiter extension, or uBlock Origin's \"Prevent WebRTC from leaking local IP addresses\". Brave: Settings → Privacy → WebRTC IP handling policy → Disable non-proxied UDP. Firefox: in about:config, set media.peerconnection.ice.default_address_only to true, or media.peerconnection.enabled to false to turn WebRTC off. Then run this test again."
        ],
        [
          "Is a local address or a .local name a leak?",
          "A name ending in .local means the browser is hiding your local address (mDNS), which is what you want. A real local address such as 192.168.1.5 doesn't reveal where you are, but it makes your fingerprint more unique. An IPv6 address that differs from your IPv4 exit is a leak only if it isn't your IPv6 exit; the test checks it against the IPv6 address sites see."
        ]
      ]
    },
    "zh-CN": {
      "seo_title": "WebRTC 泄露检测：WebRTC 会暴露你的真实 IP 吗？ · 你是谁",
      "seo_desc": "免费 WebRTC 泄露检测：列出 WebRTC 交给任何网站的公网 IPv4、IPv6 和局域网地址，和 VPN 或代理显示的 IP 对比。对不上，就是 WebRTC 泄露了真实 IP。附 Chrome、Firefox、Brave 和代理客户端的修复方法。",
      "seo_kw": "WebRTC 泄露检测, WebRTC 泄漏检测, WebRTC 泄露, WebRTC IP 泄露, VPN WebRTC 泄漏, WebRTC 检测, 真实 IP 泄露, 关闭 WebRTC, WebRTC leak test",
      "h1": "WebRTC 泄露检测",
      "og_sub": "WebRTC 会不会暴露你的真实 IP？",
      "intro": "浏览器里的视频通话靠的是 WebRTC，任何网页都能直接启动它，不用你同意。它会通过 UDP 去问 STUN 服务器（专门告诉你「外面看到的你是哪个地址」的服务器），而很多 VPN 和代理不转发 UDP。下面是 WebRTC 暴露出来的地址，以及它和网站看到的地址的对比。",
      "focus_h": "你的 WebRTC 地址",
      "docs": [
        [
          "什么是 WebRTC 泄露？",
          "为了接通通话，WebRTC 会收集所有能联系到你的地址：网卡上的局域网地址，以及 STUN 服务器看到的公网地址。网页几行脚本就能读到，不需要任何权限。如果 VPN 或代理只转发网页请求，STUN 请求就会从你自己的线路出去，网页就能拿到 VPN 背后的真实 IP。"
        ],
        [
          "这个检测是怎么做的？",
          "页面向 Cloudflare 和 Google 的 STUN 服务器发起 WebRTC 连接，列出它们报回来的地址（srflx 候选），再和本站、你的其他出口以及 IPv6 测试看到的地址对比。哪个都对不上的地址，就是泄露。局域网地址来自 host 候选。这些地址不会上传，也不会保存。"
        ],
        [
          "WebRTC 泄露怎么修？",
          "代理客户端（Clash、V2Ray 等）：打开 TUN 模式，让 UDP 也走代理。Chrome 和 Edge：装 WebRTC Network Limiter 扩展，或者在 uBlock Origin 里勾选「防止 WebRTC 泄露本地 IP 地址」。Brave：设置 → 隐私 → WebRTC IP 处理策略 → 禁用非代理 UDP。Firefox：在 about:config 把 media.peerconnection.ice.default_address_only 设为 true，或者把 media.peerconnection.enabled 设为 false 彻底关掉。改完再测一次。"
        ],
        [
          "局域网地址或 .local 名字算泄露吗？",
          "以 .local 结尾的名字，说明浏览器把局域网地址藏起来了（mDNS），这正是你想要的。真实的局域网地址（比如 192.168.1.5）暴露不了你在哪，但会让你的指纹更特别。至于和 IPv4 出口不同的 IPv6 地址，只有它不是你的 IPv6 出口时才算泄露：检测会拿它和网站看到的 IPv6 地址比对。"
        ]
      ]
    },
    "zh-TW": {
      "seo_title": "WebRTC 外洩檢測：WebRTC 會暴露你的真實 IP 嗎？ · 你是誰",
      "seo_desc": "免費 WebRTC 外洩檢測：列出 WebRTC 交給任何網站的公開 IPv4、IPv6 和區域網路位址，和 VPN 或代理顯示的 IP 比對。對不上，就是 WebRTC 外洩了真實 IP。附 Chrome、Firefox、Brave 和代理用戶端的修正方法。",
      "seo_kw": "WebRTC 外洩檢測, WebRTC 洩漏檢測, WebRTC 外洩, WebRTC IP 洩漏, VPN WebRTC 外洩, WebRTC 檢測, 真實 IP 外洩, 關閉 WebRTC, WebRTC leak test",
      "h1": "WebRTC 外洩檢測",
      "og_sub": "WebRTC 會不會暴露你的真實 IP？",
      "intro": "瀏覽器裡的視訊通話靠的是 WebRTC，任何網頁都能直接啟動它，不需要你同意。它會透過 UDP 去問 STUN 伺服器（專門告訴你「外面看到的你是哪個位址」的伺服器），而很多 VPN 和代理不轉送 UDP。下面是 WebRTC 暴露出來的位址，以及它和網站看到的位址的比對。",
      "focus_h": "你的 WebRTC 位址",
      "docs": [
        [
          "什麼是 WebRTC 外洩？",
          "為了接通通話，WebRTC 會收集所有聯絡得到你的位址：網路卡上的區域網路位址，以及 STUN 伺服器看到的公開位址。網頁幾行腳本就讀得到，不需要任何權限。如果 VPN 或代理只轉送網頁請求，STUN 請求就會從你自己的線路出去，網頁就能拿到 VPN 背後的真實 IP。"
        ],
        [
          "這個檢測是怎麼做的？",
          "頁面向 Cloudflare 和 Google 的 STUN 伺服器發起 WebRTC 連線，列出它們回報的位址（srflx 候選），再和本站、你的其他出口以及 IPv6 測試看到的位址比對。哪一個都對不上的位址，就是外洩。區域網路位址來自 host 候選。這些位址不會上傳，也不會儲存。"
        ],
        [
          "WebRTC 外洩怎麼修？",
          "代理用戶端（Clash、V2Ray 等）：開啟 TUN 模式，讓 UDP 也走代理。Chrome 和 Edge：安裝 WebRTC Network Limiter 擴充功能，或在 uBlock Origin 勾選「防止 WebRTC 洩漏本機 IP 位址」。Brave：設定 → 隱私權 → WebRTC IP 處理政策 → 停用非代理的 UDP。Firefox：在 about:config 把 media.peerconnection.ice.default_address_only 設為 true，或把 media.peerconnection.enabled 設為 false 完全關掉。改完再測一次。"
        ],
        [
          "區域網路位址或 .local 名稱算外洩嗎？",
          "以 .local 結尾的名稱，代表瀏覽器把區域網路位址藏起來了（mDNS），這正是你要的。真實的區域網路位址（例如 192.168.1.5）透露不了你在哪裡，但會讓你的指紋更好認。至於和 IPv4 出口不同的 IPv6 位址，只有它不是你的 IPv6 出口時才算外洩：檢測會拿它和網站看到的 IPv6 位址比對。"
        ]
      ]
    },
    "ja": {
      "seo_title": "WebRTC リークテスト：WebRTC から本当の IP が漏れていない？ · あなたは誰",
      "seo_desc": "無料の WebRTC リークテスト：WebRTC がどのサイトにも渡してしまう公開 IPv4・IPv6 アドレスとローカルアドレスを一覧にし、VPN やプロキシの IP と比べます。違っていれば、WebRTC から本当の IP が漏れています。Chrome、Firefox、Brave、プロキシのクライアントでの直し方付き。",
      "seo_kw": "WebRTC リークテスト, WebRTC リーク, WebRTC IP 漏れ, VPN WebRTC リーク, WebRTC チェック, ローカル IP 漏洩, WebRTC 無効化, WebRTC leak test",
      "h1": "WebRTC リークテスト",
      "og_sub": "WebRTC から本当の IP が漏れていませんか？",
      "intro": "ブラウザでのビデオ通話には WebRTC が使われ、どのページも許可なしにこれを起動できます。WebRTC は UDP で STUN サーバーに「自分はどのアドレスから来たか」を尋ねますが、UDP を通さない VPN やプロキシは少なくありません。WebRTC が明かすアドレスを、サイトから見えるアドレスと並べて示します。",
      "focus_h": "あなたの WebRTC アドレス",
      "docs": [
        [
          "WebRTC リークとは何ですか？",
          "通話をつなぐため、WebRTC は自分に届く可能性のあるアドレスをすべて集めます。ネットワークカードのローカルアドレスと、STUN サーバーから見た公開アドレスです。ページは数行のスクリプトで、許可なしにそれを読めます。VPN やプロキシがページの通信しか運ばない場合、STUN への問い合わせは自分の回線から直接出ていき、VPN の裏にある本当の IP がページに知られてしまいます。"
        ],
        [
          "このテストはどういう仕組みですか？",
          "ページは Cloudflare と Google の STUN サーバーに WebRTC 接続を開き、返ってきたアドレス（srflx 候補）を一覧にします。それを、このサイト、ほかの出口、IPv6 テストから見えるアドレスと比べます。どれとも一致しないアドレスがあれば、それが漏れです。ローカルアドレスは host 候補から取ります。何も保存せず、どこにも送りません。"
        ],
        [
          "WebRTC リークはどう直しますか？",
          "プロキシのクライアント（Clash、V2Ray など）：TUN モードをオンにして、UDP もプロキシに通します。Chrome と Edge：拡張機能 WebRTC Network Limiter か、uBlock Origin の「WebRTC によるローカル IP アドレスの漏洩を防ぐ」。Brave：設定 → プライバシー → WebRTC IP 処理ポリシー → プロキシ経由でない UDP を無効にする。Firefox：about:config で media.peerconnection.ice.default_address_only を true に、完全に止めるなら media.peerconnection.enabled を false に。変更したら、もう一度テストしてください。"
        ],
        [
          "ローカルアドレスや .local の名前は漏れですか？",
          ".local で終わる名前は、ブラウザがローカルアドレスを隠している（mDNS）しるしで、望ましい状態です。192.168.1.5 のような本物のローカルアドレスは居場所を明かしませんが、フィンガープリントをより珍しくします。IPv4 の出口と違う IPv6 アドレスは、それが自分の IPv6 の出口でない場合だけ漏れです。テストはサイトから見える IPv6 アドレスと照らし合わせます。"
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
      "seo_title": "Test de fuite WebRTC : WebRTC montre-t-il votre vraie IP ? · Qui êtes-vous ?",
      "seo_desc": "Test de fuite WebRTC gratuit : les adresses IPv4 et IPv6 publiques et les adresses locales que WebRTC donne à n'importe quel site, comparées à l'IP que montre votre VPN ou proxy. Si elles diffèrent, WebRTC fait fuiter votre vraie IP. Avec les correctifs pour Chrome, Firefox, Brave et les clients proxy.",
      "seo_kw": "test de fuite WebRTC, fuite WebRTC, WebRTC leak test, fuite IP WebRTC, VPN fuite WebRTC, vérifier WebRTC, fuite IP locale, désactiver WebRTC",
      "h1": "Test de fuite WebRTC",
      "og_sub": "WebRTC montre-t-il votre vraie IP ?",
      "intro": "Les appels vidéo dans le navigateur passent par WebRTC, et n'importe quelle page peut le lancer sans demander. Il demande à un serveur STUN, en UDP, de quelle adresse vous venez, et beaucoup de VPN et de proxys ne transportent pas l'UDP. Voici les adresses que WebRTC révèle, comparées à celle que voient les sites.",
      "focus_h": "Vos adresses WebRTC",
      "docs": [
        [
          "Qu'est-ce qu'une fuite WebRTC ?",
          "Pour établir un appel, WebRTC rassemble toutes les adresses où l'on peut vous joindre : les adresses locales de votre carte réseau et l'adresse publique que voit un serveur STUN. Une page les lit en quelques lignes de script, sans autorisation. Si votre VPN ou proxy ne transporte que les requêtes web de la page, la requête STUN sort par votre propre ligne et la page apprend votre vraie IP derrière le VPN."
        ],
        [
          "Comment fonctionne ce test ?",
          "La page ouvre une connexion WebRTC vers les serveurs STUN de Cloudflare et Google, liste les adresses qu'ils renvoient (candidats srflx) et les compare à celle que voient ce site, vos autres sorties et le test IPv6. Une adresse qu'aucun d'eux ne montre est une fuite. Les adresses locales viennent des candidats host ; rien n'est stocké ni envoyé."
        ],
        [
          "Comment corriger une fuite WebRTC ?",
          "Clients proxy (Clash, V2Ray et autres) : activez le mode TUN pour que l'UDP passe aussi par le proxy. Chrome et Edge : l'extension WebRTC Network Limiter, ou dans uBlock Origin « Empêcher WebRTC de divulguer les adresses IP locales ». Brave : Paramètres → Confidentialité → Règle de gestion des IP WebRTC → Désactiver l'UDP hors proxy. Firefox : dans about:config, mettez media.peerconnection.ice.default_address_only à true, ou media.peerconnection.enabled à false pour couper WebRTC. Puis refaites le test."
        ],
        [
          "Une adresse locale ou un nom en .local, est-ce une fuite ?",
          "Un nom en .local, c'est le navigateur qui cache votre adresse locale (mDNS) : c'est ce que vous voulez. Une vraie adresse locale comme 192.168.1.5 ne dit pas où vous êtes, mais rend votre empreinte plus unique. Une IPv6 différente de votre sortie IPv4 n'est une fuite que si ce n'est pas votre sortie IPv6 : le test la compare à l'IPv6 que voient les sites."
        ]
      ]
    },
    "de": {
      "seo_title": "WebRTC-Leak-Test: Zeigt WebRTC Ihre echte IP? · Wer sind Sie?",
      "seo_desc": "Kostenloser WebRTC-Leak-Test: die öffentlichen IPv4- und IPv6-Adressen und die lokalen Adressen, die WebRTC jeder Website gibt, verglichen mit der IP, die Ihr VPN oder Proxy zeigt. Weichen sie ab, verrät WebRTC Ihre echte IP. Mit Lösungen für Chrome, Firefox, Brave und Proxy-Clients.",
      "seo_kw": "WebRTC-Leak-Test, WebRTC Leak, WebRTC leak test, WebRTC IP-Leak, VPN WebRTC Leak, WebRTC prüfen, lokale IP Leak, WebRTC deaktivieren",
      "h1": "WebRTC-Leak-Test",
      "og_sub": "Zeigt WebRTC Ihre echte IP?",
      "intro": "Videoanrufe im Browser laufen über WebRTC, und jede Seite kann es ohne Nachfrage starten. Es fragt einen STUN-Server per UDP, von welcher Adresse Sie kommen, und viele VPNs und Proxys leiten kein UDP weiter. Hier sind die Adressen, die WebRTC verrät, verglichen mit der, die Websites sehen.",
      "focus_h": "Ihre WebRTC-Adressen",
      "docs": [
        [
          "Was ist ein WebRTC-Leak?",
          "Um einen Anruf aufzubauen, sammelt WebRTC jede Adresse, unter der Sie erreichbar sind: die lokalen Ihrer Netzwerkkarte und die öffentliche, die ein STUN-Server sieht. Eine Seite liest sie mit ein paar Zeilen Skript, ohne Erlaubnis. Leitet Ihr VPN oder Proxy nur die Webanfragen der Seite weiter, geht die STUN-Anfrage über Ihre eigene Leitung, und die Seite erfährt Ihre echte IP hinter dem VPN."
        ],
        [
          "Wie funktioniert dieser Test?",
          "Die Seite öffnet eine WebRTC-Verbindung zu den STUN-Servern von Cloudflare und Google, listet die gemeldeten Adressen (srflx-Kandidaten) und vergleicht sie mit denen, die diese Website, Ihre anderen Ausgänge und der IPv6-Test sehen. Eine Adresse, die keiner davon zeigt, ist ein Leak. Die lokalen Adressen stammen aus den host-Kandidaten; nichts wird gespeichert oder gesendet."
        ],
        [
          "Wie behebe ich einen WebRTC-Leak?",
          "Proxy-Clients (Clash, V2Ray und andere): TUN-Modus einschalten, damit auch UDP durch den Proxy geht. Chrome und Edge: die Erweiterung WebRTC Network Limiter oder in uBlock Origin „Verhindern, dass WebRTC lokale IP-Adressen preisgibt“. Brave: Einstellungen → Datenschutz → WebRTC-IP-Verarbeitungsrichtlinie → Nicht über Proxy geleitetes UDP deaktivieren. Firefox: in about:config media.peerconnection.ice.default_address_only auf true, oder media.peerconnection.enabled auf false, um WebRTC abzuschalten. Dann den Test wiederholen."
        ],
        [
          "Ist eine lokale Adresse oder ein .local-Name ein Leak?",
          "Ein Name auf .local heißt, der Browser versteckt Ihre lokale Adresse (mDNS) – genau das wollen Sie. Eine echte lokale Adresse wie 192.168.1.5 verrät nicht, wo Sie sind, macht Ihren Fingerabdruck aber einzigartiger. Eine IPv6-Adresse, die von Ihrem IPv4-Ausgang abweicht, ist nur dann ein Leak, wenn sie nicht Ihr IPv6-Ausgang ist: Der Test vergleicht sie mit der IPv6-Adresse, die Websites sehen."
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
      "seo_title": "Проверка утечки WebRTC: видно ли через WebRTC ваш настоящий IP? · Кто вы?",
      "seo_desc": "Бесплатная проверка утечки WebRTC: публичные IPv4- и IPv6-адреса и локальные адреса, которые WebRTC отдаёт любому сайту, в сравнении с IP, который показывает ваш VPN или прокси. Если они не совпадают, WebRTC выдаёт ваш настоящий IP. С инструкциями для Chrome, Firefox, Brave и прокси-клиентов.",
      "seo_kw": "проверка утечки WebRTC, утечка WebRTC, WebRTC leak test, утечка IP через WebRTC, VPN утечка WebRTC, проверить WebRTC, утечка локального IP, отключить WebRTC",
      "h1": "Проверка утечки WebRTC",
      "og_sub": "Видно ли через WebRTC ваш настоящий IP?",
      "intro": "Видеозвонки в браузере работают через WebRTC, и любая страница может запустить его без спроса. Он спрашивает STUN-сервер по UDP, с какого адреса вы пришли, а многие VPN и прокси UDP не пропускают. Вот адреса, которые выдаёт WebRTC, в сравнении с тем, что видят сайты.",
      "focus_h": "Ваши адреса WebRTC",
      "docs": [
        [
          "Что такое утечка WebRTC?",
          "Чтобы установить звонок, WebRTC собирает все адреса, по которым с вами можно связаться: локальные адреса сетевой карты и публичный адрес, который видит STUN-сервер. Страница читает их парой строк скрипта, без разрешения. Если VPN или прокси пропускает только веб-запросы страницы, запрос к STUN уходит по вашей собственной линии, и страница узнаёт ваш настоящий IP за VPN."
        ],
        [
          "Как работает эта проверка?",
          "Страница открывает WebRTC-соединение со STUN-серверами Cloudflare и Google, перечисляет адреса, которые они вернули (кандидаты srflx), и сравнивает их с адресом, который видят этот сайт, ваши другие выходы и тест IPv6. Адрес, которого нет ни у одного из них, — утечка. Локальные адреса берутся из кандидатов host; ничего не сохраняется и не отправляется."
        ],
        [
          "Как устранить утечку WebRTC?",
          "Прокси-клиенты (Clash, V2Ray и другие): включите режим TUN, чтобы UDP тоже шёл через прокси. Chrome и Edge: расширение WebRTC Network Limiter или в uBlock Origin «Предотвращать утечку локальных IP-адресов через WebRTC». Brave: Настройки → Конфиденциальность → Политика обработки IP WebRTC → Отключить UDP без прокси. Firefox: в about:config задайте media.peerconnection.ice.default_address_only = true или media.peerconnection.enabled = false, чтобы выключить WebRTC. Затем проверьте ещё раз."
        ],
        [
          "Локальный адрес или имя .local — это утечка?",
          "Имя на .local означает, что браузер прячет ваш локальный адрес (mDNS), — так и должно быть. Настоящий локальный адрес вроде 192.168.1.5 не выдаёт, где вы, но делает отпечаток уникальнее. IPv6-адрес, отличный от вашего IPv4-выхода, — утечка, только если это не ваш IPv6-выход: проверка сравнивает его с IPv6-адресом, который видят сайты."
        ]
      ]
    }
  },
  "browser-check": {
    "en": {
      "seo_title": "Browser Environment Check: does your browser give itself away? · Who Are You",
      "seo_desc": "Free browser environment check for anti-detect browsers and multi-account setups: whether the user agent, JavaScript engine, languages, time zone, fonts and fingerprint agree, whether extensions rewrote what sites read, with an A–F grade.",
      "seo_kw": "browser environment check, anti-detect browser test, browser consistency check, fingerprint browser check, user agent spoofing detection, multi-account browser check",
      "h1": "Browser environment check",
      "og_sub": "Does your browser agree with itself?",
      "intro": "Sites that fight fraud don't just look at your IP. They check that everything your browser says fits together. A user agent that says Safari on a Chromium engine, a language changed only in JavaScript, a time zone two APIs disagree on: each one is a giveaway. Here's what this browser says, and where it contradicts itself.",
      "focus_h": "Tampering check",
      "docs": [
        [
          "What does this check look at?",
          "Whether the properties sites read (user agent, platform, languages, screen) were overwritten instead of coming from the browser; whether the drawing and audio functions used for fingerprints were replaced; whether the JavaScript engine matches the user agent; whether the language in the request headers matches the one in JavaScript; and whether Date and Intl agree on the time zone. Every other check on the page counts toward the grade too."
        ],
        [
          "Why do extensions that change the user agent get caught?",
          "They change what JavaScript reads, but not the headers the browser sends with each request, the engine underneath, or the functions they wrap. Each mismatch is something a site can compare. To seem to be somewhere else, change the system itself: its language and time zone."
        ],
        [
          "Is anything stored?",
          "Nothing that identifies you. The checks run in your browser, and the server only answers with what it can already see in this request, keeping no log. Afterwards the page adds one to anonymous counters (which values you had, how each check came out), with no IP and no record of a single visit. \"Don't count me\" on the page turns this off, and browsers that send Global Privacy Control are never counted."
        ]
      ]
    },
    "zh-CN": {
      "seo_title": "浏览器环境检测：指纹浏览器、多开环境露馅了吗？ · 你是谁",
      "seo_desc": "免费浏览器环境检测，适合指纹浏览器和多账号环境：检查 UA、JS 引擎、语言、时区、字体和指纹是否一致，有没有插件篡改网站读到的信息，并给出 A 到 F 的环境等级。",
      "seo_kw": "浏览器环境检测, 指纹浏览器检测, 浏览器指纹检测, 多开环境检测, UA 伪装检测, 环境一致性检测, AdsPower 检测, 跨境电商环境检测",
      "h1": "浏览器环境检测",
      "og_sub": "你的浏览器前后说法一致吗？",
      "intro": "做风控的网站不只看 IP，还会核对浏览器说的每一件事能不能对上：UA 说是 Safari，引擎却是 Chromium；语言只在 JS 里改了，请求头里还是原样；两个接口报的时区不一样……每一处都是破绽。下面是这个浏览器的各种说法，以及它自相矛盾的地方。",
      "focus_h": "篡改检测",
      "docs": [
        [
          "这个检测看哪些地方？",
          "看这几样：网站常读的属性（UA、平台、语言、屏幕）有没有被重新定义；算指纹用的画图和音频函数有没有被替换；JS 引擎和 UA 对不对得上；请求头（浏览器每次请求都会附带的信息）里的语言和 JS 里的是否一致；Date 和 Intl 两个接口报的时区是否相同。页面上其他检测项也都计入等级。"
        ],
        [
          "为什么改 UA 的插件会被识破？",
          "因为它们只改了 JS 读到的那一份。浏览器发出的请求头、底层引擎、被它们包了一层的函数，都还是原样。每一处对不上，网站都比得出来。想装成在别处，要在系统里改：系统语言和时区。"
        ],
        [
          "会保存什么吗？",
          "不会保存关于你个人的东西。检测都在你的浏览器里进行，服务器只回答它从这次请求里本来就看得到的东西，不记日志。检测完，页面会给匿名计数器加一（各项特征值和每项检查结果的计数），不存 IP，不存完整指纹，也没有单次访问的记录。页面上的「不参与统计」可以关掉；开了全局隐私控制（GPC）的浏览器不会计入。"
        ]
      ]
    },
    "zh-TW": {
      "seo_title": "瀏覽器環境檢測：指紋瀏覽器、多開環境露餡了嗎？ · 你是誰",
      "seo_desc": "免費瀏覽器環境檢測，適合指紋瀏覽器和多帳號環境：檢查 UA、JS 引擎、語言、時區、字型和指紋是否一致，有沒有擴充功能竄改網站讀到的資訊，並給出 A 到 F 的環境等級。",
      "seo_kw": "瀏覽器環境檢測, 指紋瀏覽器檢測, 瀏覽器指紋檢測, 多開環境檢測, UA 偽裝檢測, 環境一致性檢測, AdsPower 檢測",
      "h1": "瀏覽器環境檢測",
      "og_sub": "你的瀏覽器前後說法一致嗎？",
      "intro": "做風險控管的網站不只看 IP，還會核對瀏覽器說的每一件事對不對得上：UA 說是 Safari，引擎卻是 Chromium；語言只在 JS 裡改了，請求標頭還是原樣；兩個介面回報的時區不一樣……每一處都是破綻。下面是這個瀏覽器的各種說法，以及它自相矛盾的地方。",
      "focus_h": "竄改檢測",
      "docs": [
        [
          "這個檢測看哪些地方？",
          "看這幾樣：網站常讀的屬性（UA、平台、語言、螢幕）有沒有被重新定義；算指紋用的繪圖和音訊函式有沒有被替換；JS 引擎和 UA 對不對得上；請求標頭（瀏覽器每次發出請求都會附上的資訊）裡的語言和 JS 裡的是否一致；Date 和 Intl 兩個介面回報的時區是否相同。頁面上其他檢測項目也都計入等級。"
        ],
        [
          "為什麼改 UA 的擴充功能會被識破？",
          "因為它們只改了 JS 讀到的那一份。瀏覽器送出的請求標頭、底層引擎、被它們包了一層的函式，都還是原樣。每一處對不上，網站都比對得出來。想假裝在別的地方，要直接改系統：系統語言和時區。"
        ],
        [
          "會儲存什麼嗎？",
          "不會儲存關於你個人的東西。檢測都在你的瀏覽器裡進行，伺服器只回應它從這次請求本來就看得到的東西，不留紀錄。檢測完，頁面會替匿名計數器加一（各項特徵值和每項檢查結果的計數），不存 IP，不存完整指紋，也沒有單次造訪的紀錄。頁面上的「不參與統計」可以關掉；開了全球隱私控制（GPC）的瀏覽器不會計入。"
        ]
      ]
    },
    "ja": {
      "seo_title": "ブラウザ環境チェック：ブラウザの言い分は辻褄が合っている？ · あなたは誰",
      "seo_desc": "アンチディテクトブラウザや複数アカウント運用向けの無料ブラウザ環境チェック：UA、JavaScript エンジン、言語、タイムゾーン、フォント、フィンガープリントが一致しているか、拡張機能がサイトの読む値を書き換えていないかを調べ、A〜F で評価します。",
      "seo_kw": "ブラウザ環境チェック, アンチディテクトブラウザ, ブラウザ指紋チェック, UA 偽装 検出, 複数アカウント 環境",
      "h1": "ブラウザ環境チェック",
      "og_sub": "あなたのブラウザ、辻褄は合っていますか？",
      "intro": "不正対策をするサイトは IP だけを見ているわけではありません。ブラウザの言うことがすべて噛み合っているかを確かめます。UA は Safari なのにエンジンは Chromium、言語を JavaScript の中だけで変えている、2 つの API でタイムゾーンが違う。どれも手がかりになります。このブラウザが何と言っていて、どこで矛盾しているかを示します。",
      "focus_h": "書き換えチェック",
      "docs": [
        [
          "何を調べるのですか？",
          "サイトが読むプロパティ（UA、プラットフォーム、言語、画面）がブラウザ本来の値ではなく書き換えられていないか。フィンガープリントに使われる描画や音声の関数が差し替えられていないか。JavaScript エンジンが UA と合っているか。リクエストヘッダーの言語が JavaScript の言語と同じか。Date と Intl のタイムゾーンが一致しているか。ページのほかの検査も評価に含まれます。"
        ],
        [
          "UA を変える拡張機能はなぜ見破られるのですか？",
          "変わるのは JavaScript が読む値だけで、ブラウザがリクエストごとに送るヘッダー、内部のエンジン、包んだ関数そのものは元のままだからです。食い違いはどれも、サイトが比べられる手がかりになります。別の場所にいるように見せたいなら、システムの言語とタイムゾーンそのものを変えてください。"
        ],
        [
          "何か保存されますか？",
          "あなたを特定できる情報は保存しません。検査はブラウザの中で行い、サーバーはこのリクエストから元々見える情報を返すだけで、ログも残しません。検査のあと、ページは匿名のカウンター（あなたの値、各チェックの結果）に 1 を足しますが、IP も 1 回ごとの記録も残りません。ページの「集計に含めない」で止められ、グローバル・プライバシー・コントロール（GPC）を送るブラウザは集計しません。"
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
      "seo_title": "Browser-Umgebungstest: Passt Ihr Browser zu sich selbst? · Wer sind Sie?",
      "seo_desc": "Kostenloser Browser-Umgebungstest für Anti-Detect-Browser und Mehrkonten-Setups: ob User-Agent, JS-Engine, Sprachen, Zeitzone, Schriften und Fingerabdruck zusammenpassen, ob Erweiterungen umschreiben, was Websites lesen, mit Note von A bis F.",
      "seo_kw": "Browser Umgebungstest, Anti-Detect-Browser Test, Browser Konsistenz, User-Agent Spoofing erkennen, Browser Fingerabdruck Test",
      "h1": "Browser-Umgebungstest",
      "og_sub": "Passt Ihr Browser zu sich selbst?",
      "intro": "Websites, die Betrug bekämpfen, lesen nicht nur Ihre IP: Sie prüfen, ob alles zusammenpasst, was Ihr Browser sagt. Ein User-Agent, der Safari sagt, auf einer Chromium-Engine; eine Sprache, die nur in JavaScript gesetzt ist; eine Zeitzone, über die zwei Schnittstellen uneins sind – jedes davon verrät Sie. Hier steht, was dieser Browser sagt und wo er sich widerspricht.",
      "focus_h": "Manipulationsprüfung",
      "docs": [
        [
          "Was wird geprüft?",
          "Ob Eigenschaften, die Websites lesen (User-Agent, Plattform, Sprachen, Bildschirm), neu definiert wurden, ob die Zeichen- und Audiofunktionen der Fingerabdrücke ersetzt wurden, ob die JS-Engine zum User-Agent passt, ob die Sprache im Request-Header der in JavaScript entspricht und ob Date und Intl dieselbe Zeitzone nennen. Alle übrigen Prüfungen zählen ebenfalls zur Note."
        ],
        [
          "Warum fallen Erweiterungen auf, die den User-Agent ändern?",
          "Sie ändern nur, was JavaScript liest – nicht die Header, die der Browser sendet, nicht die Engine darunter und nicht die Funktionen, die sie umhüllen. Jede Abweichung kann eine Website vergleichen. Wer anderswo wirken will, stellt das System selbst um: Sprache und Zeitzone."
        ],
        [
          "Wird etwas gespeichert?",
          "Nichts über Sie. Die Prüfungen laufen in Ihrem Browser, und der Server antwortet nur mit dem, was er von dieser Anfrage sieht. Danach zählt die Seite anonyme Zähler hoch (welche Werte Sie hatten, wie jede Prüfung ausging), ohne IP und ohne Eintrag pro Besuch; „Nicht mitzählen“ auf der Seite schaltet es ab."
        ]
      ]
    },
    "fr": {
      "seo_title": "Test d’environnement du navigateur : votre navigateur est-il cohérent ? · Qui êtes-vous ?",
      "seo_desc": "Test gratuit d’environnement du navigateur pour navigateurs anti-détection et multi-comptes : cohérence du user agent, du moteur JS, des langues, du fuseau, des polices et de l’empreinte, réécritures par des extensions, et une note de A à F.",
      "seo_kw": "test environnement navigateur, navigateur anti-détection test, cohérence navigateur, détection usurpation user agent, test empreinte navigateur",
      "h1": "Test d’environnement du navigateur",
      "og_sub": "Votre navigateur est-il cohérent avec lui-même ?",
      "intro": "Les sites qui luttent contre la fraude ne lisent pas que votre IP : ils vérifient que tout ce que dit votre navigateur concorde. Un user agent Safari sur un moteur Chromium, une langue changée seulement en JavaScript, deux interfaces en désaccord sur le fuseau : chacun vous trahit. Voici ce que dit ce navigateur, et où il se contredit.",
      "focus_h": "Contrôle des modifications",
      "docs": [
        [
          "Qu’est-ce qui est vérifié ?",
          "Si les propriétés que lisent les sites (user agent, plateforme, langues, écran) ont été redéfinies, si les fonctions de dessin et d’audio utilisées par les empreintes ont été remplacées, si le moteur JS correspond au user agent, si la langue de l’en-tête correspond à celle de JavaScript, et si Date et Intl s’accordent sur le fuseau. Les autres contrôles de la page comptent aussi dans la note."
        ],
        [
          "Pourquoi les extensions qui changent le user agent se font-elles prendre ?",
          "Elles changent ce que lit JavaScript, mais pas les en-têtes envoyés par le navigateur, ni le moteur en dessous, ni les fonctions qu’elles enveloppent. Chaque écart peut être comparé. Pour paraître ailleurs, changez le système lui-même : sa langue et son fuseau."
        ],
        [
          "Quelque chose est-il enregistré ?",
          "Rien sur vous. Les vérifications se font dans votre navigateur, et le serveur ne répond qu’avec ce qu’il voit de cette requête. Ensuite la page ajoute un à des compteurs anonymes (vos valeurs, le résultat de chaque vérification), sans IP ni trace d’une visite ; « Ne pas me compter » sur la page le désactive."
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
      "seo_title": "Проверка окружения браузера: согласован ли ваш браузер? · Кто вы",
      "seo_desc": "Бесплатная проверка окружения браузера для антидетект-браузеров и мультиаккаунтов: совпадают ли User-Agent, движок JS, языки, часовой пояс, шрифты и отпечаток, не переписали ли расширения то, что читают сайты, и оценка от A до F.",
      "seo_kw": "проверка окружения браузера, антидетект браузер проверка, согласованность браузера, обнаружение подмены User-Agent, проверка отпечатка браузера",
      "h1": "Проверка окружения браузера",
      "og_sub": "Согласован ли ваш браузер сам с собой?",
      "intro": "Сайты, которые борются с мошенничеством, смотрят не только на IP: они проверяют, сходится ли всё, что говорит браузер. User-Agent Safari на движке Chromium, язык, изменённый только в JavaScript, два интерфейса с разным часовым поясом — каждое выдаёт вас. Вот что говорит этот браузер и где он себе противоречит.",
      "focus_h": "Проверка подмены",
      "docs": [
        [
          "Что проверяется?",
          "Не переопределены ли свойства, которые читают сайты (User-Agent, платформа, языки, экран), не подменены ли функции рисования и звука, которые используют отпечатки, совпадает ли движок JS с User-Agent, совпадает ли язык в заголовке запроса с языком в JavaScript и согласны ли Date и Intl в часовом поясе. Остальные проверки на странице тоже входят в оценку."
        ],
        [
          "Почему расширения, меняющие User-Agent, попадаются?",
          "Они меняют только то, что читает JavaScript, но не заголовки, которые отправляет браузер, не движок под ними и не функции, которые оборачивают. Любое расхождение сайт может сравнить. Чтобы казаться в другом месте, меняйте саму систему: язык и часовой пояс."
        ],
        [
          "Что-нибудь сохраняется?",
          "Ничего о вас лично. Проверки идут в вашем браузере, а сервер отвечает только тем, что видит в этом запросе. Затем страница прибавляет единицу к анонимным счётчикам (ваши значения, итог каждой проверки) — без IP и без записи о визите; «Не учитывать меня» на странице это отключает."
        ]
      ]
    }
  },
  "timezone-check": {
    "en": {
      "seo_title": "Time Zone Check: does your time zone match your IP? · Who Are You",
      "seo_desc": "Free time zone check: your system time zone and clock format next to the time zone of your IP address. A mismatch is one of the first things sites use to spot a VPN or proxy. Includes fixes for Windows, macOS and phones.",
      "seo_kw": "time zone check, timezone IP mismatch, browser time zone, VPN time zone, what is my time zone, time zone detection",
      "h1": "Time zone check",
      "og_sub": "Does your clock match your IP?",
      "intro": "Any page can read your system's time zone without asking, and every site knows roughly where your IP is. When the two disagree, say an IP in Japan and a clock on China Standard Time, it's one of the first signs sites use to spot a VPN or proxy. Here are both, side by side.",
      "focus_h": "Your time zone vs your IP",
      "docs": [
        [
          "How do sites know my time zone?",
          "Through JavaScript's Intl and Date, which any page can use without a permission prompt. The IP's time zone comes from the same kind of location database that places your IP in a city."
        ],
        [
          "How do I fix a mismatch?",
          "Set the system time zone to one in the country your IP is in: on Windows in Settings → Time & language, on macOS in System Settings → General → Date & Time, on phones in the date and time settings. An extension that only changes JavaScript's time zone is easy to catch; the browser environment check shows why."
        ],
        [
          "Why is a different zone in the same country only a warning?",
          "Large countries have several time zones, and an IP is often placed in the right country but the wrong city. A zone in another country is a clear contradiction; a zone in the same country is only a hint."
        ]
      ]
    },
    "zh-CN": {
      "seo_title": "时区检测：系统时区和 IP 对得上吗？ · 你是谁",
      "seo_desc": "免费时区检测：把你的系统时区、时钟格式和 IP 所在地的时区放在一起对比。两者不一致，是网站识别 VPN 和代理最先看的破绽之一。附 Windows、macOS 和手机上的改法。",
      "seo_kw": "时区检测, 时区与 IP 不一致, 浏览器时区, VPN 时区, 我的时区, 系统时区检测, 时区泄露",
      "h1": "时区检测",
      "og_sub": "你的时钟和 IP 对得上吗？",
      "intro": "任何网页都能直接读到你系统的时区，不用你授权；任何网站也大致知道你的 IP 在哪。两者对不上，比如 IP 在日本、时钟却是北京时间，就是网站识别 VPN 和代理时最先看的破绽之一。下面把两者并排列出来。",
      "focus_h": "你的时区和 IP",
      "docs": [
        [
          "网站怎么知道我的时区？",
          "靠 JavaScript 里的 Intl 和 Date 两个接口，任何网页都能用，不会弹授权。IP 的时区则来自 IP 地理位置库，就是把 IP 对应到城市的那种数据库。"
        ],
        [
          "时区对不上怎么改？",
          "把系统时区改成 IP 所在地的：Windows 在「设置 → 时间和语言」，macOS 在「系统设置 → 通用 → 日期与时间」，手机在日期和时间设置里。只改 JS 时区的浏览器插件很容易被识破，原因见浏览器环境检测。"
        ],
        [
          "为什么同一个国家的不同时区只标黄？",
          "大国有好几个时区，IP 定位也常常只准到国家、城市不对。时区在别的国家才算明显矛盾；同一个国家里的，只是提醒你留意。"
        ]
      ]
    },
    "zh-TW": {
      "seo_title": "時區檢測：系統時區和 IP 對得上嗎？ · 你是誰",
      "seo_desc": "免費時區檢測：把你的系統時區、時間格式和 IP 所在地的時區放在一起比對。兩者不一致，是網站辨識 VPN 和代理最先看的破綻之一。附 Windows、macOS 和手機的改法。",
      "seo_kw": "時區檢測, 時區與 IP 不一致, 瀏覽器時區, VPN 時區, 我的時區, 系統時區檢測, 時區外洩",
      "h1": "時區檢測",
      "og_sub": "你的時鐘和 IP 對得上嗎？",
      "intro": "任何網頁都能直接讀到你系統的時區，不需要你授權；任何網站也大概知道你的 IP 在哪裡。兩者對不上，例如 IP 在日本、時鐘卻是台北時間，就是網站辨識 VPN 和代理時最先看的破綻之一。下面把兩者並排列出來。",
      "focus_h": "你的時區和 IP",
      "docs": [
        [
          "網站怎麼知道我的時區？",
          "靠 JavaScript 裡的 Intl 和 Date 兩個介面，任何網頁都能用，不會跳出授權。IP 的時區則來自 IP 地理位置資料庫，也就是把 IP 對應到城市的那種資料庫。"
        ],
        [
          "時區對不上要怎麼改？",
          "把系統時區改成 IP 所在地的：Windows 在「設定 → 時間與語言」，macOS 在「系統設定 → 一般 → 日期與時間」，手機在日期和時間設定裡。只改 JS 時區的瀏覽器擴充功能很容易被識破，原因請看瀏覽器環境檢測。"
        ],
        [
          "為什麼同一個國家的不同時區只標黃？",
          "大國有好幾個時區，IP 定位也常常只準到國家，城市不對。時區在別的國家才算明顯矛盾；同一個國家裡的，只是提醒你留意。"
        ]
      ]
    },
    "ja": {
      "seo_title": "タイムゾーンチェック：端末の時刻と IP は合っている？ · あなたは誰",
      "seo_desc": "無料のタイムゾーンチェック：システムのタイムゾーンと時刻の表示形式を、IP のある場所のタイムゾーンと比べます。この食い違いは、サイトが VPN やプロキシを見抜くときに真っ先に見る手がかりの一つです。Windows・macOS・スマホでの直し方付き。",
      "seo_kw": "タイムゾーン チェック, タイムゾーン IP 不一致, ブラウザ タイムゾーン, VPN タイムゾーン, 時刻 検出",
      "h1": "タイムゾーンチェック",
      "og_sub": "端末の時計と IP は合っていますか？",
      "intro": "どのページも許可なしにシステムのタイムゾーンを読めますし、どのサイトも IP のおおよその場所を知っています。この 2 つが食い違う、たとえば IP は日本なのに時計は中国標準時、というのは、サイトが VPN やプロキシを見抜くときに真っ先に見る手がかりの一つです。両方を並べて示します。",
      "focus_h": "タイムゾーンと IP",
      "docs": [
        [
          "サイトはどうやってタイムゾーンを知るのですか？",
          "JavaScript の Intl と Date からです。どのページでも、許可のダイアログなしに使えます。IP のタイムゾーンは、IP から都市を割り出すのと同じ種類の位置情報データベースから取ります。"
        ],
        [
          "食い違いはどう直しますか？",
          "システムのタイムゾーンを、IP のある国のものにします。Windows は「設定 → 時刻と言語」、macOS は「システム設定 → 一般 → 日付と時刻」、スマホは日付と時刻の設定です。JavaScript のタイムゾーンだけを変える拡張機能はすぐに見破られます（理由はブラウザ環境チェックで分かります）。"
        ],
        [
          "同じ国の別のタイムゾーンが黄色の注意で済むのはなぜですか？",
          "大きな国にはタイムゾーンが複数あり、IP は国は合っていても都市がずれることがよくあるからです。別の国のタイムゾーンははっきりした矛盾ですが、同じ国ならヒント程度にとどめます。"
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
      "seo_title": "Zeitzonen-Test: Passt Ihre Zeitzone zu Ihrer IP? · Wer sind Sie?",
      "seo_desc": "Kostenloser Zeitzonen-Test: Ihre Systemzeitzone und Ihr Uhrzeitformat gegen die Zeitzone Ihrer IP. Eine Abweichung gehört zu den ersten Hinweisen, an denen Websites VPN und Proxy erkennen. Mit Anleitung für Windows, macOS und Handys.",
      "seo_kw": "Zeitzone Test, Zeitzone IP Abweichung, Browser Zeitzone, VPN Zeitzone, meine Zeitzone",
      "h1": "Zeitzonen-Test",
      "og_sub": "Passt Ihre Uhr zu Ihrer IP?",
      "intro": "Jede Seite kann ohne Nachfrage die Zeitzone Ihres Systems lesen, und jede Website weiß ungefähr, wo Ihre IP ist. Passen beide nicht zusammen – etwa eine IP in Japan und eine Uhr auf chinesischer Zeit –, ist das einer der ersten Hinweise auf VPN oder Proxy. Hier stehen beide nebeneinander.",
      "focus_h": "Ihre Zeitzone und Ihre IP",
      "docs": [
        [
          "Woher kennen Websites meine Zeitzone?",
          "Über Intl und Date in JavaScript, für jede Seite ohne Nachfrage verfügbar. Die Zeitzone der IP stammt aus derselben Art Standortdatenbank, die Ihre IP einer Stadt zuordnet."
        ],
        [
          "Wie behebe ich eine Abweichung?",
          "Stellen Sie die Systemzeitzone auf eine im Land Ihrer IP: unter Windows in Einstellungen → Zeit und Sprache, unter macOS in Systemeinstellungen → Allgemein → Datum & Uhrzeit, am Handy in den Datums- und Zeiteinstellungen. Eine Erweiterung, die nur die Zeitzone in JavaScript ändert, fällt leicht auf; warum, zeigt der Browser-Umgebungstest."
        ],
        [
          "Warum ist eine andere Zone im selben Land nur eine Warnung?",
          "Große Länder haben mehrere Zeitzonen, und eine IP wird oft dem richtigen Land, aber der falschen Stadt zugeordnet. Die Zone eines anderen Landes ist ein klarer Widerspruch, eine im selben Land nur ein Hinweis."
        ]
      ]
    },
    "fr": {
      "seo_title": "Test de fuseau horaire : votre fuseau correspond-il à votre IP ? · Qui êtes-vous ?",
      "seo_desc": "Test gratuit de fuseau horaire : le fuseau et le format d’heure de votre système face au fuseau de votre IP. Un écart est l’un des premiers indices utilisés pour repérer un VPN ou un proxy. Avec la correction sous Windows, macOS et téléphone.",
      "seo_kw": "test fuseau horaire, fuseau horaire IP, fuseau navigateur, fuseau VPN, mon fuseau horaire",
      "h1": "Test de fuseau horaire",
      "og_sub": "Votre horloge correspond-elle à votre IP ?",
      "intro": "Toute page peut lire le fuseau de votre système sans rien demander, et tout site sait à peu près où se trouve votre IP. Quand les deux divergent – une IP au Japon, une horloge à l’heure de Chine –, c’est l’un des premiers indices d’un VPN ou d’un proxy. Les voici côte à côte.",
      "focus_h": "Votre fuseau face à votre IP",
      "docs": [
        [
          "Comment les sites connaissent-ils mon fuseau ?",
          "Par Intl et Date en JavaScript, accessibles à toute page sans autorisation. Le fuseau de l’IP vient du même genre de base de localisation qui place votre IP dans une ville."
        ],
        [
          "Comment corriger un écart ?",
          "Réglez le fuseau du système sur un fuseau du pays de votre IP : sous Windows dans Paramètres → Heure et langue, sous macOS dans Réglages Système → Général → Date et heure, sur téléphone dans les réglages de date et heure. Une extension qui ne change que le fuseau de JavaScript se repère facilement ; le test d’environnement du navigateur explique pourquoi."
        ],
        [
          "Pourquoi un autre fuseau du même pays n’est-il qu’un avertissement ?",
          "Les grands pays ont plusieurs fuseaux, et une IP est souvent placée dans le bon pays mais la mauvaise ville. Un fuseau d’un autre pays est une contradiction nette ; un fuseau du même pays, seulement un indice."
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
      "seo_title": "Проверка часового пояса: совпадает ли он с вашим IP? · Кто вы",
      "seo_desc": "Бесплатная проверка часового пояса: часовой пояс и формат времени системы против часового пояса вашего IP. Расхождение — одна из первых подсказок, по которым сайты замечают VPN и прокси. С инструкциями для Windows, macOS и телефона.",
      "seo_kw": "проверка часового пояса, часовой пояс IP, часовой пояс браузера, часовой пояс VPN, мой часовой пояс",
      "h1": "Проверка часового пояса",
      "og_sub": "Совпадают ли часы с вашим IP?",
      "intro": "Любая страница без спроса читает часовой пояс системы, а любой сайт примерно знает, где ваш IP. Когда они расходятся — IP в Японии, а часы по китайскому времени, — это одна из первых подсказок о VPN или прокси. Вот они рядом.",
      "focus_h": "Ваш часовой пояс и IP",
      "docs": [
        [
          "Откуда сайты знают мой часовой пояс?",
          "Из Intl и Date в JavaScript, доступных любой странице без разрешения. Часовой пояс IP берётся из той же базы геолокации, что определяет город вашего IP."
        ],
        [
          "Как исправить расхождение?",
          "Поставьте в системе часовой пояс страны вашего IP: в Windows — Параметры → Время и язык, в macOS — Системные настройки → Основные → Дата и время, на телефоне — в настройках даты и времени. Расширение, меняющее пояс только в JavaScript, легко заметить; почему — объясняет проверка окружения браузера."
        ],
        [
          "Почему другой пояс той же страны — лишь предупреждение?",
          "У больших стран несколько поясов, и IP часто попадает в верную страну, но не в тот город. Пояс другой страны — явное противоречие, пояс той же страны — лишь подсказка."
        ]
      ]
    }
  },
  "proxy-check": {
    "en": {
      "seo_title": "Proxy Check: can sites tell you're behind a proxy? · Who Are You",
      "seo_desc": "Free proxy check: compares the round trip your browser measures with the one Cloudflare sees on its connection, and checks whether your IP belongs to a data center, plus your DNS and WebRTC addresses. A proxy adds a leg sites can measure, even on a clean residential IP.",
      "seo_kw": "proxy check, proxy detection test, am I behind a proxy, VPN detection, latency proxy detection, data center IP check",
      "h1": "Proxy check",
      "og_sub": "Can sites tell there's a proxy in between?",
      "intro": "A proxy hides your IP, but not the extra leg of the trip. Cloudflare measures the round trip on its own connection, which ends at the proxy; your browser measures the whole way. When the browser's number is much bigger, something sits in between, however clean the IP looks. Here are both, with the other signs sites use.",
      "focus_h": "Your round trip",
      "docs": [
        [
          "How does the latency check work?",
          "The page asks this site's nearest Cloudflare server for a tiny response a few times and keeps the fastest, timed from when the request leaves to when the first byte comes back. Cloudflare reports the round trip it measured on the TCP connection it served you on. Without a proxy the two are close; through one, Cloudflare only sees the proxy's part."
        ],
        [
          "Can a residential IP still be caught?",
          "Yes. A residential IP passes the data center check, but the extra round trip, a DNS resolver in another country, a time zone that doesn't match and WebRTC addresses can all still give it away."
        ],
        [
          "Why does the check sometimes say \"couldn't read\"?",
          "Over HTTP/3 there's no TCP connection, so Cloudflare has no round trip to report. Some networks also block the measuring requests."
        ]
      ]
    },
    "zh-CN": {
      "seo_title": "代理检测：网站看得出你在用代理吗？ · 你是谁",
      "seo_desc": "免费代理检测：对比浏览器测到的往返延迟和 Cloudflare 在自己那条连接上测到的延迟，再看 IP 是不是机房 IP、DNS 和 WebRTC 漏了什么。代理会多出一段网站量得出来的路程，换成家宽 IP 也藏不住。",
      "seo_kw": "代理检测, 代理 IP 检测, 是否使用代理, VPN 检测, 延迟检测代理, 机房 IP 检测, 家宽 IP 检测, 住宅 IP 检测, 节点检测",
      "h1": "代理检测",
      "og_sub": "网站看得出中间隔着代理吗？",
      "intro": "代理能藏住 IP，藏不住多出来的那段路。Cloudflare 在它自己那条连接上测往返时间，而那条连接的另一头其实是代理；你的浏览器测的则是全程。浏览器测出来的比 Cloudflare 长很多，就说明中间还隔着一段，不管 IP 看起来多干净。下面是这两个数字，以及网站常看的其他破绽。",
      "focus_h": "你的往返延迟",
      "docs": [
        [
          "延迟是怎么测的？",
          "页面向本站最近的 Cloudflare 机房要几次很小的响应，取最快的一次：从发出请求到收到第一个字节。Cloudflare 则报告它在给你服务的那条 TCP 连接上测到的往返时间。不走代理时，两个数差不多；走代理时，Cloudflare 只看到了代理到它的那一段。"
        ],
        [
          "家宽 IP 也会被识破吗？",
          "会。家宽 IP 能过「机房 IP」这一关，但多出来的延迟、在别国的 DNS 服务器、对不上的时区和 WebRTC 漏出来的地址，照样会把你暴露出来。"
        ],
        [
          "为什么有时测不出来？",
          "走 HTTP/3 时没有 TCP 连接，Cloudflare 就没有往返时间可报；有些网络也会拦下测量请求。"
        ]
      ]
    },
    "zh-TW": {
      "seo_title": "代理偵測：網站看得出你在用代理嗎？ · 你是誰",
      "seo_desc": "免費代理偵測：比對瀏覽器測到的往返延遲和 Cloudflare 在自己那條連線上測到的延遲，再看 IP 是不是機房 IP、DNS 和 WebRTC 漏了什麼。代理會多出一段網站量得出來的路程，換成住宅 IP 也藏不住。",
      "seo_kw": "代理偵測, 代理 IP 檢測, 是否使用代理, VPN 偵測, 延遲偵測代理, 機房 IP 檢測, 住宅 IP 檢測",
      "h1": "代理偵測",
      "og_sub": "網站看得出中間隔著代理嗎？",
      "intro": "代理藏得住 IP，藏不住多出來的那段路。Cloudflare 在它自己那條連線上測往返時間，而那條連線的另一頭其實是代理；你的瀏覽器測的則是全程。瀏覽器測到的比 Cloudflare 長很多，就代表中間還隔著一段，不管 IP 看起來多乾淨。下面是這兩個數字，以及網站常看的其他破綻。",
      "focus_h": "你的往返延遲",
      "docs": [
        [
          "延遲是怎麼測的？",
          "頁面向本站最近的 Cloudflare 機房要幾次很小的回應，取最快的一次：從送出請求到收到第一個位元組。Cloudflare 則回報它在服務你的那條 TCP 連線上測到的往返時間。沒走代理時，兩個數字差不多；走代理時，Cloudflare 只看到從代理到它的那一段。"
        ],
        [
          "住宅 IP 也會被識破嗎？",
          "會。住宅 IP 過得了「機房 IP」這一關，但多出來的延遲、在別國的 DNS 伺服器、對不上的時區和 WebRTC 漏出來的位址，照樣會讓你露餡。"
        ],
        [
          "為什麼有時候測不出來？",
          "走 HTTP/3 時沒有 TCP 連線，Cloudflare 就沒有往返時間可以回報；有些網路也會擋下測量請求。"
        ]
      ]
    },
    "ja": {
      "seo_title": "プロキシチェック：プロキシ経由だとサイトに見抜かれる？ · あなたは誰",
      "seo_desc": "無料のプロキシチェック：ブラウザが測った往復時間と、Cloudflare が自分の接続で見た往復時間を比べます。IP がデータセンターのものか、DNS や WebRTC のアドレスも確認。プロキシを通すと測れる区間が 1 つ増えるので、きれいな家庭用回線の IP でも隠しきれません。",
      "seo_kw": "プロキシ チェック, プロキシ 検出, プロキシ 判定, VPN 検出, 遅延 プロキシ 検出, データセンター IP",
      "h1": "プロキシチェック",
      "og_sub": "間にプロキシがあると見抜かれる？",
      "intro": "プロキシで IP は隠せても、増えた区間は隠せません。Cloudflare は自分の接続で往復時間を測りますが、その接続の相手はプロキシです。一方、ブラウザは全行程を測ります。ブラウザの値のほうがずっと大きければ、IP がどれほどきれいでも、間に何かがあります。2 つの値と、サイトが見るほかの手がかりを示します。",
      "focus_h": "往復時間",
      "docs": [
        [
          "遅延チェックはどういう仕組みですか？",
          "ページはこのサイトのいちばん近い Cloudflare のサーバーに小さな応答を何度か求め、リクエストを送ってから最初の 1 バイトが返るまでの最短時間を取ります。Cloudflare は、あなたとの TCP 接続で測った往復時間を返します。プロキシがなければ 2 つは近い値になり、プロキシ経由なら Cloudflare にはプロキシの区間しか見えません。"
        ],
        [
          "家庭用回線の IP でも見抜かれますか？",
          "はい。家庭用回線の IP ならデータセンターの判定は通りますが、増えた往復時間、別の国にある DNS サーバー、合わないタイムゾーン、WebRTC のアドレスから、やはり分かってしまいます。"
        ],
        [
          "「読み取れず」と出るのはなぜですか？",
          "HTTP/3 では TCP 接続を使わないので、Cloudflare には返す往復時間がありません。また、測定のリクエストを止めるネットワークもあります。"
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
      "seo_title": "Proxy-Test: Erkennen Websites, dass Sie hinter einem Proxy sind? · Wer sind Sie?",
      "seo_desc": "Kostenloser Proxy-Test: die Laufzeit, die Ihr Browser misst, gegen die, die Cloudflare auf seiner Verbindung sieht; ob Ihre IP aus einem Rechenzentrum stammt; Ihre DNS- und WebRTC-Adressen. Ein Proxy fügt eine messbare Strecke hinzu, auch bei sauberer Privat-IP.",
      "seo_kw": "Proxy Test, Proxy erkennen, bin ich hinter einem Proxy, VPN erkennen, Latenz Proxy Erkennung, Rechenzentrum IP",
      "h1": "Proxy-Test",
      "og_sub": "Erkennen Websites einen Proxy dazwischen?",
      "intro": "Ein Proxy verbirgt Ihre IP, aber nicht die zusätzliche Strecke. Cloudflare misst die Laufzeit auf der eigenen Verbindung, die am Proxy endet; Ihr Browser misst den ganzen Weg. Ist die des Browsers viel länger, sitzt etwas dazwischen – wie sauber die IP auch aussieht. Hier stehen beide Werte, mit den anderen Hinweisen, auf die Websites achten.",
      "focus_h": "Ihre Laufzeit",
      "docs": [
        [
          "Wie funktioniert die Latenzprüfung?",
          "Die Seite fragt den Edge dieser Website ein paar Mal nach einer winzigen Antwort und nimmt die schnellste, vom Absenden bis zum ersten Byte. Cloudflare meldet die Laufzeit auf der TCP-Verbindung, über die es Sie bedient hat. Ohne Proxy liegen beide nah beieinander; mit Proxy sieht Cloudflare nur dessen Teil."
        ],
        [
          "Fällt auch eine Privat-IP auf?",
          "Ja. Eine Privat-IP besteht die Rechenzentrumsprüfung, aber die zusätzliche Laufzeit, ein DNS-Resolver in einem anderen Land, eine unpassende Zeitzone und WebRTC-Adressen verraten sie trotzdem."
        ],
        [
          "Warum steht manchmal „nicht lesbar“?",
          "Über HTTP/3 gibt es keine TCP-Verbindung, also keine Laufzeit von Cloudflare, und manche Netze blockieren die Messanfragen."
        ]
      ]
    },
    "fr": {
      "seo_title": "Test de proxy : les sites voient-ils que vous passez par un proxy ? · Qui êtes-vous ?",
      "seo_desc": "Test de proxy gratuit : l’aller-retour mesuré par votre navigateur face à celui que voit Cloudflare sur sa connexion, si votre IP vient d’un centre de données, vos adresses DNS et WebRTC. Un proxy ajoute un tronçon mesurable, même avec une IP résidentielle propre.",
      "seo_kw": "test proxy, détection proxy, suis-je derrière un proxy, détection VPN, détection proxy par latence, IP centre de données",
      "h1": "Test de proxy",
      "og_sub": "Les sites voient-ils un proxy entre les deux ?",
      "intro": "Un proxy cache votre IP, pas le tronçon en plus. Cloudflare mesure l’aller-retour sur sa propre connexion, qui s’arrête au proxy ; votre navigateur mesure tout le trajet. Si celui du navigateur est bien plus long, quelque chose se trouve entre les deux, aussi propre que paraisse l’IP. Voici les deux valeurs, avec les autres indices qu’observent les sites.",
      "focus_h": "Votre aller-retour",
      "docs": [
        [
          "Comment fonctionne le contrôle de latence ?",
          "La page demande plusieurs fois une toute petite réponse au serveur de bordure de ce site et garde la plus rapide, de l’envoi au premier octet reçu. Cloudflare indique l’aller-retour mesuré sur la connexion TCP qui vous a servi. Sans proxy, les deux sont proches ; avec, Cloudflare ne voit que la partie du proxy."
        ],
        [
          "Une IP résidentielle peut-elle se faire prendre ?",
          "Oui. Elle passe le contrôle des centres de données, mais l’aller-retour en plus, un résolveur DNS dans un autre pays, un fuseau qui ne colle pas et les adresses WebRTC la trahissent quand même."
        ],
        [
          "Pourquoi est-ce parfois « illisible » ?",
          "En HTTP/3, il n’y a pas de connexion TCP, donc pas d’aller-retour côté Cloudflare, et certains réseaux bloquent les requêtes de mesure."
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
      "seo_title": "Проверка прокси: видят ли сайты, что вы за прокси? · Кто вы",
      "seo_desc": "Бесплатная проверка прокси: время отклика, которое измеряет браузер, против того, что Cloudflare видит на своём соединении; из дата-центра ли ваш IP; ваши адреса DNS и WebRTC. Прокси добавляет измеримый участок даже на чистом домашнем IP.",
      "seo_kw": "проверка прокси, определение прокси, сижу ли я через прокси, обнаружение VPN, определение прокси по задержке, IP дата-центра",
      "h1": "Проверка прокси",
      "og_sub": "Видят ли сайты прокси посередине?",
      "intro": "Прокси скрывает IP, но не лишний участок пути. Cloudflare измеряет время отклика на своём соединении, которое заканчивается на прокси; браузер меряет весь путь. Если у браузера оно намного больше, посередине что-то есть, каким бы чистым ни выглядел IP. Вот оба значения и другие признаки, на которые смотрят сайты.",
      "focus_h": "Ваше время отклика",
      "docs": [
        [
          "Как работает проверка задержки?",
          "Страница несколько раз запрашивает у пограничного узла этого сайта крошечный ответ и берёт самый быстрый — от отправки до первого байта. Cloudflare сообщает время отклика на TCP-соединении, по которому он вас обслужил. Без прокси значения близки; через прокси Cloudflare видит лишь его участок."
        ],
        [
          "Может ли попасться домашний IP?",
          "Да. Он пройдёт проверку дата-центра, но лишнее время отклика, DNS-резолвер в другой стране, неподходящий часовой пояс и адреса WebRTC всё равно его выдадут."
        ],
        [
          "Почему иногда «не удалось прочитать»?",
          "По HTTP/3 нет TCP-соединения, и Cloudflare не может сообщить время отклика; некоторые сети блокируют измерительные запросы."
        ]
      ]
    }
  },
  "language-check": {
    "en": {
      "seo_title": "Browser Language Check: what language do sites think you speak? · Who Are You",
      "seo_desc": "Free browser language check: the languages your browser sends in its Accept-Language header and shows to JavaScript, plus your locale, keyboard layout, voices and fonts, and whether they match the country of your IP.",
      "seo_kw": "browser language check, Accept-Language check, what is my browser language, navigator.languages, language IP mismatch, locale test",
      "h1": "Browser language check",
      "og_sub": "What language do sites think you speak?",
      "intro": "Every request your browser sends says which languages you read, and any page can read the same list in JavaScript, along with your locale, keyboard layout and the voices and fonts on your system. Sites compare all this with where your IP is. Here's what yours say.",
      "focus_h": "Your language vs your IP",
      "docs": [
        [
          "Where do sites get my language from?",
          "From the Accept-Language header, a line your browser sends with every request; from navigator.languages in JavaScript; and indirectly from your locale, keyboard layout, speech voices and the fonts your system has installed."
        ],
        [
          "How do I change it?",
          "In the browser's language settings, put the language you want first. Changing it in only one place, such as with an extension that edits navigator.languages, leaves the header as it was, and the two then disagree."
        ],
        [
          "Why is English only marked as \"info\"?",
          "English is used everywhere, so it says little about where you are. Other languages point to a country, and a mismatch with the IP is a hint."
        ]
      ]
    },
    "zh-CN": {
      "seo_title": "浏览器语言检测：网站以为你说什么语言？ · 你是谁",
      "seo_desc": "免费浏览器语言检测：看看浏览器在请求头（Accept-Language）和 JavaScript 里报出的语言，以及区域设置、键盘布局、朗读语音和字体，它们和 IP 所在国家对不对得上。",
      "seo_kw": "浏览器语言检测, Accept-Language 检测, 浏览器语言, navigator.languages, 语言与 IP 不一致, 区域设置检测",
      "h1": "浏览器语言检测",
      "og_sub": "网站以为你说什么语言？",
      "intro": "浏览器每次发请求，都会顺带说明你看得懂哪些语言；任何网页也能在 JavaScript 里读到同一份列表，再加上区域设置、键盘布局，以及系统装了哪些朗读语音和字体。网站会拿这些和 IP 所在地对照。下面是你的。",
      "focus_h": "你的语言和 IP",
      "docs": [
        [
          "网站从哪儿知道我的语言？",
          "每个请求都带着的 Accept-Language 请求头，JavaScript 里的 navigator.languages，还有区域设置、键盘布局、朗读语音和系统字体，都会直接或间接透露。"
        ],
        [
          "怎么改？",
          "在浏览器的语言设置里，把想要的语言排到第一位。只改一处（比如用插件改 navigator.languages），请求头还是原样，两边对不上反而更显眼。"
        ],
        [
          "为什么英语只算「提示」？",
          "英语全世界都在用，说明不了你在哪。其他语言会指向某个国家，和 IP 对不上时才算破绽。"
        ]
      ]
    },
    "zh-TW": {
      "seo_title": "瀏覽器語言檢測：網站以為你說什麼語言？ · 你是誰",
      "seo_desc": "免費瀏覽器語言檢測：看看瀏覽器在請求標頭（Accept-Language）和 JavaScript 裡回報的語言，以及地區設定、鍵盤配置、朗讀語音和字型，它們和 IP 所在國家對不對得上。",
      "seo_kw": "瀏覽器語言檢測, Accept-Language 檢測, 瀏覽器語言, navigator.languages, 語言與 IP 不一致, 地區設定檢測",
      "h1": "瀏覽器語言檢測",
      "og_sub": "網站以為你說什麼語言？",
      "intro": "瀏覽器每次發出請求，都會順便說明你看得懂哪些語言；任何網頁也能在 JavaScript 裡讀到同一份清單，再加上地區設定、鍵盤配置，以及系統裝了哪些朗讀語音和字型。網站會拿這些和 IP 所在地比對。下面是你的。",
      "focus_h": "你的語言和 IP",
      "docs": [
        [
          "網站從哪裡知道我的語言？",
          "每個請求都附帶的 Accept-Language 請求標頭，JavaScript 裡的 navigator.languages，還有地區設定、鍵盤配置、朗讀語音和系統字型，都會直接或間接透露。"
        ],
        [
          "要怎麼改？",
          "在瀏覽器的語言設定裡，把想要的語言排到第一位。只改一處（例如用擴充功能改 navigator.languages），請求標頭還是原樣，兩邊對不上反而更顯眼。"
        ],
        [
          "為什麼英文只算「提示」？",
          "英文全世界都在用，看不出你在哪裡。其他語言會指向某個國家，和 IP 對不上時才算破綻。"
        ]
      ]
    },
    "ja": {
      "seo_title": "ブラウザ言語チェック：サイトはあなたを何語の人だと思っている？ · あなたは誰",
      "seo_desc": "無料のブラウザ言語チェック：ブラウザが Accept-Language ヘッダーで送り、JavaScript にも見せている言語、ロケール、キーボード配列、読み上げ音声、フォントを調べ、IP の国と合っているかを確認します。",
      "seo_kw": "ブラウザ 言語 チェック, Accept-Language, navigator.languages, 言語 IP 不一致, ロケール",
      "h1": "ブラウザ言語チェック",
      "og_sub": "サイトはあなたを何語の人だと思っている？",
      "intro": "ブラウザが送るリクエストには、あなたが読める言語が毎回書かれています。どのページも JavaScript で同じ一覧を読めるうえ、ロケール、キーボード配列、システムの読み上げ音声やフォントも分かります。サイトはそれを IP の場所と照らし合わせます。あなたの場合はこうです。",
      "focus_h": "言語と IP",
      "docs": [
        [
          "サイトはどこから言語を知るのですか？",
          "リクエストのたびに送られる Accept-Language ヘッダー、JavaScript の navigator.languages からです。さらにロケール、キーボード配列、読み上げ音声、インストール済みのフォントからも間接的に分かります。"
        ],
        [
          "どう変えればいいですか？",
          "ブラウザの言語設定で、使いたい言語をいちばん上にします。拡張機能で navigator.languages だけを変えるなど 1 か所だけ変えると、ヘッダーは元のままなので、2 つが食い違ってしまいます。"
        ],
        [
          "英語だと「参考」扱いになるのはなぜですか？",
          "英語は世界中で使われているので、居場所の手がかりにはほとんどなりません。ほかの言語は特定の国を指すので、IP と合わなければヒントになります。"
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
      "seo_title": "Browsersprache prüfen: Welche Sprache sprechen Sie laut Websites? · Wer sind Sie?",
      "seo_desc": "Kostenloser Test der Browsersprache: die Sprachen im Accept-Language-Header und in JavaScript, Gebietsschema, Tastaturlayout, Stimmen und Schriften, und ob sie zum Land Ihrer IP passen.",
      "seo_kw": "Browsersprache prüfen, Accept-Language Test, navigator.languages, Sprache IP Abweichung, Gebietsschema",
      "h1": "Browsersprache prüfen",
      "og_sub": "Welche Sprache sprechen Sie laut Websites?",
      "intro": "Jede Anfrage Ihres Browsers nennt die Sprachen, die Sie lesen, und jede Seite kann dieselbe Liste in JavaScript lesen – dazu Gebietsschema, Tastaturlayout und die Stimmen und Schriften Ihres Systems. Websites vergleichen das mit dem Standort Ihrer IP. Hier ist Ihres.",
      "focus_h": "Ihre Sprache und Ihre IP",
      "docs": [
        [
          "Woher kennen Websites meine Sprache?",
          "Aus dem Accept-Language-Header jeder Anfrage, aus navigator.languages in JavaScript und indirekt aus Gebietsschema, Tastaturlayout, Sprachausgabe-Stimmen und installierten Schriften."
        ],
        [
          "Wie ändere ich sie?",
          "In den Spracheinstellungen des Browsers die gewünschte Sprache nach oben setzen. Ändert man nur eine Stelle, etwa per Erweiterung navigator.languages, bleibt der Header wie er war – und die Abweichung fällt erst recht auf."
        ],
        [
          "Warum ist Englisch nur „Info“?",
          "Englisch wird überall genutzt und sagt wenig über Ihren Standort. Andere Sprachen deuten auf ein Land; passt es nicht zur IP, ist das ein Hinweis."
        ]
      ]
    },
    "fr": {
      "seo_title": "Test de langue du navigateur : quelle langue les sites vous prêtent-ils ? · Qui êtes-vous ?",
      "seo_desc": "Test gratuit de langue du navigateur : les langues de l’en-tête Accept-Language et de JavaScript, les paramètres régionaux, la disposition du clavier, les voix et les polices, et leur accord avec le pays de votre IP.",
      "seo_kw": "test langue navigateur, Accept-Language, navigator.languages, langue IP différente, paramètres régionaux",
      "h1": "Test de langue du navigateur",
      "og_sub": "Quelle langue les sites vous prêtent-ils ?",
      "intro": "Chaque requête de votre navigateur indique les langues que vous lisez, et toute page peut lire la même liste en JavaScript, avec vos paramètres régionaux, votre clavier et les voix et polices de votre système. Les sites les comparent à l’emplacement de votre IP. Voici les vôtres.",
      "focus_h": "Votre langue face à votre IP",
      "docs": [
        [
          "D’où les sites tiennent-ils ma langue ?",
          "De l’en-tête Accept-Language de chaque requête, de navigator.languages en JavaScript, et indirectement des paramètres régionaux, de la disposition du clavier, des voix de synthèse et des polices installées."
        ],
        [
          "Comment la changer ?",
          "Dans les réglages de langue du navigateur, placez la langue voulue en premier. Ne changer qu’un endroit, comme navigator.languages par une extension, laisse l’en-tête intact, et l’écart se voit d’autant plus."
        ],
        [
          "Pourquoi l’anglais n’est-il qu’une « info » ?",
          "L’anglais est utilisé partout et dit peu de votre position. Les autres langues désignent un pays ; un écart avec l’IP est un indice."
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
      "seo_title": "Проверка языка браузера: на каком языке вы говорите для сайтов? · Кто вы",
      "seo_desc": "Бесплатная проверка языка браузера: языки в заголовке Accept-Language и в JavaScript, локаль, раскладка, голоса и шрифты, и совпадают ли они со страной вашего IP.",
      "seo_kw": "проверка языка браузера, Accept-Language, navigator.languages, язык и IP не совпадают, локаль",
      "h1": "Проверка языка браузера",
      "og_sub": "На каком языке вы говорите для сайтов?",
      "intro": "Каждый запрос браузера сообщает, на каких языках вы читаете, а любая страница видит тот же список в JavaScript, вместе с локалью, раскладкой и голосами и шрифтами системы. Сайты сравнивают это с местом вашего IP. Вот ваши.",
      "focus_h": "Ваш язык и IP",
      "docs": [
        [
          "Откуда сайты знают мой язык?",
          "Из заголовка Accept-Language каждого запроса, из navigator.languages в JavaScript и косвенно — из локали, раскладки, голосов синтеза речи и установленных шрифтов."
        ],
        [
          "Как его изменить?",
          "В языковых настройках браузера поставьте нужный язык первым. Если менять только одно место, например navigator.languages расширением, заголовок останется прежним, и расхождение станет заметнее."
        ],
        [
          "Почему английский — лишь «информация»?",
          "Английский используют везде, о месте он почти ничего не говорит. Другие языки указывают на страну, и расхождение с IP — подсказка."
        ]
      ]
    }
  },
  "canvas-fingerprint": {
    "en": {
      "seo_title": "Canvas Fingerprint Test: your canvas, WebGL and audio fingerprints · Who Are You",
      "seo_desc": "Free canvas fingerprint test: the codes that come from how your system draws a canvas, renders WebGL and processes audio, whether your browser adds noise to them, and the combined fingerprint ID sites use to recognize you without cookies.",
      "seo_kw": "canvas fingerprint test, canvas fingerprinting, WebGL fingerprint, audio fingerprint, canvas noise, anti canvas fingerprint",
      "h1": "Canvas fingerprint test",
      "og_sub": "The way your computer draws gives it away",
      "intro": "Ask two computers to draw the same text and shapes, and the pixels come out slightly different: the graphics card, the driver, the fonts and the smoothing all leave a mark. Sites turn that drawing into a fingerprint. Here are yours, and whether your browser scrambles them.",
      "focus_h": "Your canvas fingerprint",
      "docs": [
        [
          "What is a canvas fingerprint?",
          "A page draws text and shapes on an invisible canvas, reads the pixels back and turns them into a short fixed code. The code is the same every time on your machine and different on other machines, so it works like an ID."
        ],
        [
          "How do I stop it?",
          "Use a browser that adds random noise to canvas, WebGL and audio, like Brave (on by default) or Firefox with resistFingerprinting. The \"Fingerprint protection\" row shows whether two drawings came out different."
        ],
        [
          "Do privacy extensions help?",
          "Some do, by wrapping the drawing functions. But that can itself be noticed: the browser environment check flags replaced functions."
        ]
      ]
    },
    "zh-CN": {
      "seo_title": "Canvas 指纹检测：查看你的 Canvas、WebGL 和音频指纹 · 你是谁",
      "seo_desc": "免费 Canvas 指纹检测：看看你的系统画 Canvas、渲染 WebGL、处理音频后算出的指纹，浏览器有没有给它们加干扰，以及网站不用 Cookie 就能认出你的综合指纹 ID。",
      "seo_kw": "Canvas 指纹检测, Canvas 指纹, WebGL 指纹, 音频指纹, Canvas 防指纹, Canvas 噪声, 指纹识别",
      "h1": "Canvas 指纹检测",
      "og_sub": "电脑怎么画图，就暴露了它是哪一台",
      "intro": "让两台电脑画同样的文字和图形，像素会有细微差别：显卡、驱动、字体、抗锯齿都会留下痕迹。网站把这张图算成一串固定的编码，就是指纹。下面是你的，以及浏览器有没有把它们打乱。",
      "focus_h": "你的 Canvas 指纹",
      "docs": [
        [
          "Canvas 指纹是什么？",
          "网页在一块你看不见的画布上画文字和图形，再把像素读回来，算成一串编码。同一台机器每次都一样，不同机器各不相同，所以能拿来当 ID。"
        ],
        [
          "怎么防？",
          "用会给 Canvas、WebGL 和音频加随机干扰的浏览器，比如默认就开着的 Brave，或者打开了 resistFingerprinting 的 Firefox。「防指纹」那一行会告诉你，同一张图画两次，结果是不是不一样。"
        ],
        [
          "隐私插件有用吗？",
          "有些有用，它们给画图函数包了一层。但这一层本身也可能被发现：浏览器环境检测会把被替换的函数标出来。"
        ]
      ]
    },
    "zh-TW": {
      "seo_title": "Canvas 指紋檢測：查看你的 Canvas、WebGL 和音訊指紋 · 你是誰",
      "seo_desc": "免費 Canvas 指紋檢測：看看你的系統畫 Canvas、繪製 WebGL、處理音訊後算出的指紋，瀏覽器有沒有替它們加入干擾，以及網站不用 Cookie 就能認出你的綜合指紋 ID。",
      "seo_kw": "Canvas 指紋檢測, Canvas 指紋, WebGL 指紋, 音訊指紋, Canvas 防指紋, Canvas 雜訊, 指紋辨識",
      "h1": "Canvas 指紋檢測",
      "og_sub": "電腦怎麼畫圖，就洩漏了它是哪一台",
      "intro": "讓兩台電腦畫同樣的文字和圖形，像素會有細微差異：顯示卡、驅動程式、字型、反鋸齒都會留下痕跡。網站把這張圖算成一串固定的編碼，就是指紋。下面是你的，以及瀏覽器有沒有把它們打亂。",
      "focus_h": "你的 Canvas 指紋",
      "docs": [
        [
          "Canvas 指紋是什麼？",
          "網頁在一塊你看不見的畫布上畫文字和圖形，再把像素讀回來，算成一串編碼。同一台機器每次都一樣，不同機器各不相同，所以可以拿來當 ID。"
        ],
        [
          "要怎麼防？",
          "改用會替 Canvas、WebGL 和音訊加入隨機干擾的瀏覽器，例如預設就開著的 Brave，或開啟了 resistFingerprinting 的 Firefox。「防指紋」那一列會告訴你，同一張圖畫兩次，結果是不是不一樣。"
        ],
        [
          "隱私擴充功能有用嗎？",
          "有些有用，它們替繪圖函式包了一層。但這一層本身也可能被發現：瀏覽器環境檢測會把被替換的函式標出來。"
        ]
      ]
    },
    "ja": {
      "seo_title": "Canvas フィンガープリント検査：Canvas・WebGL・音声のフィンガープリント · あなたは誰",
      "seo_desc": "無料の Canvas フィンガープリント検査：Canvas の描画、WebGL、音声処理から得られる値、ブラウザがそれにノイズを加えているか、Cookie なしであなたを見分けるのに使われる総合 ID を表示します。",
      "seo_kw": "Canvas フィンガープリント, Canvas 指紋 検査, WebGL フィンガープリント, 音声 指紋, Canvas ノイズ",
      "h1": "Canvas フィンガープリント検査",
      "og_sub": "描き方で、あなたのパソコンが分かる",
      "intro": "2 台のパソコンに同じ文字と図形を描かせると、ピクセルがわずかに違ってきます。GPU、ドライバー、フォント、文字のなめらか処理がそれぞれ跡を残すからです。サイトはその絵をフィンガープリントに変えます。あなたのフィンガープリントと、ブラウザがそれをかき混ぜているかを示します。",
      "focus_h": "Canvas のフィンガープリント",
      "docs": [
        [
          "Canvas フィンガープリントとは何ですか？",
          "ページが見えないキャンバスに文字と図形を描き、そのピクセルを読み取って、短い固定の値に変えたものです。同じパソコンなら毎回同じ、違うパソコンなら違う値になるので、ID のように使えます。"
        ],
        [
          "防ぐにはどうすればいいですか？",
          "Canvas・WebGL・音声にランダムなノイズを加えるブラウザを使います。標準で有効な Brave や、resistFingerprinting を有効にした Firefox です。2 回の描画結果が違ったかは「フィンガープリント対策」の行で分かります。"
        ],
        [
          "プライバシー系の拡張機能は効きますか？",
          "描画の関数を包むことで効くものもあります。ただ、それ自体が気づかれることもあり、ブラウザ環境チェックでは差し替えられた関数として表示されます。"
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
      "seo_title": "Canvas-Fingerabdruck-Test: Ihre Canvas-, WebGL- und Audio-Fingerabdrücke · Wer sind Sie?",
      "seo_desc": "Kostenloser Canvas-Fingerabdruck-Test: die Hashes dessen, wie Ihr System ein Canvas zeichnet, WebGL rendert und Audio verarbeitet, ob Ihr Browser Rauschen hinzufügt, und die Gesamt-ID, an der Websites Sie ohne Cookies erkennen.",
      "seo_kw": "Canvas Fingerprint Test, Canvas Fingerprinting, WebGL Fingerabdruck, Audio Fingerabdruck, Canvas Rauschen",
      "h1": "Canvas-Fingerabdruck-Test",
      "og_sub": "Wie Ihr Rechner zeichnet, verrät ihn",
      "intro": "Lässt man zwei Rechner denselben Text und dieselben Formen zeichnen, unterscheiden sich die Pixel ein wenig: Grafikkarte, Treiber, Schriften und Kantenglättung hinterlassen Spuren. Websites machen aus dieser Zeichnung einen Hash, den Fingerabdruck. Hier sind Ihre – und ob Ihr Browser sie verwürfelt.",
      "focus_h": "Ihr Canvas-Fingerabdruck",
      "docs": [
        [
          "Was ist ein Canvas-Fingerabdruck?",
          "Eine Seite zeichnet Text und Formen auf ein unsichtbares Canvas, liest die Pixel zurück und bildet einen Hash. Auf Ihrem Rechner kommt jedes Mal dasselbe heraus, auf anderen etwas anderes – wie eine ID."
        ],
        [
          "Wie verhindere ich das?",
          "Mit einem Browser, der Canvas, WebGL und Audio zufällig verrauscht: Brave von Haus aus oder Firefox mit resistFingerprinting. Die Zeile „Fingerabdruck-Schutz“ zeigt, ob zwei Zeichnungen verschieden ausfielen."
        ],
        [
          "Helfen Datenschutz-Erweiterungen?",
          "Manche, indem sie die Zeichenfunktionen umhüllen. Das kann selbst auffallen: Der Browser-Umgebungstest markiert ersetzte Funktionen."
        ]
      ]
    },
    "fr": {
      "seo_title": "Test d’empreinte Canvas : vos empreintes Canvas, WebGL et audio · Qui êtes-vous ?",
      "seo_desc": "Test gratuit d’empreinte Canvas : les hachages de la façon dont votre système dessine un canvas, rend du WebGL et traite l’audio, si votre navigateur y ajoute du bruit, et l’identifiant combiné qui permet aux sites de vous reconnaître sans cookies.",
      "seo_kw": "test empreinte canvas, canvas fingerprinting, empreinte WebGL, empreinte audio, bruit canvas",
      "h1": "Test d’empreinte Canvas",
      "og_sub": "La façon dont votre ordinateur dessine le trahit",
      "intro": "Demandez à deux ordinateurs de dessiner le même texte et les mêmes formes : les pixels diffèrent un peu. Carte graphique, pilote, polices et anticrénelage laissent leur marque. Les sites transforment ce dessin en hachage : une empreinte. Voici les vôtres, et si votre navigateur les brouille.",
      "focus_h": "Votre empreinte Canvas",
      "docs": [
        [
          "Qu’est-ce qu’une empreinte Canvas ?",
          "Une page dessine du texte et des formes sur un canvas invisible, relit les pixels et en calcule un hachage. Le résultat est toujours le même sur votre machine et diffère d’une machine à l’autre : il sert d’identifiant."
        ],
        [
          "Comment l’empêcher ?",
          "Avec un navigateur qui ajoute un bruit aléatoire au Canvas, au WebGL et à l’audio : Brave par défaut, ou Firefox avec resistFingerprinting. La ligne « protection d’empreinte » montre si deux dessins ont différé."
        ],
        [
          "Les extensions de confidentialité aident-elles ?",
          "Certaines, en enveloppant les fonctions de dessin. Cela peut se remarquer : le test d’environnement du navigateur signale les fonctions remplacées."
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
      "seo_title": "Проверка отпечатка Canvas: ваши отпечатки Canvas, WebGL и аудио · Кто вы",
      "seo_desc": "Бесплатная проверка отпечатка Canvas: хэши того, как ваша система рисует canvas, рендерит WebGL и обрабатывает звук, добавляет ли браузер шум, и общий ID, по которому сайты узнают вас без cookie.",
      "seo_kw": "проверка отпечатка canvas, canvas fingerprinting, отпечаток WebGL, аудио отпечаток, шум canvas",
      "h1": "Проверка отпечатка Canvas",
      "og_sub": "То, как компьютер рисует, его выдаёт",
      "intro": "Попросите два компьютера нарисовать одинаковый текст и фигуры — пиксели будут чуть разными: видеокарта, драйвер, шрифты и сглаживание оставляют след. Сайты превращают этот рисунок в хэш — отпечаток. Вот ваши и то, перемешивает ли их браузер.",
      "focus_h": "Ваш отпечаток Canvas",
      "docs": [
        [
          "Что такое отпечаток Canvas?",
          "Страница рисует текст и фигуры на невидимом холсте, считывает пиксели и считает хэш. На вашей машине он всегда одинаков, на другой — иной, поэтому работает как ID."
        ],
        [
          "Как от него защититься?",
          "Браузером, который добавляет случайный шум в Canvas, WebGL и звук: Brave по умолчанию или Firefox с resistFingerprinting. Строка «защита отпечатка» показывает, различались ли два рисунка."
        ],
        [
          "Помогают ли расширения приватности?",
          "Некоторые — оборачивая функции рисования. Но это само может быть замечено: проверка окружения браузера отмечает подменённые функции."
        ]
      ]
    }
  },
  "user-agent": {
    "en": {
      "seo_title": "User Agent Check: what browser and system do sites think you use? · Who Are You",
      "seo_desc": "Free user agent check: your User-Agent string and client hints (Sec-CH-UA, platform), the system and browser they claim, and whether the JavaScript engine, graphics card and hints agree with them.",
      "seo_kw": "user agent check, what is my user agent, user agent string, client hints, Sec-CH-UA, user agent spoofing check",
      "h1": "User agent check",
      "og_sub": "What browser and system do sites think you use?",
      "intro": "Every request names your browser and system: once in the User-Agent string and, in Chromium browsers, again in client hints. Pages can cross-check that against the JavaScript engine and the graphics card. Here's what yours claims, and whether the rest agrees.",
      "focus_h": "Your user agent vs your system",
      "docs": [
        [
          "What is a user agent?",
          "A line of text your browser sends with every request, naming the browser, its version and your system. Chromium browsers also send client hints: a newer, more structured version of the same information."
        ],
        [
          "Why does it say Windows 10 when I'm on Windows 11?",
          "For privacy, browsers froze the user agent at Windows 10 (and macOS at 10.15). The real version comes from client hints, and that's what this page shows."
        ],
        [
          "Can I fake it?",
          "You can change the string, but the JavaScript engine, the graphics card and client hints usually tell a different story. The checks on this page show where."
        ]
      ]
    },
    "zh-CN": {
      "seo_title": "UA 检测：网站以为你用什么浏览器和系统？ · 你是谁",
      "seo_desc": "免费 User-Agent 检测：查看你的 UA 字符串和 Client Hints（Sec-CH-UA、平台），它们声称的系统和浏览器，以及 JS 引擎、显卡跟它们对不对得上。",
      "seo_kw": "UA 检测, User-Agent 检测, 我的 UA, UA 查询, Client Hints, Sec-CH-UA, UA 伪装检测, 浏览器 UA",
      "h1": "UA 检测",
      "og_sub": "网站以为你用什么浏览器和系统？",
      "intro": "浏览器每次发请求，都会报上自己是什么浏览器、跑在什么系统上：一次写在 User-Agent（UA）字符串里，Chromium 系的浏览器还会在 Client Hints 里再报一次。网页可以拿它们和 JS 引擎、显卡交叉核对。下面是你的 UA 怎么说，以及其他信息认不认。",
      "focus_h": "你的 UA 和真实系统",
      "docs": [
        [
          "UA 是什么？",
          "浏览器每个请求都会带上的一行文字，写着浏览器、版本和系统。Chromium 系的浏览器还会发 Client Hints，内容差不多，只是换成了更新、更规整的格式。"
        ],
        [
          "为什么 Windows 11 显示成 Windows 10？",
          "为了保护隐私，浏览器把 UA 里的系统版本固定成 Windows 10（macOS 固定成 10.15）。真实版本要看 Client Hints，本页显示的就是它。"
        ],
        [
          "UA 能伪装吗？",
          "字符串可以改，但 JS 引擎、显卡和 Client Hints 往往会说出另一个答案；本页的检测会指出哪里对不上。"
        ]
      ]
    },
    "zh-TW": {
      "seo_title": "UA 檢測：網站以為你用什麼瀏覽器和系統？ · 你是誰",
      "seo_desc": "免費 User-Agent 檢測：查看你的 UA 字串和 Client Hints（Sec-CH-UA、平台），它們聲稱的系統和瀏覽器，以及 JS 引擎、顯示卡跟它們對不對得上。",
      "seo_kw": "UA 檢測, User-Agent 檢測, 我的 UA, UA 查詢, Client Hints, Sec-CH-UA, UA 偽裝檢測, 瀏覽器 UA",
      "h1": "UA 檢測",
      "og_sub": "網站以為你用什麼瀏覽器和系統？",
      "intro": "瀏覽器每次發出請求，都會報上自己是什麼瀏覽器、跑在什麼系統上：一次寫在 User-Agent（UA）字串裡，Chromium 系的瀏覽器還會在 Client Hints 裡再報一次。網頁可以拿它們和 JS 引擎、顯示卡交叉比對。下面是你的 UA 怎麼說，以及其他資訊認不認。",
      "focus_h": "你的 UA 和真實系統",
      "docs": [
        [
          "UA 是什麼？",
          "瀏覽器每個請求都會附上的一行文字，寫著瀏覽器、版本和系統。Chromium 系的瀏覽器還會送出 Client Hints，內容差不多，只是改成比較新、比較有條理的格式。"
        ],
        [
          "為什麼 Windows 11 顯示成 Windows 10？",
          "為了保護隱私，瀏覽器把 UA 裡的系統版本固定成 Windows 10（macOS 固定成 10.15）。真實版本要看 Client Hints，本頁顯示的就是它。"
        ],
        [
          "UA 能偽裝嗎？",
          "字串可以改，但 JS 引擎、顯示卡和 Client Hints 往往會說出另一個答案；本頁的檢測會指出哪裡對不上。"
        ]
      ]
    },
    "ja": {
      "seo_title": "ユーザーエージェント確認：サイトから見たブラウザと OS · あなたは誰",
      "seo_desc": "無料のユーザーエージェント確認：User-Agent 文字列とクライアントヒント（Sec-CH-UA、プラットフォーム）、そこで名乗っている OS とブラウザを表示し、JavaScript エンジン・GPU・ヒントと一致しているかを調べます。",
      "seo_kw": "ユーザーエージェント 確認, UA 確認, User-Agent, クライアントヒント, Sec-CH-UA, UA 偽装",
      "h1": "ユーザーエージェント確認",
      "og_sub": "サイトから見たあなたのブラウザと OS",
      "intro": "リクエストのたびに、ブラウザと OS が名乗られています。User-Agent 文字列で一度、Chromium 系のブラウザではクライアントヒントでもう一度。ページはそれを JavaScript エンジンや GPU と突き合わせることができます。あなたの UA が何と名乗っていて、ほかの手がかりと合っているかを示します。",
      "focus_h": "UA と実際のシステム",
      "docs": [
        [
          "ユーザーエージェントとは何ですか？",
          "ブラウザがリクエストのたびに送る 1 行のテキストで、ブラウザの名前とバージョン、OS が書かれています。Chromium 系のブラウザは、同じ情報を整理した新しい形式のクライアントヒントも送ります。"
        ],
        [
          "Windows 11 なのに Windows 10 と出るのはなぜですか？",
          "プライバシーのため、ブラウザは UA を Windows 10（macOS は 10.15）のまま固定しているからです。実際のバージョンはクライアントヒントから分かり、このページはそれを表示しています。"
        ],
        [
          "偽装できますか？",
          "文字列は変えられますが、JavaScript エンジンや GPU、クライアントヒントが別のことを語っている場合がほとんどです。どこが合わないかは、このページの検査で分かります。"
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
      "seo_title": "User-Agent prüfen: Welchen Browser und welches System sehen Websites? · Wer sind Sie?",
      "seo_desc": "Kostenloser User-Agent-Test: Ihr User-Agent-String, die Client Hints (Sec-CH-UA, Plattform), das System und der Browser, die sie angeben, und ob JS-Engine, Grafikkarte und Hints dazu passen.",
      "seo_kw": "User-Agent prüfen, mein User-Agent, User-Agent String, Client Hints, Sec-CH-UA, User-Agent Spoofing",
      "h1": "User-Agent prüfen",
      "og_sub": "Welchen Browser und welches System sehen Websites?",
      "intro": "Jede Anfrage nennt Ihren Browser und Ihr System, einmal im User-Agent-String und in Chromium-Browsern noch einmal in den Client Hints. Seiten können das mit JS-Engine und Grafikkarte abgleichen. Hier steht, was Ihrer behauptet – und ob der Rest zustimmt.",
      "focus_h": "Ihr User-Agent und Ihr System",
      "docs": [
        [
          "Was ist ein User-Agent?",
          "Eine Textzeile, die Ihr Browser mit jeder Anfrage sendet: Browser, Version und System. Chromium-Browser senden zusätzlich Client Hints, eine neuere, strukturierte Fassung derselben Angaben."
        ],
        [
          "Warum steht bei Windows 11 Windows 10?",
          "Browser haben den User-Agent aus Datenschutzgründen bei Windows 10 (macOS bei 10.15) eingefroren. Die echte Version kommt aus den Client Hints, und die zeigt diese Seite."
        ],
        [
          "Kann ich ihn fälschen?",
          "Den String schon, aber JS-Engine, Grafikkarte und Client Hints erzählen oft etwas anderes; die Prüfungen auf dieser Seite zeigen, wo."
        ]
      ]
    },
    "fr": {
      "seo_title": "Vérification du user agent : quel navigateur et quel système voient les sites ? · Qui êtes-vous ?",
      "seo_desc": "Vérification gratuite du user agent : votre chaîne User-Agent, les client hints (Sec-CH-UA, plateforme), le système et le navigateur qu’ils annoncent, et l’accord du moteur JS, de la carte graphique et des hints.",
      "seo_kw": "vérifier user agent, mon user agent, chaîne user agent, client hints, Sec-CH-UA, usurpation user agent",
      "h1": "Vérification du user agent",
      "og_sub": "Quel navigateur et quel système voient les sites ?",
      "intro": "Chaque requête nomme votre navigateur et votre système, une fois dans la chaîne User-Agent et, dans les navigateurs Chromium, une seconde fois dans les client hints. Les pages peuvent recouper avec le moteur JS et la carte graphique. Voici ce que dit le vôtre, et si le reste confirme.",
      "focus_h": "Votre user agent face à votre système",
      "docs": [
        [
          "Qu’est-ce qu’un user agent ?",
          "Une ligne de texte envoyée avec chaque requête : navigateur, version et système. Les navigateurs Chromium envoient aussi des client hints, une version plus récente et structurée des mêmes informations."
        ],
        [
          "Pourquoi Windows 10 s’affiche-t-il sous Windows 11 ?",
          "Par souci de confidentialité, les navigateurs ont figé le user agent à Windows 10 (et macOS à 10.15). La vraie version vient des client hints, que cette page affiche."
        ],
        [
          "Puis-je le falsifier ?",
          "La chaîne, oui, mais le moteur JS, la carte graphique et les client hints racontent souvent autre chose ; les contrôles de cette page montrent où."
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
      "seo_title": "Проверка User-Agent: какой браузер и систему видят сайты? · Кто вы",
      "seo_desc": "Бесплатная проверка User-Agent: ваша строка User-Agent, клиентские подсказки (Sec-CH-UA, платформа), заявленные система и браузер и совпадают ли с ними движок JS, видеокарта и подсказки.",
      "seo_kw": "проверка user agent, мой user agent, строка user agent, client hints, Sec-CH-UA, подмена user agent",
      "h1": "Проверка User-Agent",
      "og_sub": "Какой браузер и систему видят сайты?",
      "intro": "Каждый запрос называет ваш браузер и систему: один раз в строке User-Agent и, в браузерах на Chromium, ещё раз в клиентских подсказках. Страницы могут сверить это с движком JS и видеокартой. Вот что заявляет ваш, и согласно ли с ним остальное.",
      "focus_h": "Ваш User-Agent и система",
      "docs": [
        [
          "Что такое User-Agent?",
          "Строка текста, которую браузер отправляет с каждым запросом: браузер, версия и система. Браузеры на Chromium отправляют также клиентские подсказки — более новую структурированную версию тех же данных."
        ],
        [
          "Почему на Windows 11 написано Windows 10?",
          "Ради приватности браузеры заморозили User-Agent на Windows 10 (macOS — на 10.15). Настоящая версия берётся из клиентских подсказок, их и показывает эта страница."
        ],
        [
          "Можно ли подделать?",
          "Строку можно, но движок JS, видеокарта и подсказки часто говорят другое; проверки на этой странице покажут где."
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
      "focus_h": "Extensions that change the page",
      "docs": [
        [
          "How can a site see my extensions?",
          "It can't list them, but it can see what they leave behind: objects like window.ethereum, attributes on the page, elements they insert, scripts they add. Extensions that leave nothing behind stay invisible."
        ],
        [
          "Why does it matter?",
          "Extensions narrow you down. A crypto wallet, developer tools or a particular translator says something about who you are, and makes your fingerprint more unique."
        ],
        [
          "What does the tampering check have to do with it?",
          "Extensions that change your user agent, language or time zone, or wrap the drawing functions used for fingerprints, rewrite what sites read. That's what the check at the top looks for."
        ]
      ]
    },
    "zh-CN": {
      "seo_title": "浏览器扩展检测：网站能看到你装了哪些插件吗？ · 你是谁",
      "seo_desc": "免费浏览器扩展检测：看看哪些插件留下了任何网站都读得到的痕迹（加密钱包、开发者工具、Grammarly、Dark Reader、翻译插件、杀毒软件的网页防护），有没有装广告拦截插件，以及有没有东西改写了网站读到的信息。",
      "seo_kw": "浏览器扩展检测, 插件检测, 网站能看到我的插件吗, 扩展指纹, 广告拦截检测, 钱包插件检测, 沉浸式翻译检测",
      "h1": "浏览器扩展检测",
      "og_sub": "网站能看到你装了哪些插件？",
      "intro": "很多插件得改动网页才能干活：钱包往页面里塞对象，深色模式加属性，翻译插件插入元素，杀毒软件的网页防护加进自己的脚本。这些痕迹任何网站都读得到，而且很能说明你是什么人。下面是本页找到的。",
      "focus_h": "改写网页的插件",
      "docs": [
        [
          "网站怎么看到我的插件？",
          "网站没法直接列出你装了什么，但能看到插件留下的东西：window.ethereum 这样的对象、页面上的属性、插进来的元素、加进来的脚本。有些插件什么都不留，那就看不到。"
        ],
        [
          "被看到又怎样？",
          "插件会帮网站缩小范围：装了加密钱包、开发者工具或某个翻译插件，都在透露你是什么人，也让你的指纹更特别。"
        ],
        [
          "和「环境被篡改」有什么关系？",
          "改 UA、语言、时区，或者给算指纹用的画图函数包一层的插件，会改写网站读到的信息。最上面那项检测查的就是这个。"
        ]
      ]
    },
    "zh-TW": {
      "seo_title": "瀏覽器擴充功能檢測：網站看得到你裝了哪些擴充功能嗎？ · 你是誰",
      "seo_desc": "免費瀏覽器擴充功能檢測：看看哪些擴充功能留下了任何網站都讀得到的痕跡（加密錢包、開發人員工具、Grammarly、Dark Reader、翻譯工具、防毒軟體的網頁防護），有沒有裝廣告封鎖擴充功能，以及有沒有東西改寫了網站讀到的資訊。",
      "seo_kw": "瀏覽器擴充功能檢測, 擴充功能檢測, 外掛檢測, 網站看得到我的擴充功能嗎, 擴充功能指紋, 廣告封鎖檢測, 錢包擴充功能檢測",
      "h1": "瀏覽器擴充功能檢測",
      "og_sub": "網站看得到你裝了哪些擴充功能？",
      "intro": "很多擴充功能要改動網頁才能運作：錢包在頁面裡加入物件，深色模式加上屬性，翻譯工具插入元素，防毒軟體的網頁防護加進自己的腳本。這些痕跡任何網站都讀得到，而且很能說明你是什麼樣的人。下面是本頁找到的。",
      "focus_h": "改寫網頁的擴充功能",
      "docs": [
        [
          "網站怎麼看到我的擴充功能？",
          "網站沒辦法直接列出你裝了什麼，但看得到擴充功能留下的東西：window.ethereum 這樣的物件、頁面上的屬性、插進來的元素、加進來的腳本。有些擴充功能什麼都不留，那就看不到。"
        ],
        [
          "被看到又怎樣？",
          "擴充功能會幫網站縮小範圍：裝了加密錢包、開發人員工具或某個翻譯工具，都在透露你是什麼樣的人，也讓你的指紋更好認。"
        ],
        [
          "和「環境被竄改」有什麼關係？",
          "改 UA、語言、時區，或替算指紋用的繪圖函式包一層的擴充功能，會改寫網站讀到的資訊。最上面那項檢測查的就是這個。"
        ]
      ]
    },
    "ja": {
      "seo_title": "ブラウザ拡張機能チェック：サイトから見える拡張機能は？ · あなたは誰",
      "seo_desc": "無料のブラウザ拡張機能チェック：どのサイトでも読める跡を残す拡張機能（暗号資産ウォレット、開発者ツール、Grammarly、Dark Reader、翻訳、ウイルス対策ソフトのウェブ保護）、広告ブロッカー、サイトが読む値の書き換えを調べます。",
      "seo_kw": "ブラウザ 拡張機能 チェック, 拡張機能 検出, サイト 拡張機能 見える, 拡張機能 フィンガープリント, 広告ブロッカー 検出",
      "h1": "ブラウザ拡張機能チェック",
      "og_sub": "サイトから見える拡張機能は？",
      "intro": "多くの拡張機能は、働くためにページに手を加えます。ウォレットはオブジェクトを、ダークモードは属性を、翻訳は要素を、ウイルス対策ソフトのウェブ保護は自前のスクリプトを足します。その跡はどのサイトでも読め、あなたについて多くを語ります。このページで見つかったものを示します。",
      "focus_h": "ページに手を加える拡張機能",
      "docs": [
        [
          "サイトはどうやって拡張機能を知るのですか？",
          "一覧を取ることはできませんが、残した跡は見えます。window.ethereum のようなオブジェクト、ページに付いた属性、挿入された要素、追加されたスクリプトなどです。何も跡を残さない拡張機能は見えません。"
        ],
        [
          "それで何が困るのですか？",
          "拡張機能からあなたが絞り込まれます。暗号資産ウォレット、開発者ツール、特定の翻訳ツールは、あなたがどんな人かを物語り、フィンガープリントもより珍しくします。"
        ],
        [
          "書き換えチェックとはどう関係しますか？",
          "UA・言語・タイムゾーンを変えたり、フィンガープリントに使われる描画の関数を包んだりする拡張機能は、サイトが読む値を書き換えます。上のチェックはそれを探しています。"
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
      "seo_title": "Browser-Erweiterungen prüfen: Welche Ihrer Erweiterungen sehen Websites? · Wer sind Sie?",
      "seo_desc": "Kostenloser Test der Browser-Erweiterungen: welche Erweiterungen Spuren hinterlassen, die jede Website lesen kann (Krypto-Wallets, Entwicklerwerkzeuge, Grammarly, Dark Reader, Übersetzer, Web-Schutz von Virenscannern), Ihr Werbeblocker und ob etwas umschreibt, was Websites lesen.",
      "seo_kw": "Browser Erweiterungen prüfen, Erweiterungen erkennen, welche Erweiterungen sehen Websites, Erweiterungs-Fingerprinting, Werbeblocker erkennen",
      "h1": "Browser-Erweiterungen prüfen",
      "og_sub": "Welche Ihrer Erweiterungen sehen Websites?",
      "intro": "Viele Erweiterungen verändern die Seite, um zu arbeiten: Eine Wallet fügt ein Objekt hinzu, ein Dunkelmodus Attribute, ein Übersetzer Elemente, der Web-Schutz eines Virenscanners ein eigenes Skript. Diese Spuren kann jede Website lesen, und sie sagen viel über Sie. Hier sind die, die diese Seite gefunden hat.",
      "focus_h": "Erweiterungen, die die Seite umschreiben",
      "docs": [
        [
          "Wie sieht eine Website meine Erweiterungen?",
          "Auflisten kann sie sie nicht, aber sie sieht, was sie hinterlassen: Objekte wie window.ethereum, Attribute auf der Seite, eingefügte Elemente, hinzugefügte Skripte. Erweiterungen ohne Spuren bleiben unsichtbar."
        ],
        [
          "Warum ist das wichtig?",
          "Erweiterungen grenzen Sie ein: Eine Krypto-Wallet, Entwicklerwerkzeuge oder ein bestimmter Übersetzer sagen etwas über Sie und machen Ihren Fingerabdruck einzigartiger."
        ],
        [
          "Was hat die Manipulationsprüfung damit zu tun?",
          "Erweiterungen, die User-Agent, Sprache oder Zeitzone ändern oder die Zeichenfunktionen der Fingerabdrücke umhüllen, schreiben um, was Websites lesen. Danach sucht die Prüfung oben."
        ]
      ]
    },
    "fr": {
      "seo_title": "Test des extensions du navigateur : lesquelles les sites voient-ils ? · Qui êtes-vous ?",
      "seo_desc": "Test gratuit des extensions du navigateur : celles qui laissent une trace lisible par tout site (portefeuilles crypto, outils de développement, Grammarly, Dark Reader, traducteurs, protection web d’antivirus), votre bloqueur de pubs, et si quelque chose réécrit ce que lisent les sites.",
      "seo_kw": "test extensions navigateur, détecter extensions, quelles extensions les sites voient, empreinte d’extensions, détection bloqueur de pubs",
      "h1": "Test des extensions du navigateur",
      "og_sub": "Quelles extensions les sites voient-ils ?",
      "intro": "Beaucoup d’extensions modifient la page pour fonctionner : un portefeuille ajoute un objet, un mode sombre des attributs, un traducteur des éléments, la protection web d’un antivirus son propre script. Tout site peut lire ces traces, et elles en disent long sur vous. Voici celles que cette page a trouvées.",
      "focus_h": "Extensions qui réécrivent la page",
      "docs": [
        [
          "Comment un site voit-il mes extensions ?",
          "Il ne peut pas les lister, mais il voit ce qu’elles laissent : des objets comme window.ethereum, des attributs sur la page, des éléments insérés, des scripts ajoutés. Une extension qui ne laisse rien reste invisible."
        ],
        [
          "Pourquoi est-ce important ?",
          "Les extensions vous distinguent : un portefeuille crypto, des outils de développement ou un traducteur précis disent quelque chose de vous et rendent votre empreinte plus unique."
        ],
        [
          "Quel rapport avec le contrôle des modifications ?",
          "Les extensions qui changent user agent, langue ou fuseau, ou enveloppent les fonctions de dessin des empreintes, réécrivent ce que lisent les sites. C’est ce que cherche le contrôle en tête."
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
      "seo_title": "Проверка расширений браузера: какие из них видят сайты? · Кто вы",
      "seo_desc": "Бесплатная проверка расширений браузера: какие оставляют след, видимый любому сайту (криптокошельки, инструменты разработчика, Grammarly, Dark Reader, переводчики, веб-защита антивируса), ваш блокировщик рекламы и не переписывает ли что-то данные, которые читают сайты.",
      "seo_kw": "проверка расширений браузера, обнаружение расширений, какие расширения видят сайты, отпечаток расширений, обнаружение блокировщика рекламы",
      "h1": "Проверка расширений браузера",
      "og_sub": "Какие ваши расширения видят сайты?",
      "intro": "Многие расширения меняют страницу, чтобы работать: кошелёк добавляет объект, тёмная тема — атрибуты, переводчик — элементы, веб-защита антивируса — свой скрипт. Эти следы видит любой сайт, и они многое о вас говорят. Вот что нашла эта страница.",
      "focus_h": "Расширения, которые переписывают страницу",
      "docs": [
        [
          "Как сайт видит мои расширения?",
          "Перечислить их он не может, но видит следы: объекты вроде window.ethereum, атрибуты на странице, вставленные элементы, добавленные скрипты. Расширения без следов остаются невидимыми."
        ],
        [
          "Почему это важно?",
          "Расширения сужают круг: криптокошелёк, инструменты разработчика или определённый переводчик говорят о вас и делают отпечаток уникальнее."
        ],
        [
          "При чём здесь проверка подмены?",
          "Расширения, меняющие User-Agent, язык или часовой пояс либо оборачивающие функции рисования для отпечатков, переписывают то, что читают сайты. Именно это ищет проверка вверху."
        ]
      ]
    }
  },
  "anti-detect-browser": {
    en: {
      seo_title: "Anti-Detect Browser Test: does your profile give itself away? · Who Are You",
      seo_desc: "Free anti-detect browser test: checks whether the user agent matches the engine's real version, whether a Worker reads the same navigator as the page, and whether platform, graphics card and time zone agree. No IP is kept, only anonymous counts of how common each value is.",
      seo_kw: "anti-detect browser test, antidetect browser check, multilogin detection, browser profile check, fingerprint browser detection, user agent spoofing detection",
      h1: "Anti-detect browser test", og_sub: "Each part looks right. Do they agree?",
      intro: "An anti-detect browser gives each profile its own user agent, screen, time zone and graphics card. Each value can look perfectly ordinary and still contradict another one. This page reads the parts a rewritten profile has trouble keeping consistent, and shows which ones disagree.",
      focus_h: "Your profile's traces",
      docs: [
        ["What gives an anti-detect browser away?", "Parts that don't agree. A user agent that says Chrome 156 while the engine lacks features Chrome shipped long ago; a Worker that reads a different user agent or language than the page; navigator.platform saying Mac with a Windows user agent; WebGL naming one maker as vendor and another as the card. Sites rarely look for the browser itself; they look for these contradictions."],
        ["Why does the engine's real version matter?", "The user agent is just text, and any browser can rewrite it. The JavaScript features an engine supports can't be rewritten the same way: each Chromium version adds functions (Promise.try in 128, RegExp.escape in 136), so which ones exist pins the engine to a range of versions. A user agent outside that range belongs to a profile, not a real browser."],
        ["How do I make a profile pass?", "Pick a user agent version that matches the browser's core; prefer changes made in the browser's core over injected scripts, so a Worker reads the same values; choose system, platform and graphics vendor as one set; and set the time zone and language to the proxy's country. Then check again here."],
      ],
    },
    "zh-CN": {
      seo_title: "指纹浏览器检测：你的环境配置露馅了吗？ · 你是谁",
      seo_desc: "免费指纹浏览器检测：看 UA 和内核的真实版本是否一致，Worker 里读到的 navigator 和页面里是否相同，平台、显卡和时区对不对得上。适合检查 AdsPower、比特浏览器、Multilogin 等环境。检测在你的浏览器里进行，不存 IP，只累计匿名计数。",
      seo_kw: "指纹浏览器检测, 指纹浏览器, 防关联浏览器, AdsPower 检测, 比特浏览器检测, 环境检测, 浏览器环境一致性, UA 伪装检测",
      h1: "指纹浏览器检测", og_sub: "每一项都像真的，合在一起对得上吗？",
      intro: "指纹浏览器会给每个环境配一套 UA、屏幕、时区和显卡。每一项单看都正常，放在一起却可能互相矛盾。这个页面专门读改过的环境最难保持一致的地方，告诉你哪几项对不上。",
      focus_h: "你的环境痕迹",
      docs: [
        ["指纹浏览器会在哪里露馅？", "露馅在各项互相对不上：UA 写着 Chrome 156，内核却缺 Chrome 早就有的功能；Worker 里读到的 UA 或语言和页面里不一样；UA 是 Windows，navigator.platform 却是 Mac；WebGL 报的厂商是一家，显卡却是另一家。网站很少去认浏览器本身，它们找的就是这些矛盾。"],
        ["为什么要看内核的真实版本？", "UA 只是一串文字，谁都能改。内核支持哪些 JavaScript 功能却改不了：Chromium 每个版本都会加新函数（128 加了 Promise.try，136 加了 RegExp.escape），看有没有这些函数，就能把内核版本框在一个范围里。UA 写的版本落在范围外，说明这是配出来的环境，不是真浏览器。"],
        ["怎样让环境通过检测？", "UA 的版本选成和内核一致；尽量用内核级修改，别用注入脚本，这样 Worker 读到的也一样；系统、平台、显卡厂商选同一套，别混搭；时区和语言设成代理所在国的。改完回到这里再测一次。"],
      ],
    },
    "zh-TW": {
      seo_title: "指紋瀏覽器檢測：你的環境設定露餡了嗎？ · 你是誰",
      seo_desc: "免費指紋瀏覽器檢測：看 UA 和核心的真實版本是否一致，Worker 裡讀到的 navigator 和頁面裡是否相同，平台、顯示卡和時區對不對得上。適合檢查 AdsPower、Multilogin 等環境。檢測在你的瀏覽器裡進行，不存 IP，只累計匿名計數。",
      seo_kw: "指紋瀏覽器檢測, 指紋瀏覽器, 防關聯瀏覽器, AdsPower 檢測, 環境檢測, 瀏覽器環境一致性, UA 偽裝檢測",
      h1: "指紋瀏覽器檢測", og_sub: "每一項都像真的，合在一起對得上嗎？",
      intro: "指紋瀏覽器會替每個環境配一套 UA、螢幕、時區和顯示卡。每一項單看都正常，放在一起卻可能互相矛盾。這個頁面專門讀改過的環境最難維持一致的地方，告訴你哪幾項對不上。",
      focus_h: "你的環境痕跡",
      docs: [
        ["指紋瀏覽器會在哪裡露餡？", "露餡在各項互相對不上：UA 寫著 Chrome 156，核心卻缺少 Chrome 早就有的功能；Worker 裡讀到的 UA 或語言和頁面裡不一樣；UA 是 Windows，navigator.platform 卻是 Mac；WebGL 回報的廠商是一家，顯示卡卻是另一家。網站很少去認瀏覽器本身，它們找的就是這些矛盾。"],
        ["為什麼要看核心的真實版本？", "UA 只是一串文字，誰都能改。核心支援哪些 JavaScript 功能卻改不了：Chromium 每個版本都會加入新函式（128 加了 Promise.try，136 加了 RegExp.escape），看有沒有這些函式，就能把核心版本框在一個範圍裡。UA 寫的版本落在範圍外，代表這是設定出來的環境，不是真的瀏覽器。"],
        ["怎麼讓環境通過檢測？", "UA 的版本選成和核心一致；盡量用核心層級的修改，別用注入腳本，這樣 Worker 讀到的也會一樣；系統、平台、顯示卡廠商選同一套，別混搭；時區和語言設成代理所在國的。改完回到這裡再測一次。"],
      ],
    },
    ja: {
      seo_title: "アンチディテクトブラウザ検査：プロファイルがばれていない？ · あなたは誰",
      seo_desc: "無料のアンチディテクトブラウザ検査：ユーザーエージェントとエンジンの実際のバージョンが合っているか、Worker が読む navigator がページと同じか、プラットフォーム・GPU・タイムゾーンが噛み合っているかを確認します。IP は保存せず、残すのは匿名の集計だけです。",
      seo_kw: "アンチディテクトブラウザ 検出, 指紋ブラウザ, ブラウザプロファイル 検査, UA 偽装 検出, 環境 一貫性",
      h1: "アンチディテクトブラウザ検査", og_sub: "一つひとつは本物らしい。でも、互いに合っている？",
      intro: "アンチディテクトブラウザは、プロファイルごとにユーザーエージェント、画面、タイムゾーン、GPU を用意します。一つずつ見ればごく普通の値でも、別の値と矛盾していることがあります。このページは、書き換えた環境では揃えにくい部分を読み取り、どこが合っていないかを示します。",
      focus_h: "プロファイルの痕跡",
      docs: [
        ["アンチディテクトブラウザはどこでばれるのですか？", "値どうしが合わないところです。Chrome 156 を名乗っているのに、Chrome がずっと前に入れた機能がエンジンにない。Worker が読むユーザーエージェントや言語がページと違う。Windows の UA なのに navigator.platform が Mac。WebGL のベンダーと GPU 名でメーカーが違う。サイトはブラウザそのものより、こうした矛盾を探しています。"],
        ["エンジンの実際のバージョンがなぜ大事なのですか？", "ユーザーエージェントはただの文字列なので、どのブラウザでも書き換えられます。でも、エンジンが備える JavaScript の機能は同じようには書き換えられません。Chromium はバージョンごとに関数を追加するので（128 で Promise.try、136 で RegExp.escape）、どの関数があるかでエンジンのバージョンの範囲が絞れます。その範囲から外れた UA は、本物のブラウザではなく作られたプロファイルです。"],
        ["プロファイルを見破られないようにするには？", "UA のバージョンをブラウザ本体に合わせる。Worker でも同じ値になるよう、スクリプト注入ではなくブラウザ本体側で変更する。システム・プラットフォーム・GPU ベンダーは一揃いで選ぶ。タイムゾーンと言語はプロキシの国に合わせる。そのうえで、ここでもう一度確認してください。"],
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
      seo_title: "Test de navigateur anti-détection : votre profil se trahit-il ? · Who Are You",
      seo_desc: "Test gratuit de navigateur anti-détection : vérifie si le user agent correspond à la vraie version du moteur, si un Worker lit le même navigator que la page, et si plateforme, carte graphique et fuseau horaire concordent. Ni IP ni données brutes ne sont gardées, seulement des comptages anonymes de votre fréquence.",
      seo_kw: "test navigateur anti-détection, détecter navigateur antidetect, vérifier profil navigateur, détection user agent falsifié, cohérence du navigateur",
      h1: "Test de navigateur anti-détection", og_sub: "Chaque élément paraît vrai ; s’accordent-ils ?",
      intro: "Un navigateur anti-détection donne à chaque profil son user agent, son écran, son fuseau horaire et sa carte graphique. Chaque valeur peut sembler banale et pourtant en contredire une autre. Cette page lit les éléments qu’un profil réécrit a du mal à garder cohérents, et dit lesquels ne concordent pas.",
      focus_h: "Les traces de votre profil",
      docs: [
        ["Qu’est-ce qui trahit un navigateur anti-détection ?", "Des éléments qui ne s’accordent pas : un user agent qui annonce Chrome 156 alors que le moteur n’a pas des fonctions que Chrome a depuis longtemps ; un Worker qui lit un autre user agent ou une autre langue que la page ; navigator.platform qui dit Mac avec un user agent Windows ; un fabricant WebGL différent de celui de la carte. Les sites cherchent ces contradictions."],
        ["Pourquoi la vraie version du moteur compte-t-elle ?", "Le user agent est un texte que n’importe qui peut réécrire. Les fonctions JavaScript du moteur, non : chaque version de Chromium en ajoute (Promise.try en 128, RegExp.escape en 136), et leur présence situe le moteur dans une plage. Un user agent hors de cette plage est un profil, pas un navigateur."],
        ["Comment faire passer un profil ?", "Choisissez une version de user agent qui correspond au noyau ; préférez les modifications au niveau du noyau aux scripts injectés, pour qu’un Worker lise la même chose ; choisissez système, plateforme et fabricant graphique comme un ensemble ; réglez fuseau et langue sur le pays du proxy. Puis revérifiez ici."],
      ],
    },
    de: {
      seo_title: "Anti-Detect-Browser-Test: Verrät sich dein Profil? · Who Are You",
      seo_desc: "Kostenloser Anti-Detect-Browser-Test: prüft, ob der User-Agent zur echten Engine-Version passt, ob ein Worker denselben navigator liest wie die Seite und ob Plattform, Grafikkarte und Zeitzone zusammenpassen. Weder IP noch Rohdaten werden gespeichert, nur anonyme Zähler, wie häufig Sie sind.",
      seo_kw: "Anti-Detect-Browser Test, Antidetect Browser erkennen, Browserprofil prüfen, gefälschten User-Agent erkennen, Browser-Konsistenz",
      h1: "Anti-Detect-Browser-Test", og_sub: "Jeder Teil wirkt echt – passen sie zusammen?",
      intro: "Ein Anti-Detect-Browser gibt jedem Profil eigenen User-Agent, Bildschirm, Zeitzone und Grafikkarte. Jeder Wert kann ganz normal aussehen und trotzdem einem anderen widersprechen. Diese Seite liest die Teile, die ein umgeschriebenes Profil schwer stimmig hält, und zeigt, welche nicht passen.",
      focus_h: "Die Spuren deines Profils",
      docs: [
        ["Woran erkennt man einen Anti-Detect-Browser?", "An Teilen, die nicht zusammenpassen: ein User-Agent mit Chrome 156, dessen Engine Funktionen fehlen, die Chrome längst hat; ein Worker, der einen anderen User-Agent oder eine andere Sprache liest als die Seite; navigator.platform „Mac“ bei einem Windows-User-Agent; ein WebGL-Hersteller, der nicht zur Karte passt. Websites suchen genau diese Widersprüche."],
        ["Warum zählt die echte Engine-Version?", "Der User-Agent ist ein Text, den jeder umschreiben kann. Die JavaScript-Funktionen der Engine nicht: Jede Chromium-Version bringt neue (Promise.try in 128, RegExp.escape in 136), und ihr Vorhandensein grenzt die Engine auf einen Bereich ein. Ein User-Agent außerhalb davon ist ein Profil, kein Browser."],
        ["Wie bringe ich ein Profil durch?", "Eine User-Agent-Version wählen, die zum Kernel passt; Änderungen im Kernel statt eingeschleuster Skripte, damit ein Worker dasselbe liest; System, Plattform und Grafikhersteller als einen Satz wählen; Zeitzone und Sprache auf das Land des Proxys stellen. Dann hier noch einmal prüfen."],
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
      seo_title: "Проверка антидетект-браузера: выдаёт ли себя профиль? · Who Are You",
      seo_desc: "Бесплатная проверка антидетект-браузера: совпадает ли user agent с настоящей версией движка, видит ли Worker тот же navigator, что и страница, согласуются ли платформа, видеокарта и часовой пояс. IP и исходные данные не сохраняются — только анонимные счётчики того, насколько вы распространены.",
      seo_kw: "проверка антидетект браузера, обнаружение антидетект браузера, проверка профиля браузера, подмена user agent, согласованность браузера",
      h1: "Проверка антидетект-браузера", og_sub: "Каждая часть выглядит настоящей — а вместе?",
      intro: "Антидетект-браузер даёт каждому профилю свой user agent, экран, часовой пояс и видеокарту. Каждое значение может выглядеть обычным и всё равно противоречить другому. Эта страница читает то, что переписанному профилю трудно держать согласованным, и показывает, что не сходится.",
      focus_h: "Следы вашего профиля",
      docs: [
        ["Что выдаёт антидетект-браузер?", "Несогласованные части: user agent говорит Chrome 156, а в движке нет функций, которые в Chrome давно есть; Worker видит другой user agent или язык, чем страница; navigator.platform — Mac при user agent Windows; производитель WebGL не совпадает с видеокартой. Сайты ищут именно такие противоречия."],
        ["Почему важна настоящая версия движка?", "User agent — строка, которую можно переписать. JavaScript-возможности движка так не перепишешь: каждая версия Chromium добавляет функции (Promise.try в 128, RegExp.escape в 136), и их наличие ограничивает версию движка диапазоном. User agent вне его — это профиль, а не браузер."],
        ["Как сделать, чтобы профиль прошёл?", "Выберите версию user agent под ядро; предпочитайте изменения на уровне ядра внедрённым скриптам, чтобы Worker видел то же; выбирайте систему, платформу и производителя видеокарты одним набором; поставьте пояс и язык страны прокси. Затем проверьте здесь снова."],
      ],
    },
  },
  "icloud-private-relay": {
    en: {
      seo_title: "iCloud Private Relay Check: what sites still see · Who Are You",
      seo_desc: "Free iCloud Private Relay check: whether your address is a relay exit, which network it belongs to, the region it shows, and whether WebRTC leaks anything past it. No IP is kept, only anonymous counts of how common each value is.",
      seo_kw: "iCloud Private Relay check, is Private Relay on, Private Relay IP, Private Relay detection, Safari Private Relay test",
      h1: "iCloud Private Relay check", og_sub: "Is the relay on, and what does it still show?",
      intro: "iCloud Private Relay sends Safari's traffic through two hops, so sites see an exit run by Cloudflare, Akamai or Fastly instead of your own address. Sites can still tell it's a relay, and roughly where you are. Here's what yours shows.",
      focus_h: "Your relay",
      docs: [
        ["Can sites tell I use Private Relay?", "Yes. Apple publishes the list of its exit addresses, and this page checks your address against it. A site sees a relay exit, not your own address, and usually a city or region near you, which Apple keeps on purpose so local content still works."],
        ["Is Private Relay a VPN?", "No. It covers Safari and unencrypted traffic from apps, not every app; you can't point it at another country; and it hides your address from sites, and the sites you visit from your network provider. To a site it looks like a privacy relay, not like someone abroad."],
        ["Why does WebRTC show another relay address?", "Each connection gets its own exit, so the page and WebRTC can come out of different relay addresses. If both are relay exits, nothing is leaking; the check only warns when a real address shows up next to them."],
      ],
    },
    "zh-CN": {
      seo_title: "iCloud 专用代理检测：网站还能看到什么？ · 你是谁",
      seo_desc: "免费 iCloud 专用代理（Private Relay）检测：看你的地址是不是中继出口、属于哪家网络、显示在哪个地区，以及 WebRTC 有没有绕过它漏出真实地址。检测在你的浏览器里进行，不存 IP，只累计匿名计数。",
      seo_kw: "iCloud 专用代理检测, iCloud Private Relay, 专用代理 IP, Private Relay 检测, Safari 专用代理",
      h1: "iCloud 专用代理检测", og_sub: "中继开着吗？还漏了什么？",
      intro: "iCloud 专用代理让 Safari 的流量先后经过两个中继，网站看到的是 Cloudflare、Akamai 或 Fastly 的出口，不是你的地址。但网站仍然看得出这是中继，也知道你大概在哪。下面是你的中继在网站眼里的样子。",
      focus_h: "你的中继",
      docs: [
        ["网站看得出我在用专用代理吗？", "看得出。苹果公开了它所有出口的地址列表，这个页面就是拿你的地址去对照的。网站看到的是中继出口，不是你自己的地址，但通常还能看到你附近的城市或地区：苹果有意保留这一点，好让本地内容照常显示。"],
        ["专用代理是 VPN 吗？", "不是。它只管 Safari 和 App 里没加密的流量，不是所有 App；不能选别的国家；它对网站隐藏你的地址，对网络运营商隐藏你访问了什么。在网站眼里，它像一个隐私中继，而不像一个人在国外。"],
        ["为什么 WebRTC 显示的是另一个中继地址？", "每条连接都有自己的出口，所以页面和 WebRTC 可能从不同的中继地址出去。两个都是中继出口，不算泄露；只有旁边出现了你的真实地址，检测才会报警。"],
      ],
    },
    "zh-TW": {
      seo_title: "iCloud 私密轉送檢測：網站還看得到什麼？ · 你是誰",
      seo_desc: "免費 iCloud 私密轉送（Private Relay）檢測：看你的位址是不是轉送的出口、屬於哪家網路、顯示在哪個地區，以及 WebRTC 有沒有繞過它漏出真實位址。檢測在你的瀏覽器裡進行，不存 IP，只累計匿名計數。",
      seo_kw: "iCloud 私密轉送檢測, iCloud Private Relay, 私密轉送 IP, Private Relay 檢測, Safari 私密轉送",
      h1: "iCloud 私密轉送檢測", og_sub: "轉送開著嗎？還漏了什麼？",
      intro: "iCloud 私密轉送讓 Safari 的流量先後經過兩個中繼站，網站看到的是 Cloudflare、Akamai 或 Fastly 的出口，不是你的位址。但網站還是看得出這是中繼，也知道你大概在哪裡。下面是你的轉送在網站眼中的樣子。",
      focus_h: "你的私密轉送",
      docs: [
        ["網站看得出我在用私密轉送嗎？", "看得出來。Apple 公開了所有出口的位址清單，這個頁面就是拿你的位址去比對。網站看到的是轉送出口，不是你自己的位址，但通常還看得到你附近的城市或地區：Apple 刻意保留這一點，讓在地內容照常顯示。"],
        ["私密轉送是 VPN 嗎？", "不是。它只處理 Safari 和 App 裡沒加密的流量，不是所有 App；不能選其他國家；它對網站隱藏你的位址，對網路業者隱藏你造訪了什麼。在網站眼中，它像一個隱私中繼，而不像一個人在國外。"],
        ["為什麼 WebRTC 顯示的是另一個轉送位址？", "每條連線都有自己的出口，所以頁面和 WebRTC 可能從不同的轉送位址出去。兩個都是轉送出口，不算外洩；只有旁邊出現你的真實位址，檢測才會警告。"],
      ],
    },
    ja: {
      seo_title: "iCloud プライベートリレー検査：それでもサイトに見えるもの · あなたは誰",
      seo_desc: "無料の iCloud プライベートリレー検査：あなたのアドレスがリレーの出口か、どのネットワークのものか、どの地域に見えるか、WebRTC からリレーの外へ何か漏れていないかを確認します。IP は保存せず、残すのは匿名の集計だけです。",
      seo_kw: "iCloud プライベートリレー 確認, Private Relay 検出, プライベートリレー IP, Safari プライベートリレー",
      h1: "iCloud プライベートリレー検査", og_sub: "リレーはオン？それでも見えるものは？",
      intro: "iCloud プライベートリレーは Safari の通信を 2 段階で中継するので、サイトにはあなたのアドレスではなく、Cloudflare・Akamai・Fastly が運営する出口が見えます。それでも、リレーを使っていることやおおよその場所は分かります。あなたのリレーの見え方を示します。",
      focus_h: "あなたのリレー",
      docs: [
        ["プライベートリレーを使っているとサイトに分かりますか？", "分かります。Apple は出口アドレスの一覧を公開しており、このページもそれと照らし合わせています。サイトに見えるのはリレーの出口で、あなた自身のアドレスではありません。ただ、近くの都市や地域は見えることが多く、これは地域向けのコンテンツが使えるよう Apple が意図して残しているものです。"],
        ["プライベートリレーは VPN ですか？", "いいえ。対象は Safari と、アプリの暗号化されていない通信だけで、すべてのアプリではありません。別の国を選ぶこともできません。隠すのは、サイトからはあなたのアドレス、通信事業者からはあなたの閲覧先です。サイトから見れば、海外にいる人ではなく、プライバシー用の中継です。"],
        ["WebRTC に別のリレーアドレスが出るのはなぜですか？", "接続ごとに出口が割り当てられるため、ページと WebRTC が別のリレーアドレスから出ることがあります。どちらもリレーの出口なら、漏れではありません。本当のアドレスが並んで見えたときだけ警告します。"],
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
      seo_title: "Vérifier le relais privé iCloud : ce que les sites voient encore · Who Are You",
      seo_desc: "Vérification gratuite du relais privé iCloud : votre adresse est-elle une sortie du relais, de quel réseau, quelle région elle montre, et WebRTC laisse-t-il fuir quelque chose à côté. Ni IP ni données brutes ne sont gardées, seulement des comptages anonymes de votre fréquence.",
      seo_kw: "vérifier relais privé iCloud, iCloud Private Relay, IP relais privé, détecter Private Relay, Safari relais privé",
      h1: "Vérifier le relais privé iCloud", og_sub: "Le relais est-il actif, et que montre-t-il encore ?",
      intro: "Le relais privé iCloud fait passer le trafic de Safari par deux sauts : les sites voient une sortie de Cloudflare, Akamai ou Fastly au lieu de votre adresse. Ils savent pourtant que c’est un relais, et à peu près où vous êtes. Voici ce que montre le vôtre.",
      focus_h: "Votre relais",
      docs: [
        ["Les sites savent-ils que j’utilise le relais privé ?", "Oui. Apple publie la liste de ses adresses de sortie, et cette page compare la vôtre à cette liste. Un site voit une sortie du relais, pas votre adresse, et en général une ville ou une région proche, qu’Apple garde volontairement pour que le contenu local fonctionne."],
        ["Le relais privé est-il un VPN ?", "Non. Il couvre Safari et le trafic non chiffré des apps, pas toutes les apps ; on ne peut pas choisir un autre pays ; il cache votre adresse aux sites et vos visites à votre opérateur. Pour un site, c’est un relais de confidentialité, pas quelqu’un à l’étranger."],
        ["Pourquoi WebRTC montre-t-il une autre adresse du relais ?", "Chaque connexion reçoit sa propre sortie : la page et WebRTC peuvent donc sortir par des adresses différentes du relais. Deux sorties du relais, ce n’est pas une fuite ; la vérification n’alerte que si une vraie adresse apparaît à côté."],
      ],
    },
    de: {
      seo_title: "iCloud Private Relay prüfen: Was Websites noch sehen · Who Are You",
      seo_desc: "Kostenlose Prüfung von iCloud Private Relay: ob deine Adresse ein Relay-Ausgang ist, zu welchem Netz sie gehört, welche Region sie zeigt und ob WebRTC daran vorbei etwas verrät. Weder IP noch Rohdaten werden gespeichert, nur anonyme Zähler, wie häufig Sie sind.",
      seo_kw: "iCloud Private Relay prüfen, Private Relay erkennen, Private Relay IP, Safari Private Relay Test",
      h1: "iCloud Private Relay prüfen", og_sub: "Ist das Relay an, und was zeigt es noch?",
      intro: "iCloud Private Relay schickt Safaris Verkehr über zwei Stationen, sodass Websites einen Ausgang von Cloudflare, Akamai oder Fastly sehen statt deiner Adresse. Dass es ein Relay ist und ungefähr wo du bist, sehen sie trotzdem. So sieht deins aus.",
      focus_h: "Dein Relay",
      docs: [
        ["Sehen Websites, dass ich Private Relay nutze?", "Ja. Apple veröffentlicht die Liste seiner Ausgangsadressen, und diese Seite gleicht deine damit ab. Eine Website sieht einen Relay-Ausgang, nicht deine Adresse, und meist eine Stadt oder Region in deiner Nähe – Apple behält das bewusst, damit lokale Inhalte funktionieren."],
        ["Ist Private Relay ein VPN?", "Nein. Es deckt Safari und unverschlüsselten Verkehr von Apps ab, nicht jede App; ein anderes Land lässt sich nicht wählen; es verbirgt deine Adresse vor Websites und deine Ziele vor deinem Anbieter. Für eine Website wirkt es wie ein Datenschutz-Relay, nicht wie jemand im Ausland."],
        ["Warum zeigt WebRTC eine andere Relay-Adresse?", "Jede Verbindung bekommt einen eigenen Ausgang, also können Seite und WebRTC über verschiedene Relay-Adressen hinausgehen. Zwei Relay-Ausgänge sind kein Leck; die Prüfung warnt nur, wenn daneben eine echte Adresse auftaucht."],
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
      seo_title: "Проверка частного узла iCloud: что сайты всё ещё видят · Who Are You",
      seo_desc: "Бесплатная проверка частного узла iCloud (Private Relay): является ли ваш адрес выходом ретранслятора, чья это сеть, какой регион он показывает и не утекает ли что-то мимо него через WebRTC. IP и исходные данные не сохраняются — только анонимные счётчики того, насколько вы распространены.",
      seo_kw: "проверка частного узла iCloud, iCloud Private Relay, IP частного узла, обнаружение Private Relay, Safari",
      h1: "Проверка частного узла iCloud", og_sub: "Узел включён — и что он всё равно показывает?",
      intro: "Частный узел iCloud пропускает трафик Safari через два перехода, и сайты видят выход Cloudflare, Akamai или Fastly вместо вашего адреса. Но что это ретранслятор и где вы примерно находитесь, они всё равно видят. Вот как выглядит ваш.",
      focus_h: "Ваш ретранслятор",
      docs: [
        ["Видят ли сайты, что я пользуюсь частным узлом?", "Да. Apple публикует список своих выходных адресов, и эта страница сверяет с ним ваш. Сайт видит выход ретранслятора, а не ваш адрес, и обычно ближайший город или регион — Apple сохраняет его намеренно, чтобы работал местный контент."],
        ["Частный узел — это VPN?", "Нет. Он охватывает Safari и незашифрованный трафик приложений, не все приложения; другую страну выбрать нельзя; он скрывает ваш адрес от сайтов и посещаемое — от провайдера. Для сайта это ретранслятор приватности, а не человек за границей."],
        ["Почему WebRTC показывает другой адрес ретранслятора?", "Каждое соединение получает свой выход, поэтому страница и WebRTC могут выходить через разные адреса ретранслятора. Два выхода ретранслятора — не утечка; проверка предупреждает, только если рядом появляется настоящий адрес."],
      ],
    },
  },
  "warp-check": {
    en: {
      seo_title: "Cloudflare WARP Check: is WARP on, and can sites tell? · Who Are You",
      seo_desc: "Free Cloudflare WARP check: whether your traffic goes through WARP, the address and network sites see, the Cloudflare data center you reach and the key exchange in use. No IP is kept, only anonymous counts of how common each value is.",
      seo_kw: "Cloudflare WARP check, is WARP on, WARP detection, 1.1.1.1 WARP test, WARP IP",
      h1: "Cloudflare WARP check", og_sub: "Is WARP on, and what do sites see?",
      intro: "WARP, the VPN in Cloudflare's 1.1.1.1 app, sends your traffic into Cloudflare's network. Any site behind Cloudflare can tell whether a visitor arrives through WARP. Here's what yours says, and which address and network the site sees.",
      focus_h: "Your WARP",
      docs: [
        ["How can a site tell I use WARP?", "Sites behind Cloudflare can read Cloudflare's trace, which says warp=on for traffic that comes through WARP. Even elsewhere, a WARP address belongs to Cloudflare's own network (AS13335), which sites treat as a data center rather than a home connection."],
        ["Does WARP hide where I am?", "Mostly not. WARP exits near you, usually in your own country, so a site can still place you roughly. It's built for privacy and speed, not for appearing somewhere else. Sites see a Cloudflare address instead of your internet provider's."],
        ["What does warp=plus mean?", "The trace says plus for WARP+, the paid tier that uses Cloudflare's faster routes. To a site the two look the same: a Cloudflare address with WARP on."],
      ],
    },
    "zh-CN": {
      seo_title: "Cloudflare WARP 检测：WARP 开着吗？网站看得出吗？ · 你是谁",
      seo_desc: "免费 Cloudflare WARP 检测：看你的流量有没有经过 WARP，网站看到的地址和网络，连到的 Cloudflare 机房，以及用的密钥交换方式。检测在你的浏览器里进行，不存 IP，只累计匿名计数。",
      seo_kw: "Cloudflare WARP 检测, WARP 是否开启, WARP 检测, 1.1.1.1 WARP, WARP IP",
      h1: "Cloudflare WARP 检测", og_sub: "WARP 开着吗？网站看到了什么？",
      intro: "WARP 是 Cloudflare 的 1.1.1.1 App 里的 VPN，会把你的流量送进 Cloudflare 的网络。任何接入 Cloudflare 的网站，都能读到访客是不是经 WARP 来的。下面是你的结果，以及网站看到的地址和网络。",
      focus_h: "你的 WARP",
      docs: [
        ["网站怎么知道我在用 WARP？", "接入 Cloudflare 的网站可以读 Cloudflare 的 trace（一份连接信息），经 WARP 来的流量会显示 warp=on。就算不看这个，WARP 的地址也属于 Cloudflare 自己的网络（AS13335），网站会把它当成机房 IP，而不是家宽。"],
        ["WARP 能隐藏我在哪吗？", "基本不能。WARP 从离你近的地方出去，通常就在你自己的国家，所以网站仍能大致定位到你；它是为隐私和速度设计的，不是为了让你装成在别处。网站看到的是 Cloudflare 的地址，不是你运营商的。"],
        ["warp=plus 是什么意思？", "trace 里显示 plus，表示你用的是 WARP+，也就是走 Cloudflare 更快线路的付费版。在网站看来两者一样：一个 Cloudflare 地址，WARP 开着。"],
      ],
    },
    "zh-TW": {
      seo_title: "Cloudflare WARP 檢測：WARP 開著嗎？網站看得出來嗎？ · 你是誰",
      seo_desc: "免費 Cloudflare WARP 檢測：看你的流量有沒有經過 WARP，網站看到的位址和網路，連到的 Cloudflare 機房，以及使用的金鑰交換方式。檢測在你的瀏覽器裡進行，不存 IP，只累計匿名計數。",
      seo_kw: "Cloudflare WARP 檢測, WARP 是否開啟, WARP 檢測, 1.1.1.1 WARP, WARP IP",
      h1: "Cloudflare WARP 檢測", og_sub: "WARP 開著嗎？網站看到了什麼？",
      intro: "WARP 是 Cloudflare 的 1.1.1.1 App 裡的 VPN，會把你的流量送進 Cloudflare 的網路。任何接入 Cloudflare 的網站，都讀得到訪客是不是透過 WARP 來的。下面是你的結果，以及網站看到的位址和網路。",
      focus_h: "你的 WARP",
      docs: [
        ["網站怎麼知道我在用 WARP？", "接入 Cloudflare 的網站可以讀 Cloudflare 的 trace（一份連線資訊），透過 WARP 來的流量會顯示 warp=on。就算不看這個，WARP 的位址也屬於 Cloudflare 自己的網路（AS13335），網站會把它當成機房 IP，而不是住宅 IP。"],
        ["WARP 能隱藏我在哪裡嗎？", "大多不能。WARP 從離你近的地方出去，通常就在你自己的國家，所以網站還是能大致定位到你；它是為了隱私和速度設計的，不是為了讓你假裝在別的地方。網站看到的是 Cloudflare 的位址，不是你電信業者的。"],
        ["warp=plus 是什麼意思？", "trace 裡顯示 plus，代表你用的是 WARP+，也就是走 Cloudflare 較快線路的付費版。在網站看來兩者一樣：一個 Cloudflare 位址，WARP 開著。"],
      ],
    },
    ja: {
      seo_title: "Cloudflare WARP 検査：WARP はオン？サイトに分かる？ · あなたは誰",
      seo_desc: "無料の Cloudflare WARP 検査：通信が WARP を通っているか、サイトに見えるアドレスとネットワーク、つながった Cloudflare のデータセンター、使われている鍵交換を確認します。IP は保存せず、残すのは匿名の集計だけです。",
      seo_kw: "Cloudflare WARP 確認, WARP オン 確認, WARP 検出, 1.1.1.1 WARP, WARP IP",
      h1: "Cloudflare WARP 検査", og_sub: "WARP はオン？サイトには何が見える？",
      intro: "WARP は Cloudflare の 1.1.1.1 アプリに入っている VPN で、通信を Cloudflare のネットワークに送ります。Cloudflare を通して配信しているサイトなら、訪問者が WARP 経由かどうかを読み取れます。あなたの結果と、サイトに見えるアドレスとネットワークを示します。",
      focus_h: "あなたの WARP",
      docs: [
        ["サイトはどうやって WARP の利用を知るのですか？", "Cloudflare を通して配信しているサイトは Cloudflare の trace を読めて、WARP 経由の通信には warp=on と出ます。それ以外のサイトでも、WARP のアドレスは Cloudflare 自身のネットワーク（AS13335）のものなので、家庭用回線ではなくデータセンターとして扱われます。"],
        ["WARP で居場所は隠せますか？", "ほとんど隠せません。WARP は近くの、たいていは自国の出口から出るので、サイトはおおよその場所をつかめます。WARP はプライバシーと速度のためのもので、別の場所にいるように見せるためのものではありません。サイトに見えるのが、プロバイダーのアドレスではなく Cloudflare のアドレスになるだけです。"],
        ["warp=plus とは何ですか？", "trace の plus は、Cloudflare の速い経路を使う有料版 WARP+ のことです。サイトから見ればどちらも同じで、Cloudflare のアドレスで WARP がオン、というだけです。"],
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
      seo_title: "Vérifier Cloudflare WARP : est-il actif, les sites le voient-ils ? · Who Are You",
      seo_desc: "Vérification gratuite de Cloudflare WARP : votre trafic passe-t-il par WARP, l’adresse et le réseau que voient les sites, le centre de données Cloudflare atteint et l’échange de clés utilisé. Ni IP ni données brutes ne sont gardées, seulement des comptages anonymes de votre fréquence.",
      seo_kw: "vérifier Cloudflare WARP, WARP activé, détecter WARP, 1.1.1.1 WARP, IP WARP",
      h1: "Vérifier Cloudflare WARP", og_sub: "WARP est-il actif, et que voient les sites ?",
      intro: "WARP, le VPN de l’app 1.1.1.1 de Cloudflare, fait entrer votre trafic dans le réseau de Cloudflare. Tout site derrière Cloudflare peut lire si un visiteur arrive par WARP. Voici ce que dit le vôtre, et l’adresse et le réseau que voit le site.",
      focus_h: "Votre WARP",
      docs: [
        ["Comment un site sait-il que j’utilise WARP ?", "Les sites derrière Cloudflare peuvent interroger sa trace, qui indique warp=on pour le trafic venu par WARP. Même ailleurs, une adresse WARP appartient au réseau de Cloudflare (AS13335), que les sites classent comme centre de données et non comme connexion domestique."],
        ["WARP cache-t-il où je suis ?", "Le plus souvent, non. WARP sort près de chez vous, en général dans votre pays : un site vous situe donc à peu près là où vous êtes. Il est conçu pour la confidentialité et la vitesse, pas pour paraître ailleurs. Les sites voient une adresse Cloudflare au lieu de celle de votre opérateur."],
        ["Que veut dire warp=plus ?", "La trace indique plus pour WARP+, l’offre payante avec les routes plus rapides de Cloudflare. Pour un site, les deux se ressemblent : une adresse Cloudflare et WARP actif."],
      ],
    },
    de: {
      seo_title: "Cloudflare WARP prüfen: Ist WARP an, und sehen es Websites? · Who Are You",
      seo_desc: "Kostenlose Prüfung von Cloudflare WARP: ob dein Verkehr über WARP läuft, welche Adresse und welches Netz Websites sehen, welches Cloudflare-Rechenzentrum du erreichst und welcher Schlüsselaustausch läuft. Weder IP noch Rohdaten werden gespeichert, nur anonyme Zähler, wie häufig Sie sind.",
      seo_kw: "Cloudflare WARP prüfen, WARP aktiv, WARP erkennen, 1.1.1.1 WARP, WARP IP",
      h1: "Cloudflare WARP prüfen", og_sub: "Ist WARP an, und was sehen Websites?",
      intro: "WARP, das VPN in Cloudflares 1.1.1.1-App, schickt deinen Verkehr in Cloudflares Netz. Jede Website hinter Cloudflare kann lesen, ob ein Besucher über WARP kommt. Das sagt deins, und diese Adresse und dieses Netz sieht die Website.",
      focus_h: "Dein WARP",
      docs: [
        ["Woran erkennt eine Website WARP?", "Websites hinter Cloudflare können Cloudflares Trace abfragen, der für Verkehr über WARP warp=on meldet. Auch anderswo gehört eine WARP-Adresse zu Cloudflares eigenem Netz (AS13335), das Websites als Rechenzentrum statt als Heimanschluss führen."],
        ["Verbirgt WARP, wo ich bin?", "Meist nicht. WARP geht in deiner Nähe hinaus, meist im eigenen Land, also verortet dich eine Website weiterhin ungefähr. Es ist für Privatsphäre und Tempo gebaut, nicht dafür, woanders zu wirken. Websites sehen eine Cloudflare-Adresse statt der deines Anbieters."],
        ["Was bedeutet warp=plus?", "Der Trace meldet plus für WARP+, die bezahlte Stufe mit Cloudflares schnelleren Routen. Für eine Website sehen beide gleich aus: eine Cloudflare-Adresse und WARP an."],
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
      seo_title: "Проверка Cloudflare WARP: включён ли WARP и видят ли сайты · Who Are You",
      seo_desc: "Бесплатная проверка Cloudflare WARP: идёт ли ваш трафик через WARP, какой адрес и сеть видят сайты, к какому дата-центру Cloudflare вы подключены и какой обмен ключами используется. IP и исходные данные не сохраняются — только анонимные счётчики того, насколько вы распространены.",
      seo_kw: "проверка Cloudflare WARP, включён ли WARP, обнаружение WARP, 1.1.1.1 WARP, IP WARP",
      h1: "Проверка Cloudflare WARP", og_sub: "WARP включён — и что видят сайты?",
      intro: "WARP, VPN в приложении 1.1.1.1 от Cloudflare, отправляет ваш трафик в сеть Cloudflare. Любой сайт за Cloudflare может узнать, пришёл ли посетитель через WARP. Вот что показывает ваш, и какой адрес и сеть видит сайт.",
      focus_h: "Ваш WARP",
      docs: [
        ["Как сайт узнаёт, что я пользуюсь WARP?", "Сайты за Cloudflare могут запросить его trace, где для трафика через WARP указано warp=on. И вне Cloudflare адрес WARP принадлежит собственной сети Cloudflare (AS13335), которую сайты считают дата-центром, а не домашним подключением."],
        ["Скрывает ли WARP, где я?", "Обычно нет. WARP выходит рядом с вами, как правило в вашей же стране, поэтому сайт по-прежнему примерно определяет ваше местоположение; он сделан для приватности и скорости, а не чтобы выглядеть в другом месте. Сайты видят адрес Cloudflare вместо адреса провайдера."],
        ["Что значит warp=plus?", "В trace plus означает WARP+, платную версию с более быстрыми маршрутами Cloudflare. Для сайта обе выглядят одинаково: адрес Cloudflare и включённый WARP."],
      ],
    },
  },
  "http3-ech": {
    en: {
      seo_title: "HTTP/3, ECH and Post-Quantum TLS Test · Who Are You",
      seo_desc: "Free connection test: whether your browser uses HTTP/3, hides the site's name with Encrypted Client Hello (ECH), and agrees on a post-quantum key (X25519MLKEM768), and what a missing one says about your network or proxy. No IP is kept, only anonymous counts of how common each value is.",
      seo_kw: "HTTP/3 test, ECH test, encrypted client hello check, post-quantum TLS test, X25519MLKEM768, QUIC test, TLS check",
      h1: "HTTP/3, ECH and post-quantum test", og_sub: "How modern is your connection, and what's in the way?",
      intro: "On an open network, a current browser talks HTTP/3 over UDP, hides which site it connects to with ECH, and agrees on a key that a future quantum computer can't break. When one of these is missing, something along the way is often the reason. Here's your connection.",
      focus_h: "Your connection",
      docs: [
        ["Why isn't HTTP/3 used?", "HTTP/3 runs over UDP port 443. A browser learns that a site supports it from a first answer over TCP, so it may not switch on a first visit. But if UDP can't get out at all, a network or proxy is blocking it or doesn't carry UDP. Many proxy setups carry only TCP."],
        ["What is ECH, and why is it off?", "Encrypted Client Hello encrypts the name of the site you connect to, which TLS otherwise sends in the clear for anyone along the way to read. The browser needs the site's keys from a DNS HTTPS record: Firefox reads them only over its own DNS over HTTPS, Chrome needs a resolver that returns HTTPS records, and Safari doesn't use ECH yet."],
        ["What does a classical key exchange mean?", "Chrome 124+, Firefox 132+ and Safari 26 offer X25519MLKEM768 by default. A current browser that ends up with plain X25519 points to something in between making its own TLS connection: an antivirus, a company proxy, or a proxy client that terminates TLS. On older browsers it just means the browser is old."],
      ],
    },
    "zh-CN": {
      seo_title: "HTTP/3、ECH 和后量子加密检测 · 你是谁",
      seo_desc: "免费连接协议检测：看你的浏览器有没有用上 HTTP/3，有没有用 ECH 隐藏你访问的网站名，有没有协商后量子密钥（X25519MLKEM768）；缺了哪一项，又说明你的网络或代理出了什么问题。检测在你的浏览器里进行，不存 IP，只累计匿名计数。",
      seo_kw: "HTTP/3 检测, ECH 检测, Encrypted Client Hello, 后量子加密检测, X25519MLKEM768, QUIC 检测, TLS 检测",
      h1: "HTTP/3、ECH 和后量子加密检测", og_sub: "你的连接够新吗？卡在了哪里？",
      intro: "新版浏览器在畅通的网络上，会用 UDP 跑 HTTP/3，用 ECH 把你要去的网站名加密，再协商一把将来量子计算机也破解不了的密钥。少了哪一项，往往是路上的某个东西造成的。下面是你的连接情况。",
      focus_h: "你的连接",
      docs: [
        ["为什么没用上 HTTP/3？", "HTTP/3 走 UDP 443 端口。浏览器要先通过普通的 TCP 连接收到网站的第一次回应，才知道它支持 HTTP/3，所以第一次访问可能还没切过去。但如果 UDP 哪儿都出不去，就是网络或代理把它拦了，或者压根不转发 UDP。很多代理配置只转发 TCP。"],
        ["ECH 是什么？为什么没开？", "ECH（Encrypted Client Hello）会把你要访问的网站名加密。没有它，TLS 握手会明文发出网站名，路上谁都看得到。浏览器得先从 DNS 的 HTTPS 记录里拿到网站的密钥：Firefox 只在用它自己的 DNS over HTTPS 时才去读；Chrome 需要一台能返回 HTTPS 记录的 DNS 服务器；Safari 目前还不用 ECH。"],
        ["密钥交换显示传统方式，说明什么？", "Chrome 124+、Firefox 132+ 和 Safari 26 默认都会提供 X25519MLKEM768。新版浏览器最后却用了普通的 X25519，说明中间有东西自己另建了 TLS 连接：杀毒软件、公司代理，或者会解开 TLS 的代理客户端。如果是旧版浏览器，那只是版本太老。"],
      ],
    },
    "zh-TW": {
      seo_title: "HTTP/3、ECH 與後量子加密檢測 · 你是誰",
      seo_desc: "免費連線協定檢測：看你的瀏覽器有沒有用上 HTTP/3，有沒有用 ECH 隱藏你造訪的網站名稱，有沒有協商後量子金鑰（X25519MLKEM768）；缺了哪一項，又代表你的網路或代理出了什麼問題。檢測在你的瀏覽器裡進行，不存 IP，只累計匿名計數。",
      seo_kw: "HTTP/3 檢測, ECH 檢測, Encrypted Client Hello, 後量子加密檢測, X25519MLKEM768, QUIC 檢測, TLS 檢測",
      h1: "HTTP/3、ECH 與後量子加密檢測", og_sub: "你的連線夠新嗎？卡在哪裡？",
      intro: "新版瀏覽器在暢通的網路上，會用 UDP 跑 HTTP/3，用 ECH 把你要去的網站名稱加密，再協商一把未來量子電腦也破解不了的金鑰。少了哪一項，往往是路上的某個東西造成的。下面是你的連線狀況。",
      focus_h: "你的連線",
      docs: [
        ["為什麼沒用上 HTTP/3？", "HTTP/3 走 UDP 443 連接埠。瀏覽器要先透過一般的 TCP 連線收到網站的第一次回應，才知道它支援 HTTP/3，所以第一次造訪可能還沒切過去。但如果 UDP 哪裡都出不去，就是網路或代理把它擋了，或根本不轉送 UDP。很多代理設定只轉送 TCP。"],
        ["ECH 是什麼？為什麼沒開？", "ECH（Encrypted Client Hello）會把你要造訪的網站名稱加密。沒有它，TLS 交握會以明文送出網站名稱，路上誰都看得到。瀏覽器得先從 DNS 的 HTTPS 紀錄拿到網站的金鑰：Firefox 只在使用它自己的 DNS over HTTPS 時才會去讀；Chrome 需要一台能回傳 HTTPS 紀錄的 DNS 伺服器；Safari 目前還不使用 ECH。"],
        ["金鑰交換顯示傳統方式，代表什麼？", "Chrome 124+、Firefox 132+ 和 Safari 26 預設都會提供 X25519MLKEM768。新版瀏覽器最後卻用了一般的 X25519，代表中間有東西另外建立了 TLS 連線：防毒軟體、公司代理，或是會解開 TLS 的代理用戶端。如果是舊版瀏覽器，那只是版本太舊。"],
      ],
    },
    ja: {
      seo_title: "HTTP/3・ECH・耐量子暗号の検査 · あなたは誰",
      seo_desc: "無料の接続検査：ブラウザが HTTP/3 を使っているか、ECH（Encrypted Client Hello）で接続先のサイト名を隠しているか、耐量子の鍵（X25519MLKEM768）で合意しているか、欠けているならネットワークやプロキシについて何が分かるかを確認します。IP は保存せず、残すのは匿名の集計だけです。",
      seo_kw: "HTTP/3 確認, ECH 確認, Encrypted Client Hello, 耐量子暗号 TLS, X25519MLKEM768, QUIC 確認, TLS 確認",
      h1: "HTTP/3・ECH・耐量子暗号の検査", og_sub: "あなたの接続はどれだけ新しい？何が邪魔している？",
      intro: "制限のないネットワークなら、最新のブラウザは UDP で HTTP/3 を使い、ECH でどのサイトにつなぐかを隠し、将来の量子コンピューターでも破れない鍵で合意します。どれかが欠けているときは、途中の経路にある何かが原因であることがよくあります。あなたの接続を示します。",
      focus_h: "あなたの接続",
      docs: [
        ["HTTP/3 が使われないのはなぜですか？", "HTTP/3 は UDP の 443 番ポートを使います。ブラウザはサイトが HTTP/3 に対応していることを TCP での最初の応答で知るので、初回の訪問ではまだ切り替わらないことがあります。ただ、UDP がどこにも出られないなら、ネットワークかプロキシが遮断しているか、UDP を通していません。TCP しか通さないプロキシ設定はよくあります。"],
        ["ECH とは何ですか？オフなのはなぜですか？", "Encrypted Client Hello は、接続先のサイト名を暗号化する仕組みです。これがないと TLS はサイト名を暗号化せずに送るので、経路上の誰でも読めてしまいます。ブラウザは DNS の HTTPS レコードからサイトの鍵を得る必要があります。Firefox は自身の DNS over HTTPS を使うときだけ読み、Chrome は HTTPS レコードを返す DNS サーバーが必要で、Safari はまだ ECH を使っていません。"],
        ["従来型の鍵交換になっているのはどういう意味ですか？", "Chrome 124 以降、Firefox 132 以降、Safari 26 は、標準で X25519MLKEM768 を提示します。最新のブラウザなのに普通の X25519 になっているなら、途中で独自に TLS 接続を張り直すもの（ウイルス対策ソフト、社内プロキシ、TLS を終端するプロキシのクライアント）があると考えられます。古いブラウザなら、単に古いだけです。"],
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
      seo_title: "Test HTTP/3, ECH et TLS post-quantique · Who Are You",
      seo_desc: "Test de connexion gratuit : votre navigateur utilise-t-il HTTP/3, masque-t-il le nom du site avec Encrypted Client Hello (ECH), convient-il d’une clé post-quantique (X25519MLKEM768), et ce qu’un manque dit de votre réseau ou proxy. Ni IP ni données brutes ne sont gardées, seulement des comptages anonymes de votre fréquence.",
      seo_kw: "test HTTP/3, test ECH, encrypted client hello, TLS post-quantique, X25519MLKEM768, test QUIC, vérifier TLS",
      h1: "Test HTTP/3, ECH et post-quantique", og_sub: "Votre connexion est-elle moderne, et qu’est-ce qui bloque ?",
      intro: "Un navigateur récent sur un réseau ouvert parle HTTP/3 sur UDP, masque avec ECH le site auquel il se connecte et convient d’une clé qu’un futur ordinateur quantique ne cassera pas. Quand l’un manque, c’est souvent à cause de quelque chose sur le chemin. Voici votre connexion.",
      focus_h: "Votre connexion",
      docs: [
        ["Pourquoi HTTP/3 n’est-il pas utilisé ?", "HTTP/3 passe par le port UDP 443. Le navigateur apprend qu’un site le parle via une première réponse en TCP, donc une première visite peut ne pas basculer ; mais si UDP ne sort nulle part, un réseau ou un proxy le bloque ou ne transporte pas UDP. Beaucoup de proxys ne portent que TCP."],
        ["Qu’est-ce qu’ECH et pourquoi est-il désactivé ?", "Encrypted Client Hello chiffre le nom du site, que TLS envoie sinon en clair à quiconque sur le chemin. Le navigateur a besoin des clés du site via un enregistrement DNS HTTPS : Firefox ne les lit qu’avec son propre DNS over HTTPS ; Chrome a besoin d’un résolveur qui renvoie les enregistrements HTTPS ; Safari n’utilise pas encore ECH."],
        ["Que signifie un échange de clés classique ?", "Chrome 124+, Firefox 132+ et Safari 26 proposent X25519MLKEM768 par défaut. Un navigateur récent qui finit en X25519 simple indique un intermédiaire qui ouvre sa propre connexion TLS : un antivirus, un proxy d’entreprise ou un client proxy qui termine TLS. Sur un vieux navigateur, c’est juste son âge."],
      ],
    },
    de: {
      seo_title: "HTTP/3-, ECH- und Post-Quanten-TLS-Test · Who Are You",
      seo_desc: "Kostenloser Verbindungstest: ob dein Browser HTTP/3 nutzt, den Namen der Website mit Encrypted Client Hello (ECH) verbirgt und einen Post-Quanten-Schlüssel (X25519MLKEM768) aushandelt – und was ein fehlendes davon über dein Netz oder deinen Proxy sagt. Weder IP noch Rohdaten werden gespeichert, nur anonyme Zähler, wie häufig Sie sind.",
      seo_kw: "HTTP/3 Test, ECH Test, Encrypted Client Hello, Post-Quanten TLS, X25519MLKEM768, QUIC Test, TLS prüfen",
      h1: "HTTP/3-, ECH- und Post-Quanten-Test", og_sub: "Wie modern ist deine Verbindung – und was steht im Weg?",
      intro: "Ein aktueller Browser in einem offenen Netz spricht HTTP/3 über UDP, verbirgt mit ECH, mit welcher Website er sich verbindet, und handelt einen Schlüssel aus, den ein künftiger Quantencomputer nicht knackt. Fehlt eines davon, liegt es oft an etwas auf dem Weg. Das ist deine Verbindung.",
      focus_h: "Deine Verbindung",
      docs: [
        ["Warum wird HTTP/3 nicht genutzt?", "HTTP/3 läuft über UDP-Port 443. Ein Browser erfährt aus einer ersten Antwort über TCP, dass eine Website es spricht, beim ersten Besuch wechselt er also vielleicht noch nicht; kommt UDP aber nirgends hinaus, blockt ein Netz oder Proxy es oder transportiert gar kein UDP. Viele Proxy-Setups tragen nur TCP."],
        ["Was ist ECH, und warum ist es aus?", "Encrypted Client Hello verschlüsselt den Namen der Website, den TLS sonst im Klartext für jeden auf dem Weg schickt. Der Browser braucht die Schlüssel der Website aus einem DNS-HTTPS-Eintrag: Firefox liest sie nur über sein eigenes DNS over HTTPS; Chrome braucht einen Resolver, der HTTPS-Einträge liefert; Safari nutzt ECH noch nicht."],
        ["Was bedeutet ein klassischer Schlüsselaustausch?", "Chrome 124+, Firefox 132+ und Safari 26 bieten standardmäßig X25519MLKEM768 an. Endet ein aktueller Browser bei reinem X25519, deutet das auf etwas dazwischen, das eigene TLS-Verbindungen aufbaut: ein Virenscanner, ein Firmenproxy oder ein Proxy-Client, der TLS terminiert. Bei alten Browsern ist es nur ihr Alter."],
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
      seo_title: "Проверка HTTP/3, ECH и постквантового TLS · Who Are You",
      seo_desc: "Бесплатная проверка соединения: использует ли браузер HTTP/3, скрывает ли имя сайта с помощью Encrypted Client Hello (ECH), согласует ли постквантовый ключ (X25519MLKEM768) и что отсутствие одного из них говорит о сети или прокси. IP и исходные данные не сохраняются — только анонимные счётчики того, насколько вы распространены.",
      seo_kw: "проверка HTTP/3, проверка ECH, encrypted client hello, постквантовый TLS, X25519MLKEM768, проверка QUIC, проверка TLS",
      h1: "Проверка HTTP/3, ECH и постквантового обмена", og_sub: "Насколько современно ваше соединение и что мешает?",
      intro: "Современный браузер в открытой сети говорит по HTTP/3 через UDP, скрывает через ECH, к какому сайту подключается, и согласует ключ, который не взломает будущий квантовый компьютер. Если чего-то нет, причина часто где-то на пути. Вот ваше соединение.",
      focus_h: "Ваше соединение",
      docs: [
        ["Почему не используется HTTP/3?", "HTTP/3 работает через UDP-порт 443. Браузер узнаёт о поддержке из первого ответа по TCP, поэтому при первом визите может ещё не переключиться; но если UDP никуда не выходит, сеть или прокси его блокирует либо вовсе не передаёт UDP. Многие прокси передают только TCP."],
        ["Что такое ECH и почему он выключен?", "Encrypted Client Hello шифрует имя сайта, которое TLS иначе отправляет открытым текстом для всех на пути. Браузеру нужны ключи сайта из DNS-записи HTTPS: Firefox читает их только через свой DNS over HTTPS; Chrome нужен резолвер, отдающий записи HTTPS; Safari пока не использует ECH."],
        ["Что значит классический обмен ключами?", "Chrome 124+, Firefox 132+ и Safari 26 по умолчанию предлагают X25519MLKEM768. Если современный браузер получил обычный X25519, значит, посередине что-то устанавливает собственное TLS-соединение: антивирус, корпоративный прокси или прокси-клиент, завершающий TLS. У старых браузеров это просто возраст."],
      ],
    },
  },
};
