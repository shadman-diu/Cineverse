/* app.js
   Handles rendering, sample data, live search, filtering, sorting,
   theme toggle, tab switching, and simple scroll/fade-in animations.
   Comments explain logic and structure.
*/

/* -------------------------
   Sample dataset (local)
   -------------------------
   Each item has: title, poster, imdb_rating, genre (comma list),
   type (Movie|Series), release_year, trending_score
*/
const sampleData = [
  {
    title: "The Silent Edge",
    poster: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b6a8d",
    imdb_rating: 8.7,
    genre: "Drama,Thriller",
    type: "Movie",
    release_year: 2022,
    trending_score: 92
  },
  {
    title: "Neon Nights",
    poster: "https://images.unsplash.com/photo-1542204625-0a1b6bca29a4?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=2e4a1",
    imdb_rating: 7.9,
    genre: "Sci-Fi,Action",
    type: "Movie",
    release_year: 2024,
    trending_score: 88
  },
  {
    title: "Homefront Stories",
    poster: "https://images.unsplash.com/photo-1546484959-fc2f768d3f23?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc1",
    imdb_rating: 9.1,
    genre: "Documentary",
    type: "Series",
    release_year: 2021,
    trending_score: 80
  },
  {
    title: "Orbit Protocol",
    poster: "https://images.unsplash.com/photo-1517604931442-7d6f5f2b5b4f?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=def2",
    imdb_rating: 8.2,
    genre: "Sci-Fi,Drama",
    type: "Series",
    release_year: 2023,
    trending_score: 85
  },
  {
    title: "Midtown Heist",
    poster: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=345f",
    imdb_rating: 7.4,
    genre: "Action,Crime",
    type: "Movie",
    release_year: 2019,
    trending_score: 76
  },
  {
    title: "Heartstrings",
    poster: "https://images.unsplash.com/photo-1513358427145-5e5b4f2a2f6d?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=9999",
    imdb_rating: 8.9,
    genre: "Romance,Drama",
    type: "Movie",
    release_year: 2020,
    trending_score: 90
  },
  {
    title: "Byte Wars: Origins",
    poster: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=7777",
    imdb_rating: 8.5,
    genre: "Action,Sci-Fi",
    type: "Series",
    release_year: 2025,
    trending_score: 95
  },
  {
    title: "Legacy of Ash",
    poster: "https://images.unsplash.com/photo-1511203466129-824e631920d2?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=4444",
    imdb_rating: 7.8,
    genre: "Fantasy,Adventure",
    type: "Movie",
    release_year: 2018,
    trending_score: 70
  }
];

/* -------------------------
   App state
   ------------------------- */
const state = {
  data: sampleData.slice(),
  filtered: [],
  query: '',
  type: 'all',
  genre: 'all',
  sort: 'default',
  activeTab: 'all',
  dark: false
};

/* -------------------------
   Selectors
   ------------------------- */
const cardsGrid = document.getElementById('cardsGrid');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const typeFilter = document.getElementById('typeFilter');
const genreFilter = document.getElementById('genreFilter');
const sortBy = document.getElementById('sortBy');
const resultsCount = document.getElementById('resultsCount');
const tabs = document.querySelectorAll('.tab');
const themeToggle = document.getElementById('themeToggle');
const metaTheme = document.getElementById('theme-color-meta');

/* -------------------------
   Utility helpers
   ------------------------- */
function uniq(arr){ return [...new Set(arr)] }
function titleCase(s){ return s.replace(/\b\w/g,ch=>ch.toUpperCase()) }

/* -------------------------
   Init: populate genre options
   ------------------------- */
function populateGenres(){
  const genres = state.data.flatMap(it => it.genre.split(',').map(g=>g.trim()));
  const unique = uniq(genres).sort();
  genreFilter.innerHTML = '<option value="all">All Genres</option>' + unique.map(g=>`<option value="${g}">${g}</option>`).join('');
}
populateGenres();

/* -------------------------
   Render card markup
   ------------------------- */
function createCard(item){
  const div = document.createElement('article');
  div.className = 'card fade-in';
  div.dataset.type = item.type;
  div.dataset.genres = item.genre;
  div.dataset.title = item.title.toLowerCase();
  div.innerHTML = `
    <div class="poster" aria-hidden="true">
      <img loading="lazy" src="${item.poster}" alt="${item.title} poster">
    </div>
    <div class="meta">
      <h4 class="title">${item.title}</h4>
      <div class="sub">${item.type} • ${item.release_year}</div>
      <div class="sub">Genres: ${item.genre}</div>
      <div style="display:flex;gap:10px;align-items:center;margin-top:8px">
        <div class="badge">★ ${item.imdb_rating.toFixed(1)}</div>
        <div class="tag">Trending ${item.trending_score}</div>
      </div>
    </div>
  `;
  return div;
}

/* -------------------------
   Core render function
   ------------------------- */
