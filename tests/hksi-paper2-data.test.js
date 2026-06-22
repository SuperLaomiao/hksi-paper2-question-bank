import test from "node:test";
import assert from "node:assert/strict";

import { chapters, examMeta, questions } from "../src/hksi-paper2-data.js";

const normalize = (text) => text.replace(/[\u300c\u300d\u300e\u300f\uff0c\u3002\uff01\uff1f\u3001\uff1b\uff1a\s]/g, "").toLowerCase();

test("HKSI Paper 2 question bank preserves phase one and adds a substantial phase two", () => {
  const phaseOne = questions.filter((question) => question.phase === 1);
  const phaseTwo = questions.filter((question) => question.phase === 2);

  assert.equal(phaseOne.length, 219);
  assert.ok(phaseTwo.length >= 200 && phaseTwo.length <= 260);
  assert.equal(examMeta.questionCount, questions.length);

  const ids = new Set(questions.map((question) => question.id));
  assert.equal(ids.size, questions.length);

  for (const question of questions) {
    assert.ok(question.id, "question id is required");
    assert.ok(chapters.some((chapter) => chapter.id === question.chapter), `${question.id} has a known chapter`);
    assert.ok(question.topic, `${question.id} has a topic`);
    assert.ok(question.stem, `${question.id} has a stem`);
    assert.equal(question.options.length, 4, `${question.id} has four options`);
    assert.equal(
      new Set(question.options.map(normalize)).size,
      4,
      `${question.id} has four distinct options`
    );
    assert.ok(question.answer >= 0 && question.answer < question.options.length, `${question.id} has a valid answer`);
    assert.ok(question.explanation, `${question.id} has an explanation`);
    assert.ok(question.source, `${question.id} has a source`);
    assert.ok(question.phase === 1 || question.phase === 2, `${question.id} has a valid phase`);
  }
});

test("HKSI Paper 2 question bank contains no repeated stems or answer statements", () => {
  const stems = questions.map((question) => normalize(question.stem));
  const correctStatements = questions.map((question) => normalize(question.options[question.answer]));

  assert.equal(new Set(stems).size, stems.length);
  assert.equal(new Set(correctStatements).size, correctStatements.length);
});

test("HKSI Paper 2 curated bank gives every chapter a useful practice pool", () => {
  for (const chapter of chapters) {
    const phaseOne = questions.filter((question) => question.chapter === chapter.id && question.phase === 1);
    const phaseTwo = questions.filter((question) => question.chapter === chapter.id && question.phase === 2);
    assert.ok(phaseOne.length >= 30, `chapter ${chapter.id} keeps its phase one pool`);
    assert.equal(phaseTwo.length, 30, `chapter ${chapter.id} has 30 phase two questions`);
  }
});

test("HKSI Paper 2 phase two covers all planned learning formats", () => {
  const phaseTwo = questions.filter((question) => question.phase === 2);
  const formats = new Set(phaseTwo.map((question) => question.format));
  assert.deepEqual(formats, new Set(["細節", "數字期限", "案例", "比較"]));
});

test("HKSI Paper 2 curated bank includes researched official past-paper and sample-test themes", () => {
  assert.ok(questions.some((question) => question.source.includes("2006 官方舊題考點")));
  assert.ok(questions.some((question) => question.source.includes("2023 官方樣題考點")));
});
