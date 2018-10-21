export class ModelBuilder<T> {
  public min(): T {
    return {} as T;
  }

  public max(): T {
    return this.min();
  }

  public mix(): T {
    const min = Math.random() >= 0.5;

    if (min) {
      return this.min();
    }

    return this.max();
  }

  public fix(): T {
    return this.min();
  }

  public list(size?: number): T[] {
    const list: T[] = [];

    const maxSize = size || Math.floor(Math.random() * 9 + 1);

    for (let i = 0; i < maxSize; i++) {
      list.push(this.mix());
    }

    return list;
  }
}