function render(){
  // apply filters
  let items = state.data.slice();

  // Category tab filter
  if(state.activeTab === 'Trending'){
    items = items.slice().sort((a,b)=>b.trending_score - a.trending_score);
  } else if(state.activeTab === 'TopIMDb'){
    items = items.slice().sort((a,b)=>b.imdb_rating - a.imdb_rating);
  }

  // Type filter
  if(state.type !== 'all'){
    items = items.filter(it => it.type === state.type);
  }

  // Genre filter
  if(state.genre !== 'all'){
    items = items.filter(it => it.genre.split(',').map(g=>g.trim()).includes(state.genre));
  }

  // Search query (live)
  if(state.query.trim()){
    const q = state.query.toLowerCase();
    items = items.filter(it => {
      return it.title.toLowerCase().includes(q) || (it.genre && it.genre.toLowerCase().includes(q));
    });
  }

  // Sorting
  switch(state.sort){
    case 'imdb_desc':
      items.sort((a,b)=>b.imdb_rating - a.imdb_rating);
      break;
    case 'trending_desc':
      items.sort((a,b)=>b.trending_score - a.trending_score);
      break;
    case 'year_desc':
      items.sort((a,b)=>b.release_year - a.release_year);
      break;
    case 'year_asc':
      items.sort((a,b)=>a.release_year - b.release_year);
      break;
    default:
      // keep natural order or previous tab order
      break;
  }

  // Update UI count
  resultsCount.textContent = `${items.length} result${items.length!==1 ? 's' : ''}`;

  // Clear grid and append
  cardsGrid.innerHTML = '';
  const fragment = document.createDocumentFragment();
  items.forEach(it => fragment.appendChild(createCard(it)));
  cardsGrid.appendChild(fragment);

  // Trigger simple scroll-based reveal
  runFadeInOnScroll();
}

/* -------------------------
   Search handlers (live)
   ------------------------- */
let searchDebounce;
searchInput.addEventListener('input', e => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(()=>{
    state.query = e.target.value;
    render();
  }, 120);
});
searchClear.addEventListener('click', ()=>{ searchInput.value=''; state.query=''; render(); });

/* -------------------------
   Filters and sorting handlers
   ------------------------- */
typeFilter.addEventListener('change', e => { state.type = e.target.value; render(); });
genreFilter.addEventListener('change', e => { state.genre = e.target.value; render(); });
sortBy.addEventListener('change', e => { state.sort = e.target.value; render(); });

/* -------------------------
   Tabs
   ------------------------- */
tabs.forEach(tab => tab.addEventListener('click', (ev)=>{
  tabs.forEach(t => t.classList.remove('active'));
  ev.currentTarget.classList.add('active');
  state.activeTab = ev.currentTarget.dataset.cat;
  // Reset sorting when switching to special tabs
  if(state.activeTab === 'Trending') state.sort = 'trending_desc';
  if(state.activeTab === 'TopIMDb') state.sort = 'imdb_desc';
  // update sort select
  sortBy.value = state.sort === 'default' ? 'default' : state.sort;
  render();
}));

/* -------------------------
   Theme toggle
   ------------------------- */
function applyTheme(dark){
  state.dark = !!dark;
  if(state.dark){
    document.body.classList.add('dark');
    metaTheme.setAttribute('content', '#0b1020');
  }else{
    document.body.classList.remove('dark');
    metaTheme.setAttribute('content', '#ffffff');
  }
  // animate theme change via CSS transitions already defined
}
themeToggle.addEventListener('click', ()=> applyTheme(!state.dark));
themeToggle.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') applyTheme(!state.dark) });

/* -------------------------
   Simple fade-in on scroll
   ------------------------- */
function runFadeInOnScroll(){
  const els = document.querySelectorAll('.card');
  const offset = window.innerHeight * 0.85;
  els.forEach((el, idx) => {
    const rect = el.getBoundingClientRect();
    if(rect.top < offset){
      el.style.opacity = 1;
      el.style.animationDelay = `${idx*35}ms`;
    } else {
      el.style.opacity = 0;
      el.style.animationDelay = `0ms`;
    }
  });
}
window.addEventListener('scroll', runFadeInOnScroll);
window.addEventListener('resize', runFadeInOnScroll);

/* -------------------------
   Init render & small UX niceties
   ------------------------- */
(function init(){
  // Apply system preference for theme (simple)
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark);

  // Initial render
  render();

  // slight staggered page animation for header controls
  document.querySelectorAll('.tab, .select, .search-input').forEach((el,i)=> el.style.transitionDelay = `${i*25}ms`);

  // keyboard accessibility: clear search with Escape
  searchInput.addEventListener('keydown', (e)=>{ if(e.key === 'Escape'){ searchInput.value=''; state.query=''; render(); }});

  // Small progressive enhancement: lazy load images handled via loading="lazy"
})();
