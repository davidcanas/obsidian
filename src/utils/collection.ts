export class Collection<N = string, V = any> extends Map<N, V> {
  add(name: N, value: V) {
    return this.has(name) ? this.get(name) : this.set(name, value);
  }

  remove(name: N) {
    return this.get(name) && this.delete(name);
  }

  find(callback: (item: V) => any) {
    for (const item of this.values()) {
      if (callback(item)) return item;
    }
  }
}
