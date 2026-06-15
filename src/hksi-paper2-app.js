import { chapters, examMeta, materials, questions } from "./hksi-paper2-data.js";

const app = document.querySelector("#app");
const storageKey = "hksi-paper2-bank-v1";
const modeLabels = {
  practice: "刷題",
  review: "背題",
  mock: "模考",
  materials: "資料"
};

const scopeLabels = {
  all: "全部",
  fresh: "新題",
  wrong: "錯題",
  marked: "收藏"
};

const defaultState = {
  mode: "practice",
  chapter: "all",
  scope: "all",
  currentId: questions[0].id,
  answers: {},
  bookmarks: [],
  sheetOpen: false,
  mock: null
};

let state = loadState();
let tick = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return { ...defaultState, ...saved };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function icon(name) {
  const icons = {
    star:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.7 5.47 6.04.88-4.37 4.26 1.03 6.02L12 16.79l-5.4 2.84 1.03-6.02-4.37-4.26 6.04-.88L12 3Z"/></svg>',
    check:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m20 6-11 11-5-5"/></svg>',
    x:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    grid:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></svg>',
    flag:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V4h11l-1 5 1 5H5"/></svg>',
    reset:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5"/></svg>',
    book:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h10a4 4 0 0 1 4 4v12H8a3 3 0 0 0-3 3V4Zm0 0v19"/></svg>',
    timer:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 2h4M12 14l3-3M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/></svg>',
    link:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.07 0l2-2a5 5 0 0 0-7.07-7.07l-1.15 1.15M14 11a5 5 0 0 0-7.07 0l-2 2A5 5 0 0 0 12 20.07l1.15-1.15"/></svg>'
  };
  return icons[name] ?? "";
}

function chapterById(id) {
  return chapters.find((chapter) => chapter.id === Number(id));
}

function questionById(id) {
  return questions.find((question) => question.id === id) ?? questions[0];
}

function filteredQuestions() {
  return questions.filter((question) => {
    const chapterMatch = state.chapter === "all" || question.chapter === Number(state.chapter);
    const answer = state.answers[question.id];
    const isBookmarked = state.bookmarks.includes(question.id);
    const scopeMatch =
      state.scope === "all" ||
      (state.scope === "fresh" && !answer) ||
      (state.scope === "wrong" && answer && !answer.correct) ||
      (state.scope === "marked" && isBookmarked);
    return chapterMatch && scopeMatch;
  });
}

function currentPracticeQuestion() {
  const list = filteredQuestions();
  if (!list.length) return null;
  const currentInList = list.some((question) => question.id === state.currentId);
  if (!currentInList) state.currentId = list[0].id;
  return questionById(state.currentId);
}

function stats() {
  const answered = Object.values(state.answers);
  const correct = answered.filter((answer) => answer.correct).length;
  const wrong = answered.filter((answer) => !answer.correct).length;
  const pct = answered.length ? Math.round((correct / answered.length) * 100) : 0;
  return {
    answered: answered.length,
    correct,
    wrong,
    pct,
    fresh: questions.length - answered.length,
    marked: state.bookmarks.length
  };
}

function answeredFor(question) {
  return state.answers[question.id];
}

function isMarked(question) {
  return state.bookmarks.includes(question.id);
}

function optionLetter(index) {
  return String.fromCharCode(65 + index);
}

function clampIndex(index, length) {
  if (!length) return 0;
  if (index < 0) return length - 1;
  if (index >= length) return 0;
  return index;
}

function movePractice(delta) {
  const list = filteredQuestions();
  if (!list.length) return;
  const currentIndex = list.findIndex((question) => question.id === state.currentId);
  const next = list[clampIndex(currentIndex + delta, list.length)];
  state.currentId = next.id;
  state.sheetOpen = false;
  saveState();
  render();
}

function selectPracticeAnswer(index) {
  const question = currentPracticeQuestion();
  if (!question) return;
  const correct = index === question.answer;
  const prev = state.answers[question.id];
  state.answers[question.id] = {
    selected: index,
    correct,
    attempts: (prev?.attempts ?? 0) + 1,
    lastAt: new Date().toISOString()
  };
  saveState();
  render();
}

function toggleBookmark(questionId = state.currentId) {
  state.bookmarks = state.bookmarks.includes(questionId)
    ? state.bookmarks.filter((id) => id !== questionId)
    : [...state.bookmarks, questionId];
  saveState();
  render();
}

