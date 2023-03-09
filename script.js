const contentEl = document.getElementById('content');
const btnEl = document.getElementById('btn');

const contentList = [
  {
    title: '🕊 小鳥的故事',
    text: `
    很久很久以前，
    在一片美麗的森林中，
    有一隻小鳥。
    這隻小鳥有著美麗的羽毛和清脆的歌聲，
    每天都在森林中尋找著食物和伴侶，
    享受著自由自在的生活。
    
    有一天，
    小鳥遇到了一場大風暴，
    風暴中的雷電和狂風把它推到了一個陌生的地方。
    這個地方和它熟悉的森林完全不同，
    它不知道該怎麼找到食物和安全的避難處。`
  },
  {
    title: '🕊 小鳥的故事', text: `
    小鳥不斷地飛翔和探索這個陌生的環境。
    這裡有著數不清的小鳥聚集在一起，
    有些鳥類很友好，願意分享它們的食物和知識，
    也有些鳥類對小鳥進行攻擊和欺負。
    
    它們訴說著各自的故事，彼此的快樂和悲傷，
    它們的故事和小鳥的經驗不同。
    小鳥彷彿經歷了許多不同的生活，
    彷彿認識了許多不同的自己。` },
  {
    title: '🕊 小鳥的故事', text: `
    它們雖然各自不同，
    卻如螢火蟲從出生就開始收集光芒，
    風暴將它們注入一個共同的容器中。
    在這個容器裡，每個光芒都會融合在一起，
    成為一個巨大的亮光，
    代表著它們的共同目標和方向。

    它在不同的自己之間連接和共鳴，
    想法在不同的小鳥之間穿梭，
    它相信自己將不再迷失和孤獨。` 
  },
  {
    title: '🕊 小鳥的故事', text: `
    當它陷入相信之中，
    它注意到容器的底部有一個小缺口，
    透過這個小缺口，
    它看到容器外面是它從未見過的鏡子，
    那裡才可以遇見真正的自己，
    那裡有它遇見了但不能完成的事，
    有它必須錯過了才能體驗的事。` 
  },
  {
    title: '🕊 小鳥的故事', text: `
    如果我離開了容器，
    你們會不會悲傷，
    好不容易遇到你們了…
    其它的小鳥在歌唱：
    我們都知道這是必然的，
    時間和空間才能讓我們離開彼此。
    一個在時間和空間中存在的靈魂，
    它的存在才能是短暫而有限的，
    它才能和其它的短暫建立關係，找到彼此。

    小鳥飛向了缺口，
    花瓣一片片地飄落，
    仿佛在告訴它時間的無常和彼此的轉瞬即逝。` 
  },
  {
    title: '🕊 小鳥的故事', text: `
    深深地吸了一口氣，小鳥閉上了眼睛。
    在那片花海中，
    它安靜地睡去了，
    它忠實呈現著自己的樣子，並且永不孤獨。` 
  },
];

let currentIndex = 0;

function renderContent() {
  const currentContent = contentList[currentIndex];
  document.getElementById('title').textContent = currentContent.title;
  document.getElementById('currentIndex-container').textContent = `${currentIndex + 1}`;

  // Fade out the current content before fading in the new content
  contentEl.style.opacity = 0;

  // Wait for the fade out animation to finish before updating the text content
  setTimeout(() => {
    document.getElementById('text').textContent = currentContent.text;
    
    // Fade in the new content
    contentEl.style.opacity = 1;
  }, 500);
}



renderContent();

btnEl.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % contentList.length;
  renderContent();
});
