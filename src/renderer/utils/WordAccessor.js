import Set from 'renderer/models/Set';

export default class WordAccessor {
  get sets() { return this._sets; }
  get wordCount() { return this._sets.map((set) => set.wordCount).reduce((s1, s2) => s1 + s2, 0); }

  constructor(data) {
    this._sets = data.map((obj) => new Set(obj));
  }
}