function resetProgress() {
  state.answers = {};
  state.bookmarks = [];
  state.sheetOpen = false;
  state.mock = null;
  saveState();
  render();
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

function startMock() {
  const ids = shuffle(questions).slice(0, 40).map((question) => question.id);
  state.mock = {
    ids,
    index: 0,
    answers: {},
    startedAt: Date.now(),
    duration: 60 * 60 * 1000,
    finishedAt: null
  };
  state.mode = "mock";
  state.sheetOpen = false;
  saveState();
  render();
}

function mockRemaining() {
  if (!state.mock || state.mock.finishedAt) return 0;
  return Math.max(0, state.mock.duration - (Date.now() - state.mock.startedAt));
}

function formatTime(ms) {
  const total = Math.ceil(ms / 1000);
  const minutes = Math.floor(total / 60).toString().padStart(2, "0");
  const seconds = (total % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function currentMockQuestion() {
  if (!state.mock) return null;
  return questionById(state.mock.ids[state.mock.index]);
}

function selectMockAnswer(index) {
  if (!state.mock || state.mock.finishedAt) return;
  const question = currentMockQuestion();
  state.mock.answers[question.id] = index;
  saveState();
  render();
}

function moveMock(delta) {
  if (!state.mock) return;
  state.mock.index = clampIndex(state.mock.index + delta, state.mock.ids.length);
  state.sheetOpen = false;
  saveState();
  render();
}

function finishMock() {
  if (!state.mock) return;
  state.mock.finishedAt = Date.now();
  state.mock.ids.forEach((id) => {
    const question = questionById(id);
    const selected = state.mock.answers[id];
    if (Number.isInteger(selected)) {
      const prev = state.answers[id];
      state.answers[id] = {
        selected,
        correct: selected === question.answer,
        attempts: (prev?.attempts ?? 0) + 1,
        lastAt: new Date().toISOString()
      };
    }
  });
  saveState();
  render();
}

function mockScore() {
  if (!state.mock) return null;
  const correct = state.mock.ids.filter((id) => {
    const question = questionById(id);
    return state.mock.answers[id] === question.answer;
  }).length;
  const answered = Object.keys(state.mock.answers).length;
  return {
    correct,
    answered,
    total: state.mock.ids.length,
    pct: Math.round((correct / state.mock.ids.length) * 100)
  };
}

function render() {
  if (tick) {
    clearInterval(tick);
    tick = null;
  }

  const body =
    state.mode === "materials"
      ? renderMaterials()
      : state.mode === "mock"
        ? renderMock()
        : renderStudy();

  app.innerHTML = `
    <div class="app-shell">
      ${renderHeader()}
      <div class="layout">
        ${renderSyllabus()}
        <main class="study-surface">${body}</main>
        ${renderInsights()}
      </div>
      ${renderBottomNav()}
    </div>
  `;

  if (state.mode === "mock" && state.mock && !state.mock.finishedAt) {
    tick = setInterval(() => {
      if (mockRemaining() <= 0) finishMock();
      const timerNode = document.querySelector("[data-timer]");
      if (timerNode) timerNode.textContent = formatTime(mockRemaining());
    }, 1000);
  }
}

function renderHeader() {
  return `
    <header class="topbar">
      <div class="brand">
        <span class="brand-mark">P2</span>
        <div>
          <h1>${examMeta.title}</h1>
          <p>${examMeta.subtitle}</p>
        </div>
      </div>
      <nav class="mode-tabs" aria-label="模式">
        ${Object.entries(modeLabels)
          .map(
            ([mode, label]) => `
              <button class="mode-tab ${state.mode === mode ? "is-active" : ""}" data-mode="${mode}">
                ${label}
              </button>
            `
          )
          .join("")}
      </nav>
    </header>
  `;
}

function renderSyllabus() {
  const chapterStats = chapters
    .map((chapter) => {
      const items = questions.filter((question) => question.chapter === chapter.id);
      const done = items.filter((question) => state.answers[question.id]).length;
      return { ...chapter, total: items.length, done };
    })
    .map(
      (chapter) => `
        <button class="chapter-button ${state.chapter === chapter.id ? "is-active" : ""}" data-chapter="${chapter.id}">
          <span class="chapter-accent" style="background:${chapter.accent}"></span>
          <span>
            <strong>第 ${chapter.id} 章</strong>
            <small>${chapter.title}</small>
          </span>
          <em>${chapter.done}/${chapter.total}</em>
        </button>
      `
    )
    .join("");

  return `
    <aside class="syllabus-panel">
      <button class="chapter-button ${state.chapter === "all" ? "is-active" : ""}" data-chapter="all">
        <span class="chapter-accent all"></span>
        <span>
          <strong>全部章節</strong>
          <small>${questions.length} 道題</small>
        </span>
        <em>${stats().answered}/${questions.length}</em>
      </button>
      ${chapterStats}
    </aside>
  `;
}

function renderInsights() {
  const summary = stats();
  const activeChapter = state.chapter === "all" ? null : chapterById(state.chapter);
  const recentWrong = questions.filter((question) => state.answers[question.id] && !state.answers[question.id].correct).slice(-4);

  return `
    <aside class="insight-panel">
      <section class="summary-card">
        <div class="summary-top">
          <span>${examMeta.version}</span>
          <strong>${examMeta.examFormat}</strong>
        </div>
        <div class="ring" style="--value:${summary.pct}">
          <span>${summary.pct}%</span>
        </div>
        <div class="mini-stats">
          <span><strong>${summary.correct}</strong> 正確</span>
          <span><strong>${summary.wrong}</strong> 錯題</span>
          <span><strong>${summary.marked}</strong> 收藏</span>
        </div>
      </section>
      <section class="resource-card">
        <h2>${activeChapter ? activeChapter.title : "考前重點"}</h2>
        <p>${examMeta.notice}</p>
      </section>
      <section class="wrong-card">
        <h2>最近錯題</h2>
        ${
          recentWrong.length
            ? recentWrong
                .map(
                  (question) => `
                    <button data-jump="${question.id}">
                      <span>第 ${question.chapter} 章</span>
                      <strong>${question.topic}</strong>
                    </button>
                  `
                )
                .join("")
            : `<p class="empty-copy">還沒有錯題。</p>`
        }
      </section>
    </aside>
  `;
}

function renderStudy() {
  const question = currentPracticeQuestion();
  const list = filteredQuestions();
  if (!question) {
    return `
      <section class="empty-state">
        <h2>這個篩選暫時沒有題目</h2>
        <p>換一個章節或篩選條件即可繼續。</p>
      </section>
    `;
  }
  const currentIndex = list.findIndex((item) => item.id === question.id);
  return `
    ${renderFilterBar(list)}
    ${renderQuestionCard(question, {
      index: currentIndex,
      total: list.length,
      selected: answeredFor(question)?.selected,
      reveal: state.mode === "review" || Boolean(answeredFor(question)),
      locked: false,
      context: state.mode
    })}
    ${renderStudyControls(question)}
    ${state.sheetOpen ? renderAnswerSheet(list, question.id) : ""}
  `;
}

function renderFilterBar(list) {
  return `
    <section class="filter-bar">
      <div>
        <span class="progress-flag">${icon("flag")} ${list.findIndex((q) => q.id === state.currentId) + 1}/${list.length || 0}</span>
        <strong>${state.mode === "review" ? "背題模式" : "刷題模式"}</strong>
      </div>
      <div class="scope-tabs" aria-label="題目篩選">
        ${Object.entries(scopeLabels)
          .map(
            ([scope, label]) => `
              <button class="${state.scope === scope ? "is-active" : ""}" data-scope="${scope}">${label}</button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderQuestionCard(question, options) {
  const { index, total, selected, reveal, locked, context } = options;
  const chapter = chapterById(question.chapter);
  const correctSelected = selected === question.answer;
  const chosen = Number.isInteger(selected);
  return `
    <article class="question-card">
      <div class="question-meta">
        <span class="type-badge">單選</span>
        <span>第 ${question.chapter} 章 · ${question.topic}</span>
        <span>${question.difficulty}</span>
        <button
          class="icon-button ${isMarked(question) ? "is-marked" : ""}"
          data-bookmark="${question.id}"
          aria-label="收藏題目"
          title="收藏題目"
        >
          ${icon("star")}
        </button>
      </div>
      <h2>${question.stem.replace(/\n/g, "<br />")}</h2>
      <div class="option-list">
        ${question.options
          .map((option, optionIndex) => {
            const isSelected = selected === optionIndex;
            const isCorrect = reveal && question.answer === optionIndex;
            const isWrong = reveal && isSelected && !isCorrect;
            return `
              <button
                class="option-button ${isSelected ? "is-selected" : ""} ${isCorrect ? "is-correct" : ""} ${isWrong ? "is-wrong" : ""}"
                data-answer="${optionIndex}"
                ${locked ? "disabled" : ""}
              >
                <span class="option-letter">${isCorrect ? icon("check") : isWrong ? icon("x") : optionLetter(optionIndex)}</span>
                <strong>${option}</strong>
              </button>
            `;
          })
          .join("")}
      </div>
      ${
        reveal
          ? `
            <section class="answer-panel ${chosen && correctSelected ? "is-pass" : chosen ? "is-fail" : ""}">
              <div>
                <span>正確答案</span>
                <strong>${optionLetter(question.answer)}</strong>
                ${
                  chosen
                    ? `<small>${correctSelected ? "答對了" : `你選擇 ${optionLetter(selected)}`}</small>`
                    : `<small>背題模式</small>`
                }
              </div>
              <p><strong>解析：</strong>${question.explanation}</p>
              <p class="source-line">${question.source}</p>
            </section>
          `
          : context === "practice"
            ? `<button class="ghost-button" data-show-answer>先看解析</button>`
            : ""
      }
      <div class="question-footer">
        <span>題號 ${index + 1} / ${total}</span>
        <span style="color:${chapter.accent}">${chapter.short}</span>
      </div>
    </article>
  `;
}

function renderStudyControls(question) {
  return `
    <section class="control-row">
      <button class="secondary-button" data-nav="-1">上一題</button>
      <button class="secondary-button" data-open-sheet>${icon("grid")} 答題卡</button>
      <button class="primary-button" data-nav="1">下一題</button>
    </section>
  `;
}

function renderAnswerSheet(list, activeId, mock = false) {
  return `
    <section class="answer-sheet">
      <div class="sheet-head">
        <h2>答題卡</h2>
        <button class="icon-button" data-close-sheet aria-label="收起答題卡" title="收起答題卡">${icon("x")}</button>
      </div>
      <div class="sheet-grid">
        ${list
          .map((question, index) => {
            const answer = mock ? state.mock?.answers[question.id] : state.answers[question.id];
            const done = mock ? Number.isInteger(answer) : Boolean(answer);
            const wrong = !mock && done && !answer.correct;
            return `
              <button
                class="${question.id === activeId ? "is-active" : ""} ${done ? "is-done" : ""} ${wrong ? "is-wrong" : ""}"
                data-jump="${question.id}"
              >
                ${index + 1}
              </button>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderMock() {
  if (!state.mock) {
    return `
      <section class="mock-start">
        <div>
          <span class="type-badge">40 題 / 60 分鐘</span>
          <h2>Paper 2 模擬測驗</h2>
          <p>系統會從 84 道題中隨機抽 40 題。提交後才顯示分數和解析。</p>
        </div>
        <button class="primary-button" data-start-mock>${icon("timer")} 開始模考</button>
      </section>
    `;
  }

  const question = currentMockQuestion();
  const list = state.mock.ids.map(questionById);
  const score = mockScore();
  const selected = state.mock.answers[question.id];
  const finished = Boolean(state.mock.finishedAt);

  return `
    <section class="mock-status">
      <div>
        <span>${finished ? "已完成" : "剩餘時間"}</span>
        <strong data-timer>${finished ? `${score.pct}%` : formatTime(mockRemaining())}</strong>
      </div>
      <div>
        <span>作答</span>
        <strong>${score.answered}/${score.total}</strong>
      </div>
      <button class="secondary-button" data-reset-mock>${icon("reset")} 重開</button>
      <button class="primary-button" data-submit-mock ${finished ? "disabled" : ""}>提交模考</button>
    </section>
    ${
      finished
        ? `
          <section class="score-card ${score.pct >= 70 ? "is-pass" : "is-fail"}">
            <strong>${score.correct}/${score.total}</strong>
            <span>${score.pct >= 70 ? "達到 70% 合格線" : "未達 70% 合格線"}</span>
          </section>
        `
        : ""
    }
    ${renderQuestionCard(question, {
      index: state.mock.index,
      total: state.mock.ids.length,
      selected,
      reveal: finished,
      locked: finished,
      context: "mock"
    })}
    <section class="control-row">
      <button class="secondary-button" data-mock-nav="-1">上一題</button>
      <button class="secondary-button" data-open-sheet>${icon("grid")} 答題卡</button>
      <button class="primary-button" data-mock-nav="1">下一題</button>
    </section>
    ${state.sheetOpen ? renderAnswerSheet(list, question.id, true) : ""}
  `;
}

function renderMaterials() {
  return `
    <section class="materials-head">
      <div>
        <span class="type-badge">官方資料</span>
        <h2>考試材料與真題入口</h2>
        <p>${examMeta.notice}</p>
      </div>
      <button class="secondary-button" data-reset>${icon("reset")} 清空進度</button>
    </section>
    <section class="material-grid">
      ${materials
        .map(
          (item) => `
            <a class="material-card" href="${item.url}" target="_blank" rel="noreferrer">
              <span>${item.tag}</span>
              <strong>${item.title}</strong>
              <p>${item.note}</p>
              <em>${icon("link")} 打開</em>
            </a>
          `
        )
        .join("")}
    </section>
  `;
}

function renderBottomNav() {
  const summary = stats();
  return `
    <nav class="bottom-nav" aria-label="快捷操作">
      <button data-bottom="share">${icon("book")} ${questions.length} 題</button>
      <button data-bookmark="${state.currentId || questions[0].id}">${icon("star")} 收藏 ${summary.marked}</button>
      <button data-bottom="wrong">${icon("x")} 錯題 ${summary.wrong}</button>
      <button data-open-sheet>${icon("grid")} 答題卡</button>
    </nav>
  `;
}

function handleClick(event) {
  const target = event.target.closest("button, a");
  if (!target || target.tagName === "A") return;

  if (target.dataset.mode) {
    state.mode = target.dataset.mode;
    state.sheetOpen = false;
    saveState();
    render();
    return;
  }

  if (target.dataset.chapter) {
    state.chapter = target.dataset.chapter === "all" ? "all" : Number(target.dataset.chapter);
    state.currentId = filteredQuestions()[0]?.id ?? questions[0].id;
    state.sheetOpen = false;
    saveState();
    render();
    return;
  }

  if (target.dataset.scope) {
    state.scope = target.dataset.scope;
    state.currentId = filteredQuestions()[0]?.id ?? questions[0].id;
    state.sheetOpen = false;
    saveState();
    render();
    return;
  }

  if (target.dataset.answer) {
    const answer = Number(target.dataset.answer);
    if (state.mode === "mock") selectMockAnswer(answer);
    else selectPracticeAnswer(answer);
    return;
  }

  if (target.dataset.showAnswer !== undefined) {
    const question = currentPracticeQuestion();
    state.answers[question.id] = {
      selected: null,
      correct: false,
      attempts: (state.answers[question.id]?.attempts ?? 0) + 1,
      lastAt: new Date().toISOString()
    };
    saveState();
    render();
    return;
  }

  if (target.dataset.nav) {
    movePractice(Number(target.dataset.nav));
    return;
  }

  if (target.dataset.mockNav) {
    moveMock(Number(target.dataset.mockNav));
    return;
  }

  if (target.dataset.bookmark) {
    toggleBookmark(target.dataset.bookmark);
    return;
  }

  if (target.dataset.openSheet !== undefined) {
    state.sheetOpen = !state.sheetOpen;
    saveState();
    render();
    return;
  }

  if (target.dataset.closeSheet !== undefined) {
    state.sheetOpen = false;
    saveState();
    render();
    return;
  }

  if (target.dataset.jump) {
    if (state.mode === "mock" && state.mock) {
      state.mock.index = state.mock.ids.indexOf(target.dataset.jump);
    } else {
      state.currentId = target.dataset.jump;
      state.mode = state.mode === "materials" ? "practice" : state.mode;
    }
    state.sheetOpen = false;
    saveState();
    render();
    return;
  }

  if (target.dataset.startMock !== undefined) {
    startMock();
    return;
  }

  if (target.dataset.submitMock !== undefined) {
    finishMock();
    return;
  }

  if (target.dataset.resetMock !== undefined) {
    state.mock = null;
    state.sheetOpen = false;
    saveState();
    render();
    return;
  }

  if (target.dataset.reset !== undefined) {
    resetProgress();
    return;
  }

  if (target.dataset.bottom === "share") {
    state.mode = "practice";
    state.chapter = "all";
    state.scope = "all";
    state.currentId = questions[0].id;
    state.sheetOpen = false;
    saveState();
    render();
    return;
  }

  if (target.dataset.bottom === "wrong") {
    state.mode = "practice";
    state.scope = "wrong";
    state.currentId = filteredQuestions()[0]?.id ?? questions[0].id;
    state.sheetOpen = false;
    saveState();
    render();
  }
}

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    state.mode === "mock" ? moveMock(1) : movePractice(1);
  }
  if (event.key === "ArrowLeft") {
    state.mode === "mock" ? moveMock(-1) : movePractice(-1);
  }
});

app.addEventListener("click", handleClick);
render();
